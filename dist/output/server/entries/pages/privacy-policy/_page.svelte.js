import { i as head } from "../../../chunks/server.js";
//#region src/routes/privacy-policy/+page.svelte
function _page($$renderer) {
	head("f1q66e", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Privacy Policy | Trinay Cyber Technologies</title>`);
		});
	});
	$$renderer.push(`<section class="page-hero grid-bg"><div class="shell"><h1>Privacy Policy</h1></div></section> <section class="content-section"><div class="shell legal-page"><p class="eyebrow">Information &amp; notices</p> <h2>Information collection</h2> <p>Trinay Cyber Technologies respects the privacy of our clients.</p> <p>No information collected will be sold or released intentionally to the public.</p> <p>The following is possible information collected from Trinay Cyber Technologies' managed
			services clients and/or marketing events: Client Name, Title, Company Name, Company Address,
			Company Email, Company Phone, and Cell Phone Number.</p> <p>This information is protected on a secure server. This information maybe shared to authorized
			Trinay Cyber Technologies partners/vendors participating in marketing events.</p> <p>For more information, please contact <a href="mailto:info@trinaytechnologies.com"><b>info@trinaytechnologies.com</b></a> or <a href="tel:+918919674695"><b>+91 8919674695</b></a>.</p></div></section>`);
}
//#endregion
export { _page as default };
