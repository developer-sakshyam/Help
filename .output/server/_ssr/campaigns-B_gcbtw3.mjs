import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { n as AnimatedButton, t as hero_nepal_default } from "./hero-nepal-CQ_saR7n.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { C as CircleAlert, E as Calendar, T as Check, _ as Heart, a as Target, c as Sparkles, j as ArrowRight, m as MapPin, n as Users, u as Search, x as Clock, y as Funnel } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-CHfIrWAu.mjs";
import { n as fetchApi, t as DetailModal } from "./apiClient-BM2ikrTW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/campaigns-B_gcbtw3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function AnimatedProgressBar({ percentage, className = "", barColorClass = "bg-primary" }) {
	const barRef = (0, import_react.useRef)(null);
	const clampedPercentage = Math.min(100, Math.max(0, percentage));
	(0, import_react.useEffect)(() => {
		const el = barRef.current;
		if (!el) return;
		if (prefersReducedMotion()) {
			gsapWithCSS.set(el, { width: `${clampedPercentage}%` });
			return;
		}
		gsapWithCSS.fromTo(el, { width: "0%" }, {
			width: `${clampedPercentage}%`,
			duration: 1.1,
			ease: "power2.out",
			scrollTrigger: {
				trigger: el,
				start: "top 90%"
			}
		});
	}, [clampedPercentage]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `w-full bg-muted rounded-full overflow-hidden h-2.5 ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: barRef,
			className: `h-full rounded-full transition-all ${barColorClass}`,
			style: { width: "0%" },
			"aria-valuenow": clampedPercentage,
			"aria-valuemin": 0,
			"aria-valuemax": 100,
			role: "progressbar"
		})
	});
}
var campaignsDemoData = [
	{
		id: "camp-001",
		title: "Emergency Winter Blanket & Warm Clothing Drive",
		organization: "Himalayan Hope Initiative",
		category: "Clothing",
		location: "Manang & Mustang Districts",
		district: "Manang",
		province: "Gandaki",
		description: "Collecting and distributing 1,500 heavy winter blankets and thermal jackets for vulnerable families before severe freezing snowfall.",
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
			"Sorting & packing volunteers at Pokhara warehouse"
		]
	},
	{
		id: "camp-002",
		title: "Emergency Blood Donor Camp — Teaching Hospital",
		organization: "Nepal Red Cross Society — Kaski",
		category: "Blood",
		location: "Prithvi Chowk, Pokhara",
		district: "Kaski",
		province: "Gandaki",
		description: "Urgent drive to collect 250 units of O negative, A positive, and B negative blood to replenish regional hospital reserves.",
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
			"Refreshments & juice stall helpers"
		]
	},
	{
		id: "camp-003",
		title: "Kathmandu Valley Monsoon Flood Relief Ration Distribution",
		organization: "Kathmandu Valley Food Relief Foundation",
		category: "Food",
		location: "Balkhu & Balkumari Settlements",
		district: "Kathmandu",
		province: "Bagmati",
		description: "Providing 10-day emergency food rations (rice, lentils, oil, salt, clean water tablets) to families affected by Bagmati river overflow.",
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
			"Water purification drops & hygiene bars"
		]
	},
	{
		id: "camp-004",
		title: "Remote Health & Dental Clinic — Solukhumbu",
		organization: "Medical Aid & Rural Health Nepal",
		category: "Medical",
		location: "Salleri & Surke Villages",
		district: "Solukhumbu",
		province: "Koshi",
		description: "Deploying 12 volunteer doctors and nurses to provide free health checkups, basic surgeries, and prescription medicines to 1,200 rural villagers.",
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
			"Local translators (Sherpa/Nepali)"
		]
	},
	{
		id: "camp-005",
		title: "Clean Bagmati River & Urban Riverbank Restoration",
		organization: "Youth Green Action Nepal",
		category: "Environment",
		location: "Pashupati Corridor, Kathmandu",
		district: "Kathmandu",
		province: "Bagmati",
		description: "Mobilizing 500 youth volunteers for Saturday riverbank waste collection, plastic sorting, and bio-fencing along the riverbank.",
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
			"Volunteer coordinators for 5 river sectors"
		]
	},
	{
		id: "camp-006",
		title: "Solar Lights & Learning Kits for Mountain Schools",
		organization: "Himalayan Literacy Trust",
		category: "Education",
		location: "Simikot & Namkha",
		district: "Humla",
		province: "Karnali",
		description: "Equipping 15 off-grid mountain primary schools with rooftop solar battery systems, LED lights, and 1,000 nepali storybooks.",
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
			"Electrical installation volunteers"
		]
	},
	{
		id: "camp-007",
		title: "Surplus Food Rescue & Daily Meal Drive",
		organization: "Kathmandu Food Bank",
		category: "Food",
		location: "Kalimati & Koteshwor Hubs",
		district: "Kathmandu",
		province: "Bagmati",
		description: "Rescuing usable fresh fruits, vegetables, and grain surplus from wholesale markets every morning to feed 600 shelter residents.",
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
			"Storage crates & cooling box donations"
		]
	},
	{
		id: "camp-008",
		title: "Terai Monsoon Emergency Preparedness & Sandbag Wall",
		organization: "Terai Disaster Preparedness Group",
		category: "Disaster Relief",
		location: "Southern Morang Riverbanks",
		district: "Morang",
		province: "Koshi",
		description: "Constructing temporary sandbag river reinforcements along vulnerable Koshi riverbank villages before peak monsoon flood levels.",
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
			"Safety life vests & boots"
		]
	},
	{
		id: "camp-009",
		title: "Community Animal Vaccination & Stray Feeding Program",
		organization: "Animal Haven Nepal",
		category: "Volunteer",
		location: "Bharatpur & Ratnanagar",
		district: "Chitwan",
		province: "Bagmati",
		description: "Vaccinating 400 stray dogs against rabies, attaching reflective collars for night safety, and feeding community animals.",
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
			"Dry kibble & food bowls"
		]
	},
	{
		id: "camp-010",
		title: "Dignified Hygiene Kits & Health Education for Girls",
		organization: "Karnali Women Empowerment Network",
		category: "Medical",
		location: "Surkhet & Dailekh Schools",
		district: "Surkhet",
		province: "Karnali",
		description: "Distributing 2,000 eco-friendly reusable menstrual hygiene kits and holding health education sessions across 20 secondary schools.",
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
			"Hygiene soap & pouch kit donations"
		]
	}
];
var CAMPAIGN_CATEGORY_MAP = {
	healthcare: "Medical",
	education: "Education",
	disaster_relief: "Disaster Relief",
	poverty_alleviation: "Volunteer",
	environment: "Environment",
	women_empowerment: "Volunteer",
	child_welfare: "Volunteer",
	elderly_care: "Volunteer",
	disability_support: "Volunteer",
	community_development: "Volunteer",
	food_security: "Food",
	water_sanitation: "Volunteer",
	shelter_housing: "Volunteer",
	emergency_response: "Blood"
};
function mapCampaign(campaign) {
	const progress = campaign.goalAmount ? Math.min(100, Math.round((campaign.raisedAmount ?? 0) / campaign.goalAmount * 100)) : 0;
	return {
		id: campaign._id,
		title: campaign.title,
		image: campaign.coverImage || campaign.gallery?.find(Boolean) || void 0,
		organization: typeof campaign.organization === "string" ? campaign.organization : campaign.organization?.name || "Community",
		category: CAMPAIGN_CATEGORY_MAP[campaign.category.toLowerCase()] || campaign.category,
		location: campaign.location?.municipality || campaign.location?.district || "",
		district: campaign.location?.district || "",
		province: campaign.location?.province || "",
		description: campaign.shortDescription || campaign.description || "",
		goal: `${campaign.currency ?? "NPR"} ${campaign.goalAmount.toLocaleString()}`,
		progressPercentage: progress,
		participantsCount: (campaign.donorCount ?? 0) + (campaign.volunteerCount ?? 0),
		startDate: (campaign.startDate ?? "").split("T")[0],
		endDate: (campaign.endDate ?? "").split("T")[0],
		status: campaign.status.toLowerCase() === "active" ? "Active" : campaign.status.toLowerCase() === "draft" ? "Upcoming" : campaign.status.toLowerCase() === "completed" ? "Completed" : "Active",
		urgency: campaign.isUrgent ? "Urgent" : "Normal",
		volunteerNeeded: true,
		donationsNeeded: true,
		requirements: campaign.tags ?? []
	};
}
async function getCampaigns(filters) {
	const remoteData = await fetchApi("/api/campaigns?page=1&limit=100");
	const dataset = remoteData && Array.isArray(remoteData.data?.data) ? remoteData.data.data.map(mapCampaign) : campaignsDemoData;
	if (!filters) return dataset;
	return dataset.filter((item) => {
		if (filters.category && filters.category !== "all") {
			if (item.category.toLowerCase() !== filters.category.toLowerCase()) return false;
		}
		if (filters.status && filters.status !== "all") {
			if (item.status.toLowerCase() !== filters.status.toLowerCase()) return false;
		}
		if (filters.urgency && filters.urgency !== "all") {
			if (item.urgency.toLowerCase() !== filters.urgency.toLowerCase()) return false;
		}
		if (filters.province && filters.province !== "all") {
			if (item.province.toLowerCase() !== filters.province.toLowerCase()) return false;
		}
		if (filters.district && filters.district !== "all") {
			if (item.district.toLowerCase() !== filters.district.toLowerCase()) return false;
		}
		if (filters.query) {
			const q = filters.query.toLowerCase();
			const matchTitle = item.title.toLowerCase().includes(q);
			const matchOrg = item.organization.toLowerCase().includes(q);
			const matchDesc = item.description.toLowerCase().includes(q);
			const matchLoc = `${item.location} ${item.district} ${item.province}`.toLowerCase().includes(q);
			return matchTitle || matchOrg || matchDesc || matchLoc;
		}
		return true;
	});
}
var CATEGORY_OPTIONS = [
	"All Categories",
	"Blood",
	"Food",
	"Clothing",
	"Medical",
	"Environment",
	"Education",
	"Disaster Relief",
	"Volunteer"
];
var URGENCY_OPTIONS = [
	"All Urgencies",
	"Urgent",
	"Important",
	"Normal"
];
var STATUS_OPTIONS = [
	"All Statuses",
	"Active",
	"Upcoming",
	"Completed"
];
function CampaignsPage() {
	const [campaigns, setCampaigns] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("All Categories");
	const [selectedUrgency, setSelectedUrgency] = (0, import_react.useState)("All Urgencies");
	const [selectedStatus, setSelectedStatus] = (0, import_react.useState)("All Statuses");
	const [mobileFilterOpen, setMobileFilterOpen] = (0, import_react.useState)(false);
	const [selectedCampaign, setSelectedCampaign] = (0, import_react.useState)(null);
	const [actionFeedback, setActionFeedback] = (0, import_react.useState)(null);
	const heroRef = (0, import_react.useRef)(null);
	const filterRef = (0, import_react.useRef)(null);
	const cardsGridRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		async function loadData() {
			setLoading(true);
			const data = await getCampaigns({
				query: searchQuery,
				category: selectedCategory === "All Categories" ? void 0 : selectedCategory,
				urgency: selectedUrgency === "All Urgencies" ? void 0 : selectedUrgency,
				status: selectedStatus === "All Statuses" ? void 0 : selectedStatus
			});
			setCampaigns(data);
			setLoading(false);
		}
		loadData();
	}, [
		searchQuery,
		selectedCategory,
		selectedUrgency,
		selectedStatus
	]);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from(".camp-hero-media", {
				opacity: 0,
				scale: 1.03,
				duration: .8
			}).from(".camp-hero-text", {
				opacity: 0,
				y: 18,
				duration: .6
			}, "-=0.5").from(filterRef.current, {
				opacity: 0,
				x: -16,
				duration: .45
			}, "-=0.35").from(".camp-card", {
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
		const cards = cardsGridRef.current.querySelectorAll(".camp-card");
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
	}, [campaigns, loading]);
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
						className: "camp-hero-text space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-primary font-mono text-xs tracking-wider uppercase",
								children: "COMMUNITY IMPACT CAMPAIGNS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl sm:text-5xl font-bold tracking-tight leading-tight",
								children: "Be part of something bigger."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl",
								children: "Support active campaigns that turn community effort into real-world impact. Join drives for blood, food, winter supplies, health camps, and environmental cleanup."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "camp-hero-media relative rounded-2xl overflow-hidden shadow-lg border h-64 sm:h-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_nepal_default,
								alt: "Community campaigns across Nepal",
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 border backdrop-blur-md flex items-center justify-between text-xs sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Active Community Drives"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-primary font-mono",
									children: "10 Campaigns Active"
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
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4 text-primary" }), "Filter Campaigns"]
										}), (searchQuery || selectedCategory !== "All Categories" || selectedUrgency !== "All Urgencies" || selectedStatus !== "All Statuses") && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setSearchQuery("");
												setSelectedCategory("All Categories");
												setSelectedUrgency("All Urgencies");
												setSelectedStatus("All Statuses");
											},
											className: "text-xs text-muted-foreground hover:text-primary transition-colors",
											children: "Reset"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Search Keyword"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Winter Blanket, Blood...",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											className: "w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Category"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedCategory,
										onChange: (e) => setSelectedCategory(e.target.value),
										className: "w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
										children: CATEGORY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: opt,
											children: opt
										}, opt))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Urgency Level"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedUrgency,
										onChange: (e) => setSelectedUrgency(e.target.value),
										className: "w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
										children: URGENCY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: opt,
											children: opt
										}, opt))
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Campaign Status"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedStatus,
										onChange: (e) => setSelectedStatus(e.target.value),
										className: "w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
										children: STATUS_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
											value: opt,
											children: opt
										}, opt))
									})] })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:hidden flex items-center justify-between gap-3 bg-card p-4 border rounded-xl mb-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "relative flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "text",
									placeholder: "Search campaigns...",
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
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium mb-1",
								children: "Category"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: selectedCategory,
								onChange: (e) => setSelectedCategory(e.target.value),
								className: "w-full p-2 bg-background border rounded-lg text-sm",
								children: CATEGORY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: opt,
									children: opt
								}, opt))
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
								className: "block text-xs font-medium mb-1",
								children: "Urgency"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								value: selectedUrgency,
								onChange: (e) => setSelectedUrgency(e.target.value),
								className: "w-full p-2 bg-background border rounded-lg text-sm",
								children: URGENCY_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: opt,
									children: opt
								}, opt))
							})] })]
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
											children: campaigns.length
										}),
										" ",
										"campaigns"
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
							}) : campaigns.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: cardsGridRef,
								className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
								children: campaigns.map((camp) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CampaignCard, {
									campaign: camp,
									onView: () => setSelectedCampaign(camp)
								}, camp.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-16 bg-card rounded-2xl border p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "size-12 mx-auto text-muted-foreground/40 mb-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-1",
										children: "No campaigns match your criteria"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground max-w-sm mx-auto mb-6",
										children: "Try adjusting your category, urgency, or search filters."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setSearchQuery("");
											setSelectedCategory("All Categories");
											setSelectedUrgency("All Urgencies");
											setSelectedStatus("All Statuses");
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
			selectedCampaign && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailModal, {
				isOpen: Boolean(selectedCampaign),
				onClose: () => setSelectedCampaign(null),
				title: "Campaign Details",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md",
											children: selectedCampaign.category
										}),
										selectedCampaign.urgency === "Urgent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
											className: "inline-flex items-center gap-1 text-xs font-semibold text-destructive bg-destructive/10 px-2.5 py-1 rounded-md",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), "Urgent Need"]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground font-medium",
											children: selectedCampaign.status
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-bold",
									children: selectedCampaign.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-xs text-muted-foreground flex items-center gap-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
										selectedCampaign.location,
										" — Organized by",
										" ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "font-semibold text-foreground",
											children: selectedCampaign.organization
										})
									]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-4 bg-muted/40 rounded-xl border space-y-3",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs sm:text-sm font-semibold",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Campaign Progress" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-primary font-mono",
										children: [selectedCampaign.progressPercentage, "%"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedProgressBar, { percentage: selectedCampaign.progressPercentage }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs text-muted-foreground pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["Goal: ", selectedCampaign.goal] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }),
											selectedCampaign.participantsCount,
											" Participants Joined"
										]
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-1",
							children: "About Campaign"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: selectedCampaign.description
						})] }),
						selectedCampaign.requirements && selectedCampaign.requirements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-sm font-semibold mb-2 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-primary" }), "Specific Needs & Requirements"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "space-y-1.5 text-sm text-muted-foreground",
							children: selectedCampaign.requirements.map((req, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-center gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-1.5 h-1.5 rounded-full bg-primary shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: req })]
							}, idx))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between text-xs text-muted-foreground p-3 border rounded-lg bg-card",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calendar, { className: "size-3.5 text-primary" }),
									"Start: ",
									selectedCampaign.startDate
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-3.5 text-primary" }),
									"Deadline: ",
									selectedCampaign.endDate
								]
							})]
						}),
						actionFeedback && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "p-3 bg-emerald-600 text-white rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2 animate-fadeIn",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), actionFeedback]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t flex flex-wrap items-center justify-between gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedCampaign(null),
								className: "px-4 py-2 border rounded-lg text-sm hover:bg-accent",
								children: "Close"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-wrap items-center gap-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
										onClick: () => handleAction("You're in! Campaign joined successfully."),
										className: "px-5 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium",
										children: "Join Campaign"
									}),
									selectedCampaign.donationsNeeded && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AnimatedButton, {
										onClick: () => handleAction("Thank you! Donation pledge received."),
										className: "px-4 py-2 bg-secondary border text-secondary-foreground rounded-lg text-sm font-medium",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-3.5 mr-1 text-rose-500 fill-rose-500 inline" }), "Donate"]
									}),
									selectedCampaign.volunteerNeeded && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
										onClick: () => handleAction("Volunteer request submitted."),
										className: "px-4 py-2 border rounded-lg text-sm font-medium hover:bg-accent",
										children: "Volunteer"
									})
								]
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function CampaignCard({ campaign, onView }) {
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
		className: "camp-card bg-card border rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center justify-between gap-2 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-xs font-bold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md",
					children: campaign.category
				}), campaign.urgency === "Urgent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "inline-flex items-center gap-1 text-xs font-semibold text-destructive bg-destructive/10 px-2 py-0.5 rounded",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), "Urgent"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "font-semibold text-base mb-1.5 line-clamp-2",
				children: campaign.title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "text-xs text-muted-foreground flex items-center gap-1 mb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
					campaign.location,
					" • ",
					campaign.organization
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed",
				children: campaign.description
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5 mb-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-between text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-muted-foreground font-medium",
						children: [
							"Progress (",
							campaign.progressPercentage,
							"%)"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: campaign.goal
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedProgressBar, { percentage: campaign.progressPercentage })]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-3 border-t flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "text-xs text-muted-foreground flex items-center gap-1",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Users, { className: "size-3.5" }),
					campaign.participantsCount,
					" Joined"
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onView,
				className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline shrink-0",
				children: ["View Campaign", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 card-arrow" })]
			})]
		})]
	});
}
//#endregion
export { CampaignsPage as component };
