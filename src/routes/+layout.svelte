<script lang="ts">
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/logo_footer.png" />
	<meta name="theme-color" content="#061b21" />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
