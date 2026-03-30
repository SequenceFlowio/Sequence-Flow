import ClientsMarquee from '@/components/home/ClientsMarquee';
import CTA from '@/components/home/CTA';
import Faq from '@/components/home/Faq';
import Features from '@/components/home/Features';
import Hero from '@/components/home/Hero';
import HowItsWork from '@/components/home/HowItsWork';
import Testimonial from '@/components/home/Testimonial';
import WhatWeDo from '@/components/home/WhatWeDo';
import { defaultMetadata } from '@/utils/generateMetaData';
import { Metadata } from 'next';

export const metadata: Metadata = {
  ...defaultMetadata,
  title: 'SequenceFlow | Flow-as-a-Service voor Moderne Bedrijven',
};

const page = () => {
  return (
    <main className="space-y-10 bg-white">
      <Hero />
      <ClientsMarquee />
      <WhatWeDo />
      <Features />
      <HowItsWork />
      <Testimonial />
      <Faq />
      <CTA />
    </main>
  );
};

export default page;
