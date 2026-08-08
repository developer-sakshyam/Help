import { createFileRoute } from "@tanstack/react-router";
import { HeroScrollExpand } from "@/components/landing/hero-scroll-expand";
import {
  CampaignsSection,
  CategoriesSection,
  ClosingSection,
  FaqSection,
  ImpactSection,
  MissionSection,
  NgoSection,
  OpportunitiesSection,
  StatsSection,
  TestimonialsSection,
} from "@/components/landing/sections";
import { SiteFooter } from "@/components/site/site-footer";

const title = "Help.com — Nepal's humanitarian coordination platform";
const description =
  "One platform connecting donors, volunteers, NGOs, organizations, hospitals, and communities across Nepal.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <>
      <HeroScrollExpand />
      <main>
        <MissionSection />
        <StatsSection />
        <CategoriesSection />
        <OpportunitiesSection />
        <NgoSection />
        <CampaignsSection />
        <ImpactSection />
        <TestimonialsSection />
        <FaqSection />
        <ClosingSection />
      </main>
      <SiteFooter />
    </>
  );
}
