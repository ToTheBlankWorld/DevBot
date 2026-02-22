# DevBot - Complete Setup Instructions

## Table of Contents
1. [Initial Setup](#initial-setup)
2. [Git Repository Setup](#git-repository-setup)
3. [Vercel Deployment](#vercel-deployment)
4. [Environment Variables](#environment-variables)
5. [Troubleshooting](#troubleshooting)

---

## Initial Setup

### Step 1: Get Your Groq API Key

1. Visit [console.groq.com](https://console.groq.com)
2. Click **Sign Up** (or Sign In if you have an account)
3. Complete the registration process
4. Once logged in, navigate to **API Keys** section
5. Click **Create API Key** button
6. Copy the generated API key (it starts with `gsk_`)
7. Save this key safely - you'll need it for setup

### Step 2: Clone and Install Locally

```bash
# Clone the repository
git clone https://github.com/ToTheBlankWorld/DevBot.git
cd DevBot

# Install dependencies
npm install

# Create .env.local file
cp .env.example .env.local
```

### Step 3: Configure Environment Variables

Edit `.env.local`:

```env
# Required: Your Groq API Key
NEXT_PUBLIC_GROQ_API_KEY=gsk_your_key_here_12345

# Optional: Default model (can be changed in app)
# Available: llama-3.1-8b-instant, llama-3.1-70b-versatile, mixtral-8x7b-32768
NEXT_PUBLIC_GROQ_MODEL=llama-3.1-8b-instant
```

### Step 4: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. ✅

---

## Git Repository Setup

### Step 1: Initialize Git Repository

```bash
# Navigate to project directory
cd DevBot

# Initialize git (if not already initialized)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: DevBot AI Chat Application"
```

### Step 2: Create GitHub Repository

1. Go to [github.com](https://github.com)
2. Sign in to your account
3. Click the **+** icon in top-right corner
4. Select **New repository**
5. Fill in repository details:
   - **Repository name:** `DevBot`
   - **Description:** "Modern AI Chat Application powered by Groq"
   - **Visibility:** Public or Private (your choice)
   - **Skip adding .gitignore** (we already have one)
   - **Skip adding license** (or add MIT if you prefer)
6. Click **Create repository**

### Step 3: Connect Local Repository to GitHub

```bash
# Add remote repository
git remote add origin https://github.com/YOUR_USERNAME/DevBot.git

# Verify remote was added
git remote -v

# Push code to GitHub
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

### Step 4: Verify on GitHub

1. Go to your repository on GitHub
2. You should see all your files uploaded
3. Main branch should show your code

---

## Vercel Deployment

### Step 1: Prepare for Vercel

```bash
# Make sure all changes are committed
git status

# If there are uncommitted changes:
git add .
git commit -m "Final updates before deployment"
git push origin main
```

### Step 2: Connect to Vercel

**Option A: Using Vercel Dashboard (Recommended)**

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub/GitLab/Bitbucket (recommended)
3. Click **Import Project** or **New Project**
4. Select **GitHub** as source
5. Search for and select your **DevBot** repository
6. Click **Import**

**Option B: Using Vercel CLI**

```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy to Vercel
vercel

# On first deployment, you'll be asked:
# - Link to existing project? (No)
# - Project name: DevBot
# - Project directory: ./ (current directory)
# - Command to override? npm run build
```

### Step 3: Configure Environment Variables in Vercel

1. In Vercel dashboard, go to your **DevBot** project
2. Click **Settings** tab
3. Select **Environment Variables** from left sidebar
4. Add the following variables:

   **Variable 1:**
   - Name: `NEXT_PUBLIC_GROQ_API_KEY`
   - Value: `gsk_your_groq_api_key_here` (paste your actual key)
   - Environments: Select all (Production, Preview, Development)
   - Click **Add**

   **Variable 2:**
   - Name: `NEXT_PUBLIC_GROQ_MODEL`
   - Value: `llama-3.1-8b-instant`
   - Environments: Select all
   - Click **Add**

5. Click **Save** button

### Step 4: Deploy

Once you've added environment variables:

1. Go to **Deployments** tab
2. Click **Redeploy** on the latest deployment
3. Wait for build to complete (2-3 minutes)
4. Once successful, you'll get a production URL
5. Your app is now live! 🎉

### Step 5: Custom Domain (Optional)

1. In Vercel project settings, go to **Domains**
2. Click **Add Domain**
3. Enter your domain name
4. Follow DNS configuration instructions
5. Once configured, your app will be accessible at your custom domain

---

## Environment Variables

### Required Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_GROQ_API_KEY` | Your Groq API key | `gsk_xxxxx...` |

### Optional Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_GROQ_MODEL` | Default AI model | `llama-3.1-8b-instant` |

### Available Models

- `llama-3.1-8b-instant` - Fast, stable
- `llama-3.1-70b-versatile` - More capable
- `mixtral-8x7b-32768` - Good reasoning

---

## Troubleshooting

### Build Fails on Vercel

**Error: "NEXT_PUBLIC_GROQ_API_KEY is not set"**

Solution:
1. Check that environment variables are added in Vercel dashboard
2. Variables must be in **Production** environment
3. After adding, click **Redeploy**
4. Wait 2-3 minutes for rebuild

### API Key Not Working

**Error: "401 Unauthorized from Groq API"**

Solution:
1. Verify your Groq API key at [console.groq.com](https://console.groq.com)
2. Ensure key hasn't expired
3. Make sure key is correctly copied (no extra spaces)
4. Test with a fresh API key if needed

### Site Shows Blank Page

**Problem: App loads but shows nothing**

Solution:
1. Check browser console for errors (F12 → Console)
2. Verify environment variables are set in Vercel
3. Check that `.env.local` is in `.gitignore` (don't commit secrets!)
4. Try hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

### Model Not Responding

**Error: "Failed to get response from model"**

Solution:
1. Check Groq API status at [status.groq.com](https://status.groq.com)
2. Verify API key is still valid
3. Check rate limits (free tier has limits)
4. Try different model if available

### Sidebar Animation Not Working

**Problem: Animation is jumpy or not smooth**

Solution:
1. Clear browser cache
2. Hard refresh the page
3. Try in incognito mode
4. Check browser console for CSS errors

### Theme Not Persisting

**Problem: Theme changes reset on page refresh**

Solution:
1. Enable localStorage in browser settings
2. Check if site is in incognito mode (localStorage disabled)
3. Clear browser cache and refresh
4. Try in different browser

---

## Next Steps After Deployment

### 1. Test Your App

- Visit your Vercel URL
- Test chat functionality
- Switch between models
- Try different themes
- Test on mobile

### 2. Share with Others

- Share your Vercel URL
- GitHub repository link
- Add to portfolio/resume

### 3. Monitor Performance

- Go to Vercel dashboard
- Check **Analytics** tab
- Monitor API usage
- Check Groq API dashboard for usage

### 4. Update Deployments

Every time you push to main branch:
```bash
git add .
git commit -m "Your message"
git push origin main
```

Vercel will automatically redeploy (no manual action needed!)

### 5. Keep Secrets Safe

⚠️ **Important Security Tips:**

1. ✅ Never commit `.env.local` to GitHub
2. ✅ Always use Vercel's Environment Variables section
3. ✅ Regenerate API keys if accidentally exposed
4. ✅ Use `.gitignore` to exclude sensitive files
5. ✅ Review GitHub secrets regularly

---

## Useful Commands

```bash
# Local development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Check for code issues

# Git commands
git add .
git commit -m "message"
git push origin main
git pull origin main

# Vercel CLI commands
vercel               # Deploy
vercel --prod        # Deploy to production
vercel env pull      # Pull environment variables locally
```

---

## Support & Resources

- **GitHub Issues:** [github.com/ToTheBlankWorld/DevBot/issues](https://github.com/ToTheBlankWorld/DevBot/issues)
- **Groq Documentation:** [console.groq.com/docs](https://console.groq.com/docs)
- **Vercel Documentation:** [vercel.com/docs](https://vercel.com/docs)
- **Next.js Documentation:** [nextjs.org/docs](https://nextjs.org/docs)

---

## FAQ

**Q: Is Groq API free?**
A: Yes! Groq offers free API access. No credit card required.

**Q: Can I use OpenAI instead of Groq?**
A: Currently configured for Groq. You can modify the code to support OpenAI.

**Q: How do I update the code?**
A: Make changes locally, commit, and push. Vercel auto-deploys!

**Q: Can I host without Vercel?**
A: Yes! Any Node.js hosting works (Netlify, Railway, DigitalOcean, etc.)

**Q: How do I get more API quota?**
A: Check [console.groq.com](https://console.groq.com) for usage and limits.

---

**Congratulations! Your DevBot is now deployed and ready to use! 🚀**

For more help, check the main [README.md](./README.md).
