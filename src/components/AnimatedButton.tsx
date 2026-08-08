import * as React from "react";
import { gsap } from "gsap";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import "./AnimatedButton.css";

export interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  href?: string;
  target?: string;
  rel?: string;
}

export const AnimatedButton = React.forwardRef<
  HTMLElement,
  AnimatedButtonProps
>(({ asChild = false, className, children, ...props }, ref) => {
  const fillRef = React.useRef<HTMLSpanElement | null>(null);
  const reducedMotion = prefersReducedMotion();

  React.useEffect(() => {
    registerGsap();
  }, []);

  const animateFill = (visible: boolean) => {
    const fill = fillRef.current;
    if (!fill || reducedMotion) return;
    gsap.killTweensOf(fill);
    if (visible) {
      gsap.to(fill, {
        scaleX: 1,
        autoAlpha: 1,
        duration: 0.28,
        ease: "power3.out",
        transformOrigin: "left center",
      });
    } else {
      gsap.to(fill, {
        scaleX: 0,
        autoAlpha: 0,
        duration: 0.2,
        ease: "power3.out",
        transformOrigin: "right center",
      });
    }
  };

  const handleMouseEnter = () => animateFill(true);
  const handleMouseLeave = () => animateFill(false);

  if (asChild && React.isValidElement(children)) {
    const childProps = (
      children as React.ReactElement<{
        className?: string;
        onMouseEnter?: (e: React.MouseEvent<HTMLElement>) => void;
        onMouseLeave?: (e: React.MouseEvent<HTMLElement>) => void;
        children?: React.ReactNode;
      }>
    ).props;
    const childClassName = childProps["className"];
    const childOnMouseEnter = childProps["onMouseEnter"];
    const childOnMouseLeave = childProps["onMouseLeave"];
    const childChildren = childProps["children"];

    return React.cloneElement(
      children as React.ReactElement<React.HTMLAttributes<HTMLElement>>,
      {
        ref,
        className: cn("animated-button", className, childClassName),
        onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
          handleMouseEnter();
          childOnMouseEnter?.(event);
        },
        onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
          handleMouseLeave();
          childOnMouseLeave?.(event);
        },
        ...props,
        children: (
          <>
            <span
              ref={fillRef}
              className="animated-button-fill"
              aria-hidden="true"
            />
            <span className="animated-button-content">{childChildren}</span>
          </>
        ),
      } as React.HTMLAttributes<HTMLElement>,
    );
  }

  return (
    <button
      ref={ref as React.Ref<HTMLButtonElement>}
      className={cn("animated-button", className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <span ref={fillRef} className="animated-button-fill" aria-hidden="true" />
      <span className="animated-button-content">{children}</span>
    </button>
  );
});

AnimatedButton.displayName = "AnimatedButton";
