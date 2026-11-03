import { error, redirect } from '@sveltejs/kit';
import { services } from '$lib/data';

export function load({ params }) {
	const legacySecurityServices = [
		'web-app-pentesting',
		'mobile-app-pentesting',
		'network-pentesting',
		'vulnerability-scanning',
		'ransomware-assessment',
		'pci-asv-scanning'
	];
	if (legacySecurityServices.includes(params.slug)) redirect(308, '/services/cybersecurity');
	const service = services.find((item) => item.slug === params.slug);

	if (!service) {
		error(404, 'Service not found');
	}

	return { service };
}
