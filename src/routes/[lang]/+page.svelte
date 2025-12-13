<script lang="ts">
	import { Button, Card } from '$lib/components/ui';
	import { MapPin, Wifi, Shield, CreditCard, Bed, Users, Coffee, Home } from 'lucide-svelte';
	import { t as translate } from '$lib/content';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, t, homeContent, rooms, settings } = data);

	$: bookingUrl = settings?.bookingUrl
		? `${settings.bookingUrl}&lang=${lang}`
		: `https://secure.dormproject.ch/online/?id=8&lang=${lang}`;

	// Map icon names to components
	const iconMap: Record<string, typeof MapPin> = {
		MapPin,
		Wifi,
		Shield,
		CreditCard,
		Bed,
		Users,
		Coffee,
		Home
	};

	function getIcon(name: string) {
		return iconMap[name] || MapPin;
	}
</script>

<svelte:head>
	<title>Bern Backpackers - Hotel Glocke | {translate(homeContent?.heroSubtitle, lang)}</title>
	<meta name="description" content={translate(homeContent?.heroSubtitle, lang)} />
</svelte:head>

{#if t && homeContent}
	<!-- Hero Section -->
	<section
		class="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32"
	>
		<div class="container">
			<div class="max-w-3xl mx-auto text-center space-y-6">
				<span
					class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
				>
					{translate(homeContent.heroTagline, lang)}
				</span>
				<h1 class="text-4xl md:text-6xl font-bold tracking-tight">
					{translate(homeContent.heroTitle, lang)}
				</h1>
				<p class="text-xl text-muted-foreground">
					{translate(homeContent.heroSubtitle, lang)}
				</p>
				<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
					<Button size="lg" href={bookingUrl} target="_blank" rel="noopener noreferrer">
						{translate(homeContent.heroCta, lang)}
					</Button>
					<Button size="lg" variant="outline" href="/{lang}/rooms">
						{t.hero.learnMore}
					</Button>
				</div>
			</div>
		</div>
	</section>

	<!-- Features Section -->
	<section class="py-20 bg-muted/30">
		<div class="container">
			<h2 class="text-3xl font-bold text-center mb-12">{t.features.title}</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{#each homeContent.features as feature (feature.icon)}
					{@const Icon = getIcon(feature.icon)}
					<Card class="p-6 text-center hover:shadow-lg transition-shadow">
						<div
							class="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"
						>
							<Icon class="h-6 w-6 text-primary" aria-hidden="true" />
						</div>
						<h3 class="font-semibold mb-2">{translate(feature.title, lang)}</h3>
						<p class="text-sm text-muted-foreground">{translate(feature.description, lang)}</p>
					</Card>
				{/each}
			</div>
		</div>
	</section>

	<!-- Rooms Preview Section -->
	<section class="py-20">
		<div class="container">
			<div class="text-center mb-12">
				<h2 class="text-3xl font-bold mb-4">{t.rooms.title}</h2>
				<p class="text-muted-foreground">{t.rooms.subtitle}</p>
			</div>

			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{#each rooms.filter((r) => r.available).slice(0, 5) as room (room.id)}
					<Card class="p-6 hover:shadow-lg transition-shadow">
						<div class="flex items-start justify-between mb-4">
							<div>
								<h3 class="font-semibold">{translate(room.name, lang)}</h3>
								<p class="text-sm text-muted-foreground">
									{room.bathType === 'shared' ? t.rooms.sharedBath : t.rooms.privateBath}
								</p>
							</div>
							<Bed class="h-5 w-5 text-muted-foreground" aria-hidden="true" />
						</div>
						<div class="flex items-baseline gap-1">
							<span class="text-3xl font-bold">{t.common.currency} {room.price}.-</span>
							<span class="text-sm text-muted-foreground">
								{room.priceUnit === 'per_bed' ? t.rooms.perBed : t.rooms.perRoom}
							</span>
						</div>
					</Card>
				{/each}
			</div>

			<div class="text-center mt-8 space-y-4">
				<p class="text-sm text-muted-foreground">
					{t.rooms.priceNote}<br />
					{t.rooms.sheetsIncluded} | {t.rooms.towelsAvailable}
				</p>
				<Button href="/{lang}/rooms" variant="outline">
					{t.common.viewAll}
				</Button>
			</div>
		</div>
	</section>

	<!-- Amenities Section -->
	<section class="py-20 bg-muted/30">
		<div class="container">
			<h2 class="text-3xl font-bold text-center mb-12">Amenities</h2>
			<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
				{#each homeContent.amenities as amenity (amenity.icon)}
					{@const Icon = getIcon(amenity.icon)}
					<div class="flex flex-col items-center text-center">
						<div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
							<Icon class="h-6 w-6 text-primary" aria-hidden="true" />
						</div>
						<span class="text-sm font-medium">{translate(amenity.name, lang)}</span>
					</div>
				{/each}
			</div>
		</div>
	</section>

	<!-- CTA Section -->
	<section class="py-20 bg-primary text-primary-foreground">
		<div class="container text-center">
			<h2 class="text-3xl font-bold mb-4">{translate(homeContent.ctaTitle, lang)}</h2>
			<p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
				{translate(homeContent.ctaDescription, lang)}
			</p>
			<Button size="lg" variant="secondary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
				{t.common.bookNow}
			</Button>
		</div>
	</section>
{/if}
