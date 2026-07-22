"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ScrollReveal from "@/components/ScrollReveal";

const pillars = [
  "Personaalne konsultatsioon igal külastusel",
  "Premium ja looduslikud tooted",
  "Vaikne, minimalistlik interjöör",
  "Sertifitseeritud spetsialistid",
];

export default function About() {
  return (
    <section id="filosoofia" className="bg-warm-grey/40 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:gap-24 lg:px-10">
        <ScrollReveal>
          <div className="relative aspect-[4/5] overflow-hidden">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative h-full w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&q=85"
                alt="Thessa Disain stilist"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 hidden h-32 w-32 border border-oak/30 bg-oak/10 sm:block" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.15}>
          <div className="space-y-8">
            <div>
              <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-oak">
                Filosoofia
              </p>
              <h2 className="font-serif text-4xl font-light leading-tight text-charcoal sm:text-5xl">
                Ilu, mis tuleb
                <br />
                vaikusest
              </h2>
            </div>

            <p className="text-base font-light leading-relaxed text-muted">
              Thessa Disain on rohkem kui ilusalong — see on ruum, kus aeg aeglustub.
              Usume, et tõeline luksus peitub lihtsuses, kvaliteedis ja tähelepanelikus
              hoolitsuses iga kliendi ees.
            </p>

            <p className="text-base font-light leading-relaxed text-muted">
              Meie interjöör on inspireeritud looduslikust tammepuidust, soojast
              hallist ja puhtast valgest — keskkond, mis kutsub sind end tundma
              erilisena.
            </p>

            <ul className="space-y-4 border-t border-warm-grey-dark/50 pt-8">
              {pillars.map((item, i) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * i, duration: 0.6 }}
                  className="flex items-start gap-4 text-sm font-light text-charcoal-light"
                >
                  <span className="mt-2 block h-px w-6 shrink-0 bg-oak" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
