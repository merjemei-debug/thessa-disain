"use client";

import { reviews } from "@/content/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1 text-gold" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} aria-hidden="true">
          ★
        </span>
      ))}
    </div>
  );
}

export default function Reviews() {
  return (
    <section id="reviews" className="bg-charcoal py-24 sm:py-32">
      <Container>
        <ScrollReveal className="mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Reviews"
            title="What Our Clients Say"
            description="Trusted by those who appreciate understated luxury and exceptional care."
            light
          />
        </ScrollReveal>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {reviews.map((review, i) => (
            <ScrollReveal key={review.name} delay={i * 0.1}>
              <blockquote className="luxury-card flex h-full flex-col rounded-3xl bg-white/5 p-8 backdrop-blur-sm sm:p-10">
                <Stars count={review.rating} />
                <p className="mt-6 flex-1 font-serif text-lg font-light leading-relaxed text-white/90 sm:text-xl">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-8 border-t border-white/10 pt-6">
                  <p className="text-sm font-medium text-white">{review.name}</p>
                  <p className="mt-1 text-[11px] uppercase tracking-[0.15em] text-white/50">
                    {review.service}
                  </p>
                </footer>
              </blockquote>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
