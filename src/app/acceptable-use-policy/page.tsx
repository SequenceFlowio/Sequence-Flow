import AcceptableUsePolicyContent from '@/components/legal/AcceptableUsePolicyContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Acceptable Use Policy - SequenceFlow',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AcceptableUsePolicyContent />
    </main>
  );
};

export default Page;
