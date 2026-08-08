import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { NAV_LINKS } from "@/data/landing";
import { ThemeToggle } from "@/components/site/theme-toggle";

/**
 * Primary site navigation. On the landing page it is revealed by the
 * hero scroll-expand timeline, so it renders inert until the parent
 * animates its wrapper in.
 */
export function SiteNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-background/85 backdrop-blur-md">
      <div className="shell flex h-16 items-center justify-between gap-8">
        <Link to="/" className="flex items-center gap-2.5" aria-label="Help.com home">
          <span className="grid size-7 place-items-center rounded-md bg-brand text-brand-foreground">
            <span className="font-display text-base leading-none">H</span>
          </span>
          <span className="text-[0.95rem] font-semibold tracking-tight">Help.com</span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 text-sm md:flex">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.to} className="nav-link">
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ThemeToggle />
          <a
            href="/login"
            className="rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Sign in
          </a>
          <a
            href="/signup"
            className="rounded-md bg-primary px-3.5 py-1.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get started
          </a>
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
              <a
                key={link.label}
                href={link.to}
                className="py-2.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a href="/signup" className="py-3 font-medium">
              Get started
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
