import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { n as AnimatedButton, t as hero_nepal_default } from "./hero-nepal-CQ_saR7n.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { A as Award, O as Briefcase, S as CircleCheck, T as Check, i as UserCheck, j as ArrowRight, m as MapPin, s as Star, u as Search, x as Clock, y as Funnel } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-CHfIrWAu.mjs";
import { n as fetchApi, t as DetailModal } from "./apiClient-BM2ikrTW.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/volunteers-BLnle0_W.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var volunteersDemoData = [
	{
		id: "vol-001",
		name: "Aarav Shrestha",
		profileImage: "",
		location: "Thamel, Kathmandu",
		district: "Kathmandu",
		province: "Bagmati",
		skills: [
			"First Aid",
			"Disaster Response",
			"Logistics",
			"Emergency Medical"
		],
		interests: [
			"Disaster Relief",
			"Healthcare",
			"Blood Donation"
		],
		experience: "3 years active volunteer with Nepal Red Cross Society",
		availability: "Weekends & Emergency Callouts",
		verified: true,
		rating: 4.9,
		volunteerHours: 184,
		bio: "Certified EMT and community responder based in Kathmandu. Passionate about rapid disaster response and health camps across rural Bagmati."
	},
	{
		id: "vol-002",
		name: "Pasang Sherpa",
		profileImage: "",
		location: "Lakeside, Pokhara",
		district: "Kaski",
		province: "Gandaki",
		skills: [
			"High Altitude Rescue",
			"Mountain Navigation",
			"First Aid",
			"Nepali/English Guide"
		],
		interests: [
			"Environment",
			"Disaster Relief",
			"Youth Training"
		],
		experience: "5 years rescue volunteer and mountain trail guide",
		availability: "Flexible / Full-Time Availability",
		verified: true,
		rating: 5,
		volunteerHours: 320,
		bio: "Experienced mountain climber and community safety lead in Pokhara. Dedicated to environmental conservation and mountain rescue operations."
	},
	{
		id: "vol-003",
		name: "Anjali Thapa",
		profileImage: "",
		location: "Patan, Lalitpur",
		district: "Lalitpur",
		province: "Bagmati",
		skills: [
			"Teaching & Tutoring",
			"Child Care",
			"Event Coordination",
			"Community Outreach"
		],
		interests: [
			"Education",
			"Child Welfare",
			"Food Security"
		],
		experience: "2 years volunteer tutor at community learning centres",
		availability: "Weekday Evenings",
		verified: true,
		rating: 4.8,
		volunteerHours: 96,
		bio: "Educator and youth mentor in Patan. Loves organizing weekend literacy workshops and surplus food collection for local children's homes."
	},
	{
		id: "vol-004",
		name: "Kripa Adhikari",
		profileImage: "",
		location: "Bhanimandal, Lalitpur",
		district: "Lalitpur",
		province: "Bagmati",
		skills: [
			"Nursing",
			"Health Screening",
			"Public Health Care",
			"Blood Grouping"
		],
		interests: [
			"Healthcare",
			"Blood Donation",
			"Elder Care"
		],
		experience: "4 years clinical nurse & community health organizer",
		availability: "Sundays & Holidays",
		verified: true,
		rating: 4.9,
		volunteerHours: 210,
		bio: "Staff nurse passionate about health equity. Regularly organizes free health checkup camps and blood donor drives in Lalitpur."
	},
	{
		id: "vol-005",
		name: "Bimal Gurung",
		profileImage: "",
		location: "Dharan-8, Sunsari",
		district: "Sunsari",
		province: "Koshi",
		skills: [
			"Heavy Driving",
			"Supply Distribution",
			"Camp Construction",
			"Youth Leadership"
		],
		interests: [
			"Community Development",
			"Disaster Relief",
			"Sports Education"
		],
		experience: "3 years relief cargo coordinator",
		availability: "Weekends",
		verified: false,
		rating: 4.7,
		volunteerHours: 142,
		bio: "Community youth organizer in Sunsari. Specializes in managing supply logistics and building temporary shelters during flood emergencies."
	},
	{
		id: "vol-006",
		name: "Sushma Karki",
		profileImage: "",
		location: "Birendranagar, Surkhet",
		district: "Surkhet",
		province: "Karnali",
		skills: [
			"Community Mobilization",
			"Women Rights Advocacy",
			"Basic Counseling",
			"Documentation"
		],
		interests: [
			"Women Welfare",
			"Education",
			"Mental Health"
		],
		experience: "4 years rural community mobilizer in Karnali",
		availability: "Full-Time Availability",
		verified: true,
		rating: 4.9,
		volunteerHours: 260,
		bio: "Social advocate working across Karnali province. Committed to women's empowerment, hygiene kit distribution, and adult literacy programs."
	},
	{
		id: "vol-007",
		name: "Ramesh Dahal",
		profileImage: "",
		location: "Bargachhi, Biratnagar",
		district: "Morang",
		province: "Koshi",
		skills: [
			"IT Support",
			"Digital Literacy",
			"Data Management",
			"Social Media"
		],
		interests: [
			"Education",
			"Technology",
			"Youth Training"
		],
		experience: "2 years computer training volunteer",
		availability: "Evenings & Saturdays",
		verified: false,
		rating: 4.6,
		volunteerHours: 85,
		bio: "IT graduate offering free digital literacy classes for students and local business owners in Morang. Tech lead for local campaign sites."
	},
	{
		id: "vol-008",
		name: "Pooja Bhattarai",
		profileImage: "",
		location: "Narayangarh, Chitwan",
		district: "Chitwan",
		province: "Bagmati",
		skills: [
			"Veterinary Care",
			"Animal Rescue",
			"Awareness Campaigns",
			"Fundraising"
		],
		interests: [
			"Animal Welfare",
			"Environment",
			"Community Safety"
		],
		experience: "3 years stray animal rescue worker",
		availability: "On-Call & Weekends",
		verified: true,
		rating: 4.8,
		volunteerHours: 175,
		bio: "Veterinary student in Chitwan dedicated to street animal care, vaccination drives, and humane urban wildlife protection."
	}
];
function mapVolunteer(volunteer) {
	const skills = [...volunteer.requiredSkills || [], ...volunteer.preferredSkills || []].filter(Boolean);
	const address = volunteer.location.municipality || volunteer.location.district || "";
	const availability = volunteer.applicationDeadline ? `Open until ${new Date(volunteer.applicationDeadline).toLocaleDateString()}` : "Open";
	return {
		id: volunteer._id,
		name: volunteer.title,
		profileImage: volunteer.gallery?.[0] || void 0,
		location: address,
		district: volunteer.location.district,
		province: volunteer.location.province,
		skills,
		interests: [volunteer.type, ...volunteer.preferredSkills?.slice(0, 2) || []].filter(Boolean),
		experience: volunteer.shortDescription || "Volunteer opportunity",
		availability,
		verified: volunteer.status === "open" || volunteer.isFeatured === true,
		rating: 4.8,
		volunteerHours: volunteer.volunteerCount || 0,
		bio: volunteer.description
	};
}
async function getVolunteers(filters) {
	const remoteData = await fetchApi("/api/volunteers?page=1&limit=100");
	const dataset = remoteData && Array.isArray(remoteData.data?.data) ? remoteData.data.data.map(mapVolunteer) : volunteersDemoData;
	if (!filters) return dataset;
	return dataset.filter((item) => {
		if (filters.verifiedOnly && !item.verified) return false;
		if (filters.skill && filters.skill !== "all") {
			if (!item.skills.some((s) => s.toLowerCase().includes(filters.skill.toLowerCase()))) return false;
		}
		if (filters.interest && filters.interest !== "all") {
			if (!item.interests.some((i) => i.toLowerCase().includes(filters.interest.toLowerCase()))) return false;
		}
		if (filters.province && filters.province !== "all") {
			if (item.province.toLowerCase() !== filters.province.toLowerCase()) return false;
		}
		if (filters.district && filters.district !== "all") {
			if (item.district.toLowerCase() !== filters.district.toLowerCase()) return false;
		}
		if (filters.availability && filters.availability !== "all") {
			if (!item.availability.toLowerCase().includes(filters.availability.toLowerCase())) return false;
		}
		if (filters.query) {
			const q = filters.query.toLowerCase();
			const matchName = item.name.toLowerCase().includes(q);
			const matchBio = item.bio.toLowerCase().includes(q);
			const matchLoc = `${item.location} ${item.district} ${item.province}`.toLowerCase().includes(q);
			const matchSkills = item.skills.some((s) => s.toLowerCase().includes(q));
			return matchName || matchBio || matchLoc || matchSkills;
		}
		return true;
	});
}
var SKILL_OPTIONS = [
	"All Skills",
	"First Aid",
	"Disaster Response",
	"Logistics",
	"Nursing",
	"High Altitude Rescue",
	"Teaching & Tutoring",
	"IT Support",
	"Community Mobilization",
	"Veterinary Care"
];
var PROVINCE_OPTIONS = [
	"All Provinces",
	"Bagmati",
	"Gandaki",
	"Koshi",
	"Karnali"
];
function VolunteersPage() {
	const [volunteers, setVolunteers] = (0, import_react.useState)([]);
	const [loading, setLoading] = (0, import_react.useState)(true);
	const [searchQuery, setSearchQuery] = (0, import_react.useState)("");
	const [selectedSkill, setSelectedSkill] = (0, import_react.useState)("All Skills");
	const [selectedProvince, setSelectedProvince] = (0, import_react.useState)("All Provinces");
	const [verifiedOnly, setVerifiedOnly] = (0, import_react.useState)(false);
	const [mobileFilterOpen, setMobileFilterOpen] = (0, import_react.useState)(false);
	const [selectedVolunteer, setSelectedVolunteer] = (0, import_react.useState)(null);
	const [invitedStatus, setInvitedStatus] = (0, import_react.useState)({});
	const heroRef = (0, import_react.useRef)(null);
	const filterRef = (0, import_react.useRef)(null);
	const cardsGridRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		async function loadData() {
			setLoading(true);
			const data = await getVolunteers({
				query: searchQuery,
				skill: selectedSkill === "All Skills" ? void 0 : selectedSkill,
				province: selectedProvince === "All Provinces" ? void 0 : selectedProvince,
				verifiedOnly
			});
			setVolunteers(data);
			setLoading(false);
		}
		loadData();
	}, [
		searchQuery,
		selectedSkill,
		selectedProvince,
		verifiedOnly
	]);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline({ defaults: { ease: "power3.out" } }).from(".vol-hero-media", {
				opacity: 0,
				scale: 1.04,
				duration: .9
			}).from(".vol-hero-text", {
				opacity: 0,
				y: 20,
				duration: .6
			}, "-=0.6").from(filterRef.current, {
				opacity: 0,
				x: -16,
				duration: .5
			}, "-=0.4").from(".vol-card", {
				opacity: 0,
				y: 18,
				stagger: .06,
				duration: .5
			}, "-=0.3");
		});
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (loading || prefersReducedMotion() || !cardsGridRef.current) return;
		const cards = cardsGridRef.current.querySelectorAll(".vol-card");
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
	}, [volunteers, loading]);
	const handleInvite = (id) => {
		setInvitedStatus((prev) => ({
			...prev,
			[id]: true
		}));
		setTimeout(() => {
			setInvitedStatus((prev) => ({
				...prev,
				[id]: false
			}));
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
						className: "vol-hero-text space-y-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow text-primary font-mono text-xs tracking-wider uppercase",
								children: "COMMUNITY VOLUNTEER DIRECTORY"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "text-3xl sm:text-5xl font-bold tracking-tight leading-tight",
								children: "Find people ready to make a difference."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-muted-foreground text-base sm:text-lg leading-relaxed max-w-xl",
								children: "Discover volunteers across Nepal by skills, interests, location, and availability. Connect with verified helpers ready to support community projects."
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "vol-hero-media relative rounded-2xl overflow-hidden shadow-lg border h-64 sm:h-80",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: hero_nepal_default,
								alt: "Volunteers offering humanitarian aid in Nepal",
								className: "w-full h-full object-cover"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-card/95 border backdrop-blur-md flex items-center justify-between text-xs sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-medium",
									children: "Verified Active Volunteers"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-bold text-primary font-mono",
									children: "1,200+ across Nepal"
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
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Funnel, { className: "size-4 text-primary" }), "Filter Volunteers"]
										}), (searchQuery || selectedSkill !== "All Skills" || selectedProvince !== "All Provinces" || verifiedOnly) && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
											type: "button",
											onClick: () => {
												setSearchQuery("");
												setSelectedSkill("All Skills");
												setSelectedProvince("All Provinces");
												setVerifiedOnly(false);
											},
											className: "text-xs text-muted-foreground hover:text-primary transition-colors",
											children: "Reset"
										})]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Search Name / Skill"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "relative",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "text",
											placeholder: "e.g. Aarav, First Aid...",
											value: searchQuery,
											onChange: (e) => setSearchQuery(e.target.value),
											className: "w-full pl-9 pr-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
										})]
									})] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "block text-xs font-medium text-muted-foreground mb-1.5",
										children: "Primary Skill"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
										value: selectedSkill,
										onChange: (e) => setSelectedSkill(e.target.value),
										className: "w-full px-3 py-2 bg-background border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20",
										children: SKILL_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
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
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Verified Helpers Only" })]
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
									placeholder: "Search volunteers...",
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
									children: "Primary Skill"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
									value: selectedSkill,
									onChange: (e) => setSelectedSkill(e.target.value),
									className: "w-full p-2 bg-background border rounded-lg text-sm",
									children: SKILL_OPTIONS.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
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
											children: volunteers.length
										}),
										" ",
										"volunteers"
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
							}) : volunteers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								ref: cardsGridRef,
								className: "grid grid-cols-1 sm:grid-cols-2 gap-6",
								children: volunteers.map((vol) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VolunteerCard, {
									volunteer: vol,
									onViewProfile: () => setSelectedVolunteer(vol)
								}, vol.id))
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-center py-16 bg-card rounded-2xl border p-8",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-12 mx-auto text-muted-foreground/40 mb-3" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-lg font-semibold mb-1",
										children: "No volunteers match your criteria"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-sm text-muted-foreground max-w-sm mx-auto mb-6",
										children: "Try broadening your search query or adjusting your skill/location filters."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
										type: "button",
										onClick: () => {
											setSearchQuery("");
											setSelectedSkill("All Skills");
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
			selectedVolunteer && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DetailModal, {
				isOpen: Boolean(selectedVolunteer),
				onClose: () => setSelectedVolunteer(null),
				title: "Volunteer Profile",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-start gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xl shrink-0 border",
								children: selectedVolunteer.name.charAt(0)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 flex-wrap",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
										className: "text-xl font-bold",
										children: selectedVolunteer.name
									}), selectedVolunteer.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 bg-emerald-500/10 px-2.5 py-0.5 rounded-full",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-3.5" }), "Verified Helper"]
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-sm text-muted-foreground flex items-center gap-1 mt-1",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3.5" }),
										selectedVolunteer.location,
										", ",
										selectedVolunteer.province,
										" ",
										"Province"
									]
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-muted/40 rounded-xl border text-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground font-medium",
									children: "Hours Contributed"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-lg font-bold text-primary flex items-center justify-center gap-1 mt-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-4" }),
										selectedVolunteer.volunteerHours,
										" hrs"
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-xs text-muted-foreground font-medium",
									children: "Community Rating"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-lg font-bold text-amber-500 flex items-center justify-center gap-1 mt-0.5",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-4 fill-amber-500" }),
										selectedVolunteer.rating,
										" / 5.0"
									]
								})] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "col-span-2 sm:col-span-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-xs text-muted-foreground font-medium",
										children: "Availability"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "text-sm font-semibold mt-0.5 truncate",
										children: selectedVolunteer.availability
									})]
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "text-sm font-semibold mb-1",
							children: "About"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground leading-relaxed",
							children: selectedVolunteer.bio
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-sm font-semibold mb-2 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4 text-primary" }), "Verified Skills"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-wrap gap-2",
							children: selectedVolunteer.skills.map((sk) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground border",
								children: sk
							}, sk))
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h4", {
							className: "text-sm font-semibold mb-1 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Briefcase, { className: "size-4 text-primary" }), "Experience & Background"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-sm text-muted-foreground",
							children: selectedVolunteer.experience
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "pt-4 border-t flex items-center justify-between gap-4",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								onClick: () => setSelectedVolunteer(null),
								className: "px-4 py-2 border rounded-lg text-sm hover:bg-accent",
								children: "Close"
							}), invitedStatus[selectedVolunteer.id] ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "inline-flex items-center gap-2 px-5 py-2.5 bg-emerald-600 text-white rounded-lg text-sm font-medium animate-pulse",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), "Invitation sent successfully!"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
								onClick: () => handleInvite(selectedVolunteer.id),
								className: "px-6 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium",
								children: "Invite to Volunteer"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function VolunteerCard({ volunteer, onViewProfile }) {
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
		className: "vol-card bg-card border rounded-xl p-5 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-start justify-between gap-3 mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center border shrink-0",
						children: volunteer.name.charAt(0)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
						className: "font-semibold text-base flex items-center gap-1.5",
						children: [volunteer.name, volunteer.verified && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-4 text-emerald-500 shrink-0" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs text-muted-foreground flex items-center gap-1 mt-0.5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "size-3" }),
							volunteer.district,
							", ",
							volunteer.province
						]
					})] })]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-right shrink-0",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-xs font-bold text-amber-500 flex items-center gap-0.5 justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3.5 fill-amber-500" }), volunteer.rating]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[11px] text-muted-foreground",
						children: [volunteer.volunteerHours, " hrs"]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-xs text-muted-foreground line-clamp-2 mb-4 leading-relaxed",
				children: volunteer.bio
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap gap-1.5 mb-4",
				children: [volunteer.skills.slice(0, 3).map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[11px] px-2 py-0.5 rounded bg-muted text-muted-foreground border",
					children: s
				}, s)), volunteer.skills.length > 3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "text-[11px] px-1.5 py-0.5 text-muted-foreground",
					children: ["+", volunteer.skills.length - 3]
				})]
			})
		] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pt-3 border-t flex items-center justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-xs text-muted-foreground truncate max-w-[140px] sm:max-w-[180px]",
				children: volunteer.availability
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				onClick: onViewProfile,
				className: "inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline",
				children: ["View Profile", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-3.5 card-arrow" })]
			})]
		})]
	});
}
//#endregion
export { VolunteersPage as component };
