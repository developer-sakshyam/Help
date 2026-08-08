import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/AnimatedButton-CgPYdl8Y.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var AnimatedButton = import_react.forwardRef(({ asChild = false, className, children, ...props }, ref) => {
	const fillRef = import_react.useRef(null);
	const reducedMotion = prefersReducedMotion();
	import_react.useEffect(() => {
		registerGsap();
	}, []);
	const animateFill = (visible) => {
		const fill = fillRef.current;
		if (!fill || reducedMotion) return;
		gsapWithCSS.killTweensOf(fill);
		if (visible) gsapWithCSS.to(fill, {
			scaleX: 1,
			autoAlpha: 1,
			duration: .28,
			ease: "power3.out",
			transformOrigin: "left center"
		});
		else gsapWithCSS.to(fill, {
			scaleX: 0,
			autoAlpha: 0,
			duration: .2,
			ease: "power3.out",
			transformOrigin: "right center"
		});
	};
	const handleMouseEnter = () => animateFill(true);
	const handleMouseLeave = () => animateFill(false);
	if (asChild && import_react.isValidElement(children)) {
		const childProps = children.props;
		const childClassName = childProps["className"];
		const childOnMouseEnter = childProps["onMouseEnter"];
		const childOnMouseLeave = childProps["onMouseLeave"];
		const childChildren = childProps["children"];
		return import_react.cloneElement(children, {
			ref,
			className: cn("animated-button", className, childClassName),
			onMouseEnter: (event) => {
				handleMouseEnter();
				childOnMouseEnter?.(event);
			},
			onMouseLeave: (event) => {
				handleMouseLeave();
				childOnMouseLeave?.(event);
			},
			...props,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				ref: fillRef,
				className: "animated-button-fill",
				"aria-hidden": "true"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "animated-button-content",
				children: childChildren
			})] })
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		ref,
		className: cn("animated-button", className),
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			ref: fillRef,
			className: "animated-button-fill",
			"aria-hidden": "true"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "animated-button-content",
			children
		})]
	});
});
AnimatedButton.displayName = "AnimatedButton";
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/hero-nepal-CQ_saR7n.js
var hero_nepal_default = "/assets/hero-nepal-8VAR8a3q.jpg";
//#endregion
export { AnimatedButton as n, cn as r, hero_nepal_default as t };
