<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { MapPin, Phone, Mail, Clock } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let contactPageContent: any;
  export let settings: any;
  export let lang: Lang;
</script>

<div>
  <h2 class="text-2xl font-bold mb-6">
    {@html md(translate(contactPageContent.getInTouchTitle, lang))}
  </h2>
  <div class="space-y-6">
    <Card class="p-6">
      <div class="flex items-start gap-4">
        <div
          class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <MapPin class="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">
            {@html md(translate(contactPageContent.addressLabel, lang))}
          </h3>
          <p class="text-muted-foreground">{settings?.siteName}</p>
          <p class="text-muted-foreground whitespace-pre-line">{settings?.address}</p>
        </div>
      </div>
    </Card>

    <Card class="p-6">
      <div class="flex items-start gap-4">
        <div
          class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <Phone class="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">
            {@html md(translate(contactPageContent.phoneLabel, lang))}
          </h3>
          <a
            href="tel:{settings?.phone?.replace(/\s/g, '')}"
            class="text-muted-foreground hover:text-primary"
          >
            {settings?.phone}
          </a>
          {#if settings?.fax}
            <p class="text-sm text-muted-foreground mt-1">
              {@html md(translate(contactPageContent.faxLabel, lang))}: {settings.fax}
            </p>
          {/if}
        </div>
      </div>
    </Card>

    <Card class="p-6">
      <div class="flex items-start gap-4">
        <div
          class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <Mail class="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">
            {@html md(translate(contactPageContent.emailLabel, lang))}
          </h3>
          <a href="mailto:{settings?.email}" class="text-muted-foreground hover:text-primary">
            {settings?.email}
          </a>
        </div>
      </div>
    </Card>

    <Card class="p-6">
      <div class="flex items-start gap-4">
        <div
          class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0"
        >
          <Clock class="h-5 w-5 text-primary" aria-hidden="true" />
        </div>
        <div>
          <h3 class="font-semibold mb-1">
            {@html md(translate(contactPageContent.hoursLabel, lang))}
          </h3>
          <p class="text-muted-foreground">{settings?.receptionHours}</p>
        </div>
      </div>
    </Card>
  </div>
</div>
