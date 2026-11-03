import { i as head } from "../../../chunks/server.js";
//#region src/routes/terms-conditions/+page.svelte
function _page($$renderer) {
	head("bw2r4t", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Terms &amp; Conditions | Trinay Cyber Technologies</title>`);
		});
	});
	$$renderer.push(`<section class="page-hero watermarked"><div class="shell"><h1>Terms &amp; Conditions</h1></div></section> <section class="content-section"><div class="shell legal-page"><p class="eyebrow">Information &amp; notices</p> <p>The contents hereof are the sole and exclusive property of Trinay Cyber Technologies and may
			not be, for whatsoever purpose, reproduced, stored, copied or archived in any manner
			whatsoever either in full or in parts without the prior express consent of Trinay Cyber
			Technologies.</p> <h2>Modifications to the Service</h2> <p>Within Trinay Cyber Technologies only the personnel authorized for the time being belonging to
			the Trinay Cyber Technologies portal project of Trinay Cyber Technologies alone shall have the
			right to modify, alter or change these materials. No other person shall at any time modify,
			alter or change these materials (or any part thereof) nor attempt to do so under whatsoever
			circumstances. Any such act amounts to an act of infringement of the intellectual and other
			proprietary rights of Trinay Cyber Technologies and shall attract the strictest action
			possible under law.</p></div></section>`);
}
//#endregion
export { _page as default };
