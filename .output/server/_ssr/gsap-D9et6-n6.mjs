import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gsap-D9et6-n6.js
var registered = false;
function prefersReducedMotion() {
	try {
		if (typeof window === "undefined") return true;
		return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
	} catch {
		return true;
	}
}
function registerGsap() {
	if (registered || typeof window === "undefined") return;
	gsapWithCSS.registerPlugin(ScrollTrigger);
	gsapWithCSS.defaults({
		ease: "power3.out",
		duration: .9
	});
	registered = true;
}
//#endregion
export { registerGsap as n, prefersReducedMotion as t };
