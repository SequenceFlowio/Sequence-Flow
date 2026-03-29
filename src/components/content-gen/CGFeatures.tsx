import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import avatar39 from '@public/images/ns-avatar-39.png';
import multilingualImage from '@public/images/ns-img-523.png';
import playIcon from '@public/images/ns-img-552.svg';
import icon553 from '@public/images/ns-img-553.svg';
import Image from 'next/image';
import IntegrationCircle from './IntegrationCircle';

const CGFeatures = () => {
  return (
    <section className="bg-[#f0fbe3] py-[80px] md:py-[120px] lg:py-[176px]">
      <div className="main-container">
        <div className="space-y-[76px]">
          <div className="flex flex-col items-center justify-between gap-y-5 lg:flex-row">
            {/* content */}
            <div className="space-y-5 text-center lg:text-left">
              <RevealAnimation delay={0.1}>
                <span className="badge badge-white text-secondary bg-white font-medium">Features</span>
              </RevealAnimation>

              <div className="space-y-3">
                <RevealAnimation delay={0.2}>
                  <h2
                    id="services-heading"
                    className="mx-auto max-w-[450px] text-center lg:mx-0 lg:max-w-[505px] lg:text-left">
                    Krachtige <span className="text-ns-green">AI content tools</span> voor elk merk
                  </h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="mx-auto max-w-[400px] text-center lg:mx-0 lg:text-left">
                    Van startups tot agencies — SequenceFlow Content Gen maakt professionele content op schaal mogelijk.
                  </p>
                </RevealAnimation>
              </div>
            </div>

            <RevealAnimation delay={0.4}>
              <div className="mt-auto mb-0 flex w-full items-center justify-center md:w-auto">
                <div className="mx-auto w-[90%] text-center md:w-auto lg:text-right">
                  <LinkButton href="/contact" btnClass="btn-xl-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                    Probeer gratis
                  </LinkButton>
                </div>
              </div>
            </RevealAnimation>
          </div>

          {/* cards */}
          <div className="space-y-4 sm:space-y-2">
            {/* card (one - three) */}
            <div className="flex flex-col items-center gap-y-4 md:flex-row md:gap-x-2 md:gap-y-0">
              {/* card one */}
              <RevealAnimation delay={0.1}>
                <div className="relative h-[350px] w-full max-w-[642px] space-y-[98px] overflow-hidden rounded-4xl bg-white p-8 md:p-[42px] lg:h-[450px]">
                  <div className="space-y-1">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">Brand Learning</h3>
                    <p className="max-w-[300px]">AI leert uw merk: stem, kleuren, fonts en positionering — allemaal uit één upload.</p>
                  </div>

                  {/* logo circle */}
                  <div className="absolute top-[180px] left-1/2 -z-10 -translate-x-1/2">
                    <div className="w-[1300px]">
                      <IntegrationCircle />
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              <div className="flex w-full max-w-[640px] flex-col items-center justify-center gap-y-4 sm:gap-y-2">
                {/* card two */}
                <RevealAnimation delay={0.2}>
                  <div className="w-full shrink-0 space-y-1 rounded-4xl bg-white p-8 lg:h-[221px] lg:p-[42px]">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">Ad Generator</h3>
                    <p className="max-w-[230px]">5 templates voor elke advertentiestrategie.</p>
                  </div>
                </RevealAnimation>

                {/* card three */}
                <RevealAnimation delay={0.3}>
                  <div className="relative w-full shrink-0 space-y-1 overflow-hidden rounded-4xl bg-white p-8 lg:h-[221px] lg:p-[42px]">
                    <h3 className="text-heading-5 text-secondary/80 relative z-20 font-normal">
                      Social Content Generator
                    </h3>
                    <p>9 templates voor Instagram, Facebook, LinkedIn en Pinterest.</p>

                    {/* bg img */}
                    <RevealAnimation delay={0.4} direction="right" offset={100}>
                      <figure className="absolute top-[-120px] right-[-205px] h-[328px] w-[479px] rotate-6 overflow-hidden">
                        <Image
                          src={multilingualImage}
                          alt="Social content generator platforms"
                          className="size-full"
                          width={479}
                          height={328}
                        />
                      </figure>
                    </RevealAnimation>
                  </div>
                </RevealAnimation>
              </div>
            </div>

            {/* card (four - six) */}
            <div className="grid grid-cols-12 items-center justify-center gap-x-4 gap-y-4 lg:gap-x-2 lg:gap-y-0">
              {/* card four */}
              <RevealAnimation delay={0.4}>
                <div className="col-span-12 md:col-span-6 lg:col-span-4 xl:col-span-3">
                  <div className="flex h-[450px] flex-col items-start justify-between rounded-4xl bg-white p-8 md:p-[42px] xl:w-[317px]">
                    <div className="space-y-1">
                      <h3 className="text-heading-5 text-secondary/80 font-normal">Inspo Library</h3>
                      <p>Upload tot 20 referentiebeelden per merk voor visuele sturing.</p>
                    </div>

                    <div className="bg-[#f0fbe3] flex h-[230px] w-full flex-col justify-between rounded-xl p-4 xl:max-w-[233px]">
                      <p className="text-secondary/40 text-tagline-2">Upload afbeeldingen als visuele inspiratie voor uw generaties...</p>

                      <div className="flex items-center justify-end text-right">
                        <LinkButton
                          href="/contact"
                          btnClass="btn-sm-v2 btn-secondary-v2 group-hover/btn-v2:btn-primary-v2">
                          Meer info
                        </LinkButton>
                      </div>
                    </div>
                  </div>
                </div>
              </RevealAnimation>

              {/* card five */}
              <RevealAnimation delay={0.5}>
                <div className="relative col-span-12 flex h-[450px] flex-col items-center justify-between overflow-hidden rounded-4xl bg-white p-8 md:col-span-6 md:p-[42px] lg:col-span-4 xl:col-span-3 xl:w-[317px]">
                  {/* bg gradient img */}
                  <RevealAnimation delay={0.6} direction="left" offset={100}>
                    <figure className="pointer-events-none absolute top-[-188px] left-[-190px] z-10 size-[400px] rotate-[-75deg] select-none">
                      <Image
                        src={multilingualImage}
                        alt="Platform targeting"
                        className="size-full object-cover"
                        width={400}
                        height={400}
                      />
                    </figure>
                  </RevealAnimation>

                  <div className="relative z-20 space-y-1">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">Platform targeting</h3>
                    <p>Kies een platform en krijg platform-specifieke content en captions.</p>
                  </div>

                  <div className="flex h-auto w-full flex-col justify-between space-y-2.5 rounded-xl p-4 max-sm:items-center md:max-w-[233px] lg:h-[166px]">
                    {/* item one */}
                    <RevealAnimation delay={0.5}>
                      <div className="ml-[25px] flex items-center justify-end gap-x-2">
                        <div className="bg-[#f0fbe3] flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">Instagram</span>
                          <figure>
                            <Image src={playIcon} alt="platform icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={avatar39}
                            alt="platform targeting"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>

                    {/* item two */}
                    <RevealAnimation delay={0.5}>
                      <div className="mr-[25px] flex flex-row-reverse items-center justify-start gap-x-2">
                        <div className="bg-[#f0fbe3] flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">LinkedIn</span>
                          <figure>
                            <Image src={playIcon} alt="platform icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={icon553}
                            alt="platform targeting"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>
                    {/* item three */}
                    <RevealAnimation delay={0.6}>
                      <div className="ml-[25px] flex items-center justify-end gap-x-2">
                        <div className="bg-[#f0fbe3] flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">Facebook</span>
                          <figure>
                            <Image src={playIcon} alt="platform icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={avatar39}
                            alt="platform targeting"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>
                    {/* item four */}
                    <RevealAnimation delay={0.6}>
                      <div className="mr-[25px] flex flex-row-reverse items-center justify-start gap-x-2">
                        <div className="bg-[#f0fbe3] flex items-center justify-center gap-x-[9px] rounded-[44px] p-1">
                          <span className="text-secondary/40 text-[10px] leading-[150%] font-normal">Pinterest</span>
                          <figure>
                            <Image src={playIcon} alt="platform icon" className="size-full" width={16} height={16} />
                          </figure>
                        </div>
                        <figure className="size-[34px] shrink-0 overflow-hidden rounded-full">
                          <Image
                            src={icon553}
                            alt="platform targeting"
                            className="size-full object-cover"
                            width={34}
                            height={34}
                          />
                        </figure>
                      </div>
                    </RevealAnimation>
                  </div>
                </div>
              </RevealAnimation>

              {/* card six */}
              <RevealAnimation delay={0.6}>
                <div className="col-span-12 h-[450px] w-full space-y-[74px] rounded-4xl bg-white pt-[42px] lg:col-span-4 lg:max-w-[500px] xl:col-span-6 xl:max-w-[642px]">
                  <div className="space-y-1 px-[42px]">
                    <h3 className="text-heading-5 text-secondary/80 font-normal">High-res export</h3>
                    <p>Exporteer uw content in 1K, 2K of 4K resolutie.</p>
                  </div>

                  {/* resolution options */}
                  <div className="space-y-[54px] pb-[42px] text-center">
                    <div className="flex gap-3 justify-center">
                      {['1K', '2K', '4K'].map((res) => (
                        <span
                          key={res}
                          className={`rounded-full px-6 py-3 text-heading-6 font-normal ${
                            res === '4K' ? 'bg-ns-green text-secondary' : 'bg-[#f0fbe3] text-secondary/60'
                          }`}>
                          {res}
                        </span>
                      ))}
                    </div>
                    <div className="px-[42px]">
                      <div className="h-px w-full bg-gray-200" />
                    </div>
                  </div>
                </div>
              </RevealAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CGFeatures;
