import PrivacyverklaringContent from '@/components/legal/PrivacyverklaringContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Privacyverklaring - SequenceFlow',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <PrivacyverklaringContent />
    </main>
  );
};

export default Page;
