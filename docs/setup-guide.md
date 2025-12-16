# Deployment & Setup Guide (SOP) 🚀

This Standard Operating Procedure (SOP) documents the complete process for setting up the Bern Backpackers website from scratch. It is designed for administrators setting up the hosting for the first time.

## 1. Essentials (Prerequisites)

Before starting, ensure you have the following accounts. If not, create them:

*   **GitHub Account** (Required for code hosting and CMS login)
    *   [Sign up for GitHub](https://github.com/join)
    *   *Note: This account will "own" the repository.*
*   **Netlify Account** (Required for hosting the website)
    *   [Sign up for Netlify](https://app.netlify.com/signup)
    *   *Tip: You can sign up using your GitHub account to make linking easier.*

---

## 2. Get the Code

You need a copy of the website code in your own GitHub account.

1.  **Navigate** to the source repository on GitHub.
2.  Click the **Fork** button (top right corner).
3.  Select your account as the destination.
4.  You now have a copy (e.g., `your-username/backpacker-website`).

---

## 3. Connect to Netlify

Now we will put the website online.

1.  Log in to [Netlify](https://app.netlify.com/).
2.  Click **"Add new site"** > **"Import an existing project"**.
3.  Select **GitHub**.
4.  Authorize Netlify to access your GitHub repositories if asked.
5.  **Search** for your forked repository (`backpacker-website`) and select it.
6.  **Build Settings**:
    *   Netlify should automatically detect these, but verify:
    *   **Build command**: `npm run build`
    *   **Publish directory**: `build`
7.  Click **Deploy site**.

> ⏳ The site will now start building. It might take 1-2 minutes.

---

## 4. Enable the CMS (Critical Step)

The Content Management System (CMS) requires a special authentication connection called "Git Gateway".

### A. Enable Identity
1.  Go to your **Site Settings** in Netlify.
2.  Click **Identity** tab (left sidebar) > **Service**.
3.  Click **Enable Identity**.

### B. Enable Git Gateway
1.  In the same **Identity** section, scroll down to **Services**.
2.  Locate **Git Gateway**.
3.  Click **Enable Git Gateway**.
    *   *Note: Netlify might ask for GitHub permissions again. Approve them.*

### C. Configure Registration
Decide who can access the CMS.
1.  Go to **Identity** > **Registration**.
2.  **Option A (Secure)**: Set to **Invite only**. You must manually invite content editors via email.
3.  **Option B (Open)**: Set to **Open**. Anyone with a GitHub account can sign up (use with caution).
    *   *Recommendation: Use "Invite only" for security.*

---

## 5. First Login

1.  Go to your new website URL (e.g., `https://your-site-name.netlify.app/admin`).
2.  Click **Login with Netlify Identity**.
3.  Select **Continue with GitHub**.
4.  You should now see the CMS Dashboard!

---

## 6. Granting Access (Vital) 🔐

Because the repo is **Public**, security is handled by GitHub permissions.

1.  **Public Read Access**: Anyone can view the code (creating transparency).
2.  **Restricted Write Access**: **ONLY** users you explicitly list as **Collaborators** on GitHub can edit the site.

**To add an editor:**
1.  Go to your GitHub Repo > **Settings**.
2.  Click **Collaborators** (left sidebar).
3.  Click **Add people**.
4.  Enter their GitHub username or email.
5.  **They must accept the invite** to gain write access.

> 🛑 **Security Note**: Random internet users CANNOT edit your site. They would get a "403 Error" from GitHub if they tried to save changes.

---

## Troubleshooting

*   **"Versuch fehlgeschlagen" / Error on Login**: Ensure "Git Gateway" is definitely enabled in Step 4B.
*   **404 on /admin**: Wait a few minutes after the first deploy.
