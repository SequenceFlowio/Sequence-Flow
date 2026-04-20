import RevealAnimation from '@/components/animation/RevealAnimation';
import Link from 'next/link';

const inboxRows = [
  {
    init: 'J',
    name: 'Jan Pietersen',
    subject: 'Wanneer wordt mijn bestelling afgeleverd?',
    time: '10:42',
    status: 'queue',
  },
  {
    init: 'M',
    name: 'Maria van Dijk',
    subject: 'Ik wil graag een terugbetaling aanvragen',
    time: '11:15',
    status: 'ready',
  },
  {
    init: 'D',
    name: 'Dirk Smit',
    subject: 'Heeft u dit product ook in maat L?',
    time: '11:38',
    status: 'queue',
  },
];

const ERHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-32 pb-16 sm:pt-36 md:pt-42 xl:pt-[180px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(199,245,111,0.2)_0%,transparent_64%)]" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(180deg,rgba(5,17,24,0.08)_0%,rgba(5,17,24,0)_100%)]" />

      <div className="main-container relative z-10">
        <div className="text-center">
          <RevealAnimation delay={0.1}>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#C7F56F] px-5 py-2 text-sm font-semibold text-secondary">
              14 dagen gratis proberen - geen creditcard nodig
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <h1 className="mx-auto mb-5 max-w-[760px]">
              Uw inbox bijgehouden.
              <br className="hidden sm:block" />
              Uw klanten geholpen. Automatisch.
            </h1>
          </RevealAnimation>

          <RevealAnimation delay={0.3}>
            <p className="mx-auto mb-8 max-w-[560px] text-secondary/60 dark:text-accent/60">
              Email Reply koppelt aan uw Gmail en schrijft direct een concept voor elke klantmail. U keurt goed -
              geen enkel bericht gaat eruit zonder uw akkoord.
            </p>
          </RevealAnimation>

          <RevealAnimation delay={0.4}>
            <div className="mb-4 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Link href="/contact" className="btn btn-md btn-secondary w-full normal-case before:content-none sm:w-auto">
                Start 14 dagen gratis
              </Link>
              <a
                href="#how-it-works"
                className="flex items-center gap-1.5 text-sm font-medium text-secondary/50 transition-colors hover:text-secondary">
                Bekijk hoe het werkt
                <svg className="size-4" fill="none" viewBox="0 0 16 16">
                  <path
                    d="M8 3v10M3 9l5 5 5-5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </RevealAnimation>

          <RevealAnimation delay={0.45}>
            <p className="mb-14 text-xs text-secondary/35">Gmail OAuth - koppelen in 2 minuten. Annuleer altijd.</p>
          </RevealAnimation>

          <RevealAnimation delay={0.58}>
            <div className="mx-auto max-w-[740px]">
              <div className="relative overflow-hidden rounded-[26px] border border-gray-200 bg-white shadow-[0_20px_70px_rgba(3,20,30,0.14)]">
                <div className="pointer-events-none absolute inset-x-3 top-0 h-16 rounded-b-3xl bg-gradient-to-b from-[#C7F56F]/35 to-transparent" style={{ animation: 'erHeroScan 4.4s ease-in-out infinite' }} />

                <div className="pointer-events-none absolute -top-6 left-5 rounded-full border border-[#C7F56F]/40 bg-white px-3 py-1 text-[11px] font-semibold text-secondary shadow-sm" style={{ animation: 'erHeroFloat 5.4s ease-in-out infinite' }}>
                  +42% snellere responstijd
                </div>
                <div className="pointer-events-none absolute -right-3 top-16 rounded-full border border-gray-200 bg-white px-3 py-1 text-[11px] font-semibold text-secondary shadow-sm" style={{ animation: 'erHeroFloatSlow 6.3s ease-in-out infinite' }}>
                  3 nieuwe concepten klaar
                </div>

                <div className="flex items-center gap-1.5 border-b border-gray-100 bg-gray-50 px-4 py-3 text-left">
                  <span className="size-3 rounded-full bg-red-400/70" />
                  <span className="size-3 rounded-full bg-yellow-400/70" />
                  <span className="size-3 rounded-full bg-green-400/70" />
                  <span className="ml-4 text-xs font-medium text-gray-400">Gmail - Inbox (3 nieuw)</span>
                </div>

                <div className="divide-y divide-gray-50">
                  {inboxRows.map((email, index) => (
                    <div
                      key={email.name}
                      className={`flex items-center gap-3 px-4 py-3 text-left ${index === 1 ? 'bg-[#f9ffe8]' : ''}`}
                      style={{ animation: `erHeroRow 6.6s ease-in-out ${index * 0.48}s infinite` }}>
                      <div className="flex size-8 shrink-0 items-center justify-center rounded-full bg-gray-100 text-xs font-semibold text-gray-500">
                        {email.init}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="text-sm font-semibold text-secondary">{email.name}</span>
                          <span className="shrink-0 text-xs text-gray-400">{email.time}</span>
                        </div>
                        <p className="truncate text-xs text-secondary/50">{email.subject}</p>
                      </div>
                      <div
                        className={`shrink-0 rounded-full px-2.5 py-0.5 text-[10px] font-semibold ${email.status === 'ready' ? 'bg-[#C7F56F] text-secondary' : 'bg-gray-100 text-gray-400'}`}>
                        {email.status === 'ready' ? 'AI klaar' : 'In wachtrij'}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-[#C7F56F]/30 bg-[#f9ffe8] px-5 py-4 text-left">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="flex size-5 items-center justify-center rounded-full bg-[#C7F56F] text-secondary" style={{ animation: 'erHeroPulse 2.2s ease-in-out infinite' }}>
                      <svg className="size-3" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8l3 3 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <span className="text-xs font-semibold text-secondary">AI-concept klaar voor: Maria van Dijk</span>
                    <span className="ml-auto text-[10px] text-secondary/40">gegenereerd in 2s</span>
                  </div>

                  <div className="mb-3 rounded-xl border border-gray-100 bg-white p-3 text-xs leading-relaxed text-secondary/70">
                    <p>
                      Goedemiddag Maria,
                      <br />
                      <br />
                      Bedankt voor uw bericht. Uiteraard helpen wij u graag met de retour van uw bestelling. U kunt uw
                      retour aanmelden via onze retourpagina...
                    </p>
                    <div className="mt-3 space-y-1.5">
                      <div className="relative h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="absolute inset-y-0 left-0 w-1/3 rounded-full bg-[#C7F56F]/70"
                          style={{ animation: 'erHeroDraft 2.8s ease-in-out infinite' }}
                        />
                      </div>
                      <div className="relative h-2 overflow-hidden rounded-full bg-gray-100">
                        <div
                          className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-[#C7F56F]/45"
                          style={{ animation: 'erHeroDraft 3.4s ease-in-out 0.4s infinite' }}
                        />
                      </div>
                    </div>
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

      <style jsx>{`
        @keyframes erHeroFloat {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes erHeroFloatSlow {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes erHeroScan {
          0% {
            transform: translateY(-140%);
            opacity: 0;
          }
          12% {
            opacity: 1;
          }
          76% {
            opacity: 0.8;
          }
          100% {
            transform: translateY(560%);
            opacity: 0;
          }
        }

        @keyframes erHeroRow {
          0%,
          100% {
            transform: translateX(0px);
          }
          40% {
            transform: translateX(2px);
          }
          60% {
            transform: translateX(-1px);
          }
        }

        @keyframes erHeroPulse {
          0%,
          100% {
            opacity: 0.8;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.08);
          }
        }

        @keyframes erHeroDraft {
          0%,
          100% {
            transform: translateX(0%);
          }
          50% {
            transform: translateX(120%);
          }
        }
      `}</style>
    </section>
  );
};

ERHero.displayName = 'ERHero';
export default ERHero;
