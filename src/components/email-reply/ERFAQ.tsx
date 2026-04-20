'use client';

import { useState } from 'react';
import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const faqs = [
  {
    q: 'Heb ik nog controle over wat er verstuurd wordt?',
    a: 'Altijd. Email Reply verstuurt nooit iets zonder uw goedkeuring. Elk concept verschijnt in uw goedkeuringsflow — u kiest zelf of u goedkeurt, aanpast of afwijst. De AI schrijft, u beslist.',
  },
  {
    q: 'Klinken de antwoorden als mijn eigen schrijfstijl?',
    a: 'Ja. De AI gebruikt uw kennisbank — uw tone of voice, uw beleid, uw producttermen — als context. Hoe meer u uploadt, hoe beter de toon overeenkomt met uw merk.',
  },
  {
    q: 'Werkt dit alleen met Gmail?',
    a: 'Op dit moment ondersteunt Email Reply Gmail via OAuth-koppeling. Ondersteuning voor Outlook en andere e-mailproviders staat op de roadmap.',
  },
  {
    q: 'Wat als de AI een fout maakt?',
    a: 'Niets wordt automatisch verstuurd. U ziet elk concept vóór verzending. Wijst u een concept af, dan kunt u zelf een antwoord schrijven of het concept handmatig aanpassen.',
  },
  {
    q: 'Is mijn data veilig?',
    a: 'Uw e-maildata wordt niet gebruikt voor het trainen van AI-modellen van derden. Verbindingen verlopen versleuteld via OAuth. We slaan alleen de kennisbankinhoud op die u zelf uploadt.',
  },
];

const FAQItem = ({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onToggle}
      className="flex w-full items-center justify-between gap-4 py-5 text-left"
      aria-expanded={isOpen}
    >
      <span className="text-sm font-semibold text-secondary">{q}</span>
      <span
        className="flex size-6 shrink-0 items-center justify-center rounded-full border border-gray-200 text-secondary/50 transition-transform duration-300"
        style={{ transform: isOpen ? 'rotate(45deg)' : 'rotate(0deg)' }}
        aria-hidden="true"
      >
        <svg viewBox="0 0 12 12" className="size-3" fill="none">
          <path d="M6 2v8M2 6h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </span>
    </button>
    <div
      className="overflow-hidden transition-all duration-300 ease-out"
      style={{ maxHeight: isOpen ? '200px' : '0px', opacity: isOpen ? 1 : 0 }}
    >
      <p className="pb-5 text-sm leading-relaxed text-secondary/60">{a}</p>
    </div>
  </div>
);

const ERFAQ = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <>
      {/* FAQ Section */}
      <section className="bg-white py-[80px] md:py-[120px]">
        <div className="main-container">
          <div className="mb-14 text-center">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-green mb-4 inline-block">Veelgestelde vragen</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[480px]">Alles wat u wilt weten</h2>
            </RevealAnimation>
          </div>

          <RevealAnimation delay={0.3}>
            <div className="mx-auto max-w-[680px] rounded-2xl border border-gray-100 px-8 py-2">
              {faqs.map((faq, i) => (
                <FAQItem
                  key={i}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIdx === i}
                  onToggle={() => setOpenIdx(openIdx === i ? null : i)}
                />
              ))}
            </div>
          </RevealAnimation>
        </div>
      </section>

      {/* Offer Section */}
      <section className="bg-secondary py-[80px] md:py-[120px]">
        <div className="main-container">
          <RevealAnimation delay={0.1}>
            <div className="mx-auto max-w-[600px] text-center">
              <span className="mb-5 inline-block rounded-full bg-[#C7F56F] px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-secondary">
                14 dagen gratis proberen
              </span>
              <h2 className="mb-6 text-white">Begin vandaag. Geen risico.</h2>
              <p className="mb-10 text-white/50">
                Start uw gratis proefperiode en ontdek hoe Email Reply uw inbox transformeert — zonder creditcard, zonder verplichting.
              </p>

              <ul className="mb-10 space-y-3 text-left">
                {[
                  'Volledige toegang tot alle functies gedurende 14 dagen',
                  'Gmail-koppeling in minder dan 2 minuten',
                  'Kennisbank met uw eigen FAQ en beleid',
                  'Geen creditcard vereist',
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-[#C7F56F]">
                      <svg viewBox="0 0 12 12" className="size-3" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-sm text-white/70">{item}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="https://emailreply.sequenceflow.io"
                className="inline-flex items-center justify-center rounded-full border border-[#C7F56F] bg-[#C7F56F] px-7 py-3 text-base font-semibold text-secondary transition-all duration-200 hover:brightness-95"
              >
                Start mijn gratis proefperiode →
              </Link>
            </div>
          </RevealAnimation>
        </div>
      </section>
    </>
  );
};

ERFAQ.displayName = 'ERFAQ';
export default ERFAQ;
