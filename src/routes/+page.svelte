<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import ServiceCard from '$lib/components/ServiceCard.svelte';
	import {
		approachOptions,
		deliverables,
		pentestingServices,
		services,
		whyTrinay
	} from '$lib/data';
</script>

<svelte:head>
	<title>Trinay Cyber Technologies | World Class Cyber Security</title>
	<meta
		name="description"
		content="Trinay helps organizations gain 360 degree visibility over security gaps through penetration testing, ransomware assessment and PCI-ASV scanning."
	/>
</svelte:head>

<section class="hero grid-bg">
	<div class="shell hero-grid">
		<div class="hero-copy">
			<p class="eyebrow"><span class="status-dot"></span> World Class Cyber Security</p>
			<h1>We exploit to defend our clients against ever evolving cyber threats.</h1>
			<p class="hero-lede">Penetration Testing Service</p>
			<div class="button-row">
				<a class="button button-primary" href="/contact#contact-form">Contact Us <span>↗</span></a>
				<a class="button button-ghost" href="/services">Explore Services <span>→</span></a>
			</div>
		</div>

		<div class="hero-console" aria-label="Trinay security assessment overview">
			<div class="console-chrome">
				<div class="chrome-dots"><i></i><i></i><i></i></div>
				<span>trinay / security-posture</span>
				<b>● LIVE</b>
			</div>
			<div class="console-body">
				<div class="console-title">
					<div>
						<small>ASSESSMENT VIEW</small>
						<h2>360° visibility</h2>
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
							<p>Applications</p>
							<b>TEST</b>
						</div>
						<div>
							<span>02</span>
							<p>Networks</p>
							<b>TEST</b>
						</div>
						<div>
							<span>03</span>
							<p>Critical assets</p>
							<b>ASSESS</b>
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

<section class="service-rail" aria-label="Trinay services">
	<div class="shell rail-grid">
		<p>Security services</p>
		{#each services as service}
			<a href={`/services/${service.slug}`}>{service.title}</a>
		{/each}
	</div>
</section>

<section class="section" id="services">
	<div class="shell">
		<div class="section-heading split-heading">
			<div>
				<p class="eyebrow">What We Do</p>
				<h2>Our Services</h2>
			</div>
			<p>
				Trinay evaluates applications, systems and critical assets using automated and manual
				techniques.
			</p>
		</div>

		<div class="service-grid">
			{#each services as service, index}
				<ServiceCard {service} {index} />
			{/each}
		</div>
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
				security program.
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
		<div class="section-heading split-heading light-heading">
			<div>
				<p class="eyebrow">Why Trinay</p>
				<h2>Security work shaped around your environment.</h2>
			</div>
			<a class="text-link light-link" href="/about">About Trinay <span>↗</span></a>
		</div>

		<div class="why-grid">
			{#each whyTrinay as item, index}
				<article>
					<span>{String(index + 1).padStart(2, '0')}</span>
					<div class="why-icon" aria-hidden="true"><i></i><i></i></div>
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
			<div class="image-stamp"><span>360°</span> visibility over security gaps</div>
		</div>
		<div class="about-home-copy">
			<p class="eyebrow">About Us</p>
			<h2>Experience built in the cyber world.</h2>
			<p>
				Trinay has started its journey by realizing the full potential of the technology and the
				cyber security gaps arising due to abrupt increase in use of the technology. Our goal is to
				offer quality services to ensure client's robust security posture to avoid successful
				attacks.
			</p>
			<p>
				Our team brings together decades of experience in cybersecurity. Our team has significant
				experience from different communities in the cyber world. We have spent an unprecedented
				number of hours researching and protecting some of the most sensitive data and systems.
			</p>
			<a class="button button-dark" href="/about">More About Trinay <span>↗</span></a>
		</div>
	</div>
</section>

<section class="section deliverables-section">
	<div class="shell deliverables-grid">
		<div>
			<p class="eyebrow">What You Receive</p>
			<h2>Deliverables</h2>
			<p>
				Reporting structured for leadership, technical teams, strategic remediation and secure IT
				environments.
			</p>
			<a class="text-link" href="/services#deliverables">Explore our process <span>↗</span></a>
		</div>
		<div class="deliverable-list">
			{#each deliverables as item, index}
				<div>
					<span>{String(index + 1).padStart(2, '0')}</span>
					<p>{item}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="section contact-band">
	<div class="shell contact-band-grid">
		<div>
			<p class="eyebrow">Get In Touch</p>
			<h2>Gain 360 degree visibility over your security gaps.</h2>
			<p>
				Trinay has been helping organizations to gain 360 degree visibility over the security gaps
				and we are happy to extend our services to your esteemed organization. Fill the details
				today to speak with an expert about your specific needs.
			</p>
			<div class="mini-service-list">
				{#each pentestingServices as item}<span>{item}</span>{/each}
			</div>
		</div>
		<ContactForm />
	</div>
</section>
