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
    id: 'menu',
    title: 'Menu',
    submenu: [
      { id: 'how-we-work', label: 'Hoe wij werken', href: '/hoe-wij-werken' },
      { id: 'blog', label: 'Blog', href: '/blog' },
    ],
  },
];
