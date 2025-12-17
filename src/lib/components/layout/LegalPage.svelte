<script lang="ts">
  import { md, mdContent } from "$lib/utils";
  import type { Lang } from "$lib/i18n";
  import PageHeader from "$lib/components/layout/PageHeader.svelte";

  export let title: Record<string, any> | undefined;
  export let content: Record<string, any> | undefined;
  export let lang: Lang;
</script>

<PageHeader title={title?.[lang] || "Title"} />

<div class="container py-12 max-w-4xl mx-auto">
  <div class="prose dark:prose-invert max-w-none">
    {@html mdContent(content?.[lang] || "")}
  </div>
</div>
