import React, { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/gsap";

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

export function DetailModal({
  isOpen,
  onClose,
  title,
  children,
}: DetailModalProps) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    // Body scroll lock
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // ESC key listener
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);

    // GSAP Open animation
    const overlay = overlayRef.current;
    const dialog = dialogRef.current;

    if (overlay && dialog) {
      if (prefersReducedMotion()) {
        gsap.set(overlay, { autoAlpha: 1 });
        gsap.set(dialog, { autoAlpha: 1, scale: 1, y: 0 });
      } else {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
        tl.fromTo(
          overlay,
          { autoAlpha: 0 },
          { autoAlpha: 1, duration: 0.25 },
        ).fromTo(
          dialog,
          { autoAlpha: 0, scale: 0.95, y: 12 },
          { autoAlpha: 1, scale: 1, y: 0, duration: 0.35 },
          "-=0.15",
        );
      }
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCloseAnimation = () => {
    const overlay = overlayRef.current;
    const dialog = dialogRef.current;

    if (!overlay || !dialog || prefersReducedMotion()) {
      onClose();
      return;
    }

    const tl = gsap.timeline({
      defaults: { ease: "power2.in" },
      onComplete: onClose,
    });

    tl.to(dialog, { autoAlpha: 0, scale: 0.96, y: 8, duration: 0.2 }).to(
      overlay,
      { autoAlpha: 0, duration: 0.15 },
      "-=0.1",
    );
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm opacity-0"
      onClick={handleCloseAnimation}
      aria-modal="true"
      role="dialog"
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card border rounded-2xl p-6 sm:p-8 shadow-2xl opacity-0"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b pb-4 mb-6">
          <h2 className="text-xl font-bold tracking-tight text-foreground">
            {title || "Details"}
          </h2>
          <button
            type="button"
            onClick={handleCloseAnimation}
            className="rounded-full p-2 text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
            aria-label="Close dialog"
          >
            <X className="size-5" />
          </button>
        </div>

        <div>{children}</div>
      </div>
    </div>
  );
}
