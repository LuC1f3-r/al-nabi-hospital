import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, ChevronRight } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const { setIsModalOpen } = useBookingStore();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      // Set scrolled state based on scroll position
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
      
      // Only show navigation when scrolled down
      setVisible(isScrolled);
      
      // Calculate scroll progress for smooth transitions (0 to 1)
      const scrollPosition = window.scrollY;
      const maxScroll = 100; // Maximum scroll value for full effect
      const progress = Math.min(scrollPosition / maxScroll, 1);
      setScrollProgress(progress);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      // Increase timeout to ensure the page has fully loaded before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        } else {
          // If element not found, at least scroll to top
          window.scrollTo(0, 0);
        }
      }, 300);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
    // Ensure we scroll to the top when clicking the logo
    window.scrollTo(0, 0);
  };

  return (
    <motion.nav 
      className={`fixed z-50 transition-all duration-300`}
      initial={{ y: -100, width: '100%', opacity: 0 }}
      animate={{ 
        y: scrolled ? 10 : 0,
        width: scrolled ? '94%' : '100%',
        top: scrolled ? '10px' : '0',
        left: scrolled ? '3%' : '0',
        right: scrolled ? '3%' : '0',
        opacity: visible ? 1 : (location.pathname !== '/' ? 1 : 0),
        pointerEvents: visible || location.pathname !== '/' ? 'auto' : 'none',
      }}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.4)',
        backdropFilter: `blur(${scrolled ? 12 : 4}px)`,
        borderRadius: scrolled ? '16px' : '0px',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0, 0, 0, 0.15), 0 4px 6px -4px rgba(0, 0, 0, 0.1)' : 'none',
        border: scrolled ? '1px solid rgba(255, 255, 255, 0.2)' : 'none',
      }}
      transition={{ 
        type: 'spring',
        stiffness: 260,
        damping: 20,
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
            boxShadow: '0 20px 80px -20px rgba(0, 123, 186, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.3)',
            transform: 'translateY(4px)'
          }}
        />
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? 'h-14' : 'h-20'}`}>
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer' }}
          >
            <motion.div
              animate={{ 
                scale: scrolled ? 0.85 : 1,
                rotate: scrolled ? -5 : 0
              }}
              transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            >
              <Heart className={`transition-all duration-300 ${scrolled ? 'h-7 w-7' : 'h-9 w-9'} text-[#007BBA]`} />
            </motion.div>
            <motion.span 
              className={`font-bold text-[#004F74] transition-all duration-300 ${scrolled ? 'text-lg' : 'text-2xl'}`}
              animate={{ 
                opacity: 1,
                x: 0
              }}
              initial={{ opacity: 0, x: -20 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Al Nabi Hospital
            </motion.span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-1 lg:space-x-2">
            {['hero', 'about', 'services', 'doctors', 'testimonials', 'contact'].map((section, index) => (
              <motion.button 
                key={section}
                onClick={() => scrollToSection(section)}
                className={`relative px-3 py-1 text-gray-700 hover:text-[#007BBA] transition-all duration-300 ${scrolled ? 'text-sm' : 'text-base'}`}
                whileHover={{ y: -2 }}
                custom={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
              >
                <span className="relative z-10">
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
                <motion.span 
                  className="absolute bottom-0 left-0 h-[2px] bg-[#007BBA] rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            ))}
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className={`bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-1 ml-4 ${scrolled ? 'px-5 py-1.5 text-sm' : 'px-6 py-2 text-base'}`}
              whileHover={{ scale: 1.05, boxShadow: '0 10px 25px -5px rgba(0, 123, 186, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              <span>Book Appointment</span>
              <ChevronRight className="h-4 w-4" />
            </motion.button>
          </div>

          {/* Right spacing element to maintain layout balance */}
          <div className="hidden xl:block"></div>

          {/* Mobile Menu Button */}
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
                  <X className="h-6 w-6 text-[#007BBA]" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6 text-[#007BBA]" />
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
              {['hero', 'about', 'services', 'doctors', 'testimonials', 'contact'].map((section, index) => (
                <motion.button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="flex items-center justify-between w-full px-4 py-2.5 text-gray-700 hover:text-[#007BBA] hover:bg-[#007BBA]/5 rounded-lg transition-all duration-200"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: isMenuOpen ? 1 : 0, x: isMenuOpen ? 0 : -20 }}
                  transition={{ delay: 0.05 * index, duration: 0.3 }}
                  whileHover={{ x: 5 }}
                >
                  <span>{section.charAt(0).toUpperCase() + section.slice(1)}</span>
                  <ChevronRight className="h-4 w-4 opacity-50" />
                </motion.button>
              ))}
              <motion.button
                onClick={() => {setIsModalOpen(true); setIsMenuOpen(false);}}
                className="block w-full mt-4 bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white px-6 py-3 rounded-xl hover:shadow-lg transition-all duration-300 text-center font-medium"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: isMenuOpen ? 1 : 0, y: isMenuOpen ? 0 : 10 }}
                transition={{ delay: 0.4, duration: 0.3 }}
                whileHover={{ y: -2, boxShadow: '0 10px 25px -5px rgba(0, 123, 186, 0.4)' }}
                whileTap={{ y: 0 }}
              >
                Book Appointment
              </motion.button>
              {/* Mobile menu bottom spacing */}
              <div className="h-2"></div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;