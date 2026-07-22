import type { Variants } from "framer-motion";

export const luxuryEase = [0.22, 1, 0.36, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 1, delay, ease: luxuryEase },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    transition: { duration: 1.1, delay, ease: "easeOut" },
  }),
};

export const lineExpand: Variants = {
  hidden: { opacity: 0, scaleX: 0 },
  visible: (delay = 0) => ({
    opacity: 1,
    scaleX: 1,
    transition: { duration: 1.2, delay, ease: luxuryEase },
  }),
};

export const blurReveal: Variants = {
  hidden: { opacity: 0, filter: "blur(8px)" },
  visible: (delay = 0) => ({
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1.4, delay, ease: luxuryEase },
  }),
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.35 },
  },
};

export const staggerFast: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.5 },
  },
};
