'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const ERCTA = () => {
  return (
    <section className="py-[80px] md:py-[112px]" aria-labelledby="er-cta-heading">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory uppercase">Start vandaag</span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="er-cta-heading" className="mx-auto max-w-[689px] text-center font-medium">
                Begin vandaag met <span className="text-ns-green">automatische e-mail support</span>
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p>Koppel uw Gmail en verstuur uw eerste AI-concept binnen 5 minuten.</p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton href="/contact" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
              Start gratis
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default ERCTA;
