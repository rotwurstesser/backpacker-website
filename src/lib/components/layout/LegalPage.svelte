<script lang="ts">
  import { md, mdContent } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let title: any;
  export let content: any;
  export let lang: Lang;
</script>

<div class="container py-20 max-w-4xl mx-auto">
  <h1 class="mb-8 text-4xl md:text-5xl font-bold tracking-tight text-center">
    {@html md(title?.[lang] || "Title")}
  </h1>
  <div class="prose dark:prose-invert max-w-none">
    {@html mdContent(content?.[lang] || "Content coming soon...")}
  </div>
</div>
