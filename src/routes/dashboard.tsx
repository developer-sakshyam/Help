import { useEffect, useRef, useState } from "react";
import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Calendar as CalendarIcon, Bell, ShieldCheck, MapPin, Award, LogOut, Heart, UserCheck } from "lucide-react";
import { SiteNav } from "@/components/site/site-nav";
import { SiteFooter } from "@/components/site/site-footer";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";
import {
  getAuthenticatedUser,
  getUserActivity,
  logoutDemoUser,
  DEMO_ACCOUNTS,
} from "@/lib/demoAuth";
import {
  demoNotifications,
  demoEvents,
  demoOpportunities,
  demoLeaderboard,
} from "@/data/demoData";
import { DonateModal, VolunteerModal } from "@/components/common/ActionModals";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Help.com" },
      {
        name: "description",
        content:
          "Track your giving activity, verified impact score, upcoming calendar events, and matched community needs across Nepal.",
      },
    ],
  }),
  component: DashboardPage,
});

function DashboardPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scoreRef = useRef<HTMLSpanElement | null>(null);
  const progressBarRef = useRef<HTMLDivElement | null>(null);
  const milestoneProgressRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  const [authUser, setAuthUser] = useState(() => getAuthenticatedUser());
  const [userActivity, setUserActivity] = useState(() =>
    getUserActivity(getAuthenticatedUser()?.email)
  );

  const [selectedDonateTarget, setSelectedDonateTarget] = useState<{
    title: string;
    org: string;
    category: string;
  } | null>(null);

  const [selectedVolunteerTarget, setSelectedVolunteerTarget] = useState<{
    title: string;
    org: string;
    location: string;
  } | null>(null);

  const [animatedScore, setAnimatedScore] = useState(0);

  // Sync user profile & activity dynamically
  useEffect(() => {
    function syncAll() {
      const currentAuth = getAuthenticatedUser();
      setAuthUser(currentAuth);
      const act = getUserActivity(currentAuth?.email);
      setUserActivity(act);
    }

    syncAll();
    window.addEventListener("help_demo_auth_change", syncAll);
    window.addEventListener("help_demo_activity_change", syncAll);
    window.addEventListener("storage", syncAll);

    return () => {
      window.removeEventListener("help_demo_auth_change", syncAll);
      window.removeEventListener("help_demo_activity_change", syncAll);
      window.removeEventListener("storage", syncAll);
    };
  }, []);

  // Calculate user profile details
  const activeUser = authUser || {
    displayName: DEMO_ACCOUNTS.NORMAL_USER.fullName,
    email: DEMO_ACCOUNTS.NORMAL_USER.email,
    role: DEMO_ACCOUNTS.NORMAL_USER.role,
    bloodGroup: DEMO_ACCOUNTS.NORMAL_USER.bloodGroup,
    location: DEMO_ACCOUNTS.NORMAL_USER.location,
    avatarUrl: DEMO_ACCOUNTS.NORMAL_USER.avatarUrl,
  };

  const currentImpact = userActivity.impactScore;
  const nextMilestone = 1500;
  const progressPercent = Math.min(100, Math.round((currentImpact / nextMilestone) * 100));

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) {
      setAnimatedScore(currentImpact);
      if (progressBarRef.current) progressBarRef.current.style.width = `${progressPercent}%`;
      if (milestoneProgressRef.current) milestoneProgressRef.current.style.width = `${progressPercent}%`;
      return;
    }

    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      // Entrance Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        ".dash-header-item",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, stagger: 0.08, duration: 0.5 }
      )
        .fromTo(
          ".dash-card",
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, stagger: 0.07, duration: 0.45 },
          "-=0.2"
        )
        .fromTo(
          ".dash-section",
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, stagger: 0.09, duration: 0.45 },
          "-=0.2"
        );

      // Score counter animation
      const scoreObj = { val: 0 };
      gsap.to(scoreObj, {
        val: currentImpact,
        duration: 1.2,
        ease: "power2.out",
        onUpdate: () => {
          setAnimatedScore(Math.round(scoreObj.val));
        },
      });

      // Progress bars animation
      if (progressBarRef.current) {
        gsap.to(progressBarRef.current, {
          width: `${progressPercent}%`,
          duration: 1,
          ease: "power2.out",
        });
      }

      if (milestoneProgressRef.current) {
        gsap.to(milestoneProgressRef.current, {
          width: `${progressPercent}%`,
          duration: 1,
          ease: "power2.out",
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, [currentImpact, progressPercent]);

  // Leaderboard preview top 5
  const top5Leaderboard = [
    {
      rank: 1,
      id: "l1",
      name: "Sita Thapa",
      impactScore: 1280,
      donationsCount: 42,
      volunteerHours: 124,
      avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 2,
      id: "l2",
      name: "Rohan Gurung",
      impactScore: 1120,
      donationsCount: 34,
      volunteerHours: 96,
      avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 3,
      id: "l3",
      name: activeUser.displayName,
      impactScore: currentImpact,
      donationsCount: userActivity.donationsCount,
      volunteerHours: userActivity.volunteerCount,
      avatarUrl: activeUser.avatarUrl,
      isCurrentUser: true,
    },
    {
      rank: 4,
      id: "l4",
      name: "Bikash Shrestha",
      impactScore: 860,
      donationsCount: 18,
      volunteerHours: 65,
      avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
    },
    {
      rank: 5,
      id: "l5",
      name: "Anisha Rai",
      impactScore: 740,
      donationsCount: 15,
      volunteerHours: 58,
      avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground antialiased">
      <SiteNav />

      <main ref={containerRef} className="flex-1 shell py-8 md:py-12 space-y-10">
        {/* DASHBOARD HEADER */}
        <header className="space-y-2 border-b border-border/80 pb-8">
          <p className="dash-header-item eyebrow">USER DASHBOARD</p>
          <h1 className="dash-header-item text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            {activeUser.displayName}, here’s where you stand.
          </h1>
          <p className="dash-header-item text-base md:text-lg text-muted-foreground max-w-2xl">
            Your giving activity, volunteer applications, and matched community needs
          </p>
        </header>

        {/* FIRST GRID — 3 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD 1: PROFILE SUMMARY */}
          <div className="dash-card bg-card border border-border p-6 rounded-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="eyebrow">PROFILE SUMMARY</span>
                <span className="inline-flex items-center gap-1 text-[0.7rem] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                  <ShieldCheck className="size-3" /> VERIFIED
                </span>
              </div>

              <div className="flex items-center gap-4">
                <img
                  src={activeUser.avatarUrl}
                  alt={activeUser.displayName}
                  className="size-14 rounded-full object-cover border border-border shrink-0"
                />
                <div className="min-w-0">
                  <h2 className="text-xl font-bold tracking-tight truncate text-foreground">
                    {activeUser.displayName}
                  </h2>
                  <p className="text-xs font-mono text-muted-foreground truncate">
                    {activeUser.email}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                <span className="px-2.5 py-1 text-xs font-mono border border-border bg-muted/40 rounded-md text-foreground">
                  {activeUser.role}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono border border-border bg-muted/40 rounded-md text-foreground">
                  {activeUser.bloodGroup}
                </span>
                <span className="px-2.5 py-1 text-xs font-mono border border-border bg-muted/40 rounded-md text-foreground">
                  {activeUser.location}
                </span>
              </div>
            </div>

            <div className="pt-4 border-t border-border/80 flex items-center gap-2">
              <button
                type="button"
                onClick={() => {
                  alert("Profile settings available in settings menu.");
                }}
                className="flex-1 text-center px-4 py-2 text-xs font-medium border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                Edit profile
              </button>
              <button
                type="button"
                onClick={() => {
                  logoutDemoUser();
                  navigate({ to: "/" });
                }}
                className="inline-flex items-center gap-1 px-3 py-2 text-xs font-medium border border-border rounded-lg text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-colors"
              >
                <LogOut className="size-3" /> Sign out
              </button>
            </div>
          </div>

          {/* CARD 2: IMPACT SCORE */}
          <div className="dash-card bg-card border border-border p-6 rounded-xl flex flex-col justify-between space-y-6">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="eyebrow">IMPACT SCORE</span>
                <Award className="size-4 text-muted-foreground" />
              </div>
              <div className="flex items-baseline gap-2">
                <span
                  ref={scoreRef}
                  className="text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-foreground"
                >
                  {animatedScore.toLocaleString()}
                </span>
                <span className="text-xs font-mono text-muted-foreground">
                  / {nextMilestone.toLocaleString()} PTS
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                Earned from verified donations, volunteer hours, and fulfilled requests.
              </p>
            </div>

            <div className="space-y-2 pt-2">
              <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                <div
                  ref={progressBarRef}
                  className="h-full bg-foreground rounded-full transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
              <div className="flex justify-between text-[0.7rem] font-mono text-muted-foreground">
                <span>Current: {currentImpact}</span>
                <span>Next Milestone: {nextMilestone}</span>
              </div>
            </div>
          </div>

          {/* CARD 3: AT A GLANCE */}
          <div className="dash-card bg-card border border-border p-6 rounded-xl flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <span className="eyebrow">AT A GLANCE</span>

              <div className="space-y-4 divide-y divide-border/60">
                <div className="flex justify-between items-center pt-1">
                  <span className="text-sm text-muted-foreground">Total donations</span>
                  <span className="text-xl font-bold font-mono text-foreground">
                    {userActivity.donationsCount}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-sm text-muted-foreground">Volunteer applications</span>
                  <span className="text-xl font-bold font-mono text-foreground">
                    {userActivity.volunteerCount}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="text-sm text-muted-foreground">Saved opportunities</span>
                  <span className="text-xl font-bold font-mono text-foreground">
                    {userActivity.savedCount}
                  </span>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-[0.75rem] font-mono text-muted-foreground text-center">
                Live state updated · {activeUser.location}
              </p>
            </div>
          </div>
        </div>

        {/* SECOND GRID — ASYMMETRIC DESKTOP LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN: 7 COLUMNS */}
          <div className="lg:col-span-7 space-y-10">
            {/* NOTIFICATIONS */}
            <section className="dash-section space-y-4">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <Bell className="size-4 text-muted-foreground" />
                <h2 className="eyebrow">NOTIFICATIONS</h2>
              </div>

              <div className="divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden">
                {demoNotifications.map((n) => (
                  <div
                    key={n.id}
                    className="p-4 hover:bg-accent/40 transition-colors flex items-start justify-between gap-4"
                  >
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold text-foreground">
                          {n.title}
                        </span>
                        {n.unread && (
                          <span className="size-1.5 rounded-full bg-brand shrink-0" />
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">
                        "{n.message}"
                      </p>
                    </div>
                    <span className="text-[0.7rem] font-mono text-muted-foreground shrink-0 border border-border px-2 py-0.5 rounded bg-muted/30">
                      {n.date}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* CALENDAR */}
            <section className="dash-section space-y-4">
              <div className="flex items-center gap-2 border-b border-border pb-3">
                <CalendarIcon className="size-4 text-muted-foreground" />
                <h2 className="eyebrow">CALENDAR</h2>
              </div>

              <div className="divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden">
                {demoEvents.map((ev) => (
                  <div
                    key={ev.id}
                    className="p-4 hover:bg-accent/40 transition-colors flex items-center justify-between gap-4"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="text-center w-12 shrink-0 py-1 bg-muted/50 border border-border rounded-md">
                        <div className="text-xs font-mono text-muted-foreground">
                          {ev.dateMonth}
                        </div>
                        <div className="text-lg font-bold font-mono text-foreground leading-none">
                          {ev.dateDay}
                        </div>
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-sm font-semibold text-foreground truncate">
                          {ev.title}
                        </h3>
                        <p className="text-xs text-muted-foreground truncate">
                          {ev.location}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono text-muted-foreground shrink-0 hidden sm:inline">
                      Upcoming
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* RECOMMENDED FOR YOU (WITH DIRECT DEMO ACTIONS) */}
            <section className="dash-section space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="eyebrow">RECOMMENDED FOR YOU</h2>
                <Link
                  to="/explore"
                  className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  View all <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {demoOpportunities.map((op) => (
                  <div
                    key={op.id}
                    className="bg-card border border-border rounded-xl p-4 flex flex-col justify-between space-y-4 hover:border-foreground/40 transition-colors group"
                  >
                    <div className="space-y-3">
                      {/* Image STRICTLY INSIDE CARD */}
                      <div className="w-full h-36 rounded-lg overflow-hidden border border-border relative bg-muted">
                        <img
                          src={op.imageUrl}
                          alt={op.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <span className="absolute top-2 left-2 text-[0.65rem] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-background/90 text-foreground border border-border backdrop-blur-sm">
                          {op.category}
                        </span>
                        <span
                          className={`absolute top-2 right-2 text-[0.65rem] font-mono tracking-wider uppercase px-2 py-0.5 rounded border ${
                            op.urgency === "CRITICAL"
                              ? "bg-destructive text-destructive-foreground border-destructive"
                              : op.urgency === "URGENT"
                              ? "bg-amber-500/20 text-amber-500 border-amber-500/30"
                              : "bg-muted/90 text-muted-foreground border-border"
                          }`}
                        >
                          {op.urgency}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-foreground leading-snug line-clamp-2">
                        {op.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                        "{op.description}"
                      </p>
                    </div>

                    <div className="pt-3 border-t border-border/80 space-y-3">
                      <div className="flex items-center justify-between text-[0.75rem] font-mono text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="size-3" /> {op.district}
                        </span>
                        <span>{op.quantity}</span>
                      </div>

                      {/* Interactive Action Buttons */}
                      <div className="flex gap-2 pt-1">
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedDonateTarget({
                              title: op.title,
                              org: `${op.district} Relief Collective`,
                              category: op.category,
                            })
                          }
                          className="flex-1 py-1.5 px-3 bg-primary text-primary-foreground text-xs font-mono rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
                        >
                          <Heart className="size-3" /> Donate
                        </button>
                        <button
                          type="button"
                          onClick={() =>
                            setSelectedVolunteerTarget({
                              title: op.title,
                              org: `${op.district} Relief Collective`,
                              location: `${op.district}, Nepal`,
                            })
                          }
                          className="flex-1 py-1.5 px-3 border border-border bg-background text-foreground text-xs font-mono rounded-md hover:bg-accent transition-colors flex items-center justify-center gap-1"
                        >
                          <UserCheck className="size-3" /> Volunteer
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* MY DONATIONS */}
            <section className="dash-section space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <h2 className="eyebrow">MY DONATIONS</h2>
                <Link
                  to="/explore"
                  className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                >
                  View all <ArrowRight className="size-3" />
                </Link>
              </div>

              <div className="divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden">
                {userActivity.donationsList.map((d) => (
                  <div
                    key={d.id}
                    className="p-4 flex items-center justify-between gap-4 hover:bg-accent/40 transition-colors"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-[0.65rem] font-mono tracking-wider uppercase px-2 py-1 border border-border rounded bg-muted/50 text-foreground shrink-0">
                        {d.category}
                      </span>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-foreground truncate">
                          {d.organization}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {d.details}
                        </p>
                      </div>
                    </div>
                    <span className="text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0">
                      {d.status}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* VOLUNTEER APPLICATIONS */}
            {userActivity.volunteerList.length > 0 && (
              <section className="dash-section space-y-4">
                <div className="flex items-center justify-between border-b border-border pb-3">
                  <h2 className="eyebrow">VOLUNTEER APPLICATIONS</h2>
                  <Link
                    to="/volunteers"
                    className="text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors"
                  >
                    View all <ArrowRight className="size-3" />
                  </Link>
                </div>

                <div className="divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden">
                  {userActivity.volunteerList.map((v) => (
                    <div
                      key={v.id}
                      className="p-4 flex items-center justify-between gap-4 hover:bg-accent/40 transition-colors"
                    >
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-foreground truncate">
                          {v.title}
                        </h4>
                        <p className="text-xs text-muted-foreground truncate">
                          {v.organization}
                        </p>
                      </div>
                      <span className="text-xs font-mono px-2.5 py-1 rounded bg-sky-500/10 text-sky-500 border border-sky-500/20 shrink-0">
                        {v.status}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* RIGHT COLUMN: 5 COLUMNS */}
          <div className="lg:col-span-5 space-y-8">
            {/* COMMUNITY LEADERBOARD PREVIEW */}
            <section className="dash-section bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="space-y-2 border-b border-border pb-4">
                <span className="eyebrow">COMMUNITY LEADERBOARD</span>
                <h3 className="text-xl font-bold tracking-tight text-foreground">
                  People making the biggest difference.
                </h3>
              </div>

              <div className="space-y-3">
                {top5Leaderboard.map((item) => (
                  <div
                    key={item.id}
                    className={`p-3 rounded-lg border transition-all flex items-center justify-between gap-3 ${
                      item.isCurrentUser
                        ? "bg-accent/60 border-foreground/30 ring-1 ring-foreground/20"
                        : "bg-background/50 border-border hover:border-border/80"
                    }`}
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-xs font-mono text-muted-foreground w-5 text-center font-bold">
                        0{item.rank}
                      </span>
                      <img
                        src={item.avatarUrl}
                        alt={item.name}
                        className="size-8 rounded-full object-cover border border-border shrink-0"
                      />
                      <div className="min-w-0">
                        <div className="flex items-center gap-1.5">
                          <span className="text-sm font-bold text-foreground truncate">
                            {item.name}
                          </span>
                          {item.isCurrentUser && (
                            <span className="text-[0.65rem] font-mono px-1.5 py-0.2 rounded bg-foreground text-background font-semibold">
                              YOU
                            </span>
                          )}
                        </div>
                        <p className="text-[0.7rem] font-mono text-muted-foreground truncate">
                          {item.donationsCount} donations · {item.volunteerHours}h volunteer
                        </p>
                      </div>
                    </div>

                    <div className="text-right shrink-0">
                      <div className="text-sm font-bold font-mono text-foreground">
                        {item.impactScore.toLocaleString()}
                      </div>
                      <div className="text-[0.65rem] font-mono text-muted-foreground">
                        impact
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/leaderboard"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-mono border border-border py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors"
                >
                  View full leaderboard →
                </Link>
              </div>
            </section>

            {/* NEXT MILESTONE */}
            <section className="dash-section bg-card border border-border rounded-xl p-6 space-y-6">
              <div className="space-y-2 border-b border-border pb-4">
                <span className="eyebrow">NEXT MILESTONE</span>
                <div className="flex items-baseline justify-between">
                  <h3 className="text-lg font-bold text-foreground">
                    {currentImpact.toLocaleString()} Impact Score
                  </h3>
                  <span className="text-xs font-mono text-muted-foreground">
                    Goal: {nextMilestone}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-muted-foreground">Progress</span>
                  <span className="font-bold text-foreground">{progressPercent}%</span>
                </div>
                <div className="h-1.5 w-full bg-muted rounded-full overflow-hidden">
                  <div
                    ref={milestoneProgressRef}
                    className="h-full bg-foreground rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {Math.max(0, nextMilestone - currentImpact)} more impact points to reach Community Champion.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/explore"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs font-mono border border-border py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors"
                >
                  Find a way to help →
                </Link>
              </div>
            </section>
          </div>
        </div>
      </main>

      <SiteFooter />

      {/* Interactive Action Modals */}
      <DonateModal
        isOpen={!!selectedDonateTarget}
        onClose={() => setSelectedDonateTarget(null)}
        initialTitle={selectedDonateTarget?.title}
        initialOrg={selectedDonateTarget?.org}
        initialCategory={selectedDonateTarget?.category}
      />

      <VolunteerModal
        isOpen={!!selectedVolunteerTarget}
        onClose={() => setSelectedVolunteerTarget(null)}
        initialTitle={selectedVolunteerTarget?.title}
        initialOrg={selectedVolunteerTarget?.org}
        initialLocation={selectedVolunteerTarget?.location}
      />
    </div>
  );
}
