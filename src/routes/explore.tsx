import { useState, useEffect, useRef } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { Search, MapPin, AlertCircle, Filter, ArrowRight } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { opportunities, type OpportunityCategory } from "@/data/exploreData";
import { gsap, prefersReducedMotion } from "@/lib/gsap";

export const Route = createFileRoute("/explore")({
  head: () => ({
    meta: [
      { title: "Help.com — Explore Opportunities" },
      {
        name: "description",
        content:
          "Explore donation requests, blood needs, and volunteer opportunities across Nepal.",
      },
    ],
  }),
  component: ExplorePage,
});

const CATEGORIES: { id: OpportunityCategory | "all"; label: string }[] = [
  { id: "all", label: "All Categories" },
  { id: "blood", label: "Blood" },
  { id: "food", label: "Food" },
  { id: "clothing", label: "Clothing" },
  { id: "medical", label: "Medical" },
  { id: "volunteers", label: "Volunteers" },
  { id: "books", label: "Books" },
];

function ExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [urgentOnly, setUrgentOnly] = useState(false);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const filterRef = useRef<HTMLDivElement | null>(null);
  const gridRef = useRef<HTMLDivElement | null>(null);
  const firstMount = useRef(true);
  const [displayed, setDisplayed] = useState(() => opportunities);
  const navigate = useNavigate();

  const filtered = opportunities.filter((item) => {
    if (selectedCategory !== "all" && item.category !== selectedCategory)
      return false;
    if (urgentOnly && item.urgency !== "urgent") return false;
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      const matchTitle = item.title.toLowerCase().includes(q);
      const matchDesc = item.description.toLowerCase().includes(q);
      const matchLoc = `${item.location.city} ${item.location.district}`
        .toLowerCase()
        .includes(q);
      return matchTitle || matchDesc || matchLoc;
    }
    return true;
  });

  // sync displayed with filtered but animate transitions
  useEffect(() => {
    if (!gridRef.current) {
      setDisplayed(filtered);
      return;
    }
    if (firstMount.current) {
      setDisplayed(filtered);
      firstMount.current = false;
      return;
    }

    if (prefersReducedMotion()) {
      setDisplayed(filtered);
      return;
    }

    const cards = gridRef.current.querySelectorAll(".op-card");
    if (cards.length) {
      gsap.to(cards, {
        opacity: 0,
        y: -8,
        duration: 0.18,
        stagger: 0.02,
        onComplete: () => {
          setDisplayed(filtered);
          requestAnimationFrame(() => {
            const next = gridRef.current?.querySelectorAll(".op-card");
            if (next && next.length)
              gsap.from(next, {
                opacity: 0,
                y: 12,
                duration: 0.45,
                stagger: 0.06,
                ease: "power2.out",
              });
          });
        },
      });
    } else {
      setDisplayed(filtered);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchQuery, urgentOnly]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteNav />

      <main className="flex-1 shell py-8 md:py-12">
        <header className="mb-8">
          <p className="eyebrow mb-2">COMMUNITY OPPORTUNITIES</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
            Explore requests & ways to help
          </h1>
          <p className="text-muted-foreground max-w-2xl">
            Find active requests for blood, supplies, volunteers, and community
            aid across Nepal.
          </p>
        </header>

        {/* Filter controls */}
        <div className="flex flex-col md:flex-row gap-4 mb-8 items-stretch md:items-center justify-between bg-card p-4 rounded-xl border shadow-sm">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search by keyword, city, or district..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
            />
          </div>

          <div className="flex flex-wrap gap-2 items-center">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <Filter className="size-4 text-muted-foreground shrink-0 ml-1" />
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={(e) => {
                    // subtle selection animation
                    if (!prefersReducedMotion())
                      gsap.fromTo(
                        e.currentTarget,
                        { scale: 1 },
                        { scale: 1.03, duration: 0.12, yoyo: true, repeat: 1 },
                      );
                    setSelectedCategory(cat.id);
                  }}
                  className={`px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                    selectedCategory === cat.id
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

            <button
              type="button"
              onClick={() => setUrgentOnly((prev) => !prev)}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${
                urgentOnly
                  ? "bg-destructive/10 border-destructive text-destructive"
                  : "border-border text-muted-foreground hover:bg-accent"
              }`}
            >
              <AlertCircle className="size-3.5" />
              Urgent Only
            </button>
          </div>
        </div>

        {/* Cards Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {displayed.map((item) => (
            <div
              data-id={item.id}
              key={item.id}
              className="op-card bg-card border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow"
              onMouseEnter={(e) => {
                if (!prefersReducedMotion())
                  gsap.to(e.currentTarget, { y: -4, duration: 0.16 });
              }}
              onMouseLeave={(e) => {
                if (!prefersReducedMotion())
                  gsap.to(e.currentTarget, { y: 0, duration: 0.18 });
              }}
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md">
                    {item.category}
                  </span>
                  {item.urgency === "urgent" && (
                    <span className="inline-flex items-center gap-1 text-xs font-medium text-destructive bg-destructive/10 px-2.5 py-1 rounded-md">
                      <AlertCircle className="size-3" />
                      Urgent
                    </span>
                  )}
                </div>

                <h2 className="text-lg font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h2>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-border mt-2">
                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="size-3.5" />
                    {item.location.city}, {item.location.district}
                  </span>
                  <span>{item.organization}</span>
                </div>

                <Link
                  to="/get-started"
                  onClick={(e) => {
                    // animate card then navigate
                    if (prefersReducedMotion()) return;
                    e.preventDefault();
                    const el = document.querySelector(`[data-id="${item.id}"]`);
                    if (el)
                      gsap.to(el, {
                        scale: 0.98,
                        opacity: 0.95,
                        duration: 0.12,
                        onComplete: () => {
                          navigate({ to: "/get-started" });
                        },
                      });
                    else navigate({ to: "/get-started" });
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  {item.actionLabel}
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-16 bg-card rounded-xl border p-8">
            <h3 className="text-lg font-semibold mb-2">
              No opportunities found
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto mb-6">
              Try adjusting your search query or filters to discover available
              requests.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
                setUrgentOnly(false);
              }}
              className="px-4 py-2 text-sm font-medium rounded-lg border hover:bg-accent"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      <SiteFooter />
    </div>
  );
}
