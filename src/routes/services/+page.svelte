<script lang="ts">
	import { services } from '$lib/data';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
</script>

<svelte:head
	><title>Our services | Trinay</title><meta
		name="description"
		content="Explore Trinay IT consulting, cybersecurity, information security audit, systems integration, corporate training, AI and data engineering services."
	/></svelte:head
>
<section class="page-hero watermarked">
	<p class="eyebrow">Our services</p>
	<h1>Technology expertise.<br />Connected from end to end.</h1>
	<p>
		Practical advice, engineering depth and customer enablement across six complementary service
		practices.
	</p>
</section>
<section class="section services-section watermarked">
	<div class="service-grid">
		{#each services as service, index}<ServiceCard {service} {index} />{/each}
	</div>
</section>
<ContactBanner />
