import { useEffect, useMemo, useRef, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { gsap } from "gsap";
import { registerGsap } from "@/lib/gsap";
import "./PillNav.css";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Explore", href: "/explore" },
  { label: "Volunteers", href: "/volunteers" },
  { label: "NGOs", href: "/ngos" },
  { label: "Campaigns", href: "/campaigns" },
  { label: "Get Started", href: "/get-started" },
];

export function PillNav() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const currentPath = useMemo(
    () => router.state.location.pathname,
    [router.state.location.pathname],
  );
  const activeHref =
    navItems.find((item) => item.href === currentPath)?.href ?? "/";

  useEffect(() => {
    registerGsap();
  }, []);

  useEffect(() => {
    const menu = mobileMenuRef.current;
    const burger = burgerRef.current;
    if (!menu || !burger) return;

    gsap.killTweensOf([menu, burger]);

    if (open) {
      gsap.set(menu, { display: "block" });
      gsap.fromTo(
        menu,
        { autoAlpha: 0, y: -12 },
        { autoAlpha: 1, y: 0, duration: 0.28, ease: "power3.out" },
      );
      gsap.fromTo(
        burger,
        { scale: 1, rotate: -6 },
        { scale: 1.06, rotate: 0, duration: 0.16, ease: "power3.out" },
      );
    } else {
      gsap.set(menu, { display: "block" });
      gsap.to(menu, {
        autoAlpha: 0,
        y: -12,
        duration: 0.22,
        ease: "power3.inOut",
        onComplete: () => gsap.set(menu, { display: "none" }),
      });
      gsap.fromTo(
        burger,
        { scale: 1, rotate: 0 },
        { scale: 0.96, rotate: 8, duration: 0.14, ease: "power3.inOut" },
      );
    }
  }, [open]);

  return (
    <header className="pillnav-header">
      <div className="pillnav-shell">
        <Link to="/" className="pillnav-logo" aria-label="Help.com home">
          <span className="pillnav-logo-mark">H</span>
          <span className="pillnav-logo-label">Help.com</span>
        </Link>

        <nav aria-label="Primary" className="pillnav-links">
          {navItems.map((item) => {
            const isActive = item.href === activeHref;
            return (
              <Link
                key={item.href}
                to={item.href}
                className={`pillnav-item ${isActive ? "pillnav-item-active" : ""}`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="pillnav-actions">
          <button
            ref={burgerRef}
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
            className="pillnav-burger"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`pillnav-mobile ${open ? "pillnav-mobile-open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="pillnav-mobile-links" aria-label="Mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              to={item.href}
              className={`pillnav-mobile-link ${item.href === activeHref ? "active" : ""}`}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
