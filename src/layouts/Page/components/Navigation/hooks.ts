import * as React from 'react'


export function useIsAtTop(threshold: number = 10) {
  const [isAtTop, setIsAtTop] = React.useState(true);

  React.useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.scrollY <= threshold;
          // update state only if value changed
          setIsAtTop(prev => (prev !== scrolled ? scrolled : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold])

  return isAtTop
}