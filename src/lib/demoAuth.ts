function uuidv4(): string {
  return (
    "id-" +
    Math.random().toString(36).slice(2, 9) +
    "-" +
    Date.now().toString(36)
  );
}

const USER_KEY = "help_demo_user";
const SESSION_KEY = "help_demo_session";

export interface DemoUser {
  id?: string;
  fullName?: string;
  email?: string;
  password?: string;
  role?: string;
  profileImage?: string | null;
  phone?: string;
  bio?: string;
  province?: string;
  district?: string;
  municipality?: string;
  skills?: string[];
  experience?: string;
  interests?: string[];
  availability?: string;
  organizationName?: string;
  createdAt?: string;
}

export interface UserActivity {
  donationsCount: number;
  volunteerCount: number;
  savedCount: number;
  impactScore: number;
  openNeedsNearCount: number;
  donationsList: Array<{
    id: string;
    category: string;
    organization: string;
    details: string;
    status: "Completed" | "In Progress";
    date: string;
  }>;
  volunteerList: Array<{
    id: string;
    title: string;
    organization: string;
    date: string;
    status: "Submitted" | "Confirmed";
  }>;
}

// Built-in Demo Accounts
export const DEMO_ACCOUNTS = {
  ADMIN: {
    email: "admin@gmail.com",
    password: "admin",
    fullName: "Admin",
    role: "Administrator",
    bloodGroup: "B+",
    location: "Jhapa, Nepal",
    avatarUrl:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
    initialActivity: {
      donationsCount: 24,
      volunteerCount: 86,
      savedCount: 6,
      impactScore: 1280,
      openNeedsNearCount: 13,
      donationsList: [
        {
          id: "don-1",
          category: "FOOD",
          organization: "Kathmandu Community Kitchen",
          details: "8 packages",
          status: "Completed",
          date: "8 AUG",
        },
        {
          id: "don-2",
          category: "CLOTHING",
          organization: "Sahara Nepal",
          details: "12 winter clothes",
          status: "Completed",
          date: "6 AUG",
        },
        {
          id: "don-3",
          category: "BLOOD",
          organization: "Bir Hospital",
          details: "B+ donation",
          status: "Completed",
          date: "2 AUG",
        },
        {
          id: "don-4",
          category: "MEDICAL",
          organization: "Community Health Initiative",
          details: "Medical supplies",
          status: "Completed",
          date: "28 JUL",
        },
      ],
      volunteerList: [
        {
          id: "vol-1",
          title: "Kathmandu Blood Drive Logistics",
          organization: "Bir Hospital",
          date: "5 AUG",
          status: "Confirmed",
        },
      ],
    } as UserActivity,
  },
  NORMAL_USER: {
    email: "user@gmail.com",
    password: "user",
    fullName: "Aayush",
    role: "Donor & Volunteer",
    bloodGroup: "O+",
    location: "Kathmandu, Nepal",
    avatarUrl:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
    initialActivity: {
      donationsCount: 3,
      volunteerCount: 2,
      savedCount: 4,
      impactScore: 980,
      openNeedsNearCount: 18,
      donationsList: [
        {
          id: "don-u1",
          category: "FOOD",
          organization: "Annapurna Food Bank",
          details: "5 rice packages",
          status: "Completed",
          date: "7 AUG",
        },
        {
          id: "don-u2",
          category: "CLOTHING",
          organization: "Himalayan Blanket Drive",
          details: "3 wool blankets",
          status: "Completed",
          date: "3 AUG",
        },
        {
          id: "don-u3",
          category: "BOOKS",
          organization: "Chitwan School Library",
          details: "10 primary textbooks",
          status: "Completed",
          date: "29 JUL",
        },
      ],
      volunteerList: [
        {
          id: "vol-u1",
          title: "Winter Relief Packing Assistant",
          organization: "Himalayan Aid Collective",
          date: "4 AUG",
          status: "Submitted",
        },
        {
          id: "vol-u2",
          title: "Community Cleanup Volunteer",
          organization: "Lalitpur Green Network",
          date: "1 AUG",
          status: "Confirmed",
        },
      ],
    } as UserActivity,
  },
};

export function getStoredUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as DemoUser) : null;
  } catch {
    return null;
  }
}

export function ensureDefaultDemoUser(): DemoUser {
  let user = getStoredUser();
  if (!user) {
    user = {
      id: uuidv4(),
      fullName: DEMO_ACCOUNTS.ADMIN.fullName,
      email: DEMO_ACCOUNTS.ADMIN.email,
      password: DEMO_ACCOUNTS.ADMIN.password,
      role: DEMO_ACCOUNTS.ADMIN.role,
      profileImage: null,
      phone: "",
      bio: "Platform administrator for demo purposes.",
      province: "Koshi",
      district: "Jhapa",
      municipality: "Birtamod",
      skills: [],
      experience: "",
      interests: [],
      availability: "",
      organizationName: "",
      createdAt: new Date().toISOString(),
    };
    saveUser(user);
  }
  return user;
}

export function saveUser(user: DemoUser): DemoUser {
  const stored: DemoUser = {
    ...user,
    id: user.id || uuidv4(),
    createdAt: user.createdAt || new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(stored));
    window.dispatchEvent(new CustomEvent("help_demo_auth_change"));
  }
  return stored;
}

