import React, { useState, useEffect, useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import {
  getStoredUser,
  ensureDefaultDemoUser,
  setSession,
} from "../lib/demoAuth";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

const Page = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 10 },
        { opacity: 1, x: 0, duration: 0.5 },
      );
      gsap.fromTo(
        el.querySelectorAll("input, button, a"),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.05, duration: 0.35 },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const stored = getStoredUser();
    if (!stored) ensureDefaultDemoUser();
    const user = getStoredUser();
    if (
      (user && user.email === email && user.password === password) ||
      (email === "admin@gmail.com" && password === "admin")
    ) {
      setSession(true, email);
      setError("");
      if (!prefersReducedMotion() && ref.current) {
        gsap.fromTo(
          ref.current,
          { scale: 1 },
          { scale: 1.02, duration: 0.12, yoyo: true, repeat: 1 },
        );
        if (submitRef.current)
          gsap.fromTo(
            submitRef.current,
            { scale: 1 },
            { scale: 0.96, duration: 0.08, yoyo: true, repeat: 1 },
          );
      }
      setTimeout(() => navigate({ to: "/explore" }), 420);
    } else {
      setError("Invalid email or password.");
      if (!prefersReducedMotion() && ref.current) {
        gsap.fromTo(
          ref.current,
          { x: -6 },
          { x: 6, duration: 0.06, yoyo: true, repeat: 5, ease: "power1.inOut" },
        );
      }
    }
  }

  return (
    <AuthLayout>
      <div ref={ref} className="bg-surface p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">Welcome back.</h1>
        <p className="text-muted-foreground mb-4">
          Sign in to continue helping your community.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
              onFocus={(ev) => {
                if (!prefersReducedMotion())
                  gsap.to(ev.currentTarget, { y: -3, duration: 0.12 });
              }}
              onBlur={(ev) => {
                if (!prefersReducedMotion())
                  gsap.to(ev.currentTarget, { y: 0, duration: 0.12 });
              }}
            />
          </div>
          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2"
              onFocus={(ev) => {
                if (!prefersReducedMotion())
                  gsap.to(ev.currentTarget, { y: -3, duration: 0.12 });
              }}
              onBlur={(ev) => {
                if (!prefersReducedMotion())
                  gsap.to(ev.currentTarget, { y: 0, duration: 0.12 });
              }}
            />
          </div>
          {error && <div className="text-destructive">{error}</div>}
          <div className="flex items-center justify-between">
            <button
              ref={submitRef}
              type="submit"
              className="px-5 py-2 rounded-md bg-brand text-white"
              onMouseDown={(ev) => {
                if (!prefersReducedMotion())
                  gsap.to(ev.currentTarget, { scale: 0.98, duration: 0.06 });
              }}
              onMouseUp={(ev) => {
                if (!prefersReducedMotion())
                  gsap.to(ev.currentTarget, { scale: 1, duration: 0.08 });
              }}
            >
              Sign in
            </button>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Password recovery is unavailable in the demo.");
              }}
              className="text-sm text-muted-foreground"
            >
              Forgot password?
            </a>
          </div>
        </form>

        <div className="mt-6 text-sm text-muted-foreground">
          Don't have an account?{" "}
          <a href="/signup" className="underline">
            Create one →
          </a>
        </div>
      </div>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/login")({
  component: Page,
});
