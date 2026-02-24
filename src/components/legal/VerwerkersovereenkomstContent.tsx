import RevealAnimation from '../animation/RevealAnimation';

const VerwerkersovereenkomstContent = () => {
  return (
    <section className="pt-32 pb-14 sm:pt-36 md:pt-42 md:pb-16 lg:pb-[88px] xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <RevealAnimation delay={0.1}>
          <div className="space-y-3">
            <h2>Verwerkersovereenkomst</h2>
            <div className="space-y-4">
              <p>
                Omdat SequenceFlow in het kader van haar dienstverlening persoonsgegevens verwerkt namens haar klanten,
                is een Verwerkersovereenkomst (VOK) wettelijk verplicht op grond van artikel 28 van de AVG. Deze pagina
                beschrijft de standaardvoorwaarden die van toepassing zijn. Een door beide partijen getekend exemplaar
                wordt opgeleverd bij aanvang van de samenwerking.
              </p>
              <p>Laatste update: februari 2026</p>
            </div>
          </div>
        </RevealAnimation>
        <article className="terms-conditions-body">
          <RevealAnimation delay={0.2}>
            <div className="space-y-6">
              <h3>1. Partijen en onderwerp</h3>
              <p>
                De verwerkersovereenkomst wordt gesloten tussen de klant (verwerkingsverantwoordelijke) en SequenceFlow
                B.V. (verwerker). SequenceFlow verwerkt persoonsgegevens uitsluitend in opdracht van de klant, voor de
                doeleinden die zijn vastgelegd in de Algemene Voorwaarden en de specifieke dienstbeschrijving.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>2. Aard en doel van de verwerking</h3>
              <p>
                SequenceFlow verwerkt persoonsgegevens die noodzakelijk zijn voor de uitvoering van de overeengekomen
                flows. Denk aan het doorzetten van leadgegevens naar een CRM-systeem, het verwerken van
                klantenserviceberichten of het synchroniseren van contactgegevens tussen systemen.
              </p>
              <p>
                SequenceFlow verwerkt de gegevens uitsluitend voor de vastgelegde doeleinden en niet voor eigen
                commerciële doeleinden. Er wordt geen gebruik gemaakt van de klantdata voor de training van AI-modellen.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <div className="space-y-6">
              <h3>3. Beveiligingsmaatregelen</h3>
              <p>SequenceFlow treft passende technische en organisatorische maatregelen om persoonsgegevens te beschermen:</p>
              <ul>
                <li>Versleutelde verbindingen (TLS/HTTPS) voor alle datatransport.</li>
                <li>Toegangscontrole op basis van het need-to-know principe.</li>
                <li>Opslag van data uitsluitend op servers binnen de Europese Economische Ruimte.</li>
                <li>Gebruik van geharde en gehostde automatiseringsomgevingen met beveiligde configuraties.</li>
                <li>Periodieke beoordeling van de beveiligingsmaatregelen.</li>
              </ul>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>4. Subverwerkers</h3>
              <p>
                SequenceFlow maakt gebruik van subverwerkers voor de infrastructuur en automatiseringstools die nodig
                zijn voor de flows. SequenceFlow informeert de klant over (wijzigingen in) de inzet van subverwerkers.
                De klant heeft het recht bezwaar te maken tegen de inzet van een nieuwe subverwerker.
              </p>
              <p>
                Alle subverwerkers zijn gevestigd binnen de EER of bieden passende waarborgen voor doorgifte buiten de
                EER (zoals Standard Contractual Clauses).
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.4}>
            <div className="space-y-6">
              <h3>5. Datalekprocedure</h3>
              <p>
                In geval van een beveiligingsincident dat leidt tot (mogelijke) inbreuk op persoonsgegevens, informeert
                SequenceFlow de klant zo spoedig mogelijk — en in ieder geval binnen{' '}
                <strong className="text-secondary dark:text-accent font-medium">72 uur</strong> na ontdekking — per
                e-mail. SequenceFlow verleent alle medewerking die nodig is voor eventuele melding aan de Autoriteit
                Persoonsgegevens.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>6. Rechten van betrokkenen</h3>
              <p>
                Indien een betrokkene (bijv. een eindklant van de opdrachtgever) een verzoek indient op grond van de AVG
                (inzage, correctie, verwijdering), verleent SequenceFlow de klant de benodigde technische medewerking
                om aan dit verzoek te voldoen. SequenceFlow handelt verzoeken van betrokkenen niet zelfstandig af
                zonder instructie van de klant, tenzij wettelijk verplicht.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="space-y-6">
              <h3>7. Audit en verantwoording</h3>
              <p>
                De klant heeft het recht de naleving van deze verwerkersovereenkomst te controleren, met inachtneming
                van een redelijke opzegtermijn. SequenceFlow verleent alle medewerking en verstrekt de benodigde
                informatie. Audits worden uitgevoerd op kosten van de klant en mogen de bedrijfsvoering van SequenceFlow
                niet onevenredig verstoren.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>8. Beëindiging</h3>
              <p>
                Bij beëindiging van de hoofdovereenkomst worden alle persoonsgegevens van de klant door SequenceFlow
                verwijderd of teruggegeven, tenzij wettelijke bewaarplicht van toepassing is. Dit wordt schriftelijk
                bevestigd.
              </p>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="space-y-6">
              <h3>9. Contact</h3>
              <p>
                Voor vragen over de verwerking van persoonsgegevens of om een ondertekende verwerkersovereenkomst aan
                te vragen, kunt u contact opnemen via{' '}
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

export default VerwerkersovereenkomstContent;
