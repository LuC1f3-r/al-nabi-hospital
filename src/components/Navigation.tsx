import React, { useEffect, useState, useCallback } from "react";
import { clsx } from "clsx";
import Button from "./ui/Button";

/**
 * Luxurious Chandelier Navigation Component
 * - Crystal-like glass effects with shimmering particles
 * - Elegant light refraction and reflections
 * - Smooth premium transitions and animations
 * - Maintains readability and usability
 */
const Navigation: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = useCallback(() => {
    const scrollPosition = window.scrollY;
    setScrolled(scrollPosition > 60);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Doctors", href: "#doctors" },
    { label: "Contact", href: "#contact" },
    { label: "Careers", href: "#careers" },
  ];

  // Inline styles for chandelier effects
  const chandelierStyles = `
    @keyframes shimmer {
      0% { transform: translateX(-100%) rotate(0deg); opacity: 0; }
      50% { opacity: 1; }
      100% { transform: translateX(200%) rotate(180deg); opacity: 0; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(180deg); }
    }

    @keyframes sparkle {
      0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
      50% { opacity: 1; transform: scale(1) rotate(180deg); }
    }

    @keyframes prism {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }

    .chandelier-nav {
      position: relative;
      overflow: hidden;
    }

    .chandelier-nav::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.1) 0%,
        rgba(255, 255, 255, 0.05) 25%,
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.05) 75%,
        rgba(255, 255, 255, 0.1) 100%
      );
      backdrop-filter: blur(20px) saturate(180%);
      border: 1px solid rgba(255, 255, 255, 0.2);
      border-radius: 0;
      z-index: -1;
      transition: all 0.8s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .chandelier-nav.scrolled::before {
      background: linear-gradient(
        135deg,
        rgba(255, 255, 255, 0.15) 0%,
        rgba(255, 255, 255, 0.08) 25%,
        rgba(255, 255, 255, 0.15) 50%,
        rgba(255, 255, 255, 0.08) 75%,
        rgba(255, 255, 255, 0.15) 100%
      );
      backdrop-filter: blur(30px) saturate(200%);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        0 4px 16px rgba(0, 0, 0, 0.05),
        inset 0 1px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(255, 255, 255, 0.1);
    }

    .chandelier-nav::after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: linear-gradient(
        45deg,
        transparent 30%,
        rgba(255, 255, 255, 0.1) 50%,
        transparent 70%
      );
      animation: shimmer 4s ease-in-out infinite;
      pointer-events: none;
    }

    .crystal-particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, transparent 70%);
      border-radius: 50%;
      pointer-events: none;
      animation: sparkle 3s ease-in-out infinite;
    }

    .crystal-particle:nth-child(1) { top: 20%; left: 10%; animation-delay: 0s; }
    .crystal-particle:nth-child(2) { top: 60%; left: 30%; animation-delay: 1s; }
    .crystal-particle:nth-child(3) { top: 40%; left: 70%; animation-delay: 2s; }
    .crystal-particle:nth-child(4) { top: 80%; left: 90%; animation-delay: 0.5s; }
    .crystal-particle:nth-child(5) { top: 30%; left: 50%; animation-delay: 1.5s; }

    .nav-link {
      position: relative;
      overflow: hidden;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-link::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(255, 255, 255, 0.2),
        transparent
      );
      transition: left 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .nav-link:hover::before {
      left: 100%;
    }

    .nav-link:hover {
      transform: translateY(-2px);
      text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      box-shadow: 
        0 4px 20px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }

    .logo-container {
      position: relative;
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .logo-container:hover {
      transform: scale(1.05);
      filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.3));
    }

    .logo-gradient {
      background: linear-gradient(
        135deg,
        #667eea 0%,
        #764ba2 25%,
        #f093fb 50%,
        #f5576c 75%,
        #4facfe 100%
      );
      background-size: 300% 300%;
      animation: prism 6s ease-in-out infinite;
    }

    .mobile-menu {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(25px) saturate(180%);
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .floating-element {
      animation: float 6s ease-in-out infinite;
    }

    .glass-button {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }

    .glass-button:hover {
      background: rgba(255, 255, 255, 0.2);
      transform: translateY(-2px);
      box-shadow: 
        0 8px 25px rgba(0, 0, 0, 0.15),
        inset 0 1px 0 rgba(255, 255, 255, 0.3);
    }
  `;

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: chandelierStyles }} />
      
      <nav
        className={clsx(
          "chandelier-nav fixed top-0 left-0 w-full z-50 transition-all duration-700 ease-out",
          scrolled && "scrolled"
        )}
      >
        {/* Crystal particles */}
        <div className="crystal-particle"></div>
        <div className="crystal-particle"></div>
        <div className="crystal-particle"></div>
        <div className="crystal-particle"></div>
        <div className="crystal-particle"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <div className="flex-shrink-0 floating-element">
              <a href="#home" className="logo-container flex items-center space-x-3">
                <div className="logo-gradient w-12 h-12 rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">AN</span>
                </div>
                <span className="text-xl font-bold text-white drop-shadow-lg">
                  Al Nabi Hospital
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-2">
                {navItems.map((item, index) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="nav-link text-white/90 hover:text-white px-4 py-2 rounded-lg text-sm font-medium"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block floating-element">
              <button className="glass-button text-white px-6 py-2 rounded-lg font-medium">
                Book Appointment
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="nav-link text-white hover:text-gray-300 focus:outline-none focus:text-gray-300 p-2 rounded-lg"
              >
                <svg
                  className="h-6 w-6 transition-transform duration-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  style={{
                    transform: mobileMenuOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  {mobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={clsx(
            "lg:hidden transition-all duration-500 ease-out",
            mobileMenuOpen
              ? "max-h-96 opacity-100 transform translate-y-0"
              : "max-h-0 opacity-0 overflow-hidden transform -translate-y-4"
          )}
        >
          <div className="mobile-menu">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="nav-link text-white/90 hover:text-white block px-4 py-3 rounded-lg text-base font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 0.1}s`,
                    transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(-20px)',
                    transition: `all 0.4s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`
                  }}
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-4">
                <button className="glass-button text-white w-full px-6 py-3 rounded-lg font-medium">
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-16 lg:h-20"></div>
    </>
  );
};

export default Navigation;