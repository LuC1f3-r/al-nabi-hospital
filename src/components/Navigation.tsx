import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { setIsModalOpen } = useBookingStore();
  const navigate = useNavigate();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <motion.nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg' 
          : 'bg-white/80 backdrop-blur-sm'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-2"
            onClick={handleLogoClick}
            whileHover={{ scale: 1.05 }}
            style={{ cursor: 'pointer' }}
          >
            <Heart className="h-8 w-8 text-[#007BBA]" />
            <span className="text-xl font-bold text-[#004F74]">Al Nabi Hospital</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-gray-700 hover:text-[#007BBA] transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-[#007BBA] transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-[#007BBA] transition-colors">
              Services
            </button>
            <button onClick={() => scrollToSection('doctors')} className="text-gray-700 hover:text-[#007BBA] transition-colors">
              Doctors
            </button>
            <button onClick={() => scrollToSection('testimonials')} className="text-gray-700 hover:text-[#007BBA] transition-colors">
              Testimonials
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-700 hover:text-[#007BBA] transition-colors">
              Contact
            </button>
            <motion.button
              onClick={() => setIsModalOpen(true)}
              className="bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-pulse"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Book Appointment
            </motion.button>
          </div>

          {/* Emergency Contact */}
          <div className="hidden lg:flex items-center space-x-2 text-[#007BBA]">
            <Phone className="h-4 w-4" />
            <span className="text-sm font-medium">Emergency: (123) 456-7890</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className="md:hidden overflow-hidden"
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-white/95 backdrop-blur-md border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-gray-700 hover:text-[#007BBA] w-full text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-700 hover:text-[#007BBA] w-full text-left">
                About
              </button>
              <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-700 hover:text-[#007BBA] w-full text-left">
                Services
              </button>
              <button onClick={() => scrollToSection('doctors')} className="block px-3 py-2 text-gray-700 hover:text-[#007BBA] w-full text-left">
                Doctors
              </button>
              <button onClick={() => scrollToSection('testimonials')} className="block px-3 py-2 text-gray-700 hover:text-[#007BBA] w-full text-left">
                Testimonials
              </button>
              <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-700 hover:text-[#007BBA] w-full text-left">
                Contact
              </button>
              <button
                onClick={() => {setIsModalOpen(true); setIsMenuOpen(false);}}
                className="block w-full mx-3 mt-4 bg-[#007BBA] text-white px-6 py-2 rounded-full hover:bg-[#004F74] transition-colors text-center"
              >
                Book Appointment
              </button>
              <div className="flex items-center justify-center space-x-2 text-[#007BBA] pt-4">
                <Phone className="h-4 w-4" />
                <span className="text-sm font-medium">Emergency: (123) 456-7890</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;