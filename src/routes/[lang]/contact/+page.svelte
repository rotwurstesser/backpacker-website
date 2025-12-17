<script lang="ts">
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { PageData } from "./$types";
  import type { Lang } from "$lib/i18n";

  import ContactInfo from "$lib/components/contact/ContactInfo.svelte";
  import ContactForm from "$lib/components/contact/ContactForm.svelte";
  import PageHeader from "$lib/components/layout/PageHeader.svelte";

  export let data: PageData;
  $: ({ lang, settings, contactPageContent } = data);
  $: currentLang = lang as Lang;
</script>

<svelte:head>
  <title>{translate(contactPageContent?.title, currentLang) || "Kontakt"} | Bern Backpackers</title>
  <meta name="description" content={translate(contactPageContent?.subtitle, currentLang) || ""} />
</svelte:head>

{#if contactPageContent}
  <!-- Hero -->
  <!-- Hero -->
  <PageHeader
    title={translate(contactPageContent.title, currentLang)}
    subtitle={translate(contactPageContent.subtitle, currentLang)}
  />

  <!-- Contact Info & Form -->
  <section class="py-16">
    <div class="container">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <!-- Contact Information -->
        <ContactInfo {contactPageContent} {settings} lang={currentLang} />

        <!-- Contact Form -->
        <ContactForm {contactPageContent} lang={currentLang} />
      </div>
    </div>
  </section>
{/if}
