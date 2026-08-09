globalThis.__nitro_main__ = import.meta.url;
import { i as defineLazyEventHandler, n as HTTPError, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
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
	"/assets/about-BSMx9-h9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"285e-0sClAlofI4HQWierm1HzPiEdeB8\"",
		"mtime": "2026-08-08T19:24:23.890Z",
		"size": 10334,
		"path": "../public/assets/about-BSMx9-h9.js"
	},
	"/assets/ActionModals-C4C3DsZe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"202d-6xASZBDnhYKi0usBsCQwPwe7/2s\"",
		"mtime": "2026-08-08T19:24:23.890Z",
		"size": 8237,
		"path": "../public/assets/ActionModals-C4C3DsZe.js"
	},
	"/assets/AnimatedButton-BwM4WYvw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f79-kNmmmGGd/fmmuOx7f/FP3wz371o\"",
		"mtime": "2026-08-08T19:24:23.890Z",
		"size": 28537,
		"path": "../public/assets/AnimatedButton-BwM4WYvw.js"
	},
	"/assets/apiClient-CDTAoW7I.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a1d-PV0+TBhtadtBWw/yjwoZ6HRmzS0\"",
		"mtime": "2026-08-08T19:24:23.890Z",
		"size": 2589,
		"path": "../public/assets/apiClient-CDTAoW7I.js"
	},
	"/assets/AuthLayout-BWbwZZLI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8fc-GHnPsq0Q1aQliOfR89QVoDeOlr4\"",
		"mtime": "2026-08-08T19:24:23.890Z",
		"size": 2300,
		"path": "../public/assets/AuthLayout-BWbwZZLI.js"
	},
	"/assets/award-DkGdNkIW.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"10d-8EWrLX5LN5UpxJQxndk/UWIWiX8\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 269,
		"path": "../public/assets/award-DkGdNkIW.js"
	},
	"/assets/calendar-D6DIX2tx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc-gzU5UDxmIB58Jl74ZMtok+d9d6I\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 252,
		"path": "../public/assets/calendar-D6DIX2tx.js"
	},
	"/assets/AnimatedButton-DCD5dpt0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2db-88OTL4gsQGT5x5s28/Iw4u5TpQU\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 731,
		"path": "../public/assets/AnimatedButton-DCD5dpt0.css"
	},
	"/assets/campaigns-PWuMVqYS.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"644a-M0XeojJles+sLS1Wo2F5fzZw4xs\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 25674,
		"path": "../public/assets/campaigns-PWuMVqYS.js"
	},
	"/assets/check-C7o_XvCn.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-/6wWABDn5lbLa1InMo03ZPxKM60\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 119,
		"path": "../public/assets/check-C7o_XvCn.js"
	},
	"/assets/circle-alert-BhDYbQMu.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-hFvT54u+MBbADz6fv9mOdKFELws\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 245,
		"path": "../public/assets/circle-alert-BhDYbQMu.js"
	},
	"/assets/circle-check-DliIkepb.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-SSVqVTuR6vwyjwZ8aJnp23aDs8U\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 173,
		"path": "../public/assets/circle-check-DliIkepb.js"
	},
	"/assets/clock-gHekWypk.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-9bg1OymmSGUCpf66/jDpy6cxOv4\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 164,
		"path": "../public/assets/clock-gHekWypk.js"
	},
	"/assets/dashboard-CWL3qbxC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5c68-PR7OWbEjK/bjhfJSDe1jewDJNqI\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 23656,
		"path": "../public/assets/dashboard-CWL3qbxC.js"
	},
	"/assets/demoAuth-C8U5D29h.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"14a7-6SyHZ3lH6Vz4nZck1St/Llz0Ymk\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 5287,
		"path": "../public/assets/demoAuth-C8U5D29h.js"
	},
	"/assets/explore-DTFPNs7v.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"42b9-SXdIfnf3ZWYVsppwVKNvDeIjUf8\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 17081,
		"path": "../public/assets/explore-DTFPNs7v.js"
	},
	"/assets/funnel-f3o0XdjE.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fb-UQQDyh+yfywtTnSkQKGwKLF0EvY\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 251,
		"path": "../public/assets/funnel-f3o0XdjE.js"
	},
	"/assets/get-started-Bni0fGsl.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4da-8eGJ4ZUNOqcDN2PVensH005YCyU\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 1242,
		"path": "../public/assets/get-started-Bni0fGsl.js"
	},
	"/assets/gsap-4sJ3-tcC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e7-bPuQa/cM+0Ck6rSUDZ/ldZ+Af4s\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 113127,
		"path": "../public/assets/gsap-4sJ3-tcC.js"
	},
	"/assets/heart-C4nQ1tZQ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fd-Zlq+WVZuBlJESnavAAcXKVyd8EU\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 253,
		"path": "../public/assets/heart-C4nQ1tZQ.js"
	},
	"/assets/hero-nepal-d8NQmERh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-QXgEYkuy+hJCujOQPYn6P4lsLUA\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 55,
		"path": "../public/assets/hero-nepal-d8NQmERh.js"
	},
	"/assets/index-Bt68vXxa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5d225-QmHhiOMAN0xywpI0+R3Y5Z6ijEE\"",
		"mtime": "2026-08-08T19:24:23.890Z",
		"size": 381477,
		"path": "../public/assets/index-Bt68vXxa.js"
	},
	"/assets/hero-nepal-8VAR8a3q.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d418-5UFVZMBbOW+l1NAiHlyrvI53Ydg\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 185368,
		"path": "../public/assets/hero-nepal-8VAR8a3q.jpg"
	},
	"/assets/leaderboard-CDzk7Ti5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3c3f-5ldk0qhnNC5Pd10X5yaRTIM34pI\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 15423,
		"path": "../public/assets/leaderboard-CDzk7Ti5.js"
	},
	"/assets/index-CJYxep6g.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1fac-30v3UR/Xil3Qyrs3ZVvHiegMFKg\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 8108,
		"path": "../public/assets/index-CJYxep6g.css"
	},
	"/assets/login-DrzjFzbm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f49-OC9mre3c3tEaJ7Q+iVQyvjCfvbU\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 3913,
		"path": "../public/assets/login-DrzjFzbm.js"
	},
	"/assets/map-pin-DhuLd4b5.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fe-afLLHHaTuZZg79t9lQwYGO53Hs4\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 254,
		"path": "../public/assets/map-pin-DhuLd4b5.js"
	},
	"/assets/ngos-DSRHd5kv.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5dfe-FHa3Q9q2wLh5TAACv0zBG6fu8Sk\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 24062,
		"path": "../public/assets/ngos-DSRHd5kv.js"
	},
	"/assets/profile-qXP7S-c0.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-OEaW872Lzk9WjGbLThtWA12GYU8\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 4006,
		"path": "../public/assets/profile-qXP7S-c0.js"
	},
	"/assets/review-Ci_3R7oe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae6-BYpNzLYa6HPVk2R2C9JVlyHJKwA\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 2790,
		"path": "../public/assets/review-Ci_3R7oe.js"
	},
	"/assets/role-BD7nqbI9.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a22-rfWreU0fl5ozvDI6sIRTbLf8cpQ\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 2594,
		"path": "../public/assets/role-BD7nqbI9.js"
	},
	"/assets/routes-CWPis8Gd.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6e8-VFMNDIsOLaOMov4z7YLW+W9xbWA\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 42728,
		"path": "../public/assets/routes-CWPis8Gd.js"
	},
	"/assets/search-CKUVS_Aq.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a9-UcnkbhwRlTDqTG9Lpkivl82oz0E\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 169,
		"path": "../public/assets/search-CKUVS_Aq.js"
	},
	"/assets/shield-check-DTOrD44N.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13b-uTmzawiuXKhV51wLeKbYn38eEb4\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 315,
		"path": "../public/assets/shield-check-DTOrD44N.js"
	},
	"/assets/signup-COdFUEyD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-ev8o9cetD8HJTcDS7KJEdLW47+g\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 4006,
		"path": "../public/assets/signup-COdFUEyD.js"
	},
	"/assets/site-footer-Be8lvKWy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1753-ruxjhkHRwKUu1w/Y8fKkGSGkAM8\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 5971,
		"path": "../public/assets/site-footer-Be8lvKWy.js"
	},
	"/assets/routes-DRfgUCHj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"ed5-IcyM7pl9WojYLYhcxljavG1UEK0\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 3797,
		"path": "../public/assets/routes-DRfgUCHj.css"
	},
	"/assets/site-nav-CREbicnY.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"15e3-NY7d3JW45JcZwDIBhVzJULpvP+U\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 5603,
		"path": "../public/assets/site-nav-CREbicnY.js"
	},
	"/assets/success-DzH9hlIa.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f0-cgSxiMvzXapVE7LGbuRnVfNvJaA\"",
		"mtime": "2026-08-08T19:24:23.906Z",
		"size": 1520,
		"path": "../public/assets/success-DzH9hlIa.js"
	},
	"/assets/user-check-BIieWEKF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ee-eqtNnbJgSX+AkZE8PaOnYkjf420\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 238,
		"path": "../public/assets/user-check-BIieWEKF.js"
	},
	"/assets/styles-CZfOFqOi.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"18136-lCsTV+kRMqVb/EblQwJ1GlUOi2Q\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 98614,
		"path": "../public/assets/styles-CZfOFqOi.css"
	},
	"/assets/users-D8H1yjiV.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"12d-LQBPPX09lBhPVGEUpqE+Ft01EAo\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 301,
		"path": "../public/assets/users-D8H1yjiV.js"
	},
	"/assets/volunteers-Ci4u1MEB.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"543c-Y++ixXWIld+7lkuhQyJ7XLhtkv8\"",
		"mtime": "2026-08-08T19:24:23.921Z",
		"size": 21564,
		"path": "../public/assets/volunteers-Ci4u1MEB.js"
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
