import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useT, useLang } from "@/i18n/LanguageProvider";
import { Section } from "@/components/Section";
import { whatsappLink } from "@/components/WhatsAppButton";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Al-Aswani" },
      {
        name: "description",
        content:
          "Reach Al-Aswani on WhatsApp or by email. Based in the Netherlands, serving travellers across Europe.",
      },
      { property: "og:title", content: "Contact — Al-Aswani" },
      {
        property: "og:description",
        content: "WhatsApp us — we reply within a few hours.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const t = useT();
  const { lang } = useLang();
  const message =
    lang === "ar"
      ? "مرحباً الأسواني، أرغب بالاستفسار عن رحلة في أوروبا."
      : "Hi Al-Aswani, I'd like to ask about a trip in Europe.";

  return (
    <>
      <Section tone="paper" tearBottom="ink" className="paper-noise" noise>
        <div className="mx-auto max-w-[1100px] px-6 pt-44 pb-40 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55"
          >
            {t.nav.contact}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]"
          >
            {t.pages.contact.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/70"
          >
            {t.pages.contact.lede}
          </motion.p>

          <div className="mt-14 grid gap-10 md:grid-cols-2">
            <div className="rounded-2xl border border-ink/10 bg-[#fdfaf3] p-8 shadow-[0_18px_30px_-22px_rgba(40,30,15,0.4)]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink/45">{t.common.whatsapp}</p>
              <p className="mt-3 text-2xl">+31 6 00 00 00 00</p>
              <a
                href={whatsappLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn mt-6"
              >
                <span>{t.common.bookViaWhatsapp}</span>
              </a>
            </div>
            <div className="rounded-2xl border border-ink/10 bg-[#fdfaf3] p-8 shadow-[0_18px_30px_-22px_rgba(40,30,15,0.4)]">
              <p className="text-[10px] uppercase tracking-[0.24em] text-ink/45">Email</p>
              <a href="mailto:hello@al-aswani.com" className="mt-3 block text-2xl hover:underline">
                hello@al-aswani.com
              </a>
              <p className="mt-6 text-sm leading-relaxed text-ink/65">{t.pages.contact.hours}</p>
            </div>
          </div>

          <div className="mt-12 border-t border-ink/10 pt-8">
            <p className="text-sm leading-relaxed text-ink/65">{t.pages.contact.areas}</p>
          </div>
        </div>
      </Section>
    </>
  );
}