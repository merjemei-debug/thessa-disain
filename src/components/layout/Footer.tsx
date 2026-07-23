import { siteConfig } from "@/content/site";
import Container from "@/components/ui/Container";

export default function Footer() {
  return (
    <footer className="border-t border-soft-grey bg-white py-12">
      <Container className="flex flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-serif text-xl font-light uppercase tracking-[0.15em] text-charcoal">
            {siteConfig.name}
          </p>
          <p className="mt-2 text-[11px] font-light uppercase tracking-[0.2em] text-muted">
            {siteConfig.tagline} · Estonia
          </p>
        </div>

        <div className="flex gap-8 text-[11px] font-medium uppercase tracking-[0.15em] text-muted">
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
      </Container>
    </footer>
  );
}
