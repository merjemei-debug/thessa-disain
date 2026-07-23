export type NavLink = {
  href: string;
  label: string;
};

export type SiteConfig = {
  name: string;
  tagline: string;
  description: string;
  url: string;
  locale: string;
  contact: {
    address: string;
    phone: string;
    email: string;
    hours: {
      weekdays: string;
      saturday: string;
    };
  };
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  features: { icon: string; label: string }[];
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: {
    src: string;
    alt: string;
  };
};

export type Service = {
  title: string;
  icon: string;
  description: string;
  items?: string[];
  href: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
  span?: "wide" | "tall" | "normal";
};

export type Review = {
  quote: string;
  name: string;
  service: string;
  rating: number;
};
