import React, { useEffect, useState, useRef } from "react";
import AuthLayout from "../../components/auth/AuthLayout";
import { useNavigate, createFileRoute } from "@tanstack/react-router";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

type SignupProfileData = {
  fullName?: string;
  role?: string;
  profileImage?: string | null;
  bio?: string;
  phone?: string;
  province?: string;
  district?: string;
  municipality?: string;
};

const Page = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<SignupProfileData>({});
  const [preview, setPreview] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    const temp = JSON.parse(
      localStorage.getItem("help_demo_signup") ?? "{}",
    ) as SignupProfileData;
    if (!temp || !temp.role) {
      navigate({ to: "/signup" });
      return;
    }
    setData(temp);
    setPreview(temp.profileImage ?? null);
  }, [navigate]);

  function onFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result !== "string") return;

      setPreview(reader.result);
      const next = { ...data, profileImage: reader.result };
      setData(next);
      localStorage.setItem("help_demo_signup", JSON.stringify(next));
      if (!prefersReducedMotion())
        gsap.fromTo(
          ".profile-preview",
          { scale: 0.92, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.35 },
        );
    };

    reader.readAsDataURL(file);
  }

  function removeImage() {
    setPreview(null);
    const next = { ...data, profileImage: null };
    setData(next);
    localStorage.setItem("help_demo_signup", JSON.stringify(next));
    if (fileRef.current) fileRef.current.value = "";
  }

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    const next = { ...data, [name]: value };
    setData(next);
    localStorage.setItem("help_demo_signup", JSON.stringify(next));
  }

  function handleContinue() {
    navigate({ to: "/signup/review" });
  }

  return (
    <AuthLayout>
      <div className="bg-surface p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-2">Complete your profile</h2>
        <p className="text-muted-foreground mb-4">
          A complete profile helps people know who they're helping.
        </p>

        <div className="grid gap-3">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden profile-preview">
              {preview ? (
                <img
                  src={preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="text-sm">No image</div>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <input
                ref={fileRef}
                type="file"
                accept="image/*"
                onChange={onFile}
              />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="px-3 py-1 border rounded"
                >
                  Upload
                </button>
                <button
                  type="button"
                  onClick={removeImage}
                  className="px-3 py-1 border rounded"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm mb-1">Full name</label>
            <input
              name="fullName"
              value={data.fullName || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Bio</label>
            <textarea
              name="bio"
              value={data.bio || ""}
              onChange={handleChange}
              className="w-full border rounded px-3 py-2"
              rows={3}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm mb-1">Phone</label>
              <input
                name="phone"
                value={data.phone || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Province</label>
              <input
                name="province"
                value={data.province || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <div>
              <label className="block text-sm mb-1">District</label>
              <input
                name="district"
                value={data.district || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
            <div>
              <label className="block text-sm mb-1">Municipality</label>
              <input
                name="municipality"
                value={data.municipality || ""}
                onChange={handleChange}
                className="w-full border rounded px-3 py-2"
              />
            </div>
          </div>

          <div className="flex justify-between mt-2">
            <button
              type="button"
              onClick={() => navigate({ to: "/signup/role" })}
              className="px-4 py-2 border rounded"
            >
              Back
            </button>
            <button
              type="button"
              onClick={handleContinue}
              className="px-5 py-2 rounded bg-brand text-white"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export const Route = createFileRoute("/signup/profile")({
  component: Page,
});
