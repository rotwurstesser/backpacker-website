<script lang="ts">
	import { Button, Card } from '$lib/components/ui';
	import { MapPin, Wifi, Shield, CreditCard, Bed, Users, Coffee, Home } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, t } = data);

	$: bookingUrl = `https://secure.dormproject.ch/online/?id=8&lang=${lang}`;

	$: rooms = t ? [
		{ type: t.rooms.dormitory6, bath: t.rooms.sharedBath, price: 37, unit: t.rooms.perBed },
		{ type: t.rooms.dormitory2, bath: t.rooms.sharedBath, price: 49, unit: t.rooms.perBed },
		{ type: t.rooms.doubleShared, bath: t.rooms.sharedBath, price: 120, unit: t.rooms.perRoom },
		{ type: t.rooms.doublePrivate, bath: t.rooms.privateBath, price: 144, unit: t.rooms.perRoom },
		{ type: t.rooms.single, bath: t.rooms.sharedBath, price: 76, unit: t.rooms.perRoom }
	] : [];
</script>

<svelte:head>
	<title>Bern Backpackers - Hotel Glocke | {t?.hero?.subtitle || ''}</title>
	<meta name="description" content={t?.hero?.subtitle || ''} />
</svelte:head>

{#if t}
<!-- Hero Section -->
<section class="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32">
	<div class="container">
		<div class="max-w-3xl mx-auto text-center space-y-6">
			<span class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium">
				{t.hero.tagline}
			</span>
			<h1 class="text-4xl md:text-6xl font-bold tracking-tight">
				{t.hero.title}
			</h1>
			<p class="text-xl text-muted-foreground">
				{t.hero.subtitle}
			</p>
			<div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
				<Button size="lg" href={bookingUrl} target="_blank" rel="noopener noreferrer">
					{t.hero.cta}
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
			<Card class="p-6 text-center hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
					<MapPin class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<h3 class="font-semibold mb-2">{t.features.location.title}</h3>
				<p class="text-sm text-muted-foreground">{t.features.location.description}</p>
			</Card>

			<Card class="p-6 text-center hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
					<Wifi class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<h3 class="font-semibold mb-2">{t.features.amenities.title}</h3>
				<p class="text-sm text-muted-foreground">{t.features.amenities.description}</p>
			</Card>

			<Card class="p-6 text-center hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
					<Shield class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<h3 class="font-semibold mb-2">{t.features.security.title}</h3>
				<p class="text-sm text-muted-foreground">{t.features.security.description}</p>
			</Card>

			<Card class="p-6 text-center hover:shadow-lg transition-shadow">
				<div class="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
					<CreditCard class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<h3 class="font-semibold mb-2">{t.features.value.title}</h3>
				<p class="text-sm text-muted-foreground">{t.features.value.description}</p>
			</Card>
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
			{#each rooms as room (room.type)}
				<Card class="p-6 hover:shadow-lg transition-shadow">
					<div class="flex items-start justify-between mb-4">
						<div>
							<h3 class="font-semibold">{room.type}</h3>
							<p class="text-sm text-muted-foreground">{room.bath}</p>
						</div>
						<Bed class="h-5 w-5 text-muted-foreground" aria-hidden="true" />
					</div>
					<div class="flex items-baseline gap-1">
						<span class="text-3xl font-bold">{t.common.currency} {room.price}.-</span>
						<span class="text-sm text-muted-foreground">{room.unit}</span>
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
			<div class="flex flex-col items-center text-center">
				<div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
					<Wifi class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<span class="text-sm font-medium">Free WLAN</span>
			</div>
			<div class="flex flex-col items-center text-center">
				<div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
					<Coffee class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<span class="text-sm font-medium">Kitchen</span>
			</div>
			<div class="flex flex-col items-center text-center">
				<div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
					<Users class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<span class="text-sm font-medium">Common Room</span>
			</div>
			<div class="flex flex-col items-center text-center">
				<div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
					<Home class="h-6 w-6 text-primary" aria-hidden="true" />
				</div>
				<span class="text-sm font-medium">Laundry</span>
			</div>
		</div>
	</div>
</section>

<!-- CTA Section -->
<section class="py-20 bg-primary text-primary-foreground">
	<div class="container text-center">
		<h2 class="text-3xl font-bold mb-4">Ready to book your stay?</h2>
		<p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
			Experience the best of Bern's Old Town from our central location. Book directly for the best rates.
		</p>
		<Button size="lg" variant="secondary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
			{t.common.bookNow}
		</Button>
	</div>
</section>
{/if}
