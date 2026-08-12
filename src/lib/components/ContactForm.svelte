<script lang="ts">
	import { contact, services } from '$lib/data';

	let name = $state('');
	let email = $state('');
	let phone = $state('');
	let company = $state('');
	let service = $state('');
	let message = $state('');

	function submit(event: SubmitEvent) {
		event.preventDefault();
		const subject = encodeURIComponent(
			`Website enquiry from ${name}${company ? ` — ${company}` : ''}`
		);
		const body = encodeURIComponent(
			`Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nCompany: ${company}\nService: ${service}\n\n${message}`
		);
		window.location.href = `mailto:${contact.email}?subject=${subject}&body=${body}`;
	}
</script>

<form id="contact-form" onsubmit={submit}>
	<div class="form-grid">
		<label>
			<span>Name</span>
			<input bind:value={name} type="text" name="name" placeholder="Your name" required />
		</label>
		<label>
			<span>Email</span>
			<input bind:value={email} type="email" name="email" placeholder="you@company.com" required />
		</label>
		<label>
			<span>Phone</span>
			<input bind:value={phone} type="tel" name="phone" placeholder="(+91) 1234 566 789" required />
		</label>
		<label>
			<span>Company</span>
			<input bind:value={company} type="text" name="company" placeholder="Company name" required />
		</label>
		<label class="full">
			<span>Service</span>
			<select bind:value={service} name="service" required>
				<option value="" disabled>Select from below</option>
				{#each services as option}
					<option value={option.title}>{option.title}</option>
				{/each}
			</select>
		</label>
		<label class="full">
			<span>Your Message</span>
			<textarea
				bind:value={message}
				name="message"
				rows="5"
				placeholder="Your requirement / message here..."
				required></textarea>
		</label>
	</div>
	<button class="button button-light" type="submit">Get a Quote <span>↗</span></button>
</form>
