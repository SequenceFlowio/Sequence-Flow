import ProcessImage from '@/components/content/hoe-wij-werken.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

const ProcessOperation = () => {
  return (
    <section className="bg-background-1 dark:bg-background-6 space-y-[70px] py-[100px]">
      <div className="main-container space-y-[70px]">
        <div className="mx-auto max-w-[804px] space-y-5 text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green">Starten</span>
          </RevealAnimation>
          <div className="space-y-3 text-center">
            <RevealAnimation delay={0.2}>
              <h2 className="mx-auto max-w-[624px]">Hoe start u met SequenceFlow?</h2>
            </RevealAnimation>
            <RevealAnimation delay={0.3}>
              <p className="mx-auto max-w-[802px]">
                In drie eenvoudige stappen bent u klaar om uw bedrijfsprocessen te automatiseren. Wij begeleiden u
                van begin tot eind.
              </p>
            </RevealAnimation>
          </div>
        </div>
        <div className="grid grid-cols-12 items-center gap-y-14 md:gap-y-20 lg:gap-20 xl:gap-[100px]">
          <div className="col-span-12 lg:col-span-6 xl:col-span-5">
            <RevealAnimation delay={0.4}>
              <div>
                <figure className="mx-auto max-h-[547px] max-w-[478px] lg:mx-0">
                  <Image src={ProcessImage} alt="process" className="h-full w-full object-cover" />
                </figure>
              </div>
            </RevealAnimation>
          </div>
          <div className="col-span-12 lg:col-span-6 xl:col-span-7">
            <div className="space-y-5">
              <RevealAnimation delay={0.5}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div>
                    <div className="bg-ns-green text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                      1
                    </div>
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Neem contact op
                    </h3>
                    <p>
                      Plan een vrijblijvend gesprek in waarin we uw wensen en huidige processen bespreken.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.6}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className="bg-ns-green text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    2
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">
                      Ontvang een voorstel
                    </h3>
                    <p>
                      Wij analyseren uw situatie en presenteren een op maat gemaakt voorstel met concrete oplossingen.
                    </p>
                  </div>
                </div>
              </RevealAnimation>
              <RevealAnimation delay={0.7}>
                <div className="bg-background-3 dark:bg-background-7 mx-auto flex items-start gap-4 rounded-2xl px-7 py-5 sm:max-w-[596px] sm:gap-[22px] sm:rounded-[20px] sm:px-[34px] sm:py-6 lg:mx-0">
                  <div className="bg-ns-green text-tagline-1 text-secondary flex size-10 shrink-0 items-center justify-center rounded-full font-semibold">
                    3
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-secondary dark:text-accent text-lg leading-[27px] font-medium">Start met automatiseren</h3>
                    <p>
                      Na akkoord gaan we direct aan de slag met het bouwen en implementeren van uw flows.
                    </p>
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

export default ProcessOperation;
