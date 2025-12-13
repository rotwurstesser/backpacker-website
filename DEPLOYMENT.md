# Deployment Guide

## Prerequisites

- Node.js 20+
- Netlify account
- GitHub/GitLab repository

## Step 1: Push to Git

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <your-repo-url>
git push -u origin main
```

## Step 2: Connect to Netlify

1. Log in to [Netlify](https://app.netlify.com)
2. Click **"Add new site"** → **"Import an existing project"**
3. Select your Git provider and repository
4. Netlify auto-detects settings from `netlify.toml`:
   - Build command: `npm run build`
   - Publish directory: `build`
   - Node version: 20

5. Click **"Deploy site"**

## Step 3: Enable Netlify CMS

After deployment completes:

### 3.1 Enable Identity
1. Go to **Site Settings** → **Identity**
2. Click **"Enable Identity"**

### 3.2 Set Registration
1. Under **Registration preferences**
2. Select **"Invite only"**

### 3.3 Enable Git Gateway
1. Go to **Identity** → **Services**
2. Click **"Enable Git Gateway"**

### 3.4 Invite Admin Users
1. Go to **Identity** → **Invite users**
2. Enter email addresses
3. Users receive invite email to set password

### 3.5 Access CMS
- URL: `https://your-site.netlify.app/admin/`
- Click **"Login with Netlify Identity"**
- Enter credentials

## Custom Domain

1. Go to **Domain settings**
2. Click **"Add custom domain"**
3. Enter `bernbackpackers.ch`
4. Follow DNS configuration instructions
5. Enable HTTPS (automatic with Let's Encrypt)

## Environment Variables

No environment variables required for basic deployment.

Optional for advanced features:
- `NETLIFY_AUTH_TOKEN` - For CLI deployments

## Troubleshooting

### Build Fails
```bash
# Test build locally
npm run build
```

### CMS Login Issues
1. Verify Identity is enabled
2. Verify Git Gateway is enabled
3. Check user has accepted invite email
4. Clear browser cache

### 404 Errors
Check `static/_redirects` file exists and contains:
```
/*    /index.html   200
```

### CSS Not Loading
Verify `static/_headers` file exists with proper cache headers.

## Security Checklist

- [x] CSP headers configured
- [x] X-Frame-Options: DENY
- [x] X-Content-Type-Options: nosniff
- [x] Honeypot spam protection on forms
- [x] Input validation (maxlength)
- [x] No exposed secrets/API keys
- [x] HTTPS enforced (Netlify default)

## Performance Checklist

- [x] Images lazy loaded
- [x] Images optimized (<100KB each)
- [x] CSS/JS bundled and minified
- [x] Static assets cached (1 year)
- [x] SSR enabled for SEO

## Monitoring

Netlify provides:
- Deploy logs
- Function logs
- Analytics (paid)
- Form submissions

Access at: `https://app.netlify.com/sites/<your-site>/`
