import RevealAnimation from '@/components/animation/RevealAnimation';
import type { ReactNode } from 'react';
import Marquee from 'react-fast-marquee';

interface PainItem {
  title: string;
  desc: string;
  placeholder: string;
  stat: string;
  icon: ReactNode;
}

const pains: PainItem[] = [
  {
    title: 'Dezelfde vragen, elke dag opnieuw',
    desc: 'Uw team beantwoordt identieke vragen over en over. Uur na uur, dag na dag.',
    placeholder: 'Inbox snapshot: herhaalde FAQ-mails',
    stat: '42% van alle tickets zijn repetitief',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <path d="M4 7h11M4 12h8M4 17h10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m17 9 3-3m0 0 3 3m-3-3v11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Responstijden die oplopen',
    desc: 'Hoe meer u groeit, hoe groter de achterstand. Klanten wachten, frustratie stijgt.',
    placeholder: 'Queue monitor: SLA loopt op',
    stat: 'Gem. wachttijd +63% in piekuren',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 8v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Inconsistente antwoorden',
    desc: 'Niet iedereen in uw team communiceert hetzelfde. Kwaliteit varieert per medewerker.',
    placeholder: 'Quality review: 3 verschillende tones',
    stat: '1 vraag, 3 verschillende antwoorden',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <path d="M6 17h12M8 13h8M10 9h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="m4 5 2 2 3-3M15 5l2 2 3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Supportkosten die niet schalen',
    desc: 'Meer e-mails betekent meer personeel. De kosten groeien mee met uw succes.',
    placeholder: 'Cost panel: stijgende headcount',
    stat: 'Kosten stijgen sneller dan omzet',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <path d="M6 16V9M12 16V6M18 16v-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Experts doen routinewerk',
    desc: 'Uw senior teamleden verliezen tijd aan standaardvragen in plaats van complexe cases.',
    placeholder: 'Team load board: senior op FAQs',
    stat: 'Tot 9 uur per week aan repetitief werk',
    icon: (
      <svg className="size-5" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.8" />
        <path d="M6 19c1.6-2 3.6-3 6-3s4.4 1 6 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const ERPain = () => {
  return (
    <section className="relative overflow-hidden bg-[#071417] py-[80px] md:py-[120px]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_15%_15%,rgba(199,245,111,0.18),transparent_52%),radial-gradient(ellipse_at_85%_90%,rgba(66,225,255,0.14),transparent_55%)]" />

      <div className="main-container relative z-10">
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold tracking-widest text-white/65 uppercase">
              Herken je dit?
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[700px] text-white">Uw support-team draait op volle toeren, maar de inbox blijft groeien</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-3 max-w-[560px] text-white/55">
              Deze bottlenecks zien we bij vrijwel elk groeiend SaaS- en e-commerce team. Daarom starten we met
              automatiseren waar de meeste frictie zit.
            </p>
          </RevealAnimation>
        </div>

        <RevealAnimation delay={0.4}>
          <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[0.03] p-4 sm:p-5">
            <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[#071417] to-transparent" />
            <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[#071417] to-transparent" />

            <Marquee autoFill pauseOnHover speed={34}>
              <div className="flex items-stretch gap-4 py-2 pr-4">
                {pains.map((pain) => (
                  <article
                    key={pain.title}
                    className="min-h-[280px] w-[320px] rounded-2xl border border-white/12 bg-[#0a1d23]/90 p-5 text-left shadow-[0_14px_40px_rgba(0,0,0,0.24)] backdrop-blur-xl">
                    <div className="mb-4 aspect-[16/9] rounded-xl border border-white/10 bg-[linear-gradient(140deg,rgba(255,255,255,0.05),rgba(255,255,255,0.01))] p-3">
                      <div className="relative flex h-full items-end rounded-lg border border-dashed border-white/20 bg-white/[0.02] p-3">
                        <div className="absolute top-3 left-3 h-2.5 w-16 rounded-full bg-white/15" />
                        <div className="absolute top-7 left-3 h-2.5 w-10 rounded-full bg-white/10" />
                        <span className="text-[11px] font-medium tracking-wide text-white/55 uppercase">{pain.placeholder}</span>
                      </div>
                    </div>

                    <div className="mb-2 flex items-center gap-2 text-white">
                      <span className="flex size-8 items-center justify-center rounded-lg bg-[#C7F56F] text-secondary">
                        {pain.icon}
                      </span>
                      <h3 className="text-base font-semibold">{pain.title}</h3>
                    </div>
                    <p className="text-sm leading-relaxed text-white/55">{pain.desc}</p>
                    <p className="mt-4 text-xs font-semibold text-[#C7F56F]">{pain.stat}</p>
                  </article>
                ))}
              </div>
            </Marquee>
          </div>
        </RevealAnimation>

        <RevealAnimation delay={0.55}>
          <div className="relative mx-auto mt-12 max-w-[760px]">
            <div className="pointer-events-none absolute -top-10 left-1/2 h-10 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#C7F56F]/80 to-transparent" />
            <div className="rounded-2xl border border-[#C7F56F]/30 bg-[#C7F56F]/10 p-7 text-center sm:p-9">
              <h3 className="text-heading-5 mb-3 text-white">Goed nieuws: dit is exact waar Email Reply het verschil maakt.</h3>
              <p className="text-sm leading-relaxed text-white/70">
                AI maakt direct een voorstel op basis van uw kennisbank, tone of voice en beleid. Uw team hoeft alleen
                nog te reviewen en versturen.
              </p>
            </div>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ERPain.displayName = 'ERPain';
export default ERPain;
