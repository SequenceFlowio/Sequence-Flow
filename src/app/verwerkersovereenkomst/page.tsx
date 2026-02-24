import VerwerkersovereenkomstContent from '@/components/legal/VerwerkersovereenkomstContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Verwerkersovereenkomst - SequenceFlow',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <VerwerkersovereenkomstContent />
    </main>
  );
};

export default Page;
