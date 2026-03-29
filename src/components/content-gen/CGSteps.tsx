'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';
import stepImage554 from '@public/images/ns-img-554.png';
import stepImage555 from '@public/images/ns-img-555.svg';
import stepImage556 from '@public/images/ns-img-556.png';
import stepImage557 from '@public/images/ns-img-557.png';
import stepImage558 from '@public/images/ns-img-558.png';
import stepImage559 from '@public/images/ns-img-559.svg';
import { useLenis } from 'lenis/react';
import { useEffect, useRef, useState } from 'react';
import CGStepCard, { StepData } from './CGStepCard';

const stepsData: StepData[] = [
  {
    id: 'step-1',
    stepNumber: 1,
    title: 'Voeg uw merk toe',
    description:
      'Upload uw logo, kleuren, fonts en merkpositionering. De AI analyseert alles en bouwt een volledig merkprofiel op dat elke generatie aanstuurt.',
    mainImage: stepImage554,
    overlayImage: stepImage555,
    overlayImagePosition: 'right',
  },
  {
    id: 'step-2',
    stepNumber: 2,
    title: 'Kies een template',
    description:
      'Selecteer een advertentietemplate (Headline Hero, Offer/Promo, Testimonial, UGC Lifestyle, Us vs. Them) of een social content template voor Instagram, Facebook, LinkedIn of Pinterest.',
    mainImage: stepImage556,
  },
  {
    id: 'step-3',
    stepNumber: 3,
    title: 'Personaliseer en stel in',
    description:
      'Kies uw product, doelgroep, awareness-niveau en klantbehoefte. De AI schrijft de hooks en bouwt de visuele prompts. U reviewt en past aan waar nodig.',
    mainImage: stepImage557,
  },
  {
    id: 'step-4',
    stepNumber: 4,
    title: 'Genereer & download',
    description:
      'Genereer uw content in 1K, 2K of 4K resolutie. Elke variant is een andere creatieve invalshoek — geen reskin, maar een uniek concept.',
    mainImage: stepImage558,
    overlayImage: stepImage559,
    overlayImagePosition: 'center',
  },
];

const CGSteps = () => {
  const [activeStep, setActiveStep] = useState(1);
  const stepCardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const lenis = useLenis();

  useEffect(() => {
    const stepCards = stepCardRefs.current.filter((ref): ref is HTMLDivElement => ref !== null);

    if (stepCards.length === 0) {
      return;
    }

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '-400px 0px -50% 0px',
      threshold: [0, 0.1, 0.5, 1],
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target instanceof HTMLElement) {
          const stepNumber = Number.parseInt(entry.target.dataset.step || '1', 10);
          setActiveStep(stepNumber);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    stepCards.forEach((card) => {
      observer.observe(card);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleStepClick = (stepNumber: number) => {
    const targetCard = document.getElementById(`step-${stepNumber}`);

    if (targetCard) {
      // Check if Lenis is available (for smooth scrolling)
      if (lenis) {
        lenis.scrollTo(`#step-${stepNumber}`, {
          offset: -156, // Account for sticky header offset
          duration: 1.5,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
        });
      } else {
        // Fallback for when Lenis is not available (mobile devices)
        const targetPosition = targetCard.getBoundingClientRect().top + window.pageYOffset - 156;
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth',
        });
      }
      setActiveStep(stepNumber);
    }
  };

  return (
    <section id="how-it-works" className="py-[80px] md:py-[120px] lg:py-[156px]">
      <div className="main-container">
        <div className="flex flex-wrap items-start justify-center gap-y-[58px] lg:flex-nowrap lg:gap-x-[58px] lg:gap-y-0">
          {/* heading */}
          <RevealAnimation delay={0.1}>
            <h2 className="top-[156px] max-w-[629px] text-center font-normal lg:sticky lg:text-left">
              Van merk naar content in <span className="text-ns-green">4 stappen</span>
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

          {/* cards number */}
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
                  data-step-number={step.stepNumber}
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

export default CGSteps;
