import RevealAnimation from '../animation/RevealAnimation';

const SlaContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3">
            <h2>Service Level Agreement (SLA)</h2>
            <div className="space-y-4">
              <p>
                Deze Service Level Agreement beschrijft de serviceniveaus die SequenceFlow garandeert voor de flows
                die zij beheert. Wij begrijpen dat uw bedrijfsprocessen afhankelijk kunnen zijn van de flows die wij
                voor u beheren, en nemen die verantwoordelijkheid serieus.
              </p>
              <p>Laatste update: februari 2026</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h3>1. Beschikbaarheid (uptime)</h3>
              <p>
                SequenceFlow streeft naar een beschikbaarheid van{' '}
                <strong className="text-secondary dark:text-accent font-medium">99% per kalendermaand</strong> voor alle
                actieve flows. Geplande onderhoudsmomenten worden niet meegerekend in de beschikbaarheidsberekening,
                mits zij vooraf worden aangekondigd.
              </p>
              <p>
                De beschikbaarheid is mede afhankelijk van de uptime van externe diensten waaraan de flows zijn
                gekoppeld (zoals uw CRM, e-mailprovider of ERP). Uitval van externe systemen valt buiten de
                verantwoordelijkheid van SequenceFlow.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>2. Monitoring</h3>
              <p>
                Alle actieve flows worden continu gemonitord. SequenceFlow ontvangt automatisch een melding bij:
              </p>
              <ul>
                <li>Uitval of foutmeldingen in een flow.</li>
                <li>Afwijkingen in het verwachte volume of de uitvoeringssnelheid.</li>
                <li>Mislukte integraties met externe systemen.</li>
              </ul>
              <p>
                Monitoring vindt plaats 24/7. Klanten hoeven storingen niet zelf te melden — wij detecteren problemen
                proactief.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>3. Responsetijden bij storingen</h3>
              <p>
                Na detectie van een storing hanteren wij de volgende responsetijden (op werkdagen, tenzij anders
                overeengekomen):
              </p>
              <ul>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Kritische storing</strong> (flow
                  volledig niet-functioneel, directe omzetimpact):{' '}
                  <strong className="text-secondary dark:text-accent font-medium">binnen 4 uur</strong> eerste respons,
                  herstel binnen 24 uur.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Grote verstoring</strong> (flow
                  gedeeltelijk niet-functioneel): eerste respons{' '}
                  <strong className="text-secondary dark:text-accent font-medium">binnen 1 werkdag</strong>, herstel
                  binnen 3 werkdagen.
                </li>
                <li>
                  <strong className="text-secondary dark:text-accent font-medium">Kleine verstoring</strong> (flow
                  functioneert, maar met afwijkingen): opgelost in de eerstvolgende onderhoudscyclus.
                </li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Gepland onderhoud</h3>
              <p>
                SequenceFlow plant onderhoud bij voorkeur buiten kantooruren (maandag t/m vrijdag, 08:00–18:00 CET).
                Geplande onderhoudsmomenten worden minimaal{' '}
                <strong className="text-secondary dark:text-accent font-medium">48 uur van tevoren</strong> per e-mail
                aangekondigd. Spoedeisend onderhoud wegens beveiligingslekken kan zonder voorafgaande aankondiging
                worden uitgevoerd.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Communicatie bij storingen</h3>
              <p>
                Bij een kritische storing informeert SequenceFlow de klant actief per e-mail over de status en het
                verwachte herstelmoment. Na herstel ontvangt de klant een beknopt incidentrapport met de oorzaak en
                de genomen maatregelen.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Onderhoud en optimalisatie</h3>
              <p>
                Het maandelijks abonnement omvat regulier onderhoud, bugfixes en optimalisaties. Aanpassingen aan de
                flow als gevolg van wijzigingen in externe API&apos;s of systemen van derden worden door SequenceFlow
                proactief opgepakt als onderdeel van het abonnement.
              </p>
              <p>
                Nieuwe functionaliteiten of structurele uitbreidingen van de flow vallen buiten regulier onderhoud en
                worden separaat geoffreerd.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>7. Escalatie</h3>
              <p>
                Indien een klant niet tevreden is met de afhandeling van een storing, kan escalatie plaatsvinden door
                contact op te nemen via{' '}
                <a href="mailto:hallo@sequenceflow.io" className="text-secondary dark:text-accent">
                  hallo@sequenceflow.io
                </a>{' '}
                met als onderwerp &quot;Escalatie — [naam flow]&quot;. SequenceFlow streeft ernaar escalaties binnen
                1 werkdag op te pakken.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>8. Uitsluitingen</h3>
              <p>De SLA-garanties zijn niet van toepassing bij:</p>
              <ul>
                <li>Uitval van externe diensten en API&apos;s buiten de controle van SequenceFlow.</li>
                <li>Storingen veroorzaakt door onjuist gebruik of niet-geautoriseerde wijzigingen door de klant.</li>
                <li>Overmacht (force majeure).</li>
                <li>Niet-betaling waardoor diensten zijn opgeschort.</li>
              </ul>
            </div>
          </RevealAnimation>
        </article>
      </div>
    </section>
  );
};

export default SlaContent;
