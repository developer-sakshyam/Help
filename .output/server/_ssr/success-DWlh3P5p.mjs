import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as AuthLayout } from "./AuthLayout-Bw1mfYGc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/success-DWlh3P5p.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Page = () => {
	const navigate = useNavigate();
	const circleRef = (0, import_react.useRef)(null);
	const checkRef = (0, import_react.useRef)(null);
	const contentRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (!circleRef.current || !checkRef.current || !contentRef.current) return;
		if (prefersReducedMotion()) {
			circleRef.current.style.opacity = "1";
			contentRef.current.style.opacity = "1";
			return;
		}
		gsapWithCSS.timeline({ defaults: { duration: .45 } }).fromTo(circleRef.current, {
			scale: 0,
			opacity: 0
		}, {
			scale: 1,
			opacity: 1
		}).fromTo(checkRef.current, {
			scale: 0,
			opacity: 0
		}, {
			scale: 1,
			opacity: 1
		}, "-=0.15").fromTo(contentRef.current, {
			y: 10,
			opacity: 0
		}, {
			y: 0,
			opacity: 1
		});
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface p-8 rounded-lg shadow text-center",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex items-center justify-center mb-4",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				ref: circleRef,
				className: "w-28 h-28 rounded-full bg-brand text-white flex items-center justify-center mx-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
					ref: checkRef,
					width: "40",
					height: "40",
					viewBox: "0 0 24 24",
					fill: "none",
					stroke: "currentColor",
					strokeWidth: "2",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6L9 17l-5-5" })
				})
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: contentRef,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-2xl font-bold",
					children: "You're all set."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground mt-2",
					children: "Welcome to Help.com."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => navigate({ to: "/dashboard" }),
						className: "px-5 py-2 rounded bg-brand text-white",
						children: "Go to Dashboard"
					})
				})
			]
		})]
	}) });
};
//#endregion
export { Page as component };
