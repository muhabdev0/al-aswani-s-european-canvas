import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageProvider";
import { Section } from "@/components/Section";
import { PaperCard } from "@/components/PaperCard";
import { whatsappLink } from "@/components/WhatsAppButton";
import destAlps from "@/assets/dest-alps.jpg";
import destAmsterdam from "@/assets/dest-amsterdam.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destLakes from "@/assets/dest-lakes.jpg";
import destBlackforest from "@/assets/dest-blackforest.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";

export const Route = createFileRoute("/packages")({
  head: () => ({
    meta: [
      { title: "Journeys — Al-Aswani" },
      {
        name: "description",
        content:
          "Curated European journeys by Al-Aswani: Amsterdam, Paris, the Swiss Alps, Italian lakes and more.",
      },
      { property: "og:title", content: "Journeys — Al-Aswani" },
      {
        property: "og:description",
        content: "A small collection of trips shaped from the moments we love most about Europe.",
      },
    ],
  }),
  component: PackagesPage,
});

type Pkg = {
  ar: { name: string; tag: string; desc: string };
  en: { name: string; tag: string; desc: string };
  img: string;
  from: string;
  tilt: number;
};

const PACKAGES: Pkg[] = [
  {
    ar: { name: "أمستردام الكلاسيكية", tag: "٤ أيام · هولندا", desc: "قنوات، طواحين، ومتاحف فان كوخ مع سائق خاص." },
    en: { name: "Classic Amsterdam", tag: "4 days · Netherlands", desc: "Canals, windmills and Van Gogh, with a private chauffeur." },
    img: destAmsterdam,
    from: "€ 1,250",
    tilt: -2,
  },
  {
    ar: { name: "باريس الذوّاقة", tag: "٥ أيام · فرنسا", desc: "مونمارتر، المتاحف، وعشاء في حيٍّ هادئ." },
    en: { name: "Paris à la carte", tag: "5 days · France", desc: "Montmartre, museums, and dinners in quiet corners." },
    img: destParis,
    from: "€ 1,690",
    tilt: 1.5,
  },
  {
    ar: { name: "طريق جبال الألب", tag: "٦ أيام · سويسرا", desc: "قمم ثلجية، قطارات بانورامية، وفنادق جبلية دافئة." },
    en: { name: "Alpine Road", tag: "6 days · Switzerland", desc: "Snow peaks, panoramic trains, and warm mountain inns." },
    img: destAlps,
    from: "€ 2,250",
    tilt: -3,
  },
  {
    ar: { name: "بحيرات إيطاليا", tag: "٧ أيام · إيطاليا", desc: "بحيرة كومو، مايجوري، وقرى ساحلية صغيرة." },
    en: { name: "Italian Lakes", tag: "7 days · Italy", desc: "Lake Como, Maggiore, and tiny shoreline villages." },
    img: destLakes,
    from: "€ 2,490",
    tilt: 2,
  },
  {
    ar: { name: "الغابة السوداء", tag: "٤ أيام · ألمانيا", desc: "غابات صنوبر، حمّامات معدنية، وقرى تقليدية." },
    en: { name: "Black Forest", tag: "4 days · Germany", desc: "Pine forests, thermal baths, and timber villages." },
    img: destBlackforest,
    from: "€ 1,180",
    tilt: -1.5,
  },
  {
    ar: { name: "إقامة بوتيك", tag: "حسب الطلب", desc: "نختار لك الفندق الأنسب لمزاجك وميزانيتك." },
    en: { name: "Boutique stays", tag: "On request", desc: "We pick the right room for your mood and budget." },
    img: serviceHotel,
    from: "€ 290",
    tilt: 3,
  },
];

function PackagesPage() {
  const t = useT();
  const isAr = t.lang === "ar";

  return (
    <>
      <Section tone="paper" tearBottom="paperDeep" className="paper-noise" noise>
        <div className="mx-auto max-w-[1200px] px-6 pt-44 pb-24 md:px-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55"
          >
            {t.nav.packages}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.05 }}
            className="mt-5 max-w-3xl text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]"
          >
            {t.pages.packages.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-ink/70"
          >
            {t.pages.packages.lede}
          </motion.p>
        </div>
      </Section>

      <Section tone="paperDeep" tearBottom="ink" className="paper-noise" noise>
        <div className="mx-auto max-w-[1300px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
            {PACKAGES.map((p, i) => {
              const copy = isAr ? p.ar : p.en;
              return (
                <motion.div
                  key={copy.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.7, delay: (i % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -8, rotate: 0 }}
                  style={{ transform: `rotate(${p.tilt}deg)` }}
                >
                  <PaperCard>
                    <img src={p.img} alt={copy.name} className="h-64 w-full rounded-sm object-cover" />
                    <div className="px-2 pt-4 pb-1">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-ink/45">
                        {copy.tag}
                      </p>
                      <h3 className="mt-1 text-xl leading-tight">{copy.name}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-ink/70">{copy.desc}</p>
                      <div className="mt-5 flex items-center justify-between border-t border-ink/10 pt-3">
                        <span className="text-[11px] uppercase tracking-[0.2em] text-ink/50">
                          {t.common.from} <span className="text-ink">{p.from}</span>
                        </span>
                        <a
                          href={whatsappLink(copy.name)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[11px] font-medium uppercase tracking-[0.18em] text-ink underline-offset-4 hover:underline"
                        >
                          {t.common.whatsapp} →
                        </a>
                      </div>
                    </div>
                  </PaperCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </>
  );
}