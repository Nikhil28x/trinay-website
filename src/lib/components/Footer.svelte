<script lang="ts">
	import { contact, services } from '$lib/data';
</script>

<footer>
	<div class="shell footer-grid">
		<div class="footer-brand">
			<img src="/images/logo_new.png" alt="Trinay Cyber Technologies" />
			<p>World Class Cyber Security.</p>
			<div class="socials">
				<a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Trinay on Facebook"
					>f</a
				>
				<a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="Trinay on LinkedIn"
					>in</a
				>
			</div>
		</div>

		<div>
			<p class="footer-title">Services</p>
			<ul>
				{#each services.slice(0, 3) as service}
					<li><a href={`/services/${service.slug}`}>{service.title}</a></li>
				{/each}
			</ul>
		</div>

		<div>
			<p class="footer-title">Solutions</p>
			<ul>
				{#each services.slice(3) as service}
					<li><a href={`/services/${service.slug}`}>{service.title}</a></li>
				{/each}
			</ul>
		</div>

		<div class="footer-contact">
			<p class="footer-title">Address</p>
			<address>{contact.address}</address>
			<a href={`mailto:${contact.email}`}>{contact.email}</a>
			<a href={`tel:${contact.indiaPhone.replace(/\s/g, '')}`}>{contact.indiaPhone}</a>
			<a href={`tel:${contact.usPhone.replace(/[\s()]/g, '')}`}>{contact.usPhone}</a>
		</div>
	</div>

	<div class="shell footer-bottom">
		<p>© {new Date().getFullYear()} Trinay Cyber Technologies Pvt Ltd. All rights reserved.</p>
		<div>
			<a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms & Conditions</a>
		</div>
	</div>
</footer>
