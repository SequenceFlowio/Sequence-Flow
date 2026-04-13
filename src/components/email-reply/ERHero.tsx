import RevealAnimation from '@/components/animation/RevealAnimation';
import CGHeroVideoBackground from '@/components/content-gen/CGHeroVideoBackground';
import CGHeroAnimation from '@/components/content-gen/CGHeroAnimation';
import LinkButton from '@/components/ui/button/Button';

const ERHero = () => {
  return (
    <section className="relative overflow-hidden pt-[170px] pb-12 lg:pb-24 2xl:pt-[254px] bg-white">
      <CGHeroVideoBackground />
      <div className="main-container relative z-10">
        <div className="space-y-10 md:space-y-15 2xl:space-y-34">
          <div className="mx-auto space-y-10 text-center lg:space-y-14">
            <div className="space-y-3 text-center">
              <div className="space-y-5">
                <RevealAnimation instant delay={0.1}>
                  <span className="badge badge-green">Email Reply</span>
                </RevealAnimation>
                <RevealAnimation instant delay={0.2}>
                  <h1 className="mx-auto max-w-[350px] leading-[110%] lg:max-w-[640px] lg:text-heading-1 text-heading-3">
                    Nooit meer handmatig e-mails beantwoorden.
                  </h1>
                </RevealAnimation>
              </div>
              <RevealAnimation instant delay={0.3}>
                <p className="mx-auto max-w-[480px] text-secondary/60">
                  Email Reply koppelt aan uw Gmail-inbox en genereert automatisch conceptantwoorden. U keurt goed, past aan of wijst af — geen enkel antwoord gaat eruit zonder uw akkoord.
                </p>
              </RevealAnimation>
            </div>
            <div className="space-y-7">
              <div className="flex flex-col items-center justify-center gap-y-4 md:flex-row md:gap-x-4 md:gap-y-0">
                <RevealAnimation instant delay={0.4} direction="left" offset={50}>
                  <div className="w-[85%] md:w-auto">
                    <LinkButton href="/contact" btnClass="btn-lg-v2 lg:btn-xl-v2 btn-v2-white border-0 group-hover/btn-v2:btn-primary-v2">
                      Start gratis
                    </LinkButton>
                  </div>
                </RevealAnimation>
                <RevealAnimation instant delay={0.5} direction="left" offset={50}>
                  <div className="w-[85%] md:w-auto">
                    <LinkButton href="#how-it-works" btnClass="btn-lg-v2 lg:btn-xl-v2 btn-v2-accent group-hover/btn-v2:btn-secondary-v2">
                      Bekijk hoe het werkt
                    </LinkButton>
                  </div>
                </RevealAnimation>
              </div>
              <RevealAnimation instant delay={0.6}>
                <i className="text-tagline-3 text-secondary/50 font-normal">Geen creditcard nodig — koppel uw Gmail in 2 minuten.</i>
              </RevealAnimation>
            </div>
          </div>
          <RevealAnimation instant delay={0.7}>
            <div className="flex items-center justify-center">
              <CGHeroAnimation />
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

export default ERHero;
