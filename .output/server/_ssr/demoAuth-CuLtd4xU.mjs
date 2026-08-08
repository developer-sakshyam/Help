//#region node_modules/.nitro/vite/services/ssr/assets/demoAuth-CuLtd4xU.js
function uuidv4() {
	return "id-" + Math.random().toString(36).slice(2, 9) + "-" + Date.now().toString(36);
}
var USER_KEY = "help_demo_user";
var SESSION_KEY = "help_demo_session";
function getStoredUser() {
	if (typeof window === "undefined") return null;
	try {
		const raw = localStorage.getItem(USER_KEY);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function saveUser(user) {
	const stored = {
		...user,
		id: user.id || uuidv4(),
		createdAt: user.createdAt || (/* @__PURE__ */ new Date()).toISOString()
	};
	if (typeof window !== "undefined") localStorage.setItem(USER_KEY, JSON.stringify(stored));
	return stored;
}
function ensureDefaultDemoUser() {
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
			createdAt: (/* @__PURE__ */ new Date()).toISOString()
		};
		saveUser(user);
	}
	return user;
}
function setSession(active, email) {
	if (typeof window === "undefined") return;
	if (active) localStorage.setItem(SESSION_KEY, JSON.stringify({
		active: true,
		email
	}));
	else localStorage.removeItem(SESSION_KEY);
}
//#endregion
export { setSession as i, getStoredUser as n, saveUser as r, ensureDefaultDemoUser as t };
