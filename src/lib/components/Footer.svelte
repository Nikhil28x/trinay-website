<script lang="ts">
	import { services, contact } from '$lib/data';
	const half = Math.ceil(services.length / 2);
</script>

<footer class="site-footer">
	<div class="footer-statement">
		<h2>Elevate your business with connected technology services. Partner with Trinay to plan, build and adopt what comes next.</h2>
		<a class="button forest" href="/contact">Get started <span>↗</span></a>
	</div>
	<div class="footer-grid">
		<div class="footer-intro">
			<a href="/" aria-label="Trinay home"
				><img
					src="/brand/trinay-logo.png"
					alt="Trinay Services & Solutions"
					width="508"
					height="426"
				/></a
			>
			<h2>About us</h2>
			<p>We build the next technology with passion and confidence.</p>
			<a class="subtle-link" href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
			<a class="subtle-link" href={contact.facebook} target="_blank" rel="noreferrer">Facebook ↗</a>
		</div>
		<div>
			<h2>Services</h2>
			{#each services.slice(0, half) as s}<a href={`/services/${s.slug}`}>{s.title}</a>{/each}
		</div>
		<div>
			<h2>Services</h2>
			{#each services.slice(half) as s}<a href={`/services/${s.slug}`}>{s.title}</a>{/each}
		</div>
		<div>
			<h2>Company</h2>
			<a href="/about">About us</a><a href="/capabilities">Training & workshops</a><a
				href="/contact">Contact us</a
			>
		</div>
		<div>
			<h2>Get in touch</h2>
			<p>{contact.address}</p>
			<a href={`mailto:${contact.email}`}>{contact.email}</a><a
				href={`tel:${contact.indiaPhone.replace(/\s/g, '')}`}>{contact.indiaPhone}</a
			><a href={`tel:${contact.usPhone.replace(/[\s()]/g, '')}`}>{contact.usPhone}</a>
		</div>
	</div>
	<div class="footer-bottom">
		<span>© {new Date().getFullYear()} Trinay. All rights reserved.</span><span
			>Let’s work towards perfect partnership.</span
		>
		<div>
			<a href="/terms-conditions">Terms of use</a><a href="/privacy-policy">Privacy policy</a>
		</div>
	</div>
</footer>
