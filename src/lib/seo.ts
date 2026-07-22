import type { Metadata } from "next";
import { siteConfig } from "@/content/site";

export function createMetadata(): Metadata {
  const title = `${siteConfig.name} | Premium Ilusalong Eestis`;
  const description = siteConfig.description;

  return {
    metadataBase: new URL(siteConfig.url),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description,
    keywords: [
      "ilusalong",
      "Thessa Disain",
      "juukselõikus",
      "maniküür",
      "näohooldus",
      "Tallinn",
      "Eesti",
      "luksus ilusalong",
    ],
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: siteConfig.url,
      siteName: siteConfig.name,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: siteConfig.url,
    },
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
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "10:00",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "10:00",
        closes: "15:00",
      },
    ],
    priceRange: "€€",
  };
}
