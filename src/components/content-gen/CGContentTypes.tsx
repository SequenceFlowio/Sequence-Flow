import RevealAnimation from '@/components/animation/RevealAnimation';
import platformPostsImage from '@public/images/ns-img-545.png';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import CGTemplatesBadges from './CGTemplatesBadges';
import CGPreviewCards from './CGPreviewCards';

const platforms = ['Instagram', 'Facebook', 'LinkedIn', 'Pinterest'];

const CGContentTypes = () => {
  return (
    <section className="py-[80px] xl:py-[112px]" aria-labelledby="content-types-section-heading">
      <div className="main-container">
        <div className="space-y-8 md:space-y-16 xl:space-y-24">
          <div className="flex flex-col items-center justify-center gap-y-10 xl:flex-row xl:justify-between">
            {/* content */}
            <div className="ml-0 w-full space-y-3 text-center xl:max-w-[398px] xl:text-left">
              <RevealAnimation delay={0.1}>
                <h2 className="font-normal" id="content-types-section-heading">
                  Kies uit <span className="text-ns-green">14</span> content templates
                </h2>
              </RevealAnimation>
              <RevealAnimation delay={0.2}>
                <p>5 advertentie templates en 9 social content templates, elk gebouwd voor een specifiek doel en platform.</p>
              </RevealAnimation>
            </div>

            {/* template badges */}
            <CGTemplatesBadges />
          </div>

          {/* cards */}
          <div
            className="flex flex-col items-center justify-center gap-y-8 overflow-hidden xl:flex-row xl:gap-x-8 xl:gap-y-0"
            aria-label="Content type examples">
            {/* left area */}
            <CGPreviewCards />

            {/* middle area */}
            <RevealAnimation delay={0.4}>
              <div
                className="w-full max-w-[695px] space-y-[89px] rounded-4xl border border-gray-100 p-6 xl:max-w-[560px]"
                aria-labelledby="platforms-heading">
                <div className="space-y-2">
                  <p className="text-secondary text-tagline-1 font-normal">Content voor elk platform</p>
                  <h3 id="platforms-heading" className="text-heading-5 font-normal">
                    Geoptimaliseerd voor uw kanaal
                  </h3>
                </div>

                {/* platform badges marquee */}
                <div
                  className="relative w-full space-y-[14px] overflow-hidden rounded-2xl bg-[#f0fbe3] p-4 xl:max-w-[512px]"
                  aria-labelledby="platform-marquee-heading">
                  <h4 id="platform-marquee-heading" className="text-heading-6 relative z-20 font-normal">
                    Platform
                  </h4>

                  <div className="overflow-hidden" aria-label="Available platforms">
                    <Marquee autoFill speed={50} gradient={false}>
                      <div className="ml-3 flex items-center justify-center gap-x-3">
                        {platforms.map((platform) => (
                          <div
                            key={platform}
                            className="shadow-sm flex h-12 w-[131px] shrink-0 items-center justify-center gap-x-3 rounded-full bg-white p-1"
                            aria-label={`${platform} platform`}>
                            <p className="text-secondary font-normal text-sm">{platform}</p>
                          </div>
                        ))}
                      </div>
                    </Marquee>
                  </div>

                  {/* left bg */}
                  <div
                    className="absolute top-0 left-0 z-10 h-36 w-[126px] rotate-180"
                    style={{ background: 'linear-gradient(270deg, #f0fbe3 16.67%, rgba(240, 251, 227, 0) 100%)' }}
                  />
                  {/* right bg */}
                  <div
                    className="absolute top-0 right-0 z-10 h-36 w-[126px]"
                    style={{ background: 'linear-gradient(270deg, #f0fbe3 16.67%, rgba(240, 251, 227, 0) 100%)' }}
                  />
                </div>
              </div>
            </RevealAnimation>

            {/* right area */}
            <RevealAnimation delay={0.5} direction="right" offset={80}>
              <div className="group relative hidden overflow-hidden xl:block" aria-label="Platform Posts content type">
                <figure className="w-full max-w-[218px] overflow-hidden rounded-4xl">
                  <Image
                    src={platformPostsImage}
                    alt="Platform Posts example for Content Gen"
                    width={218}
                    height={327}
                    className="size-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-106"
                    title="Platform Posts content type"
                  />
                </figure>
                <h3 className="text-tagline-1 text-secondary absolute left-1/2 h-10 w-[202px] -translate-x-1/2 translate-y-0 rounded-full bg-white px-4 py-2 opacity-0 backdrop-blur-[15px] transition-all duration-600 ease-in-out group-hover:-translate-y-12 group-hover:opacity-100">
                  Platform Posts
                </h3>
              </div>
            </RevealAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CGContentTypes;
