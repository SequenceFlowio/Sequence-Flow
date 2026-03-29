import { cn } from '@/utils/cn';
import Image, { StaticImageData } from 'next/image';

interface CGUseCaseCardProps {
  title: string;
  imageSrc: string | StaticImageData;
  className?: string;
}

const CGUseCaseCard = ({ title, imageSrc, className }: CGUseCaseCardProps) => {
  return (
    <div
      className={cn('w-[343px] shrink-0 space-y-6', className)}
      role="listitem"
      itemScope
      itemType="https://schema.org/ImageObject"
      aria-label={`${title} use case`}>
      <h3 className="text-heading-5 font-normal" itemProp="name">
        {title}
      </h3>
      <figure className="max-w-[343px] overflow-hidden rounded-4xl max-sm:h-[300px]">
        <Image
          src={imageSrc}
          alt={`Visual representation of ${title} use case for Content Gen`}
          className="size-full object-cover"
          itemProp="contentUrl"
          title={`${title} use case image`}
          width={343}
          height={300}
        />
      </figure>
    </div>
  );
};

export default CGUseCaseCard;
