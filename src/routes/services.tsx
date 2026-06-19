import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageProvider";
import { Section } from "@/components/Section";
import { PaperCard } from "@/components/PaperCard";
import { whatsappLink } from "@/components/WhatsAppButton";
import serviceVan from "@/assets/service-van.jpg";
import serviceChauffeur from "@/assets/service-chauffeur.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";
import destParis from "@/assets/dest-paris.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Al-Aswani" },
      {
        name: "description",
        content:
          "Tourist journeys, transportation, Arabic-speaking chauffeurs and hotel booking — composed with care across Europe.",
      },
      { property: "og:title", content: "Services — Al-Aswani" },
      {
        property: "og:description",
        content: "Four core services that together form a complete European journey.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  const t = useT();
  const images = [serviceChauffeur, serviceVan, destParis, serviceHotel];

  return (
    <>
      <Section tone="sky" tearBottom="paper" className="overflow-hidden">
        <div className="mx-auto max-w-[1200px] px-6 pt-44 pb-32 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/60"
          >
            {t.nav.services}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]"
          >
            {t.pages.services.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/70"
          >
            {t.pages.services.lede}
          </motion.p>
        </div>
      </Section>

      <Section tone="paper" tearBottom="ink" className="paper-noise" noise>
        <div className="mx-auto max-w-[1200px] px-6 py-24 md:px-10 md:py-32">
          <div className="space-y-24">
            {t.services.items.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`grid items-center gap-12 md:grid-cols-2 ${
                  i % 2 ? "md:[direction:rtl]" : ""
                }`}
              >
                <div style={{ direction: "ltr" }}>
                  <PaperCard tilt={i % 2 ? 2 : -2} className="max-w-[500px]">
                    <img src={images[i]} alt={s.title} className="h-80 w-full rounded-sm object-cover" />
                  </PaperCard>
                </div>
                <div style={{ direction: "inherit" }} className="text-start">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-ink/45">0{i + 1}</p>
                  <h2 className="mt-2 text-[clamp(1.8rem,3.4vw,2.8rem)] leading-tight">
                    {s.title}
                  </h2>
                  <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70">
                    {s.desc}
                  </p>
                  <a
                    href={whatsappLink(s.title)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn-light mt-8"
                  >
                    <span>{t.common.bookViaWhatsapp}</span>
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-24 flex justify-center">
            <Link to="/packages" className="pill-btn">
              <span>{t.findTrip.cta}</span>
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}