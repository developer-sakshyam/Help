import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { C as CircleAlert, j as ArrowRight, m as MapPin, u as Search, y as Funnel } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-Ck_C9tE7.mjs";
import { n as VolunteerModal, t as DonateModal } from "./ActionModals-CPZI8uku.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/explore-Dr-x-GN_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var opportunities = [
	{
		id: "opp-001",
		category: "blood",
		title: "Urgent O+ Blood Needed",
		description: "A patient at Kathmandu Community Hospital needs an urgent O+ transfusion for surgery. Donors with this blood type are needed today.",
		location: {
			province: "Bagmati",
			district: "Kathmandu",
			city: "Kathmandu",
			lat: 27.7172,
			lng: 85.324
		},
		bloodGroup: "O+",
		urgency: "urgent",
		status: "open",
		organization: "Kathmandu Community Hospital",
		postedAt: "2026-08-08T08:30:00Z",
		tags: [
			"blood",
			"urgent",
			"O+",
			"hospital"
		],
		actionLabel: "Offer Help"
	},
	{
		id: "opp-002",
		category: "volunteers",
		title: "Community Cleanup in Lalitpur",
		description: "Join local volunteers to clear public spaces and restore shared gardens in Lalitpur. Tools and water are provided.",
		location: {
			province: "Bagmati",
			district: "Lalitpur",
			city: "Lalitpur",
			lat: 27.6634,
			lng: 85.3188
		},
		urgency: "normal",
		status: "available",
		organization: "Lalitpur Green Network",
		postedAt: "2026-08-07T10:15:00Z",
		tags: [
			"volunteer",
			"cleanup",
			"community"
		],
		actionLabel: "Volunteer"
	},
	{
		id: "opp-003",
		category: "food",
		title: "Food Parcel Distribution",
		description: "Packaged food donations are needed for families in Bhaktapur after the recent monsoon shortages.",
		location: {
			province: "Bagmati",
			district: "Bhaktapur",
			city: "Bhaktapur",
			lat: 27.6717,
			lng: 85.429
		},
		urgency: "normal",
		status: "open",
		organization: "Bhaktapur Relief Collective",
		postedAt: "2026-08-06T14:00:00Z",
		tags: [
			"food",
			"donation",
			"Bhaktapur"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-004",
		category: "medical",
		title: "Mobile Health Camp in Pokhara",
		description: "A free health clinic is being organized for Pokhara residents. Medical professionals and supplies are needed.",
		location: {
			province: "Gandaki",
			district: "Kaski",
			city: "Pokhara",
			lat: 28.2096,
			lng: 83.9856
		},
		urgency: "normal",
		status: "available",
		organization: "Pokhara Health Partnership",
		postedAt: "2026-08-05T09:20:00Z",
		tags: [
			"medical",
			"clinic",
			"Pokhara"
		],
		actionLabel: "Join"
	},
	{
		id: "opp-005",
		category: "clothing",
		title: "Warm Clothing for Mountain Families",
		description: "Collect and deliver warm jackets and blankets to families living in high-altitude communities near Jomsom.",
		location: {
			province: "Gandaki",
			district: "Mustang",
			city: "Jomsom",
			lat: 28.7769,
			lng: 83.7298
		},
		urgency: "urgent",
		status: "open",
		organization: "Himalayan Care Network",
		postedAt: "2026-08-07T18:05:00Z",
		tags: [
			"clothing",
			"winter",
			"urgent"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-006",
		category: "books",
		title: "School Books for Chitwan Children",
		description: "New and gently used textbooks are requested for primary schools in Chitwan to support the new school term.",
		location: {
			province: "Bagmati",
			district: "Chitwan",
			city: "Bharatpur",
			lat: 27.6792,
			lng: 84.4286
		},
		urgency: "normal",
		status: "open",
		organization: "Chitwan Learning Collective",
		postedAt: "2026-08-01T13:00:00Z",
		tags: [
			"books",
			"education",
			"schools"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-007",
		category: "furniture",
		title: "Furniture Drive for Local Shelter",
		description: "Help furnish a shelter in Birgunj with beds, tables, and storage for families recovering from recent floods.",
		location: {
			province: "Madhesh",
			district: "Parsa",
			city: "Birgunj",
			lat: 27,
			lng: 84.8667
		},
		urgency: "normal",
		status: "available",
		organization: "Parsa Community Support",
		postedAt: "2026-08-02T11:30:00Z",
		tags: [
			"furniture",
			"shelter",
			"support"
		],
		actionLabel: "Offer Help"
	},
	{
		id: "opp-008",
		category: "electronics",
		title: "Tablet Donations for Remote Schools",
		description: "Remote learning centers in Jhapa need tablets and power banks for students with limited access to classrooms.",
		location: {
			province: "Koshi",
			district: "Jhapa",
			city: "Birtamod",
			lat: 26.4833,
			lng: 88.0667
		},
		urgency: "normal",
		status: "open",
		organization: "Jhapa Digital Access",
		postedAt: "2026-08-04T15:45:00Z",
		tags: [
			"electronics",
			"education",
			"technology"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-009",
		category: "blood",
		title: "A- Blood Drive for Emergency Ward",
		description: "A local emergency ward in Dharan is asking for A- donors to support multiple surgeries this week.",
		location: {
			province: "Koshi",
			district: "Sunsari",
			city: "Dharan",
			lat: 26.812,
			lng: 87.2838
		},
		bloodGroup: "A-",
		urgency: "urgent",
		status: "open",
		organization: "Dharan Emergency Network",
		postedAt: "2026-08-08T06:45:00Z",
		tags: [
			"blood",
			"urgent",
			"A-"
		],
		actionLabel: "Offer Help"
	},
	{
		id: "opp-010",
		category: "volunteers",
		title: "Library Restoration Volunteers",
		description: "Volunteers are needed to clean, organize, and reopen a community library in Nepalgunj.",
		location: {
			province: "Lumbini",
			district: "Banke",
			city: "Nepalgunj",
			lat: 28.0588,
			lng: 81.6174
		},
		urgency: "normal",
		status: "available",
		organization: "Banke Book Circle",
		postedAt: "2026-08-03T12:10:00Z",
		tags: [
			"volunteer",
			"library",
			"community"
		],
		actionLabel: "Volunteer"
	},
	{
		id: "opp-011",
		category: "medical",
		title: "Medicine Refill Support for Rural Clinic",
		description: "A rural clinic in Kailali needs funding and transport support for essential medicines.",
		location: {
			province: "Sudurpashchim",
			district: "Kailali",
			city: "Dhangadhi",
			lat: 28.6983,
			lng: 80.5996
		},
		urgency: "urgent",
		status: "open",
		organization: "Kailali Health Collective",
		postedAt: "2026-08-07T08:00:00Z",
		tags: [
			"medical",
			"urgent",
			"clinic"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-012",
		category: "food",
		title: "Community Kitchen Support in Biratnagar",
		description: "The community kitchen needs food supplies and volunteers to serve families in need.",
		location: {
			province: "Koshi",
			district: "Morang",
			city: "Biratnagar",
			lat: 26.4525,
			lng: 87.2718
		},
		urgency: "normal",
		status: "available",
		organization: "Biratnagar Care Kitchen",
		postedAt: "2026-08-06T07:40:00Z",
		tags: [
			"food",
			"kitchen",
			"volunteer"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-013",
		category: "books",
		title: "Reading Corner for Rural School",
		description: "Build a reading corner and donate books to a school in Nawalparasi.",
		location: {
			province: "Lumbini",
			district: "Nawalparasi",
			city: "Bardaghat",
			lat: 27.6429,
			lng: 83.5625
		},
		urgency: "normal",
		status: "open",
		organization: "Lumbini Learning Trust",
		postedAt: "2026-08-02T09:10:00Z",
		tags: [
			"books",
			"education",
			"school"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-014",
		category: "electronics",
		title: "Power Banks for Remote Health Volunteers",
		description: "Help deliver power banks to volunteers working in mobile health clinics in remote districts.",
		location: {
			province: "Karnali",
			district: "Jumla",
			city: "Jumla",
			lat: 29.2798,
			lng: 82.1889
		},
		urgency: "normal",
		status: "available",
		organization: "Karnali Care Corps",
		postedAt: "2026-08-01T11:50:00Z",
		tags: [
			"electronics",
			"health",
			"remote"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-015",
		category: "volunteers",
		title: "Sunsari School Painting Day",
		description: "Volunteers are needed to paint classrooms and classrooms in a Sunsari school ahead of reopening.",
		location: {
			province: "Koshi",
			district: "Sunsari",
			city: "Inaruwa",
			lat: 26.6381,
			lng: 87.2125
		},
		urgency: "normal",
		status: "available",
		organization: "Sunsari Youth Action",
		postedAt: "2026-08-04T08:25:00Z",
		tags: [
			"volunteer",
			"school",
			"painting"
		],
		actionLabel: "Volunteer"
	},
	{
		id: "opp-016",
		category: "blood",
		title: "AB+ Blood Request for Surgery",
		description: "The neonatal unit in Pokhara needs an AB+ blood donor for a scheduled surgery.",
		location: {
			province: "Gandaki",
			district: "Kaski",
			city: "Pokhara",
			lat: 28.2096,
			lng: 83.9856
		},
		bloodGroup: "AB+",
		urgency: "urgent",
		status: "open",
		organization: "Pokhara Children’s Hospital",
		postedAt: "2026-08-08T05:15:00Z",
		tags: [
			"blood",
			"urgent",
			"AB+",
			"children"
		],
		actionLabel: "Offer Help"
	},
	{
		id: "opp-017",
		category: "medical",
		title: "First Aid Kits for Flood Response",
		description: "A rapid response team in Banke needs first aid kits and medical supplies for flood-affected villages.",
		location: {
			province: "Lumbini",
			district: "Banke",
			city: "Nepalgunj",
			lat: 28.0588,
			lng: 81.6174
		},
		urgency: "urgent",
		status: "open",
		organization: "Banke Relief Network",
		postedAt: "2026-08-06T19:20:00Z",
		tags: [
			"medical",
			"urgent",
			"flood"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-018",
		category: "clothing",
		title: "Blankets for Winter Shelter",
		description: "Blankets and warm clothing are requested for a temporary shelter in Tulsipur.",
		location: {
			province: "Lumbini",
			district: "Dang",
			city: "Tulsipur",
			lat: 28.0561,
			lng: 82.2877
		},
		urgency: "normal",
		status: "available",
		organization: "Dang Care Initiative",
		postedAt: "2026-08-03T13:00:00Z",
		tags: [
			"clothing",
			"shelter",
			"blankets"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-019",
		category: "food",
		title: "Rice Distribution for Kailali",
		description: "A food distribution effort needs rice sacks and volunteer drivers in Kailali district.",
		location: {
			province: "Sudurpashchim",
			district: "Kailali",
			city: "Dhangadhi",
			lat: 28.6983,
			lng: 80.5996
		},
		urgency: "normal",
		status: "open",
		organization: "Sudurpashchim Food Relief",
		postedAt: "2026-08-05T16:45:00Z",
		tags: [
			"food",
			"distribution",
			"rice"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-020",
		category: "electronics",
		title: "Solar Chargers for Remote School",
		description: "Solar chargers are needed to power tablets at a remote school in Taplejung.",
		location: {
			province: "Koshi",
			district: "Taplejung",
			city: "Taplejung",
			lat: 27.3343,
			lng: 87.2638
		},
		urgency: "normal",
		status: "available",
		organization: "Koshi Education Project",
		postedAt: "2026-08-02T14:20:00Z",
		tags: [
			"electronics",
			"solar",
			"education"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-021",
		category: "books",
		title: "Library Repair and Book Drive",
		description: "Support repair work and book donations at a community library in Bharatpur.",
		location: {
			province: "Bagmati",
			district: "Chitwan",
			city: "Bharatpur",
			lat: 27.6792,
			lng: 84.4286
		},
		urgency: "normal",
		status: "available",
		organization: "Chitwan Education Coalition",
		postedAt: "2026-08-01T08:40:00Z",
		tags: [
			"books",
			"library",
			"repair"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-022",
		category: "volunteers",
		title: "Water Safety Training in Bhaktapur",
		description: "Volunteers with training experience are needed to support a water safety program for children.",
		location: {
			province: "Bagmati",
			district: "Bhaktapur",
			city: "Bhaktapur",
			lat: 27.6717,
			lng: 85.429
		},
		urgency: "normal",
		status: "available",
		organization: "Bhaktapur Child Safety",
		postedAt: "2026-08-03T09:50:00Z",
		tags: [
			"volunteer",
			"training",
			"children"
		],
		actionLabel: "Volunteer"
	},
	{
		id: "opp-023",
		category: "medical",
		title: "Emergency Oxygen Supplies",
		description: "A clinic in Pokhara needs oxygen cylinders and logistics support for a respiratory response team.",
		location: {
			province: "Gandaki",
			district: "Kaski",
			city: "Pokhara",
			lat: 28.2096,
			lng: 83.9856
		},
		urgency: "urgent",
		status: "open",
		organization: "Pokhara Relief Agency",
		postedAt: "2026-08-08T04:00:00Z",
		tags: [
			"medical",
			"urgent",
			"oxygen"
		],
		actionLabel: "Donate"
	},
	{
		id: "opp-024",
		category: "clothing",
		title: "Shoes for School Children",
		description: "New shoes are requested for children attending school in Janakpur.",
		location: {
			province: "Madhesh",
			district: "Dhanusha",
			city: "Janakpur",
			lat: 26.7284,
			lng: 85.924
		},
		urgency: "normal",
		status: "available",
		organization: "Madhesh Child Support",
		postedAt: "2026-08-06T10:25:00Z",
		tags: [
			"clothing",
			"children",
			"shoes"
		],
		actionLabel: "Donate"
	}
];
var CATEGORIES = [
	{
		id: "all",
		label: "All Categories"
	},
	{
		id: "blood",
		label: "Blood"
	},
	{
		id: "food",
		label: "Food"
	},
	{
		id: "clothing",
		label: "Clothing"
	},
	{
		id: "medical",
		label: "Medical"
	},
	{
		id: "volunteers",
		label: "Volunteers"
	},
	{
		id: "books",
		label: "Books"
	}
];
function ExplorePage() {
	const [selectedCategory, setSelectedCategory] = (0, import_react.useState)("all");
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [urgentOnly, setUrgentOnly] = (0, import_react.useState)(false);
	const [donateItem, setDonateItem] = (0, import_react.useState)(null);
	const [volunteerItem, setVolunteerItem] = (0, import_react.useState)(null);
	(0, import_react.useRef)(null);
	(0, import_react.useRef)(null);
	const gridRef = (0, import_react.useRef)(null);
	const firstMount = (0, import_react.useRef)(true);
	const [displayed, setDisplayed] = (0, import_react.useState)(() => opportunities);
	useNavigate();
	const filtered = opportunities.filter((item) => {
		if (selectedCategory !== "all" && item.category !== selectedCategory) return false;
		if (urgentOnly && item.urgency !== "urgent") return false;
		if (searchQuery) {
			const q = searchQuery.toLowerCase();
			const matchTitle = item.title.toLowerCase().includes(q);
			const matchDesc = item.description.toLowerCase().includes(q);
			const matchLoc = `${item.location.city} ${item.location.district}`.toLowerCase().includes(q);
			return matchTitle || matchDesc || matchLoc;
		}
		return true;
	});
	(0, import_react.useEffect)(() => {
		if (!gridRef.current) {
			setDisplayed(filtered);
			return;
		}
		if (firstMount.current) {
			setDisplayed(filtered);
			firstMount.current = false;
			return;
		}
		if (prefersReducedMotion()) {
			setDisplayed(filtered);
			return;
		}
		const cards = gridRef.current.querySelectorAll(".op-card");
		if (cards.length) gsapWithCSS.to(cards, {
			opacity: 0,
			y: -8,
			duration: .18,
			stagger: .02,
			onComplete: () => {
				setDisplayed(filtered);
				requestAnimationFrame(() => {
					const next = gridRef.current?.querySelectorAll(".op-card");
					if (next && next.length) gsapWithCSS.from(next, {
						opacity: 0,
						y: 12,
						duration: .45,
						stagger: .06,
						ease: "power2.out"
					});
				});
			}
		});
		else setDisplayed(filtered);
	}, [
		selectedCategory,
		searchQuery,
		urgentOnly
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen flex flex-col bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "flex-1 shell py-8 md:py-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
						className: "mb-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow mb-2",
								children: "COMMUNITY OPPORTUNITIES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl md:text-5xl font-bold tracking-tight mb-4",
								children: "Explore requests & ways to help"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground max-w-2xl",
								children: "Find active requests for blood, supplies, volunteers, and community aid across Nepal."
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col md:flex-row gap-4 mb-8 items-stretch md:items-center justify-between bg-card p-4 rounded-xl border shadow-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "relative flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "text",
								placeholder: "Search by keyword, city, or district...",
								value: searchQuery,
								onChange: (e) => setSearchQuery(e.target.value),
								className: "w-full pl-9 pr-4 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2 items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4 text-muted-foreground shrink-0 ml-1" }), CATEGORIES.map((cat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: (e) => {
										if (!prefersReducedMotion()) gsapWithCSS.fromTo(e.currentTarget, { scale: 1 }, {
											scale: 1.03,
											duration: .12,
											yoyo: true,
											repeat: 1
										});
										setSelectedCategory(cat.id);
									},
									className: `px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${selectedCategory === cat.id ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"}`,
									children: cat.label
								}, cat.id))]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => setUrgentOnly((prev) => !prev),
								className: `inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full border transition-colors ${urgentOnly ? "bg-destructive/10 border-destructive text-destructive" : "border-border text-muted-foreground hover:bg-accent"}`,
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3.5" }), "Urgent Only"]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: gridRef,
						className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
						children: displayed.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-id": item.id,
							className: "op-card bg-card border rounded-xl p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow",
							onMouseEnter: (e) => {
								if (!prefersReducedMotion()) gsapWithCSS.to(e.currentTarget, {
									y: -4,
									duration: .16
								});
							},
							onMouseLeave: (e) => {
								if (!prefersReducedMotion()) gsapWithCSS.to(e.currentTarget, {
									y: 0,
									duration: .18
								});
							},
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between gap-2 mb-3",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs font-semibold uppercase tracking-wider text-primary px-2.5 py-1 bg-primary/10 rounded-md",
										children: item.category
									}), item.urgency === "urgent" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs font-medium text-destructive bg-destructive/10 px-2.5 py-1 rounded-md",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleAlert, { className: "size-3" }), "Urgent"]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-lg font-semibold mb-2 line-clamp-2",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-sm text-muted-foreground mb-4 line-clamp-3 leading-relaxed",
									children: item.description
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "pt-4 border-t border-border mt-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center justify-between text-xs text-muted-foreground mb-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
											item.location.city,
											", ",
											item.location.district
										]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.organization })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									onClick: () => {
										if (item.category === "volunteers" || item.actionLabel.toLowerCase().includes("volunteer")) setVolunteerItem({
											title: item.title,
											org: item.organization,
											location: `${item.location.city}, ${item.location.district}`
										});
										else setDonateItem({
											title: item.title,
											org: item.organization,
											category: item.category.toUpperCase()
										});
									},
									className: "w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors",
									children: [item.actionLabel, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
								})]
							})]
						}, item.id))
					}),
					filtered.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-16 bg-card rounded-xl border p-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold mb-2",
								children: "No opportunities found"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground max-w-md mx-auto mb-6",
								children: "Try adjusting your search query or filters to discover available requests."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => {
									setSelectedCategory("all");
									setSearchQuery("");
									setUrgentOnly(false);
								},
								className: "px-4 py-2 text-sm font-medium rounded-lg border hover:bg-accent",
								children: "Reset Filters"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DonateModal, {
				isOpen: !!donateItem,
				onClose: () => setDonateItem(null),
				initialTitle: donateItem?.title,
				initialOrg: donateItem?.org,
				initialCategory: donateItem?.category
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerModal, {
				isOpen: !!volunteerItem,
				onClose: () => setVolunteerItem(null),
				initialTitle: volunteerItem?.title,
				initialOrg: volunteerItem?.org,
				initialLocation: volunteerItem?.location
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
//#endregion
export { ExplorePage as component };
