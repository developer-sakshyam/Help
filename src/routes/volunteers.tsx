import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  CheckCircle2,
  Star,
  Clock,
  Briefcase,
  Award,
  Filter,
  ArrowRight,
  UserCheck,
  Check,
} from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { DetailModal } from "@/components/common/DetailModal";
import { AnimatedButton } from "@/components/AnimatedButton";
import { getVolunteers } from "@/api/volunteers";
import type { Volunteer } from "@/data/volunteers";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import heroImage from "@/assets/hero-nepal.jpg";

export const Route = createFileRoute("/volunteers")({
  head: () => ({
    meta: [
      { title: "Help.com — Find Volunteers" },
      {
        name: "description",
        content:
          "Discover volunteers by skills, interests, location, and availability across Nepal.",
      },
    ],
  }),
  component: VolunteersPage,
});

const SKILL_OPTIONS = [
  "All Skills",
  "First Aid",
  "Disaster Response",
  "Logistics",
  "Nursing",
  "High Altitude Rescue",
  "Teaching & Tutoring",
  "IT Support",
  "Community Mobilization",
  "Veterinary Care",
];

const PROVINCE_OPTIONS = [
  "All Provinces",
  "Bagmati",
  "Gandaki",
  "Koshi",
  "Karnali",
];

