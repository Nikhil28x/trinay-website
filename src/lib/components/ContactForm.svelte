<script lang="ts">
	import { contact, services } from '$lib/data';
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	let name = $state(''),
		email = $state(''),
		company = $state(''),
		service = $state(''),
		message = $state(''),
		prepared = $state(false);
	onMount(() => {
		const requested = page.url.searchParams.get('service');
		if (requested && services.some((s) => s.title === requested)) service = requested;
	});
	function submit(e: SubmitEvent) {
		e.preventDefault();
		const subject = encodeURIComponent(`Trinay enquiry: ${service || 'Technology consultation'}`);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nCompany: ${company}\nInterest: ${service}\n\n${message}`
		);
		window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
		prepared = true;
	}
</script>

<form id="contact-form" onsubmit={submit}>
	<div class="form-grid">
		<label
			><span>Your name</span><input
				name="name"
				autocomplete="name"
				bind:value={name}
				required
			/></label
		>
		<label
			><span>Work email</span><input
				name="email"
				type="email"
				autocomplete="email"
				spellcheck="false"
				bind:value={email}
				required
			/></label
		>
		<label
			><span>Organization</span><input
				name="organization"
				autocomplete="organization"
				bind:value={company}
				required
			/></label
		>
		<label
			><span>I’m interested in</span><select name="service" bind:value={service} required
				><option value="" disabled>Select a service</option>{#each services as s}<option
						value={s.title}>{s.title}</option
					>{/each}<option value="Training or AI workshop">Training or AI workshop</option></select
			></label
		>
		<label class="full"
			><span>What would you like to work on?</span><textarea
				name="message"
				rows="4"
				bind:value={message}
				placeholder="Tell us about your environment, challenge or training need…"
				required></textarea></label
		>
	</div>
	<button class="button forest" type="submit">Prepare email enquiry <span>↗</span></button>
	<p class="form-note">Opens your email app with your enquiry ready to review and send.</p>
	{#if prepared}<p class="form-status" role="status">
			Your email enquiry is ready. If your email app did not open, write to <a
				href={`mailto:${contact.email}`}>{contact.email}</a
			>.
		</p>{/if}
</form>
