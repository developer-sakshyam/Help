import { NAV_LINKS } from "@/data/landing";

const COLUMNS = [
  {
    title: "Platform",
    links: [
      "Explore",
      "Campaigns",
      "Volunteer",
      "Blood requests",
      "Donation categories",
    ],
  },
  {
    title: "Organizations",
    links: ["For NGOs", "For hospitals", "Verification", "Partnerships"],
  },
  {
    title: "Company",
    links: ["About", "Impact reports", "Careers", "Press", "Contact"],
  },
  {
    title: "Legal",
    links: ["Privacy", "Terms", "Data protection", "Trust & safety"],
  },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="shell py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div className="max-w-xs">
            <div className="flex items-center gap-2.5">
              <span className="grid size-7 place-items-center rounded-md bg-brand text-brand-foreground">
                <span className="font-display text-base leading-none">H</span>
              </span>
              <span className="text-[0.95rem] font-semibold tracking-tight">
                Help.com
              </span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              A coordination layer for humanitarian work in Nepal — connecting
              donors, volunteers, NGOs, hospitals, and the people they serve.
            </p>
          </div>

          {COLUMNS.map((column) => (
            <div key={column.title}>
              <h3 className="eyebrow">{column.title}</h3>
              <ul className="mt-4 space-y-2.5 text-sm">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href={NAV_LINKS.find((n) => n.label === link)?.to ?? "#"}
                      className="footer-link"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Help.com — Kathmandu, Nepal</p>
          <p className="font-mono tracking-wide">Helping should be simple.</p>
        </div>
      </div>
    </footer>
  );
}
