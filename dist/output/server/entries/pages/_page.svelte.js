import { i as head, r as ensure_array_like, t as attr_class, v as attr, y as escape_html } from "../../chunks/server.js";
import { a as services, i as lifecycle, r as credentials, t as assessments } from "../../chunks/data.js";
import { t as Icon } from "../../chunks/Icon.js";
import { t as ServiceCard } from "../../chunks/ServiceCard.js";
import { t as ContactBanner } from "../../chunks/ContactBanner.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		let motionPaused = false;
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Trinay | Technology solutions, professional services &amp; customer enablement</title>`);
			});
			$$renderer.push(`<meta name="description" content="Partner-led IT consulting, cybersecurity, systems integration, AI and customer training. Trinay connects enterprise architecture with delivery and practical enablement."/>`);
		});
		$$renderer.push(`<section${attr_class("home-hero watermarked", void 0, { "motion-paused": motionPaused })}><div class="hero-copy"><p class="eyebrow">Trinay Services &amp; Solutions</p> <h1>The next technology,<br/><span>built with confidence.</span></h1> <p class="hero-lead">We help you design, modernize and secure your technology. Then equip your people to make the
			most of it.</p> <div class="button-row"><a class="button forest" href="/services">Explore our services <span>↗</span></a><a class="text-link" href="/capabilities">Build your team’s capability</a></div> <div class="hero-caption"><span class="caption-rule"></span>Architecture-led. Lifecycle accountable.</div></div> <div class="hero-art"><img class="hero-photo" src="/media/data-center.webp" alt="Enterprise data center infrastructure with warm gold lighting" width="1586" height="992" fetchpriority="high"/> <div class="art-shade"></div> <div class="orbit-system" aria-hidden="true"><i></i><i></i><i></i> <div class="orbit-core"><img src="/brand/trinay-logo.png" alt="" width="508" height="426"/></div></div> <span class="orbit-label label-network">Networking</span><span class="orbit-label label-cloud">Cloud</span><span class="orbit-label label-security">Cybersecurity</span><span class="orbit-label label-people">People</span><button class="motion-control"${attr("aria-pressed", motionPaused)}>${escape_html("Pause motion")} <span aria-hidden="true">${escape_html("Ⅱ")}</span></button> <div class="art-caption"><span>One connected technology estate</span><strong>From architecture to adoption</strong></div></div> <div class="hero-lifecycle" aria-label="Full technology lifecycle"><!--[-->`);
		const each_array = ensure_array_like(lifecycle);
		for (let $$index = 0, $$length = each_array.length; $$index < $$length; $$index++) {
			let step = each_array[$$index];
			$$renderer.push(`<span>${escape_html(step.title)}</span>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="perspective section watermarked" id="perspective"><div class="section-aside"><p class="eyebrow">Our perspective</p> <span class="small-rule"></span> <p>Technology works better<br/>when everything connects.</p></div> <div><h2>Strong infrastructure.<br/>Clear decisions.<br/>People ready to use it.</h2> <div class="perspective-columns"><p>Trinay is a partner-led technology solutions and professional services organization. We
				bring consulting, solution architecture and implementation together across your enterprise
				environment.</p> <p>From networking and data centers to cloud, cybersecurity and AI, we keep the architecture
				and delivery context connected. Customer training helps that investment translate into
				everyday capability.</p></div> <a class="text-link" href="/about">Get to know Trinay <span>↗</span></a></div></section> <section class="services-section section watermarked" id="services"><div class="section-heading"><div><p class="eyebrow">Our services</p> <h2>Expertise for your<br/>next technology decision.</h2></div> <p>Six connected service practices. One partner from the first conversation to implementation and
			enablement.</p></div> <div class="service-grid"><!--[-->`);
		const each_array_1 = ensure_array_like(services);
		for (let index = 0, $$length = each_array_1.length; index < $$length; index++) {
			let service = each_array_1[index];
			ServiceCard($$renderer, {
				service,
				index
			});
		}
		$$renderer.push(`<!--]--></div></section> <section class="enablement-section section watermarked" id="capabilities"><div class="enablement-intro"><p class="eyebrow">Customer capabilities</p> <h2>Built around your challenge.<br/>Taught in your context.</h2> <p>Technology delivers more when your people know how to use it. We shape learning around your
			problem statements, your tools and the roles that matter.</p> <a class="button forest" href="/capabilities">Explore training &amp; workshops <span>↗</span></a> <div class="learning-visual"><img src="/media/consulting.webp" alt="Technology specialists working through an architecture plan together" width="1586" height="992" loading="lazy"/><span>Practical learning, connected to real work</span></div></div> <div class="enablement-list"><article><div class="enablement-icon">`);
		Icon($$renderer, {
			name: "compass",
			size: 30
		});
		$$renderer.push(`<!----></div> <h3>Customized training</h3> <p>Your problem statement sets the syllabus. We identify skill gaps and create technical
				sessions with exercises relevant to your environment.</p> <span>Problem discovery · Tailored curriculum · Hands-on practice</span></article> <article><div class="enablement-icon">`);
		Icon($$renderer, {
			name: "spark",
			size: 30
		});
		$$renderer.push(`<!----></div> <h3>AI enablement workshops</h3> <p>Help business users, leaders and technical teams explore useful AI workflows, practice
				prompting and learn how to handle data and verify outputs responsibly.</p> <span>Role-specific use cases · Guided exercises · Responsible use</span></article> <article><div class="enablement-icon">`);
		Icon($$renderer, {
			name: "book",
			size: 30
		});
		$$renderer.push(`<!----></div> <h3>Product adoption &amp; training decks</h3> <p>Turn deployment into practical knowledge. We train the relevant users and administrators
				with product walkthroughs, custom decks, lab guides and operational handover.</p> <span>Product walkthroughs · Custom materials · Knowledge transfer</span></article></div></section> <section class="advisory-band section watermarked"><div><p class="eyebrow">Professional services</p> <h2>Evidence before<br/>architecture.</h2> <p>Our consulting and assessment work gives you a decision-ready view of the environment, the
			gaps and the next steps.</p> <a class="text-link" href="/services/it-consulting">Plan an assessment <span>↗</span></a></div> <div class="assessment-list"><!--[-->`);
		const each_array_2 = ensure_array_like(assessments);
		for (let $$index_2 = 0, $$length = each_array_2.length; $$index_2 < $$length; $$index_2++) {
			let assessment = each_array_2[$$index_2];
			$$renderer.push(`<div>`);
			Icon($$renderer, {
				name: "check",
				size: 19
			});
			$$renderer.push(`<!----><span>${escape_html(assessment)}</span></div>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="method-section section watermarked" id="approach"><div class="section-heading"><div><p class="eyebrow">How we work</p> <h2>One connected lifecycle.</h2></div> <p>We carry requirements, architecture decisions and delivery context through every stage, with
			documentation and knowledge transfer built in.</p></div> <ol class="lifecycle-grid"><!--[-->`);
		const each_array_3 = ensure_array_like(lifecycle);
		for (let i = 0, $$length = each_array_3.length; i < $$length; i++) {
			let step = each_array_3[i];
			$$renderer.push(`<li><span class="step-number">${escape_html(String(i + 1).padStart(2, "0"))}</span> <h3>${escape_html(step.title)}</h3> <p>${escape_html(step.body)}</p></li>`);
		}
		$$renderer.push(`<!--]--></ol> <div class="method-footer"><span>`);
		Icon($$renderer, {
			name: "audit",
			size: 22
		});
		$$renderer.push(`<!---->Structured project governance</span><span>`);
		Icon($$renderer, {
			name: "layers",
			size: 22
		});
		$$renderer.push(`<!---->Multi-vendor architecture</span><span>`);
		Icon($$renderer, {
			name: "learning",
			size: 22
		});
		$$renderer.push(`<!---->Customer knowledge transfer</span></div></section> <section class="platform-section section watermarked"><div class="section-heading"><div><p class="eyebrow">Infrastructure depth</p> <h2>Modernize the core.<br/>Prepare for what comes next.</h2></div> <a class="text-link" href="/services/system-integration-dc-wan-is">Explore systems integration <span>↗</span></a></div> <div class="platform-feature"><div class="platform-photo"><img src="/media/hybrid-cloud.webp" alt="Visual interpretation of interconnected hybrid cloud infrastructure" width="1586" height="992" loading="lazy"/></div> <div class="platform-list"><article><span>Nutanix</span> <h3>Hybrid infrastructure</h3> <p>Cluster design, AHV integration, migration, lifecycle optimization and Kubernetes
					platforms.</p></article> <article><span>Veeam</span> <h3>Recovery &amp; resilience</h3> <p>Backup architecture, immutable repositories, granular recovery and disaster recovery
					workflows.</p></article> <article><span>Red Hat OpenShift</span> <h3>Modern application platforms</h3> <p>Kubernetes architecture, GitOps, security hardening and Day-2 operations with technical
					training.</p></article></div></div></section> <section class="credentials-section section watermarked"><div class="section-heading"><div><p class="eyebrow">Practitioner expertise</p> <h2>Certified across the<br/>enterprise technology stack.</h2></div> <p>The capability profile brings together credentials across data center, networking, cloud,
			containers and secure access.</p></div> <div class="credentials-grid"><!--[-->`);
		const each_array_4 = ensure_array_like(credentials);
		for (let $$index_5 = 0, $$length = each_array_4.length; $$index_5 < $$length; $$index_5++) {
			let group = each_array_4[$$index_5];
			$$renderer.push(`<div><h3>${escape_html(group.group)}</h3> <ul><!--[-->`);
			const each_array_5 = ensure_array_like(group.items);
			for (let $$index_4 = 0, $$length = each_array_5.length; $$index_4 < $$length; $$index_4++) {
				let item = each_array_5[$$index_4];
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
