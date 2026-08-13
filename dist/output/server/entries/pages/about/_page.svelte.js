import { i as head } from "../../../chunks/server.js";
//#region src/routes/about/+page.svelte
function _page($$renderer) {
	head("cwls5q", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>About Us | Trinay Cyber Technologies</title>`);
		});
		$$renderer.push(`<meta name="description" content="Meet Trinay Cyber Technologies and learn about our experience researching and protecting sensitive data and systems."/>`);
	});
	$$renderer.push(`<section class="page-hero grid-bg"><div class="shell"><h1>About Us</h1></div></section> <section class="content-section about-home"><div class="shell about-home-grid"><div class="about-image-wrap"><img src="/images/about-img.jpg" alt="Trinay cyber security team"/></div> <div class="about-home-copy"><p class="eyebrow">About Us</p> <p>Triany has started it's journey by realizing the full potential of the technology and the
				cyber security gaps arising due to abrupt increase in use of the technology. Our goal is to
				offer quality services to ensure client's robust security posture to avoid successful
				attacks.</p> <p>Our team brings together decades of experience in cybersecurity. Our team has significant
				experience from different communities in the cyber world. We have spent an unprecedented
				number of hours researching and protecting some of the most sensitive data and systems. Now,
				we are ready to apply that same experience and expertise in defending IT infrastructure and
				its components.</p></div></div></section>`);
}
//#endregion
export { _page as default };
