import { FooterData } from '@/interface';

export const footerLinks: FooterData[] = [
  {
    title: 'Oplossingen',
    links: [
      { label: 'Lead Flow', href: '/oplossingen/lead-flow' },
      { label: 'Support Flow', href: '/oplossingen/support-flow' },
      { label: 'Operations Flow', href: '/oplossingen/operations-flow' },
    ],
  },
  {
    title: 'Menu',
    links: [
      { label: 'Flow bouwen', href: '/hoe-wij-werken' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Juridisch',
    links: [
      { label: 'Algemene Voorwaarden', href: '/algemene-voorwaarden' },
      { label: 'Privacyverklaring', href: '/privacyverklaring' },
      { label: 'Verwerkersovereenkomst', href: '/verwerkersovereenkomst' },
      { label: 'AI & Data Ethiek', href: '/ai-data-ethiek' },
      { label: 'Service Level Agreement', href: '/service-level-agreement' },
      { label: 'Acceptable Use Policy', href: '/acceptable-use-policy' },
    ],
  },
];
