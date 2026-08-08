import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/apiClient-Du67RRAA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DetailModal({ isOpen, onClose, title, children }) {
	const overlayRef = (0, import_react.useRef)(null);
	const dialogRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (!isOpen) return;
		const originalOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		const handleKeyDown = (e) => {
			if (e.key === "Escape") onClose();
		};
		window.addEventListener("keydown", handleKeyDown);
		const overlay = overlayRef.current;
		const dialog = dialogRef.current;
		if (overlay && dialog) {
			if (prefersReducedMotion()) {
				gsapWithCSS.set(overlay, { autoAlpha: 1 });
				gsapWithCSS.set(dialog, {
					autoAlpha: 1,
					scale: 1,
					y: 0
				});
			} else gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).fromTo(overlay, { autoAlpha: 0 }, {
				autoAlpha: 1,
				duration: .25
			}).fromTo(dialog, {
				autoAlpha: 0,
				scale: .95,
				y: 12
			}, {
				autoAlpha: 1,
				scale: 1,
				y: 0,
				duration: .35
			}, "-=0.15");
		}
		return () => {
			document.body.style.overflow = originalOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);
	if (!isOpen) return null;
	const handleCloseAnimation = () => {
		const overlay = overlayRef.current;
		const dialog = dialogRef.current;
		if (!overlay || !dialog || prefersReducedMotion()) {
			onClose();
			return;
		}
		gsapWithCSS.timeline({
			defaults: { ease: "power2.in" },
			onComplete: onClose
		}).to(dialog, {
			autoAlpha: 0,
			scale: .96,
			y: 8,
			duration: .2
		}).to(overlay, {
			autoAlpha: 0,
			duration: .15
		}, "-=0.1");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: overlayRef,
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm opacity-0",
		onClick: handleCloseAnimation,
		"aria-modal": "true",
		role: "dialog",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: dialogRef,
			className: "relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border rounded-2xl p-6 sm:p-8 shadow-2xl opacity-0",
			onClick: (e) => e.stopPropagation(),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between border-b pb-4 mb-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-xl font-bold tracking-tight text-foreground",
					children: title || "Details"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleCloseAnimation,
					className: "rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
					"aria-label": "Close dialog",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children })]
		})
	});
}
/**
* API Client supporting VITE_API_URL environment configuration with graceful fallback handling.
*/
var BASE_URL = {
	"BASE_URL": "/",
	"DEV": false,
	"MODE": "production",
	"PROD": true,
	"SSR": true,
	"TSS_DEV_SERVER": "false",
	"TSS_DEV_SSR_STYLES_BASEPATH": "/",
	"TSS_DEV_SSR_STYLES_ENABLED": "true",
	"TSS_DISABLE_CSRF_MIDDLEWARE_WARNING": "false",
	"TSS_INLINE_CSS_ENABLED": "false",
	"TSS_ROUTER_BASEPATH": "",
	"TSS_SERVER_FN_BASE": "/_serverFn/"
}["VITE_API_URL"] || "";
async function fetchApi(endpoint, options) {
	if (!BASE_URL) return null;
	try {
		const url = `${BASE_URL.replace(/\/$/, "")}/${endpoint.replace(/^\//, "")}`;
		const res = await fetch(url, {
			headers: {
				"Content-Type": "application/json",
				...options?.headers
			},
			...options
		});
		if (!res.ok) {
			console.warn(`[API] Endpoint ${endpoint} returned status ${res.status}`);
			return null;
		}
		return await res.json();
	} catch (error) {
		console.warn(`[API] Network error fetching ${endpoint}:`, error);
		return null;
	}
}
//#endregion
export { fetchApi as n, DetailModal as t };
