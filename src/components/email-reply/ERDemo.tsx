import RevealAnimation from '@/components/animation/RevealAnimation';

const ERDemo = () => {
  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="main-container">
        {/* heading */}
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4 inline-block">Zie het in actie</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[560px]">Van inkomende mail naar verzonden antwoord — in seconden</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-3 max-w-[460px] text-secondary/60">
              De AI leest de context, checkt uw kennisbank en schrijft een concept dat klinkt zoals ú schrijft.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="mx-auto max-w-[940px]">
            <div className="grid grid-cols-1 items-stretch gap-4 lg:grid-cols-[1fr_72px_1fr]">

              {/* Incoming email */}
              <div className="overflow-hidden rounded-2xl border border-gray-200">
                <div className="flex items-center gap-2 border-b border-gray-100 bg-gray-50 px-5 py-3">
                  <span className="size-2 rounded-full bg-blue-400" />
                  <span className="text-xs font-semibold uppercase tracking-wider text-secondary/50">Inkomende mail</span>
                </div>
                <div className="p-5">
                  <div className="mb-4 flex items-start gap-3">
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-bold text-orange-600">
                      M
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary">Maria van Dijk</p>
                      <p className="text-xs text-secondary/45">maria@email.nl · Vandaag 11:15</p>
                    </div>
                  </div>
                  <div className="space-y-2 text-sm leading-relaxed text-secondary/70">
                    <p className="font-medium text-secondary">Terugbetaling bestelling #4821</p>
                    <p>Hallo,</p>
                    <p>
                      Ik heb vorige week bestelling #4821 geplaatst maar wil deze graag retourneren. Het product voldoet niet aan mijn verwachtingen. Hoe kan ik een terugbetaling aanvragen?
                    </p>
                    <p>
                      Alvast bedankt,
                      <br />
                      Maria
                    </p>
                  </div>
                </div>
              </div>

              {/* Arrow connector */}
              <div className="flex items-center justify-center">
                <div className="flex flex-col items-center gap-1.5">
                  <div className="flex size-10 items-center justify-center rounded-full bg-[#C7F56F] shadow-[0_0_0_6px_rgba(199,245,111,0.15)]">
                    {/* right arrow on desktop, down on mobile */}
                    <svg className="hidden size-5 text-secondary lg:block" fill="none" viewBox="0 0 20 20">
                      <path d="M4 10h12M12 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg className="size-5 text-secondary lg:hidden" fill="none" viewBox="0 0 20 20">
                      <path d="M10 4v12M5 12l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="text-center text-[9px] font-bold uppercase tracking-widest text-secondary/35">AI · 2s</span>
                </div>
              </div>

              {/* AI draft */}
              <div className="overflow-hidden rounded-2xl border-2 border-[#C7F56F]">
                <div className="flex items-center justify-between border-b border-[#C7F56F]/25 bg-[#f9ffe8] px-5 py-3">
                  <div className="flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#C7F56F] text-[10px] font-bold text-secondary">
                      ✓
                    </span>
                    <span className="text-xs font-semibold text-secondary">AI-concept gegenereerd</span>
                  </div>
                  <span className="text-[10px] text-secondary/40">op basis van kennisbank</span>
                </div>
                <div className="p-5">
                  <div className="mb-5 space-y-2 text-sm leading-relaxed text-secondary/70">
                    <p className="font-medium text-secondary">Re: Terugbetaling bestelling #4821</p>
                    <p>Goedemiddag Maria,</p>
                    <p>
                      Bedankt voor uw bericht. Uiteraard helpen wij u graag met de retour van bestelling #4821.
                    </p>
                    <p>
                      U kunt uw retour aanmelden via{' '}
                      <span className="font-medium text-[#9ED84D]">retour.uwwebshop.nl</span>. Na goedkeuring
                      ontvangt u binnen 5–7 werkdagen uw terugbetaling op uw originele betaalmethode.
                    </p>
                    <p>
                      Met vriendelijke groet,
                      <br />
                      Klantenservice
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-full bg-[#C7F56F] py-2.5 text-xs font-semibold text-secondary transition-opacity hover:opacity-90">
                      Goedkeuren & versturen
                    </button>
                    <button className="flex-1 rounded-full border border-gray-200 py-2.5 text-xs font-medium text-secondary/55 transition-colors hover:border-gray-300">
                      Aanpassen
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* caption */}
            <p className="mt-5 text-center text-xs text-secondary/40">
              AI-concepten worden gegenereerd op basis van uw kennisbank — nooit generiek, altijd in uw eigen toon.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ERDemo.displayName = 'ERDemo';
export default ERDemo;
