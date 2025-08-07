import React, { useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import ParallaxBackground from './ParallaxBackground';

interface LayoutProps {
  children: React.ReactNode;
}

/**
 * Enhanced Layout Component
 * - Immersive background with parallax effects
 * - Dynamic navigation integration
 * - Smooth scroll container
 * - Performance optimized rendering
 */
const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    // Add smooth scroll behavior to main container
    const mainElement = document.querySelector('main');
    if (mainElement) {
      mainElement.style.scrollBehavior = 'smooth';
    }

    // Optimize rendering performance
    const handleResize = () => {
      // Debounce resize events for better performance
      clearTimeout((window as any).resizeTimeout);
      (window as any).resizeTimeout = setTimeout(() => {
        // Trigger any necessary recalculations
        window.dispatchEvent(new Event('optimizedResize'));
      }, 250);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
      if ((window as any).resizeTimeout) {
        clearTimeout((window as any).resizeTimeout);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Immersive Background with Content */}
      <ParallaxBackground>
        {/* Dynamic Navigation */}
        <Navigation />
        
        {/* Main Content Container */}
        <main className="relative z-10">
          {/* Content Wrapper with Glass Effect */}
          <div className="relative">
            {children}
          </div>
        </main>
        
        {/* Enhanced Footer */}
        <Footer />
        
        {/* Scroll to Top Button */}
        <ScrollToTopButton />
      </ParallaxBackground>
    </div>
  );
};

/**
 * Scroll to Top Button Component
 * Appears when user scrolls down, smooth scroll to top
 */
const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button
      className={`
        fixed bottom-8 right-8 z-50 p-3 rounded-full
        glass glass-hover transition-all duration-300 transform
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'}
        hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-400
      `}
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <svg 
        className="w-6 h-6 text-white" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M5 10l7-7m0 0l7 7m-7-7v18" 
        />
      </svg>
    </button>
  );
};

export default Layout;