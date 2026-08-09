import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { n as AnimatedButton, t as hero_nepal_default } from "./hero-nepal-CQ_saR7n.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { D as Building2, E as Calendar, S as CircleCheck, T as Check, _ as Heart, b as FolderKanban, d as Phone, h as Mail, j as ArrowRight, m as MapPin, n as Users, u as Search, v as Globe, y as Funnel } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-CHfIrWAu.mjs";
import { n as fetchApi, t as DetailModal } from "./apiClient-BM2ikrTW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ngos-JhLQrlzf.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ngosDemoData = [
	{
		id: "ngo-001",
		name: "Nepal Red Cross Society — Kaski",
		location: "Ramghat, Pokhara",
		district: "Kaski",
		province: "Gandaki",
		causes: [
			"Healthcare",
			"Disaster Relief",
			"Blood Security"
		],
		description: "Leading humanitarian movement in Kaski providing emergency blood bank service, flood response, and community health training.",
		verified: true,
		founded: 1963,
		volunteersCount: 450,
		projectsCount: 18,
		contact: {
			phone: "+977 61-520123",
			email: "kaski@nrcs.org.np",
			address: "Ramghat-10, Pokhara, Nepal"
		},
		website: "https://nrcs.org.np",
		activeProjects: [
			"24/7 Pokhara Emergency Blood Bank",
			"Community Disaster Response Squad",
			"School First Aid Workshop Program"
		]
	},
	{
		id: "ngo-002",
		name: "Himalayan Literacy & Child Hope Trust",
		location: "Lazimpat, Kathmandu",
		district: "Kathmandu",
		province: "Bagmati",
		causes: [
			"Education",
			"Child Welfare",
			"Community Development"
		],
		description: "Empowering children in remote Himalayan districts through mobile libraries, school supplies, and scholarship funding.",
		verified: true,
		founded: 2011,
		volunteersCount: 120,
		projectsCount: 12,
		contact: {
			phone: "+977 1-4412890",
			email: "info@himalayanliteracy.org.np",
			address: "Lazimpat Road, Kathmandu, Nepal"
		},
		website: "https://himalayanliteracy.org.np",
		activeProjects: [
			"Mobile Library Bus for Rural Schools",
			"Solukhumbu Primary Education Fund",
			"Winter Warmth Clothing Pack Drive"
		]
	},
	{
		id: "ngo-003",
		name: "Kathmandu Valley Food Relief Foundation",
		location: "Kalimati, Kathmandu",
		district: "Kathmandu",
		province: "Bagmati",
		causes: [
			"Food Security",
			"Disaster Relief",
			"Community Development"
		],
		description: "Connecting surplus food from markets, hotels, and agricultural networks with community kitchens and shelters across the valley.",
		verified: true,
		founded: 2018,
		volunteersCount: 230,
		projectsCount: 8,
		contact: {
			phone: "+977 1-4289012",
			email: "help@kvfoodrelief.org",
			address: "Kalimati-13, Kathmandu, Nepal"
		},
		website: "https://kvfoodrelief.org",
		activeProjects: [
			"Daily Kitchen for Daily Wage Workers",
			"Surplus Produce Rescue Taskforce",
			"Community Nutrition Awareness Drive"
		]
	},
	{
		id: "ngo-004",
		name: "Medical Aid & Rural Health Nepal",
		location: "Koppundole, Lalitpur",
		district: "Lalitpur",
		province: "Bagmati",
		causes: [
			"Healthcare",
			"Disaster Relief",
			"Elder Care"
		],
		description: "Deploying mobile medical clinics and essential medicine kits to remote mountain communities without hospital access.",
		verified: true,
		founded: 2008,
		volunteersCount: 180,
		projectsCount: 24,
		contact: {
			phone: "+977 1-5523456",
			email: "contact@medicalaidnepal.org",
			address: "Koppundole-1, Lalitpur, Nepal"
		},
		website: "https://medicalaidnepal.org",
		activeProjects: [
			"Remote Eye & Dental Mobile Clinics",
			"Maternal Care Medicine Distribution",
			"Disaster Relief Medical Response Team"
		]
	},
	{
		id: "ngo-005",
		name: "Clean Green Pokhara Environment Society",
		location: "Prithvi Chowk, Pokhara",
		district: "Kaski",
		province: "Gandaki",
		causes: ["Environment", "Community Development"],
		description: "Protecting Phewa Lake and surrounding watersheds through regular cleanup campaigns, tree plantation, and waste sorting.",
		verified: false,
		founded: 2016,
		volunteersCount: 310,
		projectsCount: 15,
		contact: {
			phone: "+977 61-532109",
			email: "greenpokhara@gmail.com",
			address: "Prithvi Chowk, Pokhara, Nepal"
		},
		website: "https://greenpokhara.org",
		activeProjects: [
			"Weekly Phewa Lake Shore Cleanup",
			"10,000 Hillside Tree Plantation",
			"Zero Single-Use Plastic School Campaign"
		]
	},
	{
		id: "ngo-006",
		name: "Karnali Women Empowerment Network",
		location: "Birendranagar, Surkhet",
		district: "Surkhet",
		province: "Karnali",
		causes: [
			"Women Welfare",
			"Education",
			"Healthcare"
		],
		description: "Grassroots organization advocating for women's reproductive health, livelihood training, and gender equality in Karnali.",
		verified: true,
		founded: 2014,
		volunteersCount: 95,
		projectsCount: 9,
		contact: {
			phone: "+977 83-521045",
			email: "karnaliwomen@org.np",
			address: "Birendranagar-6, Surkhet, Nepal"
		},
		website: "https://karnaliwomen.org.np",
		activeProjects: [
			"Dignified Menstruation Hygiene Kits",
			"Handicrafts Skill & Micro-grant Program",
			"Legal Rights Awareness Workshops"
		]
	},
	{
		id: "ngo-007",
		name: "Animal Haven Nepal & Street Rescue",
		location: "Chitwan-3, Bharatpur",
		district: "Chitwan",
		province: "Bagmati",
		causes: ["Animal Welfare", "Community Development"],
		description: "Rescuing injured stray animals, operating spay/neuter drives, and educating communities on compassionate animal care.",
		verified: true,
		founded: 2017,
		volunteersCount: 140,
		projectsCount: 7,
		contact: {
			phone: "+977 56-510987",
			email: "rescue@animalhavennepal.org",
			address: "Bharatpur-3, Chitwan, Nepal"
		},
		website: "https://animalhavennepal.org",
		activeProjects: [
			"Rabies Vaccination & ABC Drive",
			"Emergency Canine Trauma Sanctuary",
			"School Kindness & Pet Care Lessons"
		]
	},
	{
		id: "ngo-008",
		name: "Terai Disaster Preparedness Group",
		location: "Main Road, Biratnagar",
		district: "Morang",
		province: "Koshi",
		causes: [
			"Disaster Relief",
			"Food Security",
			"Healthcare"
		],
		description: "Regional emergency coalition providing early flood warnings, rescue boat deployment, and dry ration kits during monsoon emergencies.",
		verified: true,
		founded: 2015,
		volunteersCount: 280,
		projectsCount: 14,
		contact: {
			phone: "+977 21-524310",
			email: "teraidisaster@coalition.org.np",
			address: "Main Road, Biratnagar, Nepal"
		},
		website: "https://teraidisaster.org.np",
		activeProjects: [
			"Monsoon Emergency Flood Shelter Kits",
			"Boat Rescue Volunteer Corps",
			"Safe Drinking Water Purifier Distribution"
		]
	}
];
function mapNGO(ngo) {
	const address = ngo.location.address || ngo.location.municipality || "";
	return {
		id: ngo._id,
		name: ngo.name,
		logo: ngo.logo || "",
		location: address ? `${address}, ${ngo.location.district}` : ngo.location.district,
		district: ngo.location.district,
		province: ngo.location.province,
		causes: ngo.focusAreas,
		description: ngo.description,
		verified: ngo.isVerified,
		founded: new Date(ngo.registrationDate).getFullYear(),
		volunteersCount: ngo.totalVolunteers,
		projectsCount: ngo.totalCampaigns,
		contact: {
			phone: ngo.contactPerson.phone,
			email: ngo.contactPerson.email,
			address: address || `${ngo.location.municipality || ""}, ${ngo.location.district}`
		},
		website: ngo.website || "",
		activeProjects: ngo.focusAreas.slice(0, 4)
	};
}
async function getNGOs(filters) {
	const remoteData = await fetchApi("/api/ngos?page=1&limit=100");
	const dataset = remoteData && Array.isArray(remoteData.data?.data) ? remoteData.data.data.map(mapNGO) : ngosDemoData;
	if (!filters) return dataset;
	return dataset.filter((item) => {
		if (filters.verifiedOnly && !item.verified) return false;
		if (filters.cause && filters.cause !== "all") {
			if (!item.causes.some((c) => c.toLowerCase().includes(filters.cause.toLowerCase()))) return false;
		}
		if (filters.province && filters.province !== "all") {
			if (item.province.toLowerCase() !== filters.province.toLowerCase()) return false;
		}
		if (filters.district && filters.district !== "all") {
			if (item.district.toLowerCase() !== filters.district.toLowerCase()) return false;
		}
		if (filters.query) {
			const q = filters.query.toLowerCase();
			const matchName = item.name.toLowerCase().includes(q);
			const matchDesc = item.description.toLowerCase().includes(q);
			const matchLoc = `${item.location} ${item.district} ${item.province}`.toLowerCase().includes(q);
			const matchCauses = item.causes.some((c) => c.toLowerCase().includes(q));
			return matchName || matchDesc || matchLoc || matchCauses;
		}
		return true;
	});
}
var CAUSE_OPTIONS = [
	"All Causes",
	"Education",
	"Healthcare",
	"Environment",
	"Food Security",
	"Disaster Relief",
	"Child Welfare",
	"Animal Welfare",
	"Community Development"
];
var PROVINCE_OPTIONS = [
	"All Provinces",
	"Bagmati",
	"Gandaki",
	"Koshi",
	"Karnali"
];
function NGOsPage() {
	const [ngos, setNgos] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedCause, setSelectedCause] = (0, import_react.useState)("All Causes");
	const [selectedProvince, setSelectedProvince] = (0, import_react.useState)("All Provinces");
	const [verifiedOnly, setVerifiedOnly] = (0, import_react.useState)(false);
	const [mobileFilterOpen, setMobileFilterOpen] = (0, import_react.useState)(false);
	const [selectedNGO, setSelectedNGO] = (0, import_react.useState)(null);
	const [actionFeedback, setActionFeedback] = (0, import_react.useState)(null);
	const heroRef = (0, import_react.useRef)(null);
	const filterRef = (0, import_react.useRef)(null);
	const cardsGridRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		async function loadData() {
			setLoading(true);
			const data = await getNGOs({
				query: searchQuery,
				cause: selectedCause === "All Causes" ? void 0 : selectedCause,
				province: selectedProvince === "All Provinces" ? void 0 : selectedProvince,
				verifiedOnly
			});
			setNgos(data);
			setLoading(false);
		}
		loadData();
	}, [
		searchQuery,
		selectedCause,
		selectedProvince,
		verifiedOnly
	]);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from(".ngo-hero-media", {
				opacity: 0,
				scale: 1.03,
				duration: .8
			}).from(".ngo-hero-text", {
				opacity: 0,
				y: 18,
				duration: .6
			}, "-=0.5").from(filterRef.current, {
				opacity: 0,
				x: -16,
				duration: .45
			}, "-=0.35").from(".ngo-card", {
				opacity: 0,
				y: 16,
				stagger: .06,
				duration: .5
			}, "-=0.3");
		});
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (loading || prefersReducedMotion() || !cardsGridRef.current) return;
		const cards = cardsGridRef.current.querySelectorAll(".ngo-card");
		if (cards.length > 0) gsapWithCSS.fromTo(cards, {
			opacity: 0,
			y: 12
		}, {
			opacity: 1,
			y: 0,
			duration: .4,
			stagger: .04,
			ease: "power2.out"
		});
	}, [ngos, loading]);
	const handleAction = (msg) => {
		setActionFeedback(msg);
		setTimeout(() => {
			setActionFeedback(null);
		}, 4e3);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				ref: heroRef,
				className: "border-b bg-card/50 py-10 md:py-16",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "shell grid grid-cols-1 md:grid-cols-2 gap-8 items-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ngo-hero-text space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-primary font-mono text-xs tracking-wider uppercase",
								children: "NONPROFIT ORGANIZATIONS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl sm:text-5xl font-bold tracking-tight leading-tight",
								children: "Organizations creating change."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl",
								children: "Discover verified organizations working across Nepal and find the causes you care about. Connect, support, or volunteer with on-the-ground initiatives."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ngo-hero-media relative rounded-2xl overflow-hidden shadow-lg border h-64 sm:h-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_nepal_default,
								alt: "Community NGO projects in Nepal",
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 border backdrop-blur-md flex items-center justify-between text-xs sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Verified Partner NGOs"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-primary font-mono",
									children: "180+ Organizations"
								})]
							})
						]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				className: "flex-1 shell py-8 md:py-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
							ref: filterRef,
							className: "hidden md:block w-72 shrink-0 space-y-6",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "sticky top-24 bg-card border rounded-xl p-5 space-y-6 shadow-sm",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex items-center justify-between border-b pb-3",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
											className: "font-semibold text-sm flex items-center gap-2",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4 text-primary" }), "Filter Organizations"]
										}), (searchQuery || selectedCause !== "All Causes" || selectedProvince !== "All Provinces" || verifiedOnly) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setSearchQuery("");
												setSelectedCause("All Causes");
												setSelectedProvince("All Provinces");
												setVerifiedOnly(false);
											},
											className: "text-xs text-muted-foreground hover:text-primary transition-colors",
											children: "Reset"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Search Organization"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Red Cross, Food Relief...",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											className: "w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Primary Cause"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedCause,
										onChange: (e) => setSelectedCause(e.target.value),
										className: "w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
										children: CAUSE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: opt,
											children: opt
										}, opt))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Province"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedProvince,
										onChange: (e) => setSelectedProvince(e.target.value),
										className: "w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
										children: PROVINCE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: opt,
											children: opt
										}, opt))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "pt-2 border-t",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
											className: "flex items-center gap-2 cursor-pointer text-sm",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
												type: "checkbox",
												checked: verifiedOnly,
												onChange: (e) => setVerifiedOnly(e.target.checked),
												className: "rounded border-gray-300 text-primary focus:ring-primary"
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified NGOs Only" })]
										})
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:hidden flex items-center justify-between gap-3 bg-card p-4 border rounded-xl mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search NGOs...",
									value: searchQuery,
									onChange: (e) => setSearchQuery(e.target.value),
									className: "w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setMobileFilterOpen((prev) => !prev),
								className: "inline-flex items-center gap-1.5 px-3 py-2 border rounded-lg text-sm bg-background hover:bg-accent",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4" }), "Filters"]
							})]
						}),
						mobileFilterOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:hidden bg-card border rounded-xl p-4 mb-6 space-y-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium mb-1",
									children: "Primary Cause"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedCause,
									onChange: (e) => setSelectedCause(e.target.value),
									className: "w-full p-2 bg-background border rounded-lg text-sm",
									children: CAUSE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: opt,
										children: opt
									}, opt))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "block text-xs font-medium mb-1",
									children: "Province"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedProvince,
									onChange: (e) => setSelectedProvince(e.target.value),
									className: "w-full p-2 bg-background border rounded-lg text-sm",
									children: PROVINCE_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: opt,
										children: opt
									}, opt))
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2 text-sm pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
										type: "checkbox",
										checked: verifiedOnly,
										onChange: (e) => setVerifiedOnly(e.target.checked)
									}), "Verified Only"]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center justify-between mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground font-medium",
									children: [
										"Showing",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-foreground font-bold",
											children: ngos.length
										}),
										" ",
										"organizations"
									]
								})
							}), loading ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
								children: [
									1,
									2,
									3,
									4
								].map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-64 bg-muted/40 animate-pulse rounded-xl border" }, n))
							}) : ngos.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: cardsGridRef,
								className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
								children: ngos.map((ngo) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(NGOCard, {
									ngo,
									onView: () => setSelectedNGO(ngo)
								}, ngo.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-16 bg-card rounded-2xl border p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-12 mx-auto text-muted-foreground/40 mb-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-1",
										children: "No organizations match your criteria"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground max-w-sm mx-auto mb-6",
										children: "Try adjusting your cause, location, or search filters."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setSearchQuery("");
											setSelectedCause("All Causes");
											setSelectedProvince("All Provinces");
											setVerifiedOnly(false);
										},
										className: "px-4 py-2 text-sm font-medium rounded-lg border hover:bg-accent transition-colors",
										children: "Clear All Filters"
									})
								]
							})]
						})
					]
				})
			}),
			selectedNGO && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailModal, {
				isOpen: Boolean(selectedNGO),
				onClose: () => setSelectedNGO(null),
				title: "Organization Identity",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-2xl shrink-0 border",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-8" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: selectedNGO.name
									}), selectedNGO.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), "Verified NGO"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground flex items-center gap-1 mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
										selectedNGO.location,
										", ",
										selectedNGO.province,
										" Province"
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-3 gap-3 p-4 bg-muted/40 rounded-xl border text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground font-medium",
									children: "Founded"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-base font-bold text-foreground flex items-center justify-center gap-1 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-primary" }), selectedNGO.founded]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground font-medium",
									children: "Active Projects"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-base font-bold text-primary flex items-center justify-center gap-1 mt-0.5",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "size-3.5" }), selectedNGO.projectsCount]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground font-medium",
									children: "Volunteers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-base font-bold text-emerald-600 flex items-center justify-center gap-1 mt-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }),
										selectedNGO.volunteersCount,
										"+"
									]
								})] })
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-1",
							children: "Mission & Purpose"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: selectedNGO.description
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-2",
							children: "Focus Causes"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: selectedNGO.causes.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border",
								children: c
							}, c))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-sm font-semibold mb-2 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "size-4 text-primary" }), "Active Projects & Campaigns"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 text-sm text-muted-foreground",
							children: selectedNGO.activeProjects.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: p })]
							}, p))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 bg-card rounded-xl border space-y-2 text-xs sm:text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "font-semibold text-foreground mb-1",
									children: "Official Contact Information"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedNGO.contact.phone })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: selectedNGO.contact.email })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-muted-foreground",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Globe, { className: "size-3.5 text-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: selectedNGO.website,
										target: "_blank",
										rel: "noreferrer",
										className: "underline hover:text-primary",
										children: selectedNGO.website
									})]
								})
							]
						}),
						actionFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-emerald-600 text-white rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2 animate-fadeIn",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), actionFeedback]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedNGO(null),
								className: "px-4 py-2 border rounded-lg text-sm hover:bg-accent",
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
									onClick: () => handleAction(`Support request logged for ${selectedNGO.name}`),
									className: "px-4 py-2 bg-secondary border text-secondary-foreground rounded-lg text-sm",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5 mr-1 text-rose-500 fill-rose-500 inline" }), "Support"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
									onClick: () => handleAction(`Volunteer request submitted to ${selectedNGO.name}`),
									className: "px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm",
									children: "Volunteer with NGO"
								})]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function NGOCard({ ngo, onView }) {
	const cardRef = (0, import_react.useRef)(null);
	const handleMouseEnter = () => {
		if (prefersReducedMotion() || !cardRef.current) return;
		gsapWithCSS.to(cardRef.current, {
			y: -4,
			duration: .2,
			ease: "power2.out"
		});
		const arrow = cardRef.current.querySelector(".card-arrow");
		if (arrow) gsapWithCSS.to(arrow, {
			x: 4,
			duration: .2
		});
	};
	const handleMouseLeave = () => {
		if (prefersReducedMotion() || !cardRef.current) return;
		gsapWithCSS.to(cardRef.current, {
			y: 0,
			duration: .2,
			ease: "power2.out"
		});
		const arrow = cardRef.current.querySelector(".card-arrow");
		if (arrow) gsapWithCSS.to(arrow, {
			x: 0,
			duration: .2
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: cardRef,
		onMouseEnter: handleMouseEnter,
		onMouseLeave: handleMouseLeave,
		className: "ngo-card bg-card border rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex items-start justify-between gap-3 mb-3",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-xl bg-primary/10 text-primary font-bold flex items-center justify-center border shrink-0",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Building2, { className: "size-6" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-semibold text-base flex items-center gap-1.5",
						children: [ngo.name, ngo.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-500 shrink-0" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
							ngo.district,
							", ",
							ngo.province
						]
					})] })]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed",
				children: ngo.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5 mb-4",
				children: [ngo.causes.slice(0, 3).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border",
					children: c
				}, c)), ngo.causes.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] px-1.5 py-0.5 text-muted-foreground",
					children: ["+", ngo.causes.length - 3]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-3 border-t flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-3 text-xs text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderKanban, { className: "size-3.5 text-primary" }),
						ngo.projectsCount,
						" Projects"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-1",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5 text-emerald-600" }),
						ngo.volunteersCount,
						" Helpers"
					]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onView,
				className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline shrink-0",
				children: ["View NGO", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 card-arrow" })]
			})]
		})]
	});
}
//#endregion
export { NGOsPage as component };
