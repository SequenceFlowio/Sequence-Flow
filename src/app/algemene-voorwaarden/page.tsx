import AlgemeneVoorwaardenContent from '@/components/legal/AlgemeneVoorwaardenContent';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Algemene Voorwaarden - SequenceFlow',
};

const Page = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <AlgemeneVoorwaardenContent />
    </main>
  );
};

export default Page;
