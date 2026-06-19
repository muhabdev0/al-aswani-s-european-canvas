import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useT } from "@/i18n/LanguageProvider";
import { LanguageSwitcher } from "./LanguageSwitcher";
import logo from "@/assets/logo.png";

export function Header() {
  const t = useT();
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/" as const, label: t.nav.home },
    { to: "/services" as const, label: t.nav.services },
    { to: "/packages" as const, label: t.nav.packages },
    { to: "/about" as const, label: t.nav.about },
    { to: "/contact" as const, label: t.nav.contact },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-40">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-6 px-6 py-6 md:px-10 md:py-7">
        <Link to="/" className="flex items-center" aria-label={t.brand}>
          <img
            src={logo}
            alt={t.brand}
            width={140}
            height={48}
            className="h-9 w-auto md:h-11"
          />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-[12px] font-medium uppercase tracking-[0.22em] text-ink/70 transition hover:text-ink"
              activeProps={{ className: "text-ink" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
            type="button"
            className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink/15 text-ink"
            onClick={() => setOpen((o) => !o)}
            aria-label="Menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="mx-4 rounded-2xl border border-ink/10 bg-paper/95 px-6 py-5 backdrop-blur shadow-xl">
            <nav className="flex flex-col gap-3">
              {links.map((l) => (
                <Link
                  key={l.to}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium tracking-wide text-ink/80"
                >
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}