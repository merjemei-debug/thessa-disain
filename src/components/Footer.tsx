export default function Footer() {
  return (
    <footer className="border-t border-warm-grey bg-white py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 sm:flex-row lg:px-10">
        <div className="text-center sm:text-left">
          <p className="font-serif text-xl font-light tracking-[0.15em] uppercase text-charcoal">
            Thessa Disain
          </p>
          <p className="mt-2 text-[11px] font-light uppercase tracking-[0.2em] text-muted">
            Premium ilusalong · Eestis
          </p>
        </div>

        <div className="flex gap-8 text-[11px] font-medium uppercase tracking-[0.18em] text-muted">
          <a href="#" className="transition-colors hover:text-oak-dark">
            Instagram
          </a>
          <a href="#" className="transition-colors hover:text-oak-dark">
            Facebook
          </a>
        </div>

        <p className="text-[11px] font-light tracking-wide text-muted">
          © {new Date().getFullYear()} Thessa Disain
        </p>
      </div>
    </footer>
  );
}
