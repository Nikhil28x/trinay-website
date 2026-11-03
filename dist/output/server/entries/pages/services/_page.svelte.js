import { i as head, r as ensure_array_like } from "../../../chunks/server.js";
import { a as services } from "../../../chunks/data.js";
import { t as ServiceCard } from "../../../chunks/ServiceCard.js";
import { t as ContactBanner } from "../../../chunks/ContactBanner.js";
//#region src/routes/services/+page.svelte
function _page($$renderer) {
	head("4z030h", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Our services | Trinay</title>`);
		});
		$$renderer.push(`<meta name="description" content="Explore Trinay IT consulting, cybersecurity, information security audit, systems integration, corporate training, AI and data engineering services."/>`);
	});
	$$renderer.push(`<section class="page-hero watermarked"><p class="eyebrow">Our services</p> <h1>Technology expertise.<br/>Connected from end to end.</h1> <p>Practical advice, engineering depth and customer enablement across six complementary service
		practices.</p></section> <section class="section services-section watermarked"><div class="service-grid"><!--[-->`);
	const each_array = ensure_array_like(services);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let service = each_array[index];
		ServiceCard($$renderer, {
			service,
			index
		});
	}
	$$renderer.push(`<!--]--></div></section> `);
	ContactBanner($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _page as default };
