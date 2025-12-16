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

<section
  class="relative bg-gradient-to-br from-primary/10 via-background to-primary/5 py-20 md:py-32"
>
  <div class="container">
    <div class="max-w-3xl mx-auto text-center space-y-6">
      <span
        class="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium"
      >
        {@html md(translate(homeContent.heroTagline, lang))}
      </span>
      <h1>
        {@html md(translate(homeContent.heroTitle, lang))}
      </h1>
      <p class="text-xl text-muted-foreground">
        {@html md(translate(homeContent.heroSubtitle, lang))}
      </p>
      <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
        <Button size="lg" href={bookingUrl} target="_blank" rel="noopener noreferrer">
          {translate(homeContent.heroCta, lang)}
        </Button>
        <Button size="lg" variant="outline" href="/{lang}/rooms">
          {t.hero.learnMore}
        </Button>
      </div>
    </div>
  </div>
</section>
