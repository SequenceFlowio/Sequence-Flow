import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const steps = [
  {
    n: '01',
    emoji: '📧',
    title: 'Koppel uw Gmail',
    desc: 'Verbind uw inbox via OAuth in één klik. Geen technische setup, geen API-sleutels — gewoon inloggen en klaar.',
  },
  {
    n: '02',
    emoji: '📚',
    title: 'Train uw kennisbank',
    desc: 'Upload uw veelgestelde vragen, retourbeleid en productinformatie. De AI gebruikt dit als context voor elk antwoord.',
  },
  {
    n: '03',
    emoji: '✅',
    title: 'AI beantwoordt, u controleert',
    desc: 'Elke inkomende mail krijgt automatisch een concept. U keurt goed, past aan of wijst af — u blijft altijd in controle.',
  },
];

const ERHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background-3 py-[80px] dark:bg-background-7 md:py-[120px]">
      <div className="main-container">
        {/* heading */}
        <div className="mb-16 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4 inline-block">Hoe het werkt</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[540px]">Werkend in 3 stappen. Geen technische kennis nodig.</h2>
          </RevealAnimation>
        </div>

        {/* steps */}
        <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-3">
          {/* connector line — desktop only */}
          <div
            className="absolute top-[52px] left-[calc(16.67%+32px)] right-[calc(16.67%+32px)] hidden h-px border-t-2 border-dashed border-[#C7F56F]/30 lg:block"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <RevealAnimation key={i} delay={0.2 + i * 0.15}>
              <div className="flex flex-col items-center text-center">
                {/* icon circle */}
                <div className="relative z-10 mb-5 flex size-[104px] items-center justify-center rounded-full bg-[#C7F56F] text-4xl shadow-[0_0_0_8px_rgba(199,245,111,0.12)]">
                  {step.emoji}
                </div>
                <span className="mb-2 inline-block rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-white dark:bg-background-5">
                  Stap {step.n}
                </span>
                <h3 className="text-heading-5 mb-2">{step.title}</h3>
                <p className="mx-auto max-w-[260px] text-sm leading-relaxed text-secondary/60 dark:text-accent/60">
                  {step.desc}
                </p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* CTA */}
        <RevealAnimation delay={0.65}>
          <div className="mt-14 text-center">
            <Link href="/contact" className="btn btn-md btn-secondary normal-case before:content-none">
              Start 14 dagen gratis
            </Link>
            <p className="mt-3 text-xs text-secondary/40">Gemiddeld 2 minuten insteltijd</p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ERHowItWorks.displayName = 'ERHowItWorks';
export default ERHowItWorks;
