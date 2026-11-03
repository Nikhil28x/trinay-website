import { i as head, r as ensure_array_like, v as attr, y as escape_html } from "../../../../chunks/server.js";
import { a as services } from "../../../../chunks/data.js";
import { t as Icon } from "../../../../chunks/Icon.js";
import { t as ContactBanner } from "../../../../chunks/ContactBanner.js";
//#region src/routes/services/[slug]/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { data } = $$props;
		head("1orga13", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>${escape_html(data.service.title)} | Trinay</title>`);
			});
			$$renderer.push(`<meta name="description"${attr("content", data.service.body)}/>`);
		});
		$$renderer.push(`<section class="detail-hero section watermarked"><div><a class="breadcrumb" href="/services">All services</a> <p class="eyebrow">${escape_html(data.service.title)}</p> <h1>${escape_html(data.service.headline)}</h1> <p class="detail-lead">${escape_html(data.service.body)}</p> <a class="button forest"${attr("href", `/contact?service=${encodeURIComponent(data.service.title)}`)}>Discuss your requirements <span>↗</span></a></div> <div class="detail-image"><img${attr("src", data.service.image)}${attr("alt", `Technology and professional services supporting ${data.service.title}`)} width="1586" height="992" fetchpriority="high"/></div></section> <section class="section watermarked"><div class="section-heading"><div><p class="eyebrow">How we help</p> <h2>Expertise shaped<br/>around your requirements.</h2></div></div> <div class="module-grid"><!--[-->`);
		const each_array = ensure_array_like(data.service.modules);
		for (let $$index_1 = 0, $$length = each_array.length; $$index_1 < $$length; $$index_1++) {
			let module = each_array[$$index_1];
			$$renderer.push(`<article><h3>${escape_html(module.title)}</h3> <p>${escape_html(module.body)}</p> <ul class="check-list"><!--[-->`);
			const each_array_1 = ensure_array_like(module.items);
			for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
				let item = each_array_1[$$index];
				$$renderer.push(`<li>`);
				Icon($$renderer, {
					name: "check",
					size: 18
				});
				$$renderer.push(`<!----><span>${escape_html(item)}</span></li>`);
			}
			$$renderer.push(`<!--]--></ul></article>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section outcomes-section watermarked"><div><p class="eyebrow">What you take forward</p> <h2>A clear set<br/>of deliverables.</h2> <p>We agree scope, responsibilities and success criteria with your team before work begins.</p></div> <ul class="outcome-list"><!--[-->`);
		const each_array_2 = ensure_array_like(data.service.outcomes);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let item = each_array_2[$$index_2];
			$$renderer.push(`<li>`);
			Icon($$renderer, {
				name: "check",
				size: 22
			});
			$$renderer.push(`<!----><span>${escape_html(item)}</span></li>`);
		}
		$$renderer.push(`<!--]--></ul></section> <section class="section watermarked"><div class="section-heading"><h2>Related expertise</h2> <a class="text-link" href="/services">All services ↗</a></div> <div class="related-services"><!--[-->`);
		const each_array_3 = ensure_array_like(services.filter((s) => s.slug !== data.service.slug).slice(0, 3));
		for (let $$index_3 = 0, $$length = each_array_3.length; $$index_3 < $$length; $$index_3++) {
			let related = each_array_3[$$index_3];
			$$renderer.push(`<a${attr("href", `/services/${related.slug}`)}>`);
			Icon($$renderer, { name: related.icon });
			$$renderer.push(`<!----> <h3>${escape_html(related.title)}</h3> <span>Explore ↗</span></a>`);
		}
		$$renderer.push(`<!--]--></div></section> `);
		ContactBanner($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
