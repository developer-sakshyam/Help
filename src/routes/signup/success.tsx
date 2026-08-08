import { useEffect, useRef } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

const Page = () => {
  const navigate = useNavigate();
  const circleRef = useRef<HTMLDivElement | null>(null);
  const checkRef = useRef<SVGSVGElement | null>(null);
  const contentRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (!circleRef.current || !checkRef.current || !contentRef.current) return;
    if (prefersReducedMotion()) {
      circleRef.current.style.opacity = "1";
      contentRef.current.style.opacity = "1";
      return;
    }
    const tl = gsap.timeline({ defaults: { duration: 0.45 } });
    tl.fromTo(
      circleRef.current,
      { scale: 0, opacity: 0 },
      { scale: 1, opacity: 1 },
    )
      .fromTo(
        checkRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1 },
        "-=0.15",
      )
      .fromTo(contentRef.current, { y: 10, opacity: 0 }, { y: 0, opacity: 1 });
  }, []);

  return (
    <AuthLayout>
      <div className="bg-surface p-8 rounded-lg shadow text-center">
        <div className="flex items-center justify-center mb-4">
          <div
            ref={circleRef}
            className="w-28 h-28 rounded-full bg-brand text-white flex items-center justify-center mx-auto"
          >
            <svg
              ref={checkRef}
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
        </div>
        <div ref={contentRef}>
          <h2 className="text-2xl font-bold">You're all set.</h2>
          <p className="text-muted-foreground mt-2">Welcome to Help.com.</p>
          <div className="mt-4">
            <button
              type="button"
              onClick={() => navigate({ to: "/explore" })}
              className="px-5 py-2 rounded bg-brand text-white"
            >
              Explore Help.com
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/signup/success")({
  component: Page,
});
