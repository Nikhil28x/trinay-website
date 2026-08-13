import { i as head, r as ensure_array_like, v as attr, y as escape_html } from "../../../../chunks/server.js";
import { a as services, o as whyPentesting, r as deliverables } from "../../../../chunks/data.js";
//#region src/routes/services/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		const serviceIndex = services.findIndex((item) => item.slug === data.service.slug);
		head("1orga13", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(data.service.title)} | Trinay Cyber Technologies</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", data.service.body)}/>`);
		});
		$$renderer.push(`<section class="service-detail-hero"><div><p class="eyebrow">Service / ${escape_html(String(serviceIndex + 1).padStart(2, "0"))}</p> <h1>${escape_html(data.service.title)}</h1> <p>${escape_html(data.service.body)}</p> <a class="button button-primary" href="/contact#contact-form">Get a Quote <span>↗</span></a></div> <div class="service-detail-image"><img${attr("src", data.service.image)}${attr("alt", data.service.title)}/></div></section> `);
		if (data.service.bullets) {
			$$renderer.push("<!--[0-->");
			$$renderer.push(`<section class="content-section approach-section"><div class="shell two-column-content"><div><p class="eyebrow">PCI ASV Scanning</p> <h2>PCI ASV scans are</h2></div> <ul class="check-list"><!--[-->`);
			const each_array = ensure_array_like(data.service.bullets);
			for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
				let item = each_array[$$index];
				$$renderer.push(`<li>${escape_html(item)}</li>`);
			}
			$$renderer.push(`<!--]--></ul></div></section>`);
		} else {
			$$renderer.push("<!--[-1-->");
			$$renderer.push(`<section class="content-section approach-section"><div class="shell two-column-content"><div><p class="eyebrow">Why Pentesting?</p> <h2>Know what matters most.</h2></div> <ul class="check-list"><!--[-->`);
			const each_array_1 = ensure_array_like(whyPentesting);
			for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_1[$$index_1];
				$$renderer.push(`<li>${escape_html(item)}</li>`);
			}
			$$renderer.push(`<!--]--></ul></div></section>`);
		}
		$$renderer.push(`<!--]--> <section class="content-section"><div class="shell two-column-content"><div><p class="eyebrow">What You Receive</p> <h2>Deliverables</h2></div> <ul class="check-list"><!--[-->`);
		const each_array_2 = ensure_array_like(deliverables);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let item = each_array_2[$$index_2];
			$$renderer.push(`<li>${escape_html(item)}</li>`);
		}
		$$renderer.push(`<!--]--></ul></div></section>`);
	});
}
//#endregion
export { _page as default };
