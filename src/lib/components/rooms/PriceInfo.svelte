<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { Info, Check } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let roomsPageContent: any;
  export let lang: Lang;
</script>

<section class="py-12 bg-muted/30">
  <div class="container">
    <Card class="p-6">
      <div class="flex items-start gap-4">
        <Info class="h-6 w-6 text-primary flex-shrink-0 mt-0.5" aria-hidden="true" />
        <div>
          <h3 class="font-semibold mb-2">
            {@html md(translate(roomsPageContent.priceInfoTitle, lang))}
          </h3>
          <ul class="space-y-2 text-sm text-muted-foreground">
            <li>{@html md(translate(roomsPageContent.priceNote, lang))}</li>
            <li class="flex items-center gap-2">
              <Check class="h-4 w-4 text-primary" aria-hidden="true" />
              {@html md(translate(roomsPageContent.sheetsIncluded, lang))}
            </li>
            <li class="flex items-center gap-2">
              <Check class="h-4 w-4 text-primary" aria-hidden="true" />
              {@html md(translate(roomsPageContent.towelsAvailable, lang))}
            </li>
            <li class="flex items-center gap-2">
              <Check class="h-4 w-4 text-primary" aria-hidden="true" />
              {@html md(translate(roomsPageContent.paymentMethods, lang))}
            </li>
          </ul>
        </div>
      </div>
    </Card>
  </div>
</section>
