# Developer Documentation 🛠️

This document outlines the technical architecture, CI/CD pipeline, and workflows for the Bern Backpackers website.

## 🚀 CI/CD Pipeline

The project uses **GitHub Action** (`.github/workflows/ci.yml`) to ensure code quality and prevent broken builds.

### Triggers
*   **Push to `main`**
*   **Pull Requests**

### Workflow Jobs
1.  **Check (`npm run check`)**: Runs `svelte-check` to catch TypeScript and Svelte compilation errors.
2.  **Test (`npm run test`)**: Runs unit tests via Vitest. All 19+ tests must pass.
3.  **Build (`npm run build`)**: Verifies that the SvelteKit application builds successfully for the production adapter.

> **Note**: Deployment to Netlify happens automatically only if this pipeline passes.

---

## 🧪 Testing

We use **Vitest** for unit testing.

*   **Run Tests**: `npm run test`
*   **Test Location**: `src/**/*.test.ts`

**Key Test Areas:**
*   `src/lib/i18n`: Verifies translation logic and fallback safety.
*   `src/lib/content`: Tests CMS content helpers and Markdown sanitization (XSS protection).
*   `src/lib/utils`: Tests utility functions like class merging and safe markdown rendering.

---

## 📝 CMS Architecture (Sveltia CMS)

The CMS is configured in `static/admin/config.yml`. It uses **Sveltia CMS**, a lightweight, git-based CMS that runs entirely in the browser. It communicates with the **Git Gateway** backend, meaning all content changes are direct commits to the GitHub repository.

### Concurrency & Conflict Resolution

We rely on the GitHub API's native optimistic locking mechanism to handle concurrent edits.

**The "Enforcer" Mechanism:**
1.  **SHA Parameter**: Every file update request via the GitHub API requires a `sha` parameter identifying the base version being edited.
2.  **Conflict Rule (409)**: If the provided `sha` does not match the current `sha` on the HEAD of the branch (indicating an intervening commit), the GitHub API returns a **409 Conflict** error.
    > *"If you don't provide the current SHA, or provide a mismatching SHA, you will receive a 409 Conflict error."* — GitHub API Docs
3.  **CMS Behavior**: when **Sveltia CMS** receives this 409 error during a save attempt, it aborts the operation and notifies the user via the UI ("Entry changed by another user").

**Implication**: Silent data loss via overwrite is **impossible** at the protocol level.

### Configuration
*   **Backend**: `github` (Repo: `rotwurstesser/backpacker-website`)
*   **Media**: Stored in `static/images`
*   **Markdown**: Custom widget configuration limits buttons to safe options (Bold, Italic, Lists) to maintain design consistency.
