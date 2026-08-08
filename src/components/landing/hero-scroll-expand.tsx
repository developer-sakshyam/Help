import { useLayoutEffect, useRef } from "react";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-nepal.jpg";
import { AnimatedButton } from "@/components/AnimatedButton";
import { PillNav } from "@/components/PillNav";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";

/**
 * Cinematic scroll-expand opening.
 *
 * First paint shows only the motto over a heavily dimmed frame. A pinned
 * ScrollTrigger timeline then expands the frame to full-bleed, lifts the
 * scrim, and progressively reveals the navigation, subtitle and CTAs.
 */
export function HeroScrollExpand() {
  const rootRef = useRef<HTMLElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const scrimRef = useRef<HTMLDivElement>(null);
  const mottoRef = useRef<HTMLHeadingElement>(null);
  const navRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const cueRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    registerGsap();
    const root = rootRef.current;
    if (!root) return;

    const finalState = () => {
      gsap.set(frameRef.current, { width: "100vw", height: "100vh", borderRadius: 0 });
      gsap.set(scrimRef.current, { opacity: 0.55 });
      gsap.set([navRef.current, detailsRef.current], { opacity: 1, y: 0 });
      gsap.set(cueRef.current, { opacity: 0 });
    };

    if (prefersReducedMotion()) {
      finalState();
      return;
    }

    const ctx = gsap.context(() => {
      const words = mottoRef.current?.querySelectorAll("span[data-word]") ?? [];

      gsap.set(frameRef.current, { width: "38vw", height: "58vh", borderRadius: 10 });
      gsap.set(scrimRef.current, { opacity: 0.94 });
      gsap.set(navRef.current, { opacity: 0, y: -24 });
      gsap.set(detailsRef.current, { opacity: 0, y: 24 });

      // Entrance: motto words rise in, nothing else exists yet.
      gsap.from(words, { yPercent: 110, opacity: 0, duration: 1.2, stagger: 0.09, delay: 0.15 });
      gsap.from(cueRef.current, { opacity: 0, duration: 1, delay: 1.3 });

      const tl = gsap.timeline({
        defaults: { ease: "none" },
        scrollTrigger: {
          trigger: root,
          start: "top top",
          end: "bottom bottom",
          scrub: 0.8,
          pin: ".hero-stage",
          pinSpacing: false,
          anticipatePin: 1,
        },
      });

      tl.to(cueRef.current, { opacity: 0, duration: 0.06 }, 0)
        .to(
          frameRef.current,
          { width: "100vw", height: "100vh", borderRadius: 0, duration: 0.5, ease: "power2.inOut" },
          0,
        )
        .to(scrimRef.current, { opacity: 0.55, duration: 0.5 }, 0)
        .to(mottoRef.current, { scale: 0.86, y: "-6vh", duration: 0.5, ease: "power2.inOut" }, 0)
        .to(navRef.current, { opacity: 1, y: 0, duration: 0.16, ease: "power2.out" }, 0.42)
        .to(detailsRef.current, { opacity: 1, y: 0, duration: 0.2, ease: "power2.out" }, 0.5);
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="relative h-[260vh]">
      <div ref={navRef} className="fixed inset-x-0 top-0 z-50 opacity-0">
        <PillNav />
      </div>

      <div className="hero-stage relative flex h-screen w-full items-center justify-center overflow-hidden bg-ink">
        <div
          ref={frameRef}
          className="absolute overflow-hidden"
          style={{ width: "38vw", height: "58vh", borderRadius: 10 }}
        >
          <img
            src={heroImage}
            alt="Volunteers distributing winter supplies in a Himalayan village at dusk"
            width={1920}
            height={1280}
            className="size-full object-cover"
          />
          <div ref={scrimRef} className="absolute inset-0 bg-ink" style={{ opacity: 0.94 }} />
        </div>

        <div className="relative z-10 flex flex-col items-center px-6 text-center">
          <h1
            ref={mottoRef}
            className="display max-w-[16ch] text-[clamp(2.75rem,8vw,7rem)] text-ink-foreground"
          >
            {["Helping", "Should", "Be", "Simple."].map((word) => (
              <span key={word} className="inline-block overflow-hidden align-bottom">
                <span data-word className="inline-block pr-[0.22em]">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <div ref={detailsRef} className="mt-8 flex flex-col items-center opacity-0">
            <p className="max-w-[52ch] text-balance text-sm leading-relaxed text-ink-foreground/75 sm:text-base">
              One platform connecting donors, volunteers, NGOs, organizations, hospitals, and
              communities across Nepal.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
                <AnimatedButton asChild>
                <a href="/signup" className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-brand-foreground">
                  Get Started
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </a>
              </AnimatedButton>
              <AnimatedButton asChild>
                <a href="/explore" className="inline-flex rounded-md border border-ink-foreground/25 text-sm font-medium text-ink-foreground transition-colors hover:border-ink-foreground/60">
                  Explore Opportunities
                </a>
              </AnimatedButton>
            </div>
          </div>
        </div>

        <div
          ref={cueRef}
          className="absolute bottom-10 z-10 flex flex-col items-center gap-3 text-ink-foreground/50"
        >
          <span className="eyebrow text-ink-foreground/50">Scroll</span>
          <span className="block h-10 w-px bg-current" />
        </div>
      </div>
    </section>
  );
}
