import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import linkedin from '@public/images/icons/linkedin.svg';
import xTwitter from '@public/images/icons/x-twitter.svg';
import instagram from '@public/images/icons/instagram.svg';
import facebook from '@public/images/icons/facebook.svg';
import reddit from '@public/images/icons/reddit.svg';
import logoZwart from '@/components/content/sequenceflow-logo-new.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/sequenceflow-io/', icon: linkedin, sizeClass: 'size-6' },
  { name: 'X', href: 'https://x.com/SequenceFlow', icon: xTwitter, sizeClass: 'size-[18px]' },
  { name: 'Instagram', href: 'https://www.instagram.com/sequenceflow.io', icon: instagram, sizeClass: 'size-6' },
  { name: 'Facebook', href: 'https://www.facebook.com/sequenceflow', icon: facebook, sizeClass: 'size-6' },
  { name: 'Reddit', href: 'https://www.reddit.com/user/Sequenceflowio/', icon: reddit, sizeClass: 'size-6' },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <footer className={cn('bg-white relative z-0 overflow-hidden', className)}>
      <div className="main-container px-5">
        {/* CTA Section */}
        <div className="pt-16 pb-12 xl:pt-[90px]">
          <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
            <div className="max-w-[649px] space-y-3 text-center xl:text-left">
              <span className="badge !badge-green">Start vandaag</span>
              <h2 className="md:text-heading-2 text-heading-5 text-gray-900">Klaar om te automatiseren?</h2>
              <p className="text-gray-500">
                Ontdek in 1 minuut hoeveel tijd uw bedrijf verliest aan handmatig werk.
              </p>
            </div>
            <div className="flex justify-center xl:justify-start">
              <Link
                href="/contact"
                className="btn btn-xl btn-primary first-letter:uppercase">
                <span>Start uw Flow Scan</span>
              </Link>
            </div>
          </div>
        </div>
        <FooterDivider className="bg-gray-200" />
        {/* Footer content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pt-12 pb-12">
          <div className="max-w-[306px]">
            <figure>
              <Image src={logoZwart} alt="Logo" />
            </figure>
            <p className="text-gray-500 text-tagline-1 mt-4 mb-7 font-normal">
              Wij bouwen, implementeren en beheren intelligente workflows die uw bedrijf laten groeien zonder extra
              personeel.
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <Link key={social.name} target="_blank" href={social.href}>
                  <span className="sr-only">{social.name}</span>
                  <Image
                    className={cn('invert opacity-40 transition-opacity hover:opacity-70', social.sizeClass)}
                    src={social.icon}
                    alt={social.name}
                  />
                </Link>
              ))}
            </div>
            <Link
              href="mailto:hallo@sequenceflow.io"
              className="text-gray-500 text-tagline-2 mt-4 inline-block font-normal hover:text-gray-900 transition-colors">
              hallo@sequenceflow.io
            </Link>
            <p className="text-gray-400 text-tagline-3 mt-2 font-normal">KvK: 78237750</p>
          </div>
          <div className="flex flex-wrap gap-x-16 gap-y-8">
            {footerLinks.map((group) => (
              <div key={group.title}>
                <h6 className="text-gray-900 mb-4 text-sm font-medium">{group.title}</h6>
                <div className="flex flex-col gap-3">
                  {group.links.map(({ label, href }) => (
                    <Link
                      key={label}
                      href={href}
                      className="text-gray-500 text-tagline-1 hover:text-gray-900 transition-colors">
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <FooterDivider className="bg-gray-200" />
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 py-6">
          <p className="text-tagline-1 text-gray-500 font-normal">
            &copy; 2026 SequenceFlow. Alle rechten voorbehouden.
          </p>
          <p className="text-tagline-3 text-gray-400 font-normal">KvK: 78237750</p>
        </div>
      </div>
      {/* Big brand name at bottom */}
      <div className="relative overflow-hidden leading-none select-none">
        <div className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-white to-transparent z-10" />
        <p
          className="text-center font-bold text-gray-100 whitespace-nowrap"
          style={{ fontSize: 'clamp(60px, 12vw, 160px)', lineHeight: 1, marginBottom: '-0.15em' }}>
          SequenceFlow
        </p>
      </div>
    </footer>
  );
};
Footer.displayName = 'Footer';
export default Footer;
