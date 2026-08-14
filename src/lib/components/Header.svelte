<script lang="ts">
	import { page } from '$app/state';
	import { services } from '$lib/data';

	let menuOpen = $state(false);
	let servicesOpen = $state(false);
	const desktopNavigation = () =>
		typeof window !== 'undefined' && window.matchMedia('(min-width: 1051px)').matches;

	const closeMenu = () => {
		menuOpen = false;
		servicesOpen = false;
	};

	const toggleServices = () => {
		servicesOpen = desktopNavigation() ? false : !servicesOpen;
	};

	const releaseDesktopServicesFocus = (event: MouseEvent) => {
		if (!desktopNavigation()) return;

		servicesOpen = false;
		(event.currentTarget as HTMLButtonElement).blur();
	};

	const handleServicesKeydown = (event: KeyboardEvent) => {
		if (event.key !== 'Escape') return;

		servicesOpen = false;
		(event.currentTarget as HTMLButtonElement).blur();
	};
</script>

<header>
	<div class="shell nav-wrap">
		<a class="brand" href="/" aria-label="Trinay Cyber Technologies home" onclick={closeMenu}>
			<img src="/images/trinay-cyber-mark-v2.png" alt="" />
			<span class="brand-wordmark">
				<strong>TRINAY</strong>
				<small>CYBER TECHNOLOGIES</small>
			</span>
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
					onclick={toggleServices}
					onmouseleave={releaseDesktopServicesFocus}
					onkeydown={handleServicesKeydown}
					aria-haspopup="true"
					aria-controls="services-dropdown"
					aria-expanded={servicesOpen}
				>
					Services <span>⌄</span>
				</button>
				<div id="services-dropdown" class:show={servicesOpen} class="mega-menu">
					<div class="mega-intro">
						<span class="eyebrow">Services</span>
						<strong>Our Services</strong>
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
			<a class:active={page.url.pathname === '/about'} href="/about" onclick={closeMenu}>About</a>
			<a class:active={page.url.pathname === '/contact'} href="/contact" onclick={closeMenu}
				>Contact Us</a
			>
			<a class="nav-cta" href="/contact#contact-form" onclick={closeMenu}
				>Get a Quote <span>↗</span></a
			>
		</nav>
	</div>
</header>
