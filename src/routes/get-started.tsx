import { useEffect, useRef } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import AuthLayout from "../components/auth/AuthLayout";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

const Page = () => {
  const ref = useRef<HTMLElement | null>(null);
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.6 },
      );
      gsap.fromTo(
        el.querySelectorAll("h1, p, a"),
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, stagger: 0.06, duration: 0.45 },
      );
    }, ref);
    return () => ctx.revert();
  }, []);
  return (
    <AuthLayout>
      <section ref={ref} className="bg-surface p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">
          Make an impact that matters.
        </h1>
        <p className="text-muted-foreground mb-6">
          Join a community helping people, supporting organizations, donating
          resources, and making a difference.
        </p>

        <div className="flex flex-col gap-3">
          <Link
            to="/signup"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-brand text-white"
          >
            Get Started
          </Link>
          <Link
            to="/login"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border"
          >
            I already have an account → Sign in
          </Link>
        </div>
      </section>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/get-started")({
  component: Page,
});
