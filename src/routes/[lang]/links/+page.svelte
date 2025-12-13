<script lang="ts">
	import { Card } from '$lib/components/ui';
	import { ExternalLink } from 'lucide-svelte';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ t } = data);

	const partnerLinks = [
		{
			category: 'Partner Hostels',
			links: [
				{ name: 'City Backpacker - Hotel Biber (Zürich)', url: 'https://www.city-backpacker.ch/' }
			]
		},
		{
			category: 'Affiliations',
			links: [
				{ name: 'Swiss Hostels', url: 'https://www.swisshostels.com/' }
			]
		},
		{
			category: 'Tourism & Information',
			links: [
				{ name: 'Bern Tourism Office', url: 'https://www.bern.com/' },
				{ name: 'Switzerland Tourism', url: 'https://www.myswitzerland.com/' },
				{ name: 'Swiss Backpackers', url: 'https://www.swissbackpackers.ch/' }
			]
		},
		{
			category: 'Travel Resources',
			links: [
				{ name: 'Swiss Federal Railways (SBB)', url: 'https://www.sbb.ch/' },
				{ name: 'Hostelworld', url: 'https://www.hostelworld.com/' },
				{ name: 'Booking.com', url: 'https://www.booking.com/' }
			]
		},
		{
			category: 'Local Events',
			links: [
				{ name: 'Gurten Festival', url: 'https://www.gurtenfestival.ch/' },
				{ name: 'Bern Events Calendar', url: 'https://www.bern.com/en/events' }
			]
		}
	];
</script>

<svelte:head>
	<title>{t?.nav?.links || 'Links'} | Bern Backpackers</title>
	<meta name="description" content="Useful links and partner websites for travelers visiting Bern" />
</svelte:head>

{#if t}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{t.nav.links}</h1>
		<p class="text-lg text-muted-foreground">Useful resources for your trip to Bern</p>
	</div>
</section>

<!-- Links Grid -->
<section class="py-16">
	<div class="container">
		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
			{#each partnerLinks as category (category.category)}
				<Card class="p-6">
					<h2 class="text-lg font-semibold mb-4">{category.category}</h2>
					<ul class="space-y-3">
						{#each category.links as link (link.url)}
							<li>
								<a
									href={link.url}
									target="_blank"
									rel="noopener noreferrer"
									class="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
								>
									<ExternalLink class="h-4 w-4 flex-shrink-0" aria-hidden="true" />
									<span>{link.name}</span>
								</a>
							</li>
						{/each}
					</ul>
				</Card>
			{/each}
		</div>
	</div>
</section>

<!-- Partner Logos -->
<section class="py-16 bg-muted/30">
	<div class="container">
		<h2 class="text-2xl font-bold text-center mb-8">Our Partners</h2>
		<div class="flex flex-wrap justify-center items-center gap-8">
			<a href="https://www.swisshostels.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Swiss Hostels website">
				<img src="/images/logos/swiss-hostels.jpg" alt="Swiss Hostels partner logo" class="h-16 rounded hover:opacity-80 transition-opacity" />
			</a>
			<a href="https://www.bern.com/" target="_blank" rel="noopener noreferrer" aria-label="Visit Bern Tourism website">
				<img src="/images/logos/bern-tourism.jpg" alt="Bern Tourism partner logo" class="h-16 rounded hover:opacity-80 transition-opacity" />
			</a>
		</div>
	</div>
</section>
{/if}
