"use client";

import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    quote:
      "Thessa Disain on ainus koht, kus tunnen end tõeliselt hoitud. Iga detail on läbimõeldud.",
    name: "Maria S.",
    detail: "Juuksed & näohooldus",
  },
  {
    quote:
      "Minimalistlik interjöör, professionaalne meeskond ja tulemus, mis ületab ootusi.",
    name: "Helena R.",
    detail: "Maniküür",
  },
  {
    quote:
      "Luksuslik kogemus ilma liigse show'ta. Täpselt see, mida otsisin.",
    name: "Kristiina L.",
    detail: "Kulmude hooldus",
  },
];

export default function Testimonials() {
  return (
    <section id="kogemus" className="bg-charcoal py-24 text-white sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <ScrollReveal className="mx-auto mb-20 max-w-2xl text-center">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.35em] text-oak-light">
            Kogemus
          </p>
          <h2 className="font-serif text-4xl font-light sm:text-5xl lg:text-6xl">
            Klientide hääl
          </h2>
        </ScrollReveal>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {testimonials.map((item, i) => (
            <ScrollReveal key={item.name} delay={i * 0.1}>
              <blockquote className="flex h-full flex-col border-t border-oak/40 pt-8">
                <p className="flex-1 font-serif text-xl font-light leading-relaxed text-white/90 sm:text-2xl">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <footer className="mt-8">
                  <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-oak-light">
                    {item.name}
                  </p>
                  <p className="mt-1 text-sm font-light text-white/50">{item.detail}</p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
