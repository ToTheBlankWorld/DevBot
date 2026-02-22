# DevBot - Quick Start Guide

## 🚀 Start Here

### Fastest Setup (3 minutes)

```bash
# 1. Clone repository
git clone https://github.com/ToTheBlankWorld/DevBot.git
cd DevBot

# 2. Install dependencies
npm install

# 3. Create .env.local
cp .env.example .env.local

# 4. Add your Groq API key
# Edit .env.local and add your key from https://console.groq.com
NEXT_PUBLIC_GROQ_API_KEY=gsk_your_key_here

# 5. Start development server
npm run dev

# 6. Open browser
# Visit: http://localhost:3000
```

---

## 📋 Checklist

- [ ] Get Groq API key from [console.groq.com](https://console.groq.com)
- [ ] Clone repository locally
- [ ] Run `npm install`
- [ ] Create `.env.local` with API key
- [ ] Run `npm run dev`
- [ ] Test app at `http://localhost:3000`

---

## 🌐 Deploy to Vercel (5 minutes)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Import Project"
   - Select your GitHub repository
   - Click "Import"

3. **Add Environment Variables**
   - In Vercel dashboard: Settings → Environment Variables
   - Add `NEXT_PUBLIC_GROQ_API_KEY=your_key`
   - Add `NEXT_PUBLIC_GROQ_MODEL=llama-3.1-8b-instant`
   - Click "Save"

4. **Redeploy**
   - Go to Deployments tab
   - Click "Redeploy" on latest build
   - Wait for build to complete
   - Your app is live! 🎉

---

## 📁 File Structure

```
DevBot/
├── src/app/              # Next.js app directory
├── src/components/       # React components
├── src/lib/             # Utilities & configurations
├── .env.example         # Environment template
├── .env.local           # Your local config (don't commit!)
├── package.json         # Dependencies
└── README.md            # Full documentation
```

---

## 🔑 Environment Variables

**Required:**
- `NEXT_PUBLIC_GROQ_API_KEY` - Your Groq API key

**Optional:**
- `NEXT_PUBLIC_GROQ_MODEL` - Default model (default: `llama-3.1-8b-instant`)

---

## 🎮 Features

- ✅ Chat with multiple AI models
- ✅ Switch models in real-time
- ✅ 5+ color themes
- ✅ Pin/rename/delete chats
- ✅ Smooth animations
- ✅ Fully responsive design
- ✅ No signup required

---

## 📱 Available Models

1. **Llama 3.1 8B** - Fast & Stable ⚡
2. **Llama 3.1 70B** - More Capable 🧠
3. **Mixtral 8x7B** - Best Reasoning 🎯

---

## 🐛 Troubleshooting

**App won't start?**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

**API key not working?**
- Check key at [console.groq.com](https://console.groq.com)
- Verify it's in `.env.local` (not `.env`)
- Restart dev server after changing `.env.local`

**On Vercel, app is blank?**
- Check Vercel environment variables are set
- Redeploy after adding variables
- Check browser console for errors

---

## 📚 Documentation

- **Full Setup:** See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)
- **Complete Docs:** See [README.md](./README.md)
- **Groq API:** [console.groq.com/docs](https://console.groq.com/docs)

---

## 🎨 Customize

### Change Default Model
Edit `src/components/chat/model-selector.tsx`

### Add New Theme
Edit `src/lib/themes/index.ts`

### Modify Sidebar
Edit `src/components/chat/sidebar.tsx`

---

## 🤝 Support

- **Issues:** [GitHub Issues](https://github.com/ToTheBlankWorld/DevBot/issues)
- **Docs:** Check [README.md](./README.md)
- **Questions:** Review [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md)

---

## 🎉 You're All Set!

Your DevBot is ready to use. Start developing and have fun! 🚀

**Next Steps:**
1. Customize the app to your liking
2. Deploy to Vercel
3. Share with friends and family
4. Consider contributing improvements

---

Happy coding! 💻✨
