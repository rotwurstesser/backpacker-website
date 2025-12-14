<script lang="ts">
	import { Button, Card } from '$lib/components/ui';
	import { Bed, Bath, Check, Info } from 'lucide-svelte';
	import { t as translate } from '$lib/content';
	import { md } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, t, rooms, settings, roomsPageContent } = data);

	$: bookingUrl = settings?.bookingUrl
		? `${settings.bookingUrl}&lang=${lang}`
		: `https://secure.dormproject.ch/online/?id=8&lang=${lang}`;
</script>

<svelte:head>
	<title>{translate(roomsPageContent?.title, lang) || 'Rooms'} | Bern Backpackers</title>
	<meta name="description" content={translate(roomsPageContent?.subtitle, lang) || ''} />
</svelte:head>

{#if t && rooms && roomsPageContent}
	<!-- Hero -->
	<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
		<div class="container text-center">
			<h1 class="text-4xl font-bold mb-4">{translate(roomsPageContent.title, lang)}</h1>
			<p class="text-lg text-muted-foreground">{translate(roomsPageContent.subtitle, lang)}</p>
		</div>
	</section>

	<!-- Rooms Grid -->
	<section class="py-16">
		<div class="container">
			<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
				{#each rooms.filter((r) => r.available) as room (room.id)}
					<Card class="overflow-hidden hover:shadow-lg transition-shadow">
						{#if room.image}
							<div class="aspect-[16/9] bg-muted">
								<img
									src={room.image}
									alt={translate(room.name, lang)}
									class="w-full h-full object-cover"
									loading="lazy"
								/>
							</div>
						{/if}
						<div class="p-6">
							<div class="flex items-start justify-between mb-4">
								<div>
									<h3 class="text-xl font-semibold">{translate(room.name, lang)}</h3>
									<p class="text-sm text-muted-foreground mt-1">
										{@html md(translate(room.description, lang))}
									</p>
								</div>
							</div>

							<div class="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
								<span class="flex items-center gap-1">
									<Bed class="h-4 w-4" aria-hidden="true" />
									{room.beds}
									{room.beds > 1 ? translate(roomsPageContent.beds, lang) : translate(roomsPageContent.bed, lang)}
								</span>
								<span class="flex items-center gap-1">
									<Bath class="h-4 w-4" aria-hidden="true" />
									{room.bathType === 'shared' ? translate(roomsPageContent.sharedBath, lang) : translate(roomsPageContent.privateBath, lang)}
								</span>
							</div>

							{#if room.features && room.features.length > 0}
								<div class="flex flex-wrap gap-2 mb-4">
									{#each room.features as feature, i (i)}
										<span class="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
											<Check class="h-3 w-3 text-primary" aria-hidden="true" />
											{translate(feature, lang)}
										</span>
									{/each}
								</div>
							{/if}

							<div class="flex items-center justify-between pt-4 border-t">
								<div>
									<span class="text-2xl font-bold">{t.common.currency} {room.price}.-</span>
									<span class="text-sm text-muted-foreground ml-1">
										{room.priceUnit === 'per_bed' ? translate(roomsPageContent.perBed, lang) : translate(roomsPageContent.perRoom, lang)}
									</span>
								</div>
								<Button href={bookingUrl} target="_blank" rel="noopener noreferrer">
									{translate(roomsPageContent.bookButton, lang)}
								</Button>
							</div>
						</div>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Price Info -->
	<section class="py-12 bg-muted/30">
		<div class="container">
			<Card class="p-6">
				<div class="flex items-start gap-4">
					<Info class="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
					<div>
						<h3 class="font-semibold mb-2">{translate(roomsPageContent.priceInfoTitle, lang)}</h3>
						<ul class="space-y-2 text-sm text-muted-foreground">
							<li>{translate(roomsPageContent.priceNote, lang)}</li>
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary" aria-hidden="true" />
								{translate(roomsPageContent.sheetsIncluded, lang)}
							</li>
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary" aria-hidden="true" />
								{translate(roomsPageContent.towelsAvailable, lang)}
							</li>
							<li class="flex items-center gap-2">
								<Check class="h-4 w-4 text-primary" aria-hidden="true" />
								{translate(roomsPageContent.paymentMethods, lang)}
							</li>
						</ul>
					</div>
				</div>
			</Card>
		</div>
	</section>

	<!-- CTA -->
	<section class="py-16 bg-primary text-primary-foreground">
		<div class="container text-center">
			<h2 class="text-2xl font-bold mb-4">{translate(roomsPageContent.ctaTitle, lang)}</h2>
			<p class="mb-6 opacity-90">{@html md(translate(roomsPageContent.ctaDescription, lang))}</p>
			<Button
				size="lg"
				variant="secondary"
				href={bookingUrl}
				target="_blank"
				rel="noopener noreferrer"
			>
				{translate(roomsPageContent.bookButton, lang)}
			</Button>
		</div>
	</section>
{/if}
