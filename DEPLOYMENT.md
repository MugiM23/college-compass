# Deployment Guide for College Compass

This guide explains how to deploy your College Compass application to a public URL.

## Option 1: Netlify Deployment (Recommended - Easiest)

### Steps:

1. **Sign up on Netlify**
   - Go to https://netlify.com
   - Sign up with your GitHub account
   - Authorize Netlify to access your repositories

2. **Connect Repository**
   - Click "New site from Git"
   - Select your college-compass repository
   - Build command: `yarn build`
   - Publish directory: `dist`
   - Click "Deploy site"

3. **Get Your Public URL**
   - Your site will be deployed at: `https://[random-name].netlify.app`
   - You can customize the domain in Site settings → Domain management

4. **Set Up GitHub Secrets for CI/CD (Optional - for auto-deploy)**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `NETLIFY_AUTH_TOKEN`: Get from Netlify User settings → Applications → Personal access tokens
     - `NETLIFY_SITE_ID`: Get from Site settings → Site information

5. **Enable Auto-Deploy**
   - Once secrets are added, the workflow in `.github/workflows/netlify-deploy.yml` will auto-deploy on main branch commits

---

## Option 2: Vercel Deployment

### Steps:

1. **Sign up on Vercel**
   - Go to https://vercel.com
   - Sign up with your GitHub account
   - Import your college-compass repository

2. **Configure Project**
   - Framework: Vite
   - Build Command: `yarn build`
   - Output Directory: `dist`
   - Click "Deploy"

3. **Get Your Public URL**
   - Your site will be deployed at: `https://college-compass.vercel.app` (customizable)

4. **Set Up GitHub Secrets for CI/CD (Optional - for auto-deploy)**
   - Go to your GitHub repository → Settings → Secrets and variables → Actions
   - Add these secrets:
     - `VERCEL_TOKEN`: Get from Vercel Account settings → Tokens
     - `VERCEL_ORG_ID`: Get from Vercel project settings
     - `VERCEL_PROJECT_ID`: Get from Vercel project settings

5. **Enable Auto-Deploy**
   - Once secrets are added, the workflow in `.github/workflows/vercel-deploy.yml` will auto-deploy on main branch commits

---

## Option 3: GitHub Pages (Already Configured)

Your application is already configured to deploy to GitHub Pages:

1. Go to repository Settings → Pages
2. Select "Deploy from a branch"
3. Select "main" branch and `/root` folder
4. Your site will be available at: `https://[username].github.io/college-compass`

---

## Recommended Workflow

1. **For Testing**: Use Netlify or Vercel (faster, easier custom domains)
2. **For Production**: Use either Netlify or Vercel with GitHub Secrets set up for auto-deployment
3. **Build Verification**: The workflow will build and deploy on every push to main

---

## Environment Variables

If your app needs environment variables:

1. **Netlify**: Site settings → Build & deploy → Environment
2. **Vercel**: Project settings → Environment Variables
3. **GitHub Pages**: Not needed for static sites

---

## Next Steps

1. Choose Netlify or Vercel
2. Sign up and connect your repository
3. Get your public URL
4. (Optional) Set up GitHub Secrets for automatic deployments
5. Push code to main branch to trigger deployment

Your application will be live within minutes! 🚀
