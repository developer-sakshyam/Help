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
	"/assets/about-Bj76EOgo.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"2914-IWpjfANs4GlQDBCRVIy9r/d248I\"",
		"mtime": "2026-08-08T16:28:20.340Z",
		"size": 10516,
		"path": "../public/assets/about-Bj76EOgo.js"
	},
	"/assets/AnimatedButton-CdcPT-0W.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6f79-yPADzByGFyBNPnQh2d9UGLQ2P2c\"",
		"mtime": "2026-08-08T16:28:20.325Z",
		"size": 28537,
		"path": "../public/assets/AnimatedButton-CdcPT-0W.js"
	},
	"/assets/apiClient-CIlBfg6q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9f7-/bPtRPyOOwbTondufoDJFflVaGk\"",
		"mtime": "2026-08-08T16:28:20.340Z",
		"size": 2551,
		"path": "../public/assets/apiClient-CIlBfg6q.js"
	},
	"/assets/AuthLayout-DM_mLZwt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"8fc-zvHWvviwrrWxDEt4zU7DA/E4i2g\"",
		"mtime": "2026-08-08T16:28:20.340Z",
		"size": 2300,
		"path": "../public/assets/AuthLayout-DM_mLZwt.js"
	},
	"/assets/AnimatedButton-DCD5dpt0.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"2db-88OTL4gsQGT5x5s28/Iw4u5TpQU\"",
		"mtime": "2026-08-08T16:28:20.389Z",
		"size": 731,
		"path": "../public/assets/AnimatedButton-DCD5dpt0.css"
	},
	"/assets/calendar-q5IOaBwz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fc-gbBQpf2edDTRcBGE+3w2EHFZBnU\"",
		"mtime": "2026-08-08T16:28:20.340Z",
		"size": 252,
		"path": "../public/assets/calendar-q5IOaBwz.js"
	},
	"/assets/campaigns-D7BJANtX.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5e63-KhDQf3A6p/TLDajv3m3zBYa1Mp4\"",
		"mtime": "2026-08-08T16:28:20.340Z",
		"size": 24163,
		"path": "../public/assets/campaigns-D7BJANtX.js"
	},
	"/assets/check-C6T_ebSK.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"77-Q5Oj/UTNLztb0eSVMIgZWLzQtEs\"",
		"mtime": "2026-08-08T16:28:20.340Z",
		"size": 119,
		"path": "../public/assets/check-C6T_ebSK.js"
	},
	"/assets/circle-alert-n8hCqP9Y.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"f5-DRUgPFhqWLzSBEmN2HpFhnjubKI\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 245,
		"path": "../public/assets/circle-alert-n8hCqP9Y.js"
	},
	"/assets/circle-check-DN4slEpU.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ad-l00ZBaxaOrCiutFVsLDR777G9tM\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 173,
		"path": "../public/assets/circle-check-DN4slEpU.js"
	},
	"/assets/clock-CjOLpC4Q.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a4-guBaWVL16Nx5Ul+SgrwJyH2SBWw\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 164,
		"path": "../public/assets/clock-CjOLpC4Q.js"
	},
	"/assets/demoAuth-CxRDjXZC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"3ba-SAC0AVghuSGjTYldDayDK0CUtnw\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 954,
		"path": "../public/assets/demoAuth-CxRDjXZC.js"
	},
	"/assets/explore-S2fdEA-T.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"40ed-yNlZ0wzIa7/XKQz5Hu/fZig3ysk\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 16621,
		"path": "../public/assets/explore-S2fdEA-T.js"
	},
	"/assets/get-started-Dk6t-eKy.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4da-ELEj24IVZJyJ0Mkz7Tp3apwZ4Kw\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 1242,
		"path": "../public/assets/get-started-Dk6t-eKy.js"
	},
	"/assets/gsap-4sJ3-tcC.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1b9e7-bPuQa/cM+0Ck6rSUDZ/ldZ+Af4s\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 113127,
		"path": "../public/assets/gsap-4sJ3-tcC.js"
	},
	"/assets/hero-nepal-d8NQmERh.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"37-QXgEYkuy+hJCujOQPYn6P4lsLUA\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 55,
		"path": "../public/assets/hero-nepal-d8NQmERh.js"
	},
	"/assets/index-B9CMZ74O.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5cd72-WFCs/bfyFxj223LudJwgaDzclGY\"",
		"mtime": "2026-08-08T16:28:20.325Z",
		"size": 380274,
		"path": "../public/assets/index-B9CMZ74O.js"
	},
	"/assets/hero-nepal-8VAR8a3q.jpg": {
		"type": "image/jpeg",
		"etag": "\"2d418-5UFVZMBbOW+l1NAiHlyrvI53Ydg\"",
		"mtime": "2026-08-08T16:28:20.389Z",
		"size": 185368,
		"path": "../public/assets/hero-nepal-8VAR8a3q.jpg"
	},
	"/assets/login-CkAcx1Za.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"b7d-HD+gEhfV/AYpQSKcZ8kC0gS3aU4\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 2941,
		"path": "../public/assets/login-CkAcx1Za.js"
	},
	"/assets/index-CJYxep6g.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1fac-30v3UR/Xil3Qyrs3ZVvHiegMFKg\"",
		"mtime": "2026-08-08T16:28:20.477Z",
		"size": 8108,
		"path": "../public/assets/index-CJYxep6g.css"
	},
	"/assets/ngos-UD9D7PVm.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5b07-9/WkXkl796P53nZwrwWmOooUGHY\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 23303,
		"path": "../public/assets/ngos-UD9D7PVm.js"
	},
	"/assets/profile-BnuRGCJf.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-KgjfWzKwtZWnn3Swz3ODBxQAdus\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 4006,
		"path": "../public/assets/profile-BnuRGCJf.js"
	},
	"/assets/review-BBCNvPGD.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ae6-Rh8a5VHBR8y3RYbWEv5a8YwjN/0\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 2790,
		"path": "../public/assets/review-BBCNvPGD.js"
	},
	"/assets/role-BIqavQCt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"9d4-fKAHcEb+W0upVep6gILMwA4nlVY\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 2516,
		"path": "../public/assets/role-BIqavQCt.js"
	},
	"/assets/routes-BmBjEN9x.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a6e8-gxbCzQDQS93GAOM5SU3XNyzAaLY\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 42728,
		"path": "../public/assets/routes-BmBjEN9x.js"
	},
	"/assets/search-BBeWp6zA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"238-Paa9ZMnSBqqMBvoJaDqJkgmIDmE\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 568,
		"path": "../public/assets/search-BBeWp6zA.js"
	},
	"/assets/routes-DRfgUCHj.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"ed5-IcyM7pl9WojYLYhcxljavG1UEK0\"",
		"mtime": "2026-08-08T16:28:20.477Z",
		"size": 3797,
		"path": "../public/assets/routes-DRfgUCHj.css"
	},
	"/assets/signup-DunyzYgJ.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"fa6-7Me0WQvAzZ7kP4sSav38Ier3H7Q\"",
		"mtime": "2026-08-08T16:28:20.356Z",
		"size": 4006,
		"path": "../public/assets/signup-DunyzYgJ.js"
	},
	"/assets/site-footer-CcjA-yoF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1706-r7wWvWykGgLhc9Q/gyQt+ocChTg\"",
		"mtime": "2026-08-08T16:28:20.383Z",
		"size": 5894,
		"path": "../public/assets/site-footer-CcjA-yoF.js"
	},
	"/assets/site-nav-C2-5GqkI.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"ce7-aQ3rf4n0OHBdCu8oPakF4bT87Ok\"",
		"mtime": "2026-08-08T16:28:20.389Z",
		"size": 3303,
		"path": "../public/assets/site-nav-C2-5GqkI.js"
	},
	"/assets/styles-Dr1X2zRh.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"15bdc-rz+uvQ5qtOWf2WNFw1dsnyGWNjk\"",
		"mtime": "2026-08-08T16:28:20.480Z",
		"size": 89052,
		"path": "../public/assets/styles-Dr1X2zRh.css"
	},
	"/assets/success-CrbOOVxF.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5ef-X2pEBImXQNV9J/Io2BkTo1aiPdU\"",
		"mtime": "2026-08-08T16:28:20.389Z",
		"size": 1519,
		"path": "../public/assets/success-CrbOOVxF.js"
	},
	"/assets/users-LkRsI-kR.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1fa-sltq5hHZTrCbLlHkvnK9Dri9600\"",
		"mtime": "2026-08-08T16:28:20.389Z",
		"size": 506,
		"path": "../public/assets/users-LkRsI-kR.js"
	},
	"/assets/volunteers-6TZUAAYw.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"527e-s3z/0Dgu1MMynaAdttcUd8F2yts\"",
		"mtime": "2026-08-08T16:28:20.389Z",
		"size": 21118,
		"path": "../public/assets/volunteers-6TZUAAYw.js"
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
