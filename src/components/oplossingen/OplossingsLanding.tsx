import cardOneImg from '@public/images/ns-img-90.png';
import cardOneImgDark from '@public/images/ns-img-dark-63.png';
import cardTwoImg from '@public/images/ns-img-91.png';
import cardTwoImgDark from '@public/images/ns-img-dark-64.png';
import cardThreeImg from '@public/images/ns-img-92.png';
import cardThreeImgDark from '@public/images/ns-img-dark-65.png';
import Image from 'next/image';
import RevealAnimation from '../animation/RevealAnimation';

export interface WebApp {
  name: string;
  description: string;
}

export interface FeatureItem {
  title: string;
  description: string;
}

export interface ContentSection {
  heading: string;
  intro: string;
  items: FeatureItem[];
  imageSrc: string;
  imageAlt: string;
}

export interface OplossingsLandingProps {
  badge: string;
  title: string;
  description: string;
  apps: [WebApp, WebApp, WebApp];
  appsHeading: string;
  appsDescription: string;
  sections: ContentSection[];
}

const cardImgs = [
  { light: cardOneImg, dark: cardOneImgDark },
  { light: cardTwoImg, dark: cardTwoImgDark },
  { light: cardThreeImg, dark: cardThreeImgDark },
];

const OplossingsLanding = ({
  badge,
  title,
  description,
  apps,
  appsHeading,
  appsDescription,
  sections,
}: OplossingsLandingProps) => {
  return (
    <main className="bg-background-3 dark:bg-background-7">
      {/* Hero */}
      <section className="pt-32 pb-16 sm:pt-36 md:pt-42 xl:pt-[180px]">
        <div className="main-container text-center">
          <RevealAnimation delay={0.1}>
            <span className="badge badge-green mb-4">{badge}</span>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <h1 className="mx-auto max-w-[820px] mb-4">{title}</h1>
          </RevealAnimation>
          <RevealAnimation delay={0.3}>
            <p className="mx-auto max-w-[640px] text-secondary/60 dark:text-accent/60">{description}</p>
          </RevealAnimation>
        </div>
      </section>

      {/* Webapps — Features card layout */}
      <section className="pb-20 md:pb-[100px]" aria-label="Webapps">
        <div className="main-container">
          <div className="space-y-[70px]">
            <div className="space-y-3 text-center">
              <RevealAnimation delay={0.2}>
                <h2 className="mx-auto max-w-[814px]">{appsHeading}</h2>
              </RevealAnimation>
              <RevealAnimation delay={0.3}>
                <p className="mx-auto max-w-[640px]">{appsDescription}</p>
              </RevealAnimation>
            </div>

            <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">
              {apps.map((app, i) => (
                <RevealAnimation key={app.name} delay={0.4 + i * 0.1}>
                  <div className="space-y-3">
                    <div className="dark:bg-background-5 w-full max-w-[409px] rounded-[20px] bg-white p-2.5">
                      <figure className="bg-background-3 dark:bg-background-7 overflow-hidden rounded-2xl p-4">
                        <Image
                          src={cardImgs[i].light}
                          alt={app.name}
                          className="h-full w-full object-cover dark:hidden"
                          loading="lazy"
                        />
                        <Image
                          src={cardImgs[i].dark}
                          alt={app.name}
                          className="hidden h-full w-full object-cover dark:block"
                          loading="lazy"
                        />
                      </figure>
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-heading-5">{app.name}</h3>
                      <p>{app.description}</p>
                    </div>
                  </div>
                </RevealAnimation>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content sections */}
      {sections.map((section, i) => (
        <section
          key={section.heading}
          className={`py-16 md:py-20 ${i % 2 === 1 ? 'bg-background-1 dark:bg-background-6' : ''}`}>
          <div className="main-container">
            <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-20">
              <div className={`flex-1 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
                <RevealAnimation delay={0.2}>
                  <h2 className="mb-4">{section.heading}</h2>
                </RevealAnimation>
                <RevealAnimation delay={0.3}>
                  <p className="text-secondary/60 dark:text-accent/60 mb-6">{section.intro}</p>
                </RevealAnimation>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <RevealAnimation key={item.title} delay={0.4}>
                      <li className="flex items-start gap-3">
                        <span className="mt-1 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <svg className="size-3 text-primary" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span>
                          <strong className="text-secondary dark:text-accent font-medium">{item.title}</strong>
                          {item.description && (
                            <span className="text-secondary/60 dark:text-accent/60"> – {item.description}</span>
                          )}
                        </span>
                      </li>
                    </RevealAnimation>
                  ))}
                </ul>
              </div>
              <div className={`flex-1 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
                <RevealAnimation delay={0.3} direction="up">
                  <figure className="overflow-hidden rounded-2xl">
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      width={700}
                      height={480}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                </RevealAnimation>
              </div>
            </div>
          </div>
        </section>
      ))}

    </main>
  );
};

OplossingsLanding.displayName = 'OplossingsLanding';
export default OplossingsLanding;
