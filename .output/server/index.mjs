globalThis.__nitro_main__ = import.meta.url;
import { i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx+unenv.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/assets/about-BBrR-YLb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2854-bqUW3JAc6N+wiHhscTMAbDbWzHg\"",
		"mtime": "2026-08-09T03:18:18.288Z",
		"size": 10324,
		"path": "../public/assets/about-BBrR-YLb.js"
	},
	"/assets/ActionModals-wDb-zk34.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"202d-I1sEu5NyGxu0fJtub+8yFSc0ixY\"",
		"mtime": "2026-08-09T03:18:18.286Z",
		"size": 8237,
		"path": "../public/assets/ActionModals-wDb-zk34.js"
	},
	"/assets/apiClient-Dilg2GGO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a22-hgGiC29xW84sgaG+LvmaY7++pfc\"",
		"mtime": "2026-08-09T03:18:18.289Z",
		"size": 2594,
		"path": "../public/assets/apiClient-Dilg2GGO.js"
	},
	"/assets/AuthLayout-DvCWdRv8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8de-kPjISoxUD0GfGDG5EdZTB/Bb6CY\"",
		"mtime": "2026-08-09T03:18:18.287Z",
		"size": 2270,
		"path": "../public/assets/AuthLayout-DvCWdRv8.js"
	},
	"/assets/award-D07Agdo7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-CB7qBY1kiWqaG7u0XjVaJldzJ8I\"",
		"mtime": "2026-08-09T03:18:18.289Z",
		"size": 269,
		"path": "../public/assets/award-D07Agdo7.js"
	},
	"/assets/calendar-B_bN9hTq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc-ovIKFFr4Nn4MoPu7nKWT5a7HTqQ\"",
		"mtime": "2026-08-09T03:18:18.290Z",
		"size": 252,
		"path": "../public/assets/calendar-B_bN9hTq.js"
	},
	"/assets/campaigns-3V6UqPuC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6430-sofXAbGfFrAMVoytn1K2mI9A4s0\"",
		"mtime": "2026-08-09T03:18:18.291Z",
		"size": 25648,
		"path": "../public/assets/campaigns-3V6UqPuC.js"
	},
	"/assets/check-Drld0bS1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-axMt11ba+1HZJtEXMbiXrlDg8So\"",
		"mtime": "2026-08-09T03:18:18.291Z",
		"size": 119,
		"path": "../public/assets/check-Drld0bS1.js"
	},
	"/assets/circle-alert-C4a6bAkN.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-pqeReTj3J0TlIWi7+mADQDvvAps\"",
		"mtime": "2026-08-09T03:18:18.292Z",
		"size": 245,
		"path": "../public/assets/circle-alert-C4a6bAkN.js"
	},
	"/assets/circle-check-DUpyLf9m.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-r8TTYEI3BWnPgR07DJMh/8cIJ+M\"",
		"mtime": "2026-08-09T03:18:18.293Z",
		"size": 173,
		"path": "../public/assets/circle-check-DUpyLf9m.js"
	},
	"/assets/clock-DgZqp5NC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-e955yn5WGvh1Vo2HP0Dmi1ThCfU\"",
		"mtime": "2026-08-09T03:18:18.293Z",
		"size": 164,
		"path": "../public/assets/clock-DgZqp5NC.js"
	},
	"/assets/blood-BUC8soO3.jpeg": {
		"type": "image/jpeg",
		"etag": "\"5207a-tCS2Ydt2ZG/o29HuMQnzTQZxq+4\"",
		"mtime": "2026-08-09T03:18:18.322Z",
		"size": 335994,
		"path": "../public/assets/blood-BUC8soO3.jpeg"
	},
	"/assets/dashboard-BOgJKjxu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c72-po/LZaf8u9of1UOTpcdRiGD/9gE\"",
		"mtime": "2026-08-09T03:18:18.294Z",
		"size": 23666,
		"path": "../public/assets/dashboard-BOgJKjxu.js"
	},
	"/assets/cloth-ZGHxY2E4.jpg": {
		"type": "image/jpeg",
		"etag": "\"17a54-JLZoOzkB1WcYTRwOynAstLxYe5Q\"",
		"mtime": "2026-08-09T03:18:18.323Z",
		"size": 96852,
		"path": "../public/assets/cloth-ZGHxY2E4.jpg"
	},
	"/assets/demoAuth-C8U5D29h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a7-6SyHZ3lH6Vz4nZck1St/Llz0Ymk\"",
		"mtime": "2026-08-09T03:18:18.296Z",
		"size": 5287,
		"path": "../public/assets/demoAuth-C8U5D29h.js"
	},
	"/assets/download-DGrhNnTH.jpg": {
		"type": "image/jpeg",
		"etag": "\"39db4-+38F1DJkAoUY26bREilI2jMAncQ\"",
		"mtime": "2026-08-09T03:18:18.324Z",
		"size": 236980,
		"path": "../public/assets/download-DGrhNnTH.jpg"
	},
	"/assets/explore-BvInbHev.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42b4-FgU2XJRZv7gsx2RVeDeU+YlNyUw\"",
		"mtime": "2026-08-09T03:18:18.298Z",
		"size": 17076,
		"path": "../public/assets/explore-BvInbHev.js"
	},
	"/assets/food-CxMa8EB8.jpg": {
		"type": "image/jpeg",
		"etag": "\"fd93-ZWcTBfP1oBNBUN2QDuUKJMOOryI\"",
		"mtime": "2026-08-09T03:18:18.324Z",
		"size": 64915,
		"path": "../public/assets/food-CxMa8EB8.jpg"
	},
	"/assets/funnel-DooBNCA0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-zo1j+pIsLDAeqm/MNc7onk2W/TA\"",
		"mtime": "2026-08-09T03:18:18.299Z",
		"size": 251,
		"path": "../public/assets/funnel-DooBNCA0.js"
	},
	"/assets/get-started-DKlIUpDH.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4df-xXdRncNqSjqRIY12AHGbrdHUIVo\"",
		"mtime": "2026-08-09T03:18:18.300Z",
		"size": 1247,
		"path": "../public/assets/get-started-DKlIUpDH.js"
	},
	"/assets/gsap-BCurGNVu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"143-IudxKG3AkDl1LQ0UHE/SmcHMy3U\"",
		"mtime": "2026-08-09T03:18:18.301Z",
		"size": 323,
		"path": "../public/assets/gsap-BCurGNVu.js"
	},
	"/assets/heart-8pV6y91p.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-OlOtNJF10quiZDwSEH05F4ty3Zo\"",
		"mtime": "2026-08-09T03:18:18.302Z",
		"size": 253,
		"path": "../public/assets/heart-8pV6y91p.js"
	},
	"/assets/hero-nepal-8VAR8a3q.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d418-5UFVZMBbOW+l1NAiHlyrvI53Ydg\"",
		"mtime": "2026-08-09T03:18:18.325Z",
		"size": 185368,
		"path": "../public/assets/hero-nepal-8VAR8a3q.jpg"
	},
	"/assets/hero-nepal-B4AADqOn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6faa-0omAQvyO/qOtF0V+ttCrop7++pE\"",
		"mtime": "2026-08-09T03:18:18.303Z",
		"size": 28586,
		"path": "../public/assets/hero-nepal-B4AADqOn.js"
	},
	"/assets/hero-nepal-DCD5dpt0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2db-88OTL4gsQGT5x5s28/Iw4u5TpQU\"",
		"mtime": "2026-08-09T03:18:18.524Z",
		"size": 731,
		"path": "../public/assets/hero-nepal-DCD5dpt0.css"
	},
	"/assets/index-CJYxep6g.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1fac-30v3UR/Xil3Qyrs3ZVvHiegMFKg\"",
		"mtime": "2026-08-09T03:18:18.525Z",
		"size": 8108,
		"path": "../public/assets/index-CJYxep6g.css"
	},
	"/assets/leaderboard-DfJyclYL.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c3f-BHnUK7kWMRF364g8BHWPijeJABs\"",
		"mtime": "2026-08-09T03:18:18.304Z",
		"size": 15423,
		"path": "../public/assets/leaderboard-DfJyclYL.js"
	},
	"/assets/lenis-SLnaB0gZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"48b0-vtmGOlY8qB8NAJihFo64fm7YOR4\"",
		"mtime": "2026-08-09T03:18:18.305Z",
		"size": 18608,
		"path": "../public/assets/lenis-SLnaB0gZ.js"
	},
	"/assets/index-DPkQtBY6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"79433-uLdV2oW+n4UWfPeDk782+zcaKG8\"",
		"mtime": "2026-08-09T03:18:18.286Z",
		"size": 496691,
		"path": "../public/assets/index-DPkQtBY6.js"
	},
	"/assets/login-4PhuveY1.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f49-WCcBEn+kKaGQVpTf1DJ8ZzEnfqo\"",
		"mtime": "2026-08-09T03:18:18.306Z",
		"size": 3913,
		"path": "../public/assets/login-4PhuveY1.js"
	},
	"/assets/map-pin-7zeK5Bwa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-CHrORByuNtXMA0VCACS4iY0pdmk\"",
		"mtime": "2026-08-09T03:18:18.307Z",
		"size": 254,
		"path": "../public/assets/map-pin-7zeK5Bwa.js"
	},
	"/assets/ngos-DxyPNm4a.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5dd4-lcQxltKsFNS7yttJAXee2QVq+A4\"",
		"mtime": "2026-08-09T03:18:18.307Z",
		"size": 24020,
		"path": "../public/assets/ngos-DxyPNm4a.js"
	},
	"/assets/profile-D9UQ1hrg.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-ngo53q6m8ViD7tmCc+HzX2PjcjM\"",
		"mtime": "2026-08-09T03:18:18.308Z",
		"size": 4006,
		"path": "../public/assets/profile-D9UQ1hrg.js"
	},
	"/assets/review-an_eYnr6.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae6-7B5kxqN/J6Kd7TcdaGbF2LTmETk\"",
		"mtime": "2026-08-09T03:18:18.309Z",
		"size": 2790,
		"path": "../public/assets/review-an_eYnr6.js"
	},
	"/assets/role-uz5irvFZ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a22-fv31MlCYdKvcwiIN66eDN2bsXYQ\"",
		"mtime": "2026-08-09T03:18:18.309Z",
		"size": 2594,
		"path": "../public/assets/role-uz5irvFZ.js"
	},
	"/assets/routes-IA56V8IU.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"f32-t+WBg5yKlqm30nP7Ot+vlhPV0HQ\"",
		"mtime": "2026-08-09T03:18:18.526Z",
		"size": 3890,
		"path": "../public/assets/routes-IA56V8IU.css"
	},
	"/assets/routes-lJHpSpgu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a751-vUuFc3xMU/mqcZ92SXghns1463w\"",
		"mtime": "2026-08-09T03:18:18.310Z",
		"size": 42833,
		"path": "../public/assets/routes-lJHpSpgu.js"
	},
	"/assets/search-C5_FVDjs.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-0ZiQAWE1jvhLEb+VN6d1RrXECSQ\"",
		"mtime": "2026-08-09T03:18:18.310Z",
		"size": 169,
		"path": "../public/assets/search-C5_FVDjs.js"
	},
	"/assets/shield-check-B-rLmjT5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b-GsaTlTF+n3CPfGQRGmKz9J3dUEI\"",
		"mtime": "2026-08-09T03:18:18.313Z",
		"size": 315,
		"path": "../public/assets/shield-check-B-rLmjT5.js"
	},
	"/assets/signup-CvHiQ7AY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-dKHPzifidrzmMRNAPwJvET7wrhk\"",
		"mtime": "2026-08-09T03:18:18.316Z",
		"size": 4006,
		"path": "../public/assets/signup-CvHiQ7AY.js"
	},
	"/assets/site-footer-BnsdvMzo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1753-OIOBBOcPwkPqkq7KdHAA3C07l54\"",
		"mtime": "2026-08-09T03:18:18.317Z",
		"size": 5971,
		"path": "../public/assets/site-footer-BnsdvMzo.js"
	},
	"/assets/second-CApuE3el.jpg": {
		"type": "image/jpeg",
		"etag": "\"2c5ba-8HTXECKhZ//hpAzUSB8QAm/KVDs\"",
		"mtime": "2026-08-09T03:18:18.527Z",
		"size": 181690,
		"path": "../public/assets/second-CApuE3el.jpg"
	},
	"/assets/site-nav-B2iBQbIO.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e8-UrdB5c2CvwGzDyaCL0EuGye9Z3Y\"",
		"mtime": "2026-08-09T03:18:18.319Z",
		"size": 5608,
		"path": "../public/assets/site-nav-B2iBQbIO.js"
	},
	"/assets/success-DCNxUlWf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f0-VpmUpNQaEuLAgXznbwXbzb138Fk\"",
		"mtime": "2026-08-09T03:18:18.319Z",
		"size": 1520,
		"path": "../public/assets/success-DCNxUlWf.js"
	},
	"/assets/styles-CZfOFqOi.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18136-lCsTV+kRMqVb/EblQwJ1GlUOi2Q\"",
		"mtime": "2026-08-09T03:18:18.534Z",
		"size": 98614,
		"path": "../public/assets/styles-CZfOFqOi.css"
	},
	"/assets/user-check-J-DafxyR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-6VOUczUcG381Ev5HVqK7RcpprYA\"",
		"mtime": "2026-08-09T03:18:18.320Z",
		"size": 238,
		"path": "../public/assets/user-check-J-DafxyR.js"
	},
	"/assets/users-TQlEz69n.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12d-yRZzXUxl33+eaNEeWufLzhJjxDs\"",
		"mtime": "2026-08-09T03:18:18.321Z",
		"size": 301,
		"path": "../public/assets/users-TQlEz69n.js"
	},
	"/assets/volunteers-BLSvdL-o.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"55dc-vU+fsW6QL6/MrsAgzpvs9uawluc\"",
		"mtime": "2026-08-09T03:18:18.321Z",
		"size": 21980,
		"path": "../public/assets/volunteers-BLSvdL-o.js"
	},
	"/assets/volunteer-dVMGJUqX.jpg": {
		"type": "image/jpeg",
		"etag": "\"a304-8QrLrTQ3fcoQzbYYkZYHFt1nnCs\"",
		"mtime": "2026-08-09T03:18:18.535Z",
		"size": 41732,
		"path": "../public/assets/volunteer-dVMGJUqX.jpg"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_fDSC09 = defineLazyEventHandler(() => import("./_chunks/renderer-template.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_fDSC09
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
