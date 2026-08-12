<script lang="ts">
	import { whyTrinay } from '$lib/data';
</script>

<svelte:head>
	<title>About Us | Trinay Cyber Technologies</title>
	<meta
		name="description"
		content="Meet Trinay Cyber Technologies and learn about our experience researching and protecting sensitive data and systems."
	/>
</svelte:head>

<section class="page-hero grid-bg">
	<div class="shell">
		<p class="eyebrow">Company</p>
		<h1>About Us</h1>
		<p>Experience and expertise for defending IT infrastructure and its components.</p>
	</div>
</section>

<section class="content-section about-home">
	<div class="shell about-home-grid">
		<div class="about-image-wrap">
			<img src="/images/about-img.jpg" alt="Trinay cyber security team" />
			<div class="image-stamp"><span>360°</span> visibility over security gaps</div>
		</div>
		<div class="about-home-copy">
			<p class="eyebrow">Our Journey</p>
			<h2>Quality services for a robust security posture.</h2>
			<p>
				Trinay has started its journey by realizing the full potential of the technology and the
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

<section class="section dark-section">
	<div class="shell">
		<div class="section-heading split-heading light-heading">
			<div>
				<p class="eyebrow">Why Trinay</p>
				<h2>What defines our work.</h2>
			</div>
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

<section class="section contact-band">
	<div class="shell split-heading">
		<div>
			<p class="eyebrow">Get In Touch</p>
			<h2>We are ready to apply that experience and expertise.</h2>
		</div>
		<a class="button button-light" href="/contact#contact-form">Contact Us <span>↗</span></a>
	</div>
</section>
