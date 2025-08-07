import Lenis from '@studio-freight/lenis';

/**
 * Ultra-smooth scrolling configuration using Lenis
 * Optimized for performance and immersive navigation experience
 */
class SmoothScroll {
  private lenis: Lenis;
  private rafId: number | null = null;

  constructor() {
    this.lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Custom easing
      touchMultiplier: 2,
      infinite: false,
    });

    this.bindEvents();
    this.startRaf();
  }

  private bindEvents(): void {
    // Handle anchor links
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (anchor) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.slice(1);
        if (targetId) {
          const targetElement = document.getElementById(targetId);
          if (targetElement) {
            this.lenis.scrollTo(targetElement, { offset: -80 });
          }
        }
      }
    });
  }

  private raf = (time: number): void => {
    this.lenis.raf(time);
    this.rafId = requestAnimationFrame(this.raf);
  };

  private startRaf(): void {
    this.rafId = requestAnimationFrame(this.raf);
  }

  public scrollTo(target: string | HTMLElement, options?: any): void {
    this.lenis.scrollTo(target, options);
  }

  public destroy(): void {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    this.lenis.destroy();
  }
}

// Initialize smooth scrolling
const smoothScroll = new SmoothScroll();

export default smoothScroll;