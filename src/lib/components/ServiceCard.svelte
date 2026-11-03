<script lang="ts">
	import type { Service } from '$lib/data';
	import Icon from './Icon.svelte';
	let { service, index = 0 }: { service: Service; index?: number } = $props();
</script>

<a class="service-card" href={`/services/${service.slug}`}>
	<div class="service-card-top">
		<span class="icon-box"><Icon name={service.icon} size={28} /></span><span class="card-arrow"
			>↗</span
		>
	</div>
	<h3>{service.title}</h3>
	<p>{service.short}</p>
	<span class="service-explore">Explore service</span>
</a>
