import Services from '@/components/services/Services';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Oplossingen - SequenceFlow',
};

const page = () => {
  return (
    <main className="bg-background-1 dark:bg-background-6">
      <Services />
    </main>
  );
};

export default page;
