import ERHero from '@/components/email-reply/ERHero';
import ERFeatures from '@/components/email-reply/ERFeatures';
import ERSteps from '@/components/email-reply/ERSteps';
import ERTestimonials from '@/components/email-reply/ERTestimonials';
import ERCTA from '@/components/email-reply/ERCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Email Reply – AI Klantemails Automatisch Beantwoorden | SequenceFlow',
  description:
    'Email Reply koppelt aan uw Gmail-inbox en genereert automatisch conceptantwoorden op klantmails. U keurt goed, past aan of wijst af — volledig in controle.',
};

const EmailReplyPage = () => {
  return (
    <main className="bg-white">
      <ERHero />
      <ERFeatures />
      <ERSteps />
      <ERTestimonials />
      <ERCTA />
    </main>
  );
};

export default EmailReplyPage;
