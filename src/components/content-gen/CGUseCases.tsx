import RevealAnimation from '@/components/animation/RevealAnimation';
import teamImage546 from '@public/images/ns-img-546.png';
import teamImage547 from '@public/images/ns-img-547.png';
import teamImage548 from '@public/images/ns-img-548.png';
import teamImage549 from '@public/images/ns-img-549.png';
import teamImage550 from '@public/images/ns-img-550.png';
import teamImage551 from '@public/images/ns-img-551.png';
import { StaticImageData } from 'next/image';
import Marquee from 'react-fast-marquee';
import CGUseCaseCard from './CGUseCaseCard';

interface UseCaseItem {
  id: string;
  title: string;
  imageSrc: StaticImageData;
  className?: string;
}

const useCaseItems: UseCaseItem[] = [
  {
    id: 'ecommerce',
    title: 'E-commerce',
    imageSrc: teamImage551,
    className: 'ml-6',
  },
  {
    id: 'saas-tech',
    title: 'SaaS & Tech',
    imageSrc: teamImage546,
  },
  {
    id: 'marketing-agency',
    title: 'Marketing Agency',
    imageSrc: teamImage547,
  },
  {
    id: 'retail-fashion',
    title: 'Retail & Fashion',
    imageSrc: teamImage548,
  },
  {
    id: 'hospitality',
    title: 'Hospitality',
    imageSrc: teamImage549,
  },
  {
    id: 'b2b',
    title: 'B2B Bedrijven',
    imageSrc: teamImage550,
  },
];

const CGUseCases = () => {
  return (
    <section
      className="space-y-[76px] overflow-hidden py-[80px] md:py-[120px] lg:py-[154px]"
      aria-labelledby="use-cases-heading"
      itemScope
      itemType="https://schema.org/ItemList">
      <div className="main-container">
        {/* content */}
        <div className="space-y-3 text-center lg:text-left">
          <RevealAnimation delay={0.1}>
            <h2 id="use-cases-heading" className="mx-auto max-w-[500px] font-normal lg:mx-0" itemProp="name">
              Gemaakt voor elk type merk en <span className="text-ns-green">business</span>
            </h2>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <p className="text-tagline-1 mx-auto max-w-[538px] font-normal lg:mx-0" itemProp="description">
              Van e-commerce tot agency — Content Gen past zich aan uw business aan.
            </p>
          </RevealAnimation>
        </div>
      </div>

      {/* marquee */}
      <RevealAnimation delay={0.3}>
        <div className="relative" aria-label="Use cases for brands and businesses">
          <Marquee autoFill speed={50}>
            <div className="flex items-center justify-center gap-x-6">
              {useCaseItems.map((item) => (
                <CGUseCaseCard key={item.id} {...item} />
              ))}
            </div>
          </Marquee>

          <div
            className="absolute top-0 left-0 z-10 h-[110%] w-[120px] rotate-180 md:w-[180px] lg:w-[300px] xl:w-[426px]"
            style={{ background: 'linear-gradient(270deg, #ffffff 16.67%, rgba(255, 255, 255, 0) 100%)' }}
          />

          <div
            className="absolute top-0 right-0 z-10 h-[110%] w-[120px] md:w-[180px] lg:w-[300px] xl:w-[426px]"
            style={{ background: 'linear-gradient(270deg, #ffffff 16.67%, rgba(255, 255, 255, 0) 100%)' }}
          />
        </div>
      </RevealAnimation>
    </section>
  );
};

export default CGUseCases;
