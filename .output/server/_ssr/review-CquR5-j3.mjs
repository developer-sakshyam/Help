import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { l as saveUser, u as setSession } from "./demoAuth-74wbb7Ne.mjs";
import { t as AuthLayout } from "./AuthLayout-Bw1mfYGc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/review-CquR5-j3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Page = () => {
	const navigate = useNavigate();
	const [data, setData] = (0, import_react.useState)({});
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
			gsapWithCSS.fromTo(el.querySelectorAll(".font-semibold, .font-medium, img"), {
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
		setData(temp);
	}, [navigate]);
	function handleCreate() {
		const user = saveUser(data);
		if (user && user.email) setSession(true, user.email);
		if (typeof window !== "undefined") localStorage.removeItem("help_demo_signup");
		if (!prefersReducedMotion() && ref.current) gsapWithCSS.to(ref.current, {
			scale: 1.02,
			duration: .12,
			yoyo: true,
			repeat: 1,
			onComplete: () => navigate({ to: "/signup/success" })
		});
		else navigate({ to: "/signup/success" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "bg-surface p-6 rounded-lg shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold mb-2",
				children: "Review your information"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-4",
				children: "Confirm the details below before creating your account."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-20 rounded-full overflow-hidden bg-muted",
							children: data.profileImage ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: data.profileImage,
								className: "w-full h-full object-cover",
								alt: "Profile"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "p-4",
								children: "No image"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-semibold",
							children: data.fullName
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-sm text-muted-foreground",
							children: data.email
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "Role"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: data.role
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "Location"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: [
							data.province,
							data.district,
							data.municipality
						].filter(Boolean).join(" • ")
					})] }),
					data.bio && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-sm text-muted-foreground",
						children: "About"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "font-medium",
						children: data.bio
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between mt-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ to: "/signup/profile" }),
							className: "px-4 py-2 border rounded",
							children: "Edit Profile"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleCreate,
							className: "px-5 py-2 rounded bg-brand text-white",
							children: "Create Account"
						})]
					})
				]
			})
		]
	}) });
};
//#endregion
export { Page as component };
