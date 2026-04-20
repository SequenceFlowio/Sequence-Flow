import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const ERCTA = () => {
  return (
    <section className="bg-background-3 py-[80px] dark:bg-background-7 md:py-[120px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="mx-auto max-w-[640px] text-center">
            <span className="badge badge-green mb-5 inline-block">Klaar om te starten?</span>
            <h2 className="mb-4">Klaar om uw inbox te automatiseren?</h2>
            <p className="mb-8 text-secondary/60 dark:text-accent/60">
              Sluit u aan bij 40+ MKB-bedrijven die hun e-mailsupport al hebben getransformeerd. Gratis proberen, geen creditcard nodig.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Link href="/contact" className="btn btn-md btn-secondary normal-case before:content-none">
                Start 14 dagen gratis
              </Link>
              <Link
                href="#how-it-works"
                className="text-sm font-medium text-secondary/60 underline-offset-4 hover:underline dark:text-accent/60"
              >
                Bekijk hoe het werkt
              </Link>
            </div>
            <p className="mt-4 text-xs text-secondary/40">Gemiddeld actief in 2 minuten · Geen technische kennis nodig</p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ERCTA.displayName = 'ERCTA';
export default ERCTA;
