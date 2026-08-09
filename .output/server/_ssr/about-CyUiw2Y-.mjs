import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { _ as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import "./router-jA7gLCFR.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { n as AnimatedButton, t as hero_nepal_default } from "./hero-nepal-CQ_saR7n.mjs";
import { a as SiteFooter } from "./site-footer-B17Eg4GQ.mjs";
import { S as CircleCheck, _ as Heart, j as ArrowRight, l as ShieldCheck, n as Users } from "../_libs/lucide-react.mjs";
import { t as SiteNav } from "./site-nav-CHfIrWAu.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-CyUiw2Y-.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var processSteps = [
	{
		number: "01",
		title: "Find",
		description: "Discover a donation request, blood need, volunteer opportunity, or community project that matches your time and resources."
	},
	{
		number: "02",
		title: "Connect",
		description: "Reach out to the person, receiver, NGO, or organization behind the request with clear next steps."
	},
	{
		number: "03",
		title: "Contribute",
		description: "Donate resources, give blood, volunteer your time, or support a verified need with confidence."
	},
	{
		number: "04",
		title: "Impact",
		description: "Your contribution reaches a real need and becomes part of a practical community outcome."
	}
];
var trustPoints = [
	{
		icon: ShieldCheck,
		title: "Verification",
		detail: "Clear guidance for users, NGOs, and organizations so support reaches trusted requests."
	},
	{
		icon: CircleCheck,
		title: "Confirmation",
		detail: "Designed to make contributions easier to track and feel more reliable."
	},
	{
		icon: Users,
		title: "Reporting",
		detail: "Simple tools to raise concerns and keep the community safer."
	},
	{
		icon: Heart,
		title: "Moderation",
		detail: "A trusted platform needs safeguards for people, requests, and participation."
	}
];
var categories = [
	{
		id: "blood",
		label: "BLOOD",
		description: "Emergency blood connections",
		detail: "Find donors and recipients quickly when every moment matters."
	},
	{
		id: "food",
		label: "FOOD",
		description: "Put useful food where it is needed",
		detail: "Match surplus supplies with families and shelters that can use them."
	},
	{
		id: "clothing",
		label: "CLOTHING",
		description: "Give usable clothing another life",
		detail: "Support people in need with warm, practical clothing and essentials."
	},
	{
		id: "medical",
		label: "MEDICAL",
		description: "Connect medical resources with people who need them",
		detail: "Share supplies, clinics, and care to keep communities safer."
	},
	{
		id: "volunteers",
		label: "VOLUNTEERS",
		description: "Find opportunities to give your time",
		detail: "Discover meaningful ways to help through verified volunteer roles."
	}
];
function AboutPage() {
	const heroRef = (0, import_react.useRef)(null);
	const problemRef = (0, import_react.useRef)(null);
	const categoriesRef = (0, import_react.useRef)(null);
	const timelineRef = (0, import_react.useRef)(null);
	const trustRef = (0, import_react.useRef)(null);
	const ctaRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		if (!heroRef.current) return;
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.timeline().from(".about-hero-media-inner", {
				clipPath: "inset(100% 0 0 0)",
				duration: 1,
				ease: "power3.out"
			}).from(".about-hero-eyebrow", {
				opacity: 0,
				y: 24,
				duration: .55
			}, "-=0.75").from(".about-hero-title span", {
				opacity: 0,
				y: 40,
				stagger: .08,
				duration: .75
			}, "-=0.7").from(".about-hero-paragraph", {
				opacity: 0,
				y: 24,
				duration: .55
			}, "-=0.55").from(".about-hero-actions", {
				opacity: 0,
				y: 24,
				duration: .55
			}, "-=0.4").from(".about-hero-meta", {
				opacity: 0,
				y: 24,
				duration: .55
			}, "-=0.35");
			const revealSection = (root, targets) => {
				if (!root) return;
				gsapWithCSS.from(targets, {
					scrollTrigger: {
						trigger: root,
						start: "top 80%",
						toggleActions: "play none none reverse"
					},
					opacity: 0,
					y: 24,
					duration: .7,
					stagger: .1
				});
			};
			revealSection(problemRef.current, ".about-problem-title span, .about-problem-divider, .about-problem-item");
			revealSection(categoriesRef.current, ".about-category-row, .about-category-preview");
			revealSection(timelineRef.current, ".about-timeline-step, .about-timeline-line");
			revealSection(trustRef.current, ".about-trust-row");
			revealSection(ctaRef.current, ".about-final-panel");
			gsapWithCSS.fromTo(".about-timeline-line", { scaleY: 0 }, {
				scaleY: 1,
				transformOrigin: "top center",
				ease: "none",
				scrollTrigger: {
					trigger: timelineRef.current,
					start: "top 90%",
					end: "bottom top",
					scrub: true
				}
			});
		});
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "about-page",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "about-content",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						ref: heroRef,
						className: "about-hero shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-hero-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-hero-copy-area",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow about-hero-eyebrow",
										children: "ABOUT HELP.COM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
										className: "about-hero-title",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Help should never" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "be hard to find." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "about-hero-paragraph",
										children: "Help.com connects people who want to help with people who need it, through a modern humanitarian platform built for clarity, trust, and speed."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "about-hero-actions",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
												to: "/explore",
												className: "inline-flex items-center gap-2 rounded-md px-6 py-3",
												children: ["Explore Help.com", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4" })]
											})
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
											asChild: true,
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/get-started",
												className: "inline-flex rounded-md border border-border px-6 py-3 text-muted-foreground",
												children: "Get Started"
											})
										})]
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-hero-media",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "about-hero-media-inner",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
										className: "about-hero-img",
										src: hero_nepal_default,
										alt: "Community volunteers working together in Nepal",
										loading: "eager",
										width: 1400,
										height: 980
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-hero-meta",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "PEOPLE HELPING PEOPLE" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "NEPAL / COMMUNITY" })]
								})]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						ref: problemRef,
						className: "about-section about-problem shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-problem-grid",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-problem-copy",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "01 — THE PROBLEM"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
										className: "about-section-title about-problem-title",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "People want to help." }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Finding where to help" }),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "is the hard part." })
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-problem-divider" })
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-problem-list",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "about-problem-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "about-problem-number",
											children: "01"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Donors don’t know where help is needed most." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "about-problem-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "about-problem-number",
											children: "02"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Receivers struggle to find reliable support." })]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "about-problem-item",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "about-problem-number",
											children: "03"
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Organizations struggle to connect with volunteers and resources." })]
									})
								]
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						ref: categoriesRef,
						className: "about-section about-categories shell",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "WHAT HELP.COM CONNECTS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "about-section-title",
								children: "A single place for people, organizations, and support."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CategoryGrid, {})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						ref: timelineRef,
						className: "about-section about-timeline shell",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-section-head",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "HOW IT WORKS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "about-section-title",
								children: "From intention to impact."
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-timeline-layout",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-timeline-line" }), processSteps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "about-timeline-step",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "about-timeline-marker",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: step.number })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-timeline-body",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", { children: step.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: step.description })]
								})]
							}, step.number))]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						ref: trustRef,
						className: "about-section about-trust shell",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow",
								children: "TRUST MATTERS"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "about-section-title",
								children: "Helping people means protecting them too."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "about-trust-list",
								children: trustPoints.map((point, index) => {
									const Icon = point.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
										type: "button",
										className: "about-trust-row",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "about-trust-row-index",
											children: ["0", index + 1]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "about-trust-row-main",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
												className: "about-trust-row-heading",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point.title }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: point.detail })]
										})]
									}, point.title);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						ref: ctaRef,
						className: "about-section about-final-cta shell",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "about-final-panel about-final-panel-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-final-copy",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "eyebrow",
										children: "YOUR NEXT CONTRIBUTION COULD MATTER."
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", { children: "Make your next contribution count with Help.com." })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "about-final-actions",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/explore",
											className: "inline-flex items-center gap-2 rounded-md px-6 py-3",
											children: "Explore"
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AnimatedButton, {
										asChild: true,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
											to: "/get-started",
											className: "inline-flex rounded-md border border-border px-6 py-3 text-muted-foreground",
											children: "Get Started"
										})
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "about-final-decorative-line" })
							]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
