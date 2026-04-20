import RevealAnimation from '@/components/animation/RevealAnimation';

const testimonials = [
  {
    quote:
      'We beantwoorden nu 3x meer klantvragen per dag zonder extra personeel. Email Reply heeft onze supportflow volledig versneld.',
    name: 'Janine K.',
    role: 'Customer Success Manager',
  },
  {
    quote:
      'De goedkeuringsflow geeft ons vertrouwen dat elke e-mail past bij onze tone of voice. AI doet het werk, wij houden de regie.',
    name: 'Thomas R.',
    role: 'Support Lead',
  },
  {
    quote:
      'Onze kennisbank doet nu het zware werk. De AI vangt het grootste deel van de standaardvragen af nog voor wij hoeven in te grijpen.',
    name: 'Lisanne M.',
    role: 'Operations Manager',
  },
];

const Stars = () => (
  <div className="mb-4 flex gap-1" aria-label="5 sterren">
    {[...Array(5)].map((_, i) => (
      <svg key={i} className="size-[15px]" viewBox="0 0 16 16" fill="none">
        <path
          d="M7.25672 0.486272C7.53172 -0.162091 8.46832 -0.162091 8.74332 0.486274L10.3663 4.31303C10.4823 4.58637 10.7445 4.77313 11.0454 4.79678L15.2582 5.12799C15.9719 5.18411 16.2614 6.05763 15.7175 6.51446L12.5079 9.2107C12.2786 9.40331 12.1784 9.70552 12.2485 9.99343L13.2291 14.0249C13.3952 14.7079 12.6375 15.2478 12.0264 14.8818L8.41965 12.7214C8.16202 12.5671 7.83802 12.5671 7.5804 12.7214L3.9736 14.8818C3.3625 15.2478 2.60477 14.7079 2.77091 14.0249L3.75155 9.99343C3.82159 9.70552 3.72147 9.40331 3.49221 9.2107L0.28245 6.51446C-0.261375 6.05763 0.0280544 5.18411 0.741835 5.12799L4.9547 4.79678C5.25561 4.77313 5.51774 4.58637 5.63367 4.31303L7.25672 0.486272Z"
          fill="#C7F56F"
        />
      </svg>
    ))}
  </div>
);

const ERSocialProof = () => {
  return (
    <section className="bg-white py-[80px] md:py-[120px]">
      <div className="main-container">
        <div className="mb-14 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4 inline-block">Klanten aan het woord</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h2 className="mx-auto max-w-[480px]">Wat onze klanten zeggen</h2>
          </RevealAnimation>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <RevealAnimation key={t.name} delay={0.2 + i * 0.1}>
              <article className="flex min-h-[220px] flex-col justify-between rounded-2xl border border-gray-100 p-6">
                <div>
                  <Stars />
                  <p className="text-sm leading-relaxed text-secondary/75">&quot;{t.quote}&quot;</p>
                </div>
                <div className="mt-5 border-t border-gray-100 pt-4">
                  <p className="text-sm font-semibold text-secondary">{t.name}</p>
                  <p className="text-xs text-secondary/50">{t.role}</p>
                </div>
              </article>
            </RevealAnimation>
          ))}
        </div>

        <RevealAnimation delay={0.6}>
          <div className="mt-10 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C7F56F] px-5 py-2 text-sm font-semibold text-secondary">
              Al 40+ MKB-bedrijven gingen u voor
            </span>
          </div>
        </RevealAnimation>
      </div>
    </section>
  );
};

ERSocialProof.displayName = 'ERSocialProof';
export default ERSocialProof;
