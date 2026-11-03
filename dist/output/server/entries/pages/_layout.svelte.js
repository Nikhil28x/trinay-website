import { i as head, r as ensure_array_like, t as attr_class, v as attr, y as escape_html } from "../../chunks/server.js";
import { t as page } from "../../chunks/state.js";
import { a as services, n as contact } from "../../chunks/data.js";
//#region src/lib/components/Header.svelte
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let menuOpen = false;
		let servicesOpen = false;
		$$renderer.push(`<header class="site-header"><div class="header-inner"><a class="brand" href="/" aria-label="Trinay Services and Solutions home"><img src="/brand/trinay-logo.png" alt="Trinay Services &amp; Solutions" width="508" height="426"/></a> <button class="menu-toggle"${attr("aria-expanded", menuOpen)} aria-controls="main-navigation"${attr("aria-label", "Open navigation")}><span></span><span></span></button> <nav id="main-navigation" aria-label="Main navigation"${attr_class("", void 0, { "open": menuOpen })}><a href="/about"${attr_class("", void 0, { "active": page.url.pathname === "/about" })}>About Trinay</a> <div class="services-menu"><button${attr("aria-expanded", servicesOpen)} aria-controls="services-dropdown"${attr_class("", void 0, { "active": page.url.pathname.startsWith("/services") })}>Services <span${attr_class("", void 0, { "turned": servicesOpen })}>⌄</span></button> `);
		$$renderer.push("<!--[-1-->");
		$$renderer.push(`<!--]--></div> <a href="/capabilities"${attr_class("", void 0, { "active": page.url.pathname === "/capabilities" })}>Capabilities</a> <a href="/#approach">Our approach</a> <a class="nav-cta" href="/contact">Let’s talk <span>↗</span></a></nav></div></header>`);
	});
}
//#endregion
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<footer class="site-footer"><div class="footer-grid"><div class="footer-intro"><a href="/" aria-label="Trinay home"><img src="/brand/trinay-logo.png" alt="Trinay Services &amp; Solutions" width="508" height="426"/></a> <p>We build the next technology with passion and confidence.</p> <a class="subtle-link"${attr("href", contact.linkedin)} target="_blank" rel="noreferrer">LinkedIn ↗</a></div> <div><h2>Our services</h2> <!--[-->`);
		const each_array = ensure_array_like(services);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let s = each_array[$$index];
			$$renderer.push(`<a${attr("href", `/services/${s.slug}`)}>${escape_html(s.title)}</a>`);
		}
		$$renderer.push(`<!--]--></div> <div><h2>Explore</h2> <a href="/about">About Trinay</a><a href="/capabilities">Training &amp; workshops</a><a href="/#approach">How we work</a><a href="/contact">Contact us</a></div> <div><h2>Start a conversation</h2> <a${attr("href", `mailto:${contact.email}`)}>${escape_html(contact.email)}</a><a${attr("href", `tel:${contact.indiaPhone.replace(/\s/g, "")}`)}>${escape_html(contact.indiaPhone)}</a> <p>${escape_html(contact.address)}</p></div></div> <div class="footer-bottom"><span>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Trinay. All rights reserved.</span><span>Let’s work towards perfect partnership.</span> <div><a href="/privacy-policy">Privacy policy</a><a href="/terms-conditions">Terms of use</a></div></div></footer>`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	head("12qhfyh", $$renderer, ($$renderer) => {
		$$renderer.push(`<link rel="icon" href="/brand/trinay-logo.png"/><meta name="theme-color" content="#173d34"/>`);
	});
	$$renderer.push(`<a class="skip-link" href="#main-content">Skip to main content</a> <div class="page-frame">`);
	Header($$renderer, {});
	$$renderer.push(`<!----> <main id="main-content">`);
	children($$renderer);
	$$renderer.push(`<!----></main> `);
	Footer($$renderer, {});
	$$renderer.push(`<!----></div>`);
}
//#endregion
export { _layout as default };
