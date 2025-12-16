<script lang="ts">
  import { t as translate } from "$lib/content";
  import type { Lang } from "$lib/i18n";

  export let images: any[];
  export let galleryPageContent: any;
  export let lang: Lang;
  export let onImageClick: (index: number, images: any[]) => void;

  let selectedCategory = "all";

  // Get available categories from images
  $: availableCategories = images
    ? ["all", ...new Set(images.map((img) => img.category).filter(Boolean))]
    : ["all"];

  // Filter images by selected category
  $: filteredImages = images
    ? selectedCategory === "all"
      ? images
      : images.filter((img) => img.category === selectedCategory)
    : [];

  $: {
    // Emit filtered images count or something if needed, but for now just local management
  }

  function getCategoryLabel(category: string): string {
    if (!galleryPageContent?.categories) return category;
    const categoryData = galleryPageContent.categories[category];
    if (!categoryData) return category;
    return translate(categoryData, lang) || category;
  }
</script>

<!-- Category Filter -->
{#if availableCategories.length > 1}
  <section class="py-8 border-b">
    <div class="container">
      <div class="flex flex-wrap justify-center gap-2">
        {#each availableCategories as category (category)}
          <button
            class="px-4 py-2 rounded-full text-sm font-medium transition-colors {selectedCategory ===
            category
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted hover:bg-muted/80 text-muted-foreground'}"
            on:click={() => (selectedCategory = category)}
          >
            {getCategoryLabel(category)}
          </button>
        {/each}
      </div>
    </div>
  </section>
{/if}

<!-- Gallery Grid -->
<section class="py-16">
  <div class="container">
    {#if filteredImages.length > 0}
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each filteredImages as image, i (image.image)}
          <!-- Find the original index of this image in the FULL list so lightbox navigation works correctly across filters if we pass full list,
					     OR we pass filtered list to lightbox.
						 Let's pass the filtered index for now, but then lightbox needs filtered list.
						 Simpler: Lightbox handles filtered list. -->
          <button
            class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
            on:click={() => onImageClick(i, filteredImages)}
            on:keydown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onImageClick(i, filteredImages);
              }
            }}
            aria-label={`View full size image: ${translate(image.alt, lang) || image.title}`}
          >
            <img
              src={image.image}
              alt={translate(image.alt, lang) || image.title}
              class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div
              class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end"
            >
              <div class="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                <p class="font-medium">{translate(image.alt, lang) || image.title}</p>
              </div>
            </div>
          </button>
        {/each}
      </div>
    {:else}
      <p class="text-center text-muted-foreground">
        <!-- Check if MD content exists, otherwise render simple text -->
        {translate(galleryPageContent.noImagesMessage, lang)}
      </p>
    {/if}
  </div>
</section>

<style>
  .aspect-\[4\/3\] {
    background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
  }
</style>
