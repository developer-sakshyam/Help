import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { v as Link, y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as useTheme } from "./router-dfYFyGCu.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { n as NAV_LINKS } from "./site-footer-B17Eg4GQ.mjs";
import { o as logoutDemoUser, r as getAuthenticatedUser } from "./demoAuth-74wbb7Ne.mjs";
import { f as Moon, g as LogOut, o as Sun, p as Menu, r as User, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-nav-Ck_C9tE7.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ThemeToggle() {
	const { resolvedTheme, toggleTheme } = useTheme();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick: toggleTheme,
		"aria-label": `Switch to ${resolvedTheme === "dark" ? "light" : "dark"} mode`,
		className: "relative grid size-9 place-items-center rounded-md border border-border text-muted-foreground transition-colors hover:text-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-4 rotate-0 scale-100 transition-transform duration-500 dark:-rotate-90 dark:scale-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "absolute size-4 rotate-90 scale-0 transition-transform duration-500 dark:rotate-0 dark:scale-100" })]
	});
}
/**
* Primary site navigation.
* Dynamically reacts to the demo authentication state without altering layout or styling.
*/
function SiteNav() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [authUser, setAuthUser] = (0, import_react.useState)(() => getAuthenticatedUser());
	const authContainerRef = (0, import_react.useRef)(null);
	const navigate = useNavigate();
	(0, import_react.useEffect)(() => {
		registerGsap();
		function syncAuth() {
			const current = getAuthenticatedUser();
			setAuthUser((prev) => {
				if (prev?.displayName !== current?.displayName || prev?.active !== current?.active) {
					if (!prefersReducedMotion() && authContainerRef.current) gsapWithCSS.fromTo(authContainerRef.current, {
						opacity: 0,
						y: -4
					}, {
						opacity: 1,
						y: 0,
						duration: .3,
						ease: "power2.out"
					});
				}
				return current;
			});
		}
		syncAuth();
		window.addEventListener("help_demo_auth_change", syncAuth);
		window.addEventListener("storage", syncAuth);
		return () => {
			window.removeEventListener("help_demo_auth_change", syncAuth);
			window.removeEventListener("storage", syncAuth);
		};
	}, []);
	function handleLogout() {
		logoutDemoUser();
		navigate({ to: "/" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "border-b border-border bg-background/85 backdrop-blur-md",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex h-16 items-center justify-between gap-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					"aria-label": "Help.com home",
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
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "hidden items-center gap-8 text-sm md:flex",
					children: NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: "nav-link",
						children: link.label
					}, link.label))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: authContainerRef,
					className: "hidden items-center gap-3 md:flex",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), authUser?.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/dashboard",
							className: "flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:border-border-strong",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: authUser.displayName }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-3.5 text-muted-foreground" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleLogout,
							title: "Sign out",
							className: "p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-4" })
						})]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/login",
						className: "rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground",
						children: "Sign in"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/signup",
						className: "rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
						children: "Get started"
					})] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: () => setOpen((v) => !v),
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						className: "grid size-9 place-items-center rounded-md border border-border",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})]
				})
			]
		}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "border-t border-border md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
				"aria-label": "Mobile",
				className: "shell flex flex-col py-3 text-sm",
				children: [NAV_LINKS.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					onClick: () => setOpen(false),
					className: "py-2.5 text-muted-foreground transition-colors hover:text-foreground",
					children: link.label
				}, link.label)), authUser?.active ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-2 border-t border-border mt-2 space-y-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/dashboard",
						onClick: () => setOpen(false),
						className: "py-2.5 font-medium flex items-center justify-between text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(User, { className: "size-4 text-muted-foreground" }), authUser.displayName]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs font-mono text-muted-foreground",
							children: "Dashboard →"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: () => {
							handleLogout();
							setOpen(false);
						},
						className: "w-full text-left py-2 text-xs text-muted-foreground hover:text-foreground flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LogOut, { className: "size-3.5" }), " Sign out"]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/signup",
					onClick: () => setOpen(false),
					className: "py-3 font-medium",
					children: "Get started"
				})]
			})
		}) : null]
	});
}
//#endregion
export { SiteNav as t };
