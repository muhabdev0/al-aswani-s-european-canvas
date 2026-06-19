import { Link } from "@tanstack/react-router";
import { useT } from "@/i18n/LanguageProvider";
import { TornEdge } from "./TornEdge";
import logo from "@/assets/logo.png";

export function Footer() {
  const t = useT();
  return (
    <footer className="relative bg-ink text-paper">
      <TornEdge position="top" tone="paper" height={56} />
      <div className="mx-auto max-w-[1400px] px-6 pt-28 pb-12 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img src={logo} alt={t.brand} width={140} height={48} className="h-10 w-auto brightness-0 invert" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-paper/70">
              {t.footer.tagline}
            </p>
            <p className="mt-3 text-xs uppercase tracking-[0.22em] text-paper/40">
              {t.footer.based}
            </p>
          </div>

          <FooterCol title={t.footer.columns.explore}>
            <Link to="/services" className="footer-link">{t.nav.services}</Link>
            <Link to="/packages" className="footer-link">{t.nav.packages}</Link>
          </FooterCol>

          <FooterCol title={t.footer.columns.company}>
            <Link to="/about" className="footer-link">{t.nav.about}</Link>
            <Link to="/contact" className="footer-link">{t.nav.contact}</Link>
          </FooterCol>

          <FooterCol title={t.footer.columns.contact}>
            <a
              href="https://wa.me/31600000000"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
            >
              WhatsApp · +31 6 00 00 00 00
            </a>
            <a href="mailto:hello@al-aswani.com" className="footer-link">
              hello@al-aswani.com
            </a>
          </FooterCol>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-paper/10 pt-6 text-xs text-paper/40 md:flex-row md:items-center">
          <p>{t.footer.rights}</p>
          <p className="tracking-[0.22em] uppercase">Al-Aswani · {new Date().getFullYear()}</p>
        </div>
      </div>

      <style>{`.footer-link { display:block; font-size: 0.875rem; color: rgba(247,241,230,0.7); transition: color .2s; } .footer-link:hover { color: rgba(247,241,230,1); }`}</style>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h3 className="text-[11px] font-medium uppercase tracking-[0.24em] text-paper/50">
        {title}
      </h3>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}