import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { a as getUserActivity, r as getAuthenticatedUser, t as DEMO_ACCOUNTS } from "./demoAuth-74wbb7Ne.mjs";
import { S as CircleCheck, _ as Heart, i as UserCheck, j as ArrowRight, y as Funnel } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-CHfIrWAu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/leaderboard-D7aJQ2Nx.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function LeaderboardPage() {
	const containerRef = (0, import_react.useRef)(null);
	const rowsRef = (0, import_react.useRef)(null);
	const [timeframe, setTimeframe] = (0, import_react.useState)("all_time");
	const [roleFilter, setRoleFilter] = (0, import_react.useState)("all");
	const [authUser, setAuthUser] = (0, import_react.useState)(() => getAuthenticatedUser());
	const [userActivity, setUserActivity] = (0, import_react.useState)(() => getUserActivity(getAuthenticatedUser()?.email));
	(0, import_react.useEffect)(() => {
		function syncAll() {
			const current = getAuthenticatedUser();
			setAuthUser(current);
			setUserActivity(getUserActivity(current?.email));
		}
		window.addEventListener("help_demo_auth_change", syncAll);
		window.addEventListener("help_demo_activity_change", syncAll);
		return () => {
			window.removeEventListener("help_demo_auth_change", syncAll);
			window.removeEventListener("help_demo_activity_change", syncAll);
		};
	}, []);
	const activeEmail = authUser?.email?.toLowerCase() || DEMO_ACCOUNTS.NORMAL_USER.email;
	const rankedList = [...[
		{
			rank: 1,
			id: "l-sita",
			name: "Sita Thapa",
			location: "Kathmandu",
			impactScore: 1280,
			donationsCount: 42,
			volunteerHours: 124,
			peopleHelped: 218,
			role: "Volunteer",
			avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 2,
			id: "l-admin",
			name: "Admin",
			location: "Jhapa",
			impactScore: activeEmail === DEMO_ACCOUNTS.ADMIN.email ? userActivity.impactScore : 1280,
			donationsCount: activeEmail === DEMO_ACCOUNTS.ADMIN.email ? userActivity.donationsCount : 24,
			volunteerHours: activeEmail === DEMO_ACCOUNTS.ADMIN.email ? userActivity.volunteerCount : 86,
			peopleHelped: 143,
			role: "Donor & Volunteer",
			avatarUrl: DEMO_ACCOUNTS.ADMIN.avatarUrl,
			isCurrentUser: activeEmail === DEMO_ACCOUNTS.ADMIN.email
		},
		{
			rank: 3,
			id: "l-rohan",
			name: "Rohan Gurung",
			location: "Chitwan",
			impactScore: 1120,
			donationsCount: 34,
			volunteerHours: 96,
			peopleHelped: 176,
			role: "Donor & Volunteer",
			avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 4,
			id: "l-aayush",
			name: "Aayush",
			location: "Kathmandu",
			impactScore: activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email ? userActivity.impactScore : 980,
			donationsCount: activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email ? userActivity.donationsCount : 3,
			volunteerHours: activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email ? userActivity.volunteerCount : 2,
			peopleHelped: 45,
			role: "Donor & Volunteer",
			avatarUrl: DEMO_ACCOUNTS.NORMAL_USER.avatarUrl,
			isCurrentUser: activeEmail === DEMO_ACCOUNTS.NORMAL_USER.email
		},
		{
			rank: 5,
			id: "l-bikash",
			name: "Bikash Shrestha",
			location: "Bhaktapur",
			impactScore: 860,
			donationsCount: 18,
			volunteerHours: 65,
			peopleHelped: 104,
			role: "Volunteer",
			avatarUrl: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 6,
			id: "l-anisha",
			name: "Anisha Rai",
			location: "Dharan",
			impactScore: 740,
			donationsCount: 17,
			volunteerHours: 61,
			peopleHelped: 96,
			role: "Donor",
			avatarUrl: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=300&q=80"
		},
		{
			rank: 7,
			id: "l-bibek",
			name: "Bibek Tamang",
			location: "Hetauda",
			impactScore: 680,
			donationsCount: 15,
			volunteerHours: 58,
			peopleHelped: 88,
			role: "Volunteer",
			avatarUrl: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80"
		}
	]].sort((a, b) => b.impactScore - a.impactScore).filter((entry) => {
		if (roleFilter === "donors") return entry.role.includes("Donor");
		if (roleFilter === "volunteers") return entry.role.includes("Volunteer");
		return true;
	}).map((item, idx) => ({
		...item,
		rank: idx + 1
	}));
	const currentUserItem = rankedList.find((e) => e.isCurrentUser) || rankedList[3];
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		if (!containerRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).fromTo(".lb-header-item", {
				opacity: 0,
				y: 18
			}, {
				opacity: 1,
				y: 0,
				stagger: .07,
				duration: .5
			}).fromTo(".lb-user-card", {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				duration: .45
			}, "-=0.2").fromTo(".lb-row", {
				opacity: 0,
				y: 16
			}, {
				opacity: 1,
				y: 0,
				stagger: .05,
				duration: .4
			}, "-=0.1").fromTo(".lb-footer-item", {
				opacity: 0,
				y: 20
			}, {
				opacity: 1,
				y: 0,
				stagger: .1,
				duration: .45
			}, "-=0.1");
		}, containerRef);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion() || !rowsRef.current) return;
		const rows = rowsRef.current.querySelectorAll(".lb-row");
		if (rows.length > 0) gsapWithCSS.fromTo(rows, {
			opacity: 0,
			y: 8
		}, {
			opacity: 1,
			y: 0,
			stagger: .04,
			duration: .3,
			ease: "power2.out"
		});
	}, [timeframe, roleFilter]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground antialiased",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				ref: containerRef,
				className: "flex-1 shell py-8 md:py-12 space-y-10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "space-y-3 border-b border-border/80 pb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lb-header-item eyebrow",
								children: "COMMUNITY IMPACT"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "lb-header-item text-3xl md:text-5xl font-bold tracking-tight text-foreground",
								children: "People making a difference."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "lb-header-item text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed",
								children: "Every donation, volunteer hour, and fulfilled request moves the community forward."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "lb-header-item pt-2",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-xs font-mono text-muted-foreground border-l-2 border-foreground/30 pl-3 py-0.5",
									children: "Rankings are based on community impact — combining verified donations, volunteer contributions, and fulfilled requests."
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						className: "lb-user-card bg-card border border-border rounded-xl p-6 relative overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col md:flex-row md:items-center justify-between gap-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "eyebrow",
											children: "YOUR RANK"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "text-xs font-mono font-bold px-2 py-0.5 rounded bg-foreground text-background",
											children: ["#", currentUserItem.rank]
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-4",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
											src: currentUserItem.avatarUrl,
											alt: currentUserItem.name,
											className: "size-12 rounded-full object-cover border border-border shrink-0"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
											className: "text-xl font-bold tracking-tight text-foreground flex items-center gap-2",
											children: [currentUserItem.name, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-xs font-mono px-2 py-0.5 rounded border border-border bg-muted/40 font-normal",
												children: currentUserItem.location
											})]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-muted-foreground font-mono",
											children: currentUserItem.role
										})] })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs font-mono text-muted-foreground pt-1",
										children: "You're contributing to community impact! Keep making verified donations & volunteering."
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid grid-cols-3 gap-3 md:gap-6 border-t md:border-t-0 md:border-l border-border/80 pt-4 md:pt-0 md:pl-8 shrink-0 font-mono",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground block",
										children: "Impact"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl font-bold text-foreground",
										children: currentUserItem.impactScore.toLocaleString()
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground block",
										children: "Donations"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl font-bold text-foreground",
										children: currentUserItem.donationsCount
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs text-muted-foreground block",
										children: "Volunteer"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xl font-bold text-foreground",
										children: currentUserItem.volunteerHours
									})] })
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/80 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs font-mono text-muted-foreground uppercase tracking-wider",
									children: "FILTERS"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex rounded-lg border border-border p-1 bg-card text-xs font-mono",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTimeframe("this_month"),
										className: `px-3 py-1 rounded-md transition-colors ${timeframe === "this_month" ? "bg-foreground text-background font-semibold" : "text-muted-foreground hover:text-foreground"}`,
										children: "This Month"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => setTimeframe("all_time"),
										className: `px-3 py-1 rounded-md transition-colors ${timeframe === "all_time" ? "bg-foreground text-background font-semibold" : "text-muted-foreground hover:text-foreground"}`,
										children: "All Time"
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "inline-flex rounded-lg border border-border p-1 bg-card text-xs font-mono",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setRoleFilter("all"),
											className: `px-3 py-1 rounded-md transition-colors ${roleFilter === "all" ? "bg-foreground text-background font-semibold" : "text-muted-foreground hover:text-foreground"}`,
											children: "All"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setRoleFilter("donors"),
											className: `px-3 py-1 rounded-md transition-colors ${roleFilter === "donors" ? "bg-foreground text-background font-semibold" : "text-muted-foreground hover:text-foreground"}`,
											children: "Donors"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => setRoleFilter("volunteers"),
											className: `px-3 py-1 rounded-md transition-colors ${roleFilter === "volunteers" ? "bg-foreground text-background font-semibold" : "text-muted-foreground hover:text-foreground"}`,
											children: "Volunteers"
										})
									]
								})]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							ref: rowsRef,
							className: "border border-border rounded-xl bg-card overflow-hidden divide-y divide-border/80",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "hidden md:grid grid-cols-12 gap-4 p-4 text-[0.7rem] font-mono text-muted-foreground uppercase tracking-wider bg-muted/30",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-1",
										children: "RANK"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-4",
										children: "CONTRIBUTOR"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-2 text-right",
										children: "IMPACT SCORE"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-1 text-right",
										children: "DONATIONS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-2 text-right",
										children: "VOLUNTEER HOURS"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "col-span-2 text-right",
										children: "PEOPLE HELPED"
									})
								]
							}), rankedList.map((item) => {
								const isTop3 = item.rank <= 3;
								const isCurrentUser = item.isCurrentUser;
								return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: `lb-row p-4 transition-all flex flex-col md:grid md:grid-cols-12 md:gap-4 md:items-center ${isCurrentUser ? "bg-accent/70 border-l-4 border-l-foreground ring-1 ring-foreground/20" : isTop3 ? "hover:bg-accent/30 bg-card" : "hover:bg-accent/20"}`,
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-5 flex items-center gap-3",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: `font-mono text-sm font-bold w-7 text-center shrink-0 ${isTop3 ? "text-foreground font-black" : "text-muted-foreground"}`,
												children: item.rank < 10 ? `0${item.rank}` : item.rank
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
												src: item.avatarUrl,
												alt: item.name,
												className: "size-10 rounded-full object-cover border border-border shrink-0"
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "min-w-0",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex items-center gap-2",
													children: [
														/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-sm font-bold text-foreground truncate",
															children: item.name
														}),
														isCurrentUser && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[0.65rem] font-mono px-1.5 py-0.2 rounded bg-foreground text-background font-semibold shrink-0",
															children: "YOU"
														}),
														isTop3 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
															className: "text-[0.65rem] font-mono px-1.5 py-0.2 rounded border border-foreground/30 text-foreground shrink-0 hidden sm:inline-block",
															children: "TOP 3"
														})
													]
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
													className: "text-xs text-muted-foreground font-mono truncate",
													children: [
														item.location,
														" · ",
														item.role
													]
												})]
											})
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "col-span-7 grid grid-cols-4 gap-2 mt-3 md:mt-0 font-mono text-right border-t md:border-t-0 border-border/60 pt-3 md:pt-0",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.65rem] text-muted-foreground block md:hidden",
												children: "IMPACT"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-bold text-foreground",
												children: item.impactScore.toLocaleString()
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.65rem] text-muted-foreground block md:hidden",
												children: "DONATIONS"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-foreground",
												children: item.donationsCount
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.65rem] text-muted-foreground block md:hidden",
												children: "HOURS"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-foreground",
												children: item.volunteerHours
											})] }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-[0.65rem] text-muted-foreground block md:hidden",
												children: "HELPED"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
												className: "text-sm font-medium text-foreground",
												children: item.peopleHelped
											})] })
										]
									})]
								}, item.id);
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "lb-footer-item bg-card border border-border rounded-xl p-6 md:p-8 space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 border-b border-border/80 pb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "eyebrow",
								children: "HOW IMPACT IS CALCULATED"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-bold text-foreground",
								children: "Simple, transparent community math."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 p-4 border border-border rounded-lg bg-background/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-foreground font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 text-muted-foreground" }), " Verified Donations"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: "Points awarded for blood, food, clothing, and essential medical supplies delivered to verified needs."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 p-4 border border-border rounded-lg bg-background/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-foreground font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4 text-muted-foreground" }), " Volunteer Hours"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: "Logged and confirmed hours spent assisting camps, logistics, distribution, or education drives."
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2 p-4 border border-border rounded-lg bg-background/50",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center gap-2 text-foreground font-bold",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-muted-foreground" }), " Fulfilled Requests"]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-xs text-muted-foreground leading-relaxed",
										children: "Direct community requests marked resolved by hospitals, NGOs, or ward leaders across Nepal."
									})]
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "lb-footer-item bg-card border border-border rounded-xl p-8 text-center space-y-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 max-w-xl mx-auto",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "eyebrow",
									children: "GET INVOLVED"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-2xl md:text-3xl font-bold tracking-tight text-foreground",
									children: "Want to climb the leaderboard?"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground leading-relaxed",
									children: "Find an opportunity, donate something useful, or volunteer your time."
								})
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap items-center justify-center gap-4 pt-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/explore",
									className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-xs font-mono transition-opacity hover:opacity-90",
									children: ["Find an Opportunity ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/campaigns",
									className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground font-medium text-xs font-mono hover:bg-accent transition-colors",
									children: ["Donate ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/volunteers",
									className: "inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-border bg-background text-foreground font-medium text-xs font-mono hover:bg-accent transition-colors",
									children: ["Volunteer ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5" })]
								})
							]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { LeaderboardPage as component };
