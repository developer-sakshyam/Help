import { useEffect, useState, useRef } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

const ROLES = [
  { id: "donor", label: "Donor", desc: "Donate resources and support." },
  {
    id: "volunteer",
    label: "Volunteer",
    desc: "Help through time and skills.",
  },
  {
    id: "donor_receiver",
    label: "Donor + Receiver",
    desc: "Both give and ask for help.",
  },
  { id: "receiver", label: "Receiver", desc: "Request assistance." },
  { id: "ngo", label: "NGO", desc: "Distribute resources and run projects." },
  {
    id: "organization",
    label: "Organization",
    desc: "Create campaigns and recruit volunteers.",
  },
];

const Page = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const el = ref.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, x: 8 },
        { opacity: 1, x: 0, duration: 0.45 },
      );
      gsap.fromTo(
        el.querySelectorAll("button"),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.32 },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const temp = JSON.parse(localStorage.getItem("help_demo_signup") || "{}");
    if (!temp || !temp.email) navigate({ to: "/signup" });
    if (temp.role) setSelected(temp.role);
  }, [navigate]);

  function handleContinue() {
    if (!selected) return;
    if (typeof window !== "undefined") {
      const temp = JSON.parse(localStorage.getItem("help_demo_signup") || "{}");
      temp.role = selected;
      localStorage.setItem("help_demo_signup", JSON.stringify(temp));
    }
    if (!prefersReducedMotion() && ref.current) {
      gsap.to(ref.current, {
        opacity: 0,
        y: -8,
        duration: 0.28,
        onComplete: () => navigate({ to: "/signup/profile" }),
      });
    } else {
      navigate({ to: "/signup/profile" });
    }
  }

  return (
    <AuthLayout>
      <div ref={ref} className="bg-surface p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">
          How do you want to contribute?
        </h2>
        <p className="text-muted-foreground mb-4">
          Select one primary role that best describes how you'll help.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {ROLES.map((r) => (
            <button
              type="button"
              key={r.id}
              onClick={() => setSelected(r.id)}
              className={`p-4 border rounded text-left ${selected === r.id ? "border-brand scale-102 bg-brand-soft" : ""}`}
            >
              <div className="font-semibold">{r.label}</div>
              <div className="text-sm text-muted-foreground">{r.desc}</div>
            </button>
          ))}
        </div>

        <div className="mt-4 flex justify-between">
          <button
            type="button"
            onClick={() => navigate({ to: "/signup" })}
            className="px-4 py-2 border rounded"
          >
            Back
          </button>
          <button
            type="button"
            onClick={handleContinue}
            disabled={!selected}
            className="px-5 py-2 rounded bg-brand text-white disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/signup/role")({
  component: Page,
});
