import type { HeroContent, NavLink, SiteConfig } from "@/types";

export const siteConfig: SiteConfig = {
  name: "Thessa Disain",
  tagline: "Premium ilusalong · Eestis",
  description:
    "Thessa Disain — luksuslik ilusalong Eestis. Personaalne juuksehooldus, maniküür ja näohooldused minimalistlikus, kõrgetasemelises keskkonnas.",
  url: "https://thessadisain.ee",
  locale: "et_EE",
  contact: {
    address: "Pärnu mnt 28, Tallinn 10141",
    phone: "+372 555 9876",
    email: "info@thessadisain.ee",
    hours: {
      weekdays: "E–R 10:00 – 19:00",
      saturday: "L 10:00 – 15:00",
    },
  },
};

export const navigationLinks: NavLink[] = [
  { href: "#teenused", label: "Teenused" },
  { href: "#filosoofia", label: "Filosoofia" },
  { href: "#kogemus", label: "Kogemus" },
  { href: "#kontakt", label: "Kontakt" },
];

export const heroContent: HeroContent = {
  eyebrow: "Premium ilusalong · Eestis",
  title: "Thessa",
  titleAccent: "Disain",
  description:
    "Minimalistlik ilu, personaalne hoolitsus ja vaikne luksus. Kogemus, mis on loodud just sinule.",
  primaryCta: {
    label: "Broneeri aeg",
    href: "#broneeri",
  },
  secondaryCta: {
    label: "Avasta teenused",
    href: "#teenused",
  },
  image: {
    src: "/images/hero.jpg",
    alt: "Thessa Disain ilusalongi interjöör — minimalistlik ja luksuslik ruum tammepuidu ja sooja halli toonidega",
  },
  meta: {
    location: "Tallinn, Eesti",
    hours: "E–R 10:00 – 19:00",
  },
};
