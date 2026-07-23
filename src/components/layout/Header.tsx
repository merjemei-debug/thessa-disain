"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroContent, navigationLinks, siteConfig } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";
import { luxuryEase } from "@/lib/motion";
import { useScrollLock } from "@/lib/hooks/use-header";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const transparent = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        transparent
          ? "bg-transparent"
          : "border-b border-soft-grey/60 bg-white/90 shadow-[0_4px_30px_rgba(44,44,44,0.04)] backdrop-blur-xl"
      }`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Liigu põhisisu juurde
      </a>

      <Container
        as="div"
        className={`flex items-center justify-between transition-[padding] duration-700 ${
          scrolled ? "py-4" : "py-5 lg:py-6"
        }`}
      >
        <motion.a
          href="#"
          initial={reducedMotion ? false : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: luxuryEase }}
          className={`font-serif text-lg font-light uppercase tracking-[0.22em] transition-colors duration-500 sm:text-xl ${
            transparent ? "text-white" : "text-charcoal"
          }`}
          aria-label={`${siteConfig.name} avaleht`}
        >
          Thessa
        </motion.a>

        <nav aria-label="Põhinavigatsioon" className="hidden items-center gap-7 xl:gap-9 lg:flex">
          {navigationLinks.map((link, i) => (
            <motion.div
              key={link.href}
              initial={reducedMotion ? false : { opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.06 * i, ease: luxuryEase }}
            >
              <NavLink href={link.href} label={link.label} light={transparent} />
            </motion.div>
          ))}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: luxuryEase }}
          >
            <Button
              href={heroContent.primaryCta.href}
              variant={transparent ? "nav-light" : "nav-dark"}
            >
              {heroContent.primaryCta.label}
            </Button>
          </motion.div>
        </nav>

        <button
          type="button"
          aria-label={menuOpen ? "Sulge menüü" : "Ava menüü"}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span
            className={`absolute block h-px w-5 transition-all duration-500 ${
              menuOpen ? "rotate-45 bg-charcoal" : transparent ? "bg-white" : "bg-charcoal"
            }`}
          />
          <span
            className={`absolute block h-px w-5 transition-all duration-500 ${
              menuOpen ? "-rotate-45 bg-charcoal" : transparent ? "bg-white" : "bg-charcoal"
            }`}
          />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            aria-label="Mobiilinavigatsioon"
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: luxuryEase }}
            className="overflow-hidden border-t border-soft-grey bg-white lg:hidden"
          >
            <Container as="div" className="flex flex-col gap-6 py-10">
              {navigationLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i, duration: 0.4, ease: luxuryEase }}
                >
                  <NavLink href={link.href} label={link.label} onClick={() => setMenuOpen(false)} />
                </motion.div>
              ))}
              <Button
                href={heroContent.primaryCta.href}
                variant="nav-dark"
                className="w-full"
                onClick={() => setMenuOpen(false)}
              >
                {heroContent.primaryCta.label}
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
