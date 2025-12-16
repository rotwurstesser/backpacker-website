<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { MapPin, Wifi, Shield, CreditCard, Bed, Users, Coffee, Home } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md, mdContent } from "$lib/utils";
  import type { Lang, Translations } from "$lib/i18n";

  export let homeContent: any;
  export let lang: Lang;
  export let t: Translations;

  const iconMap: Record<string, typeof MapPin> = {
    MapPin,
    Wifi,
    Shield,
    CreditCard,
    Bed,
    Users,
    Coffee,
    Home,
  };

  function getIcon(name: string) {
    return iconMap[name] || MapPin;
  }
</script>

<section class="py-20 bg-muted/30">
  <div class="container">
    <h2 class="text-center mb-12">{t.features.title}</h2>
    <div class="flex flex-wrap justify-center gap-6">
      {#each homeContent.features as feature (feature.icon)}
        {@const Icon = getIcon(feature.icon)}
        <Card
          class="p-6 text-center hover:shadow-lg transition-shadow w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)]"
        >
          <div
            class="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center"
          >
            <Icon class="h-6 w-6 text-primary" aria-hidden="true" />
          </div>
          <h3 class="font-semibold mb-2">{@html md(translate(feature.title, lang))}</h3>
          <div class="text-sm text-muted-foreground prose dark:prose-invert max-w-none">
            {@html mdContent(translate(feature.description, lang))}
          </div>
        </Card>
      {/each}
    </div>
  </div>
</section>
