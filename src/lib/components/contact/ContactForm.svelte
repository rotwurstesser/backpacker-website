<script lang="ts">
  import { Button, Card } from "$lib/components/ui";
  import { Send } from "lucide-svelte";
  import { t as translate } from "$lib/content";
  import { md } from "$lib/utils";
  import type { Lang } from "$lib/i18n";

  export let contactPageContent: any;
  export let lang: Lang;

  let formData = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  let honeypot = "";
  let formStatus: "idle" | "sending" | "success" | "error" = "idle";

  async function handleSubmit() {
    if (honeypot) {
      formStatus = "success";
      return;
    }

    formStatus = "sending";
    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          "bot-field": honeypot,
          ...formData,
        }).toString(),
      });
      if (response.ok) {
        formStatus = "success";
        formData = { name: "", email: "", subject: "", message: "" };
      } else {
        formStatus = "error";
      }
    } catch {
      formStatus = "error";
    }
  }
</script>

<div>
  <h2 class="text-2xl font-bold mb-6">
    {@html md(translate(contactPageContent.sendMessageTitle, lang))}
  </h2>
  <Card class="p-6">
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      on:submit|preventDefault={handleSubmit}
      class="space-y-4"
    >
      <input type="hidden" name="form-name" value="contact" />
      <div class="hidden" aria-hidden="true">
        <label>
          Don't fill this out if you're human:
          <input name="bot-field" bind:value={honeypot} tabindex="-1" autocomplete="off" />
        </label>
      </div>

      <div>
        <label for="name" class="block text-sm font-medium mb-1.5"
          >{@html md(translate(contactPageContent.formLabels.name, lang))}</label
        >
        <input
          type="text"
          id="name"
          name="name"
          bind:value={formData.name}
          required
          maxlength="100"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label for="email" class="block text-sm font-medium mb-1.5"
          >{@html md(translate(contactPageContent.formLabels.email, lang))}</label
        >
        <input
          type="email"
          id="email"
          name="email"
          bind:value={formData.email}
          required
          maxlength="254"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label for="subject" class="block text-sm font-medium mb-1.5"
          >{@html md(translate(contactPageContent.formLabels.subject, lang))}</label
        >
        <input
          type="text"
          id="subject"
          name="subject"
          bind:value={formData.subject}
          required
          maxlength="200"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring"
        />
      </div>

      <div>
        <label for="message" class="block text-sm font-medium mb-1.5"
          >{@html md(translate(contactPageContent.formLabels.message, lang))}</label
        >
        <textarea
          id="message"
          name="message"
          bind:value={formData.message}
          required
          rows="5"
          maxlength="5000"
          class="w-full px-3 py-2 border border-input rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-ring resize-none"
        ></textarea>
      </div>

      {#if formStatus === "success"}
        <div class="p-4 bg-primary/10 text-primary rounded-md" role="alert" aria-live="polite">
          {@html md(translate(contactPageContent.successMessage, lang))}
        </div>
      {:else if formStatus === "error"}
        <div
          class="p-4 bg-destructive/10 text-destructive rounded-md"
          role="alert"
          aria-live="assertive"
        >
          {@html md(translate(contactPageContent.errorMessage, lang))}
        </div>
      {/if}

      <Button type="submit" class="w-full" disabled={formStatus === "sending"}>
        {#if formStatus === "sending"}
          {@html md(translate(contactPageContent.sendingButton, lang))}
        {:else}
          <Send class="h-4 w-4 mr-2" aria-hidden="true" />
          {@html md(translate(contactPageContent.sendButton, lang))}
        {/if}
      </Button>
    </form>
  </Card>
</div>
