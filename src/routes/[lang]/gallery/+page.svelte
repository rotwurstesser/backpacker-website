<script lang="ts">
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";
  import PageHeader from "$lib/components/layout/PageHeader.svelte";

  import GalleryGrid from "$lib/components/gallery/GalleryGrid.svelte";
  import Lightbox from "$lib/components/gallery/Lightbox.svelte";

  export let data: PageData;
  $: ({ lang, galleryPageContent, galleryImages } = data);
  $: currentLang = lang as Lang;

  let lightboxActive = false;
  let lightboxIndex = 0;
  let lightboxImages: any[] = [];

  function handleImageClick(index: number, filteredImages: any[]) {
    lightboxImages = filteredImages;
    lightboxIndex = index;
    lightboxActive = true;
  }

  function closeLightbox() {
    lightboxActive = false;
  }
</script>

<svelte:head>
  <title>{translate(galleryPageContent?.title, currentLang) || "Galerie"} | Bern Backpackers</title>
  <meta name="description" content={translate(galleryPageContent?.subtitle, currentLang) || ""} />
</svelte:head>

{#if galleryPageContent}
  <!-- Hero -->
  <PageHeader
    title={translate(galleryPageContent.title, currentLang)}
    subtitle={translate(galleryPageContent.subtitle, currentLang)}
  />

  <GalleryGrid
    images={galleryImages || []}
    {galleryPageContent}
    lang={currentLang}
    onImageClick={handleImageClick}
  />

  {#if lightboxActive}
    <Lightbox
      images={lightboxImages}
      initialIndex={lightboxIndex}
      lang={currentLang}
      on:close={closeLightbox}
    />
  {/if}
{/if}
