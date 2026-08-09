import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, Filter, ArrowRight, ShieldCheck, Heart, UserCheck, CheckCircle2 } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";
import {
  getAuthenticatedUser,
  getUserActivity,
  DEMO_ACCOUNTS,
  type LeaderboardEntry,
} from "@/lib/demoAuth";

export const Route = createFileRoute("/leaderboard")({
  head: () => ({
    meta: [
      { title: "Community Leaderboard — Help.com" },
      {
        name: "description",
        content:
          "Recognizing top donors, volunteers, and humanitarian contributors across Nepal.",
      },
    ],
  }),
  component: LeaderboardPage,
});

type TimeframeFilter = "this_month" | "all_time";
type RoleFilter = "all" | "donors" | "volunteers";

function LeaderboardPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const rowsRef = useRef<HTMLDivElement | null>(null);
  const [timeframe, setTimeframe] = useState<TimeframeFilter>("all_time");
  const [roleFilter, setRoleFilter] = useState<RoleFilter>("all");

  const [authUser, setAuthUser] = useState(() => getAuthenticatedUser());
  const [userActivity, setUserActivity] = useState(() =>
    getUserActivity(getAuthenticatedUser()?.email)
  );

  useEffect(() => {
    function syncAll() {
      const current = getAuthenticatedUser();
      setAuthUser(current);
      setUserActivity(getUserActivity(current?.email));
    }
    window.addEventListener("help_demo_auth_change", syncAll);
    window.addEventListener("help_demo_activity_change", syncAll);
    return () => {
      window.removeEventListener("help_demo_auth_change", syncAll);
      window.removeEventListener("help_demo_activity_change", syncAll);
    };
  }, []);

  const activeEmail = authUser?.email?.toLowerCase() || DEMO_ACCOUNTS.NORMAL_USER.email;

  // Base demo leaderboard entries
  const baseEntries: LeaderboardEntry[] = [
    {
      rank: 1,
      id: "l-sita",
      name: "Sita Thapa",
      location: "Kathmandu",
      impactScore: 1280,
      donationsCount: 42,
      volunteerHours: 124,
      peopleHelped: 218,
      role: "Volunteer",
      avatarUrl:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 2,
      id: "l-admin",
      name: "Admin",
      location: "Jhapa",
      impactScore:
        activeEmail === DEMO_ACCOUNTS.ADMIN.email ? userActivity.impactScore : 1280,
      donationsCount:
        activeEmail === DEMO_ACCOUNTS.ADMIN.email ? userActivity.donationsCount : 24,
      volunteerHours:
        activeEmail === DEMO_ACCOUNTS.ADMIN.email ? userActivity.volunteerCount : 86,
      peopleHelped: 143,
      role: "Donor & Volunteer",
      avatarUrl: DEMO_ACCOUNTS.ADMIN.avatarUrl,
      isCurrentUser: activeEmail === DEMO_ACCOUNTS.ADMIN.email,
    },
    {
      rank: 3,
      id: "l-rohan",
      name: "Rohan Gurung",
      location: "Chitwan",
      impactScore: 1120,
      donationsCount: 34,
      volunteerHours: 96,
      peopleHelped: 176,
      role: "Donor & Volunteer",
      avatarUrl:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 4,
      id: "l-aayush",
      name: "Aayush",
      location: "Kathmandu",
      impactScore:
        activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email
          ? userActivity.impactScore
          : 980,
      donationsCount:
        activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email
          ? userActivity.donationsCount
          : 3,
      volunteerHours:
        activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email
          ? userActivity.volunteerCount
          : 2,
      peopleHelped: 45,
      role: "Donor & Volunteer",
      avatarUrl: DEMO_ACCOUNTS.NORMAL_USER.avatarUrl,
      isCurrentUser: activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email,
    },
    {
      rank: 5,
      id: "l-bikash",
      name: "Bikash Shrestha",
      location: "Bhaktapur",
      impactScore: 860,
      donationsCount: 18,
      volunteerHours: 65,
      peopleHelped: 104,
      role: "Volunteer",
      avatarUrl:
        "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 6,
      id: "l-anisha",
      name: "Anisha Rai",
      location: "Dharan",
      impactScore: 740,
      donationsCount: 17,
      volunteerHours: 61,
      peopleHelped: 96,
      role: "Donor",
      avatarUrl:
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 7,
      id: "l-bibek",
      name: "Bibek Tamang",
      location: "Hetauda",
      impactScore: 680,
      donationsCount: 15,
      volunteerHours: 58,
      peopleHelped: 88,
      role: "Volunteer",
      avatarUrl:
        "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
    },
  ];

  // Sort entries by impact score descending
  const sortedEntries = [...baseEntries].sort((a, b) => b.impactScore - a.impactScore);

  // Filter dataset based on role selection
  const filteredLeaderboard = sortedEntries.filter((entry) => {
    if (roleFilter === "donors") {
      return entry.role.includes("Donor");
    }
    if (roleFilter === "volunteers") {
      return entry.role.includes("Volunteer");
    }
    return true;
  });

  // Re-index ranks
  const rankedList: LeaderboardEntry[] = filteredLeaderboard.map((item, idx) => ({
    ...item,
    rank: idx + 1,
  }));

  const currentUserItem = rankedList.find((e) => e.isCurrentUser) || rankedList[3];

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".lb-header-item",
        { opacity: 0, y: 18 },
        { opacity: 1, y: 0, stagger: 0.07, duration: 0.5 }
      )
        .fromTo(
          ".lb-user-card",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.45 },
          "-=0.2"
        )
        .fromTo(
          ".lb-row",
          { opacity: 0, y: 16 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.4 },
          "-=0.1"
        )
        .fromTo(
          ".lb-footer-item",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.1, duration: 0.45 },
          "-=0.1"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Animate row changes when filter toggles
  useEffect(() => {
    if (prefersReducedMotion() || !rowsRef.current) return;
    const rows = rowsRef.current.querySelectorAll(".lb-row");
    if (rows.length > 0) {
      gsap.fromTo(
        rows,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, stagger: 0.04, duration: 0.3, ease: "power2.out" }
      );
    }
  }, [timeframe, roleFilter]);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <SiteNav />

      <main ref={containerRef} className="flex-1 shell py-8 md:py-12 space-y-10">
        {/* LEADERBOARD HEADER */}
        <header className="space-y-3 border-b border-border/80 pb-8">
          <p className="lb-header-item eyebrow">COMMUNITY IMPACT</p>
          <h1 className="lb-header-item text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            People making a difference.
          </h1>
          <p className="lb-header-item text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Every donation, volunteer hour, and fulfilled request moves the community forward.
          </p>

          <div className="lb-header-item pt-2">
            <p className="text-xs font-mono text-muted-foreground border-l-2 border-foreground/30 pl-3 py-0.5">
              Rankings are based on community impact — combining verified donations, volunteer contributions, and fulfilled requests.
            </p>
          </div>
        </header>

        {/* CURRENT USER POSITION */}
        <section className="lb-user-card bg-card border border-border rounded-xl p-6 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="eyebrow">YOUR RANK</span>
                <span className="text-xs font-mono font-bold px-2 py-0.5 rounded bg-foreground text-background">
                  #{currentUserItem.rank}
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={currentUserItem.avatarUrl}
                  alt={currentUserItem.name}
                  className="size-12 rounded-full object-cover border border-border shrink-0"
                />
                <div>
                  <h2 className="text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
                    {currentUserItem.name}
                    <span className="text-xs font-mono px-2 py-0.5 rounded border border-border bg-muted/40 font-normal">
                      {currentUserItem.location}
                    </span>
                  </h2>
                  <p className="text-xs text-muted-foreground font-mono">
                    {currentUserItem.role}
                  </p>
                </div>
              </div>

              <p className="text-xs font-mono text-muted-foreground pt-1">
                You're contributing to community impact! Keep making verified donations & volunteering.
              </p>
            </div>

            {/* Quick stats badges */}
            <div className="grid grid-cols-3 gap-3 md:gap-6 border-t md:border-t-0 md:border-l border-border/80 pt-4 md:pt-0 md:pl-8 shrink-0 font-mono">
              <div>
                <span className="text-xs text-muted-foreground block">Impact</span>
                <span className="text-xl font-bold text-foreground">
                  {currentUserItem.impactScore.toLocaleString()}
                </span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">Donations</span>
                <span className="text-xl font-bold text-foreground">
                  {currentUserItem.donationsCount}
                </span>
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">Volunteer</span>
                <span className="text-xl font-bold text-foreground">
                  {currentUserItem.volunteerHours}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* LEADERBOARD FILTERS & MAIN LIST */}
        <section className="space-y-6">
          {/* FILTER CONTROLS */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-4">
            <div className="flex items-center gap-2">
              <Filter className="size-4 text-muted-foreground" />
              <span className="text-xs font-mono text-muted-foreground uppercase tracking-wider">
                FILTERS
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* TIMEFRAME SWITCHER */}
              <div className="inline-flex rounded-lg border border-border p-1 bg-card text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setTimeframe("this_month")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    timeframe === "this_month"
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  This Month
                </button>
                <button
                  type="button"
                  onClick={() => setTimeframe("all_time")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    timeframe === "all_time"
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All Time
                </button>
              </div>

              {/* ROLE SWITCHER */}
              <div className="inline-flex rounded-lg border border-border p-1 bg-card text-xs font-mono">
                <button
                  type="button"
                  onClick={() => setRoleFilter("all")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    roleFilter === "all"
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  All
                </button>
                <button
                  type="button"
                  onClick={() => setRoleFilter("donors")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    roleFilter === "donors"
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Donors
                </button>
                <button
                  type="button"
                  onClick={() => setRoleFilter("volunteers")}
                  className={`px-3 py-1 rounded-md transition-colors ${
                    roleFilter === "volunteers"
                      ? "bg-foreground text-background font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Volunteers
                </button>
              </div>
            </div>
          </div>

          {/* FULL LEADERBOARD TABLE / LIST */}
          <div
            ref={rowsRef}
            className="border border-border rounded-xl bg-card overflow-hidden divide-y divide-border/80"
          >
            {/* Table Header */}
            <div className="hidden md:grid grid-cols-12 gap-4 p-4 text-[0.7rem] font-mono text-muted-foreground uppercase tracking-wider bg-muted/30">
              <div className="col-span-1">RANK</div>
              <div className="col-span-4">CONTRIBUTOR</div>
              <div className="col-span-2 text-right">IMPACT SCORE</div>
              <div className="col-span-1 text-right">DONATIONS</div>
              <div className="col-span-2 text-right">VOLUNTEER HOURS</div>
              <div className="col-span-2 text-right">PEOPLE HELPED</div>
            </div>

            {/* Table Rows */}
            {rankedList.map((item) => {
              const isTop3 = item.rank <= 3;
              const isCurrentUser = item.isCurrentUser;

              return (
                <div
                  key={item.id}
                  className={`lb-row p-4 transition-all flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center ${
                    isCurrentUser
                      ? "bg-accent/70 border-l-4 border-l-foreground ring-1 ring-foreground/20"
                      : isTop3
                      ? "hover:bg-accent/30 bg-card"
                      : "hover:bg-accent/20"
                  }`}
                >
                  {/* Rank & Profile info (Mobile & Desktop) */}
                  <div className="col-span-5 flex items-center gap-3">
                    <span
                      className={`font-mono text-sm font-bold w-7 text-center shrink-0 ${
                        isTop3
                          ? "text-foreground font-black"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.rank < 10 ? `0${item.rank}` : item.rank}
                    </span>

                    <img
                      src={item.avatarUrl}
                      alt={item.name}
                      className="size-10 rounded-full object-cover border border-border shrink-0"
                    />

                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-foreground truncate">
                          {item.name}
                        </span>
                        {isCurrentUser && (
                          <span className="text-[0.65rem] font-mono px-1.5 py-0.2 rounded bg-foreground text-background font-semibold shrink-0">
                            YOU
                          </span>
                        )}
                        {isTop3 && (
                          <span className="text-[0.65rem] font-mono px-1.5 py-0.2 rounded border border-foreground/30 text-foreground shrink-0 hidden sm:inline-block">
                            TOP 3
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground font-mono truncate">
                        {item.location} · {item.role}
                      </p>
                    </div>
                  </div>

                  {/* Metrics grid for mobile or desktop columns */}
                  <div className="col-span-7 grid grid-cols-4 gap-2 mt-3 md:mt-0 font-mono text-right border-t md:border-t-0 border-border/60 pt-3 md:pt-0">
                    <div>
                      <span className="text-[0.65rem] text-muted-foreground block md:hidden">
                        IMPACT
                      </span>
                      <span className="text-sm font-bold text-foreground">
                        {item.impactScore.toLocaleString()}
                      </span>
                    </div>

                    <div>
                      <span className="text-[0.65rem] text-muted-foreground block md:hidden">
                        DONATIONS
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.donationsCount}
                      </span>
                    </div>

                    <div>
                      <span className="text-[0.65rem] text-muted-foreground block md:hidden">
                        HOURS
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.volunteerHours}
                      </span>
                    </div>

                    <div>
                      <span className="text-[0.65rem] text-muted-foreground block md:hidden">
                        HELPED
                      </span>
                      <span className="text-sm font-medium text-foreground">
                        {item.peopleHelped}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* HOW RANKING WORKS */}
        <section className="lb-footer-item bg-card border border-border rounded-xl p-6 md:p-8 space-y-6">
          <div className="space-y-2 border-b border-border/80 pb-4">
            <span className="eyebrow">HOW IMPACT IS CALCULATED</span>
            <h3 className="text-xl font-bold text-foreground">
              Simple, transparent community math.
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
            <div className="space-y-2 p-4 border border-border rounded-lg bg-background/50">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <Heart className="size-4 text-muted-foreground" /> Verified Donations
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Points awarded for blood, food, clothing, and essential medical supplies delivered to verified needs.
              </p>
            </div>

            <div className="space-y-2 p-4 border border-border rounded-lg bg-background/50">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <UserCheck className="size-4 text-muted-foreground" /> Volunteer Hours
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Logged and confirmed hours spent assisting camps, logistics, distribution, or education drives.
              </p>
            </div>

            <div className="space-y-2 p-4 border border-border rounded-lg bg-background/50">
              <div className="flex items-center gap-2 text-foreground font-bold">
                <CheckCircle2 className="size-4 text-muted-foreground" /> Fulfilled Requests
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Direct community requests marked resolved by hospitals, NGOs, or ward leaders across Nepal.
              </p>
            </div>
          </div>
        </section>

        {/* LEADERBOARD CTA */}
        <section className="lb-footer-item bg-card border border-border rounded-xl p-8 text-center space-y-6">
          <div className="space-y-2 max-w-xl mx-auto">
            <span className="eyebrow">GET INVOLVED</span>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-foreground">
              Want to climb the leaderboard?
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Find an opportunity, donate something useful, or volunteer your time.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/explore"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs font-mono transition-opacity hover:opacity-90"
            >
              Find an Opportunity <ArrowRight className="size-3.5" />
            </Link>
            <Link
              to="/campaigns"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground font-medium text-xs font-mono hover:bg-accent transition-colors"
            >
              Donate <ArrowRight className="size-3.5" />
            </Link>
            <Link
              to="/volunteers"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground font-medium text-xs font-mono hover:bg-accent transition-colors"
            >
              Volunteer <ArrowRight className="size-3.5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
