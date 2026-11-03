<script lang="ts">
	import { services, lifecycle, credentials, highlights, reasons } from '$lib/data';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import Icon from '$lib/components/Icon.svelte';
	import ContactBanner from '$lib/components/ContactBanner.svelte';
	let motionPaused = $state(false);
</script>

<svelte:head
	><title>Trinay | Technology solutions, professional services & customer enablement</title><meta
		name="description"
		content="Partner-led IT consulting, cybersecurity, systems integration, AI and customer training. Trinay connects enterprise architecture with delivery and practical enablement."
	/></svelte:head
>

<section class="home-hero watermarked" class:motion-paused={motionPaused}>
	<div class="hero-copy">
		<p class="eyebrow">Welcome to Trinay</p>
		<h1>The next technology,<br /><span>built with confidence.</span></h1>
		<p class="hero-lead">
			We help you design, modernize and secure your technology. Then equip your people to make the
			most of it.
		</p>
		<div class="button-row">
			<a class="button forest" href="/contact">Start your journey <span>↗</span></a><a
				class="text-link"
				href="/services">View our services</a
			>
		</div>
		<div class="hero-caption">
			<span class="caption-rule"></span>Architecture-led. Lifecycle accountable.
		</div>
	</div>
	<div class="hero-art">
		<img
			class="hero-photo"
			src="/media/data-center.webp"
			alt="Enterprise data center infrastructure with warm gold lighting"
			width="1586"
			height="992"
			fetchpriority="high"
		/>
		<div class="art-shade"></div>
		<div class="orbit-system" aria-hidden="true">
			<i></i><i></i><i></i>
			<div class="orbit-core">
				<img src="/brand/trinay-logo.png" alt="" width="508" height="426" />
			</div>
		</div>
		<span class="orbit-label label-network">Networking</span><span class="orbit-label label-cloud"
			>Cloud</span
		><span class="orbit-label label-security">Cybersecurity</span><span
			class="orbit-label label-people">People</span
		><button
			class="motion-control"
			onclick={() => (motionPaused = !motionPaused)}
			aria-pressed={motionPaused}
			>{motionPaused ? 'Play motion' : 'Pause motion'}
			<span aria-hidden="true">{motionPaused ? '▷' : 'Ⅱ'}</span></button
		>
		<div class="art-caption">
			<span>One connected technology estate</span><strong>From architecture to adoption</strong>
		</div>
	</div>
	<div class="hero-lifecycle" aria-label="Full technology lifecycle">
		{#each lifecycle as step}<span>{step.title}</span>{/each}
	</div>
</section>

<section class="highlight-section section watermarked" aria-label="Featured services">
	<div class="highlight-grid">
		{#each highlights as item}<article>
				<span class="icon-box"><Icon name={item.icon} size={28} /></span>
				<h3>{item.title}</h3>
				<p>{item.body}</p>
				<a class="text-link" href={`/services/${item.slug}`}>Learn more <span>↗</span></a>
			</article>{/each}
	</div>
</section>

<section class="section about-story watermarked" id="about">
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
			Trinay is a partner-led technology solutions and professional services organization. We
			bring consulting, solution architecture and implementation together across your enterprise
			environment.
		</p>
		<p>
			From networking and data centers to cloud, cybersecurity and AI, we keep the architecture
			and delivery context connected. Customer training helps that investment translate into
			everyday capability.
		</p>
		<a class="text-link" href="/about">Learn more <span>↗</span></a>
	</div>
</section>

<section class="cta-band watermarked">
	<h2>Architect your digital advantage.</h2>
	<a class="button light" href="/services/it-consulting">Discover how <span>↗</span></a>
</section>

<section class="section reasons-section watermarked" id="why-trinay">
	<div class="section-heading">
		<div>
			<p class="eyebrow">Reasons for choosing us</p>
			<h2>Why choose Trinay</h2>
		</div>
		<p>
			Whether you are modernizing infrastructure, strengthening security or exploring AI, we bring
			the technical depth and the delivery discipline to make it work.
		</p>
	</div>
	<div class="reasons-grid">
		{#each reasons as reason, i}<article>
				<span class="step-number">{String(i + 1).padStart(2, '0')}</span>
				<h3>{reason.title}</h3>
				<p>{reason.body}</p>
			</article>{/each}
	</div>
	<a class="text-link" href="/about">Learn more <span>↗</span></a>
</section>

<section class="services-section section watermarked" id="services">
	<div class="section-heading">
		<div>
			<p class="eyebrow">Our key services</p>
			<h2>Every technology challenge is different.<br />Our practices connect.</h2>
		</div>
		<p>
			Six service practices. One partner from the first conversation to implementation and
			enablement.
		</p>
	</div>
	<div class="service-grid">
		{#each services as service, index}<ServiceCard {service} {index} />{/each}
	</div>
</section>

<section class="section edge-section watermarked" id="approach">
	<div class="section-heading">
		<div>
			<p class="eyebrow">Trinay</p>
			<h2>Building the technology edge<br />for every organization.</h2>
		</div>
	</div>
	<div class="edge-stats">
		<div><strong>{services.length}</strong><span>Connected service practices</span></div>
		<div><strong>{lifecycle.length}</strong><span>Lifecycle stages, one partner</span></div>
		<div><strong>{credentials.length}</strong><span>Certified technology domains</span></div>
	</div>
	<ol class="lifecycle-grid">
		{#each lifecycle as step, i}<li>
				<span class="step-number">{String(i + 1).padStart(2, '0')}</span>
				<h3>{step.title}</h3>
				<p>{step.body}</p>
			</li>{/each}
	</ol>
</section>

<section class="enablement-section section watermarked" id="capabilities">
	<div class="enablement-intro">
		<p class="eyebrow">Innovation & enablement</p>
		<h2>Built around your challenge.<br />Taught in your context.</h2>
		<p>
			Technology delivers more when your people know how to use it. We shape learning around your
			problem statements, your tools and the roles that matter.
		</p>
		<a class="button forest" href="/capabilities">Explore training & workshops <span>↗</span></a>
		<div class="learning-visual">
			<img
				src="/media/hybrid-cloud.webp"
				alt="Visual interpretation of interconnected hybrid cloud infrastructure"
				width="1586"
				height="992"
				loading="lazy"
			/><span>Practical learning, connected to real work</span>
		</div>
	</div>
	<div class="enablement-list">
		<article>
			<div class="enablement-icon"><Icon name="compass" size={30} /></div>
			<h3>Customized training</h3>
			<p>
				Your problem statement sets the syllabus. We identify skill gaps and create technical
				sessions with exercises relevant to your environment.
			</p>
			<span>Problem discovery · Tailored curriculum · Hands-on practice</span>
		</article>
		<article>
			<div class="enablement-icon"><Icon name="spark" size={30} /></div>
			<h3>AI enablement workshops</h3>
			<p>
				Help business users, leaders and technical teams explore useful AI workflows, practice
				prompting and learn how to handle data and verify outputs responsibly.
			</p>
			<span>Role-specific use cases · Guided exercises · Responsible use</span>
		</article>
		<article>
			<div class="enablement-icon"><Icon name="book" size={30} /></div>
			<h3>Product adoption & training decks</h3>
			<p>
				Turn deployment into practical knowledge. We train the relevant users and administrators
				with product walkthroughs, custom decks, lab guides and operational handover.
			</p>
			<span>Product walkthroughs · Custom materials · Knowledge transfer</span>
		</article>
	</div>
</section>
<ContactBanner />
