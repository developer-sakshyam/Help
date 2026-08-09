import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as AuthLayout } from "./AuthLayout--AgapdQk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/signup-DbhlEugP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function validateEmail(email) {
	return /\S+@\S+\.\S+/.test(email);
}
var Page = () => {
	const navigate = useNavigate();
	const ref = (0, import_react.useRef)(null);
	const submitRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const element = ref.current;
		if (!element) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(element, {
				opacity: 0,
				x: 8
			}, {
				opacity: 1,
				x: 0,
				duration: .5
			});
			gsapWithCSS.fromTo(element.querySelectorAll("input, button, a, label"), {
				opacity: 0,
				y: 6
			}, {
				opacity: 1,
				y: 0,
				stagger: .04,
				duration: .35
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	const [fullName, setFullName] = (0, import_react.useState)("");
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [confirm, setConfirm] = (0, import_react.useState)("");
	const [errors, setErrors] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		const temp = localStorage.getItem("help_demo_signup");
		if (temp) try {
			const obj = JSON.parse(temp);
			setFullName(obj.fullName || "");
			setEmail(obj.email || "");
		} catch {}
	}, []);
	function validateField(field) {
		const next = { ...errors };
		if (field === "fullName") {
			if (!fullName || fullName.length < 2) next.fullName = "Full name must be at least 2 characters";
			else delete next.fullName;
		}
		if (field === "email") {
			if (!email || !validateEmail(email)) next.email = "Enter a valid email";
			else delete next.email;
		}
		if (field === "password") {
			if (!password || password.length < 8) next.password = "Password must be at least 8 characters";
			else delete next.password;
		}
		if (field === "confirm") {
			if (confirm !== password) next.confirm = "Passwords do not match";
			else delete next.confirm;
		}
		setErrors(next);
	}
	function handleContinue(e) {
		e.preventDefault();
		validateField("fullName");
		validateField("email");
		validateField("password");
		validateField("confirm");
		if (!(Object.keys(errors).length > 0) && fullName && validateEmail(email) && password.length >= 8 && confirm === password) {
			const temp = {
				fullName,
				email,
				password
			};
			localStorage.setItem("help_demo_signup", JSON.stringify(temp));
			if (!prefersReducedMotion() && ref.current) gsapWithCSS.to(ref.current, {
				opacity: 0,
				y: -8,
				duration: .28,
				onComplete: () => navigate({ to: "/signup/role" })
			});
			else navigate({ to: "/signup/role" });
		} else {
			const next = {};
			if (!fullName || fullName.length < 2) next.fullName = "Full name must be at least 2 characters";
			if (!email || !validateEmail(email)) next.email = "Enter a valid email";
			if (!password || password.length < 8) next.password = "Password must be at least 8 characters";
			if (confirm !== password) next.confirm = "Passwords do not match";
			setErrors(next);
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "bg-surface p-8 rounded-lg shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold mb-2",
				children: "Create your Help.com account."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-4",
				children: "Start helping your community today."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleContinue,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Full Name"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: fullName,
							onBlur: () => validateField("fullName"),
							onChange: (e) => setFullName(e.target.value),
							className: "w-full border rounded px-3 py-2"
						}),
						errors.fullName && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-destructive text-sm",
							children: errors.fullName
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Email"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: email,
							onBlur: () => validateField("email"),
							onChange: (e) => setEmail(e.target.value),
							className: "w-full border rounded px-3 py-2"
						}),
						errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-destructive text-sm",
							children: errors.email
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Password"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: password,
							onBlur: () => validateField("password"),
							onChange: (e) => setPassword(e.target.value),
							type: "password",
							className: "w-full border rounded px-3 py-2"
						}),
						errors.password && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-destructive text-sm",
							children: errors.password
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Confirm Password"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							value: confirm,
							onBlur: () => validateField("confirm"),
							onChange: (e) => setConfirm(e.target.value),
							type: "password",
							className: "w-full border rounded px-3 py-2"
						}),
						errors.confirm && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-destructive text-sm",
							children: errors.confirm
						})
					] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between items-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: submitRef,
							type: "submit",
							className: "px-5 py-2 rounded-md bg-brand text-white",
							onMouseDown: (e) => {
								if (!prefersReducedMotion()) gsapWithCSS.to(e.currentTarget, {
									scale: .98,
									duration: .06
								});
							},
							onMouseUp: (e) => {
								if (!prefersReducedMotion()) gsapWithCSS.to(e.currentTarget, {
									scale: 1,
									duration: .08
								});
							},
							children: "Continue"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "/login",
							className: "text-sm text-muted-foreground",
							children: "I already have an account"
						})]
					})
				]
			})
		]
	}) });
};
//#endregion
export { Page as component };
