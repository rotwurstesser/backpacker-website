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
      <!-- Title: Targeting inner <p> tag from markdown -->
      <div
        class="prose dark:prose-invert max-w-none [&>p]:text-4xl [&>p]:md:text-6xl [&>p]:font-bold [&>p]:leading-tight"
      >
        {@html mdContent(translate(homeContent.heroTitle, lang))}
      </div>
      <!-- Subtitle -->
      <div
        class="prose dark:prose-invert max-w-none text-muted-foreground [&>p]:text-xl [&>p]:md:text-2xl"
      >
        {@html mdContent(translate(homeContent.heroSubtitle, lang))}
      </div>
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
