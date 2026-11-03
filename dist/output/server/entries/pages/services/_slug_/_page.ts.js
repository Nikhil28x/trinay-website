import { a as services } from "../../../../chunks/data.js";
import { error, redirect } from "@sveltejs/kit";
//#region src/routes/services/[slug]/+page.ts
function load({ params }) {
	if ([
		"web-app-pentesting",
		"mobile-app-pentesting",
		"network-pentesting",
		"vulnerability-scanning",
		"ransomware-assessment",
		"pci-asv-scanning"
	].includes(params.slug)) redirect(308, "/services/cybersecurity");
	const service = services.find((item) => item.slug === params.slug);
	if (!service) error(404, "Service not found");
	return { service };
}
//#endregion
export { load };
