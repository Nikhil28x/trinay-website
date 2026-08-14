<script lang="ts">
	import { contact } from '$lib/data';
</script>

<footer>
	<div class="shell footer-grid">
		<div class="footer-brand">
			<a class="footer-lockup" href="/" aria-label="Trinay Cyber Technologies home">
				<img src="/images/trinay-cyber-mark-v2.png" alt="" />
				<span class="brand-wordmark">
					<strong>TRINAY</strong>
					<small>CYBER TECHNOLOGIES</small>
				</span>
			</a>
			<p>World Class Cyber Security.</p>
			<div class="socials">
				<a href={contact.facebook} target="_blank" rel="noreferrer" aria-label="Trinay on Facebook"
					>f</a
				>
				<a href={contact.linkedin} target="_blank" rel="noreferrer" aria-label="Trinay on LinkedIn"
					>in</a
				>
			</div>
		</div>

		<div class="footer-contact">
			<p class="footer-title">Address</p>
			<address>{contact.address}</address>
			<a href={`mailto:${contact.email}`}>{contact.email}</a>
			<a href={`tel:${contact.indiaPhone.replace(/\s/g, '')}`}>{contact.indiaPhone}</a>
			<a href={`tel:${contact.usPhone.replace(/[\s()]/g, '')}`}>{contact.usPhone}</a>
		</div>

		<div>
			<p class="footer-title">Solution</p>
			<ul>
				<li><a href="/services/ransomware-assessment">Ransomware Assessment</a></li>
				<li><a href="/services/vulnerability-scanning">Vulnerability Scanning</a></li>
				<li><a href="/services/pci-asv-scanning">PCI-ASV Scanning</a></li>
			</ul>
			<p class="footer-title footer-subtitle">Penetration Testing</p>
			<ul>
				<li><a href="/services/web-app-pentesting">Web App Pentesting</a></li>
				<li><a href="/services/mobile-app-pentesting">Mobile App Pentesting</a></li>
				<li><a href="/services/network-pentesting">Network Pentesting</a></li>
			</ul>
		</div>

		<div>
			<p class="footer-title">Useful Links</p>
			<ul>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/services">Services</a></li>
				<li><a href="/contact">Contact</a></li>
			</ul>
		</div>
	</div>

	<div class="shell footer-bottom">
		<p>© {new Date().getFullYear()} Trinay Cyber Technologies Pvt Ltd. All rights reserved.</p>
		<div>
			<a href="/privacy-policy">Privacy Policy</a><a href="/terms-conditions">Terms & Conditions</a>
		</div>
	</div>
</footer>
