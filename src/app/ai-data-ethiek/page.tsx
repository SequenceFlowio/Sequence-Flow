import AiDataEthiekContent from '@/components/legal/AiDataEthiekContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'AI & Data Ethiek - SequenceFlow',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AiDataEthiekContent />
    </main>
  );
};

export default Page;
