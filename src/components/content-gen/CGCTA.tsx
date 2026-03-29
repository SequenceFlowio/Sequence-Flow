'use client';

import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';

const CGCTA = () => {
  return (
    <section
      className="py-[80px] md:py-[112px]"
      aria-labelledby="cta-heading"
      itemScope
      itemType="https://schema.org/WebPageElement">
      <div className="main-container">
        <div className="space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-ivory uppercase" aria-label="Call to action section badge" itemProp="name">
              Start vandaag
            </span>
          </RevealAnimation>
          <div className="space-y-3">
            <RevealAnimation delay={0.2}>
              <h2 id="cta-heading" className="mx-auto max-w-[689px] text-center font-medium" itemProp="headline">
                Begin vandaag met <span className="text-ns-green">on-brand content</span> genereren
              </h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p itemProp="description">
                Voeg uw merk toe en genereer uw eerste advertentie in minder dan 5 minuten.
              </p>
            </RevealAnimation>
          </div>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto mt-[76px] w-[90%] text-center md:w-auto">
            <LinkButton
              href="/contact"
              btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2"
              aria-label="Probeer gratis - Navigate to contact page">
              Probeer gratis
            </LinkButton>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

export default CGCTA;
