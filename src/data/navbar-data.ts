import { MobileMenuGroup } from '@/components/shared/mobile-menu/MobileMenu';

export const mobileMenuData: MobileMenuGroup[] = [
  {
    id: 'oplossingen',
    title: 'Oplossingen',
    submenu: [
      { id: 'lead-flow', label: 'Lead Flow', href: '/oplossingen/lead-flow' },
      { id: 'support-flow', label: 'Support Flow', href: '/oplossingen/support-flow' },
      { id: 'operations-flow', label: 'Operations Flow', href: '/oplossingen/operations-flow' },
    ],
  },
  {
    id: 'hoe-wij-werken',
    title: 'Hoe wij werken',
    href: '/hoe-wij-werken',
    submenu: [],
  },
  {
    id: 'blog',
    title: 'Blog',
    href: '/blog',
    submenu: [],
  },
  {
    id: 'contact',
    title: 'Contact',
    href: '/contact-us',
    submenu: [],
  },
];
