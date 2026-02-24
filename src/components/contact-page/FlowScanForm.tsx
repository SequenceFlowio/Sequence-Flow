'use client';

import { useState } from 'react';

const WEBHOOK_URL = 'PLACEHOLDER_WEBHOOK_URL';

const SECTORS = [
  'E-commerce',
  'Zakelijke dienstverlening',
  'Logistiek',
  'Recruitment',
  'Marketing & Communicatie',
  'Anders',
];

const MEDEWERKERS_OPTIONS = ['10–20', '20–50', '50–100'];

const PIJNPUNTEN = [
  'Handmatige dataverwerking',
  'Klantopvolging & leads',
  'Interne rapportages',
  'Klantenservice & tickets',
  'Systeemkoppelingen',
];

const URGENTIE_OPTIONS = [
  {
    id: 'nice',
    emoji: '🟡',
    label: 'Nice to have',
    selectedClass: 'border-yellow-400 bg-yellow-50 dark:bg-yellow-900/10',
  },
  {
    id: 'important',
    emoji: '🟠',
    label: 'Belangrijk maar niet urgent',
    selectedClass: 'border-orange-400 bg-orange-50 dark:bg-orange-900/10',
  },
  {
    id: 'blocker',
    emoji: '🔴',
    label: 'Dit blokkeert onze groei',
    selectedClass: 'border-red-400 bg-red-50 dark:bg-red-900/10',
  },
];

const STEP_TITLES = ['Vertel over je bedrijf', 'Waar zit de pijn?', 'Bijna klaar'];

const INPUT_CLASS =
  'dark:focus-visible:border-stroke-4/20 dark:border-stroke-7 dark:bg-background-6 border-stroke-3 bg-background-1 text-tagline-2 placeholder:text-secondary/60 focus:border-secondary placeholder:text-tagline-2 dark:placeholder:text-accent/60 dark:text-accent h-[48px] w-full rounded-full border px-[18px] py-3 font-normal placeholder:font-normal focus:outline-none xl:h-[41px]';

const LABEL_CLASS = 'text-tagline-2 text-secondary dark:text-accent mb-2 block font-medium';

