import { i as head, r as ensure_array_like, v as attr, y as escape_html } from "../../../chunks/server.js";
import { a as services, o as whyPentesting, r as deliverables } from "../../../chunks/data.js";
//#region src/lib/components/ServiceCard.svelte
function ServiceCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { service, index = 0 } = $$props;
		$$renderer.push(`<article class="service-card"><a class="service-image"${attr("href", `/services/${service.slug}`)}${attr("aria-label", `Learn about ${service.title}`)}><img${attr("src", service.image)} alt="" loading="lazy"/> <span class="service-number">${escape_html(String(index + 1).padStart(2, "0"))}</span></a> <div class="service-copy"><h3><a${attr("href", `/services/${service.slug}`)}>${escape_html(service.title)}</a></h3> <p>${escape_html(service.body)}</p> <a class="text-link"${attr("href", `/services/${service.slug}`)}>Explore service <span>↗</span></a></div></article>`);
	});
}
//#endregion
//#region src/routes/services/+page.svelte
function _page($$renderer) {
	head("4z030h", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Cyber Security Services | Trinay Cyber Technologies</title>`);
		});
		$$renderer.push(`<meta name="description" content="Explore Trinay's web, mobile and network pentesting, vulnerability scanning, ransomware assessment and PCI-ASV scanning services."/>`);
	});
	$$renderer.push(`<section class="page-hero grid-bg"><div class="shell"><h1>Prevent Cyber Attacks By Performing Regular Pentests</h1> <div class="page-jump-links"><a href="#why-pentesting">Why Pentesting?</a> <span>/</span> <a href="#deliverables">Deliverables</a></div></div></section> <section class="page-service-grid"><div class="shell"><div class="section-heading"><h2>Our Services</h2></div> <div class="service-grid"><!--[-->`);
	const each_array = ensure_array_like(services);
	for (let index = 0, $$length = each_array.length; index < $$length; index++) {
		let service = each_array[index];
		ServiceCard($$renderer, {
			service,
			index
		});
	}
	$$renderer.push(`<!--]--></div></div></section> <section class="content-section approach-section" id="why-pentesting"><div class="shell two-column-content"><div><h2>Why Pentesting?</h2> <img src="/images/why-pentesting.jpg" alt="Cyber security assessment" loading="lazy"/></div> <ul class="check-list"><!--[-->`);
	const each_array_1 = ensure_array_like(whyPentesting);
	for (let $$index_1 = 0, $$length = each_array_1.length; $$index_1 < $$length; $$index_1++) {
		let item = each_array_1[$$index_1];
		$$renderer.push(`<li>${escape_html(item)}</li>`);
	}
	$$renderer.push(`<!--]--></ul></div></section> <section class="content-section" id="deliverables"><div class="shell two-column-content"><div><h2>Deliverables</h2></div> <ul class="check-list"><!--[-->`);
	const each_array_2 = ensure_array_like(deliverables);
	for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
		let item = each_array_2[$$index_2];
		$$renderer.push(`<li>${escape_html(item)}</li>`);
	}
	$$renderer.push(`<!--]--></ul></div></section>`);
}
//#endregion
export { _page as default };
