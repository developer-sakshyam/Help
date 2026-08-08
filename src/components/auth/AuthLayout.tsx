import React, { useLayoutEffect, useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";
import defaultHeroImage from "../../assets/hero-nepal.jpg";

interface AuthLayoutProps {
  image?: string;
  title?: string;
  children: React.ReactNode;
}

export default function AuthLayout({
  image,
  title,
  children,
}: AuthLayoutProps) {
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const resolvedImage = image || defaultHeroImage;

  useEffect(() => {
    registerGsap();
    const imgEl = leftRef.current?.querySelector(
      "img",
    ) as HTMLImageElement | null;
    const textWrap = leftRef.current?.querySelector(
      ".text-white",
    ) as HTMLElement | null;

    if (prefersReducedMotion()) {
      if (leftRef.current) leftRef.current.style.opacity = "1";
      if (rightRef.current) rightRef.current.style.opacity = "1";
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.7 },
      );
      gsap.fromTo(
        rightRef.current,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, delay: 0.08 },
      );

      if (imgEl)
        gsap.fromTo(
          imgEl,
          { scale: 1.03 },
          { scale: 1, duration: 1.2, ease: "power2.out" },
        );

      if (textWrap) {
        const headings = textWrap.querySelectorAll("h2, p");
        gsap.fromTo(
          headings,
          { y: 8, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.08, duration: 0.45 },
        );
      }
    });

    const onMove = (ev: PointerEvent) => {
      if (!imgEl) return;
      const rect = leftRef.current?.getBoundingClientRect();
      if (!rect) return;
      const dx = (ev.clientX - (rect.left + rect.width / 2)) / rect.width;
      const dy = (ev.clientY - (rect.top + rect.height / 2)) / rect.height;
      gsap.to(imgEl, {
        x: dx * 8,
        y: dy * 6,
        duration: 0.6,
        ease: "power3.out",
      });
    };

    if (leftRef.current)
      leftRef.current.addEventListener("pointermove", onMove);

    return () => {
      ctx.revert();
      if (leftRef.current)
        leftRef.current.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex">
      <aside
        ref={leftRef}
        className="hidden md:flex md:w-1/2 bg-cover bg-center auth-left relative"
        style={
          resolvedImage
            ? { backgroundImage: `url(${resolvedImage})` }
            : undefined
        }
      >
        {resolvedImage ? (
          <img
            src={resolvedImage}
            alt="Help.com"
            className="absolute inset-0 w-full h-full object-cover"
            style={{ position: "absolute", left: 0, top: 0 }}
          />
        ) : null}
        <div
          className="w-full h-full bg-black/30 flex items-center justify-center p-8"
          style={{ position: "relative", zIndex: 2 }}
        >
          <div className="text-white max-w-lg">
            <h2 className="text-3xl font-bold mb-2">
              Small actions. Real impact.
            </h2>
            <p className="text-lg opacity-90">
              Help.com connects people who want to help with people who need it.
            </p>
          </div>
        </div>
      </aside>

      <main
        ref={rightRef}
        className="flex-1 flex items-center justify-center p-6 auth-right"
      >
        <div className="w-full max-w-md">
          <div className="mb-6 text-sm text-muted-foreground">
            <Link to="/" className="underline">
              ← Back to home
            </Link>
          </div>
          {children}
        </div>
      </main>
    </div>
  );
}
