# CMS User Handbook 📘

Welcome to the Bern Backpackers Content Management System (CMS). This guide helps you update the website content safely and easily.

## Accessing the CMS

1.  Navigate to `https://curious-fudge-dcd031.netlify.app/admin`
2.  Log in with your GitHub account.

## Workflow: How to Edit Pages

### 1. Select Content
Once logged in, you will see a list of "Collections" on the left:
*   **Startseite**: Homepage content (Hero, Features, etc.)
*   **Zimmer**: Room details (Prices, Availability, Descriptions)
*   **Zimmer Seite**: Text labels on the rooms page
*   **Galerie**: Images and categories
*   **Links**: Partners and useful links
*   **Lage**: Location and directions
*   **Kontakt**: Contact form settings

### 2. Making Changes
*   Click on the item you want to edit.
*   **Multilingual Content**: Most fields have tabs for `Deutsch`, `Englisch`, and `Spanisch`. Ensure you update all relevant languages.
*   **Markdown**: Use the formatting toolbar for Bold, Italic, Lists, and Headings.

### 3. Publishing Changes
1.  Click the **Publish** button at the top right.
2.  Select **Publish now**.
3.  The text will change to "Changes saved". Your update is now live!

---

## ⚠️ Important: Safety & Conflicts

**"What if two people edit the same page at the same time?"**

You do not need to worry about accidentally overwriting someone else's work. The system has a built-in "Safety Lock".

**How it works (The Technical Safety Mechanism):**
*   **The Check**: When you open a page, the CMS notes the exact "Version ID" (SHA) of the file.
*   **The Save**: When you hit "Publish", the CMS checks if that Version ID is still the latest one on the server.
*   **The Conflict**: If someone else published a change while you were editing, the Version IDs will clearly not match.
*   **The Result**: The system **rejects your save** and shows a red error message (e.g., "Entry changed by another user" or "SHA mismatch").

**Verdict**: It is **impossible** to silently overwrite someone else's work. If you see this error, simply refresh the page to see the new changes, re-apply your edits, and publish again.
