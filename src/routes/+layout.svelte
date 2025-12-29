<script lang="ts">
	import '../app.css';
	import { dev } from '$app/environment';

	// Get CSS URL for dev mode workaround
	const cssUrl = dev ? '/src/app.css' : '';
</script>

<svelte:head>
	{#if dev && cssUrl}
		<link rel="stylesheet" href={cssUrl} />
	{/if}
</svelte:head>

<slot />
