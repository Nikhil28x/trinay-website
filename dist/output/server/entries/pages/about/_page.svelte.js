import { i as head, r as ensure_array_like, y as escape_html } from "../../../chunks/server.js";
import { i as lifecycle, r as credentials } from "../../../chunks/data.js";
import { t as ContactBanner } from "../../../chunks/ContactBanner.js";
//#region src/routes/about/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		head("cwls5q", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>About Trinay | Architecture-led professional services</title>`);
			});
			$$renderer.push(`<meta name="description" content="Trinay is a partner-led technology solutions and professional services organization connecting architecture, implementation and customer enablement."/>`);
		});
		$$renderer.push(`<section class="page-hero watermarked"><p class="eyebrow">About Trinay</p> <h1>Architecture-led.<br/>Lifecycle accountable.</h1> <p>We are a partner-led business technology solutions and professional services organization
		helping customers design, modernize, secure and manage IT infrastructure.</p></section> <section class="section about-story watermarked"><div class="about-photo"><img src="/media/consulting.webp" alt="Technology practitioners collaborating on an infrastructure plan" width="1586" height="992" loading="lazy"/></div> <div><p class="eyebrow">Our perspective</p> <h2>One architecture context.<br/>One accountable partner.</h2> <p>Our capabilities span enterprise networking and data center fabrics through compute, storage,
			virtualization, containers, cloud and cybersecurity.</p> <p>Consulting, solution architecture and implementation expertise come together with lifecycle
			support. We help teams make informed decisions, deliver the technology and build the knowledge
			to operate it.</p> <p>We work with customers to define requirements, document decisions and carry that context from
			discovery to handover. Training and practical workshops help the people behind the platform
			move forward with confidence.</p></div></section> <section class="section method-section watermarked"><div class="section-heading"><h2>How we deliver</h2> <p>A structured lifecycle with shared priorities, clear documentation and customer knowledge
			transfer.</p></div> <ol class="lifecycle-grid"><!--[-->`);
		const each_array = ensure_array_like(lifecycle);
		for (let i = 0, $$length = each_array.length; i < $$length; i++) {
			let step = each_array[i];
			$$renderer.push(`<li><span class="step-number">${escape_html(String(i + 1).padStart(2, "0"))}</span> <h3>${escape_html(step.title)}</h3> <p>${escape_html(step.body)}</p></li>`);
		}
		$$renderer.push(`<!--]--></ol></section> <section class="section watermarked"><div class="section-heading"><h2>Practitioner credentials</h2> <p>Technical certifications listed in the Trinay capability profile.</p></div> <div class="credentials-grid"><!--[-->`);
		const each_array_1 = ensure_array_like(credentials);
		for (let $$index_2 = 0, $$length = each_array_1.length; $$index_2 < $$length; $$index_2++) {
			let group = each_array_1[$$index_2];
			$$renderer.push(`<div><h3>${escape_html(group.group)}</h3> <ul><!--[-->`);
			const each_array_2 = ensure_array_like(group.items);
			for (let $$index_1 = 0, $$length = each_array_2.length; $$index_1 < $$length; $$index_1++) {
				let item = each_array_2[$$index_1];
				$$renderer.push(`<li>${escape_html(item)}</li>`);
			}
			$$renderer.push(`<!--]--></ul></div>`);
		}
		$$renderer.push(`<!--]--></div></section> `);
		ContactBanner($$renderer, {});
		$$renderer.push(`<!---->`);
	});
}
//#endregion
export { _page as default };
