import RevealAnimation from '@/components/animation/RevealAnimation';
import { cn } from '@/utils/cn';

export interface TemplateCard {
  name: string;
  type: 'ad' | 'social';
}

const templateBadges: { row1: TemplateCard[]; row2: TemplateCard[]; row3: TemplateCard[] } = {
  row1: [
    { name: 'Headline Hero', type: 'ad' },
    { name: 'Offer/Promo', type: 'ad' },
    { name: 'Testimonial', type: 'ad' },
  ],
  row2: [
    { name: 'UGC Lifestyle', type: 'ad' },
    { name: 'Us vs. Them', type: 'ad' },
    { name: 'Tips & Tricks', type: 'social' },
    { name: 'Brand Story', type: 'social' },
  ],
  row3: [
    { name: 'Product Spotlight', type: 'social' },
    { name: 'How-To', type: 'social' },
    { name: 'Before & After', type: 'social' },
  ],
};

const TemplateBadge = ({ template, className }: { template: TemplateCard; className?: string }) => (
  <div
    className={cn(
      'shadow-sm flex min-w-[160px] items-center justify-start gap-x-3 rounded-full border border-gray-200 bg-white py-1 pr-4 pl-1 lg:min-w-[192px]',
      className,
    )}>
    <div className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#f0fbe3]">
      <span className="text-xs font-bold text-secondary">{template.type === 'ad' ? 'Ad' : 'S'}</span>
    </div>
    <div>
      <p className="text-tagline-1 text-secondary font-normal">{template.name}</p>
      <p className="text-tagline-2 font-normal text-nowrap">
        {template.type === 'ad' ? 'Advertentie' : 'Social'}
      </p>
    </div>
  </div>
);

const CGTemplatesBadges = () => {
  return (
    <div className="flex w-full max-w-[811px] flex-col gap-y-3 overflow-hidden">
      {/* row one */}
      <RevealAnimation delay={0.3} direction="left" offset={80}>
        <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
          {templateBadges.row1.map((template) => (
            <TemplateBadge key={template.name} template={template} />
          ))}
        </div>
      </RevealAnimation>

      {/* row two */}
      <RevealAnimation delay={0.4} direction="right" offset={80}>
        <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
          {templateBadges.row2.map((template, index) => (
            <TemplateBadge
              key={template.name}
              template={template}
              className={cn(index === 1 && 'max-[376px]:hidden')}
            />
          ))}
        </div>
      </RevealAnimation>

      {/* row three */}
      <RevealAnimation delay={0.5} direction="left" offset={80}>
        <div className="flex flex-row items-center justify-center gap-3 max-[376px]:flex-col max-sm:flex-wrap">
          {templateBadges.row3.map((template, index) => (
            <TemplateBadge
              key={template.name}
              template={template}
              className={cn(index === 0 && 'max-[376px]:hidden')}
            />
          ))}
        </div>
      </RevealAnimation>
    </div>
  );
};

export default CGTemplatesBadges;
