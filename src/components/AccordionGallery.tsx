import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { registerGsap, prefersReducedMotion as preferReduce } from "@/lib/gsap";
import "./AccordionGallery.css";

export type AccordionItem = {
  title: string;
  indexLabel?: string;
  description?: string;
  src: string;
  alt?: string;
};

export type AccordionGalleryProps = {
  items: AccordionItem[];
  trigger?: "hover" | "click";
  orientation?: "horizontal" | "vertical";
  defaultIndex?: number;
  showLabels?: boolean;
  grayscale?: boolean;
  parallax?: number;
  tilt?: number;
  duration?: number;
  ease?: string;
};

export default function AccordionGallery({
  items,
  trigger = "hover",
  orientation = "horizontal",
  defaultIndex = 0,
  showLabels = true,
  grayscale = true,
  parallax = 0.35,
  tilt = 4,
  duration = 0.65,
  ease = "power3.out",
}: AccordionGalleryProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);
  const [active, setActive] = useState<number>(defaultIndex ?? 0);
  const prefersReducedMotion = typeof window !== "undefined" && preferReduce();

  useEffect(() => {
    if (typeof window === "undefined") return;
    registerGsap();
    gsap.registerPlugin(ScrollTrigger);
  }, []);

  useEffect(() => {
    const panels = panelsRef.current;
    if (!panels || panels.length === 0) return;

    const ctx = gsap.context(
      () => {
        panels.forEach((p, i) => {
          if (!p) return;
          gsap.set(p, { flex: i === active ? 4 : 1, clearProps: "all" });
        });
      },
      containerRef.current as Element | undefined,
    );

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) return;
    const panels = panelsRef.current;
    if (!panels || panels.length === 0) return;

    const tl = gsap.timeline({ defaults: { duration, ease } });
    panels.forEach((p, i) => {
      if (!p) return;
      const isActive = i === active;
      tl.to(
        p,
        {
          flex: isActive ? 4 : 1,
          filter: grayscale
            ? isActive
              ? "none"
              : "grayscale(1) brightness(0.85)"
            : "none",
        },
        0,
      );
      const img = p.querySelector<HTMLImageElement>(".ag-img");
      if (img) {
        tl.to(img, { scale: isActive ? 1.02 : 1, x: 0, y: 0 }, 0);
      }
    });

    return () => {
      tl.kill();
    };
  }, [active, duration, ease, grayscale, prefersReducedMotion]);

  function handlePointerMove(e: React.PointerEvent, i: number) {
    const p = panelsRef.current[i];
    if (!p || prefersReducedMotion) return;
    const rect = p.getBoundingClientRect();
    const rx = (e.clientX - rect.left) / rect.width;
    const ry = (e.clientY - rect.top) / rect.height;
    const px = (rx - 0.5) * parallax * 40;
    const py = (ry - 0.5) * parallax * 40;
    const rotY = (rx - 0.5) * tilt;
    const rotX = -(ry - 0.5) * tilt;
    const inner = p.querySelector<HTMLElement>(".ag-inner");
    if (!inner) return;
    gsap.to(inner, {
      x: px,
      y: py,
      rotateX: rotX,
      rotateY: rotY,
      duration: 0.4,
      ease: "power3.out",
    });
  }

  function handlePointerLeave(i: number) {
    const p = panelsRef.current[i];
    if (!p || prefersReducedMotion) return;
    const inner = p.querySelector<HTMLElement>(".ag-inner");
    if (!inner) return;
    gsap.to(inner, {
      x: 0,
      y: 0,
      rotateX: 0,
      rotateY: 0,
      duration: 0.6,
      ease: "power3.out",
    });
  }

  return (
    <div
      ref={containerRef}
      className={`ag-container ag-${orientation}`}
      role="list"
    >
      {items.map((it, i) => (
        <div
          key={i}
          role="listitem"
          ref={(el) => {
            panelsRef.current[i] = el;
          }}
          className={`ag-panel ${i === active ? "ag-active" : ""}`}
          onMouseEnter={() => trigger === "hover" && setActive(i)}
          onClick={() => setActive(i)}
          onKeyDown={(e) => {
            const ev = e as React.KeyboardEvent;
            if (ev.key === "Enter" || ev.key === " ") setActive(i);
            if (ev.key === "ArrowRight")
              setActive((s) => Math.min(items.length - 1, s + 1));
            if (ev.key === "ArrowLeft") setActive((s) => Math.max(0, s - 1));
          }}
          tabIndex={0}
          onPointerMove={(e) => handlePointerMove(e, i)}
          onPointerLeave={() => handlePointerLeave(i)}
          aria-selected={i === active}
        >
          <div className="ag-inner">
            <div className="ag-image-wrap">
              <img alt={it.alt ?? ""} src={it.src} className="ag-img" />
            </div>
            {showLabels && (
              <div className="ag-label">
                <div className="ag-pill">{it.indexLabel}</div>
                <div className="ag-title">{it.title}</div>
                {it.description && (
                  <div className="ag-desc">{it.description}</div>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
