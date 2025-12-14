<script lang="ts">
	import { Card } from '$lib/components/ui';
	import { Train, Footprints, Car, MapPin, Phone, Mail, Clock } from 'lucide-svelte';
	import { t as translate } from '$lib/content';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, locationContent, settings } = data);

	$: directions = locationContent ? [
		{
			icon: Train,
			title: locationContent.byTramTitle,
			description: locationContent.byTram
		},
		{
			icon: Footprints,
			title: locationContent.byFootTitle,
			description: locationContent.byFoot
		},
		{
			icon: Car,
			title: locationContent.byCarTitle,
			description: locationContent.byCar
		}
	] : [];
</script>

<svelte:head>
	<title>{translate(locationContent?.title, lang) || 'Location'} | Bern Backpackers</title>
	<meta name="description" content={translate(locationContent?.subtitle, lang) || ''} />
</svelte:head>

{#if locationContent}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{translate(locationContent.title, lang)}</h1>
		<p class="text-lg text-muted-foreground">{translate(locationContent.subtitle, lang)}</p>
	</div>
</section>

<!-- Map & Address -->
<section class="py-16">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
			<!-- Map -->
			<div class="lg:col-span-2">
				<Card class="overflow-hidden h-[400px] lg:h-full">
					<iframe
						src={locationContent.mapEmbedUrl}
						width="100%"
						height="100%"
						style="border:0;"
						allowfullscreen
						loading="lazy"
						referrerpolicy="no-referrer-when-downgrade"
						title="Bern Backpackers Location"
					></iframe>
				</Card>
			</div>

			<!-- Address Card -->
			<div>
				<Card class="p-6">
					<h2 class="text-xl font-semibold mb-6">{translate(locationContent.addressCardTitle, lang)}</h2>
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<MapPin class="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
							<div>
								<p class="font-medium">{settings?.siteName || 'Hotel Glocke Backpackers Bern'}</p>
								<p class="text-muted-foreground whitespace-pre-line">{settings?.address || 'Rathausgasse 75\nCH-3011 Bern\nSwitzerland'}</p>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<Phone class="h-5 w-5 text-primary" aria-hidden="true" />
							<div>
								<p class="text-sm text-muted-foreground">{translate(locationContent.phoneLabel, lang)}</p>
								<a href="tel:{settings?.phone?.replace(/\s/g, '') || '+41313113771'}" class="hover:text-primary">
									{settings?.phone || '+41 31 311 37 71'}
								</a>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<Mail class="h-5 w-5 text-primary" aria-hidden="true" />
							<div>
								<p class="text-sm text-muted-foreground">{translate(locationContent.emailLabel, lang)}</p>
								<a href="mailto:{settings?.email || 'info@bernbackpackers.ch'}" class="hover:text-primary">
									{settings?.email || 'info@bernbackpackers.ch'}
								</a>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<Clock class="h-5 w-5 text-primary" aria-hidden="true" />
							<div>
								<p class="text-sm text-muted-foreground">{translate(locationContent.hoursLabel, lang)}</p>
								<p>{settings?.receptionHours}</p>
							</div>
						</div>
					</div>
				</Card>
			</div>
		</div>
	</div>
</section>

<!-- Directions -->
<section class="py-16 bg-muted/30">
	<div class="container">
		<h2 class="text-2xl font-bold text-center mb-12">{translate(locationContent.directionsTitle, lang)}</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each directions as direction, i (i)}
				<Card class="p-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
							<svelte:component this={direction.icon} class="h-5 w-5 text-primary" aria-hidden="true" />
						</div>
						<h3 class="text-lg font-semibold">{translate(direction.title, lang)}</h3>
					</div>
					<p class="text-muted-foreground text-sm leading-relaxed">{translate(direction.description, lang)}</p>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- SBB Integration -->
<section class="py-16">
	<div class="container max-w-2xl">
		<Card class="p-6">
			<div class="flex items-center gap-3 mb-4">
				<Train class="h-6 w-6 text-primary" aria-hidden="true" />
				<h2 class="text-xl font-semibold">{translate(locationContent.sbbTitle, lang)}</h2>
			</div>
			<p class="text-muted-foreground mb-4">
				{translate(locationContent.sbbDescription, lang)}
			</p>
			<a
				href={locationContent.sbbLinkUrl}
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-primary hover:underline"
			>
				{translate(locationContent.sbbLinkText, lang)}
				<svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
				</svg>
			</a>
		</Card>
	</div>
</section>

<!-- Landmarks -->
<section class="py-16 bg-muted/30">
	<div class="container">
		<h2 class="text-2xl font-bold text-center mb-4">{translate(locationContent.landmarksTitle, lang)}</h2>
		<p class="text-center text-muted-foreground mb-12">{translate(locationContent.landmarksSubtitle, lang)}</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
			{#each locationContent.landmarks as landmark, i (i)}
				<div class="text-center">
					<p class="font-medium">{translate(landmark.name, lang)}</p>
					<p class="text-sm text-muted-foreground">{translate(landmark.distance, lang)}</p>
				</div>
			{/each}
		</div>
	</div>
</section>
{/if}
