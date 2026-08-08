import { useEffect, useRef, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  MapPin,
  AlertCircle,
  Users,
  Calendar,
  Filter,
  ArrowRight,
  Heart,
  Check,
  Target,
  Clock,
  Sparkles,
} from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { DetailModal } from "@/components/common/DetailModal";
import { AnimatedProgressBar } from "@/components/common/AnimatedProgressBar";
import { AnimatedButton } from "@/components/AnimatedButton";
import { getCampaigns } from "@/api/campaigns";
import type { Campaign } from "@/data/campaigns";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import heroImage from "@/assets/hero-nepal.jpg";

export const Route = createFileRoute("/campaigns")({
  head: () => ({
    meta: [
      { title: "Help.com — Community Campaigns" },
      {
        name: "description",
        content:
          "Support active campaigns that turn community effort into real-world impact across Nepal.",
      },
    ],
  }),
  component: CampaignsPage,
});

const CATEGORY_OPTIONS = [
  "All Categories",
  "Blood",
  "Food",
  "Clothing",
  "Medical",
  "Environment",
  "Education",
  "Disaster Relief",
  "Volunteer",
];

const URGENCY_OPTIONS = ["All Urgencies", "Urgent", "Important", "Normal"];

const STATUS_OPTIONS = ["All Statuses", "Active", "Upcoming", "Completed"];

