import RevealAnimation from '../animation/RevealAnimation';

const AcceptableUsePolicyContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3">
            <h2>Acceptable Use Policy</h2>
            <div className="space-y-4">
              <p>
                Deze Acceptable Use Policy (AUP) beschrijft wat als toegestaan en wat als ontoelaatbaar gebruik wordt
                beschouwd van de flows en diensten van SequenceFlow. De AUP is van toepassing op alle klanten en
                gebruikers van SequenceFlow&apos;s diensten.
              </p>
              <p>Laatste update: februari 2026</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h3>1. Toegestaan gebruik</h3>
              <p>
                De flows en diensten van SequenceFlow zijn bedoeld voor legale, zakelijke automatiseringsdoeleinden,
                waaronder:
              </p>
              <ul>
                <li>Automatisering van interne bedrijfsprocessen zoals dataverwerking, rapportages en workflows.</li>
                <li>Leadopvolging en CRM-synchronisatie in het kader van legitieme sales- en marketingactiviteiten.</li>
                <li>Klantenservice-automatisering op basis van rechtmatige klantinteracties.</li>
                <li>Financiële procesautomatisering binnen wettelijke kaders.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>2. Verboden gebruik</h3>
              <p>
                Het is niet toegestaan de flows of diensten van SequenceFlow te gebruiken voor de volgende doeleinden:
              </p>
              <ul>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Spam en ongewenste communicatie:</strong> het versturen van ongewenste e-mails, berichten of notificaties aan personen die daarvoor geen toestemming hebben gegeven.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Misleiding en fraude:</strong> het automatiseren van frauduleuze handelingen, phishing, identiteitsdiefstal of het verspreiden van misleidende informatie.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Illegale activiteiten:</strong> elke activiteit die in strijd is met Nederlandse of Europese wet- en regelgeving.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Schending van privacy:</strong> het verzamelen of verwerken van persoonsgegevens zonder rechtmatige grondslag of het omzeilen van de AVG.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Overbelasting van systemen:</strong> het opzettelijk genereren van buitensporig API-verkeer of het verstoren van de werking van externe systemen.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Doorverkoop zonder toestemming:</strong> het aanbieden van de flows of diensten van SequenceFlow aan derden zonder schriftelijke toestemming.
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>3. Verantwoordelijkheid van de klant</h3>
              <p>
                De klant is verantwoordelijk voor het gebruik van de flows binnen zijn of haar organisatie. Dit omvat
                het waarborgen dat medewerkers en subverwerkers die toegang hebben tot de flows, zich houden aan de
                bepalingen van deze AUP en de toepasselijke wetgeving.
              </p>
              <p>
                SequenceFlow is niet aansprakelijk voor schade die voortvloeit uit misbruik van de flows door de klant
                of derden aan wie de klant toegang heeft verleend.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Sancties bij overtreding</h3>
              <p>
                Bij (vermoeden van) overtreding van deze AUP behoudt SequenceFlow het recht om zonder voorafgaande
                kennisgeving:
              </p>
              <ul>
                <li>De betreffende flow tijdelijk op te schorten.</li>
                <li>Nader onderzoek in te stellen naar het gebruik.</li>
                <li>De overeenkomst met onmiddellijke ingang te ontbinden bij ernstige of herhaalde overtredingen.</li>
                <li>Relevante informatie te verstrekken aan bevoegde autoriteiten indien wettelijk verplicht.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Melden van misbruik</h3>
              <p>
                Vermoedt u misbruik van de diensten van SequenceFlow? Meld dit dan zo snel mogelijk via{' '}
                <a href="mailto:hallo@sequenceflow.io" className="text-secondary dark:text-accent">
                  hallo@sequenceflow.io
                </a>
                . Wij nemen alle meldingen serieus en onderzoeken deze vertrouwelijk.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Wijzigingen in deze AUP</h3>
              <p>
                SequenceFlow behoudt het recht deze AUP te wijzigen. Materiële wijzigingen worden minimaal 14 dagen van
                tevoren per e-mail gecommuniceerd aan actieve klanten. Voortgezet gebruik van de diensten na
                inwerkingtreding van de wijzigingen geldt als acceptatie van de nieuwe AUP.
              </p>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default AcceptableUsePolicyContent;
