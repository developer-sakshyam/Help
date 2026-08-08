import { ArrowUpRight, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CAMPAIGNS, CATEGORIES, FAQS, NGOS, OPPORTUNITIES, STATS, STORIES, TESTIMONIALS } from "@/data/landing";
import { useCounter, useReveal } from "@/hooks/use-reveal";
import AccordionGallery from "@/components/AccordionGallery";
import { AnimatedButton } from "@/components/AnimatedButton";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nepal.jpg";

function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="max-w-2xl">
      <p className="eyebrow reveal-init">{eyebrow}</p>
      <h2 className="reveal-init mt-4 text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold tracking-tight">
        {title}
      </h2>
      {lead ? (
        <p className="reveal-init mt-4 text-[0.975rem] leading-relaxed text-muted-foreground">
          {lead}
        </p>
      ) : null}
    </div>
  );
}

export function MissionSection() {
  const ref = useReveal<HTMLElement>();
  const points = [
    "Every request has a verified owner, a status, and an audit trail.",
    "Matching is geographic first — the nearest capable helper wins.",
    "Organizations keep their own workflows; the platform keeps the record.",
  ];

  return (
    <section ref={ref} className="shell py-24 md:py-32">
      <div className="grid gap-14 md:grid-cols-[0.9fr_1.1fr]">
        <SectionHeader
          eyebrow="Our mission"
          title="Coordination is the hard part. We built the layer that handles it."
        />
        <div>
          <p className="reveal-init text-lg leading-relaxed">
            Nepal is not short of generosity. It is short of coordination — of knowing who needs
            what, where, and who is already on the way. Help.com turns scattered phone calls,
            spreadsheets, and group chats into one accountable system.
          </p>
          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="reveal-init flex gap-3 text-[0.95rem] text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-brand" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, suffix, label, note }: (typeof STATS)[number]) {
  const counterRef = useCounter(value);
  return (
    <div className="reveal-init border-t border-border pt-6">
      <p className="font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-none">
        <span ref={counterRef}>0</span>
        {suffix}
      </p>
      <p className="mt-3 text-sm font-medium">{label}</p>
      <p className="mt-1 text-xs text-muted-foreground">{note}</p>
    </div>
  );
}

export function StatsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-border bg-surface">
      <div className="shell py-20">
        <p className="eyebrow reveal-init">Platform statistics</p>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function CategoriesSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="shell py-24 md:py-32">
      <div className="flex items-start justify-between gap-6">
        <SectionHeader
          eyebrow="WHAT WE SUPPORT"
          title="One platform. Many ways to help."
          lead=""
        />
        <div className="reveal-init">
          <Button asChild>
            <a href="/explore">Explore all →</a>
          </Button>
        </div>
      </div>

      <div className="mt-12 reveal-init">
        <AccordionGallery
          items={[
            {
              title: 'Blood',
              indexLabel: '01',
              description: 'Connect donors with people who urgently need blood.',
              src: heroImage,
              alt: 'Blood donation',
            },
            {
              title: 'Food',
              indexLabel: '02',
              description: 'Put surplus food where it can make a difference.',
              src: heroImage,
              alt: 'Food distribution',
            },
            {
              title: 'Clothing',
              indexLabel: '03',
              description: 'Give useful clothing a second life.',
              src: heroImage,
              alt: 'Clothing donation',
            },
            {
              title: 'Volunteers',
              indexLabel: '04',
              description: "Find people ready to give their time and skills.",
              src: heroImage,
              alt: 'Community volunteers',
            },
          ]}
          trigger="hover"
          orientation="horizontal"
          defaultIndex={0}
          showLabels={true}
          grayscale={true}
          parallax={0.35}
          tilt={4}
          duration={0.65}
          ease="power3.out"
        />
      </div>
    </section>
  );
}

