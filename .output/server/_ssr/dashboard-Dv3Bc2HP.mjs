import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { a as getUserActivity, o as logoutDemoUser, r as getAuthenticatedUser, t as DEMO_ACCOUNTS } from "./demoAuth-74wbb7Ne.mjs";
import { A as Award, E as Calendar, _ as Heart, g as LogOut, i as UserCheck, j as ArrowRight, k as Bell, l as ShieldCheck, m as MapPin } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-Ck_C9tE7.mjs";
import { n as VolunteerModal, t as DonateModal } from "./ActionModals-CPZI8uku.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/dashboard-Dv3Bc2HP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var demoNotifications = [
	{
		id: "notif-1",
		title: "Welcome to Help.com",
		message: "Your contributions are helping connect essential resources with people who need them.",
		date: "9 AUG",
		unread: true
	},
	{
		id: "notif-2",
		title: "Donation Recorded",
		message: "Your food donation was successfully recorded.",
		date: "8 AUG"
	},
	{
		id: "notif-3",
		title: "New Opportunity Near You",
		message: "New volunteer opportunity near Jhapa.",
		date: "7 AUG"
	},
	{
		id: "notif-4",
		title: "Impact Milestone Update",
		message: "Your impact score increased by 120 points.",
		date: "5 AUG"
	}
];
var demoEvents = [
	{
		id: "event-1",
		dateDay: "11",
		dateMonth: "AUG",
		title: "Kathmandu Mega Blood Drive",
		location: "Bir Hospital, Kathmandu"
	},
	{
		id: "event-2",
		dateDay: "16",
		dateMonth: "AUG",
		title: "Pokhara Health Camp",
		location: "Pokhara-17, Kaski"
	},
	{
		id: "event-3",
		dateDay: "19",
		dateMonth: "AUG",
		title: "Winter Kit Packing Day",
		location: "Sahara Nepal Warehouse"
	},
	{
		id: "event-4",
		dateDay: "24",
		dateMonth: "AUG",
		title: "Library Setup — Janakpur",
		location: "Janakpur-6, Dhanusha"
	},
	{
		id: "event-5",
		dateDay: "28",
		dateMonth: "AUG",
		title: "Volunteer Orientation",
		location: "Online"
	}
];
var demoOpportunities = [
	{
		id: "rec-1",
		category: "SHELTER",
		urgency: "CRITICAL",
		title: "Temporary shelter kits after landslide",
		description: "Tarpaulin, rope and CGI sheet kits for 60 families displaced by monsoon landslides.",
		district: "Sindhupalchok",
		quantity: "60 kits",
		distance: "68 km away",
		imageUrl: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "rec-2",
		category: "FOOD",
		urgency: "URGENT",
		title: "Kathmandu Emergency Rice Rations",
		description: "Grain parcels and dry rations for vulnerable households following river overflow.",
		district: "Kathmandu",
		quantity: "120 packages",
		distance: "12 km away",
		imageUrl: "https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "rec-3",
		category: "MEDICAL",
		urgency: "URGENT",
		title: "Pediatric Care & Hygiene Supplies",
		description: "First-aid packs, essential medicines, and clean water tablets for rural health outpost.",
		district: "Jhapa",
		quantity: "45 packages",
		distance: "18 km away",
		imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=800&q=80"
	},
	{
		id: "rec-4",
		category: "CLOTHING",
		urgency: "OPEN",
		title: "Winter Blankets for High Altitude Ward",
		description: "Warm woolen blankets and heavy fleece jackets for elderly residents.",
		district: "Mustang",
		quantity: "90 blankets",
		distance: "145 km away",
		imageUrl: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80"
	}
];
function DashboardPage() {
	const containerRef = (0, import_react.useRef)(null);
	const scoreRef = (0, import_react.useRef)(null);
	const progressBarRef = (0, import_react.useRef)(null);
	const milestoneProgressRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	const [authUser, setAuthUser] = (0, import_react.useState)(() => getAuthenticatedUser());
	const [userActivity, setUserActivity] = (0, import_react.useState)(() => getUserActivity(getAuthenticatedUser()?.email));
	const [selectedDonateTarget, setSelectedDonateTarget] = (0, import_react.useState)(null);
	const [selectedVolunteerTarget, setSelectedVolunteerTarget] = (0, import_react.useState)(null);
	const [animatedScore, setAnimatedScore] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		function syncAll() {
			const currentAuth = getAuthenticatedUser();
			setAuthUser(currentAuth);
			const act = getUserActivity(currentAuth?.email);
			setUserActivity(act);
		}
		syncAll();
		window.addEventListener("help_demo_auth_change", syncAll);
		window.addEventListener("help_demo_activity_change", syncAll);
		window.addEventListener("storage", syncAll);
		return () => {
			window.removeEventListener("help_demo_auth_change", syncAll);
			window.removeEventListener("help_demo_activity_change", syncAll);
			window.removeEventListener("storage", syncAll);
		};
	}, []);
	const activeUser = authUser || {
		displayName: DEMO_ACCOUNTS.NORMAL_USER.fullName,
		email: DEMO_ACCOUNTS.NORMAL_USER.email,
		role: DEMO_ACCOUNTS.NORMAL_USER.role,
		bloodGroup: DEMO_ACCOUNTS.NORMAL_USER.bloodGroup,
		location: DEMO_ACCOUNTS.NORMAL_USER.location,
		avatarUrl: DEMO_ACCOUNTS.NORMAL_USER.avatarUrl
	};
	const currentImpact = userActivity.impactScore;
	const nextMilestone = 1500;
	const progressPercent = Math.min(100, Math.round(currentImpact / nextMilestone * 100));
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) {
			setAnimatedScore(currentImpact);
			if (progressBarRef.current) progressBarRef.current.style.width = `${progressPercent}%`;
			if (milestoneProgressRef.current) milestoneProgressRef.current.style.width = `${progressPercent}%`;
			return;
		}
		if (!containerRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).fromTo(".dash-header-item", {
				opacity: 0,
				y: 16
			}, {
				opacity: 1,
				y: 0,
				stagger: .08,
				duration: .5
			}).fromTo(".dash-card", {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				stagger: .07,
				duration: .45
			}, "-=0.2").fromTo(".dash-section", {
				opacity: 0,
				y: 24
			}, {
				opacity: 1,
				y: 0,
				stagger: .09,
				duration: .45
			}, "-=0.2");
			const scoreObj = { val: 0 };
			gsapWithCSS.to(scoreObj, {
				val: currentImpact,
				duration: 1.2,
				ease: "power2.out",
				onUpdate: () => {
					setAnimatedScore(Math.round(scoreObj.val));
				}
			});
			if (progressBarRef.current) gsapWithCSS.to(progressBarRef.current, {
				width: `${progressPercent}%`,
				duration: 1,
				ease: "power2.out"
			});
			if (milestoneProgressRef.current) gsapWithCSS.to(milestoneProgressRef.current, {
				width: `${progressPercent}%`,
				duration: 1,
				ease: "power2.out"
			});
		}, containerRef);
		return () => ctx.revert();
	}, [currentImpact, progressPercent]);
	const top5Leaderboard = [
		{
			rank: 1,
			id: "l1",
			name: "Sita Thapa",
			impactScore: 1280,
			donationsCount: 42,
			volunteerHours: 124,
			avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 2,
			id: "l2",
			name: "Rohan Gurung",
			impactScore: 1120,
			donationsCount: 34,
			volunteerHours: 96,
			avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 3,
			id: "l3",
			name: activeUser.displayName,
			impactScore: currentImpact,
			donationsCount: userActivity.donationsCount,
			volunteerHours: userActivity.volunteerCount,
			avatarUrl: activeUser.avatarUrl,
			isCurrentUser: true
		},
		{
			rank: 4,
			id: "l4",
			name: "Bikash Shrestha",
			impactScore: 860,
			donationsCount: 18,
			volunteerHours: 65,
			avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 5,
			id: "l5",
			name: "Anisha Rai",
			impactScore: 740,
			donationsCount: 15,
			volunteerHours: 58,
			avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				ref: containerRef,
				className: "flex-1 shell py-8 md:py-12 space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "space-y-2 border-b border-border/80 pb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "dash-header-item eyebrow",
								children: "USER DASHBOARD"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "dash-header-item text-3xl md:text-5xl font-bold tracking-tight text-foreground",
								children: [activeUser.displayName, ", here’s where you stand."]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "dash-header-item text-base md:text-lg text-muted-foreground max-w-2xl",
								children: "Your giving activity, volunteer applications, and matched community needs"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 md:grid-cols-3 gap-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dash-card bg-card border border-border p-6 rounded-xl flex flex-col justify-between space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow",
												children: "PROFILE SUMMARY"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "inline-flex items-center gap-1 text-[0.7rem] font-mono text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3" }), " VERIFIED"]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: activeUser.avatarUrl,
												alt: activeUser.displayName,
												className: "size-14 rounded-full object-cover border border-border shrink-0"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
													className: "text-xl font-bold tracking-tight truncate text-foreground",
													children: activeUser.displayName
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs font-mono text-muted-foreground truncate",
													children: activeUser.email
												})]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex flex-wrap gap-2 pt-1",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2.5 py-1 text-xs font-mono border border-border bg-muted/40 rounded-md text-foreground",
													children: activeUser.role
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2.5 py-1 text-xs font-mono border border-border bg-muted/40 rounded-md text-foreground",
													children: activeUser.bloodGroup
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "px-2.5 py-1 text-xs font-mono border border-border bg-muted/40 rounded-md text-foreground",
													children: activeUser.location
												})
											]
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-4 border-t border-border/80 flex items-center gap-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											alert("Profile settings available in settings menu.");
										},
										className: "flex-1 text-center px-4 py-2 text-xs font-medium border border-border rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
										children: "Edit profile"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										onClick: () => {
											logoutDemoUser();
											navigate({ to: "/" });
										},
										className: "inline-flex items-center gap-1 px-3 py-2 text-xs font-medium border border-border rounded-lg text-muted-foreground hover:text-destructive hover:border-destructive/30 transition-colors",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3" }), " Sign out"]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dash-card bg-card border border-border p-6 rounded-xl flex flex-col justify-between space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-center justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "eyebrow",
												children: "IMPACT SCORE"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-muted-foreground" })]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												ref: scoreRef,
												className: "text-4xl md:text-5xl font-extrabold tracking-tight font-mono text-foreground",
												children: animatedScore.toLocaleString()
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-mono text-muted-foreground",
												children: [
													"/ ",
													nextMilestone.toLocaleString(),
													" PTS"
												]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground leading-relaxed",
											children: "Earned from verified donations, volunteer hours, and fulfilled requests."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 pt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "h-1.5 w-full bg-muted rounded-full overflow-hidden",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											ref: progressBarRef,
											className: "h-full bg-foreground rounded-full transition-all duration-500",
											style: { width: `${progressPercent}%` }
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex justify-between text-[0.7rem] font-mono text-muted-foreground",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Current: ", currentImpact] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Next Milestone: ", nextMilestone] })]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "dash-card bg-card border border-border p-6 rounded-xl flex flex-col justify-between space-y-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "eyebrow",
										children: "AT A GLANCE"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-4 divide-y divide-border/60",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center pt-1",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground",
													children: "Total donations"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-bold font-mono text-foreground",
													children: userActivity.donationsCount
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center pt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground",
													children: "Volunteer applications"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-bold font-mono text-foreground",
													children: userActivity.volunteerCount
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center pt-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-sm text-muted-foreground",
													children: "Saved opportunities"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-xl font-bold font-mono text-foreground",
													children: userActivity.savedCount
												})]
											})
										]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "pt-2",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-[0.75rem] font-mono text-muted-foreground text-center",
										children: ["Live state updated · ", activeUser.location]
									})
								})]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 lg:grid-cols-12 gap-8 items-start",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-7 space-y-10",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "dash-section space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bell, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "eyebrow",
											children: "NOTIFICATIONS"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden",
										children: demoNotifications.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 hover:bg-accent/40 transition-colors flex items-start justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-1 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm font-semibold text-foreground",
														children: n.title
													}), n.unread && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-brand shrink-0" })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground leading-relaxed",
													children: [
														"\"",
														n.message,
														"\""
													]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.7rem] font-mono text-muted-foreground shrink-0 border border-border px-2 py-0.5 rounded bg-muted/30",
												children: n.date
											})]
										}, n.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "dash-section space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "eyebrow",
											children: "CALENDAR"
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden",
										children: demoEvents.map((ev) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 hover:bg-accent/40 transition-colors flex items-center justify-between gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-4 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "text-center w-12 shrink-0 py-1 bg-muted/50 border border-border rounded-md",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-xs font-mono text-muted-foreground",
														children: ev.dateMonth
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
														className: "text-lg font-bold font-mono text-foreground leading-none",
														children: ev.dateDay
													})]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-sm font-semibold text-foreground truncate",
														children: ev.title
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground truncate",
														children: ev.location
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono text-muted-foreground shrink-0 hidden sm:inline",
												children: "Upcoming"
											})]
										}, ev.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "dash-section space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "eyebrow",
											children: "RECOMMENDED FOR YOU"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/explore",
											className: "text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors",
											children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "grid grid-cols-1 sm:grid-cols-2 gap-4",
										children: demoOpportunities.map((op) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "bg-card border border-border rounded-xl p-4 flex flex-col justify-between space-y-4 hover:border-foreground/40 transition-colors group",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "space-y-3",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "w-full h-36 rounded-lg overflow-hidden border border-border relative bg-muted",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
																src: op.imageUrl,
																alt: op.title,
																className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "absolute top-2 left-2 text-[0.65rem] font-mono tracking-wider uppercase px-2 py-0.5 rounded bg-background/90 text-foreground border border-border backdrop-blur-sm",
																children: op.category
															}),
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: `absolute top-2 right-2 text-[0.65rem] font-mono tracking-wider uppercase px-2 py-0.5 rounded border ${op.urgency === "CRITICAL" ? "bg-destructive text-destructive-foreground border-destructive" : op.urgency === "URGENT" ? "bg-amber-500/20 text-amber-500 border-amber-500/30" : "bg-muted/90 text-muted-foreground border-border"}`,
																children: op.urgency
															})
														]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-base font-bold text-foreground leading-snug line-clamp-2",
														children: op.title
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
														className: "text-xs text-muted-foreground line-clamp-2 leading-relaxed",
														children: [
															"\"",
															op.description,
															"\""
														]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "pt-3 border-t border-border/80 space-y-3",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center justify-between text-[0.75rem] font-mono text-muted-foreground",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "inline-flex items-center gap-1",
														children: [
															/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
															" ",
															op.district
														]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: op.quantity })]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex gap-2 pt-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => setSelectedDonateTarget({
															title: op.title,
															org: `${op.district} Relief Collective`,
															category: op.category
														}),
														className: "flex-1 py-1.5 px-3 bg-primary text-primary-foreground text-xs font-mono rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3" }), " Donate"]
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
														type: "button",
														onClick: () => setSelectedVolunteerTarget({
															title: op.title,
															org: `${op.district} Relief Collective`,
															location: `${op.district}, Nepal`
														}),
														className: "flex-1 py-1.5 px-3 border border-border bg-background text-foreground text-xs font-mono rounded-md hover:bg-accent transition-colors flex items-center justify-center gap-1",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-3" }), " Volunteer"]
													})]
												})]
											})]
										}, op.id))
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "dash-section space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "eyebrow",
											children: "MY DONATIONS"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/explore",
											className: "text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors",
											children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden",
										children: userActivity.donationsList.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 flex items-center justify-between gap-4 hover:bg-accent/40 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-[0.65rem] font-mono tracking-wider uppercase px-2 py-1 border border-border rounded bg-muted/50 text-foreground shrink-0",
													children: d.category
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "min-w-0",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
														className: "text-sm font-semibold text-foreground truncate",
														children: d.organization
													}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
														className: "text-xs text-muted-foreground truncate",
														children: d.details
													})]
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono px-2.5 py-1 rounded bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 shrink-0",
												children: d.status
											})]
										}, d.id))
									})]
								}),
								userActivity.volunteerList.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
									className: "dash-section space-y-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b border-border pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
											className: "eyebrow",
											children: "VOLUNTEER APPLICATIONS"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
											to: "/volunteers",
											className: "text-xs font-mono text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors",
											children: ["View all ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3" })]
										})]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "divide-y divide-border/80 border border-border rounded-xl bg-card overflow-hidden",
										children: userActivity.volunteerList.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "p-4 flex items-center justify-between gap-4 hover:bg-accent/40 transition-colors",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
													className: "text-sm font-semibold text-foreground truncate",
													children: v.title
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "text-xs text-muted-foreground truncate",
													children: v.organization
												})]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono px-2.5 py-1 rounded bg-sky-500/10 text-sky-500 border border-sky-500/20 shrink-0",
												children: v.status
											})]
										}, v.id))
									})]
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "lg:col-span-5 space-y-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "dash-section bg-card border border-border rounded-xl p-6 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 border-b border-border pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow",
											children: "COMMUNITY LEADERBOARD"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "text-xl font-bold tracking-tight text-foreground",
											children: "People making the biggest difference."
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "space-y-3",
										children: top5Leaderboard.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: `p-3 rounded-lg border transition-all flex items-center justify-between gap-3 ${item.isCurrentUser ? "bg-accent/60 border-foreground/30 ring-1 ring-foreground/20" : "bg-background/50 border-border hover:border-border/80"}`,
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex items-center gap-3 min-w-0",
												children: [
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
														className: "text-xs font-mono text-muted-foreground w-5 text-center font-bold",
														children: ["0", item.rank]
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
														src: item.avatarUrl,
														alt: item.name,
														className: "size-8 rounded-full object-cover border border-border shrink-0"
													}),
													/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
														className: "min-w-0",
														children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
															className: "flex items-center gap-1.5",
															children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-sm font-bold text-foreground truncate",
																children: item.name
															}), item.isCurrentUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
																className: "text-[0.65rem] font-mono px-1.5 py-0.2 rounded bg-foreground text-background font-semibold",
																children: "YOU"
															})]
														}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
															className: "text-[0.7rem] font-mono text-muted-foreground truncate",
															children: [
																item.donationsCount,
																" donations · ",
																item.volunteerHours,
																"h volunteer"
															]
														})]
													})
												]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "text-right shrink-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-sm font-bold font-mono text-foreground",
													children: item.impactScore.toLocaleString()
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													className: "text-[0.65rem] font-mono text-muted-foreground",
													children: "impact"
												})]
											})]
										}, item.id))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/leaderboard",
											className: "w-full inline-flex items-center justify-center gap-2 text-xs font-mono border border-border py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors",
											children: "View full leaderboard →"
										})
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
								className: "dash-section bg-card border border-border rounded-xl p-6 space-y-6",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-2 border-b border-border pb-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow",
											children: "NEXT MILESTONE"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "flex items-baseline justify-between",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
												className: "text-lg font-bold text-foreground",
												children: [currentImpact.toLocaleString(), " Impact Score"]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
												className: "text-xs font-mono text-muted-foreground",
												children: ["Goal: ", nextMilestone]
											})]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "space-y-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "flex justify-between items-center text-xs font-mono",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "text-muted-foreground",
													children: "Progress"
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
													className: "font-bold text-foreground",
													children: [progressPercent, "%"]
												})]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
												className: "h-1.5 w-full bg-muted rounded-full overflow-hidden",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
													ref: milestoneProgressRef,
													className: "h-full bg-foreground rounded-full transition-all duration-500",
													style: { width: `${progressPercent}%` }
												})
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
												className: "text-xs text-muted-foreground leading-relaxed",
												children: [Math.max(0, nextMilestone - currentImpact), " more impact points to reach Community Champion."]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/explore",
											className: "w-full inline-flex items-center justify-center gap-2 text-xs font-mono border border-border py-2.5 rounded-lg text-foreground hover:bg-accent transition-colors",
											children: "Find a way to help →"
										})
									})
								]
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateModal, {
				isOpen: !!selectedDonateTarget,
				onClose: () => setSelectedDonateTarget(null),
				initialTitle: selectedDonateTarget?.title,
				initialOrg: selectedDonateTarget?.org,
				initialCategory: selectedDonateTarget?.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerModal, {
				isOpen: !!selectedVolunteerTarget,
				onClose: () => setSelectedVolunteerTarget(null),
				initialTitle: selectedVolunteerTarget?.title,
				initialOrg: selectedVolunteerTarget?.org,
				initialLocation: selectedVolunteerTarget?.location
			})
		]
	});
}
//#endregion
export { DashboardPage as component };
