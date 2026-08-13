import { i as head, r as ensure_array_like, t as attr_class, y as escape_html } from "../../chunks/server.js";
import { i as homeFeatures, s as whyTrinay, t as approachOptions } from "../../chunks/data.js";
import { t as ContactForm } from "../../chunks/ContactForm.js";
//#region src/routes/+page.svelte
function _page($$renderer, $$props) {
	$$renderer.component(($$renderer) => {
		const whyIcons = [
			"bx-shield-quarter",
			"bx-fingerprint",
			"bx-target-lock",
			"bx-money",
			"bx-check-shield",
			"bx-time-five"
		];
		head("1uha8ag", $$renderer, ($$renderer) => {
			$$renderer.title(($$renderer) => {
				$$renderer.push(`<title>Trinay Cyber Technologies | World Class Cyber Security</title>`);
			});
			$$renderer.push(`<meta name="description" content="Trinay has been helping organizations to gain 360 degree visibility over the security gaps and we are happy to extend our services to your esteemed organization. Fill the details today to speak with an expert about your specific needs."/>`);
		});
		$$renderer.push(`<section class="hero grid-bg"><div class="shell hero-grid"><div class="hero-copy"><h1>We exploit to defend our clients against ever evolving cyber threats</h1> <p class="hero-lede">Penetration Testing Service</p> <div class="button-row"><a class="button button-primary" href="/contact">Contact Us <span>↗</span></a></div></div> <div class="hero-console" aria-label="Trinay security posture overview"><div class="console-chrome"><div class="chrome-dots"><i></i><i></i><i></i></div> <span>Penetration Testing Service</span> <b>TRINAY</b></div> <div class="console-body"><div class="console-title"><div><small>360 DEGREE VISIBILITY</small> <strong class="console-heading">Security posture</strong></div> <div class="shield-mark">T</div></div> <div class="coverage-map"><div class="radar"><i></i><i></i><i></i><span></span></div> <div class="coverage-list"><div><span>01</span> <p>Automated scans</p> <b>SCAN</b></div> <div><span>02</span> <p>Custom pentests</p> <b>TEST</b></div> <div><span>03</span> <p>Remediation</p> <b>FIX</b></div></div></div> <div class="console-foot"><span><i></i> Automated techniques</span> <span><i></i> Manual techniques</span></div></div></div></div></section> <section class="home-features" aria-label="Trinay security offerings"><div class="shell home-feature-grid"><!--[-->`);
		const each_array = ensure_array_like(homeFeatures);
		for (let index = 0, $$length = each_array.length; index < $$length; index++) {
			let feature = each_array[index];
			$$renderer.push(`<article class="home-feature-card"><div class="feature-card-top"><span>${escape_html(String(index + 1).padStart(2, "0"))}</span> <div class="feature-symbol" aria-hidden="true"><i></i><i></i></div></div> <h2>${escape_html(feature.title)}</h2> <p>${escape_html(feature.body)}</p> `);
			if (feature.description) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<p>${escape_html(feature.description)}</p>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (feature.bulletHead) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<strong>${escape_html(feature.bulletHead)}</strong>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--> `);
			if (feature.bullets) {
				$$renderer.push("<!--[0-->");
				$$renderer.push(`<ul><!--[-->`);
				const each_array_1 = ensure_array_like(feature.bullets);
				for (let $$index = 0, $$length = each_array_1.length; $$index < $$length; $$index++) {
					let item = each_array_1[$$index];
					$$renderer.push(`<li>${escape_html(item)}</li>`);
				}
				$$renderer.push(`<!--]--></ul>`);
			} else $$renderer.push("<!--[-1-->");
			$$renderer.push(`<!--]--></article>`);
		}
		$$renderer.push(`<!--]--></div></section> <section class="section approach-section" id="approach"><div class="shell approach-grid"><div class="sticky-heading"><p class="eyebrow">Our Approach</p> <h2>You Need More Than Scanning...</h2> <div class="approach-photo"><img src="/images/approach-img-4.jpg" alt="Cyber security professional at work" loading="lazy"/> <span>SCAN + TEST + REMEDIATE</span></div></div> <div class="approach-copy"><p class="large-copy">Yes! You read it right. Rather than a typical scan or annual pentests, opt for a continuous
				security programs aka</p> <div class="cadence-list"><!--[-->`);
		const each_array_2 = ensure_array_like(approachOptions);
		for (let index = 0, $$length = each_array_2.length; index < $$length; index++) {
			let option = each_array_2[index];
			$$renderer.push(`<div><span>${escape_html(String(index + 1).padStart(2, "0"))}</span> <strong>${escape_html(option)}</strong></div>`);
		}
		$$renderer.push(`<!--]--></div> <p class="remediation">We are here to guide you! Concentrate on <b>REMEDIATION</b>.</p> <div class="why-copy"><p class="eyebrow">Why is it important?</p> <p>Identifying vulnerabilities requires more effort than simply running automated scans.
					Automated scan enables better scalability and repeatability for addressing known
					vulnerabilities. However, it is different to exploit the vulnerabilities and know the
					impact of the exploit.</p> <p>Trinay's pentests tests are custom approach based on your environment and simulate
					real-world attacks on various components of your IT environment. It helps to detect the
					true vulnerabilities and assess your security posture.</p> <p>A combination of both serves a robust security posture and stress free cyber security
					program.</p></div></div></div></section> <section class="section dark-section"><div class="shell"><div class="section-heading light-heading"><h2>Why Trinay?</h2></div> <div class="why-grid"><!--[-->`);
		const each_array_3 = ensure_array_like(whyTrinay);
		for (let index = 0, $$length = each_array_3.length; index < $$length; index++) {
			let item = each_array_3[index];
			$$renderer.push(`<article class="group"><span>${escape_html(String(index + 1).padStart(2, "0"))}</span> <div class="why-icon group-hover:-translate-y-1" aria-hidden="true"><i${attr_class(`bx ${whyIcons[index]}`)}></i></div> <h3>${escape_html(item)}</h3></article>`);
		}
		$$renderer.push(`<!--]--></div></div></section> <section class="section about-home"><div class="shell about-home-grid"><div class="about-image-wrap"><img src="/images/about-img.jpg" alt="Trinay cyber security team" loading="lazy"/></div> <div class="about-home-copy"><h2>About Us</h2> <p>Triany has started it's journey by realizing the full potential of the technology and the
				cyber security gaps arising due to abrupt increase in use of the technology. Our goal is to
				offer quality services to ensure client's robust security posture to avoid successful
				attacks.</p> <p>Our team brings together decades of experience in cybersecurity. Our team has significant
				experience from different communities in the cyber world. We have spent an unprecedented
				number of hours researching and protecting some of the most sensitive data and systems. Now,
				we are ready to apply that same experience and expertise in defending IT infrastructure and
				its components.</p></div></div></section> <section class="section contact-band"><div class="shell contact-band-grid"><div><h2>Get In Touch</h2> <p>Trinay has been helping organizations to gain 360 degree visibility over the security gaps
				and we are happy to extend our services to your esteemed organization. Fill the details
				today to speak with an expert about your specific needs.</p></div> `);
		ContactForm($$renderer, {});
		$$renderer.push(`<!----></div></section>`);
	});
}
//#endregion
export { _page as default };
