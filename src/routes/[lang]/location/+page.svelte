<script lang="ts">
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import { Train, Footprints, Car } from "lucide-svelte";

  import LeafletMap from "$lib/components/map/LeafletMap.svelte";
  import AddressCard from "$lib/components/location/AddressCard.svelte";
  import Directions from "$lib/components/location/Directions.svelte";
  import SBB from "$lib/components/location/SBB.svelte";

  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";

  export let data: PageData;
  $: ({ lang, locationContent, settings } = data);
  $: currentLang = lang as Lang;

  $: directionsList = locationContent
    ? [
        { icon: Train, title: locationContent.byTramTitle, description: locationContent.byTram },
        {
          icon: Footprints,
          title: locationContent.byFootTitle,
          description: locationContent.byFoot,
        },
        { icon: Car, title: locationContent.byCarTitle, description: locationContent.byCar },
      ]
    : [];
</script>

<svelte:head>
  <title>{translate(locationContent?.title, currentLang) || "Location"} | Bern Backpackers</title>
  <meta name="description" content={translate(locationContent?.subtitle, currentLang) || ""} />
  <!-- Leaflet CSS -->
  <link
    rel="stylesheet"
    href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    crossorigin=""
  />
</svelte:head>

{#if locationContent}
  <!-- Hero -->
  <section class="py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
    <div class="container text-center max-w-3xl">
      <h1 class="text-5xl font-bold mb-6 tracking-tight">
        {@html md(translate(locationContent.title, currentLang))}
      </h1>
      <p class="text-xl text-muted-foreground leading-relaxed">
        {@html md(translate(locationContent.subtitle, currentLang))}
      </p>
    </div>
  </section>

  <!-- Map & Address Section -->
  <section class="py-16">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Leaflet Map (Spans 2 columns) -->
        <div
          class="lg:col-span-2 min-h-[450px] rounded-xl overflow-hidden shadow-lg border border-border"
        >
          <LeafletMap />
        </div>

        <!-- Address Card -->
        <div>
          <AddressCard {locationContent} {settings} lang={currentLang} />
        </div>
      </div>
    </div>
  </section>

  <!-- Directions Components -->
  <section class="py-16">
    <div class="container">
      <Directions
        directions={directionsList}
        title={locationContent.directionsTitle}
        lang={currentLang}
      />
    </div>
  </section>

  <!-- SBB Train Link -->
  <SBB content={locationContent} lang={currentLang} />

  <!-- Landmarks: Kept inline as it's simple enough, but could be split if needed -->
  <section class="py-20 bg-muted/30">
    <div class="container">
      <h2 class="text-3xl font-bold text-center mb-4">
        {@html md(translate(locationContent.landmarksTitle, currentLang))}
      </h2>
      <p class="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
        {@html md(translate(locationContent.landmarksSubtitle, currentLang))}
      </p>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 max-w-5xl mx-auto">
        {#each locationContent.landmarks as landmark, i (i)}
          <div class="text-center group">
            <p class="font-semibold text-lg mb-1 group-hover:text-primary transition-colors">
              {@html md(translate(landmark.name, currentLang))}
            </p>
            <div
              class="inline-flex items-center gap-1.5 px-3 py-1 bg-background rounded-full border shadow-sm text-sm text-muted-foreground"
            >
              <Footprints class="w-3.5 h-3.5" />
              {@html md(translate(landmark.distance, currentLang))}
            </div>
          </div>
        {/each}
      </div>
    </div>
  </section>
{/if}
