import OplossingsLanding from '@/components/oplossingen/OplossingsLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import outreachImg from '@/components/content/outreach.webp';
import contentGenImg from '@/components/content/content_gen.webp';
import reviewGenImg from '@/components/content/review_gen.webp';

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
          description: 'AI benadert prospects via e-mail met gepersonaliseerde berichten op schaal, volledig automatisch.',
          image: outreachImg,
          href: '/outreach',
        },
        {
          name: 'Content Gen',
          description: 'Genereer relevante outreach content automatisch, afgestemd op elke prospect en hun situatie.',
          image: contentGenImg,
          href: '/content-gen',
        },
        {
          name: 'Reviews Gen',
          description: 'Automatisch review-verzoeken versturen en klantbeoordelingen verzamelen op het juiste moment.',
          image: reviewGenImg,
          href: '/reviews-gen',
          comingSoon: true,
        },
      ]}
      sections={[
        {
          heading: 'Hoe Lead Flow werkt',
          paragraphs: [
            'Lead Flow automatiseert uw volledige outreach van A tot Z. Onze AI identificeert relevante prospects en benadert hen met gepersonaliseerde berichten via e-mail. Elke lead krijgt automatisch een score op basis van engagement en bedrijfsdata — zodat uw team zich alleen focust op de leads die er echt toe doen.',
            'Slimme opvolgsequenties worden automatisch getriggerd op het juiste moment, terwijl alle interacties real-time worden gesynchroniseerd met uw CRM. Via het performance dashboard houdt u altijd grip op open rates, responses en conversies.',
          ],
          imageSrc: '/images/oplossingen-lead-flow-1.webp',
          imageAlt: 'Lead Flow automatisering',
        },
        {
          heading: 'Voor wie is Lead Flow?',
          paragraphs: [
            'Lead Flow is gebouwd voor B2B sales teams die hun pipeline willen vergroten zonder extra personeel in te zetten. Of u nu actief bent in recruitment, partnerships of account-based marketing — de flow past zich aan uw doelgroep en aanpak aan.',
            'Ook voor event promotie werkt Lead Flow uitstekend: nodig relevante prospects automatisch uit op het juiste moment, met de juiste boodschap en zonder handmatig zoekwerk.',
          ],
          imageSrc: '/images/oplossingen-lead-flow-2.webp',
          imageAlt: 'Lead Flow toepassingen',
        },
        {
          heading: 'Schaalbaarheid en controle',
          paragraphs: [
            'Stel dagelijkse en wekelijkse volumes in om de outreach natuurlijk te houden. Met ingebouwde A/B testing van uw berichtgeving optimaliseert u continu op resultaat, zonder extra handmatig werk.',
            'Lead Flow is volledig AVG-compliant en biedt volledige transparantie in alle verzonden berichten. Bestaande klanten en contacten worden automatisch uitgesloten via blacklist management.',
          ],
          imageSrc: '/images/oplossingen-lead-flow-3.webp',
          imageAlt: 'Lead Flow schaalbaarheid',
        },
      ]}
    />
  );
};

export default LeadFlowPage;
