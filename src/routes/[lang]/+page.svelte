<script lang="ts">
  import { t as translate } from "$lib/content";
  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";

  import Hero from "$lib/components/home/Hero.svelte";
  import Features from "$lib/components/home/Features.svelte";
  import RoomsPreview from "$lib/components/home/RoomsPreview.svelte";
  import Amenities from "$lib/components/home/Amenities.svelte";
  import CTA from "$lib/components/home/CTA.svelte";

  export let data: PageData;
  $: ({ lang, t, homeContent, rooms, settings } = data);
  $: currentLang = lang as Lang;

  $: bookingUrl = settings?.bookingUrl
    ? `${settings.bookingUrl}&lang=${currentLang}`
    : `https://secure.dormproject.ch/online/?id=8&lang=${currentLang}`;
</script>

<svelte:head>
  <title
    >Bern Backpackers - Hotel Glocke | {translate(homeContent?.heroSubtitle, currentLang)}</title
  >
  <meta name="description" content={translate(homeContent?.heroSubtitle, currentLang)} />
</svelte:head>

{#if t && homeContent}
  <Hero {homeContent} lang={currentLang} {t} {bookingUrl} />

  <Features {homeContent} lang={currentLang} {t} />

  <RoomsPreview {rooms} lang={currentLang} {t} />

  <Amenities {homeContent} lang={currentLang} />

  <CTA {homeContent} lang={currentLang} {t} {bookingUrl} />
{/if}
