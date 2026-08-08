import { useLayoutEffect, useRef } from "react";
import { gsap, prefersReducedMotion, registerGsap, ScrollTrigger } from "@/lib/gsap";

type RevealOptions = {
  /** CSS selector for the elements to stagger in. */
  selector?: string;
  y?: number;
  stagger?: number;
  start?: string;
};

/**
 * Scroll-triggered stagger reveal for a section.
 * Attach the returned ref to the section root and add `reveal-init`
 * to every child that should animate in.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>(options: RevealOptions = {}) {
  const { selector = ".reveal-init", y = 18, stagger = 0.08, start = "top 82%" } = options;
  const ref = useRef<T>(null);

  useLayoutEffect(() => {
    const root = ref.current;
    if (!root) return;
    registerGsap();

    const targets = root.querySelectorAll(selector);
    if (!targets.length) return;

    if (prefersReducedMotion()) {
      gsap.set(targets, { opacity: 1, y: 0 });
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        targets,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          stagger,
          ease: "power3.out",
          scrollTrigger: { trigger: root, start },
        },
      );
    }, root);

    return () => ctx.revert();
  }, [selector, y, stagger, start]);

  return ref;
}

/** Animates a number from 0 to `value` when scrolled into view. */
export function useCounter(value: number) {
  const ref = useRef<HTMLSpanElement>(null);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;
    registerGsap();

    if (prefersReducedMotion()) {
      el.textContent = value.toLocaleString();
      return;
    }

    const counter = { n: 0 };
    const ctx = gsap.context(() => {
      gsap.to(counter, {
        n: value,
        duration: 1.6,
        ease: "power2.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
        onUpdate: () => {
          el.textContent = Math.round(counter.n).toLocaleString();
        },
      });
    });

    return () => ctx.revert();
  }, [value]);

  return ref;
}
