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
  titleAccent?: string;
  description: string;
  primaryCta: { label: string; href: string };
  secondaryCta: { label: string; href: string };
  image: {
    src: string;
    alt: string;
  };
  meta: {
    location: string;
    hours: string;
  };
};
