'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import CGStepCard, { StepData } from '@/components/content-gen/CGStepCard';
import { cn } from '@/utils/cn';
import stepImage554 from '@public/images/ns-img-554.png';
import stepImage555 from '@public/images/ns-img-555.svg';
import stepImage556 from '@public/images/ns-img-556.png';
import stepImage557 from '@public/images/ns-img-557.png';
import stepImage558 from '@public/images/ns-img-558.png';
import stepImage559 from '@public/images/ns-img-559.svg';
import { useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';

const stepsData: StepData[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Koppel uw Gmail',
    description:
      'Verbind uw Gmail-inbox via OAuth in één klik. Geen technische setup, geen API-sleutels — gewoon koppelen en klaar.',
    mainImage: stepImage554,
    overlayImage: stepImage555,
    overlayImagePosition: 'right',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'AI analyseert binnenkomende mail',
    description:
      'Elke inkomende e-mail wordt automatisch verwerkt op inhoud, intentie en context voordat er een concept wordt gemaakt.',
    mainImage: stepImage556,
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Concept gegenereerd',
    description:
      'AI schrijft een passend antwoord op basis van uw kennisbank, beleid en eerder goedgekeurde berichten.',
    mainImage: stepImage557,
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Keuren en versturen',
    description:
      'Bekijk het concept, pas aan waar nodig, en verstuur met één klik. Volledig in controle — altijd.',
    mainImage: stepImage558,
    overlayImage: stepImage559,
    overlayImagePosition: 'center',
  },
];

const ERSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    const stepCards = stepCardRefs.current.filter((ref): ref is HTMLDivElement => ref !== null);
    if (stepCards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target instanceof HTMLElement) {
            const stepNumber = Number.parseInt(entry.target.dataset.step || '1', 10);
            setActiveStep(stepNumber);
          }
        });
      },
      { root: null, rootMargin: '-400px 0px -50% 0px', threshold: [0, 0.1, 0.5, 1] },
    );

    stepCards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const handleStepClick = (stepNumber: number) => {
    const targetCard = document.getElementById(`step-${stepNumber}`);
    if (!targetCard) return;

    if (lenis) {
      lenis.scrollTo(`#step-${stepNumber}`, {
        offset: -156,
        duration: 1.5,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
      });
    } else {
      const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - 156;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
    setActiveStep(stepNumber);
  };

  return (
    <section id="how-it-works" className="py-[80px] md:py-[120px] lg:py-[156px]">
      <div className="main-container">
        <div className="flex flex-wrap items-start justify-center gap-y-[58px] lg:flex-nowrap lg:gap-x-[58px] lg:gap-y-0">
          {/* heading */}
          <RevealAnimation delay={0.1}>
            <h2 className="top-[156px] max-w-[629px] text-center font-normal lg:sticky lg:text-left">
              Van e-mail naar antwoord in <span className="text-ns-green">4 stappen</span>
            </h2>
          </RevealAnimation>

          {/* bar */}
          <RevealAnimation delay={0.1}>
            <div className="bg-[#f0fbe3] sticky top-[156px] hidden h-[564px] w-px lg:block" />
          </RevealAnimation>

          {/* cards */}
          <RevealAnimation delay={0.2}>
            <div className="space-y-8 lg:space-y-60">
              {stepsData.map((step) => (
                <CGStepCard
                  key={step.id}
                  step={step}
                  cardRef={(el) => {
                    stepCardRefs.current[step.stepNumber - 1] = el;
                  }}
                />
              ))}
            </div>
          </RevealAnimation>

          {/* step numbers */}
          <RevealAnimation delay={0.3}>
            <div className="top-[312px] ml-10 hidden flex-col gap-y-2 lg:sticky lg:top-[156px] lg:ml-0 lg:flex">
              {stepsData.map((step) => (
                <button
                  key={step.id}
                  onClick={() => handleStepClick(step.stepNumber)}
                  className={cn(
                    'step-number text-heading-6 flex h-15 w-[44px] cursor-pointer items-center justify-center rounded-full px-4 py-[15px] font-normal transition-colors duration-300 ease-in-out',
                    activeStep === step.stepNumber
                      ? 'bg-ns-green text-secondary'
                      : 'bg-[#f0fbe3] text-secondary/40',
                  )}
                  aria-label={`Ga naar stap ${step.stepNumber}`}>
                  {step.stepNumber}
                </button>
              ))}
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ERSteps;
