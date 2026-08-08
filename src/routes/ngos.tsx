import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  CheckCircle2,
  Building2,
  Users,
  FolderKanban,
  Globe,
  Phone,
  Mail,
  Filter,
  ArrowRight,
  Heart,
  Calendar,
  Check,
} from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { DetailModal } from "@/components/common/DetailModal";
import { AnimatedButton } from "@/components/AnimatedButton";
import { getNGOs } from "@/api/ngos";
import type { NGO } from "@/data/ngos";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import heroImage from "@/assets/hero-nepal.jpg";

export const Route = createFileRoute("/ngos")({
  head: () => ({
    meta: [
      { title: "Help.com — Nonprofit Organizations (NGOs)" },
      {
        name: "description",
        content:
          "Discover organizations creating change across Nepal and support their causes.",
      },
    ],
  }),
  component: NGOsPage,
});

const CAUSE_OPTIONS = [
  "All Causes",
  "Education",
  "Healthcare",
  "Environment",
  "Food Security",
  "Disaster Relief",
  "Child Welfare",
  "Animal Welfare",
  "Community Development",
];

const PROVINCE_OPTIONS = [
  "All Provinces",
  "Bagmati",
  "Gandaki",
  "Koshi",
  "Karnali",
];

function NGOsPage() {
  const [ngos, setNgos] = useState<NGO[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCause, setSelectedCause] = useState("All Causes");
  const [selectedProvince, setSelectedProvince] = useState("All Provinces");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Active detail modal NGO
  const [selectedNGO, setSelectedNGO] = useState<NGO | null>(null);
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  // GSAP animation refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const cardsGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getNGOs({
        query: searchQuery,
        cause: selectedCause === "All Causes" ? undefined : selectedCause,
        province:
          selectedProvince === "All Provinces" ? undefined : selectedProvince,
        verifiedOnly,
      });
      setNgos(data);
      setLoading(false);
    }
    loadData();
  }, [searchQuery, selectedCause, selectedProvince, verifiedOnly]);

  // Page Entrance Animation
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".ngo-hero-media", { opacity: 0, scale: 1.03, duration: 0.8 })
        .from(".ngo-hero-text", { opacity: 0, y: 18, duration: 0.6 }, "-=0.5")
        .from(
          filterRef.current,
          { opacity: 0, x: -16, duration: 0.45 },
          "-=0.35",
        )
        .from(
          ".ngo-card",
          { opacity: 0, y: 16, stagger: 0.06, duration: 0.5 },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  // Filter change grid animation
  useEffect(() => {
    if (loading || prefersReducedMotion() || !cardsGridRef.current) return;
    const cards = cardsGridRef.current.querySelectorAll(".ngo-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" },
      );
    }
  }, [ngos, loading]);

  const handleAction = (msg: string) => {
    setActionFeedback(msg);
    setTimeout(() => {
      setActionFeedback(null);
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteNav />

      {/* Hero Section */}
      <section ref={heroRef} className="border-b bg-card/50 py-10 md:py-16">
        <div className="shell grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="ngo-hero-text space-y-4">
            <p className="eyebrow text-primary font-mono text-xs tracking-wider uppercase">
              NONPROFIT ORGANIZATIONS
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Organizations creating change.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Discover verified organizations working across Nepal and find the
              causes you care about. Connect, support, or volunteer with
              on-the-ground initiatives.
            </p>
          </div>

          <div className="ngo-hero-media relative rounded-2xl overflow-hidden shadow-lg border h-64 sm:h-80">
            <img
              src={heroImage}
              alt="Community NGO projects in Nepal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 border backdrop-blur-md flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium">Verified Partner NGOs</span>
              <span className="font-bold text-primary font-mono">
                180+ Organizations
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 shell py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Desktop Filter Sidebar */}
          <aside
            ref={filterRef}
            className="hidden md:block w-72 shrink-0 space-y-6"
          >
            <div className="sticky top-24 bg-card border rounded-xl p-5 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Filter className="size-4 text-primary" />
                  Filter Organizations
                </h3>
                {(searchQuery ||
                  selectedCause !== "All Causes" ||
                  selectedProvince !== "All Provinces" ||
                  verifiedOnly) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCause("All Causes");
                      setSelectedProvince("All Provinces");
                      setVerifiedOnly(false);
                    }}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    Reset
                  </button>
                )}
              </div>

              {/* Search */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Search Organization
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="e.g. Red Cross, Food Relief..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Cause Filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Primary Cause
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {CAUSE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Province Filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Province
                </label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {PROVINCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Verified Checkbox */}
              <div className="pt-2 border-t">
                <label className="flex items-center gap-2 cursor-pointer text-sm">
                  <input
                    type="checkbox"
                    checked={verifiedOnly}
                    onChange={(e) => setVerifiedOnly(e.target.checked)}
                    className="rounded border-gray-300 text-primary focus:ring-primary"
                  />
                  <span>Verified NGOs Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Control */}
          <div className="md:hidden flex items-center justify-between gap-3 bg-card p-4 border rounded-xl mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search NGOs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm"
              />
            </div>
            <button
              type="button"
              onClick={() => setMobileFilterOpen((prev) => !prev)}
              className="inline-flex items-center gap-1.5 px-3 py-2 border rounded-lg text-sm bg-background hover:bg-accent"
            >
              <Filter className="size-4" />
              Filters
            </button>
          </div>

          {/* Mobile Filter Sheet */}
          {mobileFilterOpen && (
            <div className="md:hidden bg-card border rounded-xl p-4 mb-6 space-y-4">
              <div>
                <label className="block text-xs font-medium mb-1">
                  Primary Cause
                </label>
                <select
                  value={selectedCause}
                  onChange={(e) => setSelectedCause(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg text-sm"
                >
                  {CAUSE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">
                  Province
                </label>
                <select
                  value={selectedProvince}
                  onChange={(e) => setSelectedProvince(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg text-sm"
                >
                  {PROVINCE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <label className="flex items-center gap-2 text-sm pt-1">
                <input
                  type="checkbox"
                  checked={verifiedOnly}
                  onChange={(e) => setVerifiedOnly(e.target.checked)}
                />
                Verified Only
              </label>
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground font-medium">
                Showing{" "}
                <span className="text-foreground font-bold">{ngos.length}</span>{" "}
                organizations
              </p>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[1, 2, 3, 4].map((n) => (
                  <div
                    key={n}
                    className="h-64 bg-muted/40 animate-pulse rounded-xl border"
                  />
                ))}
              </div>
            ) : ngos.length > 0 ? (
              <div
                ref={cardsGridRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {ngos.map((ngo) => (
                  <NGOCard
                    key={ngo.id}
                    ngo={ngo}
                    onView={() => setSelectedNGO(ngo)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl border p-8">
                <Building2 className="size-12 mx-auto text-muted-foreground/40 mb-3" />
                <h3 className="text-lg font-semibold mb-1">
                  No organizations match your criteria
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                  Try adjusting your cause, location, or search filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCause("All Causes");
                    setSelectedProvince("All Provinces");
                    setVerifiedOnly(false);
                  }}
                  className="px-4 py-2 text-sm font-medium rounded-lg border hover:bg-accent transition-colors"
                >
                  Clear All Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* NGO Detail Modal */}
      {selectedNGO && (
        <DetailModal
          isOpen={Boolean(selectedNGO)}
          onClose={() => setSelectedNGO(null)}
          title="Organization Identity"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl shrink-0 border">
                <Building2 className="size-8" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold">{selectedNGO.name}</h3>
                  {selectedNGO.verified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="size-3.5" />
                      Verified NGO
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="size-3.5" />
                  {selectedNGO.location}, {selectedNGO.province} Province
                </p>
              </div>
            </div>

            {/* NGO Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 bg-muted/40 rounded-xl border text-center">
              <div>
                <div className="text-xs text-muted-foreground font-medium">
                  Founded
                </div>
                <div className="text-base font-bold text-foreground flex items-center justify-center gap-1 mt-0.5">
                  <Calendar className="size-3.5 text-primary" />
                  {selectedNGO.founded}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">
                  Active Projects
                </div>
                <div className="text-base font-bold text-primary flex items-center justify-center gap-1 mt-0.5">
                  <FolderKanban className="size-3.5" />
                  {selectedNGO.projectsCount}
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">
                  Volunteers
                </div>
                <div className="text-base font-bold text-emerald-600 flex items-center justify-center gap-1 mt-0.5">
                  <Users className="size-3.5" />
                  {selectedNGO.volunteersCount}+
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold mb-1">Mission & Purpose</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedNGO.description}
              </p>
            </div>

            {/* Causes */}
            <div>
              <h4 className="text-sm font-semibold mb-2">Focus Causes</h4>
              <div className="flex flex-wrap gap-2">
                {selectedNGO.causes.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            {/* Active Initiatives */}
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                <FolderKanban className="size-4 text-primary" />
                Active Projects & Campaigns
              </h4>
              <ul className="space-y-1.5 text-sm text-muted-foreground">
                {selectedNGO.activeProjects.map((p) => (
                  <li key={p} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Details */}
            <div className="p-4 bg-card rounded-xl border space-y-2 text-xs sm:text-sm">
              <div className="font-semibold text-foreground mb-1">
                Official Contact Information
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="size-3.5 text-primary shrink-0" />
                <span>{selectedNGO.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="size-3.5 text-primary shrink-0" />
                <span>{selectedNGO.contact.email}</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Globe className="size-3.5 text-primary shrink-0" />
                <a
                  href={selectedNGO.website}
                  target="_blank"
                  rel="noreferrer"
                  className="underline hover:text-primary"
                >
                  {selectedNGO.website}
                </a>
              </div>
            </div>

            {/* Action Feedback Toast */}
            {actionFeedback && (
              <div className="p-3 bg-emerald-600 text-white rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2 animate-fadeIn">
                <Check className="size-4" />
                {actionFeedback}
              </div>
            )}

            {/* CTAs */}
            <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedNGO(null)}
                className="px-4 py-2 border rounded-lg text-sm hover:bg-accent"
              >
                Close
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <AnimatedButton
                  onClick={() =>
                    handleAction(
                      `Support request logged for ${selectedNGO.name}`,
                    )
                  }
                  className="px-4 py-2 bg-secondary border text-secondary-foreground rounded-lg text-sm"
                >
                  <Heart className="size-3.5 mr-1 text-rose-500 fill-rose-500 inline" />
                  Support
                </AnimatedButton>
                <AnimatedButton
                  onClick={() =>
                    handleAction(
                      `Volunteer request submitted to ${selectedNGO.name}`,
                    )
                  }
                  className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm"
                >
                  Volunteer with NGO
                </AnimatedButton>
              </div>
            </div>
          </div>
        </DetailModal>
      )}

      <SiteFooter />
    </div>
  );
}

// NGO Card Subcomponent
function NGOCard({ ngo, onView }: { ngo: NGO; onView: () => void }) {
  const cardRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (prefersReducedMotion() || !cardRef.current) return;
    gsap.to(cardRef.current, { y: -4, duration: 0.2, ease: "power2.out" });
    const arrow = cardRef.current.querySelector(".card-arrow");
    if (arrow) gsap.to(arrow, { x: 4, duration: 0.2 });
  };

  const handleMouseLeave = () => {
    if (prefersReducedMotion() || !cardRef.current) return;
    gsap.to(cardRef.current, { y: 0, duration: 0.2, ease: "power2.out" });
    const arrow = cardRef.current.querySelector(".card-arrow");
    if (arrow) gsap.to(arrow, { x: 0, duration: 0.2 });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="ngo-card bg-card border rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center border shrink-0">
              <Building2 className="size-6" />
            </div>
            <div>
              <h3 className="font-semibold text-base flex items-center gap-1.5">
                {ngo.name}
                {ngo.verified && (
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                )}
              </h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <MapPin className="size-3" />
                {ngo.district}, {ngo.province}
              </p>
            </div>
          </div>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {ngo.description}
        </p>

        {/* Causes Badges */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {ngo.causes.slice(0, 3).map((c) => (
            <span
              key={c}
              className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border"
            >
              {c}
            </span>
          ))}
          {ngo.causes.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground">
              +{ngo.causes.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="pt-3 border-t flex items-center justify-between">
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <FolderKanban className="size-3.5 text-primary" />
            {ngo.projectsCount} Projects
          </span>
          <span className="flex items-center gap-1">
            <Users className="size-3.5 text-emerald-600" />
            {ngo.volunteersCount} Helpers
          </span>
        </div>

        <button
          type="button"
          onClick={onView}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline shrink-0"
        >
          View NGO
          <ArrowRight className="size-3.5 card-arrow" />
        </button>
      </div>
    </div>
  );
}
