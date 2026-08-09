import { useState, useRef, useEffect } from "react";
import { X, CheckCircle2, Heart, UserCheck, Package, ShieldCheck } from "lucide-react";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";
import { recordDonation, recordVolunteerApplication } from "@/lib/demoAuth";

interface DonateModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTitle?: string;
  initialOrg?: string;
  initialCategory?: string;
}

export function DonateModal({
  isOpen,
  onClose,
  initialTitle = "Emergency Community Support",
  initialOrg = "Help.com Relief Network",
  initialCategory = "FOOD",
}: DonateModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const checkRef = useRef<HTMLDivElement | null>(null);
  const [category, setCategory] = useState(initialCategory);
  const [details, setDetails] = useState("5 food packages");
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    registerGsap();
    if (!isOpen) {
      setIsSuccess(false);
      return;
    }
    if (prefersReducedMotion() || !modalRef.current) return;
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    recordDonation(category, initialOrg, details);
    setIsSuccess(true);

    if (!prefersReducedMotion() && checkRef.current) {
      gsap.fromTo(
        checkRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }

    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 1800);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div
        ref={modalRef}
        className="bg-card border border-border w-full max-w-md rounded-xl p-6 shadow-2xl relative space-y-5 text-foreground"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <X className="size-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div
              ref={checkRef}
              className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto"
            >
              <CheckCircle2 className="size-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-tight">
                Donation Recorded!
              </h3>
              <p className="text-xs font-mono text-muted-foreground max-w-xs mx-auto">
                Thank you. Your donation has been logged and your dashboard activity count & impact score have increased.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-1.5 border-b border-border/80 pb-3">
              <div className="flex items-center gap-2">
                <Heart className="size-4 text-rose-500" />
                <span className="text-[0.7rem] font-mono tracking-widest uppercase text-muted-foreground">
                  MAKE A DEMO DONATION
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                {initialTitle}
              </h3>
              <p className="text-xs font-mono text-muted-foreground">
                Beneficiary: {initialOrg}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="block text-xs font-mono text-muted-foreground uppercase">
                  Category
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-foreground"
                >
                  <option value="BLOOD">Blood</option>
                  <option value="FOOD">Food</option>
                  <option value="CLOTHING">Clothing</option>
                  <option value="MEDICAL">Medical Supplies</option>
                  <option value="BOOKS">Books</option>
                  <option value="FURNITURE">Furniture</option>
                  <option value="ELECTRONICS">Electronics</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="block text-xs font-mono text-muted-foreground uppercase">
                  Donation Quantity & Details
                </label>
                <input
                  type="text"
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="e.g. 5 food packages or 1 unit O+ blood"
                  className="w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-foreground"
                  required
                />
              </div>

              <div className="p-3 rounded-lg bg-muted/40 border border-border text-[0.75rem] font-mono text-muted-foreground">
                ✨ <strong className="text-foreground">Demo Action</strong>: No real money or credentials required. Clicking confirm immediately records the donation on your profile.
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-border rounded-lg text-xs font-mono text-muted-foreground hover:bg-accent transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-mono font-medium hover:opacity-90 transition-opacity"
                >
                  I Can Help →
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTitle?: string;
  initialOrg?: string;
  initialLocation?: string;
}

export function VolunteerModal({
  isOpen,
  onClose,
  initialTitle = "Community Relief Volunteer",
  initialOrg = "Help.com Volunteer Network",
  initialLocation = "Kathmandu, Nepal",
}: VolunteerModalProps) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const checkRef = useRef<HTMLDivElement | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    registerGsap();
    if (!isOpen) {
      setIsSuccess(false);
      return;
    }
    if (prefersReducedMotion() || !modalRef.current) return;
    gsap.fromTo(
      modalRef.current,
      { opacity: 0, scale: 0.95, y: 10 },
      { opacity: 1, scale: 1, y: 0, duration: 0.3, ease: "power2.out" }
    );
  }, [isOpen]);

  if (!isOpen) return null;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    recordVolunteerApplication(initialTitle, initialOrg);
    setIsSuccess(true);

    if (!prefersReducedMotion() && checkRef.current) {
      gsap.fromTo(
        checkRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.4, ease: "back.out(1.7)" }
      );
    }

    setTimeout(() => {
      onClose();
      setIsSuccess(false);
    }, 1800);
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs">
      <div
        ref={modalRef}
        className="bg-card border border-border w-full max-w-md rounded-xl p-6 shadow-2xl relative space-y-5 text-foreground"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
        >
          <X className="size-4" />
        </button>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div
              ref={checkRef}
              className="size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto"
            >
              <CheckCircle2 className="size-8" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-tight">
                Application Submitted!
              </h3>
              <p className="text-xs font-mono text-muted-foreground max-w-xs mx-auto">
                Your volunteer application has been sent. Your dashboard volunteer hours and impact score have updated.
              </p>
            </div>
          </div>
        ) : (
          <>
            <div className="space-y-1.5 border-b border-border/80 pb-3">
              <div className="flex items-center gap-2">
                <UserCheck className="size-4 text-emerald-500" />
                <span className="text-[0.7rem] font-mono tracking-widest uppercase text-muted-foreground">
                  APPLY AS VOLUNTEER
                </span>
              </div>
              <h3 className="text-lg font-bold text-foreground leading-snug">
                {initialTitle}
              </h3>
              <p className="text-xs font-mono text-muted-foreground">
                Organization: {initialOrg} · Location: {initialLocation}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-lg bg-muted/40 border border-border space-y-2 text-xs">
                <div className="font-mono font-semibold flex items-center gap-1.5 text-foreground">
                  <ShieldCheck className="size-3.5 text-emerald-500" /> Opportunity Overview
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  You are applying to join the local volunteer team for {initialTitle}. Your commitment will directly help on-ground distribution and coordination.
                </p>
              </div>

              <div className="pt-2 flex justify-end gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2 border border-border rounded-lg text-xs font-mono text-muted-foreground hover:bg-accent transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-mono font-medium hover:opacity-90 transition-opacity"
                >
                  Submit Application →
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
