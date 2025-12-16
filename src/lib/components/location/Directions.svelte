<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { Train, Footprints, Car } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let directions: any[];
  export let title: any;
  export let lang: Lang;
</script>

<section class="py-16 bg-muted/30">
  <div class="container">
    <h2 class="text-2xl font-bold text-center mb-12">{@html md(translate(title, lang))}</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      {#each directions as direction, i (i)}
        <Card class="p-6 h-full hover:shadow-md transition-shadow">
          <div class="flex items-center gap-3 mb-4">
            <div
              class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0"
            >
              <svelte:component
                this={direction.icon}
                class="h-6 w-6 text-primary"
                aria-hidden="true"
              />
            </div>
            <h3 class="text-lg font-semibold">{@html md(translate(direction.title, lang))}</h3>
          </div>
          <p class="text-muted-foreground leading-relaxed">
            {@html md(translate(direction.description, lang))}
          </p>
        </Card>
      {/each}
    </div>
  </div>
</section>
