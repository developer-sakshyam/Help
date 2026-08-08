export type OpportunityCategory =
  | "blood"
  | "food"
  | "clothing"
  | "medical"
  | "books"
  | "furniture"
  | "electronics"
  | "volunteers";

export type OpportunityStatus = "open" | "available" | "completed";
export type OpportunityUrgency = "urgent" | "normal";

export interface OpportunityLocation {
  province: string;
  district: string;
  city: string;
  lat: number;
  lng: number;
}

export interface Opportunity {
  id: string;
  category: OpportunityCategory;
  title: string;
  description: string;
  location: OpportunityLocation;
  bloodGroup?: string;
  urgency: OpportunityUrgency;
  status: OpportunityStatus;
  organization: string;
  postedAt: string;
  tags: string[];
  actionLabel: string;
}

export const opportunities: Opportunity[] = [
  {
    id: "opp-001",
    category: "blood",
    title: "Urgent O+ Blood Needed",
    description:
      "A patient at Kathmandu Community Hospital needs an urgent O+ transfusion for surgery. Donors with this blood type are needed today.",
    location: { province: "Bagmati", district: "Kathmandu", city: "Kathmandu", lat: 27.7172, lng: 85.3240 },
    bloodGroup: "O+",
    urgency: "urgent",
    status: "open",
    organization: "Kathmandu Community Hospital",
    postedAt: "2026-08-08T08:30:00Z",
    tags: ["blood", "urgent", "O+", "hospital"],
    actionLabel: "Offer Help",
  },
  {
    id: "opp-002",
    category: "volunteers",
    title: "Community Cleanup in Lalitpur",
    description:
      "Join local volunteers to clear public spaces and restore shared gardens in Lalitpur. Tools and water are provided.",
    location: { province: "Bagmati", district: "Lalitpur", city: "Lalitpur", lat: 27.6634, lng: 85.3188 },
    urgency: "normal",
    status: "available",
    organization: "Lalitpur Green Network",
    postedAt: "2026-08-07T10:15:00Z",
    tags: ["volunteer", "cleanup", "community"],
    actionLabel: "Volunteer",
  },
  {
    id: "opp-003",
    category: "food",
    title: "Food Parcel Distribution",
    description:
      "Packaged food donations are needed for families in Bhaktapur after the recent monsoon shortages.",
    location: { province: "Bagmati", district: "Bhaktapur", city: "Bhaktapur", lat: 27.6717, lng: 85.4290 },
    urgency: "normal",
    status: "open",
    organization: "Bhaktapur Relief Collective",
    postedAt: "2026-08-06T14:00:00Z",
    tags: ["food", "donation", "Bhaktapur"],
    actionLabel: "Donate",
  },
  {
    id: "opp-004",
    category: "medical",
    title: "Mobile Health Camp in Pokhara",
    description:
      "A free health clinic is being organized for Pokhara residents. Medical professionals and supplies are needed.",
    location: { province: "Gandaki", district: "Kaski", city: "Pokhara", lat: 28.2096, lng: 83.9856 },
    urgency: "normal",
    status: "available",
    organization: "Pokhara Health Partnership",
    postedAt: "2026-08-05T09:20:00Z",
    tags: ["medical", "clinic", "Pokhara"],
    actionLabel: "Join",
  },
  {
    id: "opp-005",
    category: "clothing",
    title: "Warm Clothing for Mountain Families",
    description:
      "Collect and deliver warm jackets and blankets to families living in high-altitude communities near Jomsom.",
    location: { province: "Gandaki", district: "Mustang", city: "Jomsom", lat: 28.7769, lng: 83.7298 },
    urgency: "urgent",
    status: "open",
    organization: "Himalayan Care Network",
    postedAt: "2026-08-07T18:05:00Z",
    tags: ["clothing", "winter", "urgent"],
    actionLabel: "Donate",
  },
  {
    id: "opp-006",
    category: "books",
    title: "School Books for Chitwan Children",
    description:
      "New and gently used textbooks are requested for primary schools in Chitwan to support the new school term.",
    location: { province: "Bagmati", district: "Chitwan", city: "Bharatpur", lat: 27.6792, lng: 84.4286 },
    urgency: "normal",
    status: "open",
    organization: "Chitwan Learning Collective",
    postedAt: "2026-08-01T13:00:00Z",
    tags: ["books", "education", "schools"],
    actionLabel: "Donate",
  },
  {
    id: "opp-007",
    category: "furniture",
    title: "Furniture Drive for Local Shelter",
    description:
      "Help furnish a shelter in Birgunj with beds, tables, and storage for families recovering from recent floods.",
    location: { province: "Madhesh", district: "Parsa", city: "Birgunj", lat: 27.0000, lng: 84.8667 },
    urgency: "normal",
    status: "available",
    organization: "Parsa Community Support",
    postedAt: "2026-08-02T11:30:00Z",
    tags: ["furniture", "shelter", "support"],
    actionLabel: "Offer Help",
  },
  {
    id: "opp-008",
    category: "electronics",
    title: "Tablet Donations for Remote Schools",
    description:
      "Remote learning centers in Jhapa need tablets and power banks for students with limited access to classrooms.",
    location: { province: "Koshi", district: "Jhapa", city: "Birtamod", lat: 26.4833, lng: 88.0667 },
    urgency: "normal",
    status: "open",
    organization: "Jhapa Digital Access",
    postedAt: "2026-08-04T15:45:00Z",
    tags: ["electronics", "education", "technology"],
    actionLabel: "Donate",
  },
  {
    id: "opp-009",
    category: "blood",
    title: "A- Blood Drive for Emergency Ward",
    description:
      "A local emergency ward in Dharan is asking for A- donors to support multiple surgeries this week.",
    location: { province: "Koshi", district: "Sunsari", city: "Dharan", lat: 26.8120, lng: 87.2838 },
    bloodGroup: "A-",
    urgency: "urgent",
    status: "open",
    organization: "Dharan Emergency Network",
    postedAt: "2026-08-08T06:45:00Z",
    tags: ["blood", "urgent", "A-"],
    actionLabel: "Offer Help",
  },
  {
    id: "opp-010",
    category: "volunteers",
    title: "Library Restoration Volunteers",
    description:
      "Volunteers are needed to clean, organize, and reopen a community library in Nepalgunj.",
    location: { province: "Lumbini", district: "Banke", city: "Nepalgunj", lat: 28.0588, lng: 81.6174 },
    urgency: "normal",
    status: "available",
    organization: "Banke Book Circle",
    postedAt: "2026-08-03T12:10:00Z",
    tags: ["volunteer", "library", "community"],
    actionLabel: "Volunteer",
  },
  {
    id: "opp-011",
    category: "medical",
    title: "Medicine Refill Support for Rural Clinic",
    description:
      "A rural clinic in Kailali needs funding and transport support for essential medicines.",
    location: { province: "Sudurpashchim", district: "Kailali", city: "Dhangadhi", lat: 28.6983, lng: 80.5996 },
    urgency: "urgent",
    status: "open",
    organization: "Kailali Health Collective",
    postedAt: "2026-08-07T08:00:00Z",
    tags: ["medical", "urgent", "clinic"],
    actionLabel: "Donate",
  },
  {
    id: "opp-012",
    category: "food",
    title: "Community Kitchen Support in Biratnagar",
    description:
      "The community kitchen needs food supplies and volunteers to serve families in need.",
    location: { province: "Koshi", district: "Morang", city: "Biratnagar", lat: 26.4525, lng: 87.2718 },
    urgency: "normal",
    status: "available",
    organization: "Biratnagar Care Kitchen",
    postedAt: "2026-08-06T07:40:00Z",
    tags: ["food", "kitchen", "volunteer"],
    actionLabel: "Donate",
  },
  {
    id: "opp-013",
    category: "books",
    title: "Reading Corner for Rural School",
    description:
      "Build a reading corner and donate books to a school in Nawalparasi.",
    location: { province: "Lumbini", district: "Nawalparasi", city: "Bardaghat", lat: 27.6429, lng: 83.5625 },
    urgency: "normal",
    status: "open",
    organization: "Lumbini Learning Trust",
    postedAt: "2026-08-02T09:10:00Z",
    tags: ["books", "education", "school"],
    actionLabel: "Donate",
  },
  {
    id: "opp-014",
    category: "electronics",
    title: "Power Banks for Remote Health Volunteers",
    description:
      "Help deliver power banks to volunteers working in mobile health clinics in remote districts.",
    location: { province: "Karnali", district: "Jumla", city: "Jumla", lat: 29.2798, lng: 82.1889 },
    urgency: "normal",
    status: "available",
    organization: "Karnali Care Corps",
    postedAt: "2026-08-01T11:50:00Z",
    tags: ["electronics", "health", "remote"],
    actionLabel: "Donate",
  },
  {
    id: "opp-015",
    category: "volunteers",
    title: "Sunsari School Painting Day",
    description:
      "Volunteers are needed to paint classrooms and classrooms in a Sunsari school ahead of reopening.",
    location: { province: "Koshi", district: "Sunsari", city: "Inaruwa", lat: 26.6381, lng: 87.2125 },
    urgency: "normal",
    status: "available",
    organization: "Sunsari Youth Action",
    postedAt: "2026-08-04T08:25:00Z",
    tags: ["volunteer", "school", "painting"],
    actionLabel: "Volunteer",
  },
  {
    id: "opp-016",
    category: "blood",
    title: "AB+ Blood Request for Surgery",
    description:
      "The neonatal unit in Pokhara needs an AB+ blood donor for a scheduled surgery.",
    location: { province: "Gandaki", district: "Kaski", city: "Pokhara", lat: 28.2096, lng: 83.9856 },
    bloodGroup: "AB+",
    urgency: "urgent",
    status: "open",
    organization: "Pokhara Children’s Hospital",
    postedAt: "2026-08-08T05:15:00Z",
    tags: ["blood", "urgent", "AB+", "children"],
    actionLabel: "Offer Help",
  },
  {
    id: "opp-017",
    category: "medical",
    title: "First Aid Kits for Flood Response",
    description:
      "A rapid response team in Banke needs first aid kits and medical supplies for flood-affected villages.",
    location: { province: "Lumbini", district: "Banke", city: "Nepalgunj", lat: 28.0588, lng: 81.6174 },
    urgency: "urgent",
    status: "open",
    organization: "Banke Relief Network",
    postedAt: "2026-08-06T19:20:00Z",
    tags: ["medical", "urgent", "flood"],
    actionLabel: "Donate",
  },
  {
    id: "opp-018",
    category: "clothing",
    title: "Blankets for Winter Shelter",
    description:
      "Blankets and warm clothing are requested for a temporary shelter in Tulsipur.",
    location: { province: "Lumbini", district: "Dang", city: "Tulsipur", lat: 28.0561, lng: 82.2877 },
    urgency: "normal",
    status: "available",
    organization: "Dang Care Initiative",
    postedAt: "2026-08-03T13:00:00Z",
    tags: ["clothing", "shelter", "blankets"],
    actionLabel: "Donate",
  },
  {
    id: "opp-019",
    category: "food",
    title: "Rice Distribution for Kailali",
    description:
      "A food distribution effort needs rice sacks and volunteer drivers in Kailali district.",
    location: { province: "Sudurpashchim", district: "Kailali", city: "Dhangadhi", lat: 28.6983, lng: 80.5996 },
    urgency: "normal",
    status: "open",
    organization: "Sudurpashchim Food Relief",
    postedAt: "2026-08-05T16:45:00Z",
    tags: ["food", "distribution", "rice"],
    actionLabel: "Donate",
  },
  {
    id: "opp-020",
    category: "electronics",
    title: "Solar Chargers for Remote School",
    description:
      "Solar chargers are needed to power tablets at a remote school in Taplejung.",
    location: { province: "Koshi", district: "Taplejung", city: "Taplejung", lat: 27.3343, lng: 87.2638 },
    urgency: "normal",
    status: "available",
    organization: "Koshi Education Project",
    postedAt: "2026-08-02T14:20:00Z",
    tags: ["electronics", "solar", "education"],
    actionLabel: "Donate",
  },
  {
    id: "opp-021",
    category: "books",
    title: "Library Repair and Book Drive",
    description:
      "Support repair work and book donations at a community library in Bharatpur.",
    location: { province: "Bagmati", district: "Chitwan", city: "Bharatpur", lat: 27.6792, lng: 84.4286 },
    urgency: "normal",
    status: "available",
    organization: "Chitwan Education Coalition",
    postedAt: "2026-08-01T08:40:00Z",
    tags: ["books", "library", "repair"],
    actionLabel: "Donate",
  },
  {
    id: "opp-022",
    category: "volunteers",
    title: "Water Safety Training in Bhaktapur",
    description:
      "Volunteers with training experience are needed to support a water safety program for children.",
    location: { province: "Bagmati", district: "Bhaktapur", city: "Bhaktapur", lat: 27.6717, lng: 85.4290 },
    urgency: "normal",
    status: "available",
    organization: "Bhaktapur Child Safety",
    postedAt: "2026-08-03T09:50:00Z",
    tags: ["volunteer", "training", "children"],
    actionLabel: "Volunteer",
  },
  {
    id: "opp-023",
    category: "medical",
    title: "Emergency Oxygen Supplies",
    description:
      "A clinic in Pokhara needs oxygen cylinders and logistics support for a respiratory response team.",
    location: { province: "Gandaki", district: "Kaski", city: "Pokhara", lat: 28.2096, lng: 83.9856 },
    urgency: "urgent",
    status: "open",
    organization: "Pokhara Relief Agency",
    postedAt: "2026-08-08T04:00:00Z",
    tags: ["medical", "urgent", "oxygen"],
    actionLabel: "Donate",
  },
  {
    id: "opp-024",
    category: "clothing",
    title: "Shoes for School Children",
    description:
      "New shoes are requested for children attending school in Janakpur.",
    location: { province: "Madhesh", district: "Dhanusha", city: "Janakpur", lat: 26.7284, lng: 85.9240 },
    urgency: "normal",
    status: "available",
    organization: "Madhesh Child Support",
    postedAt: "2026-08-06T10:25:00Z",
    tags: ["clothing", "children", "shoes"],
    actionLabel: "Donate",
  },
];

