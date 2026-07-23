import Link from "next/link";
import Container from "@/components/ui/Container";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ScrollReveal";

export default function Pricing() {
  return (
    <section id="hinnakiri" className="border-y border-soft-grey bg-beige py-20 sm:py-24">
      <Container>
        <ScrollReveal>
          <div className="luxury-card mx-auto max-w-3xl rounded-3xl px-8 py-12 text-center sm:px-12 sm:py-14">
            <SectionHeading
              eyebrow="Hinnakiri"
              title="Personaalsed hinnad"
              description="Teenuse hind sõltub valitud protseduurist ja kestusest. Täpse hinnapakkumise saamiseks võtke meiega ühendust või broneerige aeg."
            />
            <Link
              href="#kontakt"
              className="mt-8 inline-flex min-h-[48px] items-center justify-center rounded-full bg-gold px-10 py-3.5 text-[11px] font-medium uppercase tracking-[0.2em] text-white shadow-[0_8px_30px_rgba(196,169,98,0.3)] transition-all duration-500 hover:bg-gold-dark"
            >
              Küsi hinnainfot
            </Link>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
