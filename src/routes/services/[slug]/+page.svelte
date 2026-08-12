<script lang="ts">
	import { deliverables, services, whyPentesting } from '$lib/data';

	let { data } = $props();
	const serviceIndex = services.findIndex((item) => item.slug === data.service.slug);
</script>

<svelte:head>
	<title>{data.service.title} | Trinay Cyber Technologies</title>
	<meta name="description" content={data.service.body} />
</svelte:head>

<section class="service-detail-hero">
	<div>
		<p class="eyebrow">Service / {String(serviceIndex + 1).padStart(2, '0')}</p>
		<h1>{data.service.title}</h1>
		<p>{data.service.body}</p>
		<a class="button button-primary" href="/contact#contact-form">Get a Quote <span>↗</span></a>
	</div>
	<div class="service-detail-image">
		<img src={data.service.image} alt={data.service.title} />
	</div>
</section>

{#if data.service.bullets}
	<section class="content-section approach-section">
		<div class="shell two-column-content">
			<div>
				<p class="eyebrow">PCI ASV Scanning</p>
				<h2>PCI ASV scans are</h2>
			</div>
			<ul class="check-list">
				{#each data.service.bullets as item}<li>{item}</li>{/each}
			</ul>
		</div>
	</section>
{:else}
	<section class="content-section approach-section">
		<div class="shell two-column-content">
			<div>
				<p class="eyebrow">Why Pentesting?</p>
				<h2>Know what matters most.</h2>
			</div>
			<ul class="check-list">
				{#each whyPentesting as item}<li>{item}</li>{/each}
			</ul>
		</div>
	</section>
{/if}

<section class="content-section">
	<div class="shell two-column-content">
		<div>
			<p class="eyebrow">What You Receive</p>
			<h2>Deliverables</h2>
		</div>
		<ul class="check-list">
			{#each deliverables as item}<li>{item}</li>{/each}
		</ul>
	</div>
</section>
