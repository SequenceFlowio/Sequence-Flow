import SlaContent from '@/components/legal/SlaContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Service Level Agreement - SequenceFlow',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <SlaContent />
    </main>
  );
};

export default Page;
