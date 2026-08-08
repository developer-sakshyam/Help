export type CampaignCategory =
  | "Blood"
  | "Food"
  | "Clothing"
  | "Medical"
  | "Environment"
  | "Education"
  | "Disaster Relief"
  | "Volunteer";

export type CampaignStatus = "Active" | "Upcoming" | "Completed";
export type CampaignUrgency = "Normal" | "Important" | "Urgent";

export interface Campaign {
  id: string;
  title: string;
  image?: string;
  organization: string;
  category: CampaignCategory;
  location: string;
  district: string;
  province: string;
  description: string;
  goal: string;
  progressPercentage: number;
  participantsCount: number;
  startDate: string;
  endDate: string;
  status: CampaignStatus;
  urgency: CampaignUrgency;
  volunteerNeeded: boolean;
  donationsNeeded: boolean;
  requirements: string[];
}

export const campaignsDemoData: Campaign[] = [
  {
    id: "camp-001",
    title: "Emergency Winter Blanket & Warm Clothing Drive",
    organization: "Himalayan Hope Initiative",
    category: "Clothing",
    location: "Manang & Mustang Districts",
    district: "Manang",
    province: "Gandaki",
    description:
      "Collecting and distributing 1,500 heavy winter blankets and thermal jackets for vulnerable families before severe freezing snowfall.",
    goal: "1,500 Warm Clothing Kits",
    progressPercentage: 78,
    participantsCount: 340,
    startDate: "2026-10-15",
    endDate: "2026-11-30",
    status: "Active",
    urgency: "Urgent",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "New or clean heavy winter jackets (all sizes)",
      "Woolen blankets & thermals",
      "Sorting & packing volunteers at Pokhara warehouse",
    ],
  },
  {
    id: "camp-002",
    title: "Emergency Blood Donor Camp — Teaching Hospital",
    organization: "Nepal Red Cross Society — Kaski",
    category: "Blood",
    location: "Prithvi Chowk, Pokhara",
    district: "Kaski",
    province: "Gandaki",
    description:
      "Urgent drive to collect 250 units of O negative, A positive, and B negative blood to replenish regional hospital reserves.",
    goal: "250 Units Blood",
    progressPercentage: 62,
    participantsCount: 155,
    startDate: "2026-08-10",
    endDate: "2026-08-15",
    status: "Active",
    urgency: "Urgent",
    volunteerNeeded: true,
    donationsNeeded: false,
    requirements: [
      "Healthy donors aged 18-55, weight > 45kg",
      "Volunteer medical assistants for donor registration",
      "Refreshments & juice stall helpers",
    ],
  },
  {
    id: "camp-003",
    title: "Kathmandu Valley Monsoon Flood Relief Ration Distribution",
    organization: "Kathmandu Valley Food Relief Foundation",
    category: "Food",
    location: "Balkhu & Balkumari Settlements",
    district: "Kathmandu",
    province: "Bagmati",
    description:
      "Providing 10-day emergency food rations (rice, lentils, oil, salt, clean water tablets) to families affected by Bagmati river overflow.",
    goal: "800 Family Ration Packs",
    progressPercentage: 85,
    participantsCount: 520,
    startDate: "2026-08-01",
    endDate: "2026-08-25",
    status: "Active",
    urgency: "Urgent",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Dry food packs (25kg Rice bags, Dal, Cooking Oil)",
      "Distribution truck drivers & loading volunteers",
      "Water purification drops & hygiene bars",
    ],
  },
  {
    id: "camp-004",
    title: "Remote Health & Dental Clinic — Solukhumbu",
    organization: "Medical Aid & Rural Health Nepal",
    category: "Medical",
    location: "Salleri & Surke Villages",
    district: "Solukhumbu",
    province: "Koshi",
    description:
      "Deploying 12 volunteer doctors and nurses to provide free health checkups, basic surgeries, and prescription medicines to 1,200 rural villagers.",
    goal: "1,200 Patients Treated",
    progressPercentage: 45,
    participantsCount: 92,
    startDate: "2026-09-01",
    endDate: "2026-09-20",
    status: "Active",
    urgency: "Important",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Volunteer general physicians & nurses",
      "Essential pharmaceuticals & diagnostic kits",
      "Local translators (Sherpa/Nepali)",
    ],
  },
  {
    id: "camp-005",
    title: "Clean Bagmati River & Urban Riverbank Restoration",
    organization: "Youth Green Action Nepal",
    category: "Environment",
    location: "Pashupati Corridor, Kathmandu",
    district: "Kathmandu",
    province: "Bagmati",
    description:
      "Mobilizing 500 youth volunteers for Saturday riverbank waste collection, plastic sorting, and bio-fencing along the riverbank.",
    goal: "500 Volunteers Registered",
    progressPercentage: 90,
    participantsCount: 450,
    startDate: "2026-07-20",
    endDate: "2026-08-30",
    status: "Active",
    urgency: "Normal",
    volunteerNeeded: true,
    donationsNeeded: false,
    requirements: [
      "Heavy duty gloves & boots",
      "Biodegradable trash bags & pickers",
      "Volunteer coordinators for 5 river sectors",
    ],
  },
  {
    id: "camp-006",
    title: "Solar Lights & Learning Kits for Mountain Schools",
    organization: "Himalayan Literacy Trust",
    category: "Education",
    location: "Simikot & Namkha",
    district: "Humla",
    province: "Karnali",
    description:
      "Equipping 15 off-grid mountain primary schools with rooftop solar battery systems, LED lights, and 1,000 nepali storybooks.",
    goal: "15 Schools Powered",
    progressPercentage: 35,
    participantsCount: 68,
    startDate: "2026-09-10",
    endDate: "2026-10-25",
    status: "Upcoming",
    urgency: "Important",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Solar kit sponsorship (500W systems)",
      "Storybooks & stationery sets",
      "Electrical installation volunteers",
    ],
  },
  {
    id: "camp-007",
    title: "Surplus Food Rescue & Daily Meal Drive",
    organization: "Kathmandu Food Bank",
    category: "Food",
    location: "Kalimati & Koteshwor Hubs",
    district: "Kathmandu",
    province: "Bagmati",
    description:
      "Rescuing usable fresh fruits, vegetables, and grain surplus from wholesale markets every morning to feed 600 shelter residents.",
    goal: "600 Daily Meals Provided",
    progressPercentage: 94,
    participantsCount: 210,
    startDate: "2026-06-01",
    endDate: "2026-12-31",
    status: "Active",
    urgency: "Normal",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Morning collection van volunteers (6:00 AM - 8:30 AM)",
      "Food quality inspecting helpers",
      "Storage crates & cooling box donations",
    ],
  },
  {
    id: "camp-008",
    title: "Terai Monsoon Emergency Preparedness & Sandbag Wall",
    organization: "Terai Disaster Preparedness Group",
    category: "Disaster Relief",
    location: "Southern Morang Riverbanks",
    district: "Morang",
    province: "Koshi",
    description:
      "Constructing temporary sandbag river reinforcements along vulnerable Koshi riverbank villages before peak monsoon flood levels.",
    goal: "5,000 Sandbags Placed",
    progressPercentage: 55,
    participantsCount: 180,
    startDate: "2026-08-05",
    endDate: "2026-08-20",
    status: "Active",
    urgency: "Urgent",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Polypropylene sandbags & shovels",
      "Physical labor volunteers for sandbag filling",
      "Safety life vests & boots",
    ],
  },
  {
    id: "camp-009",
    title: "Community Animal Vaccination & Stray Feeding Program",
    organization: "Animal Haven Nepal",
    category: "Volunteer",
    location: "Bharatpur & Ratnanagar",
    district: "Chitwan",
    province: "Bagmati",
    description:
      "Vaccinating 400 stray dogs against rabies, attaching reflective collars for night safety, and feeding community animals.",
    goal: "400 Stray Dogs Vaccinated",
    progressPercentage: 70,
    participantsCount: 115,
    startDate: "2026-08-12",
    endDate: "2026-09-05",
    status: "Active",
    urgency: "Normal",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Reflective dog collars & anti-rabies doses",
      "Volunteer animal catchers & dog handlers",
      "Dry kibble & food bowls",
    ],
  },
  {
    id: "camp-010",
    title: "Dignified Hygiene Kits & Health Education for Girls",
    organization: "Karnali Women Empowerment Network",
    category: "Medical",
    location: "Surkhet & Dailekh Schools",
    district: "Surkhet",
    province: "Karnali",
    description:
      "Distributing 2,000 eco-friendly reusable menstrual hygiene kits and holding health education sessions across 20 secondary schools.",
    goal: "2,000 Kits Distributed",
    progressPercentage: 50,
    participantsCount: 140,
    startDate: "2026-09-01",
    endDate: "2026-10-15",
    status: "Upcoming",
    urgency: "Important",
    volunteerNeeded: true,
    donationsNeeded: true,
    requirements: [
      "Reusable cotton pad manufacturing supplies",
      "Female health educators & mentors",
      "Hygiene soap & pouch kit donations",
    ],
  },
];
