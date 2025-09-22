'use client'

import React, { useState, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  Variants,
  useReducedMotion,
} from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ChevronRight, ChevronDown } from "lucide-react";
import { useBookingStore } from "../store/bookingStore";
const logo = "/assets/logo.png";

// --- Type Definitions ---
interface MenuItem {
  id: string;
  label: string;
  type: "link" | "scroll" | "dropdown";
  path?: string;
  section?: string;
  subItems?: SubMenuItem[];
}
interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}
interface BrandConfig {
  name: string;
  logo: string;
}
interface CTAConfig {
  text: string;
  action: "booking" | "contact" | "custom";
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
// --- Config ---
const NAVIGATION_CONFIG: NavigationConfig = {
  brand: {
    name: "Al Nabi Hospital",
    logo: logo,
  },
  menuItems: [
    { id: "home", label: "Home", type: "scroll", section: "hero" },
    { id: "about", label: "About Us", type: "scroll", section: "about" },
    { id: "services", label: "Services", type: "scroll", section: "services" },
    { id: "doctors", label: "Our Doctors", type: "scroll", section: "doctors" },
    {
      id: "testimonials",
      label: "Testimonials",
      type: "scroll",
      section: "testimonials",
    },
    { id: "contact", label: "Contact", type: "scroll", section: "contact" },
  ],
  cta: {
    text: "Book Appointment",
    action: "booking",
  },
  animations: {
    staggerDelay: 0.1,
    springConfig: { stiffness: 250, damping: 30 },
    hoverScale: 1.02,
    scrollThreshold: 80,
    maxScrollForProgress: 120,
  },
  styles: {
    scrolled: {
      height: "h-14",
      iconSize: "h-6 w-6",
      fontSize: "text-sm",
      menuFontSize: "text-sm",
      buttonPadding: "px-3 py-2",
      borderRadius: "9999px",
      topOffset: "0px",
      width: "100%",
      leftOffset: "0%",
    },
    default: {
      height: "h-20",
      iconSize: "h-8 w-8",
      fontSize: "text-xl",
      menuFontSize: "text-base",
      buttonPadding: "px-6 py-3",
      borderRadius: "0px",
      topOffset: "0px",
      width: "100%",
      leftOffset: "0%",
    },
  },
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home"); // scrollspy highlight
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const reduceMotion = useReducedMotion();

  const { setIsModalOpen } = useBookingStore();
  const router = useRouter();
  const pathname = usePathname();

  const { brand, menuItems, cta, animations, styles } = NAVIGATION_CONFIG;
  const currentStyles = scrolled ? styles.scrolled : styles.default;

  // --- track viewport size for mobile/iPad tweaks ---
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // --- Scroll handling for sticky nav with shrinking animation ---
  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setScrolled(scrollY > animations.scrollThreshold);

          // Real page progress (0..1) with smooth easing
          const docMax = Math.max(
            document.documentElement.scrollHeight - window.innerHeight,
            1
          );
          const progress = Math.min(scrollY / docMax, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3); // Cubic ease-out
          setScrollProgress(easedProgress);

          // Close mobile menu if user scrolls significantly
          if (isMenuOpen && scrollY > animations.scrollThreshold) {
            setIsMenuOpen(false);
          }

          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animations.scrollThreshold, isMenuOpen]);

  // --- Scrollspy for active section highlight ---
  useEffect(() => {
    const handleScrollSpy = () => {
      const buffer = 120;
      let bestSection = "home";
      let bestOffset = Number.POSITIVE_INFINITY;
      menuItems.forEach((item) => {
        if (item.type === "scroll" && item.section) {
          const el = document.getElementById(item.section);
          if (el) {
            const rect = el.getBoundingClientRect();
            if (rect.top >= -buffer && rect.top < bestOffset) {
              bestOffset = rect.top;
              bestSection = item.section;
            }
          }
        }
      });
      setActiveSection(bestSection);
    };
    window.addEventListener("scroll", handleScrollSpy, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [menuItems]);

  // --- Click outside mobile menu to close ---
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (
        isMenuOpen &&
        !target.closest(".mobile-menu-container") &&
        !target.closest(".mobile-menu-toggle")
      ) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) {
      document.addEventListener("click", handleClickOutside);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  // --- Scroll to section logic ---
  const scrollToSection = (sectionId: string): void => {
    const performScroll = (): void => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    if (pathname !== "/") {
      router.push("/");
      setTimeout(performScroll, 300);
    } else {
      performScroll();
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLinkClick = (path: string) => {
    router.push(path);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLogoClick = (): void => {
    router.push("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleCTAClick = (): void => {
    if (cta.action === "booking") {
      setIsModalOpen(true);
    }
    setIsMenuOpen(false);
  };

  // --- Framer Motion Variants (respect reduced motion) ---
  const navVariants: Variants = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : {
        initial: { y: -120, opacity: 0, scale: 0.98, filter: "blur(6px)" },
        animate: {
          y: 0,
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          transition: { type: "spring", ...animations.springConfig },
        },
      };

  const menuItemVariants: Variants = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: -10 },
        animate: (index: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: animations.staggerDelay * index + 0.2,
            duration: 0.4,
          },
        }),
      };

  // Slide-in drawer for mobile menu
  const mobileMenuVariants: Variants = {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0, transition: { duration: 0.35 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.25 } },
  };

  const mobileMenuItemVariants: Variants = reduceMotion
    ? { initial: { opacity: 0 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, x: 10 },
        animate: (index: number) => ({
          opacity: 1,
          x: 0,
          transition: { delay: 0.04 * index, duration: 0.25 },
        }),
      };

  const getNavStyles = (): React.CSSProperties => {
    const blur = scrolled ? 20 : 16;
    const backgroundOpacity = scrolled ? 0.98 : 0.92;
    const borderOpacity = scrolled ? 0.3 : 0.2;
    
    return {
      background: `rgba(255, 255, 255, ${backgroundOpacity})`,
      backdropFilter: `blur(${blur}px) saturate(180%)`,
      borderBottom: scrolled 
        ? `1px solid rgba(0, 123, 186, ${borderOpacity})` 
        : 'none',
      boxShadow: scrolled 
        ? '0 4px 32px rgba(0, 0, 0, 0.1), 0 2px 16px rgba(0, 123, 186, 0.1)'
        : '0 8px 40px rgba(0, 0, 0, 0.08)',
      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
      willChange: 'backdrop-filter, background-color, box-shadow, border',
    };
  };

  const brandLogo = brand.logo;

  // --- Underline style for scrollspy-active link ---
  const navTextLinkBase = `
    relative px-1 py-1 text-gray-700 hover:text-[#007BBA] font-medium transition-all duration-200 bg-transparent rounded-none shadow-none outline-none border-none group
  `;
  const navTextLinkUnderline = `
    after:content-['']
    after:absolute
    after:left-0
    after:bottom-0
    after:w-0
    group-hover:after:w-full
    after:h-[2px]
    after:bg-[#007BBA]
    group-hover:after:bg-[#004F74]
    after:transition-all
    after:duration-300
  `;
  const navTextLinkActive = `
    text-[#004F74]
    font-bold
    after:w-full
    after:bg-[#004F74]
  `;

  // --- Render ---
  return (
    <>
      {/* Tiny scroll progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-0.5 bg-[#007BBA]/70 z-[60] origin-left"
        style={{ scaleX: scrollProgress }}
        aria-hidden="true"
      />

      {/* Navigation Bar */}
      {!isMobile && (
        <motion.nav
          className={`fixed top-0 left-0 right-0 z-50 nav-container`}
          style={getNavStyles()}
          role="navigation"
          aria-label="Main Navigation"
          variants={navVariants}
          initial="initial"
          animate="animate"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <motion.div
              className={`flex items-center justify-between transition-all duration-500 ${currentStyles.height}`}
              animate={{
                paddingLeft: scrolled ? '1rem' : '2rem',
                paddingRight: scrolled ? '1rem' : '2rem',
              }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
            >
              {/* Logo Section - fade out on scroll */}
              <motion.div
                className="flex items-center cursor-pointer group"
                onClick={handleLogoClick}
                animate={{
                  opacity: scrolled ? 0 : 1,
                  scale: scrolled ? 0.8 : 1,
                  x: scrolled ? -50 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ scale: scrolled ? 0.8 : animations.hoverScale }}
                whileTap={{ scale: 0.96 }}
              >
                <motion.div className="relative">
                  <img
                    src={brandLogo}
                    alt="Al Nabi Hospital Logo"
                    className="h-12 w-auto object-contain"
                  />
                  <motion.div
                    className="absolute inset-0 bg-[#007BBA] rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    initial={false}
                  />
                </motion.div>
              </motion.div>

              {/* Desktop Navigation Menu - always centered */}
              <div className={`hidden lg:flex items-center space-x-8 ${scrolled ? 'flex-1 justify-center' : ''}`}>
                <div className="flex items-center space-x-6">
                  {menuItems.map((item, index) => {
                    const isActive =
                      item.type === "scroll" && item.section === activeSection;
                    if (item.type === "dropdown") {
                      return (
                        <div
                          key={item.id}
                          className="relative group"
                          onMouseEnter={() => setOpenDropdown(item.id)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          <motion.button
                            className={`${navTextLinkBase} ${navTextLinkUnderline} flex items-center ${
                              currentStyles.menuFontSize
                            } ${isActive ? navTextLinkActive : ""}`}
                            style={{
                              fontFamily:
                                "'Cormorant Garamond', 'DM Serif Display', serif",
                              fontWeight: 500,
                            }}
                            custom={index}
                            variants={menuItemVariants}
                            initial="initial"
                            animate="animate"
                          >
                            <span>{item.label}</span>
                            <motion.div
                              animate={{
                                rotate: openDropdown === item.id ? 180 : 0,
                              }}
                              transition={{ duration: 0.25 }}
                            >
                              <ChevronDown className="h-4 w-4 ml-1" />
                            </motion.div>
                          </motion.button>
                          <AnimatePresence>
                            {openDropdown === item.id && (
                              <motion.div
                                className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden z-50"
                                initial={{ opacity: 0, y: 12, scale: 0.98 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 12, scale: 0.98 }}
                                transition={{ duration: 0.2 }}
                              >
                                {item.subItems?.map((subItem, subIndex) => (
                                  <motion.div
                                    key={subItem.id}
                                    initial={{ opacity: 0, x: -8 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                      delay: subIndex * 0.04,
                                      duration: 0.2,
                                    }}
                                  >
                                    <Link
                                      href={subItem.path}
                                      className="block px-6 py-4 text-sm text-gray-700 hover:text-[#007BBA] transition-all duration-200 border-b border-gray-100/50 last:border-b-0 bg-transparent rounded-none"
                                      style={{
                                        fontFamily:
                                          "'Cormorant Garamond', serif",
                                        fontWeight: 400,
                                      }}
                                      onClick={() => setOpenDropdown(null)}
                                    >
                                      {subItem.label}
                                    </Link>
                                  </motion.div>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      );
                    }
                    return (
                      <motion.button
                        key={item.id}
                        onClick={() =>
                          item.type === "scroll" && item.section
                            ? scrollToSection(item.section)
                            : item.path
                            ? handleLinkClick(item.path)
                            : null
                        }
                        className={`${navTextLinkBase} ${navTextLinkUnderline} ${
                          currentStyles.menuFontSize
                        } ${isActive ? navTextLinkActive : ""}`}
                        style={{
                          fontFamily:
                            "'Cormorant Garamond', 'DM Serif Display', serif",
                          fontWeight: 500,
                        }}
                        whileHover={{ y: -1 }}
                        custom={index}
                        variants={menuItemVariants}
                        initial="initial"
                        animate="animate"
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span>{item.label}</span>
                      </motion.button>
                    );
                  })}
                </div>
              </div>

              {/* CTA Button - fade out on scroll */}
              <motion.button
                onClick={handleCTAClick}
                className={`hidden lg:flex bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white rounded-full hover:shadow-xl transition-all duration-300 items-center justify-center space-x-2 font-semibold ${currentStyles.buttonPadding} ${currentStyles.menuFontSize} hover:from-[#004F74] hover:to-[#007BBA] backdrop-blur-sm`}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  boxShadow: "0 8px 25px -8px rgba(0, 123, 186, 0.4)",
                }}
                animate={{
                  opacity: scrolled ? 0 : 1,
                  scale: scrolled ? 0.8 : 1,
                  x: scrolled ? 50 : 0,
                }}
                transition={{ duration: 0.4, ease: 'easeInOut' }}
                whileHover={{ scale: scrolled ? 0.8 : animations.hoverScale, y: -1 }}
                whileTap={{ scale: 0.96 }}
              >
                <span>{cta.text}</span>
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </motion.div>
          </div>
        </motion.nav>
      )}

      {/* Floating Hamburger Toggle (mobile & iPad) - always visible */}
      <motion.button
        onClick={() => setIsMenuOpen((v) => !v)}
        className="mobile-menu-toggle fixed lg:hidden top-4 right-4 w-12 h-12 flex justify-center items-center rounded-2xl bg-white/90 shadow-md border border-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/70 z-[70] focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
      >
        <AnimatePresence mode="wait">
          {isMenuOpen ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
            >
              <X className="h-6 w-6 text-[#007BBA]" />
            </motion.div>
          ) : (
            <motion.div
              key="menu"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
            >
              <Menu className="h-6 w-6 text-[#007BBA]" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-60 lg:hidden mobile-menu-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      {/* Mobile Slide-in Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-navigation"
            role="menu"
            className="fixed top-0 right-0 bottom-0 w-[86vw] sm:w-[420px] bg-white/95 backdrop-blur-xl rounded-l-3xl shadow-2xl z-[70] lg:hidden overflow-y-auto mobile-menu-container border-l border-white/40"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            aria-modal="true"
          >
            {/* Mobile Logo and Close Button */}
            <div className="mobile-logo relative w-full flex items-center justify-between px-4 pt-4 pb-2">
              <img
                src={brandLogo}
                alt="Al Nabi Hospital Logo"
                className="h-10 w-auto object-contain"
                style={{ maxWidth: '44px', borderRadius: '12px' }}
                aria-hidden="false"
              />
              <button
                className="absolute right-4 top-4 p-2 rounded-full hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#007BBA]"
                aria-label="Close menu"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={0}
                type="button"
              >
                <X className="h-6 w-6 text-[#007BBA]" />
              </button>
            </div>
            <div className="px-6 pt-2 pb-8 space-y-2">
              {menuItems.map((item, index) => {
                const isActive =
                  item.type === "scroll" && item.section === activeSection;
                if (item.type === "dropdown") {
                  return (
                    <div key={item.id} className="space-y-2">
                      <motion.div
                        className="px-4 pt-3 pb-1 text-base font-semibold text-gray-600 uppercase tracking-wider border-b border-gray-100 bg-transparent rounded-none"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                        custom={index}
                        variants={mobileMenuItemVariants}
                        initial="initial"
                        animate="animate"
                      >
                        {item.label}
                      </motion.div>
                      {item.subItems?.map((subItem, subIndex) => (
                        <motion.button
                          key={subItem.id}
                          onClick={() => handleLinkClick(subItem.path)}
                          className="block w-full px-6 py-2 text-gray-700 hover:text-[#007BBA] transition-all duration-200 text-left bg-transparent rounded-none font-medium"
                          style={{
                            fontFamily: "'Cormorant Garamond', serif",
                            fontWeight: 500,
                          }}
                          custom={index + subIndex}
                          variants={mobileMenuItemVariants}
                          initial="initial"
                          animate="animate"
                          whileHover={{ x: 4 }}
                        >
                          <span>{subItem.label}</span>
                        </motion.button>
                      ))}
                    </div>
                  );
                }
                return (
                  <motion.button
                    key={item.id}
                    onClick={() =>
                      item.type === "scroll" && item.section
                        ? scrollToSection(item.section)
                        : item.path
                        ? handleLinkClick(item.path)
                        : null
                    }
                    className={`block w-full px-4 py-3 text-gray-800 hover:text-[#007BBA] transition-all duration-200 bg-transparent rounded-xl font-medium text-left ${
                      isActive ? "text-[#004F74] font-bold underline" : ""
                    }`}
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
                    aria-current={isActive ? "page" : undefined}
                    custom={index}
                    variants={mobileMenuItemVariants}
                    initial="initial"
                    animate="animate"
                    whileHover={{ x: 4 }}
                  >
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}

              {/* Mobile CTA - Always visible */}
              <motion.button
                onClick={handleCTAClick}
                className="w-full mt-6 bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white px-6 py-4 rounded-2xl font-semibold text-center hover:from-[#004F74] hover:to-[#007BBA] transition-all duration-300 shadow-lg"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                {cta.text}
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
export default Navigation;
