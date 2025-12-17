<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { Button } from "$lib/components/ui";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import { ExternalLink } from "lucide-svelte";
  import type { PageData } from "./$types";
  import PageHeader from "$lib/components/layout/PageHeader.svelte";

  export let data: PageData;
  $: ({ content, lang } = data);
  $: currentLang = lang;
</script>

```
<svelte:head>
  <title>{content?.title?.[currentLang] || "Links"} | Bern Backpackers</title>
</svelte:head>

<PageHeader
  title={content?.title?.[currentLang] || "Links"}
  subtitle={content?.subtitle?.[currentLang]}
/>

<div class="container py-12 max-w-4xl mx-auto">
  {#if content?.categories}
    <div class="space-y-12">
      {#each content.categories as category}
        <section>
          <h2 class="text-3xl tracking-tight text-center mb-12">
            {@html md(category.name?.[currentLang] || "")}
          </h2>
          {#if category.links}
            <div class="grid gap-4 md:grid-cols-2">
              {#each category.links as link}
                <Card
                  class="p-4 hover:bg-muted/50 transition-colors flex items-center justify-between group"
                >
                  <span class="font-medium">{link.name}</span>
                  {#if link.url}
                    <Button
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="ghost"
                      size="sm"
                      class="group-hover:text-primary"
                    >
                      <ExternalLink class="h-4 w-4 mr-2" />
                      Open
                    </Button>
                  {/if}
                </Card>
              {/each}
            </div>
          {/if}
        </section>
      {/each}
    </div>
  {/if}

  {#if content?.partners}
    <section class="mt-16">
      <h2 class="text-3xl tracking-tight text-center mb-12">
        {@html md(content.partnersTitle?.[currentLang] || "Partners")}
      </h2>
      <div class="flex flex-wrap justify-center gap-8 items-center">
        {#each content.partners as partner}
          <a
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            class="opacity-70 hover:opacity-100 transition-opacity"
          >
            {#if partner.logo}
              <img src={partner.logo} alt={partner.name} class="h-16 w-auto object-contain" />
            {:else}
              <span class="font-medium text-lg">{partner.name}</span>
            {/if}
          </a>
        {/each}
      </div>
    </section>
  {/if}
</div>
