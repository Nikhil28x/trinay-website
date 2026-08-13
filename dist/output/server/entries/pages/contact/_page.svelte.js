import { i as head, v as attr, y as escape_html } from "../../../chunks/server.js";
import { n as contact } from "../../../chunks/data.js";
import { t as ContactForm } from "../../../chunks/ContactForm.js";
//#region src/routes/contact/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("1bv7ezn", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Contact Us | Trinay Cyber Technologies</title>`);
			});
			$$renderer.push(`<meta name="description" content="Contact Trinay Cyber Technologies to speak with a cyber security expert about your specific needs."/>`);
		});
		$$renderer.push(`<section class="page-hero grid-bg"><div class="shell"><h1>Contact Us</h1></div></section> <section class="content-section"><div class="shell contact-page-grid"><div class="contact-page-form"><h2>Write Us</h2> `);
		ContactForm($$renderer, { mode: "contact" });
		$$renderer.push(`<!----></div> <div><p class="eyebrow">Our Contact Details</p> <div class="contact-cards"><div class="contact-card"><span>Address</span> <p>${escape_html(contact.address)}</p></div> <div class="contact-card"><span>Phone / India</span> <a${attr("href", `tel:${contact.indiaPhone.replace(/\s/g, "")}`)}>${escape_html(contact.indiaPhone)}</a></div> <div class="contact-card"><span>Phone / United States</span> <a${attr("href", `tel:${contact.usPhone.replace(/[\s()]/g, "")}`)}>${escape_html(contact.usPhone)}</a></div> <div class="contact-card"><span>Email</span> <a${attr("href", `mailto:${contact.email}`)}>${escape_html(contact.email)}</a></div></div> <div class="contact-socials"><h3>Follow us:</h3> <div class="socials"><a${attr("href", contact.facebook)} target="_blank" rel="noreferrer" aria-label="Facebook">f</a> <a href="/" aria-label="Twitter">x</a> <a href="/" aria-label="Instagram">◎</a> <a${attr("href", contact.linkedin)} target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a></div></div></div></div></section>`);
	});
}
//#endregion
export { _page as default };
