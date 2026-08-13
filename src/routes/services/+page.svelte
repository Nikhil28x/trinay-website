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
		<h1>Prevent Cyber Attacks By Performing Regular Pentests</h1>
		<div class="page-jump-links">
			<a href="#why-pentesting">Why Pentesting?</a>
			<span>/</span>
			<a href="#deliverables">Deliverables</a>
		</div>
	</div>
</section>

<section class="page-service-grid">
	<div class="shell">
		<div class="section-heading">
			<h2>Our Services</h2>
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
			<h2>Deliverables</h2>
		</div>
		<ul class="check-list">
			{#each deliverables as item}<li>{item}</li>{/each}
		</ul>
	</div>
</section>
