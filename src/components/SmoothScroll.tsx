import { useEffect, useRef, type ReactNode } from "react";
import { useLocation } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  const lenisRef = useRef<any | null>(null);
  const rafRef = useRef<number | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (typeof window === "undefined") return;

    let mounted = true;
    (async () => {
      const prefersReducedMotion = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      if (prefersReducedMotion) return;

      // dynamic import to avoid SSR issues
      const { default: Lenis } = await import("lenis");

      if (!mounted) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        // stronger smoothing for a more pronounced effect
        duration: 1.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smooth: true,
        smoothWheel: true,
        smoothTouch: true,
        wheelMultiplier: 2.0,
        direction: "vertical",
        gestureDirection: "vertical",
      });

      lenisRef.current = lenis;
      // expose for debugging so you can inspect in DevTools: `window.__lenis`
      try {
        (window as any).__lenis = lenis;
      } catch (e) {
        // noop
      }

      function raf(time: number) {
        lenis.raf(time);
        rafRef.current = requestAnimationFrame(raf);
      }

      rafRef.current = requestAnimationFrame(raf);

      lenis.on("scroll", () => {
        ScrollTrigger.update();
      });

      // scrollerProxy for window — Lenis keeps native layout, so fixed/sticky unaffected
      ScrollTrigger.scrollerProxy(window as any, {
        scrollTop(value: number) {
          if (arguments.length) {
            lenis.scrollTo(value);
            return;
          }
          return window.scrollY;
        },
        getBoundingClientRect() {
          return {
            top: 0,
            left: 0,
            width: window.innerWidth,
            height: window.innerHeight,
          };
        },
        pinType: document.documentElement.style.transform ? "transform" : "fixed",
      });

      ScrollTrigger.addEventListener("refresh", () => {
        // Some Lenis versions expose `update`, others do not — fall back to `raf`
        try {
          if (typeof (lenis as any).update === "function") {
            (lenis as any).update();
          } else if (typeof (lenis as any).raf === "function") {
            (lenis as any).raf(performance.now());
          }
        } catch (e) {
          // ignore any errors during refresh handling
        }
      });
      ScrollTrigger.refresh();
    })();

    return () => {
      mounted = false;
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (lenisRef.current) {
        try {
          lenisRef.current.destroy();
        } catch (e) {
          // ignore
        }
        try {
          delete (window as any).__lenis;
        } catch (e) {
          // noop
        }
        lenisRef.current = null;
      }
      try {
        if (typeof (ScrollTrigger as any).clearScrollContainers === "function") {
          (ScrollTrigger as any).clearScrollContainers();
        }
      } catch (e) {
        // ignore if not supported
      }
    };
  }, []);

  // on route change, scroll to top using lenis if present
  useEffect(() => {
    if (typeof window === "undefined") return;
    const s = lenisRef.current;
    try {
      if (s && typeof s.scrollTo === "function") {
        s.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    } catch (e) {
      window.scrollTo(0, 0);
    }
    ScrollTrigger.refresh();
  }, [location.pathname]);

  return <>{children}</>;
}
