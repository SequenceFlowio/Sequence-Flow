'use client';
import { useCallback, useEffect, useState } from 'react';
import RevealAnimation from '../animation/RevealAnimation';

type TestimonialData = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: TestimonialData[] = [
  {
    name: 'Mark de Vries',
    role: 'CEO',
    quote:
      'Dankzij SequenceFlow hebben we onze lead opvolging volledig geautomatiseerd. We missen geen enkele kans meer en onze conversie is met 40% gestegen.',
  },
  {
    name: 'Sophie Jansen',
    role: 'Operations Manager',
    quote:
      'De Admin-Killer flow bespaart ons team minimaal 20 uur per week. Facturen, contracten en rapportages gaan nu volledig automatisch.',
  },
  {
    name: 'Thomas Bakker',
    role: 'Founder',
    quote:
      'Onze klanten worden nu binnen minuten geholpen via de AI First-Line Support. De klanttevredenheid is door het dak gegaan.',
  },
  {
    name: 'Lisa van den Berg',
    role: 'Sales Director',
    quote:
      'De Smart Lead Scoring heeft onze sales pipeline getransformeerd. We focussen nu alleen nog op de leads die er echt toe doen.',
  },
  {
    name: 'Pieter Vermeer',
    role: 'CFO',
    quote:
      'De CRM-Sync Flow zorgt ervoor dat onze data altijd 100% klopt. Geen handmatige invoer meer, geen fouten.',
  },
  {
    name: 'Emma de Groot',
    role: 'Marketing Manager',
    quote:
      'Met de Autonome Outreach bereiken we nu 10x meer prospects dan voorheen. En het mooiste: het voelt persoonlijk en authentiek.',
  },
];

const N = testimonials.length;
const INTERVAL_MS = 3800;
const OFFSET_PX = 385;

type SlotPos = -2 | -1 | 0 | 1 | 2;

function getSlotPos(idx: number, center: number): SlotPos {
  const d = ((idx - center) % N + N) % N;
  if (d === 0) return 0;
  if (d === 1) return 1;
  if (d === 2) return 2;
  if (d === N - 1) return -1;
  return -2;
}

function buildTransform(pos: SlotPos, hovered: boolean): string {
  switch (pos) {
    case -2:
      return `translateX(calc(-50% - ${OFFSET_PX * 2}px)) translateY(48px) rotate(-7deg) scale(0.82)`;
    case -1:
      return hovered
        ? `translateX(calc(-50% - ${OFFSET_PX}px)) translateY(12px) rotate(-2deg) scale(0.97)`
        : `translateX(calc(-50% - ${OFFSET_PX}px)) translateY(30px) rotate(-4deg) scale(0.91)`;
    case 0:
      return hovered
        ? `translateX(-50%) translateY(-14px) rotate(0deg) scale(1.04)`
        : `translateX(-50%) translateY(0px) rotate(0deg) scale(1)`;
    case 1:
      return hovered
        ? `translateX(calc(-50% + ${OFFSET_PX}px)) translateY(12px) rotate(2deg) scale(0.97)`
        : `translateX(calc(-50% + ${OFFSET_PX}px)) translateY(30px) rotate(4deg) scale(0.91)`;
    case 2:
      return `translateX(calc(-50% + ${OFFSET_PX * 2}px)) translateY(48px) rotate(7deg) scale(0.82)`;
  }
}

function getOpacity(pos: SlotPos): number {
  if (pos === 0) return 1;
  if (pos === -1 || pos === 1) return 0.65;
  return 0;
}

const StarRow = () => (
  <figure className="flex items-center gap-1 pb-4" aria-label="5 sterren beoordeling">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} xmlns="http://www.w3.org/2000/svg" className="size-[15px]" viewBox="0 0 16 16" fill="none">
        <path
          d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
          fill="#C7F56F"
        />
      </svg>
    ))}
  </figure>
);

const Testimonial = () => {
  const [center, setCenter] = useState(0);
  const [paused, setPaused] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const advance = useCallback(() => setCenter((c) => (c + 1) % N), []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(advance, INTERVAL_MS);
    return () => clearInterval(t);
  }, [paused, advance]);

  return (
    <section
      className="pt-14 pb-20 sm:pt-16 sm:pb-24 md:pt-24 md:pb-24 2xl:pt-28 2xl:pb-44"
      aria-label="Klantbeoordelingen">
      <div className="main-container">
        {/* Heading */}
        <div className="mb-16 text-center md:mb-20">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green-v2 mb-3.5 md:mb-5">Testimonials</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="xl:mx-auto xl:max-w-[906px]">Wat onze klanten zeggen over SequenceFlow</h2>
          </RevealAnimation>
        </div>

        {/* Desktop arc carousel */}
        <div className="hidden lg:block" style={{ overflowX: 'clip' }}>
          {/* Extra top padding so the hovered center card can lift without clipping */}
          <div className="relative" style={{ height: '370px', paddingTop: '16px' }}>
            {testimonials.map((t, i) => {
              const pos = getSlotPos(i, center);
              const isHovered = hoveredIdx === i;
              const isInteractable = Math.abs(pos) <= 1;

              return (
                <div
                  key={i}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '16px',
                    width: '360px',
                    transform: buildTransform(pos, isHovered),
                    opacity: getOpacity(pos),
                    zIndex: pos === 0 ? 10 : Math.abs(pos) === 1 ? 5 : 0,
                    transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease',
                    pointerEvents: isInteractable ? 'auto' : 'none',
                  }}
                  onMouseEnter={() => {
                    setHoveredIdx(i);
                    setPaused(true);
                  }}
                  onMouseLeave={() => {
                    setHoveredIdx(null);
                    setPaused(false);
                  }}>
                  <article className="border-stroke-1 dark:border-stroke-7 dark:bg-background-6 h-full rounded-[20px] border bg-white p-6 sm:p-8">
                    <StarRow />
                    <p className="text-secondary/75 dark:text-accent/75 pb-6 leading-relaxed">{t.quote}</p>
                    <div>
                      <h3 className="text-tagline-1 font-semibold leading-[1.5] sm:text-lg">{t.name}</h3>
                      <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">{t.role}</p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>

          {/* Dot navigation */}
          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setCenter(i);
                  setPaused(false);
                }}
                aria-label={`Testimonial ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  center === i ? 'w-6 bg-[#C7F56F]' : 'w-2 bg-secondary/20 hover:bg-secondary/40 dark:bg-accent/20 dark:hover:bg-accent/40'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Mobile: vertical list */}
        <div className="space-y-6 lg:hidden">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="border-stroke-1 dark:border-stroke-7 dark:bg-background-6 rounded-[20px] border bg-white p-6 sm:p-8">
              <StarRow />
              <p className="pb-6">{t.quote}</p>
              <div>
                <h3 className="text-tagline-1 font-semibold leading-[1.5] sm:text-lg">{t.name}</h3>
                <p className="text-tagline-2 text-secondary/60 dark:text-accent/60">{t.role}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

Testimonial.displayName = 'Testimonial';
export default Testimonial;
