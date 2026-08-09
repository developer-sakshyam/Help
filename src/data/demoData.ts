export interface DemoUserProfile {
  id: string;
  name: string;
  email: string;
  role: string;
  bloodGroup: string;
  location: string;
  impactScore: number;
  nextMilestone: number;
  milestoneTitle: string;
  donationsCount: number;
  savedOpportunitiesCount: number;
  openNeedsNearCount: number;
  volunteerHours: number;
  peopleHelped: number;
  avatarUrl: string;
  isCurrentUser?: boolean;
}

export interface DemoNotification {
  id: string;
  title: string;
  message: string;
  date: string;
  unread?: boolean;
}

export interface DemoEvent {
  id: string;
  dateDay: string;
  dateMonth: string;
  title: string;
  location: string;
}

export interface DemoOpportunityCard {
  id: string;
  category: string;
  urgency: "CRITICAL" | "URGENT" | "OPEN";
  title: string;
  description: string;
  district: string;
  quantity: string;
  distance: string;
  imageUrl: string;
}

export interface DemoDonationItem {
  id: string;
  category: string;
  organization: string;
  details: string;
  status: "Completed" | "In Progress";
  date?: string;
}

export interface LeaderboardEntry {
  rank: number;
  id: string;
  name: string;
  location: string;
  impactScore: number;
  donationsCount: number;
  volunteerHours: number;
  peopleHelped: number;
  role: "Donor" | "Volunteer" | "Donor & Volunteer";
  avatarUrl: string;
  isCurrentUser?: boolean;
}

export const demoUser: DemoUserProfile = {
  id: "user-admin",
  name: "Admin",
  email: "admin@gmail.com",
  role: "Donor & Volunteer",
  bloodGroup: "B+",
  location: "Jhapa, Nepal",
  impactScore: 1280,
  nextMilestone: 1500,
  milestoneTitle: "Community Champion",
  donationsCount: 24,
  savedOpportunitiesCount: 6,
  openNeedsNearCount: 13,
  volunteerHours: 86,
  peopleHelped: 143,
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
  isCurrentUser: true,
};

export const demoNotifications: DemoNotification[] = [
  {
    id: "notif-1",
    title: "Welcome to Help.com",
    message:
      "Your contributions are helping connect essential resources with people who need them.",
    date: "9 AUG",
    unread: true,
  },
  {
    id: "notif-2",
    title: "Donation Recorded",
    message: "Your food donation was successfully recorded.",
    date: "8 AUG",
  },
  {
    id: "notif-3",
    title: "New Opportunity Near You",
    message: "New volunteer opportunity near Jhapa.",
    date: "7 AUG",
  },
  {
    id: "notif-4",
    title: "Impact Milestone Update",
    message: "Your impact score increased by 120 points.",
    date: "5 AUG",
  },
];

export const demoEvents: DemoEvent[] = [
  {
    id: "event-1",
    dateDay: "11",
    dateMonth: "AUG",
    title: "Kathmandu Mega Blood Drive",
    location: "Bir Hospital, Kathmandu",
  },
  {
    id: "event-2",
    dateDay: "16",
    dateMonth: "AUG",
    title: "Pokhara Health Camp",
    location: "Pokhara-17, Kaski",
  },
  {
    id: "event-3",
    dateDay: "19",
    dateMonth: "AUG",
    title: "Winter Kit Packing Day",
    location: "Sahara Nepal Warehouse",
  },
  {
    id: "event-4",
    dateDay: "24",
    dateMonth: "AUG",
    title: "Library Setup — Janakpur",
    location: "Janakpur-6, Dhanusha",
  },
  {
    id: "event-5",
    dateDay: "28",
    dateMonth: "AUG",
    title: "Volunteer Orientation",
    location: "Online",
  },
];

