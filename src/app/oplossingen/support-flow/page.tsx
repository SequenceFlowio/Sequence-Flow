import OplossingsLanding from '@/components/oplossingen/OplossingsLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import emailReplyImg from '@/components/content/email_reply.webp';
import chatbotImg from '@/components/content/chatbot.webp';
import bookingFlowImg from '@/components/content/booking_flow.webp';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Support Flow – AI Klantenservice 24/7 | SequenceFlow',
  description:
    'Automatiseer uw klantenservice met AI die vragen beantwoordt, tickets routeert en klanten 24/7 helpt. Hogere klanttevredenheid, lagere kosten.',
};

const SupportFlowPage = () => {
  return (
    <OplossingsLanding
      badge="Support Flow"
      title="Klantenservice die nooit slaapt"
      description="AI beantwoordt vragen direct, 24/7. Uw team wordt alleen ingeschakeld wanneer het echt nodig is — voor de complexe gevallen die menselijke aandacht vereisen."
      apps={[
        {
          name: 'Email Reply',
          description: 'AI beantwoordt inkomende e-mails automatisch met contextuele, gepersonaliseerde antwoorden.',
          image: emailReplyImg,
          href: '/email-reply',
        },
        {
          name: 'Chatbot',
          description: 'Een slimme chatbot die veelgestelde vragen direct beantwoordt en escaleert wanneer nodig.',
          image: chatbotImg,
          href: '/chatbot',
          comingSoon: true,
        },
        {
          name: 'Booking Flow',
          description: 'Automatisch afsprakenbeheer en planning direct vanuit het klantgesprek.',
          image: bookingFlowImg,
          href: '/booking-flow',
          comingSoon: true,
        },
      ]}
      sections={[
        {
          heading: 'Hoe Support Flow werkt',
          paragraphs: [
            'Support Flow zet AI in als uw first-line support: veelgestelde vragen worden direct beantwoord via e-mail, 24 uur per dag, 7 dagen per week. Complexe vragen worden automatisch doorgestuurd naar de juiste medewerker of afdeling — met de volledige context al beschikbaar.',
            'AI detecteert frustratie in berichten en escaleert proactief, voordat een klant afhaakt. Alle kanalen komen samen in één overzichtelijke inbox met realtime rapportage over responstijden en klanttevredenheid.',
          ],
          imageSrc: '/images/oplossingen-support-flow-1.webp',
          imageAlt: 'Support Flow automatisering',
        },
        {
          heading: 'Voor wie is Support Flow?',
          paragraphs: [
            'Support Flow is ideaal voor e-commerce, SaaS en zakelijke dienstverleners die hun klanttevredenheid willen verhogen terwijl ze de supportkosten verlagen. Van bestelstatus en retourafhandeling tot technische onboarding support — de AI handelt het af.',
            'Ook intern werkt Support Flow: IT-helpdesk vragen en HR-procedures worden automatisch beantwoord, zodat uw interne teams minder worden belast met repetitieve vragen.',
          ],
          imageSrc: '/images/oplossingen-support-flow-2.webp',
          imageAlt: 'Support Flow toepassingen',
        },
        {
          heading: 'Schaalbaarheid en controle',
          paragraphs: [
            'De AI leert van elke interactie en wordt continu beter. Escalatieregels zijn volledig aanpasbaar aan uw processen, en de overdracht van AI naar medewerker verloopt naadloos — inclusief de volledige gesprekscontext.',
            'Support Flow ondersteunt meerdere talen voor internationale klanten en bewaakt uw SLA\'s met automatische waarschuwingen wanneer responstijden dreigen te worden overschreden.',
          ],
          imageSrc: '/images/oplossingen-support-flow-3.webp',
          imageAlt: 'Support Flow schaalbaarheid',
        },
      ]}
    />
  );
};

export default SupportFlowPage;
