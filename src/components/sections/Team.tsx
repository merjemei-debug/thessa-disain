"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { teamMembers } from "@/content/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Team() {
  return (
    <section id="team" className="bg-beige py-24 sm:py-32">
      <Container>
        <ScrollReveal className="mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Meet Our Team"
            title="Artists of Elegance"
            description="Our specialists bring years of expertise and a shared passion for refined, personalised beauty."
          />
        </ScrollReveal>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {teamMembers.map((member, i) => (
            <ScrollReveal key={member.name} delay={i * 0.1}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="luxury-card overflow-hidden rounded-3xl"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-transparent" />
                </div>
                <div className="p-7 sm:p-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    {member.role}
                  </p>
                  <h3 className="mt-2 font-serif text-2xl font-light text-charcoal">{member.name}</h3>
                  <p className="mt-3 text-sm font-light leading-relaxed text-muted">{member.bio}</p>
                </div>
              </motion.article>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
