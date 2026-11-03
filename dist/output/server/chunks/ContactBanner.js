import "./server.js";
//#region src/lib/components/ContactBanner.svelte
function ContactBanner($$renderer) {
	$$renderer.push(`<section class="contact-banner watermarked"><div><p class="eyebrow">A partnership built around your priorities</p> <h2>What does your next<br/>technology need to do?</h2> <p>Let’s define the challenge and build a practical way forward.</p></div> <a class="button light" href="/contact">Talk to our team <span>↗</span></a></section>`);
}
//#endregion
export { ContactBanner as t };
