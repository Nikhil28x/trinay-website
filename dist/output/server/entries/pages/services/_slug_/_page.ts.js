import { a as services } from "../../../../chunks/data.js";
import { error } from "@sveltejs/kit";
//#region src/routes/services/[slug]/+page.ts
function load({ params }) {
	const service = services.find((item) => item.slug === params.slug);
	if (!service) error(404, "Service not found");
	return { service };
}
//#endregion
export { load };
