import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as AuthLayout } from "./AuthLayout--AgapdQk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/get-started-DUMMBGoW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Page = () => {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const el = ref.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(el, {
				opacity: 0,
				y: 8
			}, {
				opacity: 1,
				y: 0,
				duration: .6
			});
			gsapWithCSS.fromTo(el.querySelectorAll("h1, p, a"), {
				opacity: 0,
				y: 10
			}, {
				opacity: 1,
				y: 0,
				stagger: .06,
				duration: .45
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "bg-surface p-8 rounded-lg shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold mb-2",
				children: "Make an impact that matters."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-6",
				children: "Join a community helping people, supporting organizations, donating resources, and making a difference."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					className: "inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand text-white",
					children: "Get Started"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/login",
					className: "inline-flex items-center justify-center px-6 py-3 rounded-md border",
					children: "I already have an account → Sign in"
				})]
			})
		]
	}) });
};
//#endregion
export { Page as component };
