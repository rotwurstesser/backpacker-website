<script lang="ts">
  import { t as translate } from "$lib/content";
  import type { Lang } from "$lib/i18n";
  import { createEventDispatcher } from "svelte";

  export let images: any[];
  export let initialIndex: number = 0;
  export let lang: Lang;

  const dispatch = createEventDispatcher();

  let currentIndex = initialIndex;
  $: selectedImage = images[currentIndex];

  function close() {
    dispatch("close");
  }

  function next() {
    currentIndex = currentIndex < images.length - 1 ? currentIndex + 1 : 0;
  }

  function prev() {
    currentIndex = currentIndex > 0 ? currentIndex - 1 : images.length - 1;
  }

  function handleKeydown(e: KeyboardEvent) {
    if (e.key === "Escape") close();
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  }
</script>

<svelte:window on:keydown={handleKeydown} />

<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
  class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
  on:click={close}
  role="dialog"
  aria-modal="true"
  aria-label="Image lightbox"
  tabindex="-1"
>
  <!-- Close button -->
  <button
    class="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl focus:outline-none focus:ring-2 focus:ring-white rounded-md px-2 z-10"
    on:click={close}
    aria-label="Close lightbox"
  >
    &times;
  </button>

  <!-- Previous button -->
  <button
    class="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
    on:click|stopPropagation={prev}
    aria-label="Previous image"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
    </svg>
  </button>

  <!-- Next button -->
  <button
    class="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
    on:click|stopPropagation={next}
    aria-label="Next image"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
    </svg>
  </button>

  <!-- Image -->
  <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
  <img
    src={selectedImage.image}
    alt={translate(selectedImage.alt, lang) || selectedImage.title}
    class="max-w-full max-h-[90vh] object-contain"
    on:click|stopPropagation
    on:keydown|stopPropagation
  />

  <!-- Image counter -->
  <div
    class="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-3 py-1 rounded-full"
  >
    {currentIndex + 1} / {images.length}
  </div>
</div>
