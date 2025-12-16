<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { browser } from "$app/environment";
  import Button from "$lib/components/ui/button.svelte";
  import { MapPin } from "lucide-svelte";

  export let lat = 46.9491;
  export let lng = 7.4481;
  export let zoom = 15;
  export let title = "Bern Backpackers";

  let mapElement: HTMLElement;
  let map: any;

  onMount(async () => {
    if (browser) {
      const L = (await import("leaflet")).default;

      map = L.map(mapElement).setView([lat, lng], zoom);

      // CartoDB Voyager Tiles (Clean, Light, Open Source friendly)
      L.tileLayer("https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }).addTo(map);

      // Custom Icon (using Lucide style mostly, but Leaflet needs a specialized icon or simple one)
      // For simplicity and "snazzy" look, let's use a nice custom SVG or just standard for now with a popup
      const icon = L.divIcon({
        html: `<div style="background-color: hsl(var(--primary)); color: white; border-radius: 50%; width: 30px; height: 30px; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 10px rgba(0,0,0,0.2);">
						<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
					   </div>`,
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30],
        popupAnchor: [0, -30],
      });

      L.marker([lat, lng], { icon })
        .addTo(map)
        .bindPopup(`<b>${title}</b><br>Rathausgasse 75`)
        .openPopup();
    }
  });

  onDestroy(() => {
    if (map) {
      map.remove();
    }
  });

  function openExternalMap() {
    // Universal "geo" intent or Google Maps fallback
    const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(title + " Rathausgasse 75 Bern")}`;
    window.open(url, "_blank");
  }
</script>

<div class="relative w-full h-full group">
  <!-- Map Container -->
  <div bind:this={mapElement} class="w-full h-full z-0 min-h-[400px]"></div>

  <!-- "Open in Maps" Floating Button -->
  <div class="absolute bottom-4 right-4 z-[400]">
    <Button variant="default" size="sm" class="shadow-lg gap-2" on:click={openExternalMap}>
      <MapPin class="w-4 h-4" />
      Open in Maps
    </Button>
  </div>
</div>

<style>
  /* Ensure Leaflet CSS controls are compatible */
  :global(.leaflet-control-attribution) {
    font-size: 10px;
    opacity: 0.6;
  }
</style>
