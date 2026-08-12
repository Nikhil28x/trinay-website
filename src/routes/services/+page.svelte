<script lang="ts">
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import { deliverables, services, whyPentesting } from '$lib/data';
</script>

<svelte:head>
	<title>Cyber Security Services | Trinay Cyber Technologies</title>
	<meta
		name="description"
		content="Explore Trinay's web, mobile and network pentesting, vulnerability scanning, ransomware assessment and PCI-ASV scanning services."
	/>
</svelte:head>

<section class="page-hero grid-bg">
	<div class="shell">
		<p class="eyebrow">Cybersecurity Services</p>
		<h1>Prevent Cyber Attacks By Performing Regular Pentests</h1>
		<p>
			Automated and manual security testing shaped around your applications, systems and critical
			assets.
		</p>
	</div>
</section>

<section class="page-service-grid">
	<div class="shell">
		<div class="section-heading split-heading">
			<div>
				<p class="eyebrow">What We Do</p>
				<h2>Our Services</h2>
			</div>
			<p>
				From vulnerability scanning to custom pentests that simulate real-world attacks across your
				IT environment.
			</p>
		</div>
		<div class="service-grid">
			{#each services as service, index}
				<ServiceCard {service} {index} />
			{/each}
		</div>
	</div>
</section>

<section class="content-section approach-section" id="why-pentesting">
	<div class="shell two-column-content">
		<div>
			<p class="eyebrow">Security Posture</p>
			<h2>Why Pentesting?</h2>
			<img src="/images/why-pentesting.jpg" alt="Cyber security assessment" loading="lazy" />
		</div>
		<ul class="check-list">
			{#each whyPentesting as item}<li>{item}</li>{/each}
		</ul>
	</div>
</section>

<section class="content-section" id="deliverables">
	<div class="shell two-column-content">
		<div>
			<p class="eyebrow">What You Receive</p>
			<h2>Deliverables</h2>
			<p>
				Clear reporting for leadership and technical teams, with findings prioritized for strategic
				remediation.
			</p>
		</div>
		<ul class="check-list">
			{#each deliverables as item}<li>{item}</li>{/each}
		</ul>
	</div>
</section>

<section class="section contact-band">
	<div class="shell split-heading">
		<div>
			<p class="eyebrow">Get In Touch</p>
			<h2>Speak with an expert about your specific needs.</h2>
		</div>
		<a class="button button-light" href="/contact#contact-form">Get a Quote <span>↗</span></a>
	</div>
</section>
