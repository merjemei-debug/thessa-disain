"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { galleryImages } from "@/content/site";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

const spanClasses: Record<string, string> = {
  wide: "sm:col-span-2 sm:row-span-1",
  tall: "sm:row-span-2",
  normal: "",
};

export default function Gallery() {
  return (
    <section id="gallery" className="bg-white py-24 sm:py-32">
      <Container>
        <ScrollReveal className="mb-16 sm:mb-20">
          <SectionHeading
            eyebrow="Gallery"
            title="A Glimpse Inside"
            description="Step into our world of calm luxury — where every detail is designed for your comfort."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 sm:grid-rows-2 sm:gap-5">
          {galleryImages.map((image, i) => (
            <ScrollReveal
              key={image.src + i}
              delay={i * 0.06}
              className={`${spanClasses[image.span ?? "normal"]}`}
            >
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className={`luxury-card relative overflow-hidden rounded-3xl ${
                  image.span === "tall" ? "sm:min-h-[420px]" : "aspect-[4/3] sm:aspect-auto sm:min-h-[200px]"
                } ${image.span === "wide" ? "sm:min-h-[260px]" : ""}`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-charcoal/0 transition-colors duration-500 hover:bg-charcoal/10" />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
