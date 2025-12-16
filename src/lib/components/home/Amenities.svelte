<script lang="ts">
  import {
    MapPin,
    Wifi,
    Shield,
    CreditCard,
    Bed,
    Users,
    Coffee,
    Home,
    Droplets,
    Lock,
  } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let homeContent: any;
  export let lang: Lang;

  const iconMap: Record<string, typeof MapPin> = {
    MapPin,
    Wifi,
    Shield,
    CreditCard,
    Bed,
    Users,
    Coffee,
    Home,
    Droplets,
    Lock,
  };

  function getIcon(name: string) {
    return iconMap[name] || MapPin;
  }
</script>

<section class="py-20 bg-muted/30">
  <div class="container">
    <h2 class="text-center mb-12">{@html md(translate(homeContent.amenitiesTitle, lang))}</h2>
    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
      {#each homeContent.amenities as amenity (amenity.icon)}
        {@const Icon = getIcon(amenity.icon)}
        <div class="flex flex-col items-center text-center">
          <div class="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-3">
            <Icon class="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <span class="text-sm font-medium">{@html md(translate(amenity.name, lang))}</span>
        </div>
      {/each}
    </div>
  </div>
</section>
