import FlowScanForm from '@/components/contact-page/FlowScanForm';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Gratis Flow Scan - SequenceFlow',
};

const ContactPage = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      <FlowScanForm />
    </main>
  );
};

export default ContactPage;
