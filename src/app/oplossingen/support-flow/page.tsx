import OplossingsLanding from '@/components/oplossingen/OplossingsLanding';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

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
        },
        {
          name: 'Chatbot',
          description: 'Een slimme chatbot die veelgestelde vragen direct beantwoordt en escaleert wanneer nodig.',
        },
        {
          name: 'Booking Flow',
          description: 'Automatische afsprakenbeheer en planning direct vanuit het klantgesprek.',
        },
      ]}
      appsHeading="Drie krachtige webapps voor complete ondersteuning"
      appsDescription="Elke webapp dekt een kanaal af. Samen zorgen ze voor een naadloze klantervaring van eerste contact tot oplossing."
      sections={[
        {
          heading: 'Wat is inbegrepen',
          intro:
            'Van eerste klantcontact tot escalatie — elke stap in uw supportproces wordt intelligent geautomatiseerd.',
          items: [
            { title: 'AI First-Line Support', description: 'AI beantwoordt veelgestelde vragen direct, 24/7, in de taal van uw klant.' },
            { title: 'Intelligent Ticket Routing', description: 'Complexe vragen worden automatisch doorgestuurd naar de juiste medewerker of afdeling.' },
            { title: 'Geautomatiseerde FAQ', description: 'Uw kennisbank wordt continu bijgewerkt op basis van binnenkomende vragen.' },
            { title: 'Sentiment analyse', description: 'AI detecteert frustratie en escaleert proactief naar een medewerker.' },
            { title: 'Multi-channel inbox', description: 'E-mail, chat en social media berichten in één overzicht.' },
            { title: 'Rapportage dashboard', description: 'Inzicht in responstijden, klanttevredenheid en veelvoorkomende issues.' },
          ],
          imageSrc: '/images/oplossingen-support-flow-1.webp',
          imageAlt: 'Support Flow automatisering',
        },
        {
          heading: 'Voor wie is Support Flow?',
          intro:
            'Ideaal voor bedrijven die hun klanttevredenheid willen verhogen terwijl ze supportkosten verlagen.',
          items: [
            { title: 'E-commerce', description: 'Bestelstatus, retourafhandeling en productadvies automatisch beantwoord.' },
            { title: 'SaaS', description: 'Technische vragen en onboarding support op schaal.' },
            { title: 'Financiële dienstverlening', description: 'Veelgestelde vragen over producten en procedures direct beantwoord.' },
            { title: 'Zorg', description: 'Afspraakbeheer en informatieverstrekking geautomatiseerd.' },
            { title: 'Interne helpdesk', description: 'IT-support en HR-vragen automatisch afgehandeld.' },
          ],
          imageSrc: '/images/oplossingen-support-flow-2.webp',
          imageAlt: 'Support Flow toepassingen',
        },
        {
          heading: 'Schaalbaarheid en controle',
          intro:
            'Schaal uw klantenservice zonder concessies te doen aan kwaliteit.',
          items: [
            { title: 'Trainbare AI', description: 'Die leert van elke interactie en steeds beter wordt.' },
            { title: 'Escalatieregels', description: 'Volledig aanpasbaar aan uw processen.' },
            { title: 'Meertalige ondersteuning', description: 'Voor internationale klanten.' },
            { title: 'SLA monitoring', description: 'Met automatische waarschuwingen.' },
            { title: 'Naadloze overdracht', description: 'Van AI naar medewerker met volledige context.' },
          ],
          imageSrc: '/images/oplossingen-support-flow-3.webp',
          imageAlt: 'Support Flow schaalbaarheid',
        },
      ]}
    />
  );
};

export default SupportFlowPage;
