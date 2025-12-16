<script lang="ts">
  import { page } from "$app/stores";
  import { languages, type Lang } from "$lib/i18n";

  $: currentLang = $page.data.lang as Lang;
  $: currentPath = $page.url.pathname;

  function getLocalizedPath(lang: Lang): string {
    const pathParts = currentPath.split("/").filter(Boolean);
    if (pathParts.length > 0 && languages.some((l) => l.code === pathParts[0])) {
      pathParts[0] = lang;
    } else {
      pathParts.unshift(lang);
    }
    return "/" + pathParts.join("/");
  }

  function handleChange(e: Event) {
    const target = e.currentTarget as HTMLSelectElement;
    const newLang = target.value as Lang;
    window.location.href = getLocalizedPath(newLang);
  }
</script>

<div class="relative inline-block">
  <label for="language-select" class="sr-only">Select language</label>
  <select
    id="language-select"
    class="appearance-none bg-transparent border border-border rounded-md px-3 py-1.5 pr-8 text-sm cursor-pointer hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring"
    value={currentLang}
    on:change={handleChange}
    aria-label="Select language"
  >
    {#each languages as lang (lang.code)}
      <option value={lang.code}>{lang.flag} {lang.name}</option>
    {/each}
  </select>
  <div
    class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-muted-foreground"
    aria-hidden="true"
  >
    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
    </svg>
  </div>
</div>