function CategoryGrid() {
	const [activeCategory, setActiveCategory] = (0, import_react.useState)(categories[0].id);
	const active = categories.find((item) => item.id === activeCategory) ?? categories[0];
	const hoverArrow = (event) => {
		const arrow = event.currentTarget.querySelector(".about-category-arrow");
		if (!arrow) return;
		gsapWithCSS.to(arrow, {
			x: 6,
			duration: .2,
			ease: "power3.out"
		});
	};
	const resetArrow = (event) => {
		const arrow = event.currentTarget.querySelector(".about-category-arrow");
		if (!arrow) return;
		gsapWithCSS.to(arrow, {
			x: 0,
			duration: .2,
			ease: "power3.out"
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "about-categories-grid",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "about-category-list",
			children: categories.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: `about-category-row ${item.id === activeCategory ? "active" : ""}`,
				onMouseEnter: (event) => {
					setActiveCategory(item.id);
					hoverArrow(event);
				},
				onMouseLeave: resetArrow,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: item.label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: item.description })] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "about-category-arrow",
					children: "→"
				})]
			}, item.id))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "about-category-preview",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "about-category-preview-image",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: hero_nepal_default,
					alt: active.label,
					loading: "lazy",
					width: 1200,
					height: 900
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "about-category-preview-copy",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: active.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: active.detail })]
			})]
		})]
	});
}
//#endregion
export { AboutPage as component };
