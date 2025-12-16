<script lang="ts">
  import { Button } from "$lib/components/ui";
  import { Train } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md, mdContent } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let content: any;
  export let lang: Lang;
</script>

<section class="py-16">
  <div class="container max-w-2xl">
    <div class="bg-primary/5 rounded-2xl p-8 flex flex-col items-center text-center space-y-6">
      <div class="p-4 bg-background rounded-full shadow-sm">
        <Train class="w-8 h-8 text-primary" />
      </div>

      <div class="space-y-2 max-w-xl">
        <h2 class="text-2xl font-semibold">{@html md(translate(content.sbbTitle, lang))}</h2>
        <div class="text-muted-foreground prose dark:prose-invert max-w-none">
          {@html mdContent(translate(content.sbbDescription, lang))}
        </div>
      </div>

      {#if content.sbbLinkUrl}
        <Button href={content.sbbLinkUrl} target="_blank" rel="noopener noreferrer">
          {@html md(translate(content.sbbLinkText, lang))}
          <svg
            class="ml-2 h-4 w-4"
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
        </Button>
      {/if}
    </div>
  </div>
</section>
