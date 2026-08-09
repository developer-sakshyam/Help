import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { c as recordVolunteerApplication, s as recordDonation } from "./demoAuth-74wbb7Ne.mjs";
import { S as CircleCheck, _ as Heart, i as UserCheck, l as ShieldCheck, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ActionModals-CPZI8uku.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function DonateModal({ isOpen, onClose, initialTitle = "Emergency Community Support", initialOrg = "Help.com Relief Network", initialCategory = "FOOD" }) {
	const modalRef = (0, import_react.useRef)(null);
	const checkRef = (0, import_react.useRef)(null);
	const [category, setCategory] = (0, import_react.useState)(initialCategory);
	const [details, setDetails] = (0, import_react.useState)("5 food packages");
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (!isOpen) {
			setIsSuccess(false);
			return;
		}
		if (prefersReducedMotion() || !modalRef.current) return;
		gsapWithCSS.fromTo(modalRef.current, {
			opacity: 0,
			scale: .95,
			y: 10
		}, {
			opacity: 1,
			scale: 1,
			y: 0,
			duration: .3,
			ease: "power2.out"
		});
	}, [isOpen]);
	if (!isOpen) return null;
	function handleSubmit(e) {
		e.preventDefault();
		recordDonation(category, initialOrg, details);
		setIsSuccess(true);
		if (!prefersReducedMotion() && checkRef.current) gsapWithCSS.fromTo(checkRef.current, {
			scale: 0,
			opacity: 0
		}, {
			scale: 1,
			opacity: 1,
			duration: .4,
			ease: "back.out(1.7)"
		});
		setTimeout(() => {
			onClose();
			setIsSuccess(false);
		}, 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: modalRef,
			className: "bg-card border border-border w-full max-w-md rounded-xl p-6 shadow-2xl relative space-y-5 text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}), isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: checkRef,
					className: "size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold tracking-tight",
						children: "Donation Recorded!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono text-muted-foreground max-w-xs mx-auto",
						children: "Thank you. Your donation has been logged and your dashboard activity count & impact score have increased."
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5 border-b border-border/80 pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heart, { className: "size-4 text-rose-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.7rem] font-mono tracking-widest uppercase text-muted-foreground",
							children: "MAKE A DEMO DONATION"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-foreground leading-snug",
						children: initialTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-mono text-muted-foreground",
						children: ["Beneficiary: ", initialOrg]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-mono text-muted-foreground uppercase",
							children: "Category"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
							value: category,
							onChange: (e) => setCategory(e.target.value),
							className: "w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-foreground",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "BLOOD",
									children: "Blood"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "FOOD",
									children: "Food"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "CLOTHING",
									children: "Clothing"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "MEDICAL",
									children: "Medical Supplies"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "BOOKS",
									children: "Books"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "FURNITURE",
									children: "Furniture"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: "ELECTRONICS",
									children: "Electronics"
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-1",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-xs font-mono text-muted-foreground uppercase",
							children: "Donation Quantity & Details"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "text",
							value: details,
							onChange: (e) => setDetails(e.target.value),
							placeholder: "e.g. 5 food packages or 1 unit O+ blood",
							className: "w-full bg-background border border-border rounded-lg px-3 py-2 text-sm font-mono focus:outline-none focus:ring-1 focus:ring-foreground",
							required: true
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-3 rounded-lg bg-muted/40 border border-border text-[0.75rem] font-mono text-muted-foreground",
						children: [
							"✨ ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
								className: "text-foreground",
								children: "Demo Action"
							}),
							": No real money or credentials required. Clicking confirm immediately records the donation on your profile."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-2 flex justify-end gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: onClose,
							className: "px-4 py-2 border border-border rounded-lg text-xs font-mono text-muted-foreground hover:bg-accent transition-colors",
							children: "Cancel"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "submit",
							className: "px-5 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-mono font-medium hover:opacity-90 transition-opacity",
							children: "I Can Help →"
						})]
					})
				]
			})] })]
		})
	});
}
function VolunteerModal({ isOpen, onClose, initialTitle = "Community Relief Volunteer", initialOrg = "Help.com Volunteer Network", initialLocation = "Kathmandu, Nepal" }) {
	const modalRef = (0, import_react.useRef)(null);
	const checkRef = (0, import_react.useRef)(null);
	const [isSuccess, setIsSuccess] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (!isOpen) {
			setIsSuccess(false);
			return;
		}
		if (prefersReducedMotion() || !modalRef.current) return;
		gsapWithCSS.fromTo(modalRef.current, {
			opacity: 0,
			scale: .95,
			y: 10
		}, {
			opacity: 1,
			scale: 1,
			y: 0,
			duration: .3,
			ease: "power2.out"
		});
	}, [isOpen]);
	if (!isOpen) return null;
	function handleSubmit(e) {
		e.preventDefault();
		recordVolunteerApplication(initialTitle, initialOrg);
		setIsSuccess(true);
		if (!prefersReducedMotion() && checkRef.current) gsapWithCSS.fromTo(checkRef.current, {
			scale: 0,
			opacity: 0
		}, {
			scale: 1,
			opacity: 1,
			duration: .4,
			ease: "back.out(1.7)"
		});
		setTimeout(() => {
			onClose();
			setIsSuccess(false);
		}, 1800);
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-xs",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref: modalRef,
			className: "bg-card border border-border w-full max-w-md rounded-xl p-6 shadow-2xl relative space-y-5 text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "button",
				onClick: onClose,
				className: "absolute top-4 right-4 p-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-4" })
			}), isSuccess ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-8 text-center space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					ref: checkRef,
					className: "size-16 rounded-full bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 flex items-center justify-center mx-auto",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "size-8" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-xl font-bold tracking-tight",
						children: "Application Submitted!"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-xs font-mono text-muted-foreground max-w-xs mx-auto",
						children: "Your volunteer application has been sent. Your dashboard volunteer hours and impact score have updated."
					})]
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "space-y-1.5 border-b border-border/80 pb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(UserCheck, { className: "size-4 text-emerald-500" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-[0.7rem] font-mono tracking-widest uppercase text-muted-foreground",
							children: "APPLY AS VOLUNTEER"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-lg font-bold text-foreground leading-snug",
						children: initialTitle
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-xs font-mono text-muted-foreground",
						children: [
							"Organization: ",
							initialOrg,
							" · Location: ",
							initialLocation
						]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "p-3 rounded-lg bg-muted/40 border border-border space-y-2 text-xs",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "font-mono font-semibold flex items-center gap-1.5 text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ShieldCheck, { className: "size-3.5 text-emerald-500" }), " Opportunity Overview"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-muted-foreground leading-relaxed",
						children: [
							"You are applying to join the local volunteer team for ",
							initialTitle,
							". Your commitment will directly help on-ground distribution and coordination."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-2 flex justify-end gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						onClick: onClose,
						className: "px-4 py-2 border border-border rounded-lg text-xs font-mono text-muted-foreground hover:bg-accent transition-colors",
						children: "Cancel"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: "px-5 py-2 bg-primary text-primary-foreground rounded-lg text-xs font-mono font-medium hover:opacity-90 transition-opacity",
						children: "Submit Application →"
					})]
				})]
			})] })]
		})
	});
}
//#endregion
export { VolunteerModal as n, DonateModal as t };
