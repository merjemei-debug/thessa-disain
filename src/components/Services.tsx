"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const services = [
  {
    title: "Juuksed",
    description: "Lõikus, värvimine ja hooldus, mis rõhutab sinu loomulikku ilu.",
    price: "Alates 55 €",
  },
  {
    title: "Küüned",
    description: "Maniküür ja pediküür premium toodetega, viimistletud täpsuseni.",
    price: "Alates 40 €",
  },
  {
    title: "Nägu",
    description: "Sügavhooldused ja niisutavad protseduurid siledaks, säravaks nahaks.",
    price: "Alates 65 €",
  },
  {
    title: "Kulmud",
    description: "Modelleerimine, värvimine ja lamineerimine harmoonilise ilmega.",
    price: "Alates 30 €",
  },
];

export default function Services() {
  return (
    <section id="teenused" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-oak">
            Teenused
          </p>
          <h2 className="font-serif text-4xl font-light text-charcoal sm:text-5xl lg:text-6xl">
            Hoolitsus igale detailile
          </h2>
          <p className="mt-6 text-base font-light leading-relaxed text-muted">
            Iga protseduur on loodud personaalsete vajaduste järgi — vaikne,
            tähelepanelik ja kõrgetasemeline.
          </p>
        </ScrollReveal>

        <div className="grid gap-px bg-warm-grey sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ backgroundColor: "#fafaf8" }}
                transition={{ duration: 0.4 }}
                className="group flex h-full flex-col bg-white p-8 sm:p-10 lg:p-12"
              >
                <span className="mb-8 block h-px w-8 bg-oak transition-all duration-500 group-hover:w-16" />
                <h3 className="font-serif text-2xl font-light text-charcoal sm:text-3xl">
                  {service.title}
                </h3>
                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>
                <p className="mt-8 text-[11px] font-medium uppercase tracking-[0.2em] text-oak-dark">
                  {service.price}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
