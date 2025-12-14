<script lang="ts">
	import { t as translate } from '$lib/content';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, galleryPageContent, galleryImages } = data);

	let selectedCategory = 'all';
	let selectedImage: string | null = null;
	let selectedImageAlt: string = '';

	// Get available categories from images
	$: availableCategories = galleryImages
		? ['all', ...new Set(galleryImages.map((img) => img.category).filter(Boolean))]
		: ['all'];

	// Filter images by selected category
	$: filteredImages = galleryImages
		? selectedCategory === 'all'
			? galleryImages
			: galleryImages.filter((img) => img.category === selectedCategory)
		: [];

	function getCategoryLabel(category: string): string {
		if (!galleryPageContent?.categories) return category;
		const categoryData = galleryPageContent.categories[category];
		if (!categoryData) return category;
		return translate(categoryData, lang) || category;
	}

	function openLightbox(src: string, alt: string) {
		selectedImage = src;
		selectedImageAlt = alt;
	}

	function closeLightbox() {
		selectedImage = null;
		selectedImageAlt = '';
	}
</script>

<svelte:head>
	<title>{translate(galleryPageContent?.title, lang) || 'Galerie'} | Bern Backpackers</title>
	<meta name="description" content={translate(galleryPageContent?.subtitle, lang) || ''} />
</svelte:head>

{#if galleryPageContent}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{translate(galleryPageContent.title, lang)}</h1>
		<p class="text-lg text-muted-foreground">{translate(galleryPageContent.subtitle, lang)}</p>
	</div>
</section>

<!-- Category Filter -->
{#if availableCategories.length > 1}
<section class="py-8 border-b">
	<div class="container">
		<div class="flex flex-wrap justify-center gap-2">
			{#each availableCategories as category (category)}
				<button
					class="px-4 py-2 rounded-full text-sm font-medium transition-colors {selectedCategory === category
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
				{#each filteredImages as image (image.image)}
					<button
						class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
						on:click={() => openLightbox(image.image, translate(image.alt, lang) || image.title)}
						on:keydown={(e) => {
							if (e.key === 'Enter' || e.key === ' ') {
								e.preventDefault();
								openLightbox(image.image, translate(image.alt, lang) || image.title);
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
						<div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
							<div class="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
								<p class="font-medium">{translate(image.alt, lang) || image.title}</p>
							</div>
						</div>
					</button>
				{/each}
			</div>
		{:else}
			<p class="text-center text-muted-foreground">
				{translate(galleryPageContent.noImagesMessage, lang)}
			</p>
		{/if}
	</div>
</section>

<!-- Lightbox -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
{#if selectedImage}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div
		class="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
		on:click={closeLightbox}
		on:keydown={(e) => {
			if (e.key === 'Escape') {
				closeLightbox();
			}
		}}
		role="dialog"
		aria-modal="true"
		aria-label="Image lightbox"
		tabindex="-1"
	>
		<button
			class="absolute top-4 right-4 text-white hover:text-gray-300 text-4xl focus:outline-none focus:ring-2 focus:ring-white rounded-md px-2"
			on:click={closeLightbox}
			aria-label="Close lightbox"
		>
			&times;
		</button>
		<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
		<img
			src={selectedImage}
			alt={selectedImageAlt}
			class="max-w-full max-h-[90vh] object-contain"
			on:click|stopPropagation
			on:keydown|stopPropagation
		/>
	</div>
{/if}
{/if}

<style>
	/* Placeholder for images that haven't loaded yet */
	.aspect-\[4\/3\] {
		background: linear-gradient(135deg, #f0f0f0 0%, #e0e0e0 100%);
	}
</style>
