<script lang="ts">
  import { Button } from "$lib/components/ui";
  import LanguageSwitcher from "./LanguageSwitcher.svelte";
  import type { Lang, Translations } from "$lib/i18n";
  import { Menu, X } from "lucide-svelte";
  import { page } from "$app/stores";

  $: lang = $page.data.lang as Lang;
  $: t = $page.data.t as Translations;

  let mobileMenuOpen = false;

  $: bookingUrl = `https://secure.dormproject.ch/online/?id=8&lang=${lang}`;

  $: navItems = [
    { href: `/${lang}`, label: t.nav.home },
    { href: `/${lang}/rooms`, label: t.nav.rooms },
    { href: `/${lang}/gallery`, label: t.nav.gallery },
    { href: `/${lang}/location`, label: t.nav.location },
    { href: `/${lang}/contact`, label: t.nav.contact },
    { href: `/${lang}/links`, label: t.nav.links },
  ];
</script>

<header
  class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
>
  <div class="container flex h-16 items-center justify-between">
    <a href="/{lang}" class="flex items-center space-x-2">
      <span class="text-xl font-bold text-primary">Bern Backpackers</span>
    </a>

    <!-- Desktop Navigation -->
    <nav class="hidden md:flex items-center space-x-6" aria-label="Main navigation">
      {#each navItems as item (item.href)}
        <a href={item.href} class="text-sm font-medium transition-colors hover:text-primary">
          {item.label}
        </a>
      {/each}
    </nav>

    <div class="hidden md:flex items-center space-x-4">
      <LanguageSwitcher />
      <Button href={bookingUrl} target="_blank" rel="noopener noreferrer">
        {t.nav.booking}
      </Button>
    </div>

    <!-- Mobile Menu Button -->
    <button
      class="md:hidden p-2"
      on:click={() => (mobileMenuOpen = !mobileMenuOpen)}
      aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-menu"
    >
      {#if mobileMenuOpen}
        <X class="h-6 w-6" aria-hidden="true" />
      {:else}
        <Menu class="h-6 w-6" aria-hidden="true" />
      {/if}
    </button>
  </div>

  <!-- Mobile Navigation -->
  {#if mobileMenuOpen}
    <div class="md:hidden border-t bg-background" id="mobile-menu">
      <nav class="container py-4 flex flex-col space-y-4" aria-label="Mobile navigation">
        {#each navItems as item (item.href)}
          <a
            href={item.href}
            class="text-sm font-medium transition-colors hover:text-primary"
            on:click={() => (mobileMenuOpen = false)}
          >
            {item.label}
          </a>
        {/each}
        <div class="pt-4 border-t flex flex-col space-y-4">
          <LanguageSwitcher />
          <Button href={bookingUrl} target="_blank" rel="noopener noreferrer" class="w-full">
            {t.nav.booking}
          </Button>
        </div>
      </nav>
    </div>
  {/if}
</header>