const FlowScanForm = () => {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Step 1
  const [bedrijfsnaam, setBedrijfsnaam] = useState('');
  const [sector, setSector] = useState('');
  const [medewerkers, setMedewerkers] = useState('');

  // Step 2
  const [pijnpunten, setPijnpunten] = useState<string[]>([]);
  const [urgentie, setUrgentie] = useState('');

  // Step 3
  const [voornaam, setVoornaam] = useState('');
  const [email, setEmail] = useState('');
  const [telefoon, setTelefoon] = useState('');

  const validateStep = (currentStep: number) => {
    const newErrors: Record<string, string> = {};

    if (currentStep === 1) {
      if (!bedrijfsnaam.trim()) newErrors.bedrijfsnaam = 'Bedrijfsnaam is verplicht';
      if (!sector) newErrors.sector = 'Selecteer een sector';
      if (!medewerkers) newErrors.medewerkers = 'Selecteer het aantal medewerkers';
    }

    if (currentStep === 2) {
      if (pijnpunten.length === 0) newErrors.pijnpunten = 'Selecteer minimaal één optie';
      if (!urgentie) newErrors.urgentie = 'Selecteer een urgentieniveau';
    }

    if (currentStep === 3) {
      if (!voornaam.trim()) newErrors.voornaam = 'Voornaam is verplicht';
      if (!email.trim()) {
        newErrors.email = 'E-mailadres is verplicht';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        newErrors.email = 'Voer een geldig e-mailadres in';
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => s + 1);
  };

  const handleBack = () => {
    setErrors({});
    setStep((s) => s - 1);
  };

  const togglePijnpunt = (item: string) => {
    setPijnpunten((prev) => {
      if (prev.includes(item)) return prev.filter((p) => p !== item);
      if (prev.length >= 2) return prev;
      return [...prev, item];
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setLoading(true);
    try {
      await fetch(WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ bedrijfsnaam, sector, medewerkers, pijnpunten, urgentie, voornaam, email, telefoon }),
      });
    } catch (_) {
      // fail silently
    }
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section
      className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-20 xl:pt-[180px] xl:pb-[100px]"
      aria-label="Gratis Flow Scan">
      <div className="main-container">
        <div className="space-y-10">
          {/* Heading */}
          <div className="mx-auto max-w-[640px] space-y-3 text-center">
            <h1>Gratis Flow Scan</h1>
            <p>Ontdek in 30 minuten hoeveel tijd je bedrijf verliest aan handmatig werk.</p>
          </div>

          {/* Social proof */}
          <p className="text-tagline-2 text-secondary/50 dark:text-accent/50 text-center font-normal">
            Al 40+ MKB-bedrijven gingen je voor
          </p>

          {/* Form card */}
          <div className="mx-auto w-full max-w-[600px]">
            <div className="dark:bg-background-6 w-full rounded-4xl bg-white p-6 md:p-8 lg:p-11">
              {submitted ? (
                /* Success state */
                <div className="flex flex-col items-center justify-center gap-6 py-12 text-center">
                  <div className="flex size-16 items-center justify-center rounded-full bg-[#C7F56F]/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-8"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-heading-5">Goed bezig, {voornaam}.</h3>
                    <p className="text-secondary/60 dark:text-accent/60 mx-auto max-w-sm">
                      We nemen vandaag nog contact met je op.
                    </p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  {/* Step indicator */}
                  <div className="mb-8">
                    <p className="text-tagline-2 text-secondary/60 dark:text-accent/60 mb-3">
                      Stap {step} van 3 — {STEP_TITLES[step - 1]}
                    </p>
                    <div className="h-1 w-full rounded-full bg-background-12 dark:bg-background-5">
                      <div
                        className="h-1 rounded-full bg-[#C7F56F] transition-all duration-500 ease-out"
                        style={{ width: `${(step / 3) * 100}%` }}
                      />
                    </div>
                  </div>

                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      {/* Bedrijfsnaam */}
                      <div>
                        <label htmlFor="bedrijfsnaam" className={LABEL_CLASS}>
                          Bedrijfsnaam
                        </label>
                        <input
                          id="bedrijfsnaam"
                          type="text"
                          placeholder="Vul de naam van uw bedrijf in"
                          value={bedrijfsnaam}
                          onChange={(e) => setBedrijfsnaam(e.target.value)}
                          className={INPUT_CLASS}
                        />
                        {errors.bedrijfsnaam && (
                          <p className="text-tagline-3 mt-1 text-red-500">{errors.bedrijfsnaam}</p>
                        )}
                      </div>

                      {/* Sector */}
                      <div>
                        <label htmlFor="sector" className={LABEL_CLASS}>
                          Sector
                        </label>
                        <div className="relative">
                          <select
                            id="sector"
                            value={sector}
                            onChange={(e) => setSector(e.target.value)}
                            className={`${INPUT_CLASS} cursor-pointer appearance-none`}>
                            <option value="" disabled>
                              Selecteer een sector
                            </option>
                            {SECTORS.map((s) => (
                              <option key={s} value={s}>
                                {s}
                              </option>
                            ))}
                          </select>
                          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width={16}
                              height={16}
                              viewBox="0 0 16 16"
                              fill="none">
                              <path
                                d="M4 6L8 10L12 6"
                                stroke="currentColor"
                                strokeOpacity="0.4"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          </div>
                        </div>
                        {errors.sector && <p className="text-tagline-3 mt-1 text-red-500">{errors.sector}</p>}
                      </div>

                      {/* Aantal medewerkers */}
                      <div>
                        <p className={LABEL_CLASS}>Aantal medewerkers</p>
                        <div className="grid grid-cols-3 gap-3">
                          {MEDEWERKERS_OPTIONS.map((option) => (
                            <button
                              key={option}
                              type="button"
                              onClick={() => setMedewerkers(option)}
                              className={`rounded-xl border px-4 py-3 text-center font-normal transition-all duration-200 ${
                                medewerkers === option
                                  ? 'border-[#C7F56F] bg-[#C7F56F]/10 font-medium text-secondary dark:text-accent'
                                  : 'border-stroke-3 dark:border-stroke-7 text-secondary/60 dark:text-accent/60 hover:border-secondary/20'
                              }`}>
                              <span className="text-tagline-2">{option}</span>
                            </button>
                          ))}
                        </div>
                        {errors.medewerkers && (
                          <p className="text-tagline-3 mt-1 text-red-500">{errors.medewerkers}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-8">
                      {/* Pijnpunten */}
                      <div>
                        <p className={LABEL_CLASS}>
                          Wat kost jullie de meeste tijd?{' '}
                          <span className="text-secondary/40 dark:text-accent/40 font-normal">(max. 2)</span>
                        </p>
                        <div className="space-y-3">
                          {PIJNPUNTEN.map((item) => {
                            const selected = pijnpunten.includes(item);
                            const blocked = !selected && pijnpunten.length >= 2;
                            return (
                              <button
                                key={item}
                                type="button"
                                onClick={() => !blocked && togglePijnpunt(item)}
                                disabled={blocked}
                                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                                  selected
                                    ? 'border-[#C7F56F] bg-[#C7F56F]/10'
                                    : blocked
                                      ? 'border-stroke-3 dark:border-stroke-7 cursor-not-allowed opacity-40'
                                      : 'border-stroke-3 dark:border-stroke-7 hover:border-secondary/20 cursor-pointer'
                                }`}>
                                {/* Checkbox visual */}
                                <span
                                  className={`flex size-5 shrink-0 items-center justify-center rounded border transition-colors ${
                                    selected
                                      ? 'border-[#C7F56F] bg-[#C7F56F]'
                                      : 'border-stroke-3 dark:border-stroke-7'
                                  }`}>
                                  {selected && (
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="size-3"
                                      viewBox="0 0 12 12"
                                      fill="none">
                                      <path
                                        d="M2 6L5 9L10 3"
                                        stroke="#1A1A1C"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                      />
                                    </svg>
                                  )}
                                </span>
                                <span
                                  className={`text-tagline-2 font-normal ${
                                    selected
                                      ? 'font-medium text-secondary dark:text-accent'
                                      : 'text-secondary/60 dark:text-accent/60'
                                  }`}>
                                  {item}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                        {errors.pijnpunten && (
                          <p className="text-tagline-3 mt-1 text-red-500">{errors.pijnpunten}</p>
                        )}
                      </div>

                      {/* Urgentie */}
                      <div>
                        <p className={LABEL_CLASS}>Urgentie</p>
                        <div className="space-y-3">
                          {URGENTIE_OPTIONS.map((option) => {
                            const selected = urgentie === option.id;
                            return (
                              <button
                                key={option.id}
                                type="button"
                                onClick={() => setUrgentie(option.id)}
                                className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                                  selected
                                    ? option.selectedClass
                                    : 'border-stroke-3 dark:border-stroke-7 hover:border-secondary/20 cursor-pointer'
                                }`}>
                                <span className="text-lg leading-none">{option.emoji}</span>
                                <span
                                  className={`text-tagline-2 font-normal ${
                                    selected
                                      ? 'font-medium text-secondary dark:text-accent'
                                      : 'text-secondary/60 dark:text-accent/60'
                                  }`}>
                                  {option.label}
                                </span>
                              </button>
                            );
                          })}
                        </div>
                        {errors.urgentie && <p className="text-tagline-3 mt-1 text-red-500">{errors.urgentie}</p>}
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-6">
                      {/* Voornaam */}
                      <div>
                        <label htmlFor="voornaam" className={LABEL_CLASS}>
                          Voornaam
                        </label>
                        <input
                          id="voornaam"
                          type="text"
                          placeholder="Vul uw voornaam in"
                          value={voornaam}
                          onChange={(e) => setVoornaam(e.target.value)}
                          className={INPUT_CLASS}
                        />
                        {errors.voornaam && <p className="text-tagline-3 mt-1 text-red-500">{errors.voornaam}</p>}
                      </div>

                      {/* E-mailadres */}
                      <div>
                        <label htmlFor="email" className={LABEL_CLASS}>
                          E-mailadres
                        </label>
                        <input
                          id="email"
                          type="email"
                          placeholder="Vul uw e-mailadres in"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          autoComplete="email"
                          className={INPUT_CLASS}
                        />
                        {errors.email && <p className="text-tagline-3 mt-1 text-red-500">{errors.email}</p>}
                      </div>

                      {/* Telefoonnummer */}
                      <div>
                        <label htmlFor="telefoon" className={LABEL_CLASS}>
                          Telefoonnummer{' '}
                          <span className="text-secondary/40 dark:text-accent/40 font-normal">(optioneel)</span>
                        </label>
                        <input
                          id="telefoon"
                          type="tel"
                          placeholder="Vul uw telefoonnummer in"
                          value={telefoon}
                          onChange={(e) => setTelefoon(e.target.value)}
                          autoComplete="tel"
                          className={INPUT_CLASS}
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation buttons */}
                  <div className={`mt-8 flex gap-3 ${step > 1 ? 'flex-row' : 'flex-col'}`}>
                    {step > 1 && (
                      <button
                        type="button"
                        onClick={handleBack}
                        className="btn btn-md btn-white flex-1 before:content-none first-letter:uppercase">
                        ← Vorige
                      </button>
                    )}
                    {step < 3 ? (
                      <button
                        type="button"
                        onClick={handleNext}
                        className={`btn btn-md btn-secondary hover:btn-primary before:content-none first-letter:uppercase ${step > 1 ? 'flex-1' : 'w-full'}`}>
                        Volgende →
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-md btn-secondary hover:btn-primary flex-1 before:content-none first-letter:uppercase disabled:opacity-60">
                        {loading ? 'Bezig...' : 'Start mijn Flow Scan →'}
                      </button>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FlowScanForm.displayName = 'FlowScanForm';
export default FlowScanForm;
