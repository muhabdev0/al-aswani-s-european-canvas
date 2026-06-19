import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageProvider";
import { Section } from "@/components/Section";
import { PaperCard } from "@/components/PaperCard";
import destAmsterdam from "@/assets/dest-amsterdam.jpg";
import serviceChauffeur from "@/assets/service-chauffeur.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Al-Aswani" },
      {
        name: "description",
        content:
          "From our base in the Netherlands, Al-Aswani has spent years quietly composing refined European journeys for Arab travellers.",
      },
      { property: "og:title", content: "About — Al-Aswani" },
      {
        property: "og:description",
        content: "Trust, taste, ease — the principles behind Al-Aswani.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const t = useT();
  return (
    <>
      <Section tone="sky" tearBottom="paper" className="overflow-hidden">
        <div className="mx-auto grid max-w-[1300px] items-end gap-12 px-6 pt-44 pb-32 md:grid-cols-[1.3fr_1fr] md:px-10">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/60"
            >
              {t.nav.about}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="mt-5 text-[clamp(2.4rem,5.5vw,4.6rem)] leading-[1.05]"
            >
              {t.pages.about.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="mt-8 max-w-xl text-base leading-relaxed text-ink/70"
            >
              {t.pages.about.lede}
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 4 }}
            animate={{ opacity: 1, y: 0, rotate: 3 }}
            transition={{ duration: 0.9 }}
            className="justify-self-end"
          >
            <PaperCard tilt={3} className="w-[280px]">
              <img src={destAmsterdam} alt="Amsterdam" className="h-72 w-full rounded-sm object-cover" />
              <p className="mt-2 px-1 text-[10px] uppercase tracking-[0.24em] text-ink/55">
                Our home · Netherlands
              </p>
            </PaperCard>
          </motion.div>
        </div>
      </Section>

      <Section tone="paper" tearBottom="grass" className="paper-noise" noise>
        <div className="mx-auto max-w-[1100px] px-6 py-24 md:px-10 md:py-32">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1fr]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-lg leading-relaxed text-ink/80"
            >
              {t.pages.about.body1}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-lg leading-relaxed text-ink/80"
            >
              {t.pages.about.body2}
            </motion.p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-3">
            {t.pages.about.values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="border-t border-ink/15 pt-6"
              >
                <p className="text-[10px] uppercase tracking-[0.28em] text-ink/45">0{i + 1}</p>
                <h3 className="mt-3 text-2xl">{v.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink/70">{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      <Section tone="grass" tearBottom="ink" className="overflow-hidden">
        <div className="mx-auto grid max-w-[1200px] items-center gap-10 px-6 py-28 md:grid-cols-[1fr_1fr] md:px-10 md:py-36">
          <PaperCard tilt={-2} className="w-full max-w-[440px]">
            <img src={serviceChauffeur} alt="An Al-Aswani chauffeur" className="h-80 w-full rounded-sm object-cover" />
          </PaperCard>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-paper/70">
              {t.promise.eyebrow}
            </p>
            <h2 className="mt-4 whitespace-pre-line text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.08] text-paper">
              {t.promise.title}
            </h2>
            <p className="mt-6 max-w-md text-paper/80 leading-relaxed">{t.promise.body}</p>
          </div>
        </div>
      </Section>
    </>
  );
}