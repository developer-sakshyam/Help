import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as AuthLayout } from "./AuthLayout--AgapdQk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/role-CUXmzKKs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ROLES = [
	{
		id: "Donor & Volunteer",
		label: "Donor & Volunteer",
		desc: "Both donate resources and give time."
	},
	{
		id: "Donor",
		label: "Donor",
		desc: "Donate blood, food, clothing, and funds."
	},
	{
		id: "Volunteer",
		label: "Volunteer",
		desc: "Help through hands-on skills and time."
	},
	{
		id: "Receiver",
		label: "Receiver",
		desc: "Request community assistance and aid."
	},
	{
		id: "Organizer",
		label: "Organizer",
		desc: "Manage relief camps and local drives."
	},
	{
		id: "NGO / Organization",
		label: "NGO / Organization",
		desc: "Distribute resources and run major projects."
	}
];
var Page = () => {
	const navigate = useNavigate();
	const [selected, setSelected] = (0, import_react.useState)(null);
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const el = ref.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(el, {
				opacity: 0,
				x: 8
			}, {
				opacity: 1,
				x: 0,
				duration: .45
			});
			gsapWithCSS.fromTo(el.querySelectorAll("button"), {
				opacity: 0,
				y: 8
			}, {
				opacity: 1,
				y: 0,
				stagger: .04,
				duration: .32
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const temp = JSON.parse(localStorage.getItem("help_demo_signup") || "{}");
		if (!temp || !temp.email) navigate({ to: "/signup" });
		if (temp.role) setSelected(temp.role);
	}, [navigate]);
	function handleContinue() {
		if (!selected) return;
		if (typeof window !== "undefined") {
			const temp = JSON.parse(localStorage.getItem("help_demo_signup") || "{}");
			temp.role = selected;
			localStorage.setItem("help_demo_signup", JSON.stringify(temp));
		}
		if (!prefersReducedMotion() && ref.current) gsapWithCSS.to(ref.current, {
			opacity: 0,
			y: -8,
			duration: .28,
			onComplete: () => navigate({ to: "/signup/profile" })
		});
		else navigate({ to: "/signup/profile" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "bg-surface p-6 rounded-lg shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold mb-2",
				children: "How do you want to contribute?"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-4",
				children: "Select one primary role that best describes how you'll help."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
				children: ROLES.map((r) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => setSelected(r.id),
					className: `p-4 border rounded text-left ${selected === r.id ? "border-brand scale-102 bg-brand-soft" : ""}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-semibold",
						children: r.label
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: r.desc
					})]
				}, r.id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-4 flex justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: () => navigate({ to: "/signup" }),
					className: "px-4 py-2 border rounded",
					children: "Back"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: handleContinue,
					disabled: !selected,
					className: "px-5 py-2 rounded bg-brand text-white disabled:opacity-50",
					children: "Continue"
				})]
			})
		]
	}) });
};
//#endregion
export { Page as component };
