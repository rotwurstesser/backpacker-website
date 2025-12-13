# Netlify CMS Guide

## Accessing the CMS

1. Go to `https://your-site.com/admin/`
2. Click **"Login with Netlify Identity"**
3. Enter your email and password

## What You Can Edit

### Pages
- **Homepage** - Hero title, subtitle, call-to-action text
- **About** - Hostel description
- **Amenities** - List of amenities with icons

### Rooms
- Add/edit/delete room types
- Set prices per bed or per room
- Upload room photos
- Manage features (WiFi, locker, etc.)
- Set availability

### Gallery
- Upload photos
- Organize by category (rooms, facilities, exterior)
- Add descriptions/alt text
- Set display order

### Settings
- **General** - Contact info, address, hours
- **Pricing** - Room prices, seasonal variations
- **Social** - Facebook, Instagram, TripAdvisor links
- **Translations** - Navigation labels, UI text

## Adding a New Room

1. Click **"Rooms"** in sidebar
2. Click **"New Room"**
3. Fill in:
   - **Type**: e.g., "4-Bed Dormitory"
   - **Name** (EN/DE/ES): Translations
   - **Description** (EN/DE/ES): Translations
   - **Price**: In CHF
   - **Price Type**: "per bed" or "per room"
   - **Beds**: Number of beds
   - **Bathroom**: "shared" or "private"
   - **Image**: Upload photo
   - **Features**: Check applicable features
4. Click **"Publish"**

## Adding Gallery Photos

1. Click **"Gallery"** in sidebar
2. Click **"New Gallery Item"**
3. Fill in:
   - **Image**: Upload photo
   - **Alt Text**: Description for accessibility
   - **Category**: rooms/facilities/common_areas/exterior
   - **Order**: Display order (lower = first)
4. Click **"Publish"**

## Editing Translations

All content supports 3 languages:
- **English (EN)** - Default
- **German (DE)** - Deutsch
- **Spanish (ES)** - Español

Each text field has tabs for each language. Fill all 3 for complete translations.

## Publishing Changes

1. Make your edits
2. Click **"Publish"** (top right)
3. Changes are committed to Git
4. Netlify automatically rebuilds the site (~1-2 minutes)

## Media Library

- Uploaded images go to `/static/images/`
- Recommended image sizes:
  - Room photos: 800x600px, <100KB
  - Gallery: 1200x800px, <150KB
  - Logos: 200x100px, <20KB
- Supported formats: JPG, PNG, WebP

## Tips

- **Preview**: Use "Preview" button before publishing
- **Draft**: Save as draft to work on later
- **Revert**: Use Git history to revert changes
- **Backup**: All changes are in Git, nothing is lost

## Troubleshooting

### Can't Login
- Check you accepted the invite email
- Try "Forgot password" link
- Clear browser cache

### Changes Not Showing
- Wait 1-2 minutes for rebuild
- Check Netlify deploy logs
- Hard refresh browser (Ctrl+Shift+R)

### Image Upload Fails
- Check file size (<5MB)
- Check file format (JPG, PNG, WebP)
- Try different browser
