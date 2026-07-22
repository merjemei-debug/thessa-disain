"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost-light" | "nav-light" | "nav-dark";

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
    "cta-shine bg-oak px-10 py-5 text-[12px] font-medium uppercase tracking-[0.25em] text-white hover:bg-oak-dark sm:px-14 sm:py-[1.375rem] sm:text-[13px]",
  secondary:
    "border border-white/25 bg-white/5 px-8 py-4 text-[11px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm hover:border-white/50 hover:bg-white/10",
  "ghost-light":
    "link-underline px-1 py-2 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 hover:text-white",
  "nav-light":
    "bg-white px-7 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-charcoal hover:bg-oak hover:text-white",
  "nav-dark":
    "bg-charcoal px-7 py-3 text-[11px] font-medium uppercase tracking-[0.2em] text-white hover:bg-oak",
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

  const classes = `group relative inline-flex min-h-12 items-center justify-center transition-colors duration-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-oak-light ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      <span className="relative z-10 inline-flex items-center gap-3">
        {children}
        {variant === "primary" && (
          <svg
            aria-hidden="true"
            className="h-3.5 w-3.5 transition-transform duration-500 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 14 14"
          >
            <path
              d="M1 7h12M8 2l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>
        )}
      </span>
    </>
  );

  if (external) {
    return (
      <motion.a
        href={href}
        aria-label={ariaLabel}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={reducedMotion ? undefined : { scale: 1.01 }}
        whileTap={reducedMotion ? undefined : { scale: 0.99 }}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.div
      whileHover={reducedMotion ? undefined : { scale: variant === "primary" ? 1.01 : 1 }}
      whileTap={reducedMotion ? undefined : { scale: variant === "primary" ? 0.99 : 1 }}
      className="inline-flex"
    >
      <Link href={href} aria-label={ariaLabel} className={classes} onClick={onClick}>
        {content}
      </Link>
    </motion.div>
  );
}
