import RevealAnimation from '@/components/animation/RevealAnimation';

const benefits = [
  {
    metric: '4+',
    unit: 'uur',
    title: 'Bespaard per dag',
    desc: 'Geen handmatig typen meer. Uw team focust op werk dat er echt toe doet — niet op routineantwoorden.',
  },
  {
    metric: '3×',
    unit: '',
    title: 'Snellere responstijd',
    desc: 'AI genereert concepten in seconden. Uw klanten merken het verschil nog voor zij ongeduldig worden.',
  },
  {
    metric: '100%',
    unit: '',
    title: 'Consistent antwoorden',
    desc: 'Elk antwoord volgt uw kennisbank en beleid. Altijd de juiste toon, ongeacht wie er aanwezig is.',
  },
  {
    metric: '0',
    unit: '',
    title: 'Extra personeel nodig',
    desc: 'Schaal uw klantenservice mee met uw groei — zonder de personeelskosten te verdubbelen.',
  },
];

const ERBenefits = () => {
  return (
    <section className="bg-background-3 py-[80px] dark:bg-background-7 md:py-[120px]">
      <div className="main-container">
        {/* heading */}
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4 inline-block">Resultaten</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[460px]">Wat u er concreet aan heeft</h2>
          </RevealAnimation>
        </div>

        {/* benefit grid */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {benefits.map((b, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.1}>
              <div className="flex items-start gap-6 rounded-2xl bg-white p-7 dark:bg-background-6">
                <div className="shrink-0 text-left">
                  <div className="leading-none text-[42px] font-bold text-[#C7F56F]">
                    {b.metric}
                    {b.unit && <span className="text-[28px]">{b.unit}</span>}
                  </div>
                </div>
                <div>
                  <h3 className="text-heading-6 mb-1.5">{b.title}</h3>
                  <p className="text-sm leading-relaxed text-secondary/60 dark:text-accent/60">{b.desc}</p>
                </div>
              </div>
            </RevealAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

ERBenefits.displayName = 'ERBenefits';
export default ERBenefits;
