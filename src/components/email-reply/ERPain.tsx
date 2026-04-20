import RevealAnimation from '@/components/animation/RevealAnimation';

const pains = [
  {
    emoji: '🔁',
    title: 'Dezelfde vragen, elke dag opnieuw',
    desc: 'Uw team beantwoordt identieke vragen over en over. Uur na uur, dag na dag.',
  },
  {
    emoji: '⏳',
    title: 'Responstijden die oplopen',
    desc: 'Hoe meer u groeit, hoe groter de achterstand. Klanten wachten, frustratie stijgt.',
  },
  {
    emoji: '📉',
    title: 'Inconsistente antwoorden',
    desc: 'Niet iedereen in uw team communiceert hetzelfde. Kwaliteit varieert per medewerker.',
  },
  {
    emoji: '💸',
    title: 'Supportkosten die niet schalen',
    desc: 'Meer e-mails = meer personeel. De kosten groeien mee met uw succes.',
  },
  {
    emoji: '😤',
    title: 'Experts die routinewerk doen',
    desc: 'Uw team verspilt talent aan repetitief werk dat ook geautomatiseerd kan worden.',
  },
];

const ERPain = () => {
  return (
    <section className="bg-secondary py-[80px] md:py-[120px]">
      <div className="main-container">
        {/* heading */}
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="mb-4 inline-block rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/50">
              Herkent u dit?
            </span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[580px] text-white">De inbox die nooit kleiner wordt</h2>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto mt-3 max-w-[460px] text-white/45">
              Elke groeiende onderneming bereikt een punt waarop e-mailsupport een bottleneck wordt. U bent niet de enige.
            </p>
          </RevealAnimation>
        </div>

        {/* pain cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {pains.map((pain, i) => (
            <RevealAnimation key={i} delay={0.1 + i * 0.08}>
              <div className={`rounded-2xl border border-white/8 bg-white/5 p-6 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}>
                <span className="mb-3 block text-2xl">{pain.emoji}</span>
                <h3 className="text-heading-6 mb-2 text-white">{pain.title}</h3>
                <p className="text-sm leading-relaxed text-white/45">{pain.desc}</p>
              </div>
            </RevealAnimation>
          ))}
        </div>

        {/* solution bridge */}
        <RevealAnimation delay={0.6}>
          <div className="mx-auto mt-16 max-w-[600px] rounded-2xl border border-[#C7F56F]/25 bg-[#C7F56F]/8 p-8 text-center">
            <span className="mb-3 block text-3xl">⚡</span>
            <h3 className="text-heading-5 mb-3 text-white">Er is een betere manier.</h3>
            <p className="text-sm leading-relaxed text-white/55">
              Email Reply automatiseert uw inbox zonder dat u de controle verliest. AI schrijft de concepten — u beslist wat er verstuurd wordt. Altijd.
            </p>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ERPain.displayName = 'ERPain';
export default ERPain;
