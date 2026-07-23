"use client";

import Link from "next/link";

type NavLinkProps = {
  href: string;
  label: string;
  light?: boolean;
  onClick?: () => void;
};

export default function NavLink({ href, label, light = false, onClick }: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`nav-link relative py-1 text-[11px] font-medium uppercase tracking-[0.2em] transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold ${
        light
          ? "nav-link-light text-white/80 hover:text-white"
          : "nav-link-dark text-muted hover:text-charcoal"
      }`}
    >
      {label}
    </Link>
  );
}
