export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["brand/trinay-logo.png","images/about-img.jpg","images/approach-img-4.jpg","images/delivarables-pentesting.png","images/logo_footer.png","images/logo_new.png","images/services-1.jpg","images/services-10.jpg","images/services-3.jpg","images/services-4.jpg","images/services-5.jpg","images/services-9.jpg","images/solution-img.png","images/trinay-cyber-mark-v2.png","images/why-pentesting.jpg","media/consulting.webp","media/data-center.webp","media/hybrid-cloud.webp","media/security.webp","robots.txt"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg",".webp":"image/webp",".txt":"text/plain"},
	_: {
		client: {start:"_app/immutable/entry/start.C4aVBHy0.js",app:"_app/immutable/entry/app.DJZl0Bs3.js",imports:["_app/immutable/entry/start.C4aVBHy0.js","_app/immutable/chunks/DI7l-HWv.js","_app/immutable/chunks/DPGnef7U.js","_app/immutable/chunks/Dt-HX3Vu.js","_app/immutable/entry/app.DJZl0Bs3.js","_app/immutable/chunks/DPGnef7U.js","_app/immutable/chunks/xihTtKlq.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js')),
			__memo(() => import('./nodes/2.js')),
			__memo(() => import('./nodes/3.js')),
			__memo(() => import('./nodes/4.js')),
			__memo(() => import('./nodes/5.js')),
			__memo(() => import('./nodes/6.js')),
			__memo(() => import('./nodes/7.js')),
			__memo(() => import('./nodes/8.js')),
			__memo(() => import('./nodes/9.js'))
		],
		remotes: {
			
		},
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/about",
				pattern: /^\/about\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/capabilities",
				pattern: /^\/capabilities\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/contact",
				pattern: /^\/contact\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/privacy-policy",
				pattern: /^\/privacy-policy\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/services",
				pattern: /^\/services\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/services/[slug]",
				pattern: /^\/services\/([^/]+?)\/?$/,
				params: [{"name":"slug","optional":false,"rest":false,"chained":false}],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/terms-conditions",
				pattern: /^\/terms-conditions\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			}
		],
		prerendered_routes: new Set([]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
