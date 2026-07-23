"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Contact() {
  return (
    <section id="contact" className="bg-beige py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <ScrollReveal>
            <SectionHeading
              eyebrow="Contact"
              title="Book Your Experience"
              description="Reach out to schedule your appointment. We respond within one hour during business hours."
              align="left"
            />

            <div className="mt-10 space-y-6">
              {[
                { label: "Address", value: siteConfig.contact.address },
                { label: "Phone", value: siteConfig.contact.phone, href: `tel:${siteConfig.contact.phone.replace(/\s/g, "")}` },
                { label: "Email", value: siteConfig.contact.email, href: `mailto:${siteConfig.contact.email}` },
                { label: "Hours", value: `${siteConfig.contact.hours.weekdays}\n${siteConfig.contact.hours.saturday}` },
              ].map((item) => (
                <div key={item.label} className="luxury-card rounded-2xl px-6 py-5">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-gold">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="mt-2 block text-sm font-light text-charcoal-light transition-colors hover:text-gold-dark"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="mt-2 whitespace-pre-line text-sm font-light text-charcoal-light">
                      {item.value}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <motion.form
              className="luxury-card rounded-3xl p-8 sm:p-10"
              onSubmit={(e) => e.preventDefault()}
            >
              <h3 className="font-serif text-2xl font-light text-charcoal">Request an Appointment</h3>
              <p className="mt-2 text-sm font-light text-muted">
                Fill in your details and we&apos;ll confirm your booking shortly.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  { id: "name", label: "Full Name", type: "text", placeholder: "Your name" },
                  { id: "email", label: "Email", type: "email", placeholder: "you@email.com" },
                ].map((field) => (
                  <div key={field.id}>
                    <label
                      htmlFor={field.id}
                      className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal"
                    >
                      {field.label}
                    </label>
                    <input
                      id={field.id}
                      name={field.id}
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      className="w-full rounded-2xl border border-soft-grey bg-white px-4 py-3.5 text-sm font-light text-charcoal outline-none transition-all duration-300 placeholder:text-soft-grey-dark focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,169,98,0.15)]"
                    />
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="service"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal"
                  >
                    Service
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full rounded-2xl border border-soft-grey bg-white px-4 py-3.5 text-sm font-light text-charcoal outline-none transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,169,98,0.15)]"
                  >
                    <option>Hair Design</option>
                    <option>Nail Atelier</option>
                    <option>Skin Rituals</option>
                    <option>Brow & Lash</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    placeholder="Preferred date or notes..."
                    className="w-full resize-none rounded-2xl border border-soft-grey bg-white px-4 py-3.5 text-sm font-light text-charcoal outline-none transition-all duration-300 placeholder:text-soft-grey-dark focus:border-gold focus:shadow-[0_0_0_3px_rgba(196,169,98,0.15)]"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 w-full rounded-full bg-charcoal py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-[var(--shadow-luxury)] transition-all duration-500 hover:bg-gold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
                >
                  Book Appointment
                </button>
              </div>
            </motion.form>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