function CampaignsPage() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedUrgency, setSelectedUrgency] = useState("All Urgencies");
  const [selectedStatus, setSelectedStatus] = useState("All Statuses");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  // Active detail modal campaign
  const [selectedCampaign, setSelectedCampaign] = useState<Campaign | null>(
    null,
  );
  const [actionFeedback, setActionFeedback] = useState<string | null>(null);

  // GSAP animation refs
  const heroRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const cardsGridRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const data = await getCampaigns({
        query: searchQuery,
        category:
          selectedCategory === "All Categories" ? undefined : selectedCategory,
        urgency:
          selectedUrgency === "All Urgencies" ? undefined : selectedUrgency,
        status: selectedStatus === "All Statuses" ? undefined : selectedStatus,
      });
      setCampaigns(data);
      setLoading(false);
    }
    loadData();
  }, [searchQuery, selectedCategory, selectedUrgency, selectedStatus]);

  // Page Entrance Animation
  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(".camp-hero-media", { opacity: 0, scale: 1.03, duration: 0.8 })
        .from(".camp-hero-text", { opacity: 0, y: 18, duration: 0.6 }, "-=0.5")
        .from(
          filterRef.current,
          { opacity: 0, x: -16, duration: 0.45 },
          "-=0.35",
        )
        .from(
          ".camp-card",
          { opacity: 0, y: 16, stagger: 0.06, duration: 0.5 },
          "-=0.3",
        );
    });

    return () => ctx.revert();
  }, []);

  // Filter change grid animation
  useEffect(() => {
    if (loading || prefersReducedMotion() || !cardsGridRef.current) return;
    const cards = cardsGridRef.current.querySelectorAll(".camp-card");
    if (cards.length > 0) {
      gsap.fromTo(
        cards,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.4, stagger: 0.04, ease: "power2.out" },
      );
    }
  }, [campaigns, loading]);

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
          <div className="camp-hero-text space-y-4">
            <p className="eyebrow text-primary font-mono text-xs tracking-wider uppercase">
              COMMUNITY IMPACT CAMPAIGNS
            </p>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight">
              Be part of something bigger.
            </h1>
            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl">
              Support active campaigns that turn community effort into
              real-world impact. Join drives for blood, food, winter supplies,
              health camps, and environmental cleanup.
            </p>
          </div>

          <div className="camp-hero-media relative rounded-2xl overflow-hidden shadow-lg border h-64 sm:h-80">
            <img
              src={heroImage}
              alt="Community campaigns across Nepal"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 border backdrop-blur-md flex items-center justify-between text-xs sm:text-sm">
              <span className="font-medium">Active Community Drives</span>
              <span className="font-bold text-primary font-mono">
                10 Campaigns Active
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
                  Filter Campaigns
                </h3>
                {(searchQuery ||
                  selectedCategory !== "All Categories" ||
                  selectedUrgency !== "All Urgencies" ||
                  selectedStatus !== "All Statuses") && (
                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setSelectedCategory("All Categories");
                      setSelectedUrgency("All Urgencies");
                      setSelectedStatus("All Statuses");
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
                  Search Keyword
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
                  <input
                    type="text"
                    placeholder="e.g. Winter Blanket, Blood..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              {/* Category Filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Urgency Filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Urgency Level
                </label>
                <select
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {URGENCY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-1.5">
                  Campaign Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  {STATUS_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Controls */}
          <div className="md:hidden flex items-center justify-between gap-3 bg-card p-4 border rounded-xl mb-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search campaigns..."
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
                  Category
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg text-sm"
                >
                  {CATEGORY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-xs font-medium mb-1">
                  Urgency
                </label>
                <select
                  value={selectedUrgency}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="w-full p-2 bg-background border rounded-lg text-sm"
                >
                  {URGENCY_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          )}

          {/* Results Grid */}
          <div className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-muted-foreground font-medium">
                Showing{" "}
                <span className="text-foreground font-bold">
                  {campaigns.length}
                </span>{" "}
                campaigns
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
            ) : campaigns.length > 0 ? (
              <div
                ref={cardsGridRef}
                className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              >
                {campaigns.map((camp) => (
                  <CampaignCard
                    key={camp.id}
                    campaign={camp}
                    onView={() => setSelectedCampaign(camp)}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16 bg-card rounded-2xl border p-8">
                <Target className="size-12 mx-auto text-muted-foreground/40 mb-3" />
                <h3 className="text-lg font-semibold mb-1">
                  No campaigns match your criteria
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-6">
                  Try adjusting your category, urgency, or search filters.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearchQuery("");
                    setSelectedCategory("All Categories");
                    setSelectedUrgency("All Urgencies");
                    setSelectedStatus("All Statuses");
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

      {/* Campaign Detail Modal */}
      {selectedCampaign && (
        <DetailModal
          isOpen={Boolean(selectedCampaign)}
          onClose={() => setSelectedCampaign(null)}
          title="Campaign Details"
        >
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md">
                  {selectedCampaign.category}
                </span>
                {selectedCampaign.urgency === "Urgent" && (
                  <span className="inline-flex items-center gap-1 text-xs font-semibold text-destructive bg-destructive/10 px-2.5 py-1 rounded-md">
                    <AlertCircle className="size-3.5" />
                    Urgent Need
                  </span>
                )}
                <span className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium">
                  {selectedCampaign.status}
                </span>
              </div>

              <h3 className="text-xl font-bold">{selectedCampaign.title}</h3>
              <p className="text-xs text-muted-foreground flex items-center gap-1">
                <MapPin className="size-3.5" />
                {selectedCampaign.location} — Organized by{" "}
                <span className="font-semibold text-foreground">
                  {selectedCampaign.organization}
                </span>
              </p>
            </div>

            {/* Visual Progress Bar Section */}
            <div className="p-4 bg-muted/40 rounded-xl border space-y-3">
              <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                <span>Campaign Progress</span>
                <span className="text-primary font-mono">
                  {selectedCampaign.progressPercentage}%
                </span>
              </div>
              <AnimatedProgressBar
                percentage={selectedCampaign.progressPercentage}
              />
              <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
                <span>Goal: {selectedCampaign.goal}</span>
                <span className="flex items-center gap-1">
                  <Users className="size-3.5" />
                  {selectedCampaign.participantsCount} Participants Joined
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h4 className="text-sm font-semibold mb-1">About Campaign</h4>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {selectedCampaign.description}
              </p>
            </div>

            {/* Campaign Requirements */}
            {selectedCampaign.requirements &&
              selectedCampaign.requirements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold mb-2 flex items-center gap-1.5">
                    <Sparkles className="size-4 text-primary" />
                    Specific Needs & Requirements
                  </h4>
                  <ul className="space-y-1.5 text-sm text-muted-foreground">
                    {selectedCampaign.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

            {/* Dates & Timeline */}
            <div className="flex items-center justify-between text-xs text-muted-foreground p-3 border rounded-lg bg-card">
              <span className="flex items-center gap-1">
                <Calendar className="size-3.5 text-primary" />
                Start: {selectedCampaign.startDate}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="size-3.5 text-primary" />
                Deadline: {selectedCampaign.endDate}
              </span>
            </div>

            {/* Action Feedback Toast */}
            {actionFeedback && (
              <div className="p-3 bg-emerald-600 text-white rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2 animate-fadeIn">
                <Check className="size-4" />
                {actionFeedback}
              </div>
            )}

            {/* Action Buttons */}
            <div className="pt-4 border-t flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setSelectedCampaign(null)}
                className="px-4 py-2 border rounded-lg text-sm hover:bg-accent"
              >
                Close
              </button>

              <div className="flex flex-wrap items-center gap-2">
                <AnimatedButton
                  onClick={() =>
                    handleAction("You're in! Campaign joined successfully.")
                  }
                  className="px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium"
                >
                  Join Campaign
                </AnimatedButton>
                {selectedCampaign.donationsNeeded && (
                  <AnimatedButton
                    onClick={() =>
                      handleAction("Thank you! Donation pledge received.")
                    }
                    className="px-4 py-2 bg-secondary border text-secondary-foreground rounded-lg text-sm font-medium"
                  >
                    <Heart className="size-3.5 mr-1 text-rose-500 fill-rose-500 inline" />
                    Donate
                  </AnimatedButton>
                )}
                {selectedCampaign.volunteerNeeded && (
                  <AnimatedButton
                    onClick={() => handleAction("Volunteer request submitted.")}
                    className="px-4 py-2 border rounded-lg text-sm font-medium hover:bg-accent"
                  >
                    Volunteer
                  </AnimatedButton>
                )}
              </div>
            </div>
          </div>
        </DetailModal>
      )}

      <SiteFooter />
    </div>
  );
}

// Campaign Card Subcomponent
function CampaignCard({
  campaign,
  onView,
}: {
  campaign: Campaign;
  onView: () => void;
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
      className="camp-card bg-card border rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
    >
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md">
            {campaign.category}
          </span>
          {campaign.urgency === "Urgent" && (
            <span className="inline-flex items-center gap-1 text-xs font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded">
              <AlertCircle className="size-3" />
              Urgent
            </span>
          )}
        </div>

        <h3 className="font-semibold text-base mb-1.5 line-clamp-2">
          {campaign.title}
        </h3>
        <p className="text-xs text-muted-foreground flex items-center gap-1 mb-3">
          <MapPin className="size-3" />
          {campaign.location} • {campaign.organization}
        </p>

        <p className="text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed">
          {campaign.description}
        </p>

        {/* Animated Progress Bar */}
        <div className="space-y-1.5 mb-4">
          <div className="flex items-center justify-between text-xs">
            <span className="text-muted-foreground font-medium">
              Progress ({campaign.progressPercentage}%)
            </span>
            <span className="font-semibold text-foreground">
              {campaign.goal}
            </span>
          </div>
          <AnimatedProgressBar percentage={campaign.progressPercentage} />
        </div>
      </div>

      <div className="pt-3 border-t flex items-center justify-between">
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          <Users className="size-3.5" />
          {campaign.participantsCount} Joined
        </span>

        <button
          type="button"
          onClick={onView}
          className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline shrink-0"
        >
          View Campaign
          <ArrowRight className="size-3.5 card-arrow" />
        </button>
      </div>
    </div>
  );
}
