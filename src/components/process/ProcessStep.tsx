'use client';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const steps = [
  {
    num: 1,
    title: 'Flow Scan',
    body: 'Gratis kennismaking: wij analyseren uw processen en identificeren de grootste automatiseringskansen.',
    cx: 320,
    cy: 100,
    side: 'left' as const,
  },
  {
    num: 2,
    title: 'Flow Ontwerp',
    body: 'Samen ontwerpen wij de ideale flow voor uw situatie — op maat, geen standaardoplossing.',
    cx: 550,
    cy: 300,
    side: 'right' as const,
  },
  {
    num: 3,
    title: 'Bouw & Integratie',
    body: 'Wij bouwen en koppelen alles aan uw bestaande tools zoals uw CRM, e-mail en overige systemen.',
    cx: 320,
    cy: 500,
    side: 'left' as const,
  },
  {
    num: 4,
    title: 'Testen & Verfijnen',
    body: 'Live testen en data-gedreven optimalisatie voordat de flow volledig live gaat.',
    cx: 550,
    cy: 700,
    side: 'right' as const,
  },
  {
    num: 5,
    title: 'Live & Doorgroeien',
    body: 'Uw flow gaat live. Wij monitoren, verbeteren en schalen mee naarmate uw bedrijf groeit.',
    cx: 320,
    cy: 900,
    side: 'left' as const,
  },
];

// Single continuous snake path between all 5 step dots
const SNAKE_PATH =
  'M 320 100 C 320 200, 550 200, 550 300 C 550 400, 320 400, 320 500 C 320 600, 550 600, 550 700 C 550 800, 320 800, 320 900';

const ProcessStep = () => {
  const snakeRef = useRef<SVGPathElement>(null);
  const scopeRef = useRef<HTMLDivElement>(null);
  const animInitialized = useRef(false);

  useGSAP(
    () => {
      if (animInitialized.current) return;
      animInitialized.current = true;

      const path = snakeRef.current;
      if (!path) return;
      const length = path.getTotalLength();
      gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
      gsap.to(path, {
        strokeDashoffset: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: scopeRef.current,
          start: 'top 80%',
          end: 'bottom 30%',
          scrub: 1.5,
        },
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
          {steps.map((step, i) => (
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

        {/* Desktop: one continuous snake path with checkmark dots */}
        <div className="mx-auto hidden max-w-[870px] lg:block">
          <svg viewBox="0 0 870 1000" className="w-full" fill="none">
            <defs>
              <linearGradient id="snakeGrad" x1="0" y1="0" x2="0" y2="1000" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#E5FDB5" />
                <stop offset="50%" stopColor="#C7F56F" />
                <stop offset="100%" stopColor="#9ED84D" />
              </linearGradient>
            </defs>

            {/* The single continuous snake */}
            <path
              ref={snakeRef}
              d={SNAKE_PATH}
              stroke="url(#snakeGrad)"
              strokeWidth="2.5"
              strokeLinecap="round"
            />

            {/* Step checkmark dots + text */}
            {steps.map((step) => (
              <g key={step.num}>
                {/* Outer glow ring */}
                <circle cx={step.cx} cy={step.cy} r="16" fill="#C7F56F" fillOpacity="0.1" />
                {/* Circle border */}
                <circle cx={step.cx} cy={step.cy} r="13" fill="white" stroke="#C7F56F" strokeWidth="2" />
                {/* Checkmark */}
                <path
                  d={`M ${step.cx - 5.5} ${step.cy + 0.5} L ${step.cx - 1} ${step.cy + 4.5} L ${step.cx + 6} ${step.cy - 5}`}
                  stroke="#C7F56F"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Left-side text (steps 1, 3, 5) */}
                {step.side === 'left' && (
                  <foreignObject x="0" y={step.cy - 80} width="293" height="180">
                    <div
                      style={{
                        height: '180px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingRight: '24px',
                        textAlign: 'right',
                      }}>
                      <p
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#9CA3AF',
                          marginBottom: '6px',
                        }}>
                        Stap {step.num}
                      </p>
                      <p
                        style={{
                          fontSize: '21px',
                          fontWeight: 600,
                          color: '#111827',
                          marginBottom: '8px',
                          lineHeight: '1.2',
                        }}>
                        {step.title}
                      </p>
                      <p style={{ fontSize: '14px', color: 'rgba(17,24,39,0.55)', lineHeight: '1.6' }}>{step.body}</p>
                    </div>
                  </foreignObject>
                )}

                {/* Right-side text (steps 2, 4) */}
                {step.side === 'right' && (
                  <foreignObject x="577" y={step.cy - 80} width="293" height="180">
                    <div
                      style={{
                        height: '180px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        paddingLeft: '24px',
                      }}>
                      <p
                        style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          letterSpacing: '0.08em',
                          textTransform: 'uppercase',
                          color: '#9CA3AF',
                          marginBottom: '6px',
                        }}>
                        Stap {step.num}
                      </p>
                      <p
                        style={{
                          fontSize: '21px',
                          fontWeight: 600,
                          color: '#111827',
                          marginBottom: '8px',
                          lineHeight: '1.2',
                        }}>
                        {step.title}
                      </p>
                      <p style={{ fontSize: '14px', color: 'rgba(17,24,39,0.55)', lineHeight: '1.6' }}>{step.body}</p>
                    </div>
                  </foreignObject>
                )}
              </g>
            ))}
          </svg>
        </div>
      </div>
    </section>
  );
};

ProcessStep.displayName = 'ProcessStep';
export default ProcessStep;
