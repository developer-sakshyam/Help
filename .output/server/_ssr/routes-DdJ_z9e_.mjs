import { r as __toESM } from "../_runtime.mjs";
import { a as Trigger2, c as require_jsx_runtime, i as Root2, l as require_react, n as Header, o as Slot, r as Item, t as Content2 } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link, y as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as cva } from "../_libs/class-variance-authority+clsx.mjs";
import { n as AnimatedButton, r as cn, t as hero_nepal_default } from "./hero-nepal-CQ_saR7n.mjs";
import { a as SiteFooter, i as STATS, o as TESTIMONIALS, r as NGOS, t as FAQS } from "./site-footer-CzwiNoCM.mjs";
import { C as Check, O as ArrowRight, S as ChevronDown, f as Menu, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DdJ_z9e_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var navItems = [
	{
		label: "Home",
		href: "/"
	},
	{
		label: "About",
		href: "/about"
	},
	{
		label: "Explore",
		href: "/explore"
	},
	{
		label: "Volunteers",
		href: "/volunteers"
	},
	{
		label: "NGOs",
		href: "/ngos"
	},
	{
		label: "Campaigns",
		href: "/campaigns"
	},
	{
		label: "Get Started",
		href: "/get-started"
	}
];
function PillNav() {
	const router = useRouter();
	const [open, setOpen] = (0, import_react.useState)(false);
	const mobileMenuRef = (0, import_react.useRef)(null);
	const burgerRef = (0, import_react.useRef)(null);
	const currentPath = (0, import_react.useMemo)(() => router.state.location.pathname, [router.state.location.pathname]);
	const activeHref = navItems.find((item) => item.href === currentPath)?.href ?? "/";
	(0, import_react.useEffect)(() => {
		registerGsap();
	}, []);
	(0, import_react.useEffect)(() => {
		const menu = mobileMenuRef.current;
		const burger = burgerRef.current;
		if (!menu || !burger) return;
		gsapWithCSS.killTweensOf([menu, burger]);
		if (open) {
			gsapWithCSS.set(menu, { display: "block" });
			gsapWithCSS.fromTo(menu, {
				autoAlpha: 0,
				y: -12
			}, {
				autoAlpha: 1,
				y: 0,
				duration: .28,
				ease: "power3.out"
			});
			gsapWithCSS.fromTo(burger, {
				scale: 1,
				rotate: -6
			}, {
				scale: 1.06,
				rotate: 0,
				duration: .16,
				ease: "power3.out"
			});
		} else {
			gsapWithCSS.set(menu, { display: "block" });
			gsapWithCSS.to(menu, {
				autoAlpha: 0,
				y: -12,
				duration: .22,
				ease: "power3.inOut",
				onComplete: () => gsapWithCSS.set(menu, { display: "none" })
			});
			gsapWithCSS.fromTo(burger, {
				scale: 1,
				rotate: 0
			}, {
				scale: .96,
				rotate: 8,
				duration: .14,
				ease: "power3.inOut"
			});
		}
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: "pillnav-header",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pillnav-shell",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "pillnav-logo",
					"aria-label": "Help.com home",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pillnav-logo-mark",
						children: "H"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "pillnav-logo-label",
						children: "Help.com"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					"aria-label": "Primary",
					className: "pillnav-links",
					children: navItems.map((item) => {
						const isActive = item.href === activeHref;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: item.href,
							className: `pillnav-item ${isActive ? "pillnav-item-active" : ""}`,
							children: item.label
						}, item.href);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "pillnav-actions",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						ref: burgerRef,
						type: "button",
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen((value) => !value),
						className: "pillnav-burger",
						children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-4" })
					})
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: mobileMenuRef,
			className: `pillnav-mobile ${open ? "pillnav-mobile-open" : ""}`,
			"aria-hidden": !open,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "pillnav-mobile-links",
				"aria-label": "Mobile",
				children: navItems.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: item.href,
					className: `pillnav-mobile-link ${item.href === activeHref ? "active" : ""}`,
					onClick: () => setOpen(false),
					children: item.label
				}, item.href))
			})
		})]
	});
}
/**
* Cinematic scroll-expand opening.
*
* First paint shows only the motto over a heavily dimmed frame. A pinned
* ScrollTrigger timeline then expands the frame to full-bleed, lifts the
* scrim, and progressively reveals the navigation, subtitle and CTAs.
*/
function HeroScrollExpand() {
	const rootRef = (0, import_react.useRef)(null);
	const frameRef = (0, import_react.useRef)(null);
	const scrimRef = (0, import_react.useRef)(null);
	const mottoRef = (0, import_react.useRef)(null);
	const navRef = (0, import_react.useRef)(null);
	const detailsRef = (0, import_react.useRef)(null);
	const cueRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		const root = rootRef.current;
		if (!root) return;
		const finalState = () => {
			gsapWithCSS.set(frameRef.current, {
				width: "100vw",
				height: "100vh",
				borderRadius: 0
			});
			gsapWithCSS.set(scrimRef.current, { opacity: .55 });
			gsapWithCSS.set([navRef.current, detailsRef.current], {
				opacity: 1,
				y: 0
			});
			gsapWithCSS.set(cueRef.current, { opacity: 0 });
		};
		if (prefersReducedMotion()) {
			finalState();
			return;
		}
		const ctx = gsapWithCSS.context(() => {
			const words = mottoRef.current?.querySelectorAll("span[data-word]") ?? [];
			gsapWithCSS.set(frameRef.current, {
				width: "38vw",
				height: "58vh",
				borderRadius: 10
			});
			gsapWithCSS.set(scrimRef.current, { opacity: .94 });
			gsapWithCSS.set(navRef.current, {
				opacity: 0,
				y: -24
			});
			gsapWithCSS.set(detailsRef.current, {
				opacity: 0,
				y: 24
			});
			gsapWithCSS.from(words, {
				yPercent: 110,
				opacity: 0,
				duration: 1.2,
				stagger: .09,
				delay: .15
			});
			gsapWithCSS.from(cueRef.current, {
				opacity: 0,
				duration: 1,
				delay: 1.3
			});
			gsapWithCSS.timeline({
				defaults: { ease: "none" },
				scrollTrigger: {
					trigger: root,
					start: "top top",
					end: "bottom bottom",
					scrub: .8,
					pin: ".hero-stage",
					pinSpacing: false,
					anticipatePin: 1
				}
			}).to(cueRef.current, {
				opacity: 0,
				duration: .06
			}, 0).to(frameRef.current, {
				width: "100vw",
				height: "100vh",
				borderRadius: 0,
				duration: .5,
				ease: "power2.inOut"
			}, 0).to(scrimRef.current, {
				opacity: .55,
				duration: .5
			}, 0).to(mottoRef.current, {
				scale: .86,
				y: "-6vh",
				duration: .5,
				ease: "power2.inOut"
			}, 0).to(navRef.current, {
				opacity: 1,
				y: 0,
				duration: .16,
				ease: "power2.out"
			}, .42).to(detailsRef.current, {
				opacity: 1,
				y: 0,
				duration: .2,
				ease: "power2.out"
			}, .5);
		}, root);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref: rootRef,
		className: "relative h-[260vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref: navRef,
			className: "fixed inset-x-0 top-0 z-50 opacity-0",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PillNav, {})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "hero-stage relative flex h-screen w-full items-center justify-center overflow-hidden bg-ink",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: frameRef,
					className: "absolute overflow-hidden",
					style: {
						width: "38vw",
						height: "58vh",
						borderRadius: 10
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_nepal_default,
						alt: "Volunteers distributing winter supplies in a Himalayan village at dusk",
						width: 1920,
						height: 1280,
						className: "size-full object-cover"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						ref: scrimRef,
						className: "absolute inset-0 bg-ink",
						style: { opacity: .94 }
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 flex flex-col items-center px-6 text-center",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						ref: mottoRef,
						className: "display max-w-[16ch] text-[clamp(2.75rem,8vw,7rem)] text-ink-foreground",
						children: [
							"Helping",
							"Should",
							"Be",
							"Simple."
						].map((word) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "inline-block overflow-hidden align-bottom",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								"data-word": true,
								className: "inline-block pr-[0.22em]",
								children: word
							})
						}, word))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						ref: detailsRef,
						className: "mt-8 flex flex-col items-center opacity-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[52ch] text-balance text-sm leading-relaxed text-ink-foreground/75 sm:text-base",
							children: "One platform connecting donors, volunteers, NGOs, organizations, hospitals, and communities across Nepal."
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center justify-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: "/signup",
									className: "inline-flex items-center gap-2 rounded-md text-sm font-medium text-brand-foreground",
									children: ["Get Started", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform group-hover:translate-x-0.5" })]
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
								asChild: true,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
									href: "/explore",
									className: "inline-flex rounded-md border border-ink-foreground/25 text-sm font-medium text-ink-foreground transition-colors hover:border-ink-foreground/60",
									children: "Explore Opportunities"
								})
							})]
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: cueRef,
					className: "absolute bottom-10 z-10 flex flex-col items-center gap-3 text-ink-foreground/50",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow text-ink-foreground/50",
						children: "Scroll"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "block h-10 w-px bg-current" })]
				})
			]
		})]
	});
}
var Accordion = Root2;
var AccordionItem = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Item, {
	ref,
	className: cn("border-b", className),
	...props
}));
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {
	className: "flex",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger2, {
		ref,
		className: cn("flex flex-1 items-center justify-between py-4 text-sm font-medium cursor-pointer transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180", className),
		...props,
		children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })]
	})
}));
AccordionTrigger.displayName = Trigger2.displayName;
var AccordionContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Content2, {
	ref,
	className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("pb-4 pt-0", className),
		children
	})
}));
AccordionContent.displayName = Content2.displayName;
/**
* Scroll-triggered stagger reveal for a section.
* Attach the returned ref to the section root and add `reveal-init`
* to every child that should animate in.
*/
function useReveal(options = {}) {
	const { selector = ".reveal-init", y = 18, stagger = .08, start = "top 82%" } = options;
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const root = ref.current;
		if (!root) return;
		registerGsap();
		const targets = root.querySelectorAll(selector);
		if (!targets.length) return;
		if (prefersReducedMotion()) {
			gsapWithCSS.set(targets, {
				opacity: 1,
				y: 0
			});
			return;
		}
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.fromTo(targets, {
				opacity: 0,
				y
			}, {
				opacity: 1,
				y: 0,
				duration: .85,
				stagger,
				ease: "power3.out",
				scrollTrigger: {
					trigger: root,
					start
				}
			});
		}, root);
		return () => ctx.revert();
	}, [
		selector,
		y,
		stagger,
		start
	]);
	return ref;
}
/** Animates a number from 0 to `value` when scrolled into view. */
function useCounter(value) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		registerGsap();
		if (prefersReducedMotion()) {
			el.textContent = value.toLocaleString();
			return;
		}
		const counter = { n: 0 };
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.to(counter, {
				n: value,
				duration: 1.6,
				ease: "power2.out",
				scrollTrigger: {
					trigger: el,
					start: "top 90%"
				},
				onUpdate: () => {
					el.textContent = Math.round(counter.n).toLocaleString();
				}
			});
		});
		return () => ctx.revert();
	}, [value]);
	return ref;
}
function AccordionGallery({ items, trigger = "hover", orientation = "horizontal", defaultIndex = 0, showLabels = true, grayscale = true, parallax = .35, tilt = 4, duration = .65, ease = "power3.out" }) {
	const containerRef = (0, import_react.useRef)(null);
	const panelsRef = (0, import_react.useRef)([]);
	const [active, setActive] = (0, import_react.useState)(defaultIndex ?? 0);
	const prefersReducedMotion$1 = typeof window !== "undefined" && prefersReducedMotion();
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		registerGsap();
		gsapWithCSS.registerPlugin(ScrollTrigger);
	}, []);
	(0, import_react.useEffect)(() => {
		const panels = panelsRef.current;
		if (!panels || panels.length === 0) return;
		const ctx = gsapWithCSS.context(() => {
			panels.forEach((p, i) => {
				if (!p) return;
				gsapWithCSS.set(p, {
					flex: i === active ? 4 : 1,
					clearProps: "all"
				});
			});
		}, containerRef.current);
		return () => ctx.revert();
	}, []);
	(0, import_react.useEffect)(() => {
		if (prefersReducedMotion$1) return;
		const panels = panelsRef.current;
		if (!panels || panels.length === 0) return;
		const tl = gsapWithCSS.timeline({ defaults: {
			duration,
			ease
		} });
		panels.forEach((p, i) => {
			if (!p) return;
			const isActive = i === active;
			tl.to(p, {
				flex: isActive ? 4 : 1,
				filter: grayscale ? isActive ? "none" : "grayscale(1) brightness(0.85)" : "none"
			}, 0);
			const img = p.querySelector(".ag-img");
			if (img) tl.to(img, {
				scale: isActive ? 1.02 : 1,
				x: 0,
				y: 0
			}, 0);
		});
		return () => {
			tl.kill();
		};
	}, [
		active,
		duration,
		ease,
		grayscale,
		prefersReducedMotion$1
	]);
	function handlePointerMove(e, i) {
		const p = panelsRef.current[i];
		if (!p || prefersReducedMotion$1) return;
		const rect = p.getBoundingClientRect();
		const rx = (e.clientX - rect.left) / rect.width;
		const ry = (e.clientY - rect.top) / rect.height;
		const px = (rx - .5) * parallax * 40;
		const py = (ry - .5) * parallax * 40;
		const rotY = (rx - .5) * tilt;
		const rotX = -(ry - .5) * tilt;
		const inner = p.querySelector(".ag-inner");
		if (!inner) return;
		gsapWithCSS.to(inner, {
			x: px,
			y: py,
			rotateX: rotX,
			rotateY: rotY,
			duration: .4,
			ease: "power3.out"
		});
	}
	function handlePointerLeave(i) {
		const p = panelsRef.current[i];
		if (!p || prefersReducedMotion$1) return;
		const inner = p.querySelector(".ag-inner");
		if (!inner) return;
		gsapWithCSS.to(inner, {
			x: 0,
			y: 0,
			rotateX: 0,
			rotateY: 0,
			duration: .6,
			ease: "power3.out"
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: `ag-container ag-${orientation}`,
		role: "list",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			role: "listitem",
			ref: (el) => {
				panelsRef.current[i] = el;
			},
			className: `ag-panel ${i === active ? "ag-active" : ""}`,
			onMouseEnter: () => trigger === "hover" && setActive(i),
			onClick: () => setActive(i),
			onKeyDown: (e) => {
				const ev = e;
				if (ev.key === "Enter" || ev.key === " ") setActive(i);
				if (ev.key === "ArrowRight") setActive((s) => Math.min(items.length - 1, s + 1));
				if (ev.key === "ArrowLeft") setActive((s) => Math.max(0, s - 1));
			},
			tabIndex: 0,
			onPointerMove: (e) => handlePointerMove(e, i),
			onPointerLeave: () => handlePointerLeave(i),
			"aria-selected": i === active,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "ag-inner",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "ag-image-wrap",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						alt: it.alt ?? "",
						src: it.src,
						className: "ag-img"
					})
				}), showLabels && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ag-label",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ag-pill",
							children: it.indexLabel
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ag-title",
							children: it.title
						}),
						it.description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "ag-desc",
							children: it.description
						})
					]
				})]
			})
		}, i))
	});
}
var buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0", {
	variants: {
		variant: {
			default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
			destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
			outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
			secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
			ghost: "hover:bg-accent hover:text-accent-foreground",
			link: "text-primary underline-offset-4 hover:underline"
		},
		size: {
			default: "h-9 px-4 py-2",
			sm: "h-8 rounded-md px-3 text-xs",
			lg: "h-10 rounded-md px-8",
			icon: "h-9 w-9"
		}
	},
	defaultVariants: {
		variant: "default",
		size: "default"
	}
});
var Button = import_react.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(asChild ? Slot : "button", {
		className: cn(buttonVariants({
			variant,
			size,
			className
		})),
		ref,
		...props
	});
});
Button.displayName = "Button";
function SectionHeader({ eyebrow, title, lead }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "max-w-2xl",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow reveal-init",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "reveal-init mt-4 text-[clamp(1.75rem,3.4vw,2.6rem)] font-semibold tracking-tight",
				children: title
			}),
			lead ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "reveal-init mt-4 text-[0.975rem] leading-relaxed text-muted-foreground",
				children: lead
			}) : null
		]
	});
}
function MissionSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "shell py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-14 md:grid-cols-[0.9fr_1.1fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "Our mission",
				title: "Coordination is the hard part. We built the layer that handles it."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "reveal-init text-lg leading-relaxed",
				children: "Nepal is not short of generosity. It is short of coordination — of knowing who needs what, where, and who is already on the way. Help.com turns scattered phone calls, spreadsheets, and group chats into one accountable system."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "mt-8 space-y-4",
				children: [
					"Every request has a verified owner, a status, and an audit trail.",
					"Matching is geographic first — the nearest capable helper wins.",
					"Organizations keep their own workflows; the platform keeps the record."
				].map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
					className: "reveal-init flex gap-3 text-[0.95rem] text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "mt-0.5 size-4 shrink-0 text-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point })]
				}, point))
			})] })]
		})
	});
}
function Stat({ value, suffix, label, note }) {
	const counterRef = useCounter(value);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "reveal-init border-t border-border pt-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "font-display text-[clamp(2.2rem,5vw,3.4rem)] leading-none",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					ref: counterRef,
					children: "0"
				}), suffix]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-3 text-sm font-medium",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children: note
			})
		]
	});
}
function StatsSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "border-y border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow reveal-init",
				children: "Platform statistics"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4",
				children: STATS.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, { ...stat }, stat.label))
			})]
		})
	});
}
function CategoriesSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "shell py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-start justify-between gap-6",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "WHAT WE SUPPORT",
				title: "One platform. Many ways to help.",
				lead: ""
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "reveal-init",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/explore",
						children: "Explore all →"
					})
				})
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 reveal-init",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionGallery, {
				items: [
					{
						title: "Blood",
						indexLabel: "01",
						description: "Connect donors with people who urgently need blood.",
						src: hero_nepal_default,
						alt: "Blood donation"
					},
					{
						title: "Food",
						indexLabel: "02",
						description: "Put surplus food where it can make a difference.",
						src: hero_nepal_default,
						alt: "Food distribution"
					},
					{
						title: "Clothing",
						indexLabel: "03",
						description: "Give useful clothing a second life.",
						src: hero_nepal_default,
						alt: "Clothing donation"
					},
					{
						title: "Volunteers",
						indexLabel: "04",
						description: "Find people ready to give their time and skills.",
						src: hero_nepal_default,
						alt: "Community volunteers"
					}
				],
				trigger: "hover",
				orientation: "horizontal",
				defaultIndex: 0,
				showLabels: true,
				grayscale: true,
				parallax: .35,
				tilt: 4,
				duration: .65,
				ease: "power3.out"
			})
		})]
	});
}
function NgoSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		ref,
		className: "shell py-24 md:py-32",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
			eyebrow: "Featured organizations",
			title: "Verified NGOs, hospitals, and community groups.",
			lead: "Registration documents, a responsible contact, and recent activity are reviewed before any organization can publish."
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3",
			children: NGOS.map((ngo) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-init bg-card p-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "grid size-9 shrink-0 place-items-center rounded-md border border-border font-display text-lg",
						children: ngo.name.charAt(0)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "truncate text-sm font-semibold",
							children: ngo.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs text-muted-foreground",
							children: ngo.focus
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-6 flex items-center justify-between text-xs text-muted-foreground",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: ngo.district }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-mono",
						children: [ngo.years, " yrs active"]
					})]
				})]
			}, ngo.name))
		})]
	});
}
function TestimonialsSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "border-y border-border bg-ink text-ink-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell py-24 md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow reveal-init text-ink-foreground/50",
				children: "Testimonials"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-12 grid gap-12 md:grid-cols-3",
				children: TESTIMONIALS.map((testimonial) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
					className: "reveal-init",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
						className: "font-display text-[1.6rem] leading-tight",
						children: [
							"“",
							testimonial.quote,
							"”"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
						className: "mt-6 border-t border-ink-foreground/15 pt-4 text-sm",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "font-medium",
							children: testimonial.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-0.5 block text-ink-foreground/60",
							children: testimonial.role
						})]
					})]
				}, testimonial.name))
			})]
		})
	});
}
function FaqSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "shell py-24 md:py-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid gap-12 md:grid-cols-[0.8fr_1.2fr]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHeader, {
				eyebrow: "FAQ",
				title: "Questions we get asked most."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Accordion, {
				type: "single",
				collapsible: true,
				className: "reveal-init w-full",
				children: FAQS.map((faq) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(AccordionItem, {
					value: faq.q,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionTrigger, {
						className: "text-left text-[0.95rem] font-medium",
						children: faq.q
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AccordionContent, {
						className: "text-sm leading-relaxed text-muted-foreground",
						children: faq.a
					})]
				}, faq.q))
			})]
		})
	});
}
function ClosingSection() {
	const ref = useReveal();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref,
		className: "border-t border-border bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "shell flex flex-col items-center py-24 text-center md:py-32",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "reveal-init display max-w-[18ch] text-[clamp(2rem,5vw,3.6rem)]",
				children: "Start where you are. Help who is nearest."
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-init mt-10 flex flex-wrap justify-center gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/signup",
						className: "rounded-md text-sm font-medium text-brand-foreground",
						children: "Create an account"
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
					asChild: true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/explore",
						className: "rounded-md border border-border-strong text-sm font-medium transition-colors hover:bg-background",
						children: "Explore Opportunities"
					})
				})]
			})]
		})
	});
}
function LandingPage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroScrollExpand, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MissionSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(StatsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoriesSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(NgoSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaqSection, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClosingSection, {})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
	] });
}
//#endregion
export { LandingPage as component };
