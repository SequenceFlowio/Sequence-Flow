import ProcessOperation from '@/components/process/ProcessOperation';
import ProcessStep from '@/components/process/ProcessStep';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Maatwerk Flow – Uw Eigen AI-Workflow | SequenceFlow',
};

const Process02 = () => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-32 pb-0 sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container text-center">
          <span className="badge badge-green mb-4 inline-block">Maatwerk flows</span>
          <h1 className="mx-auto mb-4 max-w-[820px]">Een flow op maat voor uw uitdaging</h1>
          <p className="mx-auto mb-8 max-w-[600px] text-secondary/60 dark:text-accent/60">
            Niet elke uitdaging past in een standaard product. Wij bouwen AI-workflows die naadloos aansluiten op uw unieke processen en systemen.
          </p>
          <Link href="/contact" className="btn btn-md btn-secondary normal-case before:content-none">
            Start een gratis flow scan
          </Link>
        </div>
      </section>

      <ProcessStep />
      <ProcessOperation />
    </main>
  );
};

Process02.displayName = 'Process02';
export default Process02;
