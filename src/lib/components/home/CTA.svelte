<script lang="ts">
  import { Button } from "$lib/components/ui";
  import { t as translate } from "$lib/content";
  import { md, mdContent } from "$lib/utils";
  import type { Lang, Translations } from "$lib/i18n";

  export let homeContent: any;
  export let lang: Lang;
  export let t: Translations;
  export let bookingUrl: string;
</script>

<section class="py-20 container text-center">
  <div class="max-w-2xl mx-auto bg-primary/5 rounded-2xl p-8 md:p-12">
    <h2 class="mb-4">{@html md(translate(homeContent.ctaTitle, lang))}</h2>
    <div class="mb-8 prose dark:prose-invert max-w-none mx-auto">
      {@html mdContent(translate(homeContent.ctaDescription, lang))}
    </div>
    <Button size="lg" href={bookingUrl} target="_blank" rel="noopener noreferrer">
      {translate(homeContent.heroCta, lang)}
    </Button>
  </div>
</section>