export const demoOpportunities: DemoOpportunityCard[] = [
  {
    id: "rec-1",
    category: "SHELTER",
    urgency: "CRITICAL",
    title: "Temporary shelter kits after landslide",
    description:
      "Tarpaulin, rope and CGI sheet kits for 60 families displaced by monsoon landslides.",
    district: "Sindhupalchok",
    quantity: "60 kits",
    distance: "68 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-2",
    category: "FOOD",
    urgency: "URGENT",
    title: "Kathmandu Emergency Rice Rations",
    description:
      "Grain parcels and dry rations for vulnerable households following river overflow.",
    district: "Kathmandu",
    quantity: "120 packages",
    distance: "12 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-3",
    category: "MEDICAL",
    urgency: "URGENT",
    title: "Pediatric Care & Hygiene Supplies",
    description:
      "First-aid packs, essential medicines, and clean water tablets for rural health outpost.",
    district: "Jhapa",
    quantity: "45 packages",
    distance: "18 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "rec-4",
    category: "CLOTHING",
    urgency: "OPEN",
    title: "Winter Blankets for High Altitude Ward",
    description:
      "Warm woolen blankets and heavy fleece jackets for elderly residents.",
    district: "Mustang",
    quantity: "90 blankets",
    distance: "145 km away",
    imageUrl:
      "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
  },
];

export const demoDonations: DemoDonationItem[] = [
  {
    id: "don-1",
    category: "FOOD",
    organization: "Kathmandu Community Kitchen",
    details: "8 packages",
    status: "Completed",
  },
  {
    id: "don-2",
    category: "CLOTHING",
    organization: "Sahara Nepal",
    details: "12 winter clothes",
    status: "Completed",
  },
  {
    id: "don-3",
    category: "BLOOD",
    organization: "Bir Hospital",
    details: "B+ donation",
    status: "Completed",
  },
  {
    id: "don-4",
    category: "MEDICAL",
    organization: "Community Health Initiative",
    details: "Medical supplies",
    status: "Completed",
  },
];

export const demoLeaderboard: LeaderboardEntry[] = [
  {
    rank: 1,
    id: "lead-1",
    name: "Aayush Sharma",
    location: "Kathmandu",
    impactScore: 2840,
    donationsCount: 42,
    volunteerHours: 124,
    peopleHelped: 218,
    role: "Volunteer",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 2,
    id: "lead-2",
    name: "Srijana Thapa",
    location: "Pokhara",
    impactScore: 2510,
    donationsCount: 38,
    volunteerHours: 108,
    peopleHelped: 194,
    role: "Donor",
    avatarUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 3,
    id: "lead-3",
    name: "Rohan Gurung",
    location: "Chitwan",
    impactScore: 2230,
    donationsCount: 34,
    volunteerHours: 96,
    peopleHelped: 176,
    role: "Donor & Volunteer",
    avatarUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 4,
    id: "lead-4",
    name: "Admin",
    location: "Jhapa",
    impactScore: 1280,
    donationsCount: 24,
    volunteerHours: 86,
    peopleHelped: 143,
    role: "Donor & Volunteer",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80",
    isCurrentUser: true,
  },
  {
    rank: 5,
    id: "lead-5",
    name: "Nisha Karki",
    location: "Lalitpur",
    impactScore: 1150,
    donationsCount: 21,
    volunteerHours: 73,
    peopleHelped: 121,
    role: "Donor",
    avatarUrl:
      "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 6,
    id: "lead-6",
    name: "Prabin Shrestha",
    location: "Bhaktapur",
    impactScore: 980,
    donationsCount: 18,
    volunteerHours: 65,
    peopleHelped: 104,
    role: "Volunteer",
    avatarUrl:
      "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 7,
    id: "lead-7",
    name: "Anisha Rai",
    location: "Dharan",
    impactScore: 910,
    donationsCount: 17,
    volunteerHours: 61,
    peopleHelped: 96,
    role: "Donor",
    avatarUrl:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 8,
    id: "lead-8",
    name: "Bibek Tamang",
    location: "Hetauda",
    impactScore: 840,
    donationsCount: 15,
    volunteerHours: 58,
    peopleHelped: 88,
    role: "Volunteer",
    avatarUrl:
      "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 9,
    id: "lead-9",
    name: "Mina Gurung",
    location: "Butwal",
    impactScore: 760,
    donationsCount: 14,
    volunteerHours: 51,
    peopleHelped: 79,
    role: "Donor & Volunteer",
    avatarUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
  },
  {
    rank: 10,
    id: "lead-10",
    name: "Suman KC",
    location: "Nepalgunj",
    impactScore: 690,
    donationsCount: 12,
    volunteerHours: 47,
    peopleHelped: 71,
    role: "Donor",
    avatarUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&q=80",
  },
];
