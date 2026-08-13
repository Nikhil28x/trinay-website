<script lang="ts">
	import ContactForm from '$lib/components/ContactForm.svelte';
	import { contact } from '$lib/data';
</script>

<svelte:head>
	<title>Contact Us | Trinay Cyber Technologies</title>
	<meta
		name="description"
		content="Contact Trinay Cyber Technologies to speak with a cyber security expert about your specific needs."
	/>
</svelte:head>

<section class="page-hero grid-bg">
	<div class="shell">
		<h1>Contact Us</h1>
	</div>
</section>

<section class="content-section">
	<div class="shell contact-page-grid">
		<div class="contact-page-form">
			<h2>Write Us</h2>
			<ContactForm mode="contact" />
		</div>
		<div>
			<p class="eyebrow">Our Contact Details</p>
			<div class="contact-cards">
				<div class="contact-card">
					<span>Address</span>
					<p>{contact.address}</p>
				</div>
				<div class="contact-card">
					<span>Phone / India</span>
					<a href={`tel:${contact.indiaPhone.replace(/\s/g, '')}`}>{contact.indiaPhone}</a>
				</div>
				<div class="contact-card">
					<span>Phone / United States</span>
					<a href={`tel:${contact.usPhone.replace(/[\s()]/g, '')}`}>{contact.usPhone}</a>
				</div>
				<div class="contact-card">
					<span>Email</span>
					<a href={`mailto:${contact.email}`}>{contact.email}</a>
				</div>
			</div>
			<div class="contact-socials">
				<h3>Follow us:</h3>
				<div class="socials">
					<a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
					<a href="/" aria-label="Twitter">x</a>
					<a href="/" aria-label="Instagram">◎</a>
					<a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
				</div>
			</div>
		</div>
	</div>
</section>
