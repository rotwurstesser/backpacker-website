# CMS User Handbook 📘

> [!IMPORTANT]
> **Private Demo Instance**: This website is currently running in "Stealth Mode" (`noindex, nofollow`). It is **not findable** on Google or other search engines. You can safely edit and test content here without affecting public search results.

Welcome to the **Bern Backpackers Content Management System (CMS)**. This guide is your complete manual for managing the website, offering detailed instructions for every page and function.

## 🚀 Quick Start

1.  **Login**: Go to `https://curious-fudge-dcd031.netlify.app/admin` and log in with your GitHub account.
2.  **Navigate**: Use the specific "Collections" on the left sidebar to find content.
3.  **Edit**: Click an entry to open the editor.
4.  **Save**: Click the **Save** button at the top to apply your changes immediately.

---

## 🛡️ Safety & "No-Stress" Editing

**"What if two people edit the same page?"**

The system has a built-in safety lock. If someone publishes a change while you are editing the same page:
1.  The system detects a "Version Mismatch" (SHA Conflict).
2.  Your save will be blocked with a red error message ("Entry changed by another user").
3.  **No data is overwritten.** You simply refresh the page to see their changes and re-apply yours.

---

## 📖 Page-by-Page Documentation

### 🏠 Startseite (Home)
This collection controls everything on the landing page.

*   **Hero Titel/Untertitel**: The big welcoming text at the top.
*   **Badge Text**: The small highlight tag above the title.
*   **Button Text (Hero CTA)**: The text for the main "Book Now" call-to-action.
*   **Vorteile (Features)**:
    *   List of key benefits (e.g., "City Center").
    *   **Icon**: Select a visual icon from the dropdown list.
*   **Ausstattung (Amenities)**:
    *   List of facilities like "Free Wifi".
    *   **Icon**: Select symbols for the amenities list.
*   **CTA Section**: The final "Call to Action" block at the bottom of the page.

### 🛏️ Zimmer (Rooms)
Manage the actual rooms available for booking.

*   **Available (Verfügbar)**: Toggle this switch to **OFF** to mark a room as "Booked" or "Unavailable". It will show as grayed out on the website.
*   **Price & Unit**: Set the price (CHF) and whether it is "Per Bed" or "Per Room".
*   **Photo**: Upload the main image for the room card.
*   **Order**: Number used to sort the rooms (1 = first, 10 = last).
*   **Beds & Bath**: Define capacity and whether the bath is private/shared.

### 🛏️ Zimmer Seite (Texts)
*   **System Labels**: Edit the translation for static text on the rooms page, such as:
    *   "Book Now" button text.
    *   "Booked" / "Ausgebucht" labels.
    *   "Shared Bathroom" labels.

### 🖼️ Galerie Bilder (Gallery Images)
Upload visual content for the gallery page.

*   **Image**: Upload a high-quality photo (images are automatically optimized).
*   **Category**: **Crucial for filtering**. Select where this image belongs:
    *   `Zimmer` (Rooms)
    *   `Einrichtungen` (Facilities)
    *   `Gemeinschaftsräume` (Common Areas)
    *   `Aussenbereich` (Exterior)
    *   `Lage` (Location)
*   **Order**: Control the display sequence.

### 🖼️ Galerie Seite (Texts)
*   **Filters**: Translate the text for the category buttons (e.g., rename "Common Areas" to "Living Room").
*   **No Images Message**: Text shown if a category is empty.

### 🔗 Links (Partners)
Manage your recommended partners and friends.

*   **Partner Logos**: A special section for logos (e.g., "Swiss Hostels").
    *   **Name**: Name of the partner.
    *   **Link URL**: Where the logo should link to.
    *   **Logo**: Upload the partner's logo image.
*   **Link Categories**: Create groups of text links (e.g., "Bern Tourism", "Train Schedules").

### 📍 Lage (Location)
*   **Maps URL**: The Google Maps embed link.
*   **Directions**: Text blocks for "By Tram", "By Foot", "By Car".
*   **SBB Link**: Link to the Swiss train timetable.
*   **Landmarks**: List of nearby sights and their walking distance.

### 📧 Kontakt (Contact)
*   **Contact Details**: Update Phone, Email, and Address.
*   **Opening Hours**: Text for reception hours.
*   **Form Labels**: Translate the specific fields in the contact form (Name, Subject, Message).

---

## 📝 Editing Tips

### Multilingual Content
Most text fields have three tabs: `Deutsch`, `Englisch`, `Spanisch`.
> **Tip**: Always check all three tabs when updating text to ensure no language is left behind!

### Markdown Formatting
For descriptions, you can use the toolbar buttons:
*   **B** for Bold
*   *I* for Italic
*   🔗 for Links
*   Lists (Bulleted or Numbered)

### Images
*   **Upload**: You can drag and drop images directly into the image fields.
*   **Library**: You can reuse images that were already uploaded to other sections.
