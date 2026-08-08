import { useEffect, useRef, useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Heart,
  ShieldCheck,
  Users,
} from "lucide-react";
import { AnimatedButton } from "@/components/AnimatedButton";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteNav } from "@/components/site/site-nav";
import { gsap, prefersReducedMotion, registerGsap } from "@/lib/gsap";
import heroImage from "@/assets/hero-nepal.jpg";
import "./about.css";

const processSteps = [
  {
    number: "01",
    title: "Find",
    description:
      "Discover a donation request, blood need, volunteer opportunity, or community project that matches your time and resources.",
  },
  {
    number: "02",
    title: "Connect",
    description:
      "Reach out to the person, receiver, NGO, or organization behind the request with clear next steps.",
  },
  {
    number: "03",
    title: "Contribute",
    description:
      "Donate resources, give blood, volunteer your time, or support a verified need with confidence.",
  },
  {
    number: "04",
    title: "Impact",
    description:
      "Your contribution reaches a real need and becomes part of a practical community outcome.",
  },
] as const;

const connectionItems = [
  {
    title: "Donors",
    description:
      "Share food, blood, supplies, and volunteer support with the people who need it most.",
  },
  {
    title: "Receivers",
    description:
      "Find support from verified donors, volunteers, and organizations.",
  },
  {
    title: "Volunteers",
    description:
      "Discover meaningful ways to help the community with time, skills, and care.",
  },
  {
    title: "NGOs & Organizations",
    description:
      "Coordinate donations, manage requests, and connect with on-the-ground helpers.",
  },
] as const;

const trustPoints = [
  {
    icon: ShieldCheck,
    title: "Verification",
    detail:
      "Clear guidance for users, NGOs, and organizations so support reaches trusted requests.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation",
    detail:
      "Designed to make contributions easier to track and feel more reliable.",
  },
  {
    icon: Users,
    title: "Reporting",
    detail: "Simple tools to raise concerns and keep the community safer.",
  },
  {
    icon: Heart,
    title: "Moderation",
    detail:
      "A trusted platform needs safeguards for people, requests, and participation.",
  },
] as const;

