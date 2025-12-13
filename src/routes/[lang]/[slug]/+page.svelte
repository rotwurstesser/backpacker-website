<script lang="ts">
	import { t as translate, safeMarkdown } from '$lib/content';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, page } = data);
</script>

<svelte:head>
	<title>{translate(page.title, lang)} | Bern Backpackers</title>
	<meta name="description" content={translate(page.description, lang)} />
</svelte:head>

<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		{#if page.image}
			<img
				src={page.image}
				alt={translate(page.title, lang)}
				class="w-full max-w-3xl mx-auto rounded-lg shadow-lg mb-8"
			/>
		{/if}
		<h1 class="text-4xl font-bold mb-4">{translate(page.title, lang)}</h1>
	</div>
</section>

<!-- Content - sanitized markdown rendering -->
<section class="py-16">
	<div class="container max-w-3xl">
		<div class="prose prose-lg max-w-none">
			{@html safeMarkdown(page.content, lang)}
		</div>
	</div>
</section>
