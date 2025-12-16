<script lang="ts">
  import { Button, Card } from "$lib/components/ui";
  import { Bed, Bath, Check } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let room: any;
  export let roomsPageContent: any;
  export let lang: Lang;
  export let bookingUrl: string;
  export let currency: string = "CHF";
</script>

<Card
  class="overflow-hidden hover:shadow-lg transition-shadow {room.available ? '' : 'opacity-75'}"
>
  {#if room.image}
    <div class="aspect-[16/9] bg-muted">
      <img
        src={room.image}
        alt={translate(room.name, lang)}
        class="w-full h-full object-cover {room.available ? '' : 'grayscale filter'}"
        loading="lazy"
      />
    </div>
  {/if}
  <div class="p-6">
    <div class="flex items-start justify-between mb-4">
      <div>
        <h3 class="text-xl font-semibold">{@html md(translate(room.name, lang))}</h3>
        <p class="text-sm text-muted-foreground mt-1">
          {@html md(translate(room.description, lang))}
        </p>
      </div>
    </div>

    <div class="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
      <span class="flex items-center gap-1">
        <Bed class="h-4 w-4" aria-hidden="true" />
        {room.beds}
        {@html md(
          room.beds > 1
            ? translate(roomsPageContent.beds, lang)
            : translate(roomsPageContent.bed, lang),
        )}
      </span>
      <span class="flex items-center gap-1">
        <Bath class="h-4 w-4" aria-hidden="true" />
        {@html md(
          room.bathType === "shared"
            ? translate(roomsPageContent.sharedBath, lang)
            : translate(roomsPageContent.privateBath, lang),
        )}
      </span>
    </div>

    {#if room.features && room.features.length > 0}
      <div class="flex flex-wrap gap-2 mb-4">
        {#each room.features as feature, i (i)}
          <span class="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded">
            <Check class="h-3 w-3 text-primary" aria-hidden="true" />
            {@html md(translate(feature, lang))}
          </span>
        {/each}
      </div>
    {/if}

    <div class="flex items-center justify-between pt-4 border-t">
      <div>
        <span class="text-2xl font-bold">{currency} {room.price}.-</span>
        <span class="text-sm text-muted-foreground ml-1">
          {@html md(
            room.priceUnit === "per_bed"
              ? translate(roomsPageContent.perBed, lang)
              : translate(roomsPageContent.perRoom, lang),
          )}
        </span>
      </div>
      <Button
        href={room.available ? bookingUrl : undefined}
        disabled={!room.available}
        target={room.available ? "_blank" : undefined}
        rel={room.available ? "noopener noreferrer" : undefined}
      >
        {#if room.available}
          {@html md(translate(roomsPageContent.bookButton, lang))}
        {:else}
          {@html md(translate(roomsPageContent.booked, lang))}
        {/if}
      </Button>
    </div>
  </div>
</Card>
