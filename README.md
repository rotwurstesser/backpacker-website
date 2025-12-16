# Bern Backpackers Website

Modern website for Bern Backpackers hostel built with SvelteKit, Tailwind CSS, and Netlify CMS.

## 📚 Documentation

> [!NOTE]
> **Requirement**: You must have a **GitHub Account** to log in and edit content via the CMS.

*   **[User Handbook (English)](docs/cms-handbook.md)**: Guide for content editors.
*   **[Benutzerhandbuch (Deutsch)](docs/cms-handbuch.md)**: Anleitung für Content-Verwalter.
*   **[Developer Guide](docs/development.md)**: Technical architecture and CI/CD.

## Quick Start

```bash
# Install dependencies
npm install

# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deploy to Netlify

### Option 1: Git Integration (Recommended)
1. Push to GitHub/GitLab
2. Connect repo to Netlify
3. Netlify auto-detects settings from `netlify.toml`
4. Deploy!

### Option 2: CLI Deploy
```bash
npm install -g netlify-cli
netlify login
netlify deploy --prod
```

## Post-Deployment Setup

### Enable Netlify CMS
1. Go to **Site Settings → Identity → Enable Identity**
2. Set **Registration** to "Invite only"
3. Go to **Identity → Services → Enable Git Gateway**
4. **Invite users** via email
5. Access CMS at `https://yourdomain.com/admin/`

## Features

- **Multilingual**: English, German, Spanish
- **SSR**: Server-side rendering for SEO
- **CMS**: Netlify CMS (Decap CMS) for content editing
- **Accessible**: WCAG 2.1 AA compliant
- **Secure**: CSP headers, XSS protection, spam honeypot
- **Fast**: Lazy loading, optimized images, efficient caching

## Tech Stack

- SvelteKit 2.5
- Tailwind CSS 3.4
- shadcn-svelte components
- Lucide icons
- Netlify adapter
- Decap CMS 3.x

## Project Structure

```
src/
├── routes/
│   └── [lang]/          # Language-specific routes
│       ├── +page.svelte # Home
│       ├── rooms/       # Rooms & Prices
│       ├── gallery/     # Photo gallery
│       ├── location/    # Map & directions
│       ├── contact/     # Contact form
│       └── links/       # Partner links
├── lib/
│   ├── components/      # Reusable components
│   ├── i18n/           # Translations
│   └── seo.ts          # SEO configuration
static/
├── admin/              # Netlify CMS
├── images/             # Gallery, logos, rooms
└── _headers            # Security headers
```



## Environment

No environment variables required. All configuration is in code.

## License

Private - Bern Backpackers
