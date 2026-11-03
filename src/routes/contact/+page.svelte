<script lang="ts">
	import { contact } from '$lib/data';
	import ContactForm from '$lib/components/ContactForm.svelte';
</script>

<svelte:head
	><title>Talk to Trinay | Technology, training & workshops</title><meta
		name="description"
		content="Discuss an infrastructure project, security assessment, AI workshop or customer training program with the Trinay team."
	/></svelte:head
>
<section class="page-hero watermarked">
	<p class="eyebrow">Let’s work together</p>
	<h1>A clear brief.<br />A better way forward.</h1>
	<p>
		Tell us what your technology or your people need to do next. We’ll help shape the right
		engagement.
	</p>
</section>
<section class="section contact-page watermarked">
	<div>
		<h2>Start the conversation</h2>
		<p>Share your project, assessment or training requirements.</p>
		<ContactForm />
	</div>
	<aside class="contact-details">
		<p class="eyebrow">Contact Trinay</p>
		<h3>We’re ready to listen.</h3>
		<div><span>Email</span><a href={`mailto:${contact.email}`}>{contact.email}</a></div>
		<div>
			<span>India</span><a href={`tel:${contact.indiaPhone.replace(/\s/g, '')}`}
				>{contact.indiaPhone}</a
			>
		</div>
		<div>
			<span>United States</span><a href={`tel:${contact.usPhone.replace(/[\s()]/g, '')}`}
				>{contact.usPhone}</a
			>
		</div>
		<div>
			<span>Location</span>
			<p>{contact.address}</p>
		</div>
		<a class="text-link" href={contact.linkedin} target="_blank" rel="noreferrer"
			>Connect on LinkedIn ↗</a
		>
	</aside>
</section>
