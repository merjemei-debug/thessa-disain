"use client";

import { motion } from "framer-motion";
import { services } from "@/content/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Services() {
  return (
    <section id="services" className="bg-white py-24 sm:py-32">
      <Container>
        <ScrollReveal className="mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Our Services"
            title="Curated Beauty Experiences"
            description="Each treatment is thoughtfully designed to elevate your natural beauty with precision and care."
          />
        </ScrollReveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <motion.article
                whileHover={{ y: -4 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="luxury-card group flex h-full flex-col rounded-3xl p-8 sm:p-9"
              >
                <span
                  className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-beige text-lg text-gold transition-colors duration-500 group-hover:bg-gold group-hover:text-white"
                  aria-hidden="true"
                >
                  {service.icon}
                </span>
                <h3 className="font-serif text-2xl font-light text-charcoal">{service.title}</h3>
                <p className="mt-3 flex-1 text-sm font-light leading-relaxed text-muted">
                  {service.description}
                </p>
                <p className="mt-6 text-[11px] font-medium uppercase tracking-[0.2em] text-gold-dark">
                  {service.price}
                </p>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
