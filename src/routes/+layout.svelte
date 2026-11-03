<script lang="ts">
	import '../app.css';
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	let { children } = $props();
</script>

<svelte:head
	><link rel="icon" href="/brand/trinay-logo.png" /><meta
		name="theme-color"
		content="#173d34"
	/></svelte:head
>
<a class="skip-link" href="#main-content">Skip to main content</a>
<div class="page-frame">
	<Header />
	<main id="main-content">{@render children()}</main>
	<Footer />
</div>
