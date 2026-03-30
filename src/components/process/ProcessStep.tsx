'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Left-to-right gradient (for arches going right)
// Right-to-left gradient (for U-curves going back left)
const Gradient = ({ id, reverse }: { id: string; reverse?: boolean }) => (
  <linearGradient
    id={id}
    x1={reverse ? '685' : '185'}
    y1="0"
    x2={reverse ? '185' : '685'}
    y2="0"
    gradientUnits="userSpaceOnUse">
    <stop offset="0%" stopColor="#E5FDB5" />
    <stop offset="40%" stopColor="#C7F56F" />
    <stop offset="100%" stopColor="#9ED84D" />
  </linearGradient>
);

const ProcessStep = () => {
  const path1 = useRef<SVGPathElement>(null);
  const path2 = useRef<SVGPathElement>(null);
  const path3 = useRef<SVGPathElement>(null);
  const path4 = useRef<SVGPathElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const animInitialized = useRef(false);

  useGSAP(
    () => {
      if (animInitialized.current) return;
      animInitialized.current = true;

      const paths = [path1, path2, path3, path4]
        .map((r) => r.current)
        .filter(Boolean) as SVGPathElement[];

      paths.forEach((path) => {
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
        gsap.to(path, {
          strokeDashoffset: 0,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: path.closest('svg'),
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        });
      });
    },
    { scope: scopeRef },
  );

  return (
    <section className="pt-[120px] pb-[120px] lg:pt-[160px] xl:pb-[200px]">
      <div className="main-container" ref={scopeRef}>
        {/* Heading */}
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Ons Proces</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2>Zo bouwen wij uw eigen flow</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[610px]">
                Van eerste gesprek tot live automatisering — een helder, stap-voor-stap traject zonder verrassingen.
              </p>
            </RevealAnimation>
          </div>
        </div>

        {/* Mobile: simple numbered list */}
        <div className="space-y-6 lg:hidden">
          {[
            { num: 1, title: 'Flow Scan', body: 'Gratis kennismaking: wij analyseren uw processen en identificeren de grootste automatiseringskansen.' },
            { num: 2, title: 'Flow Ontwerp', body: 'Samen ontwerpen wij de ideale flow voor uw situatie — op maat, geen standaardoplossing.' },
            { num: 3, title: 'Bouw & Integratie', body: 'Wij bouwen en koppelen alles aan uw bestaande tools zoals uw CRM, e-mail en overige systemen.' },
            { num: 4, title: 'Testen & Verfijnen', body: 'Live testen en data-gedreven optimalisatie voordat de flow volledig live gaat.' },
            { num: 5, title: 'Live & Doorgroeien', body: 'Uw flow gaat live. Wij monitoren, verbeteren en schalen mee naarmate uw bedrijf groeit.' },
          ].map((step, i) => (
            <RevealAnimation key={step.num} delay={0.1 + i * 0.1}>
              <div className="dark:bg-background-6 bg-background-4 flex gap-4 rounded-2xl p-5">
                <div className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-[#C7F56F]/20">
                  <span className="text-tagline-2 font-semibold text-secondary dark:text-accent">{step.num}</span>
                </div>
                <div className="space-y-1">
                  <h3 className="text-heading-6">{step.title}</h3>
                  <p className="text-secondary/60 dark:text-accent/60">{step.body}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* Desktop: zigzag snake layout */}
        <div className="mx-auto hidden max-w-[870px] lg:block">

          {/* STEP 1 — left */}
          <RevealAnimation delay={0.2}>
            <div className="max-w-[370px] space-y-3">
              <p className="text-tagline-2 text-black">STAP 1</p>
              <div className="space-y-2">
                <h3 className="text-heading-5">Flow Scan</h3>
                <p>Gratis kennismaking: wij analyseren uw processen en identificeren de grootste automatiseringskansen.</p>
              </div>
            </div>
          </RevealAnimation>

          {/* Connector 1→2: arch going right */}
          <svg viewBox="0 0 870 70" className="w-full overflow-visible" fill="none">
            <defs><Gradient id="grad1" /></defs>
            <path
              ref={path1}
              d="M 185 62 C 300 5, 570 5, 685 62"
              stroke="url(#grad1)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* STEP 2 — right */}
          <RevealAnimation delay={0.3}>
            <div className="ml-auto max-w-[370px] space-y-3">
              <p className="text-tagline-2 text-black">STAP 2</p>
              <div className="space-y-2">
                <h3 className="text-heading-5">Flow Ontwerp</h3>
                <p>Samen ontwerpen wij de ideale flow voor uw situatie — op maat, geen standaardoplossing.</p>
              </div>
            </div>
          </RevealAnimation>

          {/* Connector 2→3: U-curve sweeping back left */}
          <svg viewBox="0 0 870 110" className="w-full overflow-visible" fill="none">
            <defs><Gradient id="grad2" reverse /></defs>
            <path
              ref={path2}
              d="M 685 5 C 870 5, 870 105, 185 105"
              stroke="url(#grad2)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* STEP 3 — left */}
          <RevealAnimation delay={0.4}>
            <div className="max-w-[370px] space-y-3">
              <p className="text-tagline-2 text-black">STAP 3</p>
              <div className="space-y-2">
                <h3 className="text-heading-5">Bouw &amp; Integratie</h3>
                <p>Wij bouwen en koppelen alles aan uw bestaande tools zoals uw CRM, e-mail en overige systemen.</p>
              </div>
            </div>
          </RevealAnimation>

          {/* Connector 3→4: arch going right */}
          <svg viewBox="0 0 870 70" className="w-full overflow-visible" fill="none">
            <defs><Gradient id="grad3" /></defs>
            <path
              ref={path3}
              d="M 185 62 C 300 5, 570 5, 685 62"
              stroke="url(#grad3)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* STEP 4 — right */}
          <RevealAnimation delay={0.5}>
            <div className="ml-auto max-w-[370px] space-y-3">
              <p className="text-tagline-2 text-black">STAP 4</p>
              <div className="space-y-2">
                <h3 className="text-heading-5">Testen &amp; Verfijnen</h3>
                <p>Live testen en data-gedreven optimalisatie voordat de flow volledig live gaat.</p>
              </div>
            </div>
          </RevealAnimation>

          {/* Connector 4→5: U-curve sweeping back left */}
          <svg viewBox="0 0 870 110" className="w-full overflow-visible" fill="none">
            <defs><Gradient id="grad4" reverse /></defs>
            <path
              ref={path4}
              d="M 685 5 C 870 5, 870 105, 185 105"
              stroke="url(#grad4)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* STEP 5 — left */}
          <RevealAnimation delay={0.6}>
            <div className="max-w-[370px] space-y-3">
              <p className="text-tagline-2 text-black">STAP 5</p>
              <div className="space-y-2">
                <h3 className="text-heading-5">Live &amp; Doorgroeien</h3>
                <p>Uw flow gaat live. Wij monitoren, verbeteren en schalen mee naarmate uw bedrijf groeit.</p>
              </div>
            </div>
          </RevealAnimation>

        </div>
      </div>
    </section>
  );
};

ProcessStep.displayName = 'ProcessStep';
export default ProcessStep;
