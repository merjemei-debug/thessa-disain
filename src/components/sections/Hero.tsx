"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { heroContent } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import Eyebrow from "@/components/ui/Eyebrow";
import {
  blurReveal,
  fadeUp,
  lineExpand,
  staggerContainer,
} from "@/lib/motion";

const HERO_BLUR_DATA_URL =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k=";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const reducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", reducedMotion ? "0%" : "18%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.55], ["0%", reducedMotion ? "0%" : "8%"]);

  return (
    <section
      ref={sectionRef}
      aria-labelledby="hero-heading"
      className="relative min-h-[100dvh] overflow-hidden"
    >
      {/* Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 will-change-transform"
        aria-hidden="true"
      >
        <motion.div
          initial={reducedMotion ? false : { scale: 1.12 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0"
        >
          <Image
            src={heroContent.image.src}
            alt=""
            fill
            priority
            placeholder="blur"
            blurDataURL={HERO_BLUR_DATA_URL}
            sizes="100vw"
            className="scale-110 object-cover blur-[3px] brightness-[0.72] saturate-[0.85]"
          />
        </motion.div>

        <div className="absolute inset-0 bg-charcoal/62" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(42,42,42,0.45)_100%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/50 via-charcoal/25 to-charcoal/80" />
        <div className="hero-grain pointer-events-none absolute inset-0" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity: contentOpacity, y: contentY }}
        className="relative z-10 flex min-h-[100dvh] flex-col"
      >
        <Container className="flex flex-1 flex-col justify-center pb-28 pt-32 sm:pb-32 sm:pt-36 lg:pb-40 lg:pt-44">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="max-w-3xl text-center lg:text-left"
          >
            <motion.div custom={0} variants={fadeUp}>
              <Eyebrow light>{heroContent.eyebrow}</Eyebrow>
            </motion.div>

            <motion.h1
              id="hero-heading"
              custom={0.12}
              variants={blurReveal}
              className="mt-8 font-serif text-[clamp(3rem,8vw,6.5rem)] font-light leading-[0.95] tracking-[0.02em] text-white"
            >
              {heroContent.title}
              {heroContent.titleAccent && (
                <>
                  <br />
                  <span className="text-white/88">{heroContent.titleAccent}</span>
                </>
              )}
            </motion.h1>

            <motion.div
              custom={0.24}
              variants={lineExpand}
              className="mx-auto mt-10 h-px w-20 origin-left bg-oak lg:mx-0"
              aria-hidden="true"
            />

            <motion.p
              custom={0.32}
              variants={fadeUp}
              className="mx-auto mt-10 max-w-xl text-base font-light leading-[1.8] tracking-[0.01em] text-white/72 sm:text-lg lg:mx-0"
            >
              {heroContent.description}
            </motion.p>

            <motion.div
              custom={0.48}
              variants={fadeUp}
              className="mt-12 flex flex-col items-center gap-5 sm:flex-row sm:gap-6 lg:items-start"
            >
              <Button href={heroContent.primaryCta.href} variant="primary">
                {heroContent.primaryCta.label}
              </Button>
              <Button href={heroContent.secondaryCta.href} variant="ghost-light">
                {heroContent.secondaryCta.label}
              </Button>
            </motion.div>
          </motion.div>
        </Container>

        {/* Bottom meta bar */}
        <Container className="border-t border-white/10 pb-8 pt-6 sm:pb-10">
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-center justify-between gap-8 sm:flex-row"
          >
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:gap-12 sm:text-left">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                  Asukoht
                </p>
                <p className="mt-2 text-sm font-light tracking-wide text-white/80">
                  {heroContent.meta.location}
                </p>
              </div>
              <div className="hidden h-8 w-px bg-white/15 sm:block" aria-hidden="true" />
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-white/45">
                  Lahtiolekuajad
                </p>
                <p className="mt-2 text-sm font-light tracking-wide text-white/80">
                  {heroContent.meta.hours}
                </p>
              </div>
            </div>

            <a
              href="#teenused"
              className="group flex flex-col items-center gap-3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oak-light"
              aria-label="Kerige alla, et avastada teenuseid"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-white/45 transition-colors group-hover:text-white/70">
                Avasta
              </span>
              <motion.span
                animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 2.4, ease: "easeInOut" }}
                className="block h-12 w-px bg-gradient-to-b from-oak-light via-oak/60 to-transparent"
                aria-hidden="true"
              />
            </a>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
