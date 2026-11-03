import { v as attr, y as escape_html } from "./server.js";
import { t as Icon } from "./Icon.js";
//#region src/lib/components/ServiceCard.svelte
function ServiceCard($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let { service, index = 0 } = $$props;
		$$renderer.push(`<a class="service-card"${attr("href", `/services/${service.slug}`)}><div class="service-card-top"><span class="icon-box">`);
		Icon($$renderer, {
			name: service.icon,
			size: 28
		});
		$$renderer.push(`<!----></span><span class="card-arrow">↗</span></div> <h3>${escape_html(service.title)}</h3> <p>${escape_html(service.short)}</p> <span class="service-explore">Explore service</span></a>`);
	});
}
//#endregion
export { ServiceCard as t };
