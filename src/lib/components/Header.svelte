<script lang="ts">
	import { page } from '$app/state';
	import { services } from '$lib/data';
	let menuOpen = $state(false);
	let servicesOpen = $state(false);
	function close() {
		menuOpen = false;
		servicesOpen = false;
	}
</script>

<svelte:window
	onkeydown={(e) => {
		if (e.key === 'Escape') close();
	}}
/>
<header class="site-header">
	<div class="header-inner">
		<a class="brand" href="/" onclick={close} aria-label="Trinay Services and Solutions home"
			><img
				src="/brand/trinay-logo.png"
				alt="Trinay Services & Solutions"
				width="508"
				height="426"
			/></a
		>
		<button
			class="menu-toggle"
			onclick={() => (menuOpen = !menuOpen)}
			aria-expanded={menuOpen}
			aria-controls="main-navigation"
			aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
			><span></span><span></span></button
		>
		<nav id="main-navigation" class:open={menuOpen} aria-label="Main navigation">
			<a href="/" class:active={page.url.pathname === '/'} onclick={close}>Home</a>
			<a href="/about" class:active={page.url.pathname === '/about'} onclick={close}>About us</a>
			<div class="services-menu">
				<button
					class:active={page.url.pathname.startsWith('/services')}
					onclick={() => (servicesOpen = !servicesOpen)}
					aria-expanded={servicesOpen}
					aria-controls="services-dropdown"
					>Services <span class:turned={servicesOpen}>⌄</span></button
				>
				{#if servicesOpen}<div class="services-dropdown" id="services-dropdown">
						<a href="/services" class="dropdown-overview" onclick={close}
							>Explore all services <span>↗</span></a
						>{#each services as s}<a href={`/services/${s.slug}`} onclick={close}>{s.title}</a
							>{/each}
					</div>{/if}
			</div>
			<a href="/capabilities" class:active={page.url.pathname === '/capabilities'} onclick={close}
				>Capabilities</a
			>
			<a href="/contact" class:active={page.url.pathname === '/contact'} onclick={close}
				>Contact us</a
			>
			<a class="nav-cta" href="/contact" onclick={close}>Get started <span>↗</span></a>
		</nav>
	</div>
</header>
