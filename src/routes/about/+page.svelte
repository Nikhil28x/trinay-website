<script lang="ts">
	import { credentials, lifecycle, services } from '$lib/data';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
</script>

<svelte:head
	><title>About Trinay | Architecture-led professional services</title><meta
		name="description"
		content="Trinay is a partner-led technology solutions and professional services organization connecting architecture, implementation and customer enablement."
	/></svelte:head
>
<section class="page-hero page-header watermarked">
	<p class="eyebrow">Trinay</p>
	<h1>About us</h1>
</section>
<section class="section about-story watermarked">
	<div class="about-photo">
		<img
			src="/media/consulting.webp"
			alt="Technology practitioners collaborating on an infrastructure plan"
			width="1586"
			height="992"
			loading="lazy"
		/>
	</div>
	<div>
		<p class="eyebrow">Who are we?</p>
		<h2>About Trinay</h2>
		<p>
			Our capabilities span enterprise networking and data center fabrics through compute, storage,
			virtualization, containers, cloud and cybersecurity.
		</p>
		<p>
			Consulting, solution architecture and implementation expertise come together with lifecycle
			support. We help teams make informed decisions, deliver the technology and build the knowledge
			to operate it.
		</p>
		<p>
			We work with customers to define requirements, document decisions and carry that context from
			discovery to handover. Training and practical workshops help the people behind the platform
			move forward with confidence.
		</p>
		<a class="button forest" href="/contact">Enquire now <span>↗</span></a>
	</div>
</section>
<section class="section perspective watermarked">
	<div class="section-aside">
		<p class="eyebrow">Our perspective</p>
		<span class="small-rule"></span>
		<p>One architecture context.<br />One accountable partner.</p>
	</div>
	<div>
		<h2>Navigate today’s challenges.<br />Prepare for what comes next.</h2>
		<div class="perspective-columns">
			<p>
				Growth depends on infrastructure that holds up, security that keeps pace and people who
				know how to use the technology in front of them.
			</p>
			<p>
				We help customers make those decisions with evidence, deliver them with discipline and
				hand over the knowledge needed to run them with confidence.
			</p>
		</div>
	</div>
</section>
<section class="section services-section watermarked">
	<div class="section-heading">
		<div>
			<p class="eyebrow">Why choose us</p>
			<h2>What we do</h2>
		</div>
		<a class="text-link" href="/services">All services <span>↗</span></a>
	</div>
	<div class="service-grid">
		{#each services as service, index}<ServiceCard {service} {index} />{/each}
	</div>
</section>
<section class="section method-section watermarked">
	<div class="section-heading">
		<h2>How we work</h2>
		<p>
			A structured lifecycle with shared priorities, clear documentation and customer knowledge
			transfer.
		</p>
	</div>
	<ol class="lifecycle-grid">
		{#each lifecycle as step, i}<li>
				<span class="step-number">{String(i + 1).padStart(2, '0')}</span>
				<h3>{step.title}</h3>
				<p>{step.body}</p>
			</li>{/each}
	</ol>
</section>
<section class="section watermarked">
	<div class="section-heading">
		<h2>Practitioner credentials</h2>
		<p>Technical certifications listed in the Trinay capability profile.</p>
	</div>
	<div class="credentials-grid">
		{#each credentials as group}<div>
				<h3>{group.group}</h3>
				<ul>
					{#each group.items as item}<li>{item}</li>{/each}
				</ul>
			</div>{/each}
	</div>
</section>
<ContactBanner />
