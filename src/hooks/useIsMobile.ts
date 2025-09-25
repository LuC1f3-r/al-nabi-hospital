import { useEffect, useState } from 'react';

const DEFAULT_BREAKPOINT = 768;

export const useIsMobile = (breakpoint: number = DEFAULT_BREAKPOINT): boolean => {
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    const mediaQuery = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const updateMatch = (event: MediaQueryList | MediaQueryListEvent) => {
      setIsMobile('matches' in event ? event.matches : mediaQuery.matches);
    };

    updateMatch(mediaQuery);

    if (typeof mediaQuery.addEventListener === 'function') {
      mediaQuery.addEventListener('change', updateMatch);
      return () => mediaQuery.removeEventListener('change', updateMatch);
    }

    mediaQuery.addListener(updateMatch);
    return () => mediaQuery.removeListener(updateMatch);
  }, [breakpoint]);

  return isMobile;
};

export default useIsMobile;
