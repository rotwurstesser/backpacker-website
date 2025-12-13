<script lang="ts">
	import { Card } from '$lib/components/ui';
	import { Train, Footprints, Car, MapPin, Phone, Mail, Clock } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ t } = data);

	$: directions = t ? [
		{
			icon: Train,
			title: t.location.byTram,
			description: t.location.byTramDesc
		},
		{
			icon: Footprints,
			title: t.location.byFoot,
			description: t.location.byFootDesc
		},
		{
			icon: Car,
			title: t.location.byCar,
			description: t.location.byCarDesc
		}
	] : [];
</script>

<svelte:head>
	<title>{t?.location?.title || 'Location'} | Bern Backpackers</title>
	<meta name="description" content={t?.location?.subtitle || ''} />
</svelte:head>

{#if t}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{t.location.title}</h1>
		<p class="text-lg text-muted-foreground">{t.location.subtitle}</p>
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
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2724.2283251397373!2d7.448082776895456!3d46.94811257113962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478e39b8a88b82d1%3A0x3c6ecfd3c0ef2dc5!2sRathausgasse%2075%2C%203011%20Bern%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1702500000000!5m2!1sen!2sus"
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
					<h2 class="text-xl font-semibold mb-6">{t.location.address}</h2>
					<div class="space-y-4">
						<div class="flex items-start gap-3">
							<MapPin class="h-5 w-5 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
							<div>
								<p class="font-medium">Hotel Glocke Backpackers Bern</p>
								<p class="text-muted-foreground">Rathausgasse 75</p>
								<p class="text-muted-foreground">CH-3011 Bern</p>
								<p class="text-muted-foreground">Switzerland</p>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<Phone class="h-5 w-5 text-primary" aria-hidden="true" />
							<div>
								<p class="text-sm text-muted-foreground">{t.contact.phone}</p>
								<a href="tel:+41313113771" class="hover:text-primary">+41 31 311 37 71</a>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<Mail class="h-5 w-5 text-primary" aria-hidden="true" />
							<div>
								<p class="text-sm text-muted-foreground">{t.contact.email}</p>
								<a href="mailto:info@bernbackpackers.ch" class="hover:text-primary">info@bernbackpackers.ch</a>
							</div>
						</div>

						<div class="flex items-center gap-3">
							<Clock class="h-5 w-5 text-primary" aria-hidden="true" />
							<div>
								<p class="text-sm text-muted-foreground">{t.contact.hours}</p>
								<p>{t.contact.hoursValue}</p>
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
		<h2 class="text-2xl font-bold text-center mb-12">Getting Here</h2>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each directions as direction (direction.title)}
				<Card class="p-6">
					<div class="flex items-center gap-3 mb-4">
						<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
							<svelte:component this={direction.icon} class="h-5 w-5 text-primary" aria-hidden="true" />
						</div>
						<h3 class="text-lg font-semibold">{direction.title}</h3>
					</div>
					<p class="text-muted-foreground text-sm leading-relaxed">{direction.description}</p>
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
				<h2 class="text-xl font-semibold">Swiss Railways Timetable</h2>
			</div>
			<p class="text-muted-foreground mb-4">
				Plan your journey to Bern using the Swiss Federal Railways (SBB).
			</p>
			<a
				href="https://www.sbb.ch/en/buying/pages/fahrplan/fahrplan.xhtml?nach=Bern"
				target="_blank"
				rel="noopener noreferrer"
				class="inline-flex items-center gap-2 text-primary hover:underline"
			>
				Open SBB Timetable
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
		<h2 class="text-2xl font-bold text-center mb-4">Nearby Landmarks</h2>
		<p class="text-center text-muted-foreground mb-12">Our hostel is located in the heart of Bern's UNESCO World Heritage Old Town</p>
		<div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
			<div class="text-center">
				<p class="font-medium">Zytglogge</p>
				<p class="text-sm text-muted-foreground">1 min walk</p>
			</div>
			<div class="text-center">
				<p class="font-medium">Train Station</p>
				<p class="text-sm text-muted-foreground">10 min walk</p>
			</div>
			<div class="text-center">
				<p class="font-medium">Bärengraben</p>
				<p class="text-sm text-muted-foreground">5 min walk</p>
			</div>
			<div class="text-center">
				<p class="font-medium">Bundeshaus</p>
				<p class="text-sm text-muted-foreground">8 min walk</p>
			</div>
		</div>
	</div>
</section>
{/if}
