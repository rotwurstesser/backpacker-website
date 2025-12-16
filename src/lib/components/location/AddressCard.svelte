<script lang="ts">
  import { Card } from "$lib/components/ui";
  import { MapPin, Phone, Mail, Clock } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let locationContent: any;
  export let settings: any;
  export let lang: Lang;
</script>

<Card class="p-6 h-full">
  <h2 class="text-xl font-semibold mb-6">
    {@html md(translate(locationContent.addressCardTitle, lang))}
  </h2>
  <div class="space-y-6">
    <!-- Address -->
    <div class="flex items-start gap-4">
      <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <MapPin class="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p class="font-medium text-lg leading-tight mb-1">
          {settings?.siteName || "Hotel Glocke Backpackers Bern"}
        </p>
        <p class="text-muted-foreground whitespace-pre-line leading-relaxed">
          {settings?.address || "Rathausgasse 75\nCH-3011 Bern\nSwitzerland"}
        </p>
      </div>
    </div>

    <!-- Phone -->
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <Phone class="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p class="text-sm text-muted-foreground font-medium mb-0.5">
          {@html md(translate(locationContent.phoneLabel, lang))}
        </p>
        <a
          href="tel:{settings?.phone?.replace(/\s/g, '') || '+41313113771'}"
          class="text-lg hover:text-primary transition-colors font-medium"
        >
          {settings?.phone || "+41 31 311 37 71"}
        </a>
      </div>
    </div>

    <!-- Email -->
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <Mail class="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p class="text-sm text-muted-foreground font-medium mb-0.5">
          {@html md(translate(locationContent.emailLabel, lang))}
        </p>
        <a
          href="mailto:{settings?.email || 'info@bernbackpackers.ch'}"
          class="text-lg hover:text-primary transition-colors font-medium break-all"
        >
          {settings?.email || "info@bernbackpackers.ch"}
        </a>
      </div>
    </div>

    <!-- Hours -->
    <div class="flex items-center gap-4">
      <div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
        <Clock class="h-5 w-5 text-primary" aria-hidden="true" />
      </div>
      <div>
        <p class="text-sm text-muted-foreground font-medium mb-0.5">
          {@html md(translate(locationContent.hoursLabel, lang))}
        </p>
        <p class="text-lg font-medium">{settings?.receptionHours}</p>
      </div>
    </div>
  </div>
</Card>
