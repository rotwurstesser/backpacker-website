<script lang="ts">
  import { t as translate } from "$lib/content";
  import { md, mdContent } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let title: any;
  export let carTitle: any;
  export let car: any;
  export let tramTitle: any;
  export let tram: any;
  export let footTitle: any;
  export let foot: any;
  export let lang: Lang;

  $: directions = [
    { title: tramTitle, description: tram },
    { title: footTitle, description: foot },
    { title: carTitle, description: car },
  ];
</script>

<div class="grid md:grid-cols-3 gap-8">
  <div class="md:col-span-3">
    <h2 class="text-2xl font-bold text-center mb-12">{@html md(translate(title, lang))}</h2>
  </div>

  {#each directions as direction}
    <div class="relative pl-8 border-l-2 border-primary/20 space-y-4">
      <div
        class="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-background border-2 border-primary"
      />
      <div>
        <h3 class="text-lg font-semibold">{@html md(translate(direction.title, lang))}</h3>
        <div class="text-muted-foreground mt-2 prose dark:prose-invert max-w-none text-sm">
          {@html mdContent(translate(direction.description, lang))}
        </div>
      </div>
    </div>
  {/each}
</div>
