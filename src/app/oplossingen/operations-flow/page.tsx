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
          comingSoon: true,
        },
        {
          name: 'CRM-Sync Flow',
          description: 'Automatische synchronisatie tussen al uw tools en uw CRM — altijd up-to-date data.',
          image: crmSyncImg,
          href: '/crm-sync-flow',
          comingSoon: true,
        },
        {
          name: 'Admin Killer',
          description: 'Repetitieve administratieve taken volledig geautomatiseerd zodat uw team zich focust op werk dat er toe doet.',
          image: adminKillerImg,
          href: '/admin-killer',
          comingSoon: true,
        },
      ]}
      sections={[
        {
          heading: 'Hoe Operations Flow werkt',
          paragraphs: [
            'Operations Flow automatiseert alles wat uw team dagelijks handmatig doet: van CRM-synchronisatie en rapportages tot repetitieve administratieve taken. Data uit al uw tools wordt automatisch gesynchroniseerd, gevalideerd en overal up-to-date gehouden.',
            'Dagelijkse, wekelijkse en maandelijkse rapporten worden automatisch gegenereerd en verstuurd naar de juiste mensen. AI controleert continu op fouten en inconsistenties in uw data en stuurt een notificatie bij afwijkingen.',
          ],
          imageSrc: '/images/oplossingen-operations-flow-1.webp',
          imageAlt: 'Operations Flow automatisering',
        },
        {
          heading: 'Voor wie is Operations Flow?',
          paragraphs: [
            'Operations Flow is gebouwd voor finance-, HR- en sales operations teams die repetitief werk willen elimineren. Factuurverwerking, verlofregistratie, pipeline rapportages en campagne-analyses lopen allemaal automatisch.',
            'Ook voor management is de waarde direct zichtbaar: real-time dashboards en KPI-tracking zonder handmatig exportwerk. Elke afdeling krijgt precies de informatie die ze nodig heeft, op het moment dat het nodig is.',
          ],
          imageSrc: '/images/oplossingen-operations-flow-2.webp',
          imageAlt: 'Operations Flow toepassingen',
        },
        {
          heading: 'Schaalbaarheid en controle',
          paragraphs: [
            'Operations Flow is modulair opgebouwd, zodat u stap voor stap kunt automatiseren zonder alles tegelijk om te gooien. Van 100 naar 10.000+ acties per maand schaalt de flow mee zonder aanpassingen.',
            'Elke automatische actie wordt bijgehouden in een audit trail voor volledige traceerbaarheid. Role-based access bepaalt wie wat kan aanpassen, en error handling met automatische notificaties houdt u altijd in controle.',
          ],
          imageSrc: '/images/oplossingen-operations-flow-3.webp',
          imageAlt: 'Operations Flow schaalbaarheid',
        },
      ]}
    />
  );
};

export default OperationsFlowPage;
