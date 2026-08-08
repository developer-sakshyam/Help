/**
 * Centralized GSAP setup.
 *
 * GSAP + ScrollTrigger touch the DOM, so every helper here must only ever run
 * inside `useLayoutEffect`/`useEffect` (client-side). Importing the module is
 * SSR-safe; calling `registerGsap()` is not.
 */
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let registered = false;

export function registerGsap() {
  if (registered || typeof window === "undefined") return;
  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({ ease: "power3.out", duration: 0.9 });
  registered = true;
}

export function prefersReducedMotion() {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export { gsap, ScrollTrigger };
