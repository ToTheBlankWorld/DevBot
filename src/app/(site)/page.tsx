'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-primary text-2xl font-bold">DevBot</span>
            </div>
            <Link href="/chat">
              <Button>Start Chatting</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Meet <span className="text-primary">DevBot</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground sm:text-xl">
            Experience advanced AI conversations powered by Groq's lightning-fast inference engine.
            Choose from multiple state-of-the-art models for different needs.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/chat">
              <Button size="lg" className="gap-2">
                Get Started <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" asChild>
              <a href="https://github.com/ToTheBlankWorld" target="_blank" rel="noopener noreferrer">
                View on GitHub
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Prompt Examples Container */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex h-[600px] w-full flex-col rounded-2xl border border-border/50 bg-card shadow-lg overflow-hidden">
          {/* Example Messages */}
          <div className="flex-1 space-y-6 overflow-y-auto rounded-t-xl bg-slate-50 p-4 text-sm leading-6 text-slate-900 dark:bg-slate-900/50 dark:text-slate-300 sm:text-base sm:leading-7">
            <div className="flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-500">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold">U</span>
              </div>
              <div className="rounded-2xl rounded-tl-none bg-slate-200 p-3 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                <p>Explain quantum computing in simple terms</p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-150">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold">AI</span>
              </div>
              <div className="rounded-2xl rounded-tr-none bg-slate-100 p-3 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                <p>
                  Quantum computing is a new type of computing that relies on the principles of quantum physics. 
                  Unlike traditional bits that are either 0 or 1, quantum bits (qubits) can be in superposition - 
                  both 0 and 1 simultaneously. This allows quantum computers to process certain problems exponentially 
                  faster than classical computers.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 animate-in fade-in slide-in-from-top-2 duration-500 delay-300">
              <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold">U</span>
              </div>
              <div className="rounded-2xl rounded-tl-none bg-slate-200 p-3 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                <p>What are three applications of quantum computing?</p>
              </div>
            </div>

            <div className="flex flex-row-reverse items-start gap-3 animate-in fade-in slide-in-from-bottom-2 duration-500 delay-500">
              <div className="h-8 w-8 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                <span className="text-xs font-semibold">AI</span>
              </div>
              <div className="rounded-2xl rounded-tr-none bg-slate-100 p-3 dark:bg-slate-800 sm:max-w-md md:max-w-2xl">
                <p>
                  Three promising applications are: 1) Drug Discovery - simulating molecular interactions, 
                  2) Optimization - solving complex logistics problems, 3) Cryptography - breaking current 
                  encryption and developing quantum-resistant alternatives.
                </p>
              </div>
            </div>
          </div>

          {/* Input Area */}
          <div className="border-t border-border/30 bg-background p-4">
            <div className="relative">
              <textarea
                className="block w-full resize-none rounded-xl border border-border bg-slate-100 p-3 text-sm text-slate-900 placeholder:text-slate-400 dark:bg-slate-800 dark:text-slate-200 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Try asking me something..."
                rows={1}
                disabled
              />
              <button
                disabled
                className="absolute bottom-2 right-2.5 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 focus:outline-none disabled:opacity-50"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Powered by Groq's ultra-fast inference engine, get responses in milliseconds.</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-2">Multiple Models</h3>
            <p className="text-muted-foreground">Switch between Llama, Mixtral, and other state-of-the-art models instantly.</p>
          </div>
          <div className="rounded-lg border border-border p-6">
            <h3 className="text-lg font-semibold mb-2">Open Source</h3>
            <p className="text-muted-foreground">Built with transparency and community. Check us out on GitHub.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold">Ready to chat with AI?</h2>
        <p className="mt-4 text-lg text-muted-foreground">Start exploring the power of advanced AI conversations right now.</p>
        <Link href="/chat" className="mt-8 inline-block">
          <Button size="lg">
            Launch DevBot <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </section>
    </div>
  )
}
