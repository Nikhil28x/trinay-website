<script lang="ts">
	import type { Service } from '$lib/data';

	let { service, index = 0 }: { service: Service; index?: number } = $props();
</script>

<article class="service-card">
	<a
		class="service-image"
		href={`/services/${service.slug}`}
		aria-label={`Learn about ${service.title}`}
	>
		<img src={service.image} alt="" loading="lazy" />
		<span class="service-number">{String(index + 1).padStart(2, '0')}</span>
	</a>
	<div class="service-copy">
		<h3><a href={`/services/${service.slug}`}>{service.title}</a></h3>
		<p>{service.body}</p>
		<a class="text-link" href={`/services/${service.slug}`}>Explore service <span>↗</span></a>
	</div>
</article>
