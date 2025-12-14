<script lang="ts">
	import { Button, Card } from '$lib/components/ui';
	import { MapPin, Phone, Mail, Clock, Send } from 'lucide-svelte';
	import { t as translate } from '$lib/content';
	import { md } from '$lib/utils';
	import type { PageData } from './$types';

	export let data: PageData;
	$: ({ lang, settings, contactPageContent } = data);

	let formData = {
		name: '',
		email: '',
		subject: '',
		message: ''
	};

	// Honeypot field for spam protection (should remain empty)
	let honeypot = '';

	let formStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';

	async function handleSubmit() {
		// Spam check - if honeypot field is filled, silently reject
		if (honeypot) {
			formStatus = 'success'; // Fake success to not alert bots
			return;
		}

		formStatus = 'sending';
		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: new URLSearchParams({
					'form-name': 'contact',
					'bot-field': honeypot,
					...formData
				}).toString()
			});
			if (response.ok) {
				formStatus = 'success';
				formData = { name: '', email: '', subject: '', message: '' };
			} else {
				formStatus = 'error';
			}
		} catch {
			formStatus = 'error';
		}
	}
</script>

<svelte:head>
	<title>{translate(contactPageContent?.title, lang) || 'Kontakt'} | Bern Backpackers</title>
	<meta name="description" content={translate(contactPageContent?.subtitle, lang) || ''} />
</svelte:head>

{#if contactPageContent}
<!-- Hero -->
<section class="py-16 bg-gradient-to-br from-primary/10 via-background to-primary/5">
	<div class="container text-center">
		<h1 class="text-4xl font-bold mb-4">{@html md(translate(contactPageContent.title, lang))}</h1>
		<p class="text-lg text-muted-foreground">{@html md(translate(contactPageContent.subtitle, lang))}</p>
	</div>
</section>

<!-- Contact Info & Form -->
<section class="py-16">
	<div class="container">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<!-- Contact Information -->
			<div>
				<h2 class="text-2xl font-bold mb-6">{@html md(translate(contactPageContent.getInTouchTitle, lang))}</h2>
				<div class="space-y-6">
					<Card class="p-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
								<MapPin class="h-5 w-5 text-primary" aria-hidden="true" />
							</div>
							<div>
								<h3 class="font-semibold mb-1">{@html md(translate(contactPageContent.addressLabel, lang))}</h3>
								<p class="text-muted-foreground">{settings?.siteName}</p>
								<p class="text-muted-foreground whitespace-pre-line">{settings?.address}</p>
							</div>
						</div>
					</Card>

					<Card class="p-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
								<Phone class="h-5 w-5 text-primary" aria-hidden="true" />
							</div>
							<div>
								<h3 class="font-semibold mb-1">{@html md(translate(contactPageContent.phoneLabel, lang))}</h3>
								<a href="tel:{settings?.phone?.replace(/\s/g, '')}" class="text-muted-foreground hover:text-primary">
									{settings?.phone}
								</a>
								{#if settings?.fax}
									<p class="text-sm text-muted-foreground mt-1">{@html md(translate(contactPageContent.faxLabel, lang))}: {settings.fax}</p>
								{/if}
							</div>
						</div>
					</Card>

					<Card class="p-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
								<Mail class="h-5 w-5 text-primary" aria-hidden="true" />
							</div>
							<div>
								<h3 class="font-semibold mb-1">{@html md(translate(contactPageContent.emailLabel, lang))}</h3>
								<a href="mailto:{settings?.email}" class="text-muted-foreground hover:text-primary">
									{settings?.email}
								</a>
							</div>
						</div>
					</Card>

					<Card class="p-6">
						<div class="flex items-start gap-4">
							<div class="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
								<Clock class="h-5 w-5 text-primary" aria-hidden="true" />
							</div>
							<div>
								<h3 class="font-semibold mb-1">{@html md(translate(contactPageContent.hoursLabel, lang))}</h3>
								<p class="text-muted-foreground">{settings?.receptionHours}</p>
							</div>
						</div>
					</Card>
				</div>
			</div>

			<!-- Contact Form -->
			<div>
				<h2 class="text-2xl font-bold mb-6">{@html md(translate(contactPageContent.sendMessageTitle, lang))}</h2>
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
						<!-- Honeypot field for spam protection - hidden from users -->
						<div class="hidden" aria-hidden="true">
							<label>
								Don't fill this out if you're human:
								<input name="bot-field" bind:value={honeypot} tabindex="-1" autocomplete="off" />
							</label>
						</div>

						<div>
							<label for="name" class="block text-sm font-medium mb-1.5">{@html md(translate(contactPageContent.formLabels.name, lang))}</label>
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
							<label for="email" class="block text-sm font-medium mb-1.5">{@html md(translate(contactPageContent.formLabels.email, lang))}</label>
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
							<label for="subject" class="block text-sm font-medium mb-1.5">{@html md(translate(contactPageContent.formLabels.subject, lang))}</label>
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
							<label for="message" class="block text-sm font-medium mb-1.5">{@html md(translate(contactPageContent.formLabels.message, lang))}</label>
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

						{#if formStatus === 'success'}
							<div class="p-4 bg-primary/10 text-primary rounded-md" role="alert" aria-live="polite">
								{@html md(translate(contactPageContent.successMessage, lang))}
							</div>
						{:else if formStatus === 'error'}
							<div class="p-4 bg-destructive/10 text-destructive rounded-md" role="alert" aria-live="assertive">
								{@html md(translate(contactPageContent.errorMessage, lang))}
							</div>
						{/if}

						<Button type="submit" class="w-full" disabled={formStatus === 'sending'}>
							{#if formStatus === 'sending'}
								{@html md(translate(contactPageContent.sendingButton, lang))}
							{:else}
								<Send class="h-4 w-4 mr-2" aria-hidden="true" />
								{@html md(translate(contactPageContent.sendButton, lang))}
							{/if}
						</Button>
					</form>
				</Card>
			</div>
		</div>
	</div>
</section>
{/if}
