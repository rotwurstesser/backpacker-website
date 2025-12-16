<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { md } from "$lib/utils";
  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";

  export let data: PageData;
  $: ({ content, lang } = data);
  $: currentLang = lang as Lang;
</script>

<svelte:head>
  <title>{content?.title?.[currentLang] || "Awards"} | Bern Backpackers</title>
</svelte:head>

<div class="container py-20">
  <h1 class="text-4xl font-bold text-center mb-12">
    {@html md(content?.title?.[currentLang] || "Awards")}
  </h1>

  {#if content?.awards?.length > 0}
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
      {#each content.awards as award}
        <Card class="p-6 flex flex-col items-center text-center hover:shadow-lg transition-shadow">
          {#if award.image}
            <div class="relative w-32 h-32 mb-4">
              <img src={award.image} alt={award.title} class="w-full h-full object-contain" />
            </div>
          {/if}
          <h3 class="font-semibold mb-2">{award.title}</h3>
          {#if award.year}
            <span class="text-sm text-muted-foreground">{award.year}</span>
          {/if}
        </Card>
      {/each}
    </div>
  {:else}
    <p class="text-center text-muted-foreground">No awards listed yet.</p>
  {/if}
</div>
