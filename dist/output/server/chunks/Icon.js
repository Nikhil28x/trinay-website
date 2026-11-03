import { v as attr } from "./server.js";
//#region src/lib/components/Icon.svelte
function Icon($$renderer, $$props) {
	let { name, size = 24 } = $$props;
	const paths = {
		compass: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm4 5-2.5 5.5L8 16l2.5-5.5L16 8Z",
		shield: "M12 3 4.5 6v5c0 4.5 3 7.5 7.5 10 4.5-2.5 7.5-5.5 7.5-10V6L12 3Zm-4 9 2.5 2.5L16 9",
		audit: "M8 4H5v17h14V4h-3M9 2h6v5H9V2Zm-1 10 2 2 5-5m-7 9h8",
		network: "M9 3h6v5H9V3ZM2 16h6v5H2v-5Zm14 0h6v5h-6v-5ZM12 8v5M5 16v-3h14v3",
		learning: "m2 9 10-5 10 5-10 5L2 9Zm4 2v6c4 3 8 3 12 0v-6M22 9v8",
		data: "M3 5c0-3 18-3 18 0S3 8 3 5Zm0 0v14c0 4 18 4 18 0V5M3 12c0 4 18 4 18 0",
		arrow: "M5 12h14m-6-6 6 6-6 6",
		check: "m5 12 4 4L19 6",
		spark: "m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z",
		layers: "m12 3 10 5-10 5L2 8l10-5ZM2 12l10 5 10-5M2 16l10 5 10-5",
		book: "M12 5v16M3 3h4c3 0 5 2 5 2s2-2 5-2h4v16h-4c-3 0-5 2-5 2s-2-2-5-2H3V3Z"
	};
	$$renderer.push(`<svg${attr("width", size)}${attr("height", size)} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path${attr("d", paths[name] || paths.layers)}></path></svg>`);
}
//#endregion
export { Icon as t };
