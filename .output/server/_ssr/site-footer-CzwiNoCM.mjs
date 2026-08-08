import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-accordion+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-footer-CzwiNoCM.js
var import_jsx_runtime = require_jsx_runtime();
/**
* Landing page content.
*
* Presentation-only copy for the marketing surface. Live platform data
* (campaigns, opportunities, NGOs) is fetched from the API layer once the
* data foundation lands; nothing here is used as application state.
*/
var NAV_LINKS = [
	{
		label: "Explore",
		to: "/explore"
	},
	{
		label: "Campaigns",
		to: "/campaigns"
	},
	{
		label: "Volunteer",
		to: "/volunteer"
	},
	{
		label: "NGOs",
		to: "/ngos"
	},
	{
		label: "About",
		to: "/about"
	}
];
var STATS = [
	{
		value: 48250,
		suffix: "+",
		label: "People reached",
		note: "Across 61 districts"
	},
	{
		value: 1840,
		suffix: "",
		label: "Verified organizations",
		note: "NGOs, hospitals, groups"
	},
	{
		value: 12960,
		suffix: "",
		label: "Active volunteers",
		note: "Skilled and on-ground"
	},
	{
		value: 7420,
		suffix: "",
		label: "Requests fulfilled",
		note: "Last 12 months"
	}
];
var NGOS = [
	{
		name: "Himalayan Aid Collective",
		focus: "Disaster relief",
		district: "Kathmandu",
		years: 14
	},
	{
		name: "Sarathi Education Trust",
		focus: "Education access",
		district: "Pokhara",
		years: 9
	},
	{
		name: "Koshi Relief Network",
		focus: "Flood response",
		district: "Biratnagar",
		years: 7
	},
	{
		name: "Nari Shakti Nepal",
		focus: "Women's health",
		district: "Butwal",
		years: 11
	},
	{
		name: "Annapurna Food Bank",
		focus: "Food security",
		district: "Kaski",
		years: 6
	},
	{
		name: "Bagmati Blood Alliance",
		focus: "Blood donation",
		district: "Lalitpur",
		years: 12
	}
];
var TESTIMONIALS = [
	{
		quote: "We stopped running relief through spreadsheets and phone trees. Everything now has an owner, a status, and a record.",
		name: "Sabina Gurung",
		role: "Programme Lead, Himalayan Aid Collective"
	},
	{
		quote: "The verification process is strict, and that is exactly why donors trust the requests we post.",
		name: "Dr. Anil Shrestha",
		role: "Patan Community Hospital"
	},
	{
		quote: "I found a weekend opportunity ten minutes from home that actually needed my skills.",
		name: "Prakash Adhikari",
		role: "Volunteer, Lalitpur"
	}
];
var FAQS = [
	{
		q: "How are organizations verified?",
		a: "Every NGO, hospital, and community group submits registration documents, a responsible contact, and proof of recent activity. Verification is reviewed manually and re-checked annually."
	},
	{
		q: "Is Help.com free to use?",
		a: "Yes. Creating requests, listing opportunities, and volunteering are free for individuals and verified organizations."
	},
	{
		q: "How do you handle emergency blood requests?",
		a: "Emergency requests are matched by blood group and proximity, then pushed to eligible donors immediately. Hospitals can escalate a request to district level within one tap."
	},
	{
		q: "Where does the platform operate?",
		a: "All seven provinces of Nepal, with district and municipality level filtering down to ward where data is available."
	},
	{
		q: "Can I donate items instead of money?",
		a: "Yes. Food, clothing, books, furniture, electronics, and medical supplies can be listed with condition, quantity, and pickup availability."
	}
];
var COLUMNS = [
	{
		title: "Platform",
		links: [
			"Explore",
			"Campaigns",
			"Volunteer",
			"Blood requests",
			"Donation categories"
		]
	},
	{
		title: "Organizations",
		links: [
			"For NGOs",
			"For hospitals",
			"Verification",
			"Partnerships"
		]
	},
	{
		title: "Company",
		links: [
			"About",
			"Impact reports",
			"Careers",
			"Press",
			"Contact"
		]
	},
	{
		title: "Legal",
		links: [
			"Privacy",
			"Terms",
			"Data protection",
			"Trust & safety"
		]
	}
];
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "grid size-7 place-items-center rounded-md bg-brand text-brand-foreground",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-display text-base leading-none",
								children: "H"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.95rem] font-semibold tracking-tight",
							children: "Help.com"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-sm leading-relaxed text-muted-foreground",
						children: "A coordination layer for humanitarian work in Nepal — connecting donors, volunteers, NGOs, hospitals, and the people they serve."
					})]
				}), COLUMNS.map((column) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "eyebrow",
					children: column.title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 space-y-2.5 text-sm",
					children: column.links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: NAV_LINKS.find((n) => n.label === link)?.to ?? "#",
						className: "footer-link",
						children: link
					}) }, link))
				})] }, column.title))]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" Help.com — Kathmandu, Nepal"
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-mono tracking-wide",
					children: "Helping should be simple."
				})]
			})]
		})
	});
}
//#endregion
export { SiteFooter as a, STATS as i, NAV_LINKS as n, TESTIMONIALS as o, NGOS as r, FAQS as t };
