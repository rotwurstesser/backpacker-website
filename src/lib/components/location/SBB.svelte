<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { Train } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let content: any;
  export let lang: Lang;
</script>

<section class="py-16">
  <div class="container max-w-2xl">
    <Card class="p-8 text-center bg-primary/5 border-primary/20">
      <div class="flex flex-col items-center gap-4 mb-6">
        <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
          <Train class="h-8 w-8 text-primary" aria-hidden="true" />
        </div>
        <h2 class="text-2xl font-semibold">{@html md(translate(content.sbbTitle, lang))}</h2>
      </div>
      <p class="text-muted-foreground mb-8 text-lg leading-relaxed">
        {@html md(translate(content.sbbDescription, lang))}
      </p>
      <a
        href={content.sbbLinkUrl}
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors font-medium shadow-sm hover:shadow-md"
      >
        {@html md(translate(content.sbbLinkText, lang))}
        <svg
          class="h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
          />
        </svg>
      </a>
    </Card>
  </div>
</section>
