import RevealAnimation from '../animation/RevealAnimation';

const PrivacyverklaringContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3">
            <h2>Privacyverklaring</h2>
            <div className="space-y-4">
              <p>
                SequenceFlow hecht grote waarde aan de privacy van haar klanten en bezoekers. In deze
                Privacyverklaring leggen wij uit welke persoonsgegevens wij verzamelen, waarom, en hoe wij daarmee
                omgaan. Wij handelen in overeenstemming met de Algemene Verordening Gegevensbescherming (AVG).
              </p>
              <p>Laatste update: februari 2026</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h3>1. Wie zijn wij?</h3>
              <p>
                SequenceFlow is een Nederlandse onderneming gespecialiseerd in Flow-as-a-Service: het bouwen,
                implementeren en beheren van autonome bedrijfsworkflows voor het MKB. Wij zijn de
                verwerkingsverantwoordelijke voor de persoonsgegevens die via onze website en diensten worden verzameld.
              </p>
              <p>
                Contactgegevens:{' '}
                <a href="mailto:hallo@sequenceflow.io" className="text-secondary dark:text-accent">
                  hallo@sequenceflow.io
                </a>{' '}
                — sequenceflow.io
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>2. Welke gegevens verzamelen wij?</h3>
              <p>Wij verzamelen de volgende categorieën persoonsgegevens:</p>
              <ul>
                <li><strong className="text-secondary dark:text-accent font-medium">Contactgegevens:</strong> naam, e-mailadres, telefoonnummer, bedrijfsnaam en website-URL — verzameld via het Flow Scan formulier of direct contact.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Gebruiksgegevens:</strong> IP-adres, browsertype, paginabezoeken en interacties op onze website via analysediensten.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Klantdata:</strong> bedrijfsinformatie die nodig is om flows te bouwen en te beheren. Dit betreft geen persoonsgegevens van de eindklanten van onze opdrachtgevers, tenzij vastgelegd in een verwerkersovereenkomst.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>3. Waarom verwerken wij uw gegevens?</h3>
              <p>Wij verwerken persoonsgegevens voor de volgende doeleinden:</p>
              <ul>
                <li>Het uitvoeren van de overeenkomst en het leveren van onze diensten.</li>
                <li>Het beantwoorden van vragen en het opvolgen van ingevulde Flow Scan formulieren.</li>
                <li>Het versturen van offertes en facturen.</li>
                <li>Het verbeteren van onze website en diensten op basis van gebruiksanalyses.</li>
                <li>Het nakomen van wettelijke verplichtingen.</li>
              </ul>
              <p>
                De rechtsgrondslag voor verwerking is in de meeste gevallen de uitvoering van een overeenkomst
                (art. 6 lid 1 sub b AVG) of ons gerechtvaardigd belang (art. 6 lid 1 sub f AVG).
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Hoe lang bewaren wij uw gegevens?</h3>
              <p>
                Wij bewaren persoonsgegevens niet langer dan noodzakelijk voor het doel waarvoor zij zijn verzameld.
                Klantgegevens worden bewaard gedurende de looptijd van de overeenkomst en tot 2 jaar daarna voor
                eventuele nakomende vragen. Financiële gegevens worden conform de wettelijke bewaarplicht 7 jaar
                bewaard.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Delen met derden</h3>
              <p>
                Wij verstrekken uw gegevens niet aan derden, tenzij dit noodzakelijk is voor de uitvoering van onze
                diensten of wettelijk verplicht. Wij maken gebruik van de volgende categorieën verwerkers:
              </p>
              <ul>
                <li>Infrastructuur- en hostingproviders (servers binnen de EU).</li>
                <li>Analysetools voor websitestatistieken.</li>
                <li>Automatiseringsplatformen die worden ingezet voor de flows (bijv. n8n, Make).</li>
              </ul>
              <p>
                Met alle verwerkers sluiten wij een verwerkersovereenkomst af conform de AVG-vereisten. Uw gegevens
                worden niet buiten de Europese Economische Ruimte (EER) verwerkt zonder passende waarborgen.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Uw rechten onder de AVG</h3>
              <p>Als betrokkene heeft u de volgende rechten:</p>
              <ul>
                <li><strong className="text-secondary dark:text-accent font-medium">Recht op inzage:</strong> u kunt opvragen welke gegevens wij van u verwerken.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Recht op rectificatie:</strong> u kunt onjuiste gegevens laten corrigeren.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Recht op verwijdering:</strong> u kunt verzoeken om verwijdering van uw gegevens.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Recht op bezwaar:</strong> u kunt bezwaar maken tegen verwerking op grond van gerechtvaardigd belang.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Recht op dataportabiliteit:</strong> u kunt uw gegevens in een machineleesbaar formaat ontvangen.</li>
              </ul>
              <p>
                U kunt uw rechten uitoefenen door een e-mail te sturen naar{' '}
                <a href="mailto:hallo@sequenceflow.io" className="text-secondary dark:text-accent">
                  hallo@sequenceflow.io
                </a>
                . Wij reageren binnen 30 dagen. Indien u niet tevreden bent over onze verwerking, heeft u het recht
                een klacht in te dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>7. Cookies</h3>
              <p>
                Onze website maakt gebruik van analytische cookies om het gebruik van de website te meten en te
                verbeteren. Wij plaatsen geen tracking- of advertentiecookies zonder uw toestemming. Bij uw eerste
                bezoek wordt u geïnformeerd over het gebruik van cookies.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>8. Wijzigingen</h3>
              <p>
                Wij behouden het recht deze Privacyverklaring te wijzigen. Materiële wijzigingen worden via de website
                kenbaar gemaakt. Wij adviseren deze pagina periodiek te raadplegen.
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default PrivacyverklaringContent;
