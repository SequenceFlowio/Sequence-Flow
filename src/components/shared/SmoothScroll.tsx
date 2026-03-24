'use client';
import { ReactLenis, useLenis } from 'lenis/react';
import { usePathname, useSearchParams } from 'next/navigation';
import { ReactNode, Suspense, useEffect, useRef } from 'react';

// Isolated component so useSearchParams only suspends this null-returning node,
// never the main {children} content.
function ScrollReset() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const previousPathnameRef = useRef<string>(pathname);
  const isInitialRender = useRef(true);
  const lenis = useLenis();

  useEffect(() => {
    if (!isInitialRender.current && previousPathnameRef.current !== pathname) {
      lenis?.scrollTo(0, { immediate: true });
    }
    previousPathnameRef.current = pathname;
    isInitialRender.current = false;
  }, [pathname, searchParams, lenis]);

  return null;
}

const SmoothScrollProvider = ({ children }: Readonly<{ children: ReactNode }>) => {
  const pathname = usePathname();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;

    const handleClick = (ele: Element) => {
      lenis.scrollTo(ele.getAttribute('href') ?? '', { offset: -100 });
    };

    const elements = document.querySelectorAll('.lenis-scroll-to');
    const clickHandler = (e: Event) => handleClick(e.target as Element);
    elements.forEach((ele) => ele.addEventListener('click', clickHandler));
    return () => elements.forEach((ele) => ele.removeEventListener('click', clickHandler));
  }, [lenis, pathname]);

  return (
    <>
      {children}
    </>
  );
};

export default SmoothScrollProvider;
