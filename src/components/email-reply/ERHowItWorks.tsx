import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';
import type { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';

interface StepItem {
  n: string;
  title: string;
  desc: string;
  visual: string;
  icon: ReactNode;
}

const steps: StepItem[] = [
  {
    n: '01',
    title: 'Koppel uw Gmail',
    desc: 'Verbind uw inbox via OAuth in een paar klikken. Geen technische setup of API-sleutels nodig.',
    visual: 'Placeholder: Gmail connect flow',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <rect x="4" y="6" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="m5 8 7 5 7-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Train uw kennisbank',
    desc: 'Upload FAQ, beleid en productdetails. Zo schrijft de AI antwoorden die passen bij uw merk en processen.',
    visual: 'Placeholder: Knowledge base index',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <path d="M6 5h12v14H6z" stroke="currentColor" strokeWidth="1.8" />
        <path d="M9 9h6M9 12h6M9 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    n: '03',
    title: 'AI beantwoordt, u controleert',
    desc: 'Elke mail krijgt automatisch een concept. U keurt goed, past aan of wijst af voordat er iets uitgaat.',
    visual: 'Placeholder: Approval dashboard',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="m8.5 12 2.3 2.3L15.5 9.6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const processRail = [
  'Nieuwe e-mail binnen',
  'Intentie + categorie detectie',
  'AI-concept met juiste tone of voice',
  'Menselijke review & goedkeuring',
  'Verzonden + gelogd in CRM',
];

const ERHowItWorks = () => {
  return (
    <section id="how-it-works" className="bg-background-3 py-[80px] dark:bg-background-7 md:py-[120px]">
      <div className="main-container">
        <div className="mb-16 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4 inline-block">Hoe het werkt</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[620px]">Binnen enkele minuten live, met een flow die schaalbaar blijft</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-3 max-w-[560px] text-secondary/60 dark:text-accent/60">
              Geen losse scripts of ingewikkelde implementatie. U activeert Email Reply en volgt een duidelijke
              3-stappen onboarding.
            </p>
          </RevealAnimation>
        </div>

        <div className="relative grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-7">
          <div className="pointer-events-none absolute top-[68px] left-[17%] right-[17%] hidden h-[3px] rounded-full bg-gradient-to-r from-[#C7F56F]/15 via-[#C7F56F]/60 to-[#C7F56F]/15 lg:block" />
          <div
            className="pointer-events-none absolute top-[64px] left-[17%] hidden size-3 rounded-full bg-[#C7F56F] lg:block"
            style={{ animation: 'erFlowDot 6.5s linear infinite' }}
          />

          {steps.map((step, i) => (
            <RevealAnimation
              key={step.n}
              delay={0.08 + i * 0.14}
              direction="up"
              offset={26}
              start="top 88%"
              end="bottom 35%"
              toggleActions="play none none reset">
              <article className="relative rounded-[22px] border border-gray-200 bg-white p-5 shadow-[0_10px_34px_rgba(4,25,36,0.06)] sm:p-6">
                <div className="mb-4 flex items-center justify-between">
                  <span className="inline-flex items-center rounded-full bg-secondary px-3 py-0.5 text-xs font-semibold text-white dark:bg-background-5">
                    Stap {step.n}
                  </span>
                  <span className="flex size-10 items-center justify-center rounded-xl bg-[#C7F56F] text-secondary">
                    {step.icon}
                  </span>
                </div>

                <div className="mb-4 aspect-[16/10] rounded-xl border border-gray-200 bg-[linear-gradient(135deg,rgba(247,250,252,1),rgba(233,241,245,0.9))] p-3">
                  <div className="relative flex h-full items-end rounded-lg border border-dashed border-gray-300 bg-white/70 p-3">
                    <div className="absolute top-3 left-3 h-2.5 w-16 rounded-full bg-gray-200" />
                    <div className="absolute top-7 left-3 h-2.5 w-10 rounded-full bg-gray-200" />
                    <span className="text-[11px] font-medium tracking-wide text-secondary/50 uppercase">{step.visual}</span>
                  </div>
                </div>

                <h3 className="text-heading-5 mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-secondary/60 dark:text-accent/60">{step.desc}</p>
              </article>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.58}>
          <div className="relative mt-12 overflow-hidden rounded-2xl border border-gray-200 bg-white p-4 sm:p-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent" />

            <Marquee autoFill pauseOnHover speed={38}>
              <div className="flex items-center gap-3 pr-3">
                {processRail.map((item) => (
                  <div key={item} className="inline-flex items-center gap-3 rounded-full border border-gray-200 bg-background-3 px-4 py-2 text-xs font-semibold text-secondary">
                    <span className="inline-block size-2 rounded-full bg-[#C7F56F]" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.66}>
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
