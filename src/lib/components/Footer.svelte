<script lang="ts">
  import type { Lang, Translations } from "$lib/i18n";
  import { Mail, Phone, MapPin } from "lucide-svelte";
  import { page } from "$app/stores";

  $: lang = $page.data.lang as Lang;
  $: t = $page.data.t as Translations;

  const currentYear = new Date().getFullYear();
</script>

<footer class="border-t bg-muted/50">
  <div class="container py-12">
    <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
      <!-- Brand -->
      <div class="space-y-4">
        <h3 class="text-lg font-bold text-primary">Bern Backpackers</h3>
        <p class="text-sm text-muted-foreground">Hotel Glocke</p>
        <p class="text-sm text-muted-foreground">{t.footer.member}</p>
        <a
          href="https://www.swisshostels.com/"
          target="_blank"
          rel="noopener noreferrer"
          class="inline-block"
        >
          <img
            src="/images/logos/swiss-hostels.jpg"
            alt="Swiss Hostels member logo"
            class="h-12 rounded"
          />
        </a>
      </div>

      <!-- Contact -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold">{t.nav.contact}</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li class="flex items-center gap-2">
            <MapPin class="h-4 w-4" aria-hidden="true" />
            <span>Rathausgasse 75, CH-3011 Bern</span>
          </li>
          <li class="flex items-center gap-2">
            <Phone class="h-4 w-4" aria-hidden="true" />
            <a href="tel:+41313113771" class="hover:text-primary">+41 31 311 37 71</a>
          </li>
          <li class="flex items-center gap-2">
            <Mail class="h-4 w-4" aria-hidden="true" />
            <a href="mailto:info@bernbackpackers.ch" class="hover:text-primary"
              >info@bernbackpackers.ch</a
            >
          </li>
        </ul>
      </div>

      <!-- Quick Links -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold">Quick Links</h4>
        <ul class="space-y-2 text-sm text-muted-foreground">
          <li><a href="/{lang}/rooms" class="hover:text-primary">{t.nav.rooms}</a></li>
          <li><a href="/{lang}/gallery" class="hover:text-primary">{t.nav.gallery}</a></li>
          <li><a href="/{lang}/location" class="hover:text-primary">{t.nav.location}</a></li>
          <li>
            <a
              href="https://secure.dormproject.ch/online/?id=8&lang={lang}"
              target="_blank"
              rel="noopener noreferrer"
              class="hover:text-primary">{t.nav.booking}</a
            >
          </li>
        </ul>
      </div>

      <!-- Hours -->
      <div class="space-y-4">
        <h4 class="text-sm font-semibold">{t.contact.hours}</h4>
        <p class="text-sm text-muted-foreground">{t.contact.hoursValue}</p>
        <div class="pt-4">
          <h4 class="text-sm font-semibold mb-2">Partners</h4>
          <ul class="space-y-1 text-sm text-muted-foreground">
            <li>
              <a
                href="https://www.berntourismus.ch/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-primary">Bern Tourism</a
              >
            </li>
            <li>
              <a
                href="https://www.city-backpacker.ch/"
                target="_blank"
                rel="noopener noreferrer"
                class="hover:text-primary">City Backpacker Zürich</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="mt-8 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
      <p class="text-sm text-muted-foreground">
        &copy; {currentYear} Bern Backpackers - Hotel Glocke. {t.footer.rights}.
      </p>
      <div class="flex gap-4 text-sm text-muted-foreground">
        <a href="/{lang}/privacy" class="hover:text-primary">{t.footer.privacy}</a>
        <a href="/{lang}/terms" class="hover:text-primary">{t.footer.terms}</a>
      </div>
    </div>
  </div>
</footer>
