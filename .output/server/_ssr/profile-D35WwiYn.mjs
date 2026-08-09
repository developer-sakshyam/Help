import { r as __toESM } from "../_runtime.mjs";
import { c as require_jsx_runtime, l as require_react } from "../_libs/@radix-ui/react-accordion+[...].mjs";
import { y as useNavigate } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { n as registerGsap, t as prefersReducedMotion } from "./gsap-D9et6-n6.mjs";
import { t as AuthLayout } from "./AuthLayout--AgapdQk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/profile-D35WwiYn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Page = () => {
	const navigate = useNavigate();
	const [data, setData] = (0, import_react.useState)({});
	const [preview, setPreview] = (0, import_react.useState)(null);
	const fileRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		registerGsap();
		if (prefersReducedMotion()) return;
		const temp = JSON.parse(localStorage.getItem("help_demo_signup") ?? "{}");
		if (!temp || !temp.role) {
			navigate({ to: "/signup" });
			return;
		}
		setData(temp);
		setPreview(temp.profileImage ?? null);
	}, [navigate]);
	function onFile(e) {
		const file = e.target.files?.[0];
		if (!file) return;
		const reader = new FileReader();
		reader.onload = () => {
			if (typeof reader.result !== "string") return;
			setPreview(reader.result);
			const next = {
				...data,
				profileImage: reader.result
			};
			setData(next);
			localStorage.setItem("help_demo_signup", JSON.stringify(next));
			if (!prefersReducedMotion()) gsapWithCSS.fromTo(".profile-preview", {
				scale: .92,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
				duration: .35
			});
		};
		reader.readAsDataURL(file);
	}
	function removeImage() {
		setPreview(null);
		const next = {
			...data,
			profileImage: null
		};
		setData(next);
		localStorage.setItem("help_demo_signup", JSON.stringify(next));
		if (fileRef.current) fileRef.current.value = "";
	}
	function handleChange(e) {
		const { name, value } = e.target;
		const next = {
			...data,
			[name]: value
		};
		setData(next);
		localStorage.setItem("help_demo_signup", JSON.stringify(next));
	}
	function handleContinue() {
		navigate({ to: "/signup/review" });
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AuthLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "bg-surface p-6 rounded-lg shadow",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-xl font-bold mb-2",
				children: "Complete your profile"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-muted-foreground mb-4",
				children: "A complete profile helps people know who they're helping."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "w-20 h-20 rounded-full bg-muted flex items-center justify-center overflow-hidden profile-preview",
							children: preview ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: preview,
								alt: "preview",
								className: "w-full h-full object-cover"
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm",
								children: "No image"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								ref: fileRef,
								type: "file",
								accept: "image/*",
								onChange: onFile
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: () => fileRef.current?.click(),
									className: "px-3 py-1 border rounded",
									children: "Upload"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									onClick: removeImage,
									className: "px-3 py-1 border rounded",
									children: "Remove"
								})]
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm mb-1",
						children: "Full name"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "fullName",
						value: data.fullName || "",
						onChange: handleChange,
						className: "w-full border rounded px-3 py-2"
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
						className: "block text-sm mb-1",
						children: "Bio"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "bio",
						value: data.bio || "",
						onChange: handleChange,
						className: "w-full border rounded px-3 py-2",
						rows: 3
					})] }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Phone"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "phone",
							value: data.phone || "",
							onChange: handleChange,
							className: "w-full border rounded px-3 py-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Province"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "province",
							value: data.province || "",
							onChange: handleChange,
							className: "w-full border rounded px-3 py-2"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 sm:grid-cols-2 gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "District"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "district",
							value: data.district || "",
							onChange: handleChange,
							className: "w-full border rounded px-3 py-2"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "block text-sm mb-1",
							children: "Municipality"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "municipality",
							value: data.municipality || "",
							onChange: handleChange,
							className: "w-full border rounded px-3 py-2"
						})] })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-between mt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => navigate({ to: "/signup/role" }),
							className: "px-4 py-2 border rounded",
							children: "Back"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: handleContinue,
							className: "px-5 py-2 rounded bg-brand text-white",
							children: "Continue"
						})]
					})
				]
			})
		]
	}) });
};
//#endregion
export { Page as component };
