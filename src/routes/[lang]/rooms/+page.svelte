<script lang="ts">
	import { Button, Card } from '$lib/components/ui';
	import { Bed, Bath, Check, Info } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, t } = data);

	$: bookingUrl = `https://secure.dormproject.ch/online/?id=8&lang=${lang}`;

	$: rooms = t ? [
		{
			type: t.rooms.dormitory6,
			description: 'Shared room with 6 beds, perfect for budget travelers',
			bath: t.rooms.sharedBath,
			price: 37,
			unit: t.rooms.perBed,
			beds: 6,
			image: '/images/gallery/6-bed-dorm.jpg',
			features: ['Locker', 'Reading light', 'Power outlet']
		},
		{
			type: t.rooms.dormitory2,
			description: 'More privacy with just 2 beds in the room',
			bath: t.rooms.sharedBath,
			price: 49,
			unit: t.rooms.perBed,
			beds: 2,
			image: '/images/gallery/2-bed-dorm.jpg',
			features: ['Locker', 'Reading light', 'Power outlet']
		},
		{
			type: t.rooms.doubleShared,
			description: 'Comfortable double room with shared bathroom facilities',
			bath: t.rooms.sharedBath,
			price: 120,
			unit: t.rooms.perRoom,
			beds: 2,
			image: '/images/gallery/double-room.jpg',
			features: ['Double bed', 'Desk', 'Mirror']
		},
		{
			type: t.rooms.doublePrivate,
			description: 'Double room with your own private bathroom',
			bath: t.rooms.privateBath,
			price: 144,
			unit: t.rooms.perRoom,
			beds: 2,
			image: '/images/gallery/double-room-view.jpg',
			features: ['Double bed', 'Private shower/WC', 'City view']
		},
		{
			type: t.rooms.triple,
			description: 'Ideal for small groups or families',
			bath: t.rooms.sharedBath,
			price: 144,
			unit: t.rooms.perRoom,
			beds: 3,
			image: '/images/gallery/4-bed-dorm.jpg',
			features: ['3 beds', 'Extra space', 'Mirror']
		},
		{
			type: t.rooms.quad,
			description: 'Great value for groups of 4',
			bath: t.rooms.sharedBath,
			price: 164,
			unit: t.rooms.perRoom,
			beds: 4,
			image: '/images/gallery/4-bed-dorm.jpg',
			features: ['4 beds', 'Extra space', 'Mirror']
		},
		{
			type: t.rooms.single,
			description: 'Private room for solo travelers',
			bath: t.rooms.sharedBath,
			price: 76,
			unit: t.rooms.perRoom,
			beds: 1,
			image: '/images/gallery/single-room.jpg',
			features: ['Single bed', 'Desk', 'Mirror']
		}
	] : [];
</script>

<svelte:head>
	<title>{t?.rooms?.title || 'Rooms'} | Bern Backpackers</title>
	<meta name="description" content={t?.rooms?.subtitle || ''} />
</svelte:head>

{#if t}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{t.rooms.title}</h1>
		<p class="text-lg text-muted-foreground">{t.rooms.subtitle}</p>
	</div>
</section>

<!-- Rooms Grid -->
<section class="py-16">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
			{#each rooms as room (room.type)}
				<Card class="overflow-hidden hover:shadow-lg transition-shadow">
					<div class="aspect-[16/9] bg-muted">
						<img
							src={room.image}
							alt={room.type}
							class="w-full h-full object-cover"
							loading="lazy"
						/>
					</div>
					<div class="p-6">
						<div class="flex items-start justify-between mb-4">
							<div>
								<h3 class="text-xl font-semibold">{room.type}</h3>
								<p class="text-sm text-muted-foreground mt-1">{room.description}</p>
							</div>
						</div>

						<div class="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
							<span class="flex items-center gap-1">
								<Bed class="h-4 w-4" aria-hidden="true" />
								{room.beds} {room.beds > 1 ? 'beds' : 'bed'}
							</span>
							<span class="flex items-center gap-1">
								<Bath class="h-4 w-4" aria-hidden="true" />
								{room.bath}
							</span>
						</div>

						<div class="flex flex-wrap gap-2 mb-4">
							{#each room.features as feature (feature)}
								<span class="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
									<Check class="h-3 w-3 text-primary" aria-hidden="true" />
									{feature}
								</span>
							{/each}
						</div>

						<div class="flex items-center justify-between pt-4 border-t">
							<div>
								<span class="text-2xl font-bold">{t.common.currency} {room.price}.-</span>
								<span class="text-sm text-muted-foreground ml-1">{room.unit}</span>
							</div>
							<Button href={bookingUrl} target="_blank" rel="noopener noreferrer">
								{t.common.bookNow}
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
					<h3 class="font-semibold mb-2">Price Information</h3>
					<ul class="space-y-2 text-sm text-muted-foreground">
						<li>{t.rooms.priceNote}</li>
						<li class="flex items-center gap-2">
							<Check class="h-4 w-4 text-primary" aria-hidden="true" />
							{t.rooms.sheetsIncluded}
						</li>
						<li class="flex items-center gap-2">
							<Check class="h-4 w-4 text-primary" aria-hidden="true" />
							{t.rooms.towelsAvailable}
						</li>
						<li class="flex items-center gap-2">
							<Check class="h-4 w-4 text-primary" aria-hidden="true" />
							Credit cards (Visa, Mastercard), Maestro, EC, Postcard and EURO accepted
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
		<h2 class="text-2xl font-bold mb-4">Ready to book?</h2>
		<p class="mb-6 opacity-90">Book directly for the best rates - no booking fees!</p>
		<Button size="lg" variant="secondary" href={bookingUrl} target="_blank" rel="noopener noreferrer">
			{t.common.bookNow}
		</Button>
	</div>
</section>
{/if}
