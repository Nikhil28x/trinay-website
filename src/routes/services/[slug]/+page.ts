import { error } from '@sveltejs/kit';
import { services } from '$lib/data';

export function load({ params }) {
	const service = services.find((item) => item.slug === params.slug);

	if (!service) {
		error(404, 'Service not found');
	}

	return { service };
}
