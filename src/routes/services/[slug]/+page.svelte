<script lang="ts">
	import { differentiators } from '$lib/data';
	import Icon from '$lib/components/Icon.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
	let { data } = $props();
	const contactHref = $derived(`/contact?service=${encodeURIComponent(data.service.title)}`);
</script>

<svelte:head
	><title>{data.service.title} | Trinay</title><meta
		name="description"
		content={data.service.body}
	/></svelte:head
>
<section class="page-hero page-header watermarked">
	<a class="breadcrumb" href="/services">All services</a>
	<h1>{data.service.title}</h1>
</section>
<section class="detail-hero section watermarked">
	<div>
		<p class="eyebrow">Services</p>
		<h2>{data.service.headline}</h2>
		<p class="detail-lead">{data.service.body}</p>
		<ul class="check-list">
			{#each data.service.outcomes as item}<li>
					<Icon name="check" size={18} /><span>{item}</span>
				</li>{/each}
		</ul>
		<a class="button forest" href={contactHref}>Schedule a call <span>↗</span></a>
	</div>
	<div class="detail-image">
		<img
			src={data.service.image}
			alt={`Technology and professional services supporting ${data.service.title}`}
			width="1586"
			height="992"
			fetchpriority="high"
		/>
	</div>
</section>
<section class="section watermarked">
	<div class="section-heading">
		<div>
			<p class="eyebrow">How we help</p>
			<h2>How can our team<br />help you?</h2>
		</div>
		<p>{data.service.short}</p>
	</div>
	<div class="module-grid">
		{#each data.service.modules as module}<article>
				<h3>{module.title}</h3>
				<p>{module.body}</p>
				<ul class="check-list">
					{#each module.items as item}<li>
							<Icon name="check" size={18} /><span>{item}</span>
						</li>{/each}
				</ul>
			</article>{/each}
	</div>
</section>
<section class="cta-band watermarked">
	<h2>Clarity for your next decision.<br />Delivery your teams can own.</h2>
	<a class="button light" href={contactHref}>Reach out now <span>↗</span></a>
</section>
<section class="section watermarked">
	<div class="section-heading">
		<div>
			<p class="eyebrow">The Trinay difference</p>
			<h2>What makes our<br />approach different</h2>
		</div>
	</div>
	<div class="reasons-grid">
		{#each differentiators as item, i}<article>
				<span class="step-number">{String(i + 1).padStart(2, '0')}</span>
				<h3>{item.title}</h3>
				<p>{item.body}</p>
				<a class="text-link" href={contactHref}>Get started <span>↗</span></a>
			</article>{/each}
	</div>
</section>
<ContactBanner />
