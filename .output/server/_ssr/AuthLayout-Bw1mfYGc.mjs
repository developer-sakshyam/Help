import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AuthLayout-Bw1mfYGc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AuthLayout({ image, title, children }) {
	const leftRef = (0, import_react.useRef)(null);
	const rightRef = (0, import_react.useRef)(null);
	const resolvedImage = image || "/assets/hero-nepal-8VAR8a3q.jpg";
	(0, import_react.useEffect)(() => {
		registerGsap();
		const imgEl = leftRef.current?.querySelector("img");
		const textWrap = leftRef.current?.querySelector(".text-white");
		if (prefersReducedMotion()) {
			if (leftRef.current) leftRef.current.style.opacity = "1";
			if (rightRef.current) rightRef.current.style.opacity = "1";
			return;
		}
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(leftRef.current, {
				x: -30,
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				duration: .7
			});
			gsapWithCSS.fromTo(rightRef.current, {
				x: 20,
				opacity: 0
			}, {
				x: 0,
				opacity: 1,
				duration: .6,
				delay: .08
			});
			if (imgEl) gsapWithCSS.fromTo(imgEl, { scale: 1.03 }, {
				scale: 1,
				duration: 1.2,
				ease: "power2.out"
			});
			if (textWrap) {
				const headings = textWrap.querySelectorAll("h2, p");
				gsapWithCSS.fromTo(headings, {
					y: 8,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					stagger: .08,
					duration: .45
				});
			}
		});
		const onMove = (ev) => {
			if (!imgEl) return;
			const rect = leftRef.current?.getBoundingClientRect();
			if (!rect) return;
			const dx = (ev.clientX - (rect.left + rect.width / 2)) / rect.width;
			const dy = (ev.clientY - (rect.top + rect.height / 2)) / rect.height;
			gsapWithCSS.to(imgEl, {
				x: dx * 8,
				y: dy * 6,
				duration: .6,
				ease: "power3.out"
			});
		};
		if (leftRef.current) leftRef.current.addEventListener("pointermove", onMove);
		return () => {
			ctx.revert();
			if (leftRef.current) leftRef.current.removeEventListener("pointermove", onMove);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			ref: leftRef,
			className: "hidden md:flex md:w-1/2 bg-cover bg-center auth-left relative",
			style: resolvedImage ? { backgroundImage: `url(${resolvedImage})` } : void 0,
			children: [resolvedImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
				src: resolvedImage,
				alt: "Help.com",
				className: "absolute inset-0 w-full h-full object-cover",
				style: {
					position: "absolute",
					left: 0,
					top: 0
				}
			}) : null, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full h-full bg-black/30 flex items-center justify-center p-8",
				style: {
					position: "relative",
					zIndex: 2
				},
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-white max-w-lg",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-3xl font-bold mb-2",
						children: "Small actions. Real impact."
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-lg opacity-90",
						children: "Help.com connects people who want to help with people who need it."
					})]
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			ref: rightRef,
			className: "flex-1 flex items-center justify-center p-6 auth-right",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-md",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-6 text-sm text-muted-foreground",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "underline",
						children: "← Back to home"
					})
				}), children]
			})
		})]
	});
}
//#endregion
export { AuthLayout as t };
