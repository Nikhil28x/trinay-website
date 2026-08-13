import { r as ensure_array_like, v as attr, y as escape_html } from "./server.js";
import { a as services } from "./data.js";
//#region src/lib/components/ContactForm.svelte
function ContactForm($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { mode = "quote" } = $$props;
		let name = "";
		let email = "";
		let phone = "";
		let company = "";
		let service = "";
		let message = "";
		$$renderer.push(`<form id="contact-form"><div class="form-grid"><label><span>Name</span> <input${attr("value", name)} type="text" name="name"${attr("placeholder", mode === "quote" ? "Name" : "")} required=""/></label> <label><span>${escape_html(mode === "quote" ? "Email" : "Email Address")}</span> <input${attr("value", email)} type="email" name="email"${attr("placeholder", mode === "quote" ? "example@example.example" : "")} required=""/></label> <label><span>${escape_html(mode === "quote" ? "Phone" : "Mobile/Phone")}</span> <input${attr("value", phone)} type="tel" name="phone"${attr("placeholder", mode === "quote" ? "(+91) 1234 566 789" : "")} required=""/></label> `);
		if (mode === "quote") {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<label><span>Service</span> `);
			$$renderer.select({
				value: service,
				name: "service",
				required: true
			}, ($$renderer) => {
				$$renderer.option({
					value: "",
					disabled: true
				}, ($$renderer) => {
					$$renderer.push(`Select From Below`);
				});
				$$renderer.push(`<!--[-->`);
				const each_array = ensure_array_like(services);
				for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
					let option = each_array[$$index];
					$$renderer.option({ value: option.title }, ($$renderer) => {
						$$renderer.push(`${escape_html(option.title)}`);
					});
				}
				$$renderer.push(`<!--]-->`);
			});
			$$renderer.push(`</label> <label class="full"><span>Company</span> <input${attr("value", company)} type="text" name="company" placeholder="Company Name" required=""/></label>`);
		} else $$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--> <label class="full"><span>Your Message</span> <textarea name="message" rows="5"${attr("placeholder", mode === "quote" ? "Your Requirement/Message Here...." : "")} required="">`);
		const $$body = escape_html(message);
		if ($$body) $$renderer.push(`${$$body}`);
		$$renderer.push(`</textarea></label></div> <button class="button button-light" type="submit">${escape_html(mode === "quote" ? "Get a Quote" : "Send Message")} <span>↗</span></button></form>`);
	});
}
//#endregion
export { ContactForm as t };
