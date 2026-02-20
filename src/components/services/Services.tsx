import leadFlow1 from '@/components/content/lead-flow-1.webp';
import leadFlow2 from '@/components/content/lead-flow-2.webp';
import supportFlow1 from '@/components/content/support-flow-1.webp';
import supportFlow2 from '@/components/content/support-flow-2.webp';
import operationsFlow1 from '@/components/content/operations-flow-1.svg';
import operationsFlow2 from '@/components/content/operations-flow-2.webp';
import opsAvatar1 from '@/components/content/operations-flow-avatar-1.webp';
import opsAvatar2 from '@/components/content/operations-flow-avatar-2.webp';
import opsAvatar3 from '@/components/content/operations-flow-avatar-3.webp';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';
import LinkButton from '../ui/button/Button';

const Services = () => {
  return (
    <section className="pt-32 pb-24 sm:pt-36 md:pt-42 md:pb-32 lg:pb-44 xl:pt-[180px] xl:pb-[200px]">
      <div className="main-container">
        <div className="mb-[70px] space-y-5 text-center">
          <RevealAnimation delay={0.2}>
            <span className="badge badge-green">Oplossingen</span>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <h2>Drie flows die uw bedrijf transformeren</h2>
          </RevealAnimation>
        </div>
        <div className="flex flex-wrap gap-4 space-y-[42px]">
          <RevealAnimation delay={0.4}>
            <div className="border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 lg:max-w-full lg:p-[42px]">
              <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Lead Flow</h3>
                      <p className="w-full max-w-[410px]">
                        Automatiseer uw volledige lead generatie — van prospect identificatie en outreach tot scoring en
                        follow-up. Meer gekwalificeerde leads, zonder extra personeel.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/oplossingen/lead-flow"
                        btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2">
                        Meer info
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="w-full max-w-[233px] overflow-hidden rounded-2xl">
                      <Image src={leadFlow1} alt="lead flow" className="w-full" />
                    </figure>
                    <figure className="w-full max-w-[350px] overflow-hidden rounded-[20px]">
                      <Image src={leadFlow2} alt="lead flow" className="w-full" />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.5}>
            <div className="border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 lg:max-w-full lg:p-[42px]">
              <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-center gap-8">
                    <figure className="h-full max-h-[317px] w-full max-w-[326px] overflow-hidden rounded-[20px]">
                      <Image src={supportFlow1} alt="support flow" className="h-full w-full object-cover" />
                    </figure>
                    <figure className="h-full max-h-[178px] w-full max-w-[255px] overflow-hidden rounded-2xl">
                      <Image src={supportFlow2} alt="support flow" className="h-full w-full object-cover" />
                    </figure>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Support Flow</h3>
                      <p className="w-full max-w-[493px]">
                        Laat AI uw eerste lijn klantenservice overnemen. Automatische antwoorden, intelligent ticket
                        routing en 24/7 beschikbaarheid — zonder wachttijden voor uw klanten.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/oplossingen/support-flow"
                        btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2">
                        Meer info
                      </LinkButton>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.6}>
            <div className="border-stroke-1 dark:border-stroke-7 bg-background-1 dark:bg-background-6 rounded-[20px] border p-7 lg:max-w-full lg:p-[42px]">
              <div className="grid grid-cols-12 items-center gap-y-10 lg:gap-20 xl:gap-[100px]">
                <div className="col-span-12 lg:col-span-6">
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <h3>Operations Flow</h3>
                      <p className="w-full max-w-[380px]">
                        Zet uw back-office op de automatische piloot. Van CRM-synchronisatie en rapportage tot
                        administratie — alles draait zonder handmatig werk.
                      </p>
                    </div>
                    <div>
                      <LinkButton
                        href="/oplossingen/operations-flow"
                        btnClass="btn-md-v2 btn-v2-white group-hover/btn-v2:btn-primary-v2">
                        Meer info
                      </LinkButton>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <div className="flex items-start gap-8">
                    <figure className="h-full max-h-[345px] w-full max-w-[350px] overflow-hidden rounded-[20px]">
                      <Image src={operationsFlow1} alt="operations flow" className="h-full w-full object-cover" />
                    </figure>
                    <div className="space-y-8">
                      <figure className="h-full max-h-[190px] w-full max-w-[286px] overflow-hidden rounded-2xl">
                        <Image src={operationsFlow2} alt="operations flow" className="h-full w-full object-cover" />
                      </figure>
                      <div>
                        <div className="space-y-4">
                          <div className="flex cursor-pointer -space-x-3.5">
                            <Image
                              className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white"
                              src={opsAvatar1}
                              alt="Avatar 1"
                            />
                            <Image
                              className="bg-ns-green inline-block size-11 rounded-full ring-4 ring-white"
                              src={opsAvatar2}
                              alt="Avatar 2"
                            />
                            <Image
                              className="bg-ns-green relative z-0 inline-block size-11 rounded-full ring-4 ring-white"
                              src={opsAvatar3}
                              alt="Avatar 3"
                            />
                            <div className="bg-ns-green text-secondary/80 text-tagline-3 relative z-10 inline-flex size-11 items-center justify-center rounded-full font-medium ring-4 ring-white">
                              99+
                            </div>
                          </div>
                          <div>
                            <p className="text-secondary dark:text-accent font-medium">Vertrouwd door 50+</p>
                            <p className="text-tagline-2 font-normal">Bedrijven in de Benelux</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </RevealAnimation>
        </div>
      </div>
    </section>
  );
};
Services.displayName = 'Services';
export default Services;
