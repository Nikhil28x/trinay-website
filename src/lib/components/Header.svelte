<script lang="ts">
	import { page } from '$app/state';
	import { services } from '$lib/data';

	let menuOpen = $state(false);
	let servicesOpen = $state(false);

	const closeMenu = () => {
		menuOpen = false;
		servicesOpen = false;
	};
</script>

<div class="signal-bar">
	<div class="shell signal-inner">
		<span><i></i> World Class Cyber Security</span>
		<a href="mailto:info@trinaytechnologies.com">info@trinaytechnologies.com</a>
	</div>
</div>

<header>
	<div class="shell nav-wrap">
		<a class="brand" href="/" aria-label="Trinay Cyber Technologies home" onclick={closeMenu}>
			<img src="/images/logo_new.png" alt="Trinay Cyber Technologies" />
		</a>

		<button
			class:active={menuOpen}
			class="menu-toggle"
			type="button"
			aria-label="Toggle navigation"
			aria-expanded={menuOpen}
			onclick={() => (menuOpen = !menuOpen)}
		>
			<span></span><span></span>
		</button>

		<nav class:open={menuOpen} aria-label="Main navigation">
			<a class:active={page.url.pathname === '/'} href="/" onclick={closeMenu}>Home</a>
			<div class="services-menu">
				<button
					class:active={page.url.pathname.startsWith('/services')}
					type="button"
					onclick={() => (servicesOpen = !servicesOpen)}
					aria-expanded={servicesOpen}
				>
					Services <span>⌄</span>
				</button>
				<div class:show={servicesOpen} class="mega-menu">
					<div class="mega-intro">
						<span class="eyebrow">Security Services</span>
						<strong>From scanning to real-world attack simulation.</strong>
						<a href="/services" onclick={closeMenu}>View all services <b>↗</b></a>
					</div>
					<div class="mega-links">
						{#each services as service, index}
							<a href={`/services/${service.slug}`} onclick={closeMenu}>
								<span>{String(index + 1).padStart(2, '0')}</span>{service.title}
							</a>
						{/each}
					</div>
				</div>
			</div>
			<a
				class:active={page.url.pathname === '/' && page.url.hash === '#approach'}
				href="/#approach"
				onclick={closeMenu}>Our Approach</a
			>
			<a class:active={page.url.pathname === '/about'} href="/about" onclick={closeMenu}>About</a>
			<a class:active={page.url.pathname === '/contact'} href="/contact" onclick={closeMenu}
				>Contact</a
			>
			<a class="nav-cta" href="/contact#contact-form" onclick={closeMenu}
				>Get a Quote <span>↗</span></a
			>
		</nav>
	</div>
</header>
