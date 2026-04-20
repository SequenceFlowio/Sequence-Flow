import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const ERHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 md:pt-42 xl:pt-[180px]">
      {/* subtle radial green glow */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(199,245,111,0.18)_0%,transparent_65%)]" />

      <div className="main-container relative z-10">
        <div className="text-center">
          {/* pill badge */}
          <RevealAnimation delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#C7F56F] px-5 py-2 text-sm font-semibold text-secondary">
              14 dagen gratis proberen — geen creditcard nodig
            </div>
          </RevealAnimation>

          {/* headline */}
          <RevealAnimation delay={0.2}>
            <h1 className="mx-auto mb-5 max-w-[740px]">
              Uw inbox bijgehouden.<br className="hidden sm:block" /> Uw klanten geholpen. Automatisch.
            </h1>
          </RevealAnimation>

          {/* subtext */}
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[520px] text-secondary/60 dark:text-accent/60">
              Email Reply koppelt aan uw Gmail en schrijft direct een concept voor elke klantmail. U keurt goed — geen enkel bericht gaat eruit zonder uw akkoord.
            </p>
          </RevealAnimation>

          {/* CTAs */}
          <RevealAnimation delay={0.4}>
            <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/contact" className="btn btn-md btn-secondary normal-case before:content-none w-full sm:w-auto">
                Start 14 dagen gratis
              </Link>
              <a
                href="#how-it-works"
                className="flex items-center gap-1.5 text-sm font-medium text-secondary/50 transition-colors hover:text-secondary">
                Bekijk hoe het werkt
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path d="M8 3v10M3 9l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.45}>
            <p className="mb-14 text-xs text-secondary/35">Gmail OAuth — koppelen in 2 minuten. Annuleer altijd.</p>
          </RevealAnimation>

          {/* Email inbox mockup */}
          <RevealAnimation delay={0.6}>
            <div className="mx-auto max-w-[660px]">
              <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-[0_12px_50px_rgba(0,0,0,0.09)]">
                {/* window chrome */}
                <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3">
                  <span className="size-3 rounded-full bg-red-400/70" />
                  <span className="size-3 rounded-full bg-yellow-400/70" />
                  <span className="size-3 rounded-full bg-green-400/70" />
                  <span className="ml-4 text-xs font-medium text-gray-400">Gmail — Inbox (3 nieuw)</span>
                </div>

                {/* email rows */}
                <div className="divide-y divide-gray-50">
                  {[
                    { init: 'J', name: 'Jan Pietersen', subject: 'Wanneer wordt mijn bestelling afgeleverd?', time: '10:42', status: 'waiting' },
                    { init: 'M', name: 'Maria van Dijk', subject: 'Ik wil graag een terugbetaling aanvragen', time: '11:15', status: 'ready' },
                    { init: 'D', name: 'Dirk Smit', subject: 'Heeft u dit product ook in maat L?', time: '11:38', status: 'waiting' },
                  ].map((email, i) => (
                    <div key={i} className={`flex items-center gap-3 px-4 py-3 ${i === 1 ? 'bg-[#f9ffe8]' : ''}`}>
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
                        {email.init}
                      </div>
                      <div className="min-w-0 flex-1 text-left">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-secondary">{email.name}</span>
                          <span className="shrink-0 text-xs text-gray-400">{email.time}</span>
                        </div>
                        <p className="truncate text-xs text-secondary/50">{email.subject}</p>
                      </div>
                      <div className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${email.status === 'ready' ? 'bg-[#C7F56F] text-secondary' : 'bg-gray-100 text-gray-400'}`}>
                        {email.status === 'ready' ? 'AI klaar ✓' : 'In wachtrij'}
                      </div>
                    </div>
                  ))}
                </div>

                {/* AI draft preview */}
                <div className="border-t border-[#C7F56F]/25 bg-[#f9ffe8] px-5 py-4">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#C7F56F] text-[10px] font-bold text-secondary">✓</span>
                    <span className="text-xs font-semibold text-secondary">AI-concept klaar voor: Maria van Dijk</span>
                    <span className="ml-auto text-[10px] text-secondary/40">gegenereerd in 2s</span>
                  </div>
                  <div className="mb-3 rounded-xl border border-gray-100 bg-white p-3 text-left text-xs leading-relaxed text-secondary/70">
                    Goedemiddag Maria,<br /><br />
                    Bedankt voor uw bericht. Uiteraard helpen wij u graag met de retour van uw bestelling. U kunt uw retour aanmelden via onze retourpagina...
                    <span className="text-secondary/30"> [volledig concept klaargemaakt]</span>
                  </div>
                  <div className="flex gap-2">
                    <button className="flex-1 rounded-full bg-[#C7F56F] py-2 text-xs font-semibold text-secondary">
                      Goedkeuren & versturen
                    </button>
                    <button className="flex-1 rounded-full border border-gray-200 bg-white py-2 text-xs font-medium text-secondary/60">
                      Aanpassen
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};

ERHero.displayName = 'ERHero';
export default ERHero;
