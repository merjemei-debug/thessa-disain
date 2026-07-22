import type { ReactNode } from "react";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
  light?: boolean;
};

export default function Eyebrow({ children, className = "", light = false }: EyebrowProps) {
  return (
    <p
      className={`inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.35em] ${
        light ? "text-oak-light" : "text-oak"
      } ${className}`}
    >
      <span
        className={`h-px w-8 ${light ? "bg-oak-light/80" : "bg-oak"}`}
        aria-hidden="true"
      />
      {children}
    </p>
  );
}
