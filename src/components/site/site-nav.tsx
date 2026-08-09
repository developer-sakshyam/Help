import { Link, useNavigate } from "@tanstack/react-router";
import { Menu, X, User, LogOut } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { NAV_LINKS } from "@/data/landing";
import { ThemeToggle } from "@/components/site/theme-toggle";
import { getAuthenticatedUser, logoutDemoUser } from "@/lib/demoAuth";
import { registerGsap, gsap, prefersReducedMotion } from "@/lib/gsap";

/**
 * Primary site navigation.
 * Dynamically reacts to the demo authentication state without altering layout or styling.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);
  const [authUser, setAuthUser] = useState(() => getAuthenticatedUser());
  const authContainerRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    registerGsap();

    function syncAuth() {
      const current = getAuthenticatedUser();
      setAuthUser((prev) => {
        if (prev?.displayName !== current?.displayName || prev?.active !== current?.active) {
          if (!prefersReducedMotion() && authContainerRef.current) {
            gsap.fromTo(
              authContainerRef.current,
              { opacity: 0, y: -4 },
              { opacity: 1, y: 0, duration: 0.3, ease: "power2.out" }
            );
          }
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

  return (
    <header className="border-b border-border bg-background/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-8">
        <Link
          to="/"
          className="flex items-center gap-2.5"
          aria-label="Help.com home"
        >
          <span className="grid size-7 place-items-center rounded-md bg-brand text-brand-foreground">
            <span className="font-display text-base leading-none">H</span>
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight">
            Help.com
          </span>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-8 text-sm md:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link key={link.label} to={link.to} className="nav-link">
              {link.label}
            </Link>
          ))}
        </nav>

        <div ref={authContainerRef} className="hidden items-center gap-3 md:flex">
          <ThemeToggle />

          {authUser?.active ? (
            <div className="flex items-center gap-2">
              <Link
                to="/dashboard"
                className="flex items-center gap-1.5 rounded-md border border-border bg-card px-3.5 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-accent hover:border-border-strong"
              >
                <span>{authUser.displayName}</span>
                <User className="size-3.5 text-muted-foreground" />
              </Link>
              <button
                type="button"
                onClick={handleLogout}
                title="Sign out"
                className="p-1.5 text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-accent"
              >
                <LogOut className="size-4" />
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Sign in
              </Link>
              <Link
                to="/signup"
                className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                Get started
              </Link>
            </>
          )}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-md border border-border"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open ? (
        <div className="border-t border-border md:hidden">
          <nav aria-label="Mobile" className="shell flex flex-col py-3 text-sm">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                to={link.to}
                onClick={() => setOpen(false)}
                className="py-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </Link>
            ))}

            {authUser?.active ? (
              <div className="pt-2 border-t border-border mt-2 space-y-2">
                <Link
                  to="/dashboard"
                  onClick={() => setOpen(false)}
                  className="py-2.5 font-medium flex items-center justify-between text-foreground"
                >
                  <span className="flex items-center gap-2">
                    <User className="size-4 text-muted-foreground" />
                    {authUser.displayName}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground">
                    Dashboard →
                  </span>
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    handleLogout();
                    setOpen(false);
                  }}
                  className="w-full text-left py-2 text-xs text-muted-foreground hover:text-foreground flex items-center gap-2"
                >
                  <LogOut className="size-3.5" /> Sign out
                </button>
              </div>
            ) : (
              <Link
                to="/signup"
                onClick={() => setOpen(false)}
                className="py-3 font-medium"
              >
                Get started
              </Link>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
