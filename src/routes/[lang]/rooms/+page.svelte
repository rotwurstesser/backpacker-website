<script lang="ts">
  import { Button } from "$lib/components/ui";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";
  import PageHeader from "$lib/components/layout/PageHeader.svelte";

  import RoomCard from "$lib/components/rooms/RoomCard.svelte";
  import PriceInfo from "$lib/components/rooms/PriceInfo.svelte";

  export let data: PageData;
  $: ({ lang, t, rooms, settings, roomsPageContent } = data);
  $: currentLang = lang as Lang;

  $: bookingUrl = settings?.bookingUrl
    ? `${settings.bookingUrl}&lang=${currentLang}`
    : `https://secure.dormproject.ch/online/?id=8&lang=${currentLang}`;
</script>

<svelte:head>
  <title>{translate(roomsPageContent?.title, currentLang) || "Rooms"} | Bern Backpackers</title>
  <meta name="description" content={translate(roomsPageContent?.subtitle, currentLang) || ""} />
</svelte:head>

{#if t && rooms && roomsPageContent}
  <!-- Hero -->
  <PageHeader
    title={translate(roomsPageContent.title, currentLang)}
    subtitle={translate(roomsPageContent.subtitle, currentLang)}
  />

  <!-- Rooms Grid -->
  <section class="py-16">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {#each rooms as room (room.id)}
          <RoomCard
            {room}
            {roomsPageContent}
            lang={currentLang}
            {bookingUrl}
            currency={t.common.currency}
          />
        {/each}
      </div>
    </div>
  </section>

  <!-- Price Info -->
  <PriceInfo {roomsPageContent} lang={currentLang} />

  <!-- CTA -->
  <section class="py-16 bg-primary text-primary-foreground">
    <div class="container text-center">
      <h2 class="text-2xl font-bold mb-4">
        {@html md(translate(roomsPageContent.ctaTitle, currentLang))}
      </h2>
      <p class="mb-6 opacity-90">
        {@html md(translate(roomsPageContent.ctaDescription, currentLang))}
      </p>
      <Button
        size="lg"
        variant="secondary"
        href={bookingUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        {@html md(translate(roomsPageContent.bookButton, currentLang))}
      </Button>
    </div>
  </section>
{/if}
