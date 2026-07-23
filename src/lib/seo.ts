import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function createMetadata(): Metadata {
  const title = `${siteConfig.name} | ${siteConfig.tagline}`;
  const description = siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: { default: title, template: `%s | ${siteConfig.name}` },
    description,
    keywords: [
      "luxury beauty salon",
      "Thessa Disain",
      "hair salon",
      "manicure",
      "skincare",
      "Tallinn",
      "Estonia",
    ],
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
      images: [{ url: "/images/hero.jpg", width: 1920, height: 1080, alt: siteConfig.tagline }],
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: true, follow: true },
    alternates: { canonical: siteConfig.url },
  };
}

export function createLocalBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Pärnu mnt 28",
      addressLocality: "Tallinn",
      postalCode: "10141",
      addressCountry: "EE",
    },
    priceRange: "€€€",
  };
}
