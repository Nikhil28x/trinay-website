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
		<p class="eyebrow">Get In Touch</p>
		<h1>Contact Us</h1>
		<p>Fill the details today to speak with an expert about your specific needs.</p>
	</div>
</section>

<section class="content-section">
	<div class="shell contact-page-grid">
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
		</div>
		<div class="contact-page-form">
			<ContactForm />
		</div>
	</div>
</section>
