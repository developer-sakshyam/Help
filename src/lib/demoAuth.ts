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

export function getStoredUser(): DemoUser | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(USER_KEY);
    return raw ? (JSON.parse(raw) as DemoUser) : null;
  } catch {
    return null;
  }
}

export function saveUser(user: DemoUser): DemoUser {
  const stored: DemoUser = {
    ...user,
    id: user.id || uuidv4(),
    createdAt: user.createdAt || new Date().toISOString(),
  };
  if (typeof window !== "undefined") {
    localStorage.setItem(USER_KEY, JSON.stringify(stored));
  }
  return stored;
}

export function ensureDefaultDemoUser(): DemoUser {
  let user = getStoredUser();
  if (!user) {
    user = {
      id: uuidv4(),
      fullName: "Help.com Administrator",
      email: "admin@gmail.com",
      password: "admin",
      role: "Organization",
      profileImage: null,
      phone: "",
      bio: "Platform administrator for demo purposes.",
      province: "",
      district: "",
      municipality: "",
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

export function setSession(active: boolean, email: string): void {
  if (typeof window === "undefined") return;
  if (active)
    localStorage.setItem(SESSION_KEY, JSON.stringify({ active: true, email }));
  else localStorage.removeItem(SESSION_KEY);
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
