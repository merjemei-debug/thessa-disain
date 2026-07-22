"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <section id="kontakt" className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          <ScrollReveal>
            <div className="space-y-8">
              <div>
                <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-oak">
                  Kontakt
                </p>
                <h2 className="font-serif text-4xl font-light text-charcoal sm:text-5xl">
                  Broneeri
                  <br />
                  oma aeg
                </h2>
              </div>

              <p className="max-w-md text-base font-light leading-relaxed text-muted">
                Võta meiega ühendust telefoni teel või täida broneerimisvorm.
                Vastame tavaliselt ühe tunni jooksul tööpäevadel.
              </p>

              <div className="space-y-6 border-t border-warm-grey pt-8">
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal">
                    Aadress
                  </p>
                  <p className="mt-2 font-light text-muted">Pärnu mnt 28, Tallinn 10141</p>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal">
                    Telefon
                  </p>
                  <a
                    href="tel:+3725559876"
                    className="mt-2 block font-light text-muted transition-colors hover:text-oak-dark"
                  >
                    +372 555 9876
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal">
                    E-post
                  </p>
                  <a
                    href="mailto:info@thessadisain.ee"
                    className="mt-2 block font-light text-muted transition-colors hover:text-oak-dark"
                  >
                    info@thessadisain.ee
                  </a>
                </div>
                <div>
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal">
                    Lahtiolekuajad
                  </p>
                  <p className="mt-2 font-light text-muted">E–R 10:00 – 19:00</p>
                  <p className="font-light text-muted">L 10:00 – 15:00</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <motion.form
              id="broneeri"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="border border-warm-grey bg-white p-8 sm:p-12"
            >
              <h3 className="font-serif text-2xl font-light text-charcoal sm:text-3xl">
                Broneerimisvorm
              </h3>
              <p className="mt-3 text-sm font-light text-muted">
                Täida andmed ja võtame sinuga ühendust kinnitamiseks.
              </p>

              <div className="mt-10 space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal"
                  >
                    Nimi
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Sinu nimi"
                    className="w-full border-b border-warm-grey bg-transparent px-0 py-3 text-sm font-light text-charcoal outline-none transition-colors placeholder:text-warm-grey-dark focus:border-oak"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal"
                  >
                    E-post
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="sinu@email.ee"
                    className="w-full border-b border-warm-grey bg-transparent px-0 py-3 text-sm font-light text-charcoal outline-none transition-colors placeholder:text-warm-grey-dark focus:border-oak"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal"
                  >
                    Teenus
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border-b border-warm-grey bg-transparent px-0 py-3 text-sm font-light text-charcoal outline-none transition-colors focus:border-oak"
                  >
                    <option>Juuksed</option>
                    <option>Küüned</option>
                    <option>Nägu</option>
                    <option>Kulmud</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal"
                  >
                    Sõnum
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Soovitud kuupäev või lisainfo..."
                    className="w-full resize-none border-b border-warm-grey bg-transparent px-0 py-3 text-sm font-light text-charcoal outline-none transition-colors placeholder:text-warm-grey-dark focus:border-oak"
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="mt-4 w-full bg-charcoal py-5 text-[12px] font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-oak"
                >
                  Broneeri aeg
                </motion.button>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
