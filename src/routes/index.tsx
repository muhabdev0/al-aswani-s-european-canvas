import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useT } from "@/i18n/LanguageProvider";
import { Section } from "@/components/Section";
import { PaperCard } from "@/components/PaperCard";
import { Cutout } from "@/components/Cutout";
import { whatsappLink } from "@/components/WhatsAppButton";
import heroLandscape from "@/assets/hero-landscape.png";
import lifestylePerson from "@/assets/lifestyle-person.png";
import destAlps from "@/assets/dest-alps.jpg";
import destAmsterdam from "@/assets/dest-amsterdam.jpg";
import destParis from "@/assets/dest-paris.jpg";
import destLakes from "@/assets/dest-lakes.jpg";
import destBlackforest from "@/assets/dest-blackforest.jpg";
import serviceVan from "@/assets/service-van.jpg";
import serviceChauffeur from "@/assets/service-chauffeur.jpg";
import serviceHotel from "@/assets/service-hotel.jpg";
import testimonial1 from "@/assets/testimonial-1.jpg";
import testimonial2 from "@/assets/testimonial-2.jpg";
import testimonial3 from "@/assets/testimonial-3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Al-Aswani — Europe, the slow and elegant way" },
      {
        name: "description",
        content:
          "Refined tourist journeys, transportation, Arabic-speaking chauffeurs and hotel booking across Europe, from our base in the Netherlands.",
      },
      { property: "og:title", content: "Al-Aswani — Europe, the slow and elegant way" },
      {
        property: "og:description",
        content:
          "Refined travel and chauffeur services across Europe, with Arabic-speaking drivers.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <FindTrip />
      <Services />
      <Lifestyle />
      <Promise />
      <Testimonials />
      <Closing />
    </>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const },
};

function Hero() {
  const t = useT();
  return (
    <Section tone="sky" tearBottom="paper" className="min-h-[100svh] overflow-hidden">
      <div className="mx-auto max-w-[1400px] px-6 pt-36 pb-40 md:px-10 md:pt-44 md:pb-56">
        <motion.p
          {...fadeUp}
          className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/60"
        >
          {t.hero.eyebrow}
        </motion.p>
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.08 }}
          className="mt-6 max-w-3xl whitespace-pre-line text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.04] text-ink"
        >
          {t.hero.title}
        </motion.h1>
        <div className="mt-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="max-w-md text-base leading-relaxed text-ink/70"
          >
            {t.hero.lede}
          </motion.p>
          <motion.div
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.24 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Link to="/packages" className="pill-btn">
              <span>{t.hero.cta}</span>
              <Arrow />
            </Link>
            <a
              href={whatsappLink(t.hero.whatsapp)}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn-light"
            >
              <span>{t.hero.whatsapp}</span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* scenic cutout on the torn paper horizon */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        className="pointer-events-none absolute bottom-12 left-1/2 z-10 w-[min(110%,1200px)] -translate-x-1/2 md:bottom-16"
      >
        <img
          src={heroLandscape}
          alt="Stone cottage in a European landscape"
          width={1600}
          height={900}
          className="block w-full"
          style={{ filter: "drop-shadow(0 30px 28px rgba(20,20,40,0.18))" }}
        />
      </motion.div>

      {/* floating tiny postcard */}
      <motion.div
        initial={{ opacity: 0, x: 40, rotate: -8 }}
        animate={{ opacity: 1, x: 0, rotate: -6 }}
        transition={{ duration: 1, delay: 0.4 }}
        className="absolute end-8 top-32 hidden lg:block"
      >
        <PaperCard tilt={-6} className="w-44">
          <img src={destAlps} alt="Alpine road" className="h-28 w-full rounded-sm object-cover" />
          <p className="mt-2 px-1 text-[10px] uppercase tracking-[0.2em] text-ink/60">Swiss Alps</p>
        </PaperCard>
      </motion.div>
    </Section>
  );
}

