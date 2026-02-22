import type { NextRequest } from 'next/server'
import { createGroq } from '@ai-sdk/groq'
import { createOpenAI } from '@ai-sdk/openai'
import type { ModelMessage } from '@ai-sdk/provider-utils'
import {
  createUIMessageStream,
  createUIMessageStreamResponse,
  streamText,
  type LanguageModel,
  type ToolSet
} from 'ai'

export const runtime = 'edge'

let cachedModel:
  | {
      model: LanguageModel
      isGroq: boolean
      openaiModel?: string
      openaiProvider?: ReturnType<typeof createOpenAI>
    }
  | undefined
let cachedGroqModels: Map<string, LanguageModel> = new Map()

/**
 * Helper method to dynamically select and configure the AI model
 * based on environment variables.
 *
 * @param requestedModel - Optional model ID requested by the client (Groq models)
 * @returns {object} Configured language model and provider metadata (Groq or OpenAI)
 */
function getModel(requestedModel?: string): {
  model: LanguageModel
  isGroq: boolean
  openaiModel?: string
  openaiProvider?: ReturnType<typeof createOpenAI>
} {
  // Check if Groq credentials are provided (Priority 1)
  const groqApiKey = process.env.GROQ_API_KEY
  const groqModel = requestedModel || process.env.GROQ_MODEL || 'llama-3.1-8b-instant'

  console.log('[Chat API] Provider check:', {
    groqApiKey: groqApiKey ? '***' : 'undefined',
    groqModel,
    openaiApiKey: process.env.OPENAI_API_KEY ? '***' : 'undefined'
  })

  if (groqApiKey) {
    // Use Groq - check if model is already cached
    if (cachedGroqModels.has(groqModel)) {
      console.log('[Chat API] Using cached Groq model:', groqModel)
      return {
        model: cachedGroqModels.get(groqModel)!,
        isGroq: true
      }
    }

    // Use Groq
    console.log('[Chat API] Using Groq provider with model:', groqModel)
    const groq = createGroq({
      apiKey: groqApiKey
    })
    const model = groq(groqModel)
    cachedGroqModels.set(groqModel, model)
    return {
      model,
      isGroq: true
    }
  }

  // For non-Groq providers, use the original caching strategy
  if (cachedModel) {
    return cachedModel
  }

  // Fallback to OpenAI (Priority 2)
  const openaiApiKey = process.env.OPENAI_API_KEY
  let openaiBaseUrl = process.env.OPENAI_API_BASE_URL || 'https://api.openai.com/v1'
  const openaiModel = process.env.OPENAI_MODEL || 'gpt-4o-mini'
  // Ensure baseURL ends with /v1 for OpenAI-compatible APIs
  if (!openaiBaseUrl.endsWith('/v1')) {
    openaiBaseUrl = openaiBaseUrl.replace(/\/$/, '') + '/v1'
  }
  if (!openaiApiKey) {
    throw new Error(
      'No AI provider configured. Please set either Groq or OpenAI credentials in environment variables.'
    )
  }

  const openai = createOpenAI({
    apiKey: openaiApiKey,
    baseURL: openaiBaseUrl
  })

  cachedModel = {
    model: openai.chat(openaiModel),
    isGroq: false,
    openaiModel,
    openaiProvider: openai
  }
  return cachedModel
}

type MessageContent =
  | string
  | Array<
      | { type: 'text'; text: string }
      | { type: 'image'; image: string | URL }
      | {
          type: 'document'
          name: string
          content: string
          mimeType: string
          images?: Array<{
            pageNumber: number
            name: string
            width: number
            height: number
            dataUrl: string
          }>
        }
    >

type ChatCompletionMessage = {
  role: 'assistant' | 'user' | 'system'
  content: MessageContent
}

function convertToCoreMessage(msg: ChatCompletionMessage): ModelMessage {
  if (msg.role === 'system') {
    return {
      role: 'system',
      content: typeof msg.content === 'string' ? msg.content : ''
    }
  }

  if (msg.role === 'user') {
    if (typeof msg.content === 'string') {
      return {
        role: 'user',
        content: msg.content
      }
    }
    return {
      role: 'user',
      content: msg.content.flatMap((part) => {
        if (part.type === 'text') {
          return [{ type: 'text', text: part.text }]
        } else if (part.type === 'image') {
          return [{ type: 'image', image: part.image }]
        } else {
          // Convert document to text and include images
          const result: Array<
            { type: 'text'; text: string } | { type: 'image'; image: string | URL }
          > = []

          // Add document text
          result.push({
            type: 'text',
            text: `[Document: ${part.name}]\n\n${part.content}`
          })

          // Add document images if present
          if (part.images && part.images.length > 0) {
            result.push({
              type: 'text',
              text: `\n\n[This document contains ${part.images.length} image(s)]`
            })

            part.images.forEach((img) => {
              result.push({
                type: 'image',
                image: img.dataUrl
              })
            })
          }

          return result
        }
      })
    }
  }

  // assistant
  return {
    role: 'assistant',
    content: typeof msg.content === 'string' ? msg.content : ''
  }
}

export async function POST(req: NextRequest): Promise<Response> {
  try {
    const toToolSetEntry = <T>(tool: T): ToolSet[string] => tool as ToolSet[string]
    const { prompt, messages, input, model: requestedModel } = (await req.json()) as {
      prompt: string
      messages: ChatCompletionMessage[]
      input: MessageContent
      model?: string
    }

    const acceptHeader = req.headers.get('accept') ?? ''
    const wantsUiStream = acceptHeader.includes('text/event-stream')

    const messagesWithHistory: ModelMessage[] = [
      { role: 'system', content: prompt },
      ...messages.map(convertToCoreMessage),
      convertToCoreMessage({ role: 'user', content: input })
    ]

    const { model, isGroq, openaiModel, openaiProvider } = getModel(requestedModel)

    const runStream = async () => {
      if (isGroq) {
        console.log('[Chat API] Using Groq provider:', {
          provider: 'groq',
          model: model
        })

        // Groq doesn't support web search tools like OpenAI
        return streamText({
          model,
          messages: messagesWithHistory
        })
      }

      if (openaiProvider && openaiModel) {
        try {
          const tools = {
            // OpenAI Web Search (preview)
            // The model will automatically decide when to use this tool
            web_search_preview: toToolSetEntry(
              openaiProvider.tools.webSearchPreview({
                searchContextSize: 'high'
              })
            )
          } satisfies ToolSet

          return await streamText({
            model: openaiProvider.responses(openaiModel),
            messages: messagesWithHistory,
            tools
          })
        } catch (error) {
          console.error('[Chat API] Web search failed, falling back to chat:', error)
        }
      }

      console.log('[Chat API] Chat completion fallback:', {
        provider: 'openai',
        model: openaiModel ?? 'unknown'
      })

      return streamText({
        model,
        messages: messagesWithHistory
      })
    }

    if (!wantsUiStream) {
      const result = await runStream()
      return result.toTextStreamResponse()
    }

    const stream = createUIMessageStream({
      execute: async ({ writer }) => {
        const result = await runStream()
        writer.merge(result.toUIMessageStream({ sendSources: true, sendReasoning: false }))
      },
      onFinish: ({ finishReason, responseMessage }) => {
        console.log('[Chat API] UI stream finished:', {
          finishReason,
          messageId: responseMessage?.id
        })
      }
    })

    return createUIMessageStreamResponse({
      stream
    })
  } catch (error) {
    console.error('[Chat API] Error:', error)
    return new Response(
      JSON.stringify({
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
