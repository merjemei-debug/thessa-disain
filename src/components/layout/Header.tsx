"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroContent, navigationLinks, siteConfig } from "@/content/site";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import NavLink from "@/components/ui/NavLink";
import { luxuryEase } from "@/lib/motion";
import { useHeaderScroll, useScrollLock } from "@/lib/hooks/use-header";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const reducedMotion = useReducedMotion();

  useHeaderScroll();
  useScrollLock(menuOpen);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const transparent = !scrolled && !menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,box-shadow,padding] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        transparent
          ? "border-b border-transparent bg-transparent"
          : "border-b border-warm-grey/50 bg-white/92 shadow-[0_1px_0_rgba(42,42,42,0.04)] backdrop-blur-xl"
      }`}
    >
      <a
        href="#sisu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-4 focus:z-[60] focus:bg-charcoal focus:px-4 focus:py-2 focus:text-sm focus:text-white"
      >
        Liigu põhisisu juurde
      </a>

      <Container
        as="div"
        className={`flex items-center justify-between transition-[padding] duration-700 ${
          scrolled ? "py-4" : "py-6 lg:py-7"
        }`}
      >
        <motion.a
          href="#"
          initial={reducedMotion ? false : { opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: luxuryEase }}
          className={`font-serif text-[1.35rem] font-light tracking-[0.18em] uppercase transition-colors duration-500 lg:text-2xl ${
            transparent ? "text-white" : "text-charcoal"
          }`}
          aria-label={`${siteConfig.name} avaleht`}
        >
          Thessa
          <span className={`hidden sm:inline ${transparent ? "text-white/60" : "text-muted"}`}>
            {" "}
            Disain
          </span>
        </motion.a>

        <nav
          aria-label="Põhinavigatsioon"
          className="hidden items-center gap-10 lg:flex"
        >
          {navigationLinks.map((link, index) => (
            <motion.div
              key={link.href}
              initial={reducedMotion ? false : { opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.08 * index, ease: luxuryEase }}
            >
              <NavLink href={link.href} label={link.label} light={transparent} />
            </motion.div>
          ))}
          <motion.div
            initial={reducedMotion ? false : { opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: luxuryEase }}
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
          aria-controls="mobile-navigation"
          className="relative z-10 flex h-11 w-11 items-center justify-center lg:hidden"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">{menuOpen ? "Sulge menüü" : "Ava menüü"}</span>
          <span
            className={`absolute block h-px w-6 transition-all duration-500 ${
              menuOpen
                ? "rotate-45 bg-charcoal"
                : transparent
                  ? "bg-white"
                  : "bg-charcoal"
            }`}
          />
          <span
            className={`absolute block h-px w-6 transition-all duration-500 ${
              menuOpen
                ? "-rotate-45 bg-charcoal"
                : transparent
                  ? "bg-white"
                  : "bg-charcoal"
            }`}
          />
        </button>
      </Container>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-navigation"
            aria-label="Mobiilinavigatsioon"
            initial={reducedMotion ? false : { opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: luxuryEase }}
            className="overflow-hidden border-t border-warm-grey bg-white lg:hidden"
          >
            <Container as="div" className="flex flex-col gap-7 py-10">
              {navigationLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * index, duration: 0.5, ease: luxuryEase }}
                >
                  <NavLink
                    href={link.href}
                    label={link.label}
                    onClick={() => setMenuOpen(false)}
                  />
                </motion.div>
              ))}
              <motion.div
                initial={reducedMotion ? false : { opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.25, duration: 0.5, ease: luxuryEase }}
              >
                <Button
                  href={heroContent.primaryCta.href}
                  variant="nav-dark"
                  className="w-full"
                  onClick={() => setMenuOpen(false)}
                >
                  {heroContent.primaryCta.label}
                </Button>
              </motion.div>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
