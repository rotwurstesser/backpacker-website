<script lang="ts">
  import LegalPage from "$lib/components/layout/LegalPage.svelte";
  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";

  export let data: PageData;
  $: ({ content, lang } = data);
  $: currentLang = lang as Lang;
</script>

<svelte:head>
  <title>{content?.title?.[lang] || "Terms"} | Bern Backpackers</title>
</svelte:head>

<LegalPage title={content.title} content={content.content} lang={currentLang} />
