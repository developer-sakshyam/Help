import * as React from "react";
import { gsap } from "gsap";
import { registerGsap, prefersReducedMotion } from "@/lib/gsap";
import { cn } from "@/lib/utils";
import "./AnimatedButton.css";

export interface AnimatedButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    React.AnchorHTMLAttributes<HTMLAnchorElement> {
  asChild?: boolean;
}

export const AnimatedButton = React.forwardRef<HTMLElement, AnimatedButtonProps>(
  ({ asChild = false, className, children, ...props }, ref) => {
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
      return React.cloneElement(children, {
        ref,
        className: cn("animated-button", className, children.props.className),
        onMouseEnter: (event: React.MouseEvent<HTMLElement>) => {
          handleMouseEnter();
          children.props.onMouseEnter?.(event);
        },
        onMouseLeave: (event: React.MouseEvent<HTMLElement>) => {
          handleMouseLeave();
          children.props.onMouseLeave?.(event);
        },
        ...props,
        children: (
          <>
            <span ref={fillRef} className="animated-button-fill" aria-hidden="true" />
            <span className="animated-button-content">{children.props.children}</span>
          </>
        ),
      });
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
  },
);

AnimatedButton.displayName = "AnimatedButton";