export function setSession(active: boolean, email: string): void {
  if (typeof window === "undefined") return;
  if (active) {
    localStorage.setItem(SESSION_KEY, JSON.stringify({ active: true, email }));
  } else {
    localStorage.removeItem(SESSION_KEY);
  }
  window.dispatchEvent(new CustomEvent("help_demo_auth_change"));
}

export function getSession(): { active: boolean; email?: string } {
  if (typeof window === "undefined") return { active: false };
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : { active: false };
  } catch {
    return { active: false };
  }
}

export function getAuthenticatedUser(): {
  active: boolean;
  displayName: string;
  email: string;
  role: string;
  bloodGroup: string;
  location: string;
  avatarUrl: string;
} | null {
  const session = getSession();
  if (!session || !session.active || !session.email) return null;

  const email = session.email.toLowerCase();

  if (email === DEMO_ACCOUNTS.ADMIN.email) {
    return {
      active: true,
      email: DEMO_ACCOUNTS.ADMIN.email,
      displayName: DEMO_ACCOUNTS.ADMIN.fullName,
      role: DEMO_ACCOUNTS.ADMIN.role,
      bloodGroup: DEMO_ACCOUNTS.ADMIN.bloodGroup,
      location: DEMO_ACCOUNTS.ADMIN.location,
      avatarUrl: DEMO_ACCOUNTS.ADMIN.avatarUrl,
    };
  }

  if (email === DEMO_ACCOUNTS.NORMAL_USER.email) {
    return {
      active: true,
      email: DEMO_ACCOUNTS.NORMAL_USER.email,
      displayName: DEMO_ACCOUNTS.NORMAL_USER.fullName,
      role: DEMO_ACCOUNTS.NORMAL_USER.role,
      bloodGroup: DEMO_ACCOUNTS.NORMAL_USER.bloodGroup,
      location: DEMO_ACCOUNTS.NORMAL_USER.location,
      avatarUrl: DEMO_ACCOUNTS.NORMAL_USER.avatarUrl,
    };
  }

  const stored = getStoredUser();
  if (stored && stored.email?.toLowerCase() === email) {
    return {
      active: true,
      email: stored.email,
      displayName: stored.fullName || "User",
      role: stored.role || "Donor & Volunteer",
      bloodGroup: "B+",
      location: [stored.municipality, stored.district].filter(Boolean).join(", ") || "Nepal",
      avatarUrl: stored.profileImage || DEMO_ACCOUNTS.NORMAL_USER.avatarUrl,
    };
  }

  // Fallback
  const prefix = email.split("@")[0];
  const name = prefix.charAt(0).toUpperCase() + prefix.slice(1);
  return {
    active: true,
    email,
    displayName: name,
    role: "Donor & Volunteer",
    bloodGroup: "B+",
    location: "Nepal",
    avatarUrl: DEMO_ACCOUNTS.NORMAL_USER.avatarUrl,
  };
}

export function logoutDemoUser(): void {
  setSession(false, "");
}

// User Activity Storage
function getActivityKey(email: string): string {
  return `help_user_activity_${email.toLowerCase()}`;
}

export function getUserActivity(email?: string): UserActivity {
  const currentEmail = email || getSession().email || DEMO_ACCOUNTS.NORMAL_USER.email;
  const isTargetAdmin = currentEmail.toLowerCase() === DEMO_ACCOUNTS.ADMIN.email;
  const defaultInitial = isTargetAdmin
    ? DEMO_ACCOUNTS.ADMIN.initialActivity
    : DEMO_ACCOUNTS.NORMAL_USER.initialActivity;

  if (typeof window === "undefined") return defaultInitial;

  try {
    const raw = localStorage.getItem(getActivityKey(currentEmail));
    if (raw) return JSON.parse(raw) as UserActivity;
  } catch {}

  return defaultInitial;
}

export function saveUserActivity(email: string, activity: UserActivity): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(getActivityKey(email), JSON.stringify(activity));
  window.dispatchEvent(new CustomEvent("help_demo_activity_change"));
}

export function recordDonation(
  category: string,
  organization: string,
  details: string
): UserActivity {
  const session = getSession();
  const email = session.email || DEMO_ACCOUNTS.NORMAL_USER.email;
  const current = getUserActivity(email);

  const updated: UserActivity = {
    ...current,
    donationsCount: current.donationsCount + 1,
    impactScore: current.impactScore + 50,
    donationsList: [
      {
        id: `don-${Date.now()}`,
        category: category.toUpperCase(),
        organization,
        details,
        status: "Completed",
        date: "TODAY",
      },
      ...current.donationsList,
    ],
  };

  saveUserActivity(email, updated);
  return updated;
}

export function recordVolunteerApplication(
  title: string,
  organization: string
): UserActivity {
  const session = getSession();
  const email = session.email || DEMO_ACCOUNTS.NORMAL_USER.email;
  const current = getUserActivity(email);

  const updated: UserActivity = {
    ...current,
    volunteerCount: current.volunteerCount + 1,
    impactScore: current.impactScore + 40,
    volunteerList: [
      {
        id: `vol-${Date.now()}`,
        title,
        organization,
        date: "TODAY",
        status: "Submitted",
      },
      ...current.volunteerList,
    ],
  };

  saveUserActivity(email, updated);
  return updated;
}

export function recordSavedOpportunity(): UserActivity {
  const session = getSession();
  const email = session.email || DEMO_ACCOUNTS.NORMAL_USER.email;
  const current = getUserActivity(email);

  const updated: UserActivity = {
    ...current,
    savedCount: current.savedCount + 1,
  };

  saveUserActivity(email, updated);
  return updated;
}
