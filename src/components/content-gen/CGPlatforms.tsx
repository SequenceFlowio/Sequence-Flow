import RevealAnimation from '@/components/animation/RevealAnimation';
import Marquee from 'react-fast-marquee';

const platforms = [
  { id: 'instagram', name: 'Instagram' },
  { id: 'facebook', name: 'Facebook' },
  { id: 'linkedin', name: 'LinkedIn' },
  { id: 'tiktok', name: 'TikTok' },
  { id: 'pinterest', name: 'Pinterest' },
  { id: 'youtube', name: 'YouTube' },
  { id: 'x-twitter', name: 'X / Twitter' },
  { id: 'reddit', name: 'Reddit' },
  { id: 'snapchat', name: 'Snapchat' },
  { id: 'threads', name: 'Threads' },
];

const CGPlatforms = () => {
  return (
    <section
      className="py-16 lg:py-28 xl:py-39"
      aria-labelledby="platforms-heading"
      aria-label="Supported platforms and channels">
      <div className="main-container">
        <div className="relative overflow-hidden text-center">
          <RevealAnimation delay={0.1}>
            <h2 id="platforms-heading" className="mx-auto mb-14 max-w-[800px] text-center font-normal">
              Genereer content voor elk platform en kanaal
            </h2>
          </RevealAnimation>

          <RevealAnimation delay={0.2}>
            <div
              className="logos-marquee-container mt-14 overflow-hidden"
              aria-label="Platforms supported by Content Gen">
              <Marquee autoFill speed={50} gradient={false}>
                <div className="flex items-center justify-center gap-x-4">
                  {platforms.map((platform) => (
                    <div
                      key={platform.id}
                      className="flex h-[45px] shrink-0 first:ml-4 items-center justify-center rounded-full border border-gray-200 bg-white px-6 shadow-sm">
                      <span className="text-tagline-1 text-secondary/70 font-medium whitespace-nowrap">
                        {platform.name}
                      </span>
                    </div>
                  ))}
                </div>
              </Marquee>
            </div>
          </RevealAnimation>

          {/* left gradient */}
          <div
            className="absolute bottom-[0%] left-0 h-[80px] w-[80px] sm:h-[130px] md:w-[150px] xl:left-[-20%] 2xl:w-[455px]"
            style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)' }}
            aria-hidden="true"
          />

          {/* right gradient */}
          <div
            className="absolute right-0 bottom-[0%] h-[80px] w-[80px] rotate-180 sm:h-[130px] md:w-[150px] xl:right-[-20%] 2xl:w-[455px]"
            style={{ background: 'linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #fff 39.14%)' }}
            aria-hidden="true"
          />
        </div>
      </div>
    </section>
  );
};

export default CGPlatforms;
