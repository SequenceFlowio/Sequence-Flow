import cardOneImg from '@public/images/ns-img-90.png';
import cardOneImgDark from '@public/images/ns-img-dark-63.png';
import cardTwoImg from '@public/images/ns-img-91.png';
import cardTwoImgDark from '@public/images/ns-img-dark-64.png';
import cardThreeImg from '@public/images/ns-img-92.png';
import cardThreeImgDark from '@public/images/ns-img-dark-65.png';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import RevealAnimation from '../animation/RevealAnimation';

export interface WebApp {
  name: string;
  description: string;
  image?: StaticImageData | string;
  href: string;
  comingSoon?: boolean;
}

export interface ContentSection {
  heading: string;
  paragraphs: string[];
  imageSrc: string;
  imageAlt: string;
}

export interface OplossingsLandingProps {
  badge: string;
  title: string;
  description: string;
  apps: [WebApp, WebApp, WebApp];
  sections: ContentSection[];
}

const cardImgs = [
  { light: cardOneImg, dark: cardOneImgDark },
  { light: cardTwoImg, dark: cardTwoImgDark },
  { light: cardThreeImg, dark: cardThreeImgDark },
];

const AppCard = ({ app, index }: { app: WebApp; index: number }) => {
  const figure = (
    <figure className="bg-background-3 dark:bg-background-7 relative h-[200px] overflow-hidden rounded-2xl">
      {app.image ? (
        <Image
          src={app.image}
          alt={app.name}
          fill
          className={`object-cover transition-all duration-300 ease-out ${app.comingSoon ? 'group-hover:grayscale group-hover:opacity-60' : 'group-hover:scale-[1.03]'}`}
          loading="lazy"
        />
      ) : (
        <>
          <Image
            src={cardImgs[index].light}
            alt={app.name}
            fill
            className={`object-cover transition-all duration-300 ease-out dark:hidden ${app.comingSoon ? 'group-hover:grayscale group-hover:opacity-60' : 'group-hover:scale-[1.03]'}`}
            loading="lazy"
          />
          <Image
            src={cardImgs[index].dark}
            alt={app.name}
            fill
            className={`hidden object-cover transition-all duration-300 ease-out dark:block ${app.comingSoon ? 'group-hover:grayscale group-hover:opacity-60' : 'group-hover:scale-[1.03]'}`}
            loading="lazy"
          />
        </>
      )}
      {app.comingSoon && (
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white/90 px-4 py-1.5 text-sm font-semibold text-secondary shadow-sm backdrop-blur-sm">
            Coming soon
          </span>
        </div>
      )}
    </figure>
  );

  const inner = (
    <>
      <div className={`dark:bg-background-5 rounded-[20px] bg-white p-2.5 transition-all duration-300 ease-out ${!app.comingSoon ? 'group-hover:-translate-y-1 group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] dark:group-hover:shadow-[0_8px_30px_rgba(0,0,0,0.3)]' : ''}`}>
        {figure}
      </div>
      <div className="space-y-1">
        <h3 className={`text-heading-5 flex items-center gap-1.5 transition-colors duration-200 ${app.comingSoon ? 'text-secondary/40 dark:text-accent/40' : 'group-hover:text-[#C7F56F]'}`}>
          {app.name}
          {!app.comingSoon && (
            <svg className="size-4 translate-x-0 opacity-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100" fill="none" viewBox="0 0 16 16">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </h3>
        <p className={app.comingSoon ? 'text-secondary/40 dark:text-accent/40' : ''}>{app.description}</p>
      </div>
    </>
  );

  if (app.comingSoon) {
    return (
      <div className="group block w-full max-w-[409px] cursor-default space-y-3">
        {inner}
      </div>
    );
  }

  return (
    <Link href={app.href} className="group block w-full max-w-[409px] space-y-3 outline-none">
      {inner}
    </Link>
  );
};

const OplossingsLanding = ({
  badge,
  title,
  description,
  apps,
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

      {/* Webapps */}
      <section className="pb-20 md:pb-[100px]" aria-label="Webapps">
        <div className="main-container">
          <div className="flex flex-col items-center justify-center gap-y-8 sm:flex-row sm:gap-x-8">
            {apps.map((app, i) => (
              <RevealAnimation key={app.name} delay={0.2 + i * 0.1}>
                <AppCard app={app} index={i} />
              </RevealAnimation>
            ))}
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
                  <h2 className="mb-5">{section.heading}</h2>
                </RevealAnimation>
                <div className="space-y-4">
                  {section.paragraphs.map((p, idx) => (
                    <RevealAnimation key={idx} delay={0.3 + idx * 0.1}>
                      <p className="text-secondary/60 dark:text-accent/60">{p}</p>
                    </RevealAnimation>
                  ))}
                </div>
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