function VolunteersPage() {
  const [volunteers, setVolunteers] = useState<Volunteer[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSkill, setSelectedSkill] = useState("All Skills");
  const [selectedProvince, setSelectedProvince] = useState("All Provinces");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Active detail modal volunteer
  const [selectedVolunteer, setSelectedVolunteer] = useState<Volunteer | null>(
    null,
  );
  const [invitedStatus, setInvitedStatus] = useState<Record<string, boolean>>(
    {},
  );

  // GSAP animation refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const cardsGridRef = useRef<HTMLDivElement | null>(null);

  // Fetch volunteers data
  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getVolunteers({
        query: searchQuery,
        skill: selectedSkill === "All Skills" ? undefined : selectedSkill,
        province:
          selectedProvince === "All Provinces" ? undefined : selectedProvince,
        verifiedOnly,
      });
      setVolunteers(data);
      setLoading(false);
    }
    loadData();
  }, [searchQuery, selectedSkill, selectedProvince, verifiedOnly]);

  // Page Entrance GSAP Timeline
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".vol-hero-media", { opacity: 0, scale: 1.04, duration: 0.9 })
        .from(".vol-hero-text", { opacity: 0, y: 20, duration: 0.6 }, "-=0.6")
        .from(filterRef.current, { opacity: 0, x: -16, duration: 0.5 }, "-=0.4")
        .from(
          ".vol-card",
          { opacity: 0, y: 18, stagger: 0.06, duration: 0.5 },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  // Animate card list changes on filter update
  useEffect(() => {
    if (loading || prefersReducedMotion() || !cardsGridRef.current) return;
    const cards = cardsGridRef.current.querySelectorAll(".vol-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" },
      );
    }
  }, [volunteers, loading]);

  const handleInvite = (id: string) => {
    setInvitedStatus((prev) => ({ ...prev, [id]: true }));
    setTimeout(() => {
      setInvitedStatus((prev) => ({ ...prev, [id]: false }));
    }, 4000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteNav />

      {/* Hero Section */}
      <section ref={heroRef} className="border-b bg-card/50 py-10 md:py-16">
        <div className="shell grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="vol-hero-text space-y-4">
            <p className="eyebrow text-primary font-mono text-xs tracking-wider uppercase">
              COMMUNITY VOLUNTEER DIRECTORY
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Find people ready to make a difference.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Discover volunteers across Nepal by skills, interests, location,
              and availability. Connect with verified helpers ready to support
              community projects.
            </p>
          </div>

          <div className="vol-hero-media relative rounded-2xl overflow-hidden shadow-lg border h-64 sm:h-80">
            <img
              src={heroImage}
              alt="Volunteers offering humanitarian aid in Nepal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 border backdrop-blur-md flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium">Verified Active Volunteers</span>
              <span className="font-bold text-primary font-mono">
                1,200+ across Nepal
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="flex-1 shell py-8 md:py-12">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Filter Sidebar — Desktop */}
          <aside
            ref={filterRef}
            className="hidden md:block w-72 shrink-0 space-y-6"
          >
            <div className="sticky top-24 bg-card border rounded-xl p-5 space-y-6 shadow-sm">
              <div className="flex items-center justify-between border-b pb-3">
                <h3 className="font-semibold text-sm flex items-center gap-2">
                  <Filter className="size-4 text-primary" />
                  Filter Volunteers
                </h3>
                {(searchQuery ||
                  selectedSkill !== "All Skills" ||
                  selectedProvince !== "All Provinces" ||
                  verifiedOnly) && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedSkill("All Skills");
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
                  Search Name / Skill
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="e.g. Aarav, First Aid..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Skill Filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Primary Skill
                </label>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {SKILL_OPTIONS.map((opt) => (
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
                  <span>Verified Helpers Only</span>
                </label>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Button */}
          <div className="md:hidden flex items-center justify-between gap-3 bg-card p-4 border rounded-xl mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search volunteers..."
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
                  Primary Skill
                </label>
                <select
                  value={selectedSkill}
                  onChange={(e) => setSelectedSkill(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg text-sm"
                >
                  {SKILL_OPTIONS.map((opt) => (
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
                <span className="text-foreground font-bold">
                  {volunteers.length}
                </span>{" "}
                volunteers
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
            ) : volunteers.length > 0 ? (
              <div
                ref={cardsGridRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {volunteers.map((vol) => (
                  <VolunteerCard
                    key={vol.id}
                    volunteer={vol}
                    onViewProfile={() => setSelectedVolunteer(vol)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl border p-8">
                <UserCheck className="size-12 mx-auto text-muted-foreground/40 mb-3" />
                <h3 className="text-lg font-semibold mb-1">
                  No volunteers match your criteria
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                  Try broadening your search query or adjusting your
                  skill/location filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedSkill("All Skills");
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

      {/* Volunteer Detail Modal */}
      {selectedVolunteer && (
        <DetailModal
          isOpen={Boolean(selectedVolunteer)}
          onClose={() => setSelectedVolunteer(null)}
          title="Volunteer Profile"
        >
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0 border">
                {selectedVolunteer.name.charAt(0)}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <h3 className="text-xl font-bold">
                    {selectedVolunteer.name}
                  </h3>
                  {selectedVolunteer.verified && (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full">
                      <CheckCircle2 className="size-3.5" />
                      Verified Helper
                    </span>
                  )}
                </div>
                <p className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                  <MapPin className="size-3.5" />
                  {selectedVolunteer.location}, {selectedVolunteer.province}{" "}
                  Province
                </p>
              </div>
            </div>

            {/* Impact Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-muted/40 rounded-xl border text-center">
              <div>
                <div className="text-xs text-muted-foreground font-medium">
                  Hours Contributed
                </div>
                <div className="text-lg font-bold text-primary flex items-center justify-center gap-1 mt-0.5">
                  <Clock className="size-4" />
                  {selectedVolunteer.volunteerHours} hrs
                </div>
              </div>
              <div>
                <div className="text-xs text-muted-foreground font-medium">
                  Community Rating
                </div>
                <div className="text-lg font-bold text-amber-500 flex items-center justify-center gap-1 mt-0.5">
                  <Star className="size-4 fill-amber-500" />
                  {selectedVolunteer.rating} / 5.0
                </div>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <div className="text-xs text-muted-foreground font-medium">
                  Availability
                </div>
                <div className="text-sm font-semibold mt-0.5 truncate">
                  {selectedVolunteer.availability}
                </div>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h4 className="text-sm font-semibold mb-1">About</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedVolunteer.bio}
              </p>
            </div>

            {/* Skills */}
            <div>
              <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                <Award className="size-4 text-primary" />
                Verified Skills
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedVolunteer.skills.map((sk) => (
                  <span
                    key={sk}
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border"
                  >
                    {sk}
                  </span>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div>
              <h4 className="text-sm font-semibold mb-1 flex items-center gap-1.5">
                <Briefcase className="size-4 text-primary" />
                Experience & Background
              </h4>
              <p className="text-sm text-muted-foreground">
                {selectedVolunteer.experience}
              </p>
            </div>

            {/* CTA Interaction */}
            <div className="pt-4 border-t flex items-center justify-between gap-4">
              <button
                type="button"
                onClick={() => setSelectedVolunteer(null)}
                className="px-4 py-2 border rounded-lg text-sm hover:bg-accent"
              >
                Close
              </button>

              {invitedStatus[selectedVolunteer.id] ? (
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium animate-pulse">
                  <Check className="size-4" />
                  Invitation sent successfully!
                </div>
              ) : (
                <AnimatedButton
                  onClick={() => handleInvite(selectedVolunteer.id)}
                  className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                >
                  Invite to Volunteer
                </AnimatedButton>
              )}
            </div>
          </div>
        </DetailModal>
      )}

      <SiteFooter />
    </div>
  );
}

// Volunteer Card Subcomponent
function VolunteerCard({
  volunteer,
  onViewProfile,
}: {
  volunteer: Volunteer;
  onViewProfile: () => void;
}) {
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
      className="vol-card bg-card border rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center border shrink-0">
              {volunteer.name.charAt(0)}
            </div>
            <div>
              <h3 className="font-semibold text-base flex items-center gap-1.5">
                {volunteer.name}
                {volunteer.verified && (
                  <CheckCircle2 className="size-4 text-emerald-500 shrink-0" />
                )}
              </h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1 mt-0.5">
                <MapPin className="size-3" />
                {volunteer.district}, {volunteer.province}
              </p>
            </div>
          </div>

          <div className="text-right shrink-0">
            <span className="text-xs font-bold text-amber-500 flex items-center gap-0.5 justify-end">
              <Star className="size-3.5 fill-amber-500" />
              {volunteer.rating}
            </span>
            <span className="text-[11px] text-muted-foreground">
              {volunteer.volunteerHours} hrs
            </span>
          </div>
        </div>

        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {volunteer.bio}
        </p>

        {/* Skills Pills */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {volunteer.skills.slice(0, 3).map((s) => (
            <span
              key={s}
              className="text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border"
            >
              {s}
            </span>
          ))}
          {volunteer.skills.length > 3 && (
            <span className="text-[11px] px-1.5 py-0.5 text-muted-foreground">
              +{volunteer.skills.length - 3}
            </span>
          )}
        </div>
      </div>

      <div className="pt-3 border-t flex items-center justify-between">
        <span className="text-xs text-muted-foreground truncate max-w-[140px] sm:max-w-[180px]">
          {volunteer.availability}
        </span>
        <button
          type="button"
          onClick={onViewProfile}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
        >
          View Profile
          <ArrowRight className="size-3.5 card-arrow" />
        </button>
      </div>
    </div>
  );
}
