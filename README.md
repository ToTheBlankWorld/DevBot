# DevBot - Modern AI Chat Application

A cutting-edge AI chatbot built with Next.js, powered by Groq's lightning-fast LLMs, featuring dynamic theme system, smooth animations, and intelligent model selection.

**Live Demo:** [Visit DevBot on Vercel](#deployment)

---

## ✨ Features

### 💬 Core Chat Features
- **Real-time Streaming Chat** - Instant responses with token-by-token streaming
- **Multiple AI Models** - Switch between Llama 3.1 8B, 70B, and Mixtral 8x7B
- **Persistent Chat History** - All conversations saved locally
- **Chat Management** - Rename, pin, delete conversations with smooth interactions
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### 🎨 UI/UX Features
- **5+ Dynamic Themes** - Beautiful theme system with real-time switching
- **Smooth Animations** - Professional sidebar animations (slide + rotate effect)
- **Theme Modal Dialog** - Easy theme selection interface
- **Persona Library** - Switch between different AI personalities
- **Model Selector** - Quick model switching with descriptions
- **Animated Landing Page** - Engaging homepage with prompt examples

### 🚀 Performance
- **Next.js 16 Turbopack** - Ultra-fast builds and hot reload
- **Streaming API Responses** - Smooth, real-time message display
- **Optimized Bundle** - Lightweight and fast-loading
- **Server-Sent Events** - Efficient real-time communication

---

## 🛠 Tech Stack

| Component | Technology |
|-----------|-----------|
| **Framework** | Next.js 16.1.6 with Turbopack |
| **UI Library** | React 19 + Shadcn/ui |
| **Styling** | Tailwind CSS v4 |
| **AI Provider** | Groq API (@ai-sdk/groq v3.0.24) |
| **Streaming** | Vercel AI SDK v6 |
| **Icons** | Lucide React |
| **Type Safety** | TypeScript |
| **State Management** | React Context API + Hooks |

---

## 🤖 Available AI Models

### 1. Llama 3.1 8B (Default)
- **Speed:** ⚡ Lightning Fast
- **Use Case:** Quick responses, general chat
- **Best For:** Real-time conversations, prototyping
- **Context Limit:** 8,000 tokens

### 2. Llama 3.1 70B
- **Speed:** 🐢 Slower but capable
- **Use Case:** Complex reasoning, detailed analysis
- **Best For:** In-depth questions, problem-solving
- **Context Limit:** 8,000 tokens (stricter output limits)

### 3. Mixtral 8x7B
- **Speed:** 🎯 Balanced
- **Use Case:** Reasoning tasks, long context
- **Best For:** Multi-turn conversations, code generation
- **Context Limit:** 32,768 tokens (longest context)

---

## 📋 Prerequisites

- **Node.js** 18+ with npm/yarn
- **Git** for version control
- **Groq API Key** (free from [console.groq.com](https://console.groq.com) - no credit card required!)
- **GitHub Account** (for repository)
- **Vercel Account** (optional, for deployment)

---

## 🚀 Quick Start

### Option 1: Local Development

```bash
# 1. Clone repository
git clone https://github.com/ToTheBlankWorld/DevBot.git
cd DevBot

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local

# 4. Add your Groq API key to .env.local
# Visit https://console.groq.com to get your free API key
# NEXT_PUBLIC_GROQ_API_KEY=gsk_your_key_here

# 5. Start development server
npm run dev

# 6. Open in browser
# Navigate to http://localhost:3000
```

### Option 2: Deploy to Vercel (Recommended)

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed Vercel deployment guide.

```bash
# Quick Vercel setup
npm install -g vercel
vercel
```

---

## 📁 Project Structure

```
DevBot/
├── src/
│   ├── app/
│   │   ├── (site)/              # Landing page
│   │   │   └── page.tsx
│   │   ├── chat/                # Chat application
│   │   │   └── page.tsx
│   │   ├── api/
│   │   │   └── chat/            # Chat API endpoint
│   │   │       └── route.ts
│   │   ├── layout.tsx           # Root layout
│   │   └── globals.css
│   ├── components/
│   │   ├── chat/
│   │   │   ├── sidebar.tsx      # Main navigation sidebar
│   │   │   ├── model-selector.tsx
│   │   │   └── chatContext.tsx
│   │   ├── header/
│   │   │   └── header.tsx       # Top navigation bar
│   │   ├── theme/
│   │   │   └── options-dropdown.tsx
│   │   ├── ui/                  # Shadcn/ui components
│   │   └── ...other components
│   ├── contexts/
│   │   └── app.tsx              # Global app context
│   ├── hooks/
│   │   ├── useMediaQuery.ts
│   │   └── useChat.ts
│   └── lib/
│       ├── themes/              # Theme configurations
│       ├── utils.ts
│       └── cn.ts
├── public/                       # Static assets
├── .env.example                 # Environment template
├── .env.local                   # Local configuration (don't commit!)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.ts
├── SETUP_INSTRUCTIONS.md        # Detailed setup guide
├── QUICK_START.md               # Fast start guide
└── README.md                    # This file
```

---

## 🔑 Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GROQ_API_KEY` | Your Groq API key from console.groq.com | `gsk_xxxxx...` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_GROQ_MODEL` | Default AI model | `llama-3.1-8b-instant` |

### Getting Your Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Sign up for free (no credit card required)
3. Navigate to API Keys section
4. Create new API key
5. Copy and paste into `.env.local`

---

## 🎬 Features Breakdown

### Sidebar Navigation
- **Smart Animation** - Smooth slide + rotate effect (800ms, ease-in-out)
- **Chat List** - Organized view of pinned and recent conversations
- **Quick Actions** - Rename, pin, delete chats easily
- **Theme Selector** - Beautiful modal for theme selection
- **Persona Library** - Switch AI personalities
- **Mobile-Optimized** - Collapses on small screens

### Model Selector
- **Easy Switching** - Quick dropdown in header
- **Model Details** - Descriptions of each model's capabilities
- **Real-time Switching** - Change models without reloading
- **Session Persistence** - Selected model saved during session

### Theme System
- **5+ Beautiful Themes** - Light, dark, and colorful options
- **Real-time Switching** - Update theme instantly
- **Modal Interface** - Clean, dedicated theme picker
- **Persistent Selection** - Theme remembered across sessions

### Chat Interface
- **Streaming Responses** - See AI thinking in real-time
- **Message History** - Full conversation saved
- **Responsive Layout** - Adapts to any screen size
- **Error Handling** - Graceful error messages
- **Loading States** - Visual feedback for ongoing requests

---

## 📱 Responsive Design

- ✅ **Mobile First** - Optimized for phones (320px+)
- ✅ **Tablets** - Perfect on iPad and similar devices
- ✅ **Desktop** - Full-featured experience on large screens
- ✅ **Touch Optimized** - Easy navigation on touchscreen devices
- ✅ **Adaptive Layout** - Sidebar collapses on mobile

---

## 🏗 Building for Production

### Local Build

```bash
# Build for production
npm run build

# Start production server
npm run start

# Open http://localhost:3000
```

### Vercel Deployment

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for complete Vercel setup guide.

```bash
# Deploy to Vercel
vercel --prod
```

---

## 🔌 API Endpoints

### POST `/api/chat`

Send a chat message and receive AI-generated response.

**Request:**
```json
{
  "messages": [
    {
      "role": "user",
      "content": "What is the capital of France?"
    }
  ],
  "model": "llama-3.1-8b-instant"
}
```

**Response:** Server-sent events stream (SSE) with AI response chunks

---

## ⚙️ Configuration

### Adding a New Theme

1. Edit `src/lib/themes/index.ts`
2. Add new theme object with colors
3. Update theme selector component
4. Restart dev server

### Changing Default Model

Edit `src/components/chat/model-selector.tsx`:

```typescript
const AVAILABLE_MODELS: ModelOption[] = [
  {
    id: 'new-model-id',
    name: 'Model Display Name',
    provider: 'Brief description'
  }
]
```

### Customizing Sidebar

Edit `src/components/chat/sidebar.tsx` to:
- Change animation timing
- Add new buttons
- Modify layout
- Update styling

---

## 🎯 Usage Examples

### Starting a Conversation
1. Click "New Chat" button
2. Type your message
3. Press Enter or click Send
4. AI responds in real-time

### Switching Models
1. Click model name in header
2. Select different model from dropdown
3. Continue chatting - will use new model

### Changing Theme
1. Click "Themes" button in sidebar
2. Select theme from modal
3. Theme updates instantly

### Managing Chats
1. Right-click chat in sidebar
2. Choose: Rename, Pin, or Delete
3. Changes saved automatically

---

## 🐛 Troubleshooting

### Problem: API Key Not Working
```
Error: "401 Unauthorized from Groq"
```
**Solution:**
- Verify key at [console.groq.com](https://console.groq.com)
- Check it's in `.env.local` (not `.env`)
- Ensure no extra spaces in key
- Restart dev server after editing `.env.local`

### Problem: Blank Page on Load
```
App loads but shows nothing
```
**Solution:**
- Clear browser cache (Ctrl+Shift+Delete)
- Hard refresh (Ctrl+Shift+R)
- Check browser console (F12 → Console tab)
- Verify environment variables are set

### Problem: Sidebar Animation Jumpy
```
Animation is not smooth or jiggly
```
**Solution:**
- Clear browser cache
- Hard refresh (Ctrl+Shift+R)
- Try in incognito mode
- Update to latest browser version

### Problem: Model Not Responding
```
Chat doesn't reply or shows error
```
**Solution:**
- Check Groq API status at [status.groq.com](https://status.groq.com)
- Verify API key hasn't expired
- Check rate limits (free tier has limits)
- Try different model

---

## 📚 Documentation

- **[QUICK_START.md](./QUICK_START.md)** - 3-minute setup guide
- **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Complete setup with GitHub & Vercel
- **[README.md](./README.md)** - This file (full documentation)

---

## 🤝 Contributing

Contributions welcome! Feel free to:
- Report bugs via GitHub Issues
- Suggest new features
- Submit pull requests
- Improve documentation

---

## 📄 License

This project is open source and available under the **MIT License**.

See LICENSE file for details.

---

## 🔗 Useful Resources

### Official Documentation
- [Next.js Docs](https://nextjs.org/docs)
- [Groq API Docs](https://console.groq.com/docs)
- [Vercel AI SDK](https://sdk.vercel.ai)
- [Shadcn/ui Components](https://ui.shadcn.com)
- [Tailwind CSS](https://tailwindcss.com)

### Support & Community
- **GitHub Issues:** [Report bugs/features](https://github.com/ToTheBlankWorld/DevBot/issues)
- **Groq API:** [console.groq.com](https://console.groq.com)
- **Vercel:** [Dashboard](https://vercel.com)

---

## 📝 Changelog

### v1.0.0 (Current Release)
- ✅ Groq API integration with 3 models
- ✅ Dynamic theme system (5+ themes)
- ✅ Smooth animations (slide + rotate)
- ✅ Chat management (rename, pin, delete)
- ✅ Model selector dropdown
- ✅ Persona library system
- ✅ Responsive design
- ✅ Landing page with examples
- ✅ Complete documentation

---

## 🚀 Deployment Status

| Platform | Status | Link |
|----------|--------|------|
| Vercel | ✅ Production Ready | [Deploy to Vercel](https://vercel.com/new/clone?repository-url=https://github.com/ToTheBlankWorld/DevBot) |
| GitHub | ✅ Ready | [View on GitHub](https://github.com/ToTheBlankWorld/DevBot) |
| Docker | 🔄 Coming Soon | - |

---

## 💡 Tips & Tricks

1. **Use Mixtral for Long Conversations** - Best context window (32k tokens)
2. **Use Llama 8B for Speed** - Lowest latency, great for quick questions
3. **Pin Important Chats** - Easily find frequently used conversations
4. **Theme Switching** - Try different themes for better readability
5. **Keyboard Shortcuts** - Most actions work with keyboard navigation

---

## 🙏 Acknowledgments

- **Groq** - For incredibly fast inference
- **Vercel** - For amazing Next.js experience and hosting
- **Shadcn** - For beautiful UI components
- **The Open Source Community** - For amazing tools and libraries

---

## 📞 Support

Need help? Check out:
1. **[QUICK_START.md](./QUICK_START.md)** - Fast answers
2. **[SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)** - Detailed guides
3. **[GitHub Issues](https://github.com/ToTheBlankWorld/DevBot/issues)** - Report problems
4. **[Groq Docs](https://console.groq.com/docs)** - API questions

---

**Made with ❤️ by [ToTheBlankWorld](https://github.com/ToTheBlankWorld)**

**Ready to chat? [Get Started Now! 🚀](./QUICK_START.md)**
