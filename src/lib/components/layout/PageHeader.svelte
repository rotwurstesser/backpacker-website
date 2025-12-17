<script lang="ts">
  import { md, mdContent } from "$lib/utils";

  export let title: string;
  export let subtitle: string | undefined = undefined;
</script>

<section class="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-primary/5">
  <div class="container text-center max-w-3xl mx-auto">
    <h1
      class="text-4xl md:text-6xl mb-6 tracking-tight leading-tight uppercase font-display font-normal"
    >
      {@html md(title)}
    </h1>
    {#if subtitle}
      <div class="text-xl text-muted-foreground leading-relaxed">
        {@html mdContent(subtitle)}
      </div>
    {/if}
    <slot />
  </div>
</section>
