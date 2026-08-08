import { n as __exportAll$1, r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { t as Toaster } from "../_libs/sonner.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-B5TmYGdl.js
var router_B5TmYGdl_exports = /* @__PURE__ */ __exportAll$1({
	getRouter: () => getRouter,
	n: () => useTheme,
	t: () => router_exports
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var styles_default = "/assets/styles-Dr1X2zRh.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
	const message = error instanceof Response ? `Response ${error.status}${error.url ? ` at ${error.url}` : ""}` : error instanceof Error ? error.message : String(error);
	const stack = error instanceof Error ? error.stack : void 0;
	window.__lovableReportRuntimeError?.({
		message,
		...stack !== void 0 && { stack },
		filename: window.location.pathname
	});
}
var STORAGE_KEY = "help-theme";
var ThemeContext = (0, import_react.createContext)(null);
function systemTheme() {
	if (typeof window === "undefined") return "light";
	return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function ThemeProvider({ children }) {
	const [theme, setThemeState] = (0, import_react.useState)("system");
	const [resolvedTheme, setResolvedTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const stored = window.localStorage.getItem(STORAGE_KEY);
		if (stored) setThemeState(stored);
	}, []);
	(0, import_react.useEffect)(() => {
		const resolved = theme === "system" ? systemTheme() : theme;
		setResolvedTheme(resolved);
		const root = document.documentElement;
		root.classList.add("theme-switching");
		root.classList.toggle("dark", resolved === "dark");
		root.style.colorScheme = resolved;
		const timer = window.setTimeout(() => root.classList.remove("theme-switching"), 400);
		return () => window.clearTimeout(timer);
	}, [theme]);
	(0, import_react.useEffect)(() => {
		if (theme !== "system") return;
		const media = window.matchMedia("(prefers-color-scheme: dark)");
		const onChange = () => setResolvedTheme(media.matches ? "dark" : "light");
		media.addEventListener("change", onChange);
		return () => media.removeEventListener("change", onChange);
	}, [theme]);
	const setTheme = (0, import_react.useCallback)((next) => {
		window.localStorage.setItem(STORAGE_KEY, next);
		setThemeState(next);
	}, []);
	const toggleTheme = (0, import_react.useCallback)(() => {
		setTheme(document.documentElement.classList.contains("dark") ? "light" : "dark");
	}, [setTheme]);
	const value = (0, import_react.useMemo)(() => ({
		theme,
		resolvedTheme,
		setTheme,
		toggleTheme
	}), [
		theme,
		resolvedTheme,
		setTheme,
		toggleTheme
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeContext.Provider, {
		value,
		children
	});
}
function useTheme() {
	const ctx = (0, import_react.useContext)(ThemeContext);
	if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
	return ctx;
}
var Toaster$1 = ({ ...props }) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster, {
		className: "toaster group",
		toastOptions: { classNames: {
			toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
			description: "group-[.toast]:text-muted-foreground",
			actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
			cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
		} },
		...props
	});
};
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$13 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Help.com — Helping should be simple" },
			{
				name: "description",
				content: "Help.com connects donors, volunteers, NGOs, hospitals, and communities across Nepal."
			},
			{
				name: "author",
				content: "Help.com"
			},
			{
				property: "og:title",
				content: "Help.com — Helping should be simple"
			},
			{
				property: "og:description",
				content: "Help.com connects donors, volunteers, NGOs, hospitals, and communities across Nepal."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Instrument+Serif:ital@0;1&family=IBM+Plex+Mono:wght@400;500&display=swap"
			},
			{
				rel: "icon",
				href: "/favicon.ico",
				type: "image/x-icon"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		suppressHydrationWarning: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", {
			suppressHydrationWarning: true,
			children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})]
		})]
	});
}
function RootComponent() {
	const { queryClient } = Route$13.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ThemeProvider, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toaster$1, {})] })
	});
}
var $$splitComponentImporter$12 = () => import("./routes-DdJ_z9e_.mjs");
var title = "Help.com — Nepal's humanitarian coordination platform";
var description = "One platform connecting donors, volunteers, NGOs, organizations, hospitals, and communities across Nepal.";
var Route$12 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$12, "component")
});
var $$splitComponentImporter$11 = () => import("./about-DLCkBzud.mjs");
var Route$11 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "Help.com — About" },
		{
			name: "description",
			content: "About Help.com: connecting donors, volunteers, NGOs, and communities."
		},
		{
			property: "og:title",
			content: "Help.com — About"
		},
		{
			property: "og:description",
			content: "About Help.com: connecting donors, volunteers, NGOs, and communities."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$11, "component")
});
var $$splitComponentImporter$10 = () => import("./campaigns-DhRUzr4X.mjs");
var Route$10 = createFileRoute("/campaigns")({
	head: () => ({ meta: [{ title: "Help.com — Community Campaigns" }, {
		name: "description",
		content: "Support active campaigns that turn community effort into real-world impact across Nepal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$10, "component")
});
var $$splitComponentImporter$9 = () => import("./explore-Ca-mbt2R.mjs");
var Route$9 = createFileRoute("/explore")({
	head: () => ({ meta: [{ title: "Help.com — Explore Opportunities" }, {
		name: "description",
		content: "Explore donation requests, blood needs, and volunteer opportunities across Nepal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
var $$splitComponentImporter$8 = () => import("./get-started-DPW2LTbE.mjs");
var Route$8 = createFileRoute("/get-started")({ component: lazyRouteComponent($$splitComponentImporter$8, "component") });
var $$splitComponentImporter$7 = () => import("./login-Df_iKZPt.mjs");
var Route$7 = createFileRoute("/login")({ component: lazyRouteComponent($$splitComponentImporter$7, "component") });
var $$splitComponentImporter$6 = () => import("./ngos-PSHuIoRL.mjs");
var Route$6 = createFileRoute("/ngos")({
	head: () => ({ meta: [{ title: "Help.com — Nonprofit Organizations (NGOs)" }, {
		name: "description",
		content: "Discover organizations creating change across Nepal and support their causes."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./signup-B3GycC_6.mjs");
var Route$5 = createFileRoute("/signup")({ component: lazyRouteComponent($$splitComponentImporter$5, "component") });
var $$splitComponentImporter$4 = () => import("./volunteers-8TlpbM2t.mjs");
var Route$4 = createFileRoute("/volunteers")({
	head: () => ({ meta: [{ title: "Help.com — Find Volunteers" }, {
		name: "description",
		content: "Discover volunteers by skills, interests, location, and availability across Nepal."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./profile-C9H7vjCb.mjs");
var Route$3 = createFileRoute("/signup/profile")({ component: lazyRouteComponent($$splitComponentImporter$3, "component") });
var $$splitComponentImporter$2 = () => import("./review-CR6HU_Kj.mjs");
var Route$2 = createFileRoute("/signup/review")({ component: lazyRouteComponent($$splitComponentImporter$2, "component") });
var $$splitComponentImporter$1 = () => import("./role-1oUZRPuD.mjs");
var Route$1 = createFileRoute("/signup/role")({ component: lazyRouteComponent($$splitComponentImporter$1, "component") });
var $$splitComponentImporter = () => import("./success-DCummkjp.mjs");
var Route = createFileRoute("/signup/success")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
var IndexRoute = Route$12.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$13
});
var AboutRoute = Route$11.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$13
});
var CampaignsRoute = Route$10.update({
	id: "/campaigns",
	path: "/campaigns",
	getParentRoute: () => Route$13
});
var ExploreRoute = Route$9.update({
	id: "/explore",
	path: "/explore",
	getParentRoute: () => Route$13
});
var GetStartedRoute = Route$8.update({
	id: "/get-started",
	path: "/get-started",
	getParentRoute: () => Route$13
});
var LoginRoute = Route$7.update({
	id: "/login",
	path: "/login",
	getParentRoute: () => Route$13
});
var NgosRoute = Route$6.update({
	id: "/ngos",
	path: "/ngos",
	getParentRoute: () => Route$13
});
var SignupRoute = Route$5.update({
	id: "/signup",
	path: "/signup",
	getParentRoute: () => Route$13
});
var VolunteersRoute = Route$4.update({
	id: "/volunteers",
	path: "/volunteers",
	getParentRoute: () => Route$13
});
var SignupRouteChildren = {
	SignupProfileRoute: Route$3.update({
		id: "/profile",
		path: "/profile",
		getParentRoute: () => SignupRoute
	}),
	SignupReviewRoute: Route$2.update({
		id: "/review",
		path: "/review",
		getParentRoute: () => SignupRoute
	}),
	SignupRoleRoute: Route$1.update({
		id: "/role",
		path: "/role",
		getParentRoute: () => SignupRoute
	}),
	SignupSuccessRoute: Route.update({
		id: "/success",
		path: "/success",
		getParentRoute: () => SignupRoute
	})
};
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	CampaignsRoute,
	ExploreRoute,
	GetStartedRoute,
	LoginRoute,
	NgosRoute,
	SignupRoute: SignupRoute._addFileChildren(SignupRouteChildren),
	VolunteersRoute
};
var routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
var router_exports = /* @__PURE__ */ __exportAll({ getRouter: () => getRouter });
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { useTheme as n, router_B5TmYGdl_exports as t };