export function OpportunitiesSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-border bg-surface">
      <div className="shell py-24 md:py-32">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeader
            eyebrow="Volunteer opportunities"
            title="Work that matches your skills and your map."
          />
          <a href="/explore" className="reveal-init nav-link text-sm">
            View all opportunities
          </a>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2">
          {OPPORTUNITIES.map((item) => (
            <article key={item.title} className="reveal-init bg-card p-6">
              <div className="flex items-center gap-2">
                <span
                  className={
                    item.urgency === "Urgent"
                      ? "rounded-sm bg-brand-soft px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-brand"
                      : "rounded-sm bg-muted px-2 py-0.5 font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground"
                  }
                >
                  {item.urgency}
                </span>
                <span className="text-xs text-muted-foreground">{item.location}</span>
              </div>
              <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{item.org}</p>
              <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-border pt-4 text-xs">
                <div>
                  <dt className="text-muted-foreground">Commitment</dt>
                  <dd className="mt-0.5 font-medium">{item.commitment}</dd>
                </div>
                <div>
                  <dt className="text-muted-foreground">Filled</dt>
                  <dd className="mt-0.5 font-medium">{item.slots}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function NgoSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="shell py-24 md:py-32">
      <SectionHeader
        eyebrow="Featured organizations"
        title="Verified NGOs, hospitals, and community groups."
        lead="Registration documents, a responsible contact, and recent activity are reviewed before any organization can publish."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {NGOS.map((ngo) => (
          <div key={ngo.name} className="reveal-init bg-card p-6">
            <div className="flex items-center gap-3">
              <span className="grid size-9 shrink-0 place-items-center rounded-md border border-border font-display text-lg">
                {ngo.name.charAt(0)}
              </span>
              <div className="min-w-0">
                <h3 className="truncate text-sm font-semibold">{ngo.name}</h3>
                <p className="text-xs text-muted-foreground">{ngo.focus}</p>
              </div>
            </div>
            <p className="mt-6 flex items-center justify-between text-xs text-muted-foreground">
              <span>{ngo.district}</span>
              <span className="font-mono">{ngo.years} yrs active</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

const npr = (value: number) => `NPR ${(value / 100000).toFixed(1)}L`;

export function CampaignsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-border bg-surface">
      <div className="shell py-24 md:py-32">
        <SectionHeader eyebrow="Featured campaigns" title="Funding with a visible finish line." />
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {CAMPAIGNS.map((campaign) => {
            const pct = Math.round((campaign.raised / campaign.goal) * 100);
            return (
              <article
                key={campaign.title}
                className="reveal-init flex flex-col rounded-lg border border-border bg-card p-6"
              >
                <h3 className="text-lg font-semibold leading-snug tracking-tight">
                  {campaign.title}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{campaign.org}</p>

                <div className="mt-8">
                  <div className="flex items-baseline justify-between text-sm">
                    <span className="font-medium">{npr(campaign.raised)}</span>
                    <span className="text-muted-foreground">of {npr(campaign.goal)}</span>
                  </div>
                  <div className="mt-3 h-1 w-full overflow-hidden rounded-full bg-muted">
                    <div className="h-full rounded-full bg-brand" style={{ width: `${pct}%` }} />
                  </div>
                  <p className="mt-3 flex justify-between font-mono text-[0.7rem] uppercase tracking-widest text-muted-foreground">
                    <span>{campaign.supporters} supporters</span>
                    <span>{campaign.days} days left</span>
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ImpactSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="shell py-24 md:py-32">
      <SectionHeader
        eyebrow="Community impact"
        title="Success stories from across the seven provinces."
      />
      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {STORIES.map((story) => (
          <article key={story.headline} className="reveal-init bg-card p-7">
            <p className="eyebrow">{story.place}</p>
            <h3 className="mt-4 font-display text-2xl leading-tight">{story.headline}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{story.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialsSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-y border-border bg-ink text-ink-foreground">
      <div className="shell py-24 md:py-32">
        <p className="eyebrow reveal-init text-ink-foreground/50">Testimonials</p>
        <div className="mt-12 grid gap-12 md:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <figure key={testimonial.name} className="reveal-init">
              <blockquote className="font-display text-[1.6rem] leading-tight">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-6 border-t border-ink-foreground/15 pt-4 text-sm">
                <span className="font-medium">{testimonial.name}</span>
                <span className="mt-0.5 block text-ink-foreground/60">{testimonial.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="shell py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-[0.8fr_1.2fr]">
        <SectionHeader eyebrow="FAQ" title="Questions we get asked most." />
        <Accordion type="single" collapsible className="reveal-init w-full">
          {FAQS.map((faq) => (
            <AccordionItem key={faq.q} value={faq.q}>
              <AccordionTrigger className="text-left text-[0.95rem] font-medium">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

export function ClosingSection() {
  const ref = useReveal<HTMLElement>();
  return (
    <section ref={ref} className="border-t border-border bg-surface">
      <div className="shell flex flex-col items-center py-24 text-center md:py-32">
        <h2 className="reveal-init display max-w-[18ch] text-[clamp(2rem,5vw,3.6rem)]">
          Start where you are. Help who is nearest.
        </h2>
        <div className="reveal-init mt-10 flex flex-wrap justify-center gap-3">
          <AnimatedButton asChild>
            <a href="/signup" className="rounded-md text-sm font-medium text-brand-foreground">
              Create an account
            </a>
          </AnimatedButton>
          <AnimatedButton asChild>
            <a href="/explore" className="rounded-md border border-border-strong text-sm font-medium transition-colors hover:bg-background">
              Explore Opportunities
            </a>
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
}
