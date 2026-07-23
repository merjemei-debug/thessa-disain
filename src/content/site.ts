import type {
  GalleryImage,
  HeroContent,
  NavLink,
  Review,
  Service,
  SiteConfig,
  TeamMember,
} from "@/types";

export const siteConfig: SiteConfig = {
  name: "Thessa Disain",
  tagline: "Luxury Beauty Salon",
  description:
    "Thessa Disain is a luxury beauty salon in Estonia offering bespoke hair, nail, and skincare treatments in a serene, minimalist setting.",
  url: "https://thessadisain.ee",
  locale: "en_EE",
  contact: {
    address: "Pärnu mnt 28, Tallinn 10141, Estonia",
    phone: "+372 555 9876",
    email: "info@thessadisain.ee",
    hours: {
      weekdays: "Mon – Fri 10:00 – 19:00",
      saturday: "Sat 10:00 – 15:00",
    },
  },
};

export const navigationLinks: NavLink[] = [
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#contact", label: "Contact" },
];

export const heroContent: HeroContent = {
  title: "THESSA DISAIN",
  subtitle: "Luxury Beauty Salon",
  primaryCta: {
    label: "Book Appointment",
    href: "#contact",
  },
  secondaryCta: {
    label: "Explore Services",
    href: "#services",
  },
  image: {
    src: "/images/hero.jpg",
    alt: "Thessa Disain luxury beauty salon interior with warm lighting and elegant minimalist design",
  },
};

export const services: Service[] = [
  {
    title: "Hair Design",
    description:
      "Precision cuts, bespoke colour, and restorative treatments tailored to your unique style.",
    price: "From €55",
    icon: "✦",
  },
  {
    title: "Nail Atelier",
    description:
      "Manicure, pedicure, and gel artistry using premium products in a tranquil setting.",
    price: "From €40",
    icon: "◈",
  },
  {
    title: "Skin Rituals",
    description:
      "Deep cleansing, hydration, and anti-ageing facials for a luminous, refined complexion.",
    price: "From €65",
    icon: "◇",
  },
  {
    title: "Brow & Lash",
    description:
      "Sculpting, tinting, and lamination to frame your features with natural elegance.",
    price: "From €30",
    icon: "○",
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: "Thessa K.",
    role: "Founder & Lead Stylist",
    bio: "Over 15 years crafting signature looks with an eye for timeless, modern beauty.",
    image: "/images/team-1.jpg",
  },
  {
    name: "Liisa M.",
    role: "Senior Colourist",
    bio: "Specialist in balayage and dimensional colour with a passion for natural movement.",
    image: "/images/team-2.jpg",
  },
  {
    name: "Anna R.",
    role: "Skin & Nail Specialist",
    bio: "Dedicated to detail-led care, creating flawless results with a gentle touch.",
    image: "/images/gallery-1.jpg",
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/hero.jpg",
    alt: "Salon interior with warm beige tones and soft natural light",
    span: "wide",
  },
  {
    src: "/images/gallery-1.jpg",
    alt: "Stylist performing a precision haircut",
    span: "tall",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Luxury manicure station with gold accents",
    span: "normal",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Skincare treatment in a serene spa environment",
    span: "normal",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Elegant nail art detail",
    span: "wide",
  },
];

export const reviews: Review[] = [
  {
    quote:
      "An absolute sanctuary. Every visit feels like a private retreat — the attention to detail is unmatched.",
    name: "Sophie L.",
    service: "Hair & Colour",
    rating: 5,
  },
  {
    quote:
      "The most refined salon experience I've had in Tallinn. Understated luxury at its finest.",
    name: "Elena V.",
    service: "Skin Ritual",
    rating: 5,
  },
  {
    quote:
      "Impeccable service, beautiful space, and results that always exceed expectations.",
    name: "Maria T.",
    service: "Nail Atelier",
    rating: 5,
  },
];
