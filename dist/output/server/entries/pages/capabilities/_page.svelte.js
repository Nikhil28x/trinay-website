import { i as head } from "../../../chunks/server.js";
import { t as Icon } from "../../../chunks/Icon.js";
import { t as ContactBanner } from "../../../chunks/ContactBanner.js";
//#region src/routes/capabilities/+page.svelte
function _page($$renderer) {
	head("1hj79c3", $$renderer, ($$renderer) => {
		$$renderer.title(($$renderer) => {
			$$renderer.push(`<title>Customer training, AI workshops &amp; product enablement | Trinay</title>`);
		});
		$$renderer.push(`<meta name="description" content="Customized training based on customer problem statements, practical AI workshops and product enablement with tailored training decks, hands-on labs and guides."/>`);
	});
	$$renderer.push(`<section class="page-hero watermarked"><p class="eyebrow">Customer capabilities</p> <h1>Your challenge.<br/>Your people. Your learning plan.</h1> <p>We create training around the problem you need to solve and the technology your teams actually
		use.</p> <a class="button forest" href="/contact">Plan a training engagement <span>↗</span></a></section> <section class="section learning-overview watermarked"><div><p class="eyebrow">Designed around real work</p> <h2>Learning that carries<br/>into the working day.</h2> <p>Every program starts with your problem statement, your audience and the outcome you want. We
			adapt the content, practical exercises and delivery to the customer’s environment.</p> <p>Leaders need a clear view of what is possible. Users need confidence in their everyday tasks.
			Administrators need the knowledge to operate and support the product. We build the right path
			for each.</p></div> <img src="/media/consulting.webp" alt="Practitioners reviewing a customer-specific technical plan" width="1586" height="992" loading="lazy"/></section> <section class="section training-programs watermarked"><div class="section-heading"><h2>Three ways to<br/>build capability.</h2> <p>Combine these formats around a specific project or develop a focused program for one team.</p></div> <div class="module-grid"><article>`);
	Icon($$renderer, {
		name: "compass",
		size: 32
	});
	$$renderer.push(`<!----> <h3>Problem-led technical training</h3> <p>Address a skill gap, migration challenge or operational issue with a tailored curriculum.</p> <ul><li>Discovery of the problem and learner baseline</li> <li>Training across networking, cloud, infrastructure, security and containers</li> <li>Practical labs, troubleshooting and scenario exercises</li> <li>Knowledge checks and an agreed follow-through plan</li></ul></article> <article>`);
	Icon($$renderer, {
		name: "spark",
		size: 32
	});
	$$renderer.push(`<!----> <h3>AI enablement workshops</h3> <p>Help people explore AI through relevant tasks and guided practice.</p> <ul><li>AI fundamentals matched to the audience</li> <li>Customer-specific use cases and workflow discovery</li> <li>Prompting, output evaluation and human review</li> <li>Data privacy, security and responsible-use boundaries</li> <li>A prioritized set of ideas for further exploration</li></ul></article> <article>`);
	Icon($$renderer, {
		name: "book",
		size: 32
	});
	$$renderer.push(`<!----> <h3>Product adoption &amp; enablement</h3> <p>Make sure the people using and administering a product know what to do.</p> <ul><li>Role-specific product walkthroughs</li> <li>Training decks customized to your implementation</li> <li>Lab guides, runbooks and quick-reference material</li> <li>Administrator training and end-user onboarding</li> <li>Knowledge transfer at the point of handover</li></ul></article> <article class="training-takeaway"><p class="eyebrow">What stays with your team</p> <h3>More than a training session.</h3> <p>Your engagement can include tailored decks, hands-on exercise guides, product reference
				material and a review of the next steps. We agree the materials and delivery format with you
				during discovery.</p> <a class="text-link" href="/services/corporate-training">View corporate training services ↗</a></article></div></section> <section class="section method-section watermarked"><div class="section-heading"><h2>A practical learning journey.</h2> <p>Each step connects the learning to a customer problem and the people solving it.</p></div> <ol class="learning-journey"><li><span>01</span> <h3>Define the challenge</h3> <p>Agree the problem statement, audience, environment and desired outcome.</p></li> <li><span>02</span> <h3>Shape the program</h3> <p>Build the curriculum, training deck and practice scenarios for the right roles.</p></li> <li><span>03</span> <h3>Learn through practice</h3> <p>Work through demonstrations and guided exercises with a practitioner.</p></li> <li><span>04</span> <h3>Review &amp; apply</h3> <p>Check understanding, capture feedback and agree how to apply the learning.</p></li></ol></section> `);
	ContactBanner($$renderer, {});
	$$renderer.push(`<!---->`);
}
//#endregion
export { _page as default };