export const provinceDistricts: Record<string, string[]> = {
  Bagmati: ["Kathmandu", "Lalitpur", "Bhaktapur", "Chitwan"],
  Gandaki: ["Kaski", "Pokhara", "Lumbini"],
  Lumbini: ["Rupandehi", "Banke", "Dang"],
  Koshi: ["Jhapa", "Sunsari", "Morang", "Taplejung"],
  Madhesh: ["Parsa", "Dhanusha", "Bara"],
  Karnali: ["Jumla", "Surkhet"],
  Sudurpashchim: ["Kailali", "Dhangadhi"],
};

export const categoryLabels: Record<OpportunityCategory, string> = {
  blood: "Blood",
  food: "Food",
  clothing: "Clothing",
  medical: "Medical",
  books: "Books",
  furniture: "Furniture",
  electronics: "Electronics",
  volunteers: "Volunteers",
};

export const categoryButtons = [
  { id: "all", label: "All" },
  { id: "blood", label: "Blood" },
  { id: "food", label: "Food" },
  { id: "clothing", label: "Clothing" },
  { id: "medical", label: "Medical" },
  { id: "books", label: "Books" },
  { id: "furniture", label: "Furniture" },
  { id: "electronics", label: "Electronics" },
  { id: "volunteers", label: "Volunteers" },
] as const;
