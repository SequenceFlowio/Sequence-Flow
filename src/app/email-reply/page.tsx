import ERHero from '@/components/email-reply/ERHero';
import ERPain from '@/components/email-reply/ERPain';
import ERHowItWorks from '@/components/email-reply/ERHowItWorks';
import ERDemo from '@/components/email-reply/ERDemo';
import ERBenefits from '@/components/email-reply/ERBenefits';
import ERSocialProof from '@/components/email-reply/ERSocialProof';
import ERFAQ from '@/components/email-reply/ERFAQ';
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
      <ERPain />
      <ERHowItWorks />
      <ERDemo />
      <ERBenefits />
      <ERSocialProof />
      <ERFAQ />
      <ERCTA />
    </main>
  );
};

export default EmailReplyPage;
