import { useEffect, useState, useRef } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { saveUser, setSession } from "../../lib/demoAuth";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

type SignupReviewData = {
  fullName?: string;
  email?: string;
  role?: string;
  profileImage?: string | null;
  bio?: string;
  province?: string;
  district?: string;
  municipality?: string;
};

const Page = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SignupReviewData>({});
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
        el.querySelectorAll(".font-semibold, .font-medium, img"),
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.32 },
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const temp = JSON.parse(
      localStorage.getItem("help_demo_signup") || "{}",
    ) as SignupReviewData;
    if (!temp || !temp.email) navigate({ to: "/signup" });
    setData(temp);
  }, [navigate]);

  function handleCreate() {
    const user = saveUser(data);
    if (user && user.email) {
      setSession(true, user.email);
    }
    if (typeof window !== "undefined") {
      localStorage.removeItem("help_demo_signup");
    }
    if (!prefersReducedMotion() && ref.current) {
      gsap.to(ref.current, {
        scale: 1.02,
        duration: 0.12,
        yoyo: true,
        repeat: 1,
        onComplete: () => navigate({ to: "/signup/success" }),
      });
    } else {
      navigate({ to: "/signup/success" });
    }
  }

  return (
    <AuthLayout>
      <div ref={ref} className="bg-surface p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Review your information</h2>
        <p className="text-muted-foreground mb-4">
          Confirm the details below before creating your account.
        </p>

        <div className="grid gap-3">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full overflow-hidden bg-muted">
              {data.profileImage ? (
                <img
                  src={data.profileImage}
                  className="w-full h-full object-cover"
                  alt="Profile"
                />
              ) : (
                <div className="p-4">No image</div>
              )}
            </div>
            <div>
              <div className="font-semibold">{data.fullName}</div>
              <div className="text-sm text-muted-foreground">{data.email}</div>
            </div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">Role</div>
            <div className="font-medium">{data.role}</div>
          </div>

          <div>
            <div className="text-sm text-muted-foreground">Location</div>
            <div className="font-medium">
              {[data.province, data.district, data.municipality]
                .filter(Boolean)
                .join(" • ")}
            </div>
          </div>

          {data.bio && (
            <div>
              <div className="text-sm text-muted-foreground">About</div>
              <div className="font-medium">{data.bio}</div>
            </div>
          )}

          <div className="flex justify-between mt-4">
            <button
              type="button"
              onClick={() => navigate({ to: "/signup/profile" })}
              className="px-4 py-2 border rounded"
            >
              Edit Profile
            </button>
            <button
              type="button"
              onClick={handleCreate}
              className="px-5 py-2 rounded bg-brand text-white"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/signup/review")({
  component: Page,
});