function FindTrip() {
  const t = useT();
  return (
    <Section tone="paper" tearBottom="sky" className="paper-noise" noise>
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid items-center gap-16 md:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p
              {...fadeUp}
              className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55"
            >
              {t.findTrip.eyebrow}
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="mt-5 whitespace-pre-line text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08]"
            >
              {t.findTrip.title}
            </motion.h2>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="mt-8 max-w-lg text-base leading-relaxed text-ink/70"
            >
              {t.findTrip.body}
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.24 }} className="mt-10">
              <Link to="/packages" className="pill-btn">
                <span>{t.findTrip.cta}</span>
                <Arrow />
              </Link>
            </motion.div>
          </div>

          <div className="relative h-[420px]">
            <motion.div
              initial={{ opacity: 0, y: 20, rotate: 4 }}
              whileInView={{ opacity: 1, y: 0, rotate: 3 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute end-0 top-0 w-[260px]"
            >
              <PaperCard tilt={3}>
                <img src={destAmsterdam} alt="Amsterdam canal" className="h-72 w-full rounded-sm object-cover" />
                <p className="mt-2 px-1 text-[10px] uppercase tracking-[0.22em] text-ink/55">Amsterdam · Netherlands</p>
              </PaperCard>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -8 }}
              whileInView={{ opacity: 1, y: 0, rotate: -5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="absolute start-4 bottom-0 w-[220px]"
            >
              <PaperCard tilt={-5}>
                <img src={destLakes} alt="Lake Como" className="h-56 w-full rounded-sm object-cover" />
                <p className="mt-2 px-1 text-[10px] uppercase tracking-[0.22em] text-ink/55">Lake Como · Italy</p>
              </PaperCard>
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function Services() {
  const t = useT();
  const images = [serviceChauffeur, serviceVan, destParis, serviceHotel];
  const tilts = [-3, 2, -1, 4];
  return (
    <Section tone="sky" tearBottom="paper">
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="max-w-2xl">
          <motion.p {...fadeUp} className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/60">
            {t.services.eyebrow}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08]"
          >
            {t.services.title}
          </motion.h2>
        </div>

        <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
          {t.services.items.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              style={{ transform: `rotate(${tilts[i]}deg)` }}
            >
              <PaperCard className="hover:[box-shadow:0_24px_38px_-22px_rgba(40,30,15,0.55)]">
                <img src={images[i]} alt={s.title} className="h-56 w-full rounded-sm object-cover" />
                <div className="px-1 pt-4">
                  <p className="text-[10px] uppercase tracking-[0.24em] text-ink/45">0{i + 1}</p>
                  <h3 className="mt-1 text-xl">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
                </div>
              </PaperCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Lifestyle() {
  const t = useT();
  return (
    <Section tone="grass" tearTop="paper" tearBottom="paper" className="overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-6 py-32 md:grid-cols-[1fr_1.1fr] md:px-10 md:py-44">
        <div>
          <motion.p {...fadeUp} className="text-[11px] font-medium uppercase tracking-[0.28em] text-paper/70">
            {t.lifestyle.eyebrow}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="mt-5 whitespace-pre-line text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.08] text-paper"
          >
            {t.lifestyle.title}
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.16 }}
            className="mt-8 max-w-md text-base leading-relaxed text-paper/80"
          >
            {t.lifestyle.body}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative h-[420px] md:h-[520px]"
        >
          <Cutout
            src={lifestylePerson}
            alt="A traveller resting on a meadow"
            className="absolute inset-0 h-full w-full object-contain object-bottom"
          />
        </motion.div>
      </div>
    </Section>
  );
}

function Promise() {
  const t = useT();
  return (
    <Section tone="paperDeep" tearBottom="paper" className="paper-noise" noise>
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid items-end gap-12 md:grid-cols-[1.2fr_1fr]">
          <div>
            <motion.p {...fadeUp} className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
              {t.promise.eyebrow}
            </motion.p>
            <motion.h2
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.08 }}
              className="mt-5 whitespace-pre-line text-[clamp(2rem,5vw,4.2rem)] leading-[1.05]"
            >
              {t.promise.title}
            </motion.h2>
          </div>
          <div>
            <motion.p
              {...fadeUp}
              transition={{ ...fadeUp.transition, delay: 0.16 }}
              className="max-w-md text-base leading-relaxed text-ink/70"
            >
              {t.promise.body}
            </motion.p>
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.24 }} className="mt-8">
              <a
                href={whatsappLink(t.promise.cta)}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn"
              >
                <span>{t.promise.cta}</span>
                <Arrow />
              </a>
            </motion.div>
          </div>
        </div>

        {/* small floating postcard cluster */}
        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {[destBlackforest, destAlps, destLakes].map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transform: `rotate(${[-2, 1.5, -1][i]}deg)` }}
            >
              <PaperCard>
                <img src={src} alt="" className="h-72 w-full rounded-sm object-cover" />
              </PaperCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Testimonials() {
  const t = useT();
  const portraits = [testimonial1, testimonial2, testimonial3];
  return (
    <Section tone="paper" tearBottom="ink" className="paper-noise" noise>
      <div className="mx-auto max-w-[1400px] px-6 py-28 md:px-10 md:py-40">
        <div className="max-w-2xl">
          <motion.p {...fadeUp} className="text-[11px] font-medium uppercase tracking-[0.28em] text-ink/55">
            {t.testimonials.eyebrow}
          </motion.p>
          <motion.h2
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.08 }}
            className="mt-5 text-[clamp(2rem,4.5vw,3.6rem)] leading-[1.08]"
          >
            {t.testimonials.title}
          </motion.h2>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {t.testimonials.items.map((q, i) => (
            <motion.div
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transform: `rotate(${[-1.5, 1, -1][i]}deg)` }}
            >
              <PaperCard className="h-full">
                <div className="px-3 pt-3">
                  <div className="flex items-center gap-3">
                    <img
                      src={portraits[i]}
                      alt={q.name}
                      className="h-12 w-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="text-sm font-medium text-ink">{q.name}</p>
                      <p className="text-[11px] uppercase tracking-[0.18em] text-ink/50">
                        {q.city}
                      </p>
                    </div>
                  </div>
                  <p className="mt-5 text-[15px] leading-relaxed text-ink/80">
                    "{q.quote}"
                  </p>
                </div>
              </PaperCard>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

function Closing() {
  const t = useT();
  return (
    <Section tone="ink" className="overflow-hidden">
      <div className="mx-auto grid max-w-[1400px] items-center gap-14 px-6 py-32 md:grid-cols-[1.3fr_1fr] md:px-10 md:py-44">
        <div>
          <motion.h2
            {...fadeUp}
            className="whitespace-pre-line text-[clamp(2.4rem,6vw,5rem)] leading-[1.02] text-paper"
          >
            {t.closing.title}
          </motion.h2>
          <motion.p
            {...fadeUp}
            transition={{ ...fadeUp.transition, delay: 0.1 }}
            className="mt-8 max-w-md text-base leading-relaxed text-paper/70"
          >
            {t.closing.body}
          </motion.p>
          <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.18 }} className="mt-10">
            <a
              href={whatsappLink(t.closing.cta)}
              target="_blank"
              rel="noopener noreferrer"
              className="pill-btn-light"
            >
              <span>{t.closing.cta}</span>
              <Arrow />
            </a>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30, rotate: 4 }}
          whileInView={{ opacity: 1, y: 0, rotate: 2 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="justify-self-center"
        >
          <PaperCard tilt={2} className="w-[320px]">
            <img src={destParis} alt="Paris" className="h-[380px] w-full rounded-sm object-cover" />
            <p className="mt-3 px-2 pb-1 text-[10px] uppercase tracking-[0.24em] text-ink/55">
              Until the next journey
            </p>
          </PaperCard>
        </motion.div>
      </div>
    </Section>
  );
}

function Arrow() {
  return (
    <svg width="14" height="10" viewBox="0 0 14 10" fill="none" aria-hidden="true" className="rtl:rotate-180">
      <path
        d="M1 5h12m0 0L9 1m4 4L9 9"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
