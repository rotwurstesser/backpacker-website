<script lang="ts">
  import Header from "$lib/components/Header.svelte";
  import Footer from "$lib/components/Footer.svelte";
  import { siteConfig, getStructuredData, getOrganizationData } from "$lib/seo";
  import type { LayoutData } from "./$types";

  export let data: LayoutData;

  $: structuredData = getStructuredData(data.lang);
  $: orgData = getOrganizationData();
</script>

<svelte:head>
  <html lang={data.lang} />
  <meta name="author" content={siteConfig.name} />
  <meta name="geo.region" content="CH-BE" />
  <meta name="geo.placename" content="Bern" />
  <meta name="geo.position" content="{siteConfig.geo.latitude};{siteConfig.geo.longitude}" />
  <meta name="ICBM" content="{siteConfig.geo.latitude}, {siteConfig.geo.longitude}" />

  <!-- Open Graph -->
  <meta property="og:site_name" content={siteConfig.name} />
  <meta
    property="og:locale"
    content={data.lang === "de" ? "de_CH" : data.lang === "es" ? "es_ES" : "en_GB"}
  />
  <meta property="og:type" content="website" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />

  <!-- Alternate language links -->
  <link rel="alternate" hreflang="en" href="{siteConfig.url}/en" />
  <link rel="alternate" hreflang="de" href="{siteConfig.url}/de" />
  <link rel="alternate" hreflang="es" href="{siteConfig.url}/es" />
  <link rel="alternate" hreflang="x-default" href="{siteConfig.url}/en" />

  <!-- Structured Data -->
  {@html `<script type="application/ld+json">${JSON.stringify(structuredData)}</script>`}
  {@html `<script type="application/ld+json">${JSON.stringify(orgData)}</script>`}
</svelte:head>

<div class="flex min-h-screen flex-col">
  <!-- Skip to main content link for keyboard navigation -->
  <a
    href="#main-content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:p-4 focus:bg-primary focus:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-ring"
  >
    Skip to main content
  </a>
  <Header />
  <main id="main-content" class="flex-1">
    <slot />
  </main>
  <Footer />
</div>
