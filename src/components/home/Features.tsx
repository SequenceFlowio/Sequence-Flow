import Marquee from 'react-fast-marquee';
import RevealAnimation from '../animation/RevealAnimation';
import productFirstImage from '@public/images/product-first-aanpak-foot.webp';
import Image from 'next/image';
import FeaturesFileCard from './FeaturesFileCard';

const flowItemsTop = [
  { id: 1, name: 'Lead Outreach' },
  { id: 2, name: 'Lead Follow-up' },
  { id: 3, name: 'Content Gen' },
  { id: 4, name: 'Tickets' },
];

const flowItemsBottom = [
  { id: 1, name: 'FAQ' },
  { id: 2, name: 'E-mails reply' },
  { id: 3, name: 'Rapportage' },
  { id: 4, name: 'CRM Sync' },
];

const Features = () => {
  return (
    <section className="max-[1920px]:px-5">
      <div className="bg-background-12 mx-auto max-w-[1880px] rounded-3xl py-20 lg:rounded-4xl lg:py-30 xl:py-39">
        <div className="main-container">
          <div className="mb-10 space-y-4 text-center md:mb-14 lg:mx-auto lg:max-w-[740px]">
            <RevealAnimation delay={0.1}>
              <span className="badge badge-white-v2 text-secondary font-medium">Autonome bedrijfsprocessen</span>
            </RevealAnimation>
            <RevealAnimation delay={0.2}>
              <h2>Stop met handmatig werk. Laat AI het overnemen.</h2>
            </RevealAnimation>
          </div>
          {/* features grid */}
          <div className="grid grid-cols-12 gap-y-10 md:gap-x-8">
            {/* feature item 1 */}
            <RevealAnimation delay={0.1}>
              <div className="col-span-12 md:col-span-6">
                <div className="relative h-full min-h-[450px] max-w-full overflow-hidden rounded-[20px] bg-white sm:min-h-[780px] md:min-h-[720px] lg:p-10.5">
                  <RevealAnimation delay={0.1}>
                    <div className="absolute bottom-0 left-0 z-10 h-[480px] w-full bg-(image:--color-gradient-11) blur-[2px] md:bottom-20 lg:bottom-0" />
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <figure className="absolute right-0 bottom-2 md:bottom-40 lg:bottom-20 xl:bottom-2">
                      <Image src={productFirstImage} alt="Product-First aanpak" className="h-full w-full object-cover" />
                    </figure>
                  </RevealAnimation>
                  <RevealAnimation delay={0.2}>
                    <div className="absolute right-10.5 bottom-10.5 left-6 z-20 max-md:space-y-0.5 sm:left-10.5 md:left-6 md:space-y-1.5 xl:left-10.5">
                      <h3 className="text-heading-6 md:text-heading-5">Product-First aanpak</h3>
                      <p className="max-w-[450px]">
                        Van handmatig werk naar autonome workflows. Wij vervangen repetitieve taken door intelligente AI flows die zelfstandig werken.
                      </p>
                    </div>
                  </RevealAnimation>
                </div>
              </div>
            </RevealAnimation>
            {/* feature item 2 */}
            <div className="col-span-12 space-y-8 md:col-span-6">
              <RevealAnimation delay={0.4}>
                <div className="space-y-6 rounded-[20px] bg-white p-5 sm:p-8 md:p-5 xl:p-8">
                  <div className="bg-background-12 relative space-y-7 overflow-hidden rounded-2xl pt-[25px] pb-[27px]">
                    {/* Left gradient overlay */}
                    <div className="from-background-12 pointer-events-none absolute top-0 left-0 z-10 h-full w-[20%] bg-gradient-to-r to-transparent" />
                    {/* Right gradient overlay */}
                    <div className="from-background-12 pointer-events-none absolute top-0 right-0 z-10 h-full w-[20%] bg-gradient-to-l to-transparent" />
                    <Marquee>
                      <div className="flex items-center gap-x-7">
                        {flowItemsTop.map((item, index) => (
                          <div
                            key={index + 1}
                            className="inline-flex items-center justify-center rounded-[300px] bg-white px-6 py-3 first:ml-7">
                            <span className="text-tagline-1 text-secondary font-medium">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </Marquee>
                    <Marquee direction="right">
                      <div className="flex items-center gap-x-7">
                        {flowItemsBottom.map((item, index) => (
                          <div
                            key={index + 1}
                            className="inline-flex items-center justify-center rounded-[300px] bg-white px-6 py-3 first:ml-7">
                            <span className="text-tagline-1 text-secondary font-medium">{item.name}</span>
                          </div>
                        ))}
                      </div>
                    </Marquee>
                  </div>
                  <RevealAnimation delay={0.4} start="top 97%">
                    <div className="max-md:space-y-0.5 md:space-y-1.5">
                      <h3 className="text-heading-6 md:text-heading-5">Schaalbare oplossingen</h3>
                      <p className="max-w-[450px]">
                        Schaal van 100 naar 10.000 acties per maand zonder extra personeel. Onze AI flows groeien mee met uw bedrijf.
                      </p>
                    </div>
                  </RevealAnimation>
                </div>
              </RevealAnimation>
              <FeaturesFileCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

Features.displayName = 'Features';
export default Features;
