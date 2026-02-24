import RevealAnimation from '../animation/RevealAnimation';

const AlgemeneVoorwaardenContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3">
            <h2>Algemene Voorwaarden</h2>
            <div className="space-y-4">
              <p>
                Deze Algemene Voorwaarden zijn van toepassing op alle diensten die worden aangeboden door{' '}
                <strong className="text-secondary dark:text-accent font-medium">SequenceFlow B.V.</strong>, gevestigd in
                Nederland, ingeschreven bij de Kamer van Koophandel. Door gebruik te maken van onze diensten gaat u
                akkoord met deze voorwaarden.
              </p>
              <p>Laatste update: februari 2026</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h3>1. Definities</h3>
              <ul>
                <li><strong className="text-secondary dark:text-accent font-medium">SequenceFlow:</strong> SequenceFlow B.V., aanbieder van Flow-as-a-Service.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Klant:</strong> de rechtspersoon of natuurlijk persoon die een overeenkomst sluit met SequenceFlow.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Flow:</strong> een autonome, geautomatiseerde workflow die SequenceFlow bouwt, implementeert en beheert.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Flow-as-a-Service (FaaS):</strong> het servicemodel waarbij SequenceFlow flows op abonnementsbasis levert.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Setup Fee:</strong> de eenmalige vergoeding voor het bouwen en implementeren van een flow.</li>
                <li><strong className="text-secondary dark:text-accent font-medium">Maandelijks abonnement:</strong> de periodieke vergoeding voor beheer, monitoring en optimalisatie.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>2. Toepasselijkheid</h3>
              <p>
                Deze voorwaarden zijn van toepassing op alle offertes, overeenkomsten en leveringen van SequenceFlow.
                Afwijkingen zijn alleen geldig indien schriftelijk overeengekomen. De toepasselijkheid van eventuele
                inkoop- of andere voorwaarden van de klant wordt uitdrukkelijk van de hand gewezen.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>3. Flow-as-a-Service model</h3>
              <p>
                SequenceFlow levert flows op basis van een tweeledig model: een eenmalige Setup Fee voor de bouw en
                implementatie, en een maandelijks abonnement voor onderhoud, monitoring en optimalisatie. Beide
                vergoedingen worden vastgelegd in de overeenkomst.
              </p>
              <p>
                SequenceFlow behoudt te allen tijde intellectueel eigendom over de gebouwde flows, tenzij schriftelijk
                anders overeengekomen. De klant verkrijgt een gebruiksrecht zolang het abonnement actief is.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Abonnementen en betalingen</h3>
              <p>
                Facturen voor het maandelijks abonnement worden vooraf verstuurd en dienen binnen 14 dagen te worden
                voldaan. Bij overschrijding van de betaaltermijn is SequenceFlow gerechtigd de dienstverlening tijdelijk
                op te schorten zonder aansprakelijkheid voor eventuele gevolgen.
              </p>
              <p>
                Prijswijzigingen worden minimaal 30 dagen van tevoren schriftelijk gecommuniceerd. Indexering conform
                CBS-loonindex is jaarlijks toegestaan zonder aankondiging.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Opzegtermijn en beëindiging</h3>
              <p>
                Het maandelijks abonnement kan door beide partijen worden opgezegd met een opzegtermijn van{' '}
                <strong className="text-secondary dark:text-accent font-medium">één kalendermaand</strong>, ingaand op
                de eerste dag van de volgende maand. Opzegging dient schriftelijk (per e-mail) te worden gedaan.
              </p>
              <p>
                Bij beëindiging levert SequenceFlow op verzoek documentatie over de gebouwde flows en integratielogica,
                zodat de klant de continuïteit kan waarborgen. SequenceFlow is niet verplicht de flow actief te houden
                na beëindiging van het abonnement.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Aansprakelijkheid</h3>
              <p>
                SequenceFlow is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of verlies van
                gegevens die voortvloeien uit het gebruik van de flows, tenzij er sprake is van opzet of grove schuld
                aan de zijde van SequenceFlow.
              </p>
              <p>
                De totale aansprakelijkheid van SequenceFlow is in alle gevallen beperkt tot het bedrag dat de klant in
                de drie maanden voorafgaand aan het schadetoebrengende feit heeft betaald.
              </p>
              <p>
                SequenceFlow is niet aansprakelijk voor storingen of fouten die veroorzaakt worden door derde partijen,
                waaronder API-providers, CRM-systemen, e-mailproviders of andere externe systemen waarmee de flows zijn
                geïntegreerd.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>7. Intellectueel eigendom</h3>
              <p>
                Alle door SequenceFlow ontwikkelde workflows, logica, configuraties en documentatie blijven intellectueel
                eigendom van SequenceFlow B.V. De klant ontvangt een niet-exclusief, niet-overdraagbaar gebruiksrecht
                voor de duur van het abonnement.
              </p>
              <p>
                Het is de klant niet toegestaan de flows te kopiëren, te reproduceren, te verkopen of beschikbaar te
                stellen aan derden zonder voorafgaande schriftelijke toestemming van SequenceFlow.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>8. Vertrouwelijkheid</h3>
              <p>
                Beide partijen verplichten zich tot geheimhouding van alle vertrouwelijke informatie die zij in het kader
                van de overeenkomst van de andere partij ontvangen. Deze verplichting geldt ook na beëindiging van de
                overeenkomst.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Toepasselijk recht en geschillen</h3>
              <p>
                Op alle overeenkomsten tussen SequenceFlow en de klant is Nederlands recht van toepassing. Geschillen
                worden in eerste instantie geprobeerd op te lossen door overleg. Indien dit niet lukt, worden geschillen
                voorgelegd aan de bevoegde rechtbank in het arrondissement waar SequenceFlow B.V. is gevestigd.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.7}>
            <div className="space-y-6">
              <h3>10. Contactgegevens</h3>
              <p>
                Voor vragen over deze Algemene Voorwaarden kunt u contact opnemen via{' '}
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

export default AlgemeneVoorwaardenContent;
