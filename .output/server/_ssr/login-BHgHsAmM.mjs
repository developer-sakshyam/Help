import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { i as getStoredUser, n as ensureDefaultDemoUser, u as setSession } from "./demoAuth-74wbb7Ne.mjs";
import { t as AuthLayout } from "./AuthLayout--AgapdQk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/login-BHgHsAmM.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Page = () => {
	const navigate = useNavigate();
	const ref = (0, import_react.useRef)(null);
	const submitRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const el = ref.current;
		if (!el) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(el, {
				opacity: 0,
				x: 10
			}, {
				opacity: 1,
				x: 0,
				duration: .5
			});
			gsapWithCSS.fromTo(el.querySelectorAll("input, button, a"), {
				opacity: 0,
				y: 8
			}, {
				opacity: 1,
				y: 0,
				stagger: .05,
				duration: .35
			});
		}, ref);
		return () => ctx.revert();
	}, []);
	const [email, setEmail] = (0, import_react.useState)("");
	const [password, setPassword] = (0, import_react.useState)("");
	const [error, setError] = (0, import_react.useState)("");
	function handleSubmit(e) {
		e.preventDefault();
		if (!getStoredUser()) ensureDefaultDemoUser();
		const user = getStoredUser();
		const trimmedEmail = email.trim().toLowerCase();
		const isValidAdmin = trimmedEmail === "admin@gmail.com" && password === "admin";
		const isValidUser = trimmedEmail === "user@gmail.com" && password === "user";
		const isValidStored = user && user.email?.toLowerCase() === trimmedEmail && user.password === password;
		if (isValidAdmin || isValidUser || isValidStored) {
			setSession(true, trimmedEmail);
			setError("");
			if (!prefersReducedMotion() && ref.current) {
				gsapWithCSS.fromTo(ref.current, { scale: 1 }, {
					scale: 1.02,
					duration: .12,
					yoyo: true,
					repeat: 1
				});
				if (submitRef.current) gsapWithCSS.fromTo(submitRef.current, { scale: 1 }, {
					scale: .96,
					duration: .08,
					yoyo: true,
					repeat: 1
				});
			}
			setTimeout(() => navigate({ to: "/dashboard" }), 420);
		} else {
			setError("Invalid email or password. Try admin@gmail.com / admin or user@gmail.com / user.");
			if (!prefersReducedMotion() && ref.current) gsapWithCSS.fromTo(ref.current, { x: -6 }, {
				x: 6,
				duration: .06,
				yoyo: true,
				repeat: 5,
				ease: "power1.inOut"
			});
		}
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: "bg-surface p-8 rounded-lg shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "text-2xl font-bold mb-2",
				children: "Welcome back."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-4",
				children: "Sign in to continue helping your community."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-6 p-3 bg-muted/40 border rounded-md space-y-2 text-xs",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-mono font-semibold text-foreground uppercase tracking-wider",
					children: "DEMO PRESET ACCOUNTS:"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-wrap gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setEmail("admin@gmail.com");
							setPassword("admin");
						},
						className: "px-2.5 py-1 bg-card border rounded hover:bg-accent transition-colors font-mono",
						children: "Admin (admin@gmail.com)"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => {
							setEmail("user@gmail.com");
							setPassword("user");
						},
						className: "px-2.5 py-1 bg-card border rounded hover:bg-accent transition-colors font-mono",
						children: "Aayush (user@gmail.com)"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm mb-1",
						children: "Email"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						value: email,
						onChange: (e) => setEmail(e.target.value),
						placeholder: "admin@gmail.com or user@gmail.com",
						className: "w-full border rounded px-3 py-2 bg-background",
						onFocus: (ev) => {
							if (!prefersReducedMotion()) gsapWithCSS.to(ev.currentTarget, {
								y: -3,
								duration: .12
							});
						},
						onBlur: (ev) => {
							if (!prefersReducedMotion()) gsapWithCSS.to(ev.currentTarget, {
								y: 0,
								duration: .12
							});
						}
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm mb-1",
						children: "Password"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "password",
						value: password,
						onChange: (e) => setPassword(e.target.value),
						placeholder: "••••••••",
						className: "w-full border rounded px-3 py-2 bg-background",
						onFocus: (ev) => {
							if (!prefersReducedMotion()) gsapWithCSS.to(ev.currentTarget, {
								y: -3,
								duration: .12
							});
						},
						onBlur: (ev) => {
							if (!prefersReducedMotion()) gsapWithCSS.to(ev.currentTarget, {
								y: 0,
								duration: .12
							});
						}
					})] }),
					error && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-destructive text-sm",
						children: error
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							ref: submitRef,
							type: "submit",
							className: "px-5 py-2 rounded-md bg-brand text-white",
							onMouseDown: (ev) => {
								if (!prefersReducedMotion()) gsapWithCSS.to(ev.currentTarget, {
									scale: .98,
									duration: .06
								});
							},
							onMouseUp: (ev) => {
								if (!prefersReducedMotion()) gsapWithCSS.to(ev.currentTarget, {
									scale: 1,
									duration: .08
								});
							},
							children: "Sign in"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#",
							onClick: (e) => {
								e.preventDefault();
								alert("Password recovery is unavailable in the demo.");
							},
							className: "text-sm text-muted-foreground",
							children: "Forgot password?"
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 text-sm text-muted-foreground",
				children: [
					"Don't have an account?",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/signup",
						className: "underline",
						children: "Create one →"
					})
				]
			})
		]
	}) });
};
//#endregion
export { Page as component };
