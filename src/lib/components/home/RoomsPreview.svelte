<script lang="ts">
  import { Button, Card } from "$lib/components/ui";
  import { Bed } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang, Translations } from "$lib/i18n";

  export let rooms: any[];
  export let lang: Lang;
  export let t: Translations;
</script>

<section class="py-20">
  <div class="container">
    <div class="text-center mb-12">
      <h2 class="mb-4">{t.rooms.title}</h2>
      <p class="text-muted-foreground">{t.rooms.subtitle}</p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {#each rooms.filter((r) => r.available).slice(0, 5) as room (room.id)}
        <Card class="p-6 hover:shadow-lg transition-shadow">
          <div class="flex items-start justify-between mb-4">
            <div>
              <h3 class="font-semibold">{@html md(translate(room.name, lang))}</h3>
              <p class="text-sm text-muted-foreground">
                {room.bathType === "shared" ? t.rooms.sharedBath : t.rooms.privateBath}
              </p>
            </div>
            <Bed class="h-5 w-5 text-muted-foreground" aria-hidden="true" />
          </div>
          <div class="flex items-baseline gap-1">
            <span class="text-3xl font-bold">{t.rooms.from} {t.common.currency} {room.price}.-</span>
            <span class="text-sm text-muted-foreground">
              {room.priceUnit === "per_bed" ? t.rooms.perBed : t.rooms.perRoom}
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
