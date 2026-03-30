import OplossingsLanding from '@/components/oplossingen/OplossingsLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import automatischeRapportageImg from '@/components/content/Automatische_Rapportage.webp';
import crmSyncImg from '@/components/content/CRM-Sync_Flow.webp';
import adminKillerImg from '@/components/content/Admin_Killer.webp';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Operations Flow – Back-office op Autopiloot | SequenceFlow',
  description:
    'Automatiseer uw interne bedrijfsprocessen: CRM-synchronisatie, rapportage en administratie. Geen handmatig datawerk meer — alles draait automatisch.',
};

const OperationsFlowPage = () => {
  return (
    <OplossingsLanding
      badge="Operations Flow"
      title="Uw back-office op de automatische piloot"
      description="CRM-synchronisatie, automatische rapportage en admin-automatisering in één gestroomlijnde workflow. Geen handmatig datawerk meer."
      apps={[
        {
          name: 'Automatische Rapportage',
          description: 'Dagelijkse, wekelijkse en maandelijkse rapporten worden automatisch gegenereerd en verstuurd.',
          image: automatischeRapportageImg,
          href: '/automatische-rapportage',
        },
        {
          name: 'CRM-Sync Flow',
          description: 'Automatische synchronisatie tussen al uw tools en uw CRM — altijd up-to-date data.',
          image: crmSyncImg,
          href: '/crm-sync-flow',
        },
        {
          name: 'Admin Killer',
          description: 'Repetitieve administratieve taken worden volledig geautomatiseerd zodat uw team zich focust op werk dat er toe doet.',
          image: adminKillerImg,
          href: '/admin-killer',
        },
      ]}
      appsHeading="Drie webapps die uw operaties transformeren"
      appsDescription="Elke webapp elimineert een categorie handmatig werk. Samen geven ze uw team uren per week terug."
      sections={[
        {
          heading: 'Wat is inbegrepen',
          intro:
            'Van data-invoer tot management rapportages — elk intern proces wordt geautomatiseerd en geoptimaliseerd.',
          items: [
            { title: 'CRM Sync Flow', description: 'Automatische synchronisatie tussen al uw tools en uw CRM, altijd up-to-date data.' },
            { title: 'Automatische Rapportage', description: 'Dagelijkse, wekelijkse en maandelijkse rapporten worden automatisch gegenereerd en verstuurd.' },
            { title: 'Admin-Killer', description: 'Repetitieve administratieve taken worden volledig geautomatiseerd.' },
            { title: 'Data validatie', description: 'AI controleert automatisch op fouten en inconsistenties in uw data.' },
            { title: 'Workflow orchestratie', description: 'Complexe processen met meerdere stappen en goedkeuringen geautomatiseerd.' },
            { title: 'Integratie hub', description: 'Koppel al uw tools naadloos aan elkaar zonder handmatig werk.' },
          ],
          imageSrc: '/images/oplossingen-operations-flow-1.webp',
          imageAlt: 'Operations Flow automatisering',
        },
        {
          heading: 'Voor wie is Operations Flow?',
          intro:
            'Perfect voor bedrijven die hun operationele efficiëntie willen maximaliseren.',
          items: [
            { title: 'Finance', description: 'Factuurverwerking, boekhouding en financiële rapportages geautomatiseerd.' },
            { title: 'HR', description: 'Onboarding, verlofregistratie en personeelsadministratie op de automatische piloot.' },
            { title: 'Sales Operations', description: 'Pipeline rapportages, forecasting en CRM-hygiene automatisch.' },
            { title: 'Marketing', description: 'Campagne rapportages en ROI-analyses automatisch gegenereerd.' },
            { title: 'Management', description: 'Real-time dashboards en KPI-tracking zonder handmatig werk.' },
          ],
          imageSrc: '/images/oplossingen-operations-flow-2.webp',
          imageAlt: 'Operations Flow toepassingen',
        },
        {
          heading: 'Schaalbaarheid en controle',
          intro:
            'Gebouwd voor groeiende organisaties die hun processen willen standaardiseren en opschalen.',
          items: [
            { title: 'Modulair opgebouwd', description: 'Zodat u stap voor stap kunt automatiseren.' },
            { title: 'Audit trail', description: 'Voor volledige traceerbaarheid van alle automatische acties.' },
            { title: 'Role-based access', description: 'Voor controle over wie wat kan aanpassen.' },
            { title: 'Error handling', description: 'Met automatische notificaties bij afwijkingen.' },
            { title: 'Schaalbaar', description: 'Van 100 naar 10.000+ acties per maand zonder aanpassingen.' },
          ],
          imageSrc: '/images/oplossingen-operations-flow-3.webp',
          imageAlt: 'Operations Flow schaalbaarheid',
        },
      ]}
    />
  );
};

export default OperationsFlowPage;
