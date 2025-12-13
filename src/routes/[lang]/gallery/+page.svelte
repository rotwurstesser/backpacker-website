<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ t } = data);

	$: galleryImages = t ? [
		{ src: '/images/gallery/common-room.jpg', alt: t.gallery.commonRoom, category: 'facilities' },
		{ src: '/images/gallery/kitchen.jpg', alt: t.gallery.kitchen, category: 'facilities' },
		{ src: '/images/gallery/reception.jpg', alt: t.gallery.reception, category: 'facilities' },
		{ src: '/images/gallery/single-room.jpg', alt: t.gallery.singleRoom, category: 'rooms' },
		{ src: '/images/gallery/double-room.jpg', alt: t.gallery.doubleRoom, category: 'rooms' },
		{ src: '/images/gallery/double-room-view.jpg', alt: `${t.gallery.doubleRoom} - Munster View`, category: 'rooms' },
		{ src: '/images/gallery/2-bed-dorm.jpg', alt: '2-Bed Dormitory', category: 'dorms' },
		{ src: '/images/gallery/4-bed-dorm.jpg', alt: '4-Bed Dormitory', category: 'dorms' },
		{ src: '/images/gallery/6-bed-dorm.jpg', alt: '6-Bed Dormitory', category: 'dorms' }
	] : [];

	let selectedImage: string | null = null;
	let selectedImageAlt: string = '';

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
	<title>{t?.gallery?.title || 'Gallery'} | Bern Backpackers</title>
	<meta name="description" content={t?.gallery?.subtitle || ''} />
</svelte:head>

{#if t}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{t.gallery.title}</h1>
		<p class="text-lg text-muted-foreground">{t.gallery.subtitle}</p>
	</div>
</section>

<!-- Gallery Grid -->
<section class="py-16">
	<div class="container">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{#each galleryImages as image (image.src)}
				<button
					class="group relative aspect-[4/3] overflow-hidden rounded-lg bg-muted cursor-pointer"
					on:click={() => openLightbox(image.src, image.alt)}
					on:keydown={(e) => {
						if (e.key === 'Enter' || e.key === ' ') {
							e.preventDefault();
							openLightbox(image.src, image.alt);
						}
					}}
					aria-label={`View full size image: ${image.alt}`}
				>
					<img
						src={image.src}
						alt={image.alt}
						class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
						loading="lazy"
					/>
					<div class="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-end">
						<div class="p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
							<p class="font-medium">{image.alt}</p>
						</div>
					</div>
				</button>
			{/each}
		</div>
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
