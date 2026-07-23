import { footerLinks, siteConfig } from "@/content/site";
import Container from "@/components/ui/Container";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-soft-grey bg-white py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl font-light uppercase tracking-[0.15em] text-charcoal">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-[11px] font-light uppercase tracking-[0.2em] text-muted">
              {siteConfig.tagline} · Tallinn
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-[11px] font-medium uppercase tracking-[0.15em] text-muted sm:gap-8">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-gold-dark"
              >
                {link.label}
              </Link>
            ))}
            <a href="#" className="transition-colors hover:text-gold-dark">
              Instagram
            </a>
            <a href="#" className="transition-colors hover:text-gold-dark">
              Facebook
            </a>
          </div>

          <p className="text-[11px] font-light text-muted">
            © {new Date().getFullYear()} {siteConfig.name}
          </p>
        </div>
      </Container>
    </footer>
  );
}
