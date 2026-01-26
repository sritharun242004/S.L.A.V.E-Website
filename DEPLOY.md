# Netlify Deployment Guide

## Quick Deploy

### Option 1: Import from GitHub (Recommended)

1. Go to [Netlify](https://app.netlify.com/)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Select the repository: `sritharun242004/S.L.A.V.E-Website`
5. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 or higher
6. Click **"Deploy site"**

### Option 2: Netlify CLI

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Login to Netlify
netlify login

# Deploy
netlify deploy --prod
```

## Build Settings

The `netlify.toml` file is already configured with:
- Build command: `npm run build`
- Publish directory: `dist`
- Redirects for SPA routing
- Security headers

## Environment Variables

No environment variables are required for basic deployment.

## Custom Domain

After deployment, you can configure a custom domain:
1. Go to **Site settings** → **Domain management**
2. Click **"Add custom domain"**
3. Follow the DNS configuration instructions

## Post-Deployment

After deployment:
1. Test all pages: Home, Association, Projects, Contact
2. Test language switching (EN/FR)
3. Test responsive design on mobile/tablet
4. Check contact form functionality
5. Verify all images load correctly

## Repository

**GitHub**: https://github.com/sritharun242004/S.L.A.V.E-Website

## Support

For deployment issues, check:
- Netlify build logs
- GitHub repository status
- Node.js version compatibility (v18+)
