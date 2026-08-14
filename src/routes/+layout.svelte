<script lang="ts">
	import 'boxicons/css/boxicons.min.css';
	import '../app.css';
	import Footer from '$lib/components/Footer.svelte';
	import Header from '$lib/components/Header.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href="/images/trinay-cyber-mark-v2.png" />
	<meta name="theme-color" content="#d08835" />
</svelte:head>

<Header />
<main>{@render children()}</main>
<Footer />
