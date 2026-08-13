import { i as head, r as ensure_array_like, t as attr_class, v as attr, y as escape_html } from "../../chunks/server.js";
import { a as services, n as contact } from "../../chunks/data.js";
import { t as page } from "../../chunks/state.js";
//#region src/lib/components/Footer.svelte
function Footer($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		$$renderer.push(`<footer><div class="shell footer-grid"><div class="footer-brand"><img src="/images/logo_new.png" alt="Trinay Cyber Technologies"/> <p>World Class Cyber Security.</p> <div class="socials"><a${attr("href", contact.facebook)} target="_blank" rel="noreferrer" aria-label="Trinay on Facebook">f</a> <a${attr("href", contact.linkedin)} target="_blank" rel="noreferrer" aria-label="Trinay on LinkedIn">in</a></div></div> <div class="footer-contact"><p class="footer-title">Address</p> <address>${escape_html(contact.address)}</address> <a${attr("href", `mailto:${contact.email}`)}>${escape_html(contact.email)}</a> <a${attr("href", `tel:${contact.indiaPhone.replace(/\s/g, "")}`)}>${escape_html(contact.indiaPhone)}</a> <a${attr("href", `tel:${contact.usPhone.replace(/[\s()]/g, "")}`)}>${escape_html(contact.usPhone)}</a></div> <div><p class="footer-title">Solution</p> <ul><li><a href="/services/ransomware-assessment">Ransomware Assessment</a></li> <li><a href="/services/vulnerability-scanning">Vulnerability Scanning</a></li> <li><a href="/services/pci-asv-scanning">PCI-ASV Scanning</a></li></ul> <p class="footer-title footer-subtitle">Penetration Testing</p> <ul><li><a href="/services/web-app-pentesting">Web App Pentesting</a></li> <li><a href="/services/mobile-app-pentesting">Mobile App Pentesting</a></li> <li><a href="/services/network-pentesting">Network Pentesting</a></li></ul></div> <div><p class="footer-title">Useful Links</p> <ul><li><a href="/">Home</a></li> <li><a href="/about">About</a></li> <li><a href="/services">Services</a></li> <li><a href="/contact">Contact</a></li></ul></div></div> <div class="shell footer-bottom"><p>© ${escape_html((/* @__PURE__ */ new Date()).getFullYear())} Trinay Cyber Technologies Pvt Ltd. All rights reserved.</p> <div><a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms &amp; Conditions</a></div></div></footer>`);
	});
}
//#endregion
//#region src/lib/components/Header.svelte
function Header($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let menuOpen = false;
		let servicesOpen = false;
		$$renderer.push(`<header><div class="shell nav-wrap"><a class="brand" href="/" aria-label="Trinay Cyber Technologies home"><img src="/images/logo_new.png" alt="Trinay Cyber Technologies"/></a> <button${attr_class("menu-toggle", void 0, { "active": menuOpen })} type="button" aria-label="Toggle navigation"${attr("aria-expanded", menuOpen)}><span></span><span></span></button> <nav aria-label="Main navigation"${attr_class("", void 0, { "open": menuOpen })}><a href="/"${attr_class("", void 0, { "active": page.url.pathname === "/" })}>Home</a> <div class="services-menu"><button type="button" aria-haspopup="true" aria-controls="services-dropdown"${attr("aria-expanded", servicesOpen)}${attr_class("", void 0, { "active": page.url.pathname.startsWith("/services") })}>Services <span>⌄</span></button> <div id="services-dropdown"${attr_class("mega-menu", void 0, { "show": servicesOpen })}><div class="mega-intro"><span class="eyebrow">Services</span> <strong>Our Services</strong> <a href="/services">View all services <b>↗</b></a></div> <div class="mega-links"><!--[-->`);
		const each_array = ensure_array_like(services);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let service = each_array[index];
			$$renderer.push(`<a${attr("href", `/services/${service.slug}`)}><span>${escape_html(String(index + 1).padStart(2, "0"))}</span>${escape_html(service.title)}</a>`);
		}
		$$renderer.push(`<!--]--></div></div></div> <a href="/about"${attr_class("", void 0, { "active": page.url.pathname === "/about" })}>About</a> <a href="/contact"${attr_class("", void 0, { "active": page.url.pathname === "/contact" })}>Contact Us</a> <a class="nav-cta" href="/contact#contact-form">Get a Quote <span>↗</span></a></nav></div></header>`);
	});
}
//#endregion
//#region src/routes/+layout.svelte
function _layout($$renderer, $$props) {
	let { children } = $$props;
	head("12qhfyh", $$renderer, ($$renderer) => {
		$$renderer.push(`<link rel="icon" href="/images/logo_footer.png"/> <meta name="theme-color" content="#061b21"/>`);
	});
	Header($$renderer, {});
	$$renderer.push(`<!----> <main>`);
	children($$renderer);
	$$renderer.push(`<!----></main> `);
	Footer($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _layout as default };
