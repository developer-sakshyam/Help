import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/gsap";

interface AnimatedProgressBarProps {
  percentage: number;
  className?: string;
  barColorClass?: string;
}

export function AnimatedProgressBar({
  percentage,
  className = "",
  barColorClass = "bg-primary",
}: AnimatedProgressBarProps) {
  const barRef = useRef<HTMLDivElement | null>(null);
  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  useEffect(() => {
    const el = barRef.current;
    if (!el) return;

    if (prefersReducedMotion()) {
      gsap.set(el, { width: `${clampedPercentage}%` });
      return;
    }

    gsap.fromTo(
      el,
      { width: "0%" },
      {
        width: `${clampedPercentage}%`,
        duration: 1.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
        },
      },
    );
  }, [clampedPercentage]);

  return (
    <div
      className={`w-full bg-muted rounded-full overflow-hidden h-2.5 ${className}`}
    >
      <div
        ref={barRef}
        className={`h-full rounded-full transition-all ${barColorClass}`}
        style={{ width: "0%" }}
        aria-valuenow={clampedPercentage}
        aria-valuemin={0}
        aria-valuemax={100}
        role="progressbar"
      />
    </div>
  );
}
