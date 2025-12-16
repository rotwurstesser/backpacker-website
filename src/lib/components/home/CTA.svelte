<script lang="ts">
  import { Button } from "$lib/components/ui";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang, Translations } from "$lib/i18n";

  export let homeContent: any;
  export let lang: Lang;
  export let t: Translations;
  export let bookingUrl: string;
</script>

<section class="py-20 bg-primary text-primary-foreground">
  <div class="container text-center">
    <h2 class="mb-4">{@html md(translate(homeContent.ctaTitle, lang))}</h2>
    <p class="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
      {@html md(translate(homeContent.ctaDescription, lang))}
    </p>
    <Button
      size="lg"
      variant="secondary"
      href={bookingUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {t.common.bookNow}
    </Button>
  </div>
</section>
