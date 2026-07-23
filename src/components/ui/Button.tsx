"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline-light"
  | "outline-dark"
  | "nav-light"
  | "nav-dark";

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: ButtonVariant;
  className?: string;
  external?: boolean;
  onClick?: () => void;
} & Pick<ComponentProps<"a">, "aria-label">;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "cta-shine rounded-full bg-gold px-10 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(196,169,98,0.35)] hover:bg-gold-dark hover:shadow-[0_12px_40px_rgba(196,169,98,0.4)] sm:px-12 sm:py-[1.125rem]",
  secondary:
    "rounded-full border border-white/30 bg-white/10 px-10 py-4 text-[12px] font-medium uppercase tracking-[0.2em] text-white backdrop-blur-md hover:border-white/60 hover:bg-white/20 sm:px-12 sm:py-[1.125rem]",
  "outline-light":
    "rounded-full border border-soft-grey bg-white px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal shadow-[var(--shadow-luxury)] hover:border-gold hover:text-gold-dark",
  "outline-dark":
    "rounded-full bg-charcoal px-8 py-3.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-[var(--shadow-luxury)] hover:bg-gold",
  "nav-light":
    "rounded-full bg-white px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal shadow-[var(--shadow-luxury)] hover:bg-gold hover:text-white",
  "nav-dark":
    "rounded-full bg-gold px-6 py-2.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white shadow-[0_4px_20px_rgba(196,169,98,0.3)] hover:bg-gold-dark",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  external = false,
  onClick,
  "aria-label": ariaLabel,
}: ButtonProps) {
  const reducedMotion = useReducedMotion();
  const classes = `group relative inline-flex min-h-[48px] items-center justify-center transition-all duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${variantStyles[variant]} ${className}`;

  const content = (
    <span className="relative z-10 inline-flex items-center gap-2.5">{children}</span>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={reducedMotion ? undefined : { y: -1 }}
        whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={reducedMotion ? undefined : { y: -1 }}
      whileTap={reducedMotion ? undefined : { scale: 0.98 }}
      className={`inline-flex ${className.includes("w-full") ? "w-full" : ""}`}
    >
      <Link href={href} aria-label={ariaLabel} className={classes} onClick={onClick}>
        {content}
      </Link>
    </motion.div>
  );
}
