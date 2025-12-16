# Bern Backpackers Website

Modern website for Bern Backpackers hostel built with SvelteKit, Tailwind CSS, and Sveltia CMS.

## 📚 Documentation

> [!NOTE]
> **Requirement**: You must have a **GitHub Account** to log in and edit content via the CMS.

*   **[Setup Guide (SOP)](docs/setup-guide.md)**: Step-by-step instructions for deployment and account creation.
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

- **Pages**: Home, Rooms, Gallery, Location, Contact, **Awards**, **Links**, **Privacy**, **Terms**
- **Multilingual**: English, German, Spanish
- **CMS**: Sveltia CMS (Headless, Git-based) for content editing, including **Awards** and **Legal** pages
- **Accessible**: WCAG 2.1 AA compliant
- **Secure**: CSP headers, XSS protection, spam honeypot
- **Fast**: Lazy loading, optimized images, efficient caching

## Tech Stack

- SvelteKit 2.5
- Tailwind CSS 3.4
- shadcn-svelte components
- Lucide icons
- Netlify adapter
- Sveltia CMS

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
│       ├── links/       # Partner links
│       ├── awards/      # Awards & Ratings
│       ├── privacy/     # Privacy Policy
│       └── terms/       # Terms & Conditions
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
