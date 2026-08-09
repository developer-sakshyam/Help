import React, { useState, useEffect, useRef } from "react";
import AuthLayout from "../components/auth/AuthLayout";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

type SignupField = "fullName" | "email" | "password" | "confirm";
type SignupErrors = Partial<Record<SignupField, string>>;

type TempSignup = {
  fullName?: string;
  email?: string;
  password?: string;
};

function validateEmail(email: string) {
  return /\S+@\S+\.\S+/.test(email);
}

const Page = () => {
  const navigate = useNavigate();
  const ref = useRef<HTMLDivElement | null>(null);
  const submitRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const element = ref.current; 
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, x: 8 },
        { opacity: 1, x: 0, duration: 0.5 },
      );
      gsap.fromTo(
        element.querySelectorAll("input, button, a, label"),
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.35 },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [errors, setErrors] = useState<SignupErrors>({});

  useEffect(() => {
    if (typeof window === "undefined") return;
    const temp = localStorage.getItem("help_demo_signup");
    if (temp) {
      try {
        const obj = JSON.parse(temp) as TempSignup;
        setFullName(obj.fullName || "");
        setEmail(obj.email || "");
      } catch {
        // ignore invalid stored data
      }
    }
  }, []);

  function validateField(field: SignupField) {
    const next: SignupErrors = { ...errors };

    if (field === "fullName") {
      if (!fullName || fullName.length < 2)
        next.fullName = "Full name must be at least 2 characters";
      else delete next.fullName;
    }

    if (field === "email") {
      if (!email || !validateEmail(email)) next.email = "Enter a valid email";
      else delete next.email;
    }

    if (field === "password") {
      if (!password || password.length < 8)
        next.password = "Password must be at least 8 characters";
      else delete next.password;
    }

    if (field === "confirm") {
      if (confirm !== password) next.confirm = "Passwords do not match";
      else delete next.confirm;
    }

    setErrors(next);
  }

  function handleContinue(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    validateField("fullName");
    validateField("email");
    validateField("password");
    validateField("confirm");

    const hasErrors = Object.keys(errors).length > 0;
    if (
      !hasErrors &&
      fullName &&
      validateEmail(email) &&
      password.length >= 8 &&
      confirm === password
    ) {
      const temp = { fullName, email, password };
      localStorage.setItem("help_demo_signup", JSON.stringify(temp));
      if (!prefersReducedMotion() && ref.current) {
        gsap.to(ref.current, {
          opacity: 0,
          y: -8,
          duration: 0.28,
          onComplete: () => navigate({ to: "/signup/role" }),
        });
      } else {
        navigate({ to: "/signup/role" });
      }
    } else {
      const next: SignupErrors = {};
      if (!fullName || fullName.length < 2)
        next.fullName = "Full name must be at least 2 characters";
      if (!email || !validateEmail(email)) next.email = "Enter a valid email";
      if (!password || password.length < 8)
        next.password = "Password must be at least 8 characters";
      if (confirm !== password) next.confirm = "Passwords do not match";
      setErrors(next);
    }
  }

  return (
    <AuthLayout>
      <div ref={ref} className="bg-surface p-8 rounded-lg shadow">
        <h1 className="text-2xl font-bold mb-2">
          Create your Help.com account.
        </h1>
        <p className="text-muted-foreground mb-4">
          Start helping your community today.
        </p>

        <form onSubmit={handleContinue} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">Full Name</label>
            <input
              value={fullName}
              onBlur={() => validateField("fullName")}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.fullName && (
              <div className="text-destructive text-sm">{errors.fullName}</div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Email</label>
            <input
              value={email}
              onBlur={() => validateField("email")}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2"
            />
            {errors.email && (
              <div className="text-destructive text-sm">{errors.email}</div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              value={password}
              onBlur={() => validateField("password")}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full border rounded px-3 py-2"
            />
            {errors.password && (
              <div className="text-destructive text-sm">{errors.password}</div>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">Confirm Password</label>
            <input
              value={confirm}
              onBlur={() => validateField("confirm")}
              onChange={(e) => setConfirm(e.target.value)}
              type="password"
              className="w-full border rounded px-3 py-2"
            />
            {errors.confirm && (
              <div className="text-destructive text-sm">{errors.confirm}</div>
            )}
          </div>

          <div className="flex justify-between items-center">
            <button
              ref={submitRef}
              type="submit"
              className="px-5 py-2 rounded-md bg-brand text-white"
              onMouseDown={(e) => {
                if (!prefersReducedMotion())
                  gsap.to(e.currentTarget, { scale: 0.98, duration: 0.06 });
              }}
              onMouseUp={(e) => {
                if (!prefersReducedMotion())
                  gsap.to(e.currentTarget, { scale: 1, duration: 0.08 });
              }}
            >
              Continue
            </button>
            <a href="/login" className="text-sm text-muted-foreground">
              I already have an account
            </a>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/signup")({
  component: Page,
});
