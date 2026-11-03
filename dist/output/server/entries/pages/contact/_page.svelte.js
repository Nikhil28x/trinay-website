import "../../../chunks/internal.js";
import { i as head, r as ensure_array_like, v as attr, y as escape_html } from "../../../chunks/server.js";
import "../../../chunks/state.js";
import { a as services, n as contact } from "../../../chunks/data.js";
//#region src/lib/components/ContactForm.svelte
function ContactForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let name = "";
		let email = "";
		let company = "";
		let service = "";
		let message = "";
		$$renderer.push(`<form id="contact-form"><div class="form-grid"><label><span>Your name</span><input name="name" autocomplete="name"${attr("value", name)} required=""/></label> <label><span>Work email</span><input name="email" type="email" autocomplete="email" spellcheck="false"${attr("value", email)} required=""/></label> <label><span>Organization</span><input name="organization" autocomplete="organization"${attr("value", company)} required=""/></label> <label><span>I’m interested in</span>`);
		$$renderer.select({
			name: "service",
			value: service,
			required: true
		}, ($$renderer) => {
			$$renderer.option({
				value: "",
				disabled: true
			}, ($$renderer) => {
				$$renderer.push(`Select a service`);
			});
			$$renderer.push(`<!--[-->`);
			const each_array = ensure_array_like(services);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let s = each_array[$$index];
				$$renderer.option({ value: s.title }, ($$renderer) => {
					$$renderer.push(`${escape_html(s.title)}`);
				});
			}
			$$renderer.push(`<!--]-->`);
			$$renderer.option({ value: "Training or AI workshop" }, ($$renderer) => {
				$$renderer.push(`Training or AI workshop`);
			});
		});
		$$renderer.push(`</label> <label class="full"><span>What would you like to work on?</span><textarea name="message" rows="4" placeholder="Tell us about your environment, challenge or training need…" required="">`);
		const $$body = escape_html(message);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea></label></div> <button class="button forest" type="submit">Prepare email enquiry <span>↗</span></button> <p class="form-note">Opens your email app with your enquiry ready to review and send.</p> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></form>`);
	});
}
//#endregion
//#region src/routes/contact/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("1bv7ezn", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Talk to Trinay | Technology, training &amp; workshops</title>`);
			});
			$$renderer.push(`<meta name="description" content="Discuss an infrastructure project, security assessment, AI workshop or customer training program with the Trinay team."/>`);
		});
		$$renderer.push(`<section class="page-hero watermarked"><p class="eyebrow">Let’s work together</p> <h1>A clear brief.<br/>A better way forward.</h1> <p>Tell us what your technology or your people need to do next. We’ll help shape the right
		engagement.</p></section> <section class="section contact-page watermarked"><div><h2>Start the conversation</h2> <p>Share your project, assessment or training requirements.</p> `);
		ContactForm($$renderer, {});
		$$renderer.push(`<!----></div> <aside class="contact-details"><p class="eyebrow">Contact Trinay</p> <h3>We’re ready to listen.</h3> <div><span>Email</span><a${attr("href", `mailto:${contact.email}`)}>${escape_html(contact.email)}</a></div> <div><span>India</span><a${attr("href", `tel:${contact.indiaPhone.replace(/\s/g, "")}`)}>${escape_html(contact.indiaPhone)}</a></div> <div><span>United States</span><a${attr("href", `tel:${contact.usPhone.replace(/[\s()]/g, "")}`)}>${escape_html(contact.usPhone)}</a></div> <div><span>Location</span> <p>${escape_html(contact.address)}</p></div> <a class="text-link"${attr("href", contact.linkedin)} target="_blank" rel="noreferrer">Connect on LinkedIn ↗</a></aside></section>`);
	});
}
//#endregion
export { _page as default };
