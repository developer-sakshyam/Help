export interface NGO {
  id: string;
  name: string;
  logo?: string;
  location: string;
  district: string;
  province: string;
  causes: string[];
  description: string;
  verified: boolean;
  founded: number;
  volunteersCount: number;
  projectsCount: number;
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  website: string;
  activeProjects: string[];
}

export const ngosDemoData: NGO[] = [
  {
    id: "ngo-001",
    name: "Nepal Red Cross Society — Kaski",
    location: "Ramghat, Pokhara",
    district: "Kaski",
    province: "Gandaki",
    causes: ["Healthcare", "Disaster Relief", "Blood Security"],
    description:
      "Leading humanitarian movement in Kaski providing emergency blood bank service, flood response, and community health training.",
    verified: true,
    founded: 1963,
    volunteersCount: 450,
    projectsCount: 18,
    contact: {
      phone: "+977 61-520123",
      email: "kaski@nrcs.org.np",
      address: "Ramghat-10, Pokhara, Nepal",
    },
    website: "https://nrcs.org.np",
    activeProjects: [
      "24/7 Pokhara Emergency Blood Bank",
      "Community Disaster Response Squad",
      "School First Aid Workshop Program",
    ],
  },
  {
    id: "ngo-002",
    name: "Himalayan Literacy & Child Hope Trust",
    location: "Lazimpat, Kathmandu",
    district: "Kathmandu",
    province: "Bagmati",
    causes: ["Education", "Child Welfare", "Community Development"],
    description:
      "Empowering children in remote Himalayan districts through mobile libraries, school supplies, and scholarship funding.",
    verified: true,
    founded: 2011,
    volunteersCount: 120,
    projectsCount: 12,
    contact: {
      phone: "+977 1-4412890",
      email: "info@himalayanliteracy.org.np",
      address: "Lazimpat Road, Kathmandu, Nepal",
    },
    website: "https://himalayanliteracy.org.np",
    activeProjects: [
      "Mobile Library Bus for Rural Schools",
      "Solukhumbu Primary Education Fund",
      "Winter Warmth Clothing Pack Drive",
    ],
  },
  {
    id: "ngo-003",
    name: "Kathmandu Valley Food Relief Foundation",
    location: "Kalimati, Kathmandu",
    district: "Kathmandu",
    province: "Bagmati",
    causes: ["Food Security", "Disaster Relief", "Community Development"],
    description:
      "Connecting surplus food from markets, hotels, and agricultural networks with community kitchens and shelters across the valley.",
    verified: true,
    founded: 2018,
    volunteersCount: 230,
    projectsCount: 8,
    contact: {
      phone: "+977 1-4289012",
      email: "help@kvfoodrelief.org",
      address: "Kalimati-13, Kathmandu, Nepal",
    },
    website: "https://kvfoodrelief.org",
    activeProjects: [
      "Daily Kitchen for Daily Wage Workers",
      "Surplus Produce Rescue Taskforce",
      "Community Nutrition Awareness Drive",
    ],
  },
  {
    id: "ngo-004",
    name: "Medical Aid & Rural Health Nepal",
    location: "Koppundole, Lalitpur",
    district: "Lalitpur",
    province: "Bagmati",
    causes: ["Healthcare", "Disaster Relief", "Elder Care"],
    description:
      "Deploying mobile medical clinics and essential medicine kits to remote mountain communities without hospital access.",
    verified: true,
    founded: 2008,
    volunteersCount: 180,
    projectsCount: 24,
    contact: {
      phone: "+977 1-5523456",
      email: "contact@medicalaidnepal.org",
      address: "Koppundole-1, Lalitpur, Nepal",
    },
    website: "https://medicalaidnepal.org",
    activeProjects: [
      "Remote Eye & Dental Mobile Clinics",
      "Maternal Care Medicine Distribution",
      "Disaster Relief Medical Response Team",
    ],
  },
  {
    id: "ngo-005",
    name: "Clean Green Pokhara Environment Society",
    location: "Prithvi Chowk, Pokhara",
    district: "Kaski",
    province: "Gandaki",
    causes: ["Environment", "Community Development"],
    description:
      "Protecting Phewa Lake and surrounding watersheds through regular cleanup campaigns, tree plantation, and waste sorting.",
    verified: false,
    founded: 2016,
    volunteersCount: 310,
    projectsCount: 15,
    contact: {
      phone: "+977 61-532109",
      email: "greenpokhara@gmail.com",
      address: "Prithvi Chowk, Pokhara, Nepal",
    },
    website: "https://greenpokhara.org",
    activeProjects: [
      "Weekly Phewa Lake Shore Cleanup",
      "10,000 Hillside Tree Plantation",
      "Zero Single-Use Plastic School Campaign",
    ],
  },
  {
    id: "ngo-006",
    name: "Karnali Women Empowerment Network",
    location: "Birendranagar, Surkhet",
    district: "Surkhet",
    province: "Karnali",
    causes: ["Women Welfare", "Education", "Healthcare"],
    description:
      "Grassroots organization advocating for women's reproductive health, livelihood training, and gender equality in Karnali.",
    verified: true,
    founded: 2014,
    volunteersCount: 95,
    projectsCount: 9,
    contact: {
      phone: "+977 83-521045",
      email: "karnaliwomen@org.np",
      address: "Birendranagar-6, Surkhet, Nepal",
    },
    website: "https://karnaliwomen.org.np",
    activeProjects: [
      "Dignified Menstruation Hygiene Kits",
      "Handicrafts Skill & Micro-grant Program",
      "Legal Rights Awareness Workshops",
    ],
  },
  {
    id: "ngo-007",
    name: "Animal Haven Nepal & Street Rescue",
    location: "Chitwan-3, Bharatpur",
    district: "Chitwan",
    province: "Bagmati",
    causes: ["Animal Welfare", "Community Development"],
    description:
      "Rescuing injured stray animals, operating spay/neuter drives, and educating communities on compassionate animal care.",
    verified: true,
    founded: 2017,
    volunteersCount: 140,
    projectsCount: 7,
    contact: {
      phone: "+977 56-510987",
      email: "rescue@animalhavennepal.org",
      address: "Bharatpur-3, Chitwan, Nepal",
    },
    website: "https://animalhavennepal.org",
    activeProjects: [
      "Rabies Vaccination & ABC Drive",
      "Emergency Canine Trauma Sanctuary",
      "School Kindness & Pet Care Lessons",
    ],
  },
  {
    id: "ngo-008",
    name: "Terai Disaster Preparedness Group",
    location: "Main Road, Biratnagar",
    district: "Morang",
    province: "Koshi",
    causes: ["Disaster Relief", "Food Security", "Healthcare"],
    description:
      "Regional emergency coalition providing early flood warnings, rescue boat deployment, and dry ration kits during monsoon emergencies.",
    verified: true,
    founded: 2015,
    volunteersCount: 280,
    projectsCount: 14,
    contact: {
      phone: "+977 21-524310",
      email: "teraidisaster@coalition.org.np",
      address: "Main Road, Biratnagar, Nepal",
    },
    website: "https://teraidisaster.org.np",
    activeProjects: [
      "Monsoon Emergency Flood Shelter Kits",
      "Boat Rescue Volunteer Corps",
      "Safe Drinking Water Purifier Distribution",
    ],
  },
];
