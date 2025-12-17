<script lang="ts">
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import Card from "$lib/components/ui/card.svelte";
  import type { PageData } from "./$types";
  import PageHeader from "$lib/components/layout/PageHeader.svelte";

  export let data: PageData;
  $: ({ content, lang } = data);
  // The 'Lang' type import was removed, so casting to 'Lang' here would cause an error.
  // Assuming 'lang' is already of the correct type or can be used directly.
  $: currentLang = lang;
</script>

<svelte:head>
  <title>{content?.title?.[currentLang] || "Awards"} | Bern Backpackers</title>
</svelte:head>

<PageHeader
  title={content?.title?.[currentLang] || "Awards"}
  subtitle={content?.subtitle?.[currentLang]}
/>

<div class="container py-12">
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