const categories = [
  {
    id: "blood",
    label: "BLOOD",
    description: "Emergency blood connections",
    detail: "Find donors and recipients quickly when every moment matters.",
  },
  {
    id: "food",
    label: "FOOD",
    description: "Put useful food where it is needed",
    detail:
      "Match surplus supplies with families and shelters that can use them.",
  },
  {
    id: "clothing",
    label: "CLOTHING",
    description: "Give usable clothing another life",
    detail:
      "Support people in need with warm, practical clothing and essentials.",
  },
  {
    id: "medical",
    label: "MEDICAL",
    description: "Connect medical resources with people who need them",
    detail: "Share supplies, clinics, and care to keep communities safer.",
  },
  {
    id: "volunteers",
    label: "VOLUNTEERS",
    description: "Find opportunities to give your time",
    detail:
      "Discover meaningful ways to help through verified volunteer roles.",
  },
] as const;

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Help.com — About" },
      {
        name: "description",
        content:
          "About Help.com: connecting donors, volunteers, NGOs, and communities.",
      },
      { property: "og:title", content: "Help.com — About" },
      {
        property: "og:description",
        content:
          "About Help.com: connecting donors, volunteers, NGOs, and communities.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const problemRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    registerGsap();
    if (prefersReducedMotion()) return;
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      const heroTimeline = gsap.timeline();

      heroTimeline
        .from(".about-hero-media-inner", {
          clipPath: "inset(100% 0 0 0)",
          duration: 1,
          ease: "power3.out",
        })
        .from(
          ".about-hero-eyebrow",
          { opacity: 0, y: 24, duration: 0.55 },
          "-=0.75",
        )
        .from(
          ".about-hero-title span",
          { opacity: 0, y: 40, stagger: 0.08, duration: 0.75 },
          "-=0.7",
        )
        .from(
          ".about-hero-paragraph",
          { opacity: 0, y: 24, duration: 0.55 },
          "-=0.55",
        )
        .from(
          ".about-hero-actions",
          { opacity: 0, y: 24, duration: 0.55 },
          "-=0.4",
        )
        .from(
          ".about-hero-meta",
          { opacity: 0, y: 24, duration: 0.55 },
          "-=0.35",
        );

      const revealSection = (root: HTMLElement | null, targets: string) => {
        if (!root) return;
        gsap.from(targets, {
          scrollTrigger: {
            trigger: root,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
          opacity: 0,
          y: 24,
          duration: 0.7,
          stagger: 0.1,
        });
      };

      revealSection(
        problemRef.current,
        ".about-problem-title span, .about-problem-divider, .about-problem-item",
      );
      revealSection(
        categoriesRef.current,
        ".about-category-row, .about-category-preview",
      );
      revealSection(
        timelineRef.current,
        ".about-timeline-step, .about-timeline-line",
      );
      revealSection(trustRef.current, ".about-trust-row");
      revealSection(ctaRef.current, ".about-final-panel");

      gsap.fromTo(
        ".about-timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          transformOrigin: "top center",
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 90%",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="about-page">
      <SiteNav />

      <main className="about-content">
        <section ref={heroRef} className="about-hero shell">
          <div className="about-hero-grid">
            <div className="about-hero-copy-area">
              <p className="eyebrow about-hero-eyebrow">ABOUT HELP.COM</p>
              <h1 className="about-hero-title">
                <span>Help should never</span>
                <span>be hard to find.</span>
              </h1>
              <p className="about-hero-paragraph">
                Help.com connects people who want to help with people who need
                it, through a modern humanitarian platform built for clarity,
                trust, and speed.
              </p>
              <div className="about-hero-actions">
                <AnimatedButton asChild>
                  <Link
                    to="/explore"
                    className="inline-flex items-center gap-2 rounded-md px-6 py-3"
                  >
                    Explore Help.com
                    <ArrowRight className="size-4" />
                  </Link>
                </AnimatedButton>
                <AnimatedButton asChild>
                  <Link
                    to="/get-started"
                    className="inline-flex rounded-md border border-border px-6 py-3 text-muted-foreground"
                  >
                    Get Started
                  </Link>
                </AnimatedButton>
              </div>
            </div>

            <div className="about-hero-media">
              <div className="about-hero-media-inner">
                <img
                  className="about-hero-img"
                  src={heroImage}
                  alt="Community volunteers working together in Nepal"
                  loading="eager"
                  width={1400}
                  height={980}
                />
              </div>
              <div className="about-hero-meta">
                <span>PEOPLE HELPING PEOPLE</span>
                <span>NEPAL / COMMUNITY</span>
              </div>
            </div>
          </div>
        </section>

        <section ref={problemRef} className="about-section about-problem shell">
          <div className="about-problem-grid">
            <div className="about-problem-copy">
              <p className="eyebrow">01 — THE PROBLEM</p>
              <h2 className="about-section-title about-problem-title">
                <span>People want to help.</span>
                <span>Finding where to help</span>
                <span>is the hard part.</span>
              </h2>
              <div className="about-problem-divider" />
            </div>
            <div className="about-problem-list">
              <div className="about-problem-item">
                <span className="about-problem-number">01</span>
                <p>Donors don’t know where help is needed most.</p>
              </div>
              <div className="about-problem-item">
                <span className="about-problem-number">02</span>
                <p>Receivers struggle to find reliable support.</p>
              </div>
              <div className="about-problem-item">
                <span className="about-problem-number">03</span>
                <p>
                  Organizations struggle to connect with volunteers and
                  resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          ref={categoriesRef}
          className="about-section about-categories shell"
        >
          <div className="about-section-head">
            <p className="eyebrow">WHAT HELP.COM CONNECTS</p>
            <h2 className="about-section-title">
              A single place for people, organizations, and support.
            </h2>
          </div>
          <CategoryGrid />
        </section>

        <section
          ref={timelineRef}
          className="about-section about-timeline shell"
        >
          <div className="about-section-head">
            <p className="eyebrow">HOW IT WORKS</p>
            <h2 className="about-section-title">From intention to impact.</h2>
          </div>
          <div className="about-timeline-layout">
            <div className="about-timeline-line" />
            {processSteps.map((step) => (
              <div key={step.number} className="about-timeline-step">
                <div className="about-timeline-marker">
                  <span>{step.number}</span>
                </div>
                <div className="about-timeline-body">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section ref={trustRef} className="about-section about-trust shell">
          <p className="eyebrow">TRUST MATTERS</p>
          <h2 className="about-section-title">
            Helping people means protecting them too.
          </h2>
          <div className="about-trust-list">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <button
                  key={point.title}
                  type="button"
                  className="about-trust-row"
                >
                  <div className="about-trust-row-index">0{index + 1}</div>
                  <div className="about-trust-row-main">
                    <div className="about-trust-row-heading">
                      <span>{point.title}</span>
                      <Icon className="size-4" />
                    </div>
                    <p>{point.detail}</p>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section ref={ctaRef} className="about-section about-final-cta shell">
          <div className="about-final-panel about-final-panel-center">
            <div className="about-final-copy">
              <p className="eyebrow">YOUR NEXT CONTRIBUTION COULD MATTER.</p>
              <h2>Make your next contribution count with Help.com.</h2>
            </div>
            <div className="about-final-actions">
              <AnimatedButton asChild>
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 rounded-md px-6 py-3"
                >
                  Explore
                </Link>
              </AnimatedButton>
              <AnimatedButton asChild>
                <Link
                  to="/get-started"
                  className="inline-flex rounded-md border border-border px-6 py-3 text-muted-foreground"
                >
                  Get Started
                </Link>
              </AnimatedButton>
            </div>
            <div className="about-final-decorative-line" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}

function CategoryGrid() {
  const [activeCategory, setActiveCategory] = useState<string>(
    categories[0].id,
  );
  const active =
    categories.find((item) => item.id === activeCategory) ?? categories[0];

  const hoverArrow = (event: React.MouseEvent<HTMLButtonElement>) => {
    const arrow = event.currentTarget.querySelector(".about-category-arrow");
    if (!arrow) return;
    gsap.to(arrow, {
      x: 6,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  const resetArrow = (event: React.MouseEvent<HTMLButtonElement>) => {
    const arrow = event.currentTarget.querySelector(".about-category-arrow");
    if (!arrow) return;
    gsap.to(arrow, {
      x: 0,
      duration: 0.2,
      ease: "power3.out",
    });
  };

  return (
    <div className="about-categories-grid">
      <div className="about-category-list">
        {categories.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`about-category-row ${item.id === activeCategory ? "active" : ""}`}
            onMouseEnter={(event) => {
              setActiveCategory(item.id);
              hoverArrow(event);
            }}
            onMouseLeave={resetArrow}
          >
            <div>
              <span>{item.label}</span>
              <p>{item.description}</p>
            </div>
            <span className="about-category-arrow">→</span>
          </button>
        ))}
      </div>

      <div className="about-category-preview">
        <div className="about-category-preview-image">
          <img
            src={heroImage}
            alt={active.label}
            loading="lazy"
            width={1200}
            height={900}
          />
        </div>
        <div className="about-category-preview-copy">
          <span className="eyebrow">{active.label}</span>
          <p>{active.detail}</p>
        </div>
      </div>
    </div>
  );
}
