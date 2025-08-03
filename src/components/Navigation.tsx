import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronRight, LucideIcon } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';

// Type definitions
interface MenuItem {
  id: string;
  label: string;
  section: string;
}

interface BrandConfig {
  name: string;
  icon: LucideIcon;
  colors: {
    primary: string;
    secondary: string;
  };
}

interface CTAConfig {
  text: string;
  action: 'booking' | 'contact' | 'custom';
}

interface AnimationConfig {
  staggerDelay: number;
  springConfig: {
    stiffness: number;
    damping: number;
  };
  hoverScale: number;
  scrollThreshold: number;
  maxScrollForProgress: number;
}

interface StyleConfig {
  height: string;
  iconSize: string;
  fontSize: string;
  menuFontSize: string;
  buttonPadding: string;
  borderRadius: string;
  topOffset: string;
  width: string;
  leftOffset: string;
}

interface NavigationConfig {
  brand: BrandConfig;
  menuItems: MenuItem[];
  cta: CTAConfig;
  animations: AnimationConfig;
  styles: {
    scrolled: StyleConfig;
    default: StyleConfig;
  };
}

// Navigation configuration - centralized data structure
const NAVIGATION_CONFIG: NavigationConfig = {
  brand: {
    name: 'Al Nabi Hospital',
    icon: Heart,
    colors: {
      primary: '#007BBA',
      secondary: '#004F74'
    }
  },
  menuItems: [
    { id: 'hero', label: 'Home', section: 'hero' },
    { id: 'about', label: 'About Us', section: 'about' },
    { id: 'services', label: 'Services', section: 'services' },
    { id: 'doctors', label: 'Our Doctors', section: 'doctors' },
    { id: 'testimonials', label: 'Testimonials', section: 'testimonials' },
    { id: 'contact', label: 'Contact', section: 'contact' }
  ],
  cta: {
    text: 'Book Appointment',
    action: 'booking'
  },
  animations: {
    staggerDelay: 0.1,
    springConfig: { stiffness: 260, damping: 20 },
    hoverScale: 1.05,
    scrollThreshold: 50,
    maxScrollForProgress: 100
  },
  styles: {
    scrolled: {
      height: 'h-14',
      iconSize: 'h-7 w-7',
      fontSize: 'text-lg',
      menuFontSize: 'text-sm',
      buttonPadding: 'px-5 py-1.5',
      borderRadius: '16px',
      topOffset: '10px',
      width: '94%',
      leftOffset: '3%'
    },
    default: {
      height: 'h-20',
      iconSize: 'h-9 w-9',
      fontSize: 'text-2xl',
      menuFontSize: 'text-base',
      buttonPadding: 'px-6 py-2',
      borderRadius: '0px',
      topOffset: '0',
      width: '100%',
      leftOffset: '0'
    }
  }
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(false);
  const { setIsModalOpen } = useBookingStore();
  const navigate = useNavigate();
  const location = useLocation();

  const { brand, menuItems, cta, animations, styles } = NAVIGATION_CONFIG;
  const currentStyles = scrolled ? styles.scrolled : styles.default;

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolled = scrollY > animations.scrollThreshold;
      
      setScrolled(isScrolled);
      setVisible(isScrolled);
      
      const progress = Math.min(scrollY / animations.maxScrollForProgress, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animations.scrollThreshold, animations.maxScrollForProgress]);

  const scrollToSection = (sectionId: string): void => {
    const performScroll = (): void => {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo(0, 0);
      }
    };

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(performScroll, 300);
    } else {
      performScroll();
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = (): void => {
    navigate('/');
    window.scrollTo(0, 0);
  };

  const handleCTAClick = (): void => {
    if (cta.action === 'booking') {
      setIsModalOpen(true);
    }
    setIsMenuOpen(false);
  };

  // Animation variants for better organization
  const navVariants: Variants = {
    initial: { y: -100, width: '100%', opacity: 0 },
    animate: {
      y: scrolled ? 10 : 0,
      width: currentStyles.width,
      top: currentStyles.topOffset,
      left: currentStyles.leftOffset,
      right: scrolled ? '3%' : '0',
      opacity: visible ? 1 : (location.pathname !== '/' ? 1 : 0),
      pointerEvents: (visible || location.pathname !== '/') ? 'auto' as const : 'none' as const,
    }
  };

  const menuItemVariants: Variants = {
    initial: { opacity: 0, y: -20 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: animations.staggerDelay * index, duration: 0.5 }
    })
  };

  const mobileMenuItemVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: isMenuOpen ? 1 : 0,
      x: isMenuOpen ? 0 : -20,
      transition: { delay: 0.05 * index, duration: 0.3 }
    })
  };

  const getNavStyles = (): React.CSSProperties => ({
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.4)',
    backdropFilter: `blur(${scrolled ? 12 : 4}px)`,
    borderRadius: currentStyles.borderRadius,
    boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' : 'none',
    border: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
  });

  const BrandIcon: LucideIcon = brand.icon;

  return (
    <motion.nav 
      className="fixed z-50 transition-all duration-300"
      variants={navVariants}
      initial="initial"
      animate="animate"
      style={getNavStyles()}
      transition={{ 
        type: 'spring',
        ...animations.springConfig,
        duration: 0.5 
      }}
    >
      {/* Floating shadow effect */}
      {scrolled && (
        <motion.div 
          className="absolute inset-0 -z-10 rounded-[16px] opacity-30"
          initial={{ opacity: 0 }}
          animate={{ opacity: scrollProgress * 0.3 }}
          style={{ 
            boxShadow: `0 20px 80px -20px rgba(0, 123, 186, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)`,
            transform: 'translateY(4px)'
          }}
        />
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`flex justify-between items-center transition-all duration-300 ${currentStyles.height}`}>
          
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={handleLogoClick}
            whileHover={{ scale: animations.hoverScale }}
          >
            <motion.div
              animate={{ 
                scale: scrolled ? 0.85 : 1,
                rotate: scrolled ? -5 : 0
              }}
              transition={{ type: 'spring', ...animations.springConfig }}
            >
              <BrandIcon className={`transition-all duration-300 ${currentStyles.iconSize} text-[${brand.colors.primary}]`} />
            </motion.div>
            <motion.span 
              className={`font-bold text-[${brand.colors.secondary}] transition-all duration-300 ${currentStyles.fontSize}`}
              animate={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              {brand.name}
            </motion.span>
          </motion.div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
            {menuItems.map((item, index) => (
              <motion.button 
                key={item.id}
                onClick={() => scrollToSection(item.section)}
                className={`relative px-3 py-1 text-gray-700 hover:text-[${brand.colors.primary}] transition-all duration-300 ${currentStyles.menuFontSize}`}
                whileHover={{ y: -2 }}
                custom={index}
                variants={menuItemVariants}
                initial="initial"
                animate="animate"
              >
                <span className="relative z-10">{item.label}</span>
                <motion.span 
                  className={`absolute bottom-0 left-0 h-[2px] bg-[${brand.colors.primary}] rounded-full`}
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            
            {/* CTA Button */}
            <motion.button
              onClick={handleCTAClick}
              className={`bg-gradient-to-r from-[${brand.colors.primary}] to-[${brand.colors.secondary}] text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-1 ml-4 ${currentStyles.buttonPadding} ${currentStyles.menuFontSize}`}
              whileHover={{ 
                scale: animations.hoverScale, 
                boxShadow: `0 10px 25px -5px rgba(0, 123, 186, 0.4)` 
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span>{cta.text}</span>
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Layout balance element */}
          <div className="hidden xl:block"></div>

          {/* Mobile Menu Toggle */}
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 relative z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className={`h-6 w-6 text-[${brand.colors.primary}]`} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className={`h-6 w-6 text-[${brand.colors.primary}]`} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden absolute top-full left-0 right-0 mt-2 rounded-b-2xl"
          initial={false}
          animate={{ 
            height: isMenuOpen ? 'auto' : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          style={{
            boxShadow: isMenuOpen ? '0 15px 30px -10px rgba(0, 0, 0, 0.2)' : 'none',
            backdropFilter: 'blur(12px)',
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          }}
          transition={{ 
            type: 'spring',
            stiffness: 300,
            damping: 30,
            duration: 0.4 
          }}
        >
          <div className="border-t border-gray-100/30">
            <div className="px-4 pt-3 pb-4 space-y-2">
              {menuItems.map((item, index) => (
                <motion.button 
                  key={item.id}
                  onClick={() => scrollToSection(item.section)}
                  className={`flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:text-[${brand.colors.primary}] hover:bg-[${brand.colors.primary}]/5 rounded-lg transition-all duration-200`}
                  custom={index}
                  variants={mobileMenuItemVariants}
                  initial="initial"
                  animate="animate"
                  whileHover={{ x: 5 }}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </motion.button>
              ))}
              
              {/* Mobile CTA Button */}
              <motion.button
                onClick={handleCTAClick}
                className={`block w-full mt-4 bg-gradient-to-r from-[${brand.colors.primary}] to-[${brand.colors.secondary}] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 text-center font-medium`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 10 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ 
                  y: -2, 
                  boxShadow: `0 10px 25px -5px rgba(0, 123, 186, 0.4)` 
                }}
                whileTap={{ y: 0 }}
              >
                {cta.text}
              </motion.button>
              <div className="h-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;