/**
 * Landing page content.
 *
 * Presentation-only copy for the marketing surface. Live platform data
 * (campaigns, opportunities, NGOs) is fetched from the API layer once the
 * data foundation lands; nothing here is used as application state.
 */

export const NAV_LINKS = [
  { label: "Dashboard", to: "/dashboard" },
  { label: "Leaderboard", to: "/leaderboard" },
  { label: "Explore", to: "/explore" },
  { label: "Campaigns", to: "/campaigns" },
  { label: "Volunteer", to: "/volunteers" },
  { label: "NGOs", to: "/ngos" },
  { label: "About", to: "/about" },
] as const;

export const STATS = [
  {
    value: 48250,
    suffix: "+",
    label: "People reached",
    note: "Across 61 districts",
  },
  {
    value: 1840,
    suffix: "",
    label: "Verified organizations",
    note: "NGOs, hospitals, groups",
  },
  {
    value: 12960,
    suffix: "",
    label: "Active volunteers",
    note: "Skilled and on-ground",
  },
  {
    value: 7420,
    suffix: "",
    label: "Requests fulfilled",
    note: "Last 12 months",
  },
] as const;

export const CATEGORIES = [
  {
    name: "Blood",
    detail: "Emergency and scheduled donations",
    count: "312 open requests",
  },
  {
    name: "Food",
    detail: "Meals, rations, relief packages",
    count: "128 open requests",
  },
  {
    name: "Medical",
    detail: "Treatment support and supplies",
    count: "96 open requests",
  },
  {
    name: "Clothing",
    detail: "Winter wear and everyday clothes",
    count: "204 listings",
  },
  {
    name: "Books",
    detail: "School and library donations",
    count: "87 listings",
  },
  {
    name: "Furniture",
    detail: "Household and institutional",
    count: "43 listings",
  },
  {
    name: "Electronics",
    detail: "Devices for schools and clinics",
    count: "38 listings",
  },
  {
    name: "Shelter",
    detail: "Temporary housing and rebuilding",
    count: "21 projects",
  },
] as const;

export const OPPORTUNITIES = [
  {
    title: "Winter relief distribution",
    org: "Himalayan Aid Collective",
    location: "Jumla, Karnali",
    commitment: "3 days · On-site",
    slots: "12 of 20 volunteers",
    urgency: "Urgent",
  },
  {
    title: "Mobile health camp assistants",
    org: "Patan Community Hospital",
    location: "Lalitpur, Bagmati",
    commitment: "Weekends · On-site",
    slots: "8 of 15 volunteers",
    urgency: "Open",
  },
  {
    title: "Digital literacy mentors",
    org: "Sarathi Education Trust",
    location: "Remote",
    commitment: "4 hrs / week · Remote",
    slots: "22 of 30 volunteers",
    urgency: "Open",
  },
  {
    title: "Flood response logistics",
    org: "Koshi Relief Network",
    location: "Sunsari, Koshi",
    commitment: "1 week · On-site",
    slots: "5 of 18 volunteers",
    urgency: "Urgent",
  },
] as const;

export const NGOS = [
  {
    name: "Himalayan Aid Collective",
    focus: "Disaster relief",
    district: "Kathmandu",
    years: 14,
  },
  {
    name: "Sarathi Education Trust",
    focus: "Education access",
    district: "Pokhara",
    years: 9,
  },
  {
    name: "Koshi Relief Network",
    focus: "Flood response",
    district: "Biratnagar",
    years: 7,
  },
  {
    name: "Nari Shakti Nepal",
    focus: "Women's health",
    district: "Butwal",
    years: 11,
  },
  {
    name: "Annapurna Food Bank",
    focus: "Food security",
    district: "Kaski",
    years: 6,
  },
  {
    name: "Bagmati Blood Alliance",
    focus: "Blood donation",
    district: "Lalitpur",
    years: 12,
  },
] as const;

export const CAMPAIGNS = [
  {
    title: "Rebuild Dhading primary school",
    org: "Sarathi Education Trust",
    raised: 1_840_000,
    goal: 2_500_000,
    supporters: 412,
    days: 18,
  },
  {
    title: "Winter blankets for Humla households",
    org: "Himalayan Aid Collective",
    raised: 960_000,
    goal: 1_200_000,
    supporters: 288,
    days: 9,
  },
  {
    title: "Dialysis fund — Bharatpur",
    org: "Chitwan Care Foundation",
    raised: 2_310_000,
    goal: 3_000_000,
    supporters: 655,
    days: 27,
  },
] as const;

export const STORIES = [
  {
    headline: "A blood match found in 14 minutes",
    body: "A postpartum emergency in Nepalgunj was resolved after three O-negative donors within 6 km were notified simultaneously.",
    place: "Banke, Lumbini",
  },
  {
    headline: "31 tonnes of rice, tracked end to end",
    body: "Koshi Relief Network coordinated 40 volunteers and nine pickup points during the 2025 monsoon floods.",
    place: "Sunsari, Koshi",
  },
  {
    headline: "A classroom back in session",
    body: "412 supporters funded the rebuild of a landslide-damaged school; 186 students returned in a single term.",
    place: "Dhading, Bagmati",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "We stopped running relief through spreadsheets and phone trees. Everything now has an owner, a status, and a record.",
    name: "Sabina Gurung",
    role: "Programme Lead, Himalayan Aid Collective",
  },
  {
    quote:
      "The verification process is strict, and that is exactly why donors trust the requests we post.",
    name: "Dr. Anil Shrestha",
    role: "Patan Community Hospital",
  },
  {
    quote:
      "I found a weekend opportunity ten minutes from home that actually needed my skills.",
    name: "Prakash Adhikari",
    role: "Volunteer, Lalitpur",
  },
] as const;

export const FAQS = [
  {
    q: "How are organizations verified?",
    a: "Every NGO, hospital, and community group submits registration documents, a responsible contact, and proof of recent activity. Verification is reviewed manually and re-checked annually.",
  },
  {
    q: "Is Help.com free to use?",
    a: "Yes. Creating requests, listing opportunities, and volunteering are free for individuals and verified organizations.",
  },
  {
    q: "How do you handle emergency blood requests?",
    a: "Emergency requests are matched by blood group and proximity, then pushed to eligible donors immediately. Hospitals can escalate a request to district level within one tap.",
  },
  {
    q: "Where does the platform operate?",
    a: "All seven provinces of Nepal, with district and municipality level filtering down to ward where data is available.",
  },
  {
    q: "Can I donate items instead of money?",
    a: "Yes. Food, clothing, books, furniture, electronics, and medical supplies can be listed with condition, quantity, and pickup availability.",
  },
] as const;
