<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { approachOptions, homeFeatures, whyTrinay } from '$lib/data';

	const whyIcons = [
		'bx-shield-quarter',
		'bx-fingerprint',
		'bx-target-lock',
		'bx-money',
		'bx-check-shield',
		'bx-time-five'
	];
</script>

<svelte:head>
	<title>Trinay Cyber Technologies | World Class Cyber Security</title>
	<meta
		name="description"
		content="Trinay has been helping organizations to gain 360 degree visibility over the security gaps and we are happy to extend our services to your esteemed organization. Fill the details today to speak with an expert about your specific needs."
	/>
</svelte:head>

<section class="hero grid-bg">
	<div class="shell hero-grid">
		<div class="hero-copy">
			<h1>We exploit to defend our clients against ever evolving cyber threats</h1>
			<p class="hero-lede">Penetration Testing Service</p>
			<div class="button-row">
				<a class="button button-primary" href="/contact">Contact Us <span>↗</span></a>
			</div>
		</div>

		<div class="hero-console" aria-label="Trinay security posture overview">
			<div class="console-chrome">
				<div class="chrome-dots"><i></i><i></i><i></i></div>
				<span>Penetration Testing Service</span>
				<b>TRINAY</b>
			</div>
			<div class="console-body">
				<div class="console-title">
					<div>
						<small>360 DEGREE VISIBILITY</small>
						<strong class="console-heading">Security posture</strong>
					</div>
					<div class="shield-mark">T</div>
				</div>
				<div class="coverage-map">
					<div class="radar">
						<i></i><i></i><i></i><span></span>
					</div>
					<div class="coverage-list">
						<div>
							<span>01</span>
							<p>Automated scans</p>
							<b>SCAN</b>
						</div>
						<div>
							<span>02</span>
							<p>Custom pentests</p>
							<b>TEST</b>
						</div>
						<div>
							<span>03</span>
							<p>Remediation</p>
							<b>FIX</b>
						</div>
					</div>
				</div>
				<div class="console-foot">
					<span><i></i> Automated techniques</span>
					<span><i></i> Manual techniques</span>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="home-features" aria-label="Trinay security offerings">
	<div class="shell home-feature-grid">
		{#each homeFeatures as feature, index}
			<article class="home-feature-card">
				<div class="feature-card-top">
					<span>{String(index + 1).padStart(2, '0')}</span>
					<div class="feature-symbol" aria-hidden="true"><i></i><i></i></div>
				</div>
				<h2>{feature.title}</h2>
				<p>{feature.body}</p>
				{#if feature.description}<p>{feature.description}</p>{/if}
				{#if feature.bulletHead}<strong>{feature.bulletHead}</strong>{/if}
				{#if feature.bullets}
					<ul>
						{#each feature.bullets as item}<li>{item}</li>{/each}
					</ul>
				{/if}
			</article>
		{/each}
	</div>
</section>

<section class="section approach-section" id="approach">
	<div class="shell approach-grid">
		<div class="sticky-heading">
			<p class="eyebrow">Our Approach</p>
			<h2>You Need More Than Scanning...</h2>
			<div class="approach-photo">
				<img
					src="/images/approach-img-4.jpg"
					alt="Cyber security professional at work"
					loading="lazy"
				/>
				<span>SCAN + TEST + REMEDIATE</span>
			</div>
		</div>

		<div class="approach-copy">
			<p class="large-copy">
				Yes! You read it right. Rather than a typical scan or annual pentests, opt for a continuous
				security programs aka
			</p>
			<div class="cadence-list">
				{#each approachOptions as option, index}
					<div>
						<span>{String(index + 1).padStart(2, '0')}</span>
						<strong>{option}</strong>
					</div>
				{/each}
			</div>
			<p class="remediation">We are here to guide you! Concentrate on <b>REMEDIATION</b>.</p>
			<div class="why-copy">
				<p class="eyebrow">Why is it important?</p>
				<p>
					Identifying vulnerabilities requires more effort than simply running automated scans.
					Automated scan enables better scalability and repeatability for addressing known
					vulnerabilities. However, it is different to exploit the vulnerabilities and know the
					impact of the exploit.
				</p>
				<p>
					Trinay's pentests tests are custom approach based on your environment and simulate
					real-world attacks on various components of your IT environment. It helps to detect the
					true vulnerabilities and assess your security posture.
				</p>
				<p>
					A combination of both serves a robust security posture and stress free cyber security
					program.
				</p>
			</div>
		</div>
	</div>
</section>

<section class="section dark-section">
	<div class="shell">
		<div class="section-heading light-heading">
			<h2>Why Trinay?</h2>
		</div>

		<div class="why-grid">
			{#each whyTrinay as item, index}
				<article class="group">
					<span>{String(index + 1).padStart(2, '0')}</span>
					<div class="why-icon group-hover:-translate-y-1" aria-hidden="true">
						<i class={`bx ${whyIcons[index]}`}></i>
					</div>
					<h3>{item}</h3>
				</article>
			{/each}
		</div>
	</div>
</section>

<section class="section about-home">
	<div class="shell about-home-grid">
		<div class="about-image-wrap">
			<img src="/images/about-img.jpg" alt="Trinay cyber security team" loading="lazy" />
		</div>
		<div class="about-home-copy">
			<h2>About Us</h2>
			<p>
				Triany has started it's journey by realizing the full potential of the technology and the
				cyber security gaps arising due to abrupt increase in use of the technology. Our goal is to
				offer quality services to ensure client's robust security posture to avoid successful
				attacks.
			</p>
			<p>
				Our team brings together decades of experience in cybersecurity. Our team has significant
				experience from different communities in the cyber world. We have spent an unprecedented
				number of hours researching and protecting some of the most sensitive data and systems. Now,
				we are ready to apply that same experience and expertise in defending IT infrastructure and
				its components.
			</p>
		</div>
	</div>
</section>

<section class="section contact-band">
	<div class="shell contact-band-grid">
		<div>
			<h2>Get In Touch</h2>
			<p>
				Trinay has been helping organizations to gain 360 degree visibility over the security gaps
				and we are happy to extend our services to your esteemed organization. Fill the details
				today to speak with an expert about your specific needs.
			</p>
		</div>
		<ContactForm />
	</div>
</section>
