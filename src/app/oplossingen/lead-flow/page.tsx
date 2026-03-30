import OplossingsLanding from '@/components/oplossingen/OplossingsLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import outreachImg from '@/components/content/outreach.jpg';
import contentGenImg from '@/components/content/content_gen.png';
import reviewGenImg from '@/components/content/review_gen.png';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Lead Flow – Automatische Lead Generatie | SequenceFlow',
  description:
    'Automatiseer uw volledige lead pipeline met AI-gestuurde outreach, smart lead scoring en geautomatiseerde follow-ups. Van prospect tot afspraak — zonder handmatig werk.',
};

const LeadFlowPage = () => {
  return (
    <OplossingsLanding
      badge="Lead Flow"
      title="Automatiseer uw volledige lead pipeline"
      description="Van het identificeren van prospects tot het boeken van afspraken — alles draait automatisch. Meer leads, minder handmatig werk."
      apps={[
        {
          name: 'Outreach',
          description: 'AI benadert prospects via LinkedIn en e-mail met gepersonaliseerde berichten op schaal.',
          image: outreachImg,
        },
        {
          name: 'Content Gen',
          description: 'Genereer relevante outreach content automatisch, afgestemd op elke prospect.',
          image: contentGenImg,
        },
        {
          name: 'Reviews Gen',
          description: 'Genereer automatisch review-verzoeken en verzamel klantbeoordelingen op de juiste momenten.',
          image: reviewGenImg,
        },
      ]}
      appsHeading="Drie krachtige webapps in één flow"
      appsDescription="Elke webapp pakt een specifiek onderdeel van uw lead pipeline aan. Samen vormen ze een volledig geautomatiseerd systeem."
      sections={[
        {
          heading: 'Wat is inbegrepen',
          intro:
            'Elke stap in uw lead generatie wordt geautomatiseerd, van eerste contact tot gekwalificeerde afspraak.',
          items: [
            { title: 'Autonome Outreach', description: 'AI identificeert en benadert prospects via LinkedIn en e-mail met gepersonaliseerde berichten.' },
            { title: 'Smart Lead Scoring', description: 'Elke lead krijgt automatisch een score op basis van engagement, bedrijfsdata en gedrag.' },
            { title: 'Follow-up Engine', description: 'Slimme opvolgsequenties die automatisch worden getriggerd op het juiste moment.' },
            { title: 'Multi-channel aanpak', description: 'Bereik prospects via LinkedIn, e-mail en andere kanalen in één geïntegreerde flow.' },
            { title: 'CRM Sync', description: 'Alle interacties worden real-time gesynchroniseerd met uw CRM.' },
            { title: 'Performance dashboard', description: 'Real-time inzicht in open rates, responses en conversies.' },
          ],
          imageSrc: '/images/oplossingen-lead-flow-1.webp',
          imageAlt: 'Lead Flow automatisering',
        },
        {
          heading: 'Voor wie is Lead Flow?',
          intro:
            'Perfect voor sales teams die hun bereik willen vergroten zonder extra personeel.',
          items: [
            { title: 'B2B Sales', description: 'Vul uw pipeline met gekwalificeerde leads op schaal.' },
            { title: 'Recruitment', description: 'Bereik passieve kandidaten automatisch.' },
            { title: 'Partnerships', description: 'Identificeer en benader potentiële partners.' },
            { title: 'Event promotie', description: 'Nodig relevante prospects uit voor uw events.' },
            { title: 'Account-based marketing', description: 'Gerichte campagnes voor high-value accounts.' },
          ],
          imageSrc: '/images/oplossingen-lead-flow-2.webp',
          imageAlt: 'Lead Flow toepassingen',
        },
        {
          heading: 'Schaalbaarheid en controle',
          intro:
            'Gebouwd voor teams die willen groeien zonder de kwaliteit van hun outreach te verliezen.',
          items: [
            { title: 'Instelbare volumes', description: 'Per dag/week om natuurlijk te blijven.' },
            { title: 'A/B testing', description: 'Van berichten voor optimale resultaten.' },
            { title: 'Blacklist management', description: 'Om bestaande klanten uit te sluiten.' },
            { title: 'Compliance-ready', description: 'Voor AVG en LinkedIn-richtlijnen.' },
            { title: 'Volledige transparantie', description: 'In alle verzonden berichten.' },
          ],
          imageSrc: '/images/oplossingen-lead-flow-3.webp',
          imageAlt: 'Lead Flow schaalbaarheid',
        },
      ]}
    />
  );
};

export default LeadFlowPage;
