import CGHero from '@/components/content-gen/CGHero';
import CGPlatforms from '@/components/content-gen/CGPlatforms';
import CGContentTypes from '@/components/content-gen/CGContentTypes';
import CGFeatures from '@/components/content-gen/CGFeatures';
import CGUseCases from '@/components/content-gen/CGUseCases';
import CGSteps from '@/components/content-gen/CGSteps';
import CGTestimonials from '@/components/content-gen/CGTestimonials';
import CGCTA from '@/components/content-gen/CGCTA';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'Content Generator – On-brand Advertenties & Social Content | SequenceFlow',
  description: 'Genereer volledig on-brand advertenties en social content met AI. Upload uw merk één keer en de AI leert alles: stem, kleuren, fonts en positionering.',
};

const ContentGenPage = () => {
  return (
    <main className="bg-white">
      <CGHero />
      <CGPlatforms />
      <CGContentTypes />
      <CGFeatures />
      <CGUseCases />
      <CGSteps />
      <CGTestimonials />
      <CGCTA />
    </main>
  );
};

export default ContentGenPage;
