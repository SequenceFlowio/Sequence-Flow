import RevealAnimation from '@/components/animation/RevealAnimation';
import { footerLinks } from '@/data/footer-data';
import { cn } from '@/utils/cn';
import linkedin from '@public/images/icons/linkedin.svg';
import xTwitter from '@public/images/icons/x-twitter.svg';
import tiktok from '@public/images/icons/tiktok.svg';
import instagram from '@public/images/icons/instagram.svg';
import facebook from '@public/images/icons/facebook.svg';
import reddit from '@public/images/icons/reddit.svg';
import gradientImg from '@public/images/ns-img-532.png';
import logoWit from '@/components/new-logo/sequenceflow-logo-wit.png';
import Image from 'next/image';
import Link from 'next/link';
import FooterDivider from './FooterDivider';
import CtaInputForm from '../cta/CtaInputForm';

const socialLinks = [
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/sequenceflow', icon: linkedin, sizeClass: 'size-6' },
  { name: 'X', href: 'https://x.com/SequenceFlow', icon: xTwitter, sizeClass: 'size-[18px]' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@sequenceflowio', icon: tiktok, sizeClass: 'size-[18px]' },
  { name: 'Instagram', href: 'https://www.instagram.com/sequenceflow.io', icon: instagram, sizeClass: 'size-6' },
  { name: 'Facebook', href: 'https://www.facebook.com/sequenceflow', icon: facebook, sizeClass: 'size-6' },
  { name: 'Reddit', href: 'https://www.reddit.com/user/Sequenceflowio/', icon: reddit, sizeClass: 'size-6' },
];

const Footer = ({ className }: { className?: string }) => {
  return (
    <>
    <div className="h-32 bg-gradient-to-b from-transparent to-[#1a1a2e] dark:to-background-8" />
    <footer className={cn('bg-[#1a1a2e] dark:bg-background-8 relative z-0 overflow-hidden', className)}>
      <RevealAnimation delay={0.3} offset={50} direction="up">
        <figure className="pointer-events-none absolute -top-[1320px] left-1/2 -z-1 size-[1635px] -translate-x-1/2 select-none">
          <Image src={gradientImg} alt="footer-four-gradient" className="size-full object-cover" />
        </figure>
      </RevealAnimation>
      <div className="main-container px-5">
        {/* CTA Section */}
        <div className="pt-16 pb-12 xl:pt-[90px]">
          <RevealAnimation delay={0.1}>
            <div className="flex flex-col items-center justify-between gap-8 xl:flex-row">
              <div className="max-w-[649px] space-y-3 text-center xl:text-left">
                <span className="badge !badge-green">Start vandaag</span>
                <h2 className="md:text-heading-2 text-heading-5 text-accent">Klaar om te automatiseren?</h2>
                <p className="text-accent/60">
                  Laat uw e-mailadres achter en wij nemen contact met u op voor een vrijblijvend gesprek.
                </p>
              </div>
              <div className="w-full max-w-[562px] lg:pl-9">
                <CtaInputForm ctaBtnText="Verstuur" placeholder="Vul uw e-mailadres in" inputFieldClass="!border-accent/20 !text-accent !placeholder:text-accent/60" />
              </div>
            </div>
          </RevealAnimation>
        </div>
        <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
        {/* Footer content */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 pt-12 pb-12">
          <RevealAnimation delay={0.1}>
            <div className="max-w-[306px]">
              <figure>
                <Image src={logoWit} alt="Logo" />
              </figure>
              <p className="text-accent/60 text-tagline-1 mt-4 mb-7 font-normal">
                Wij bouwen, implementeren en beheren intelligente workflows die uw bedrijf laten groeien zonder extra
                personeel.
              </p>
              <div className="flex items-center gap-3">
                {socialLinks.map((social) => (
                  <Link key={social.name} target="_blank" href={social.href}>
                    <span className="sr-only">{social.name}</span>
                    <Image className={cn('opacity-60 transition-opacity hover:opacity-100', social.sizeClass)} src={social.icon} alt={social.name} />
                  </Link>
                ))}
              </div>
            </div>
          </RevealAnimation>
          <RevealAnimation delay={0.2}>
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              {footerLinks.map((group) => (
                <div key={group.title}>
                  <h6 className="text-accent mb-4 text-sm font-medium">{group.title}</h6>
                  <div className="flex flex-col gap-3">
                    {group.links.map(({ label, href }) => (
                      <Link key={label} href={href} className="footer-link text-tagline-1">
                        {label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </RevealAnimation>
        </div>
        <div className="relative pt-[26px] pb-[42px] text-center">
          <FooterDivider className="bg-accent/10 dark:bg-stroke-6" />
          <RevealAnimation delay={0.7} offset={10} start="top 105%">
            <p className="text-tagline-1 text-primary-50 font-normal">
              Copyright &copy;SequenceFlow. Flow-as-a-Service voor moderne bedrijven
            </p>
          </RevealAnimation>
        </div>
      </div>
    </footer>
    </>
  );
};
Footer.displayName = 'Footer';
export default Footer;
