'use client';
import RevealAnimation from '@/components/animation/RevealAnimation';
import LinkButton from '@/components/ui/button/Button';
import { MobileMenuProvider } from '@/context/MobileMenuContext';
import { mobileMenuData } from '@/data/navbar-data';
import { useNavbarScroll } from '@/hooks/useScrollHeader';
import { cn } from '@/utils/cn';
import logoZwart from '@/components/content/sequenceflow-logo-new.png';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import MobileMenu from '../mobile-menu/MobileMenu';
import MobileMenuButton from './MobileMenuButton';

interface NavLink {
  label: string;
  href: string;
  submenu?: { label: string; href: string }[];
}

const navLinks: NavLink[] = [
  {
    label: 'Oplossingen',
    href: '/oplossingen',
    submenu: [
      { label: 'Lead Flow', href: '/oplossingen/lead-flow' },
      { label: 'Support Flow', href: '/oplossingen/support-flow' },
      { label: 'Operations Flow', href: '/oplossingen/operations-flow' },
    ],
  },
  { label: 'Hoe wij werken', href: '/hoe-wij-werken' },
  { label: 'Blog', href: '/blog' },
];

const Navbar = ({ showTopNav }: { showTopNav: boolean }) => {
  const { isScrolled } = useNavbarScroll(150);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <MobileMenuProvider>
      <header
        className={cn(
          'lp:!max-w-[1290px] fixed top-5 left-1/2 z-50 mx-auto w-full max-w-[350px] -translate-x-1/2 transition-all duration-500 ease-in-out max-[400px]:max-w-[350px] min-[425px]:max-w-[375px] min-[500px]:max-w-[450px] sm:max-w-[540px] md:max-w-[720px] lg:max-w-[960px] xl:max-w-[1140px]',
          showTopNav ? 'top-13.5' : 'top-5',
          isScrolled && 'top-2',
        )}>
        <RevealAnimation direction="up" offset={100} delay={0.1} instant>
          <div className="dark:bg-background-7 flex items-center justify-between rounded-full bg-white/60 px-2.5 py-2.5 backdrop-blur-[25px] xl:py-0">
            <div>
              <Link href="/">
                <span className="sr-only">Home</span>
                <figure className="max-w-[198px]">
                  <Image src={logoZwart} alt="Logo" className="dark:invert" />
                </figure>
              </Link>
            </div>
            <nav className="hidden items-center xl:flex">
              <ul className="flex items-center">
                {navLinks.map((link) => (
                  <li
                    key={link.href}
                    className="nav-item relative cursor-pointer py-2.5"
                    onMouseEnter={() => link.submenu && setOpenDropdown(link.href)}
                    onMouseLeave={() => link.submenu && setOpenDropdown(null)}>
                    <Link
                      href={link.href}
                      className="hover:border-stroke-2 dark:hover:border-stroke-7 text-tagline-1 text-secondary/60 hover:text-secondary dark:text-accent/60 dark:hover:text-accent flex items-center rounded-full border border-transparent px-4 py-2 font-normal transition-all duration-200">
                      <span>{link.label}</span>
                      {link.submenu && (
                        <svg
                          className={cn('ml-1 size-3.5 transition-transform duration-200', openDropdown === link.href && 'rotate-180')}
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </Link>
                    {link.submenu && (
                      <div
                        className={cn(
                          'absolute top-full left-0 z-50 min-w-[200px] pt-2 transition-all duration-200',
                          openDropdown === link.href ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0',
                        )}>
                        <div className="rounded-2xl bg-white/90 p-2 shadow-lg backdrop-blur-[25px] dark:bg-background-7/90">
                          {link.submenu.map((subItem) => (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              className="text-tagline-1 text-secondary/60 hover:text-secondary hover:bg-background-12 dark:text-accent/60 dark:hover:text-accent dark:hover:bg-background-8 block rounded-xl px-4 py-2.5 font-normal transition-all duration-200">
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
            <div className="hidden items-center justify-center xl:flex">
              <LinkButton href="/contact" btnClass="btn-md-v2 btn-primary-v2 border group-hover/btn-v2:btn-secondary-v2">
                Start uw Flow Scan
              </LinkButton>
            </div>
            <MobileMenuButton />
          </div>
        </RevealAnimation>
      </header>
      <MobileMenu menuData={mobileMenuData} />
    </MobileMenuProvider>
  );
};

Navbar.displayName = 'Navbar';
export default Navbar;
