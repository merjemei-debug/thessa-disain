"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "@/content/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  return (
    <section id="teenused" className="bg-white py-24 sm:py-32">
      <Container>
        <ScrollReveal className="mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Teenused"
            title="Personaalsed iluteenused"
            description="Vali endale sobiv kategooria — iga protseduur on loodud sinu vajaduste ja stiili järgi."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.07}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="luxury-card group flex h-full flex-col rounded-3xl p-8 sm:p-9"
              >
                <span
                  className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-beige text-2xl shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-500 group-hover:bg-gold group-hover:shadow-[0_8px_24px_rgba(196,169,98,0.25)]"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>

                <h3 className="font-serif text-2xl font-light text-charcoal">{service.title}</h3>

                <p className="mt-4 flex-1 text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>

                <Link
                  href={service.href}
                  className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full border border-soft-grey bg-white px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal shadow-[var(--shadow-luxury)] transition-all duration-500 hover:border-gold hover:text-gold-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Vaata lähemalt
                </Link>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
