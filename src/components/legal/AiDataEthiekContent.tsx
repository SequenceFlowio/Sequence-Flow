import RevealAnimation from '../animation/RevealAnimation';

const AiDataEthiekContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3">
            <h2>AI &amp; Data Ethiek</h2>
            <div className="space-y-4">
              <p>
                SequenceFlow maakt gebruik van AI-technologie om autonome workflows te bouwen en te beheren. Wij geloven
                dat AI een krachtig middel is — maar alleen als het verantwoord, transparant en eerlijk wordt ingezet.
                Op deze pagina leggen wij uit hoe wij omgaan met AI-modellen en klantdata.
              </p>
              <p>Laatste update: februari 2026</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h3>1. Onze principes</h3>
              <p>SequenceFlow hanteert de volgende kernprincipes bij de inzet van AI:</p>
              <ul>
                <li><strong className="text-secondary dark:text-accent font-medium">Transparantie:</strong> wij zijn open over welke AI-modellen wij inzetten en hoe zij worden gebruikt.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Dataminimalisatie:</strong> wij verwerken alleen de data die strikt noodzakelijk is voor de werking van de flows.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Menselijk toezicht:</strong> AI-beslissingen in kritische processen worden altijd beoordeeld door of gerapporteerd aan een mens (Human-on-the-loop).</li>
                <li><strong className="text-secondary dark:text-accent font-medium">AVG-conformiteit:</strong> alle AI-verwerking vindt plaats binnen de grenzen van de Europese privacywetgeving.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>2. Welke AI-modellen gebruiken wij?</h3>
              <p>
                SequenceFlow maakt gebruik van large language models (LLMs) van gerenommeerde aanbieders voor taken zoals
                tekstverwerking, classificatie, samenvatting en het opstellen van communicatie. De modellen worden ingezet
                als onderdeel van de flows die wij voor klanten bouwen.
              </p>
              <p>
                Wij maken een bewuste keuze voor aanbieders die de Europese privacywetgeving respecteren en contractuele
                garanties bieden over datagebruik. Wij evalueren onze modelkeuzes periodiek op basis van
                veiligheidsupdates en privacybeleid.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>3. Geen gebruik van klantdata voor modeltraining</h3>
              <p>
                <strong className="text-secondary dark:text-accent font-medium">
                  SequenceFlow gebruikt uw bedrijfsdata en de data van uw klanten nooit voor de training van
                  AI-modellen.
                </strong>{' '}
                Data die door de flows wordt verwerkt, wordt uitsluitend gebruikt voor de uitvoering van de specifieke
                flow-taak en wordt niet opgeslagen voor trainings- of analysedoeleinden buiten de flow.
              </p>
              <p>
                Wij kiezen bewust voor API-gebaseerde integraties met AI-aanbieders die contractueel garanderen dat
                API-input niet wordt gebruikt voor modelverbetering. Dit is een expliciete vereiste in onze
                leverancierselectie.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Data-isolatie per klant</h3>
              <p>
                Elke klantomgeving is logisch geïsoleerd. Data van klant A wordt nooit vermengd met data van klant B.
                Flows worden gebouwd in afgescheiden omgevingen en toegang is beperkt tot medewerkers van SequenceFlow
                die rechtstreeks betrokken zijn bij die klant.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Menselijk toezicht (Human-on-the-loop)</h3>
              <p>
                SequenceFlow gelooft in AI als assistent, niet als vervanger van menselijk oordeel voor kritische
                beslissingen. In alle flows waar AI een beslissing neemt die aanzienlijke gevolgen kan hebben, wordt een
                menselijke controlemomenten ingebouwd of worden uitzonderingen geflagd voor handmatige beoordeling.
              </p>
              <p>
                Dit principe heet &quot;Human-on-the-loop&quot;: de AI verwerkt het volume, een mens beoordeelt de
                uitzonderingen en bewaakt de output op kwaliteit.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Logging en auditbaarheid</h3>
              <p>
                Alle acties die door flows worden uitgevoerd, worden gelogd. Klanten hebben op verzoek inzage in de
                logboeken van hun flows. Dit maakt het mogelijk om AI-beslissingen te auditen en na te gaan hoe een
                bepaalde uitkomst tot stand is gekomen.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>7. Eerlijkheid en niet-discriminatie</h3>
              <p>
                Wij bouwen flows zo dat zij geen ongerechtvaardigd onderscheid maken op basis van persoonskenmerken
                zoals geslacht, leeftijd, afkomst of religie. Bij het ontwerpen van AI-gestuurde beslissingslogica
                controleren wij op mogelijke bias en passen wij de configuratie aan waar nodig.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>8. Contact</h3>
              <p>
                Heeft u vragen over ons AI-gebruik of wilt u weten welke modellen worden ingezet in uw specifieke flow?
                Neem dan contact op via{' '}
                <a href="mailto:hallo@sequenceflow.io" className="text-secondary dark:text-accent">
                  hallo@sequenceflow.io
                </a>
                .
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default AiDataEthiekContent;
