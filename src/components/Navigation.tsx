import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useNavigate, useLocation, Link } from "react-router-dom";
import {
  Menu,
  X,
  Heart,
  ChevronRight,
  DivideIcon as LucideIcon,
  ChevronDown,
} from "lucide-react";
import { useBookingStore } from "../store/bookingStore";

// Type definitions
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
  icon: typeof LucideIcon;
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
// Configuration
const NAVIGATION_CONFIG: NavigationConfig = {
  brand: {
    name: "Al Nabi Hospital",
    icon: Heart,
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
    springConfig: { stiffness: 400, damping: 30 },
    hoverScale: 1.02,
    scrollThreshold: 80,
    maxScrollForProgress: 120,
  },
  styles: {
    scrolled: {
      height: "h-16",
      iconSize: "h-7 w-7",
      fontSize: "text-lg",
      menuFontSize: "text-sm",
      buttonPadding: "px-4 py-2.5",
      borderRadius: "24px",
      topOffset: "16px",
      width: "95%",
      leftOffset: "2.5%",
    },
    default: {
      height: "h-20",
      iconSize: "h-8 w-8",
      fontSize: "text-xl",
      menuFontSize: "text-base",
      buttonPadding: "px-5 py-3",
      borderRadius: "28px",
      topOffset: "12px",
      width: "96%",
      leftOffset: "2%",
    },
  },
};

const Navigation: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { setIsModalOpen } = useBookingStore();
  const navigate = useNavigate();
  const location = useLocation();

  const { brand, menuItems, cta, animations, styles } = NAVIGATION_CONFIG;
  const currentStyles = scrolled ? styles.scrolled : styles.default;

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          const isScrolled = scrollY > animations.scrollThreshold;
          setScrolled(isScrolled);
          setVisible(true);
          const progress = Math.min(
            scrollY / animations.maxScrollForProgress,
            1
          );
          setScrollProgress(progress);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [animations.scrollThreshold, animations.maxScrollForProgress]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest(".mobile-menu-container")) {
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

  const scrollToSection = (sectionId: string): void => {
    const performScroll = (): void => {
      const element = document.getElementById(sectionId);
      if (element) {
        const headerOffset = 100;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(performScroll, 300);
    } else {
      performScroll();
    }
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLinkClick = (path: string) => {
    navigate(path);
    setIsMenuOpen(false);
    setOpenDropdown(null);
  };

  const handleLogoClick = (): void => {
    navigate("/");
    window.scrollTo({ top: 0, behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const handleCTAClick = (): void => {
    if (cta.action === "booking") {
      setIsModalOpen(true);
    }
    setIsMenuOpen(false);
  };

  const navVariants: Variants = {
    initial: {
      y: -120,
      opacity: 0,
      scale: 0.95,
      filter: "blur(10px)",
    },
    animate: {
      y: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        type: "spring",
        ...animations.springConfig,
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  const menuItemVariants: Variants = {
    initial: { opacity: 0, y: -15, scale: 0.95 },
    animate: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: animations.staggerDelay * index + 0.3,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };
  const mobileMenuVariants: Variants = {
    initial: { opacity: 0, height: 0, scale: 0.95 },
    animate: {
      opacity: 1,
      height: "auto",
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      scale: 0.95,
      transition: {
        duration: 0.3,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };
  const mobileMenuItemVariants: Variants = {
    initial: { opacity: 0, x: -20 },
    animate: (index: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.05 * index,
        duration: 0.4,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const getNavStyles = (): React.CSSProperties => ({
    background: `
      linear-gradient(135deg, 
        rgba(255, 255, 255, ${scrolled ? "0.95" : "0.85"}) 0%,
        rgba(255, 255, 255, ${scrolled ? "0.90" : "0.75"}) 100%
      )
    `,
    backdropFilter: `blur(${scrolled ? "20px" : "16px"}) saturate(180%)`,
    borderRadius: currentStyles.borderRadius,
    border: `1px solid rgba(255, 255, 255, ${scrolled ? "0.4" : "0.3"})`,
    boxShadow: scrolled
      ? `
          0 25px 50px -12px rgba(0, 0, 0, 0.08),
          0 8px 32px rgba(0, 0, 0, 0.04),
          0 0 0 1px rgba(255, 255, 255, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `
      : `
          0 20px 40px -8px rgba(0, 0, 0, 0.06),
          0 8px 24px rgba(0, 0, 0, 0.04),
          0 0 0 1px rgba(255, 255, 255, 0.05),
          inset 0 1px 0 rgba(255, 255, 255, 0.1)
        `,
  });

  const BrandIcon: typeof LucideIcon = brand.icon;

  // CLEAN SIMPLE LINK STYLES FOR NAV MENU ITEMS
  const navTextLinkBase = `
    relative px-3 py-1 text-gray-700 hover:text-primary-700 font-medium transition-all duration-200 bg-transparent rounded-none shadow-none outline-none border-none
  `;
  const navTextLinkUnderline = `
    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-primary-300 hover:after:bg-primary-700 after:transition-all after:duration-300
  `;

  return (
    <>
      <motion.nav
        className="fixed z-50 transition-all duration-700 ease-out"
        variants={navVariants}
        initial="initial"
        animate="animate"
        style={{
          ...getNavStyles(),
          top: currentStyles.topOffset,
          left: currentStyles.leftOffset,
          right: scrolled ? "2.5%" : "2%",
          width: currentStyles.width,
        }}
      >
        <motion.div
          className="absolute inset-0 -z-10"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{
            opacity: scrolled ? 0.6 : 0.4,
            scale: scrolled ? 1.02 : 1.05,
          }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: `
              radial-gradient(ellipse 80% 60% at 50% -20%, 
                rgba(0, 123, 186, 0.15) 0%,
                rgba(0, 123, 186, 0.08) 40%,
                transparent 70%
              )
            `,
            borderRadius: currentStyles.borderRadius,
            transform: "translateY(8px)",
            filter: "blur(12px)",
          }}
        />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className={`flex justify-between items-center transition-all duration-700 ${currentStyles.height}`}>
            {/* Logo Section */}
            <motion.div
              className="flex items-center space-x-3 cursor-pointer group"
              onClick={handleLogoClick}
              whileHover={{ scale: animations.hoverScale }}
              whileTap={{ scale: 0.96 }}
            >
              <motion.div
                className="relative"
                animate={{
                  scale: scrolled ? 0.9 : 1,
                  rotate: scrolled ? -2 : 0,
                }}
                transition={{
                  type: "spring",
                  ...animations.springConfig,
                  duration: 0.7,
                }}
              >
                <BrandIcon
                  className={`transition-all duration-700 ${currentStyles.iconSize} text-primary-600 group-hover:text-primary-700`}
                />
                <motion.div
                  className="absolute inset-0 bg-primary-500 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                  initial={false}
                />
              </motion.div>
              <motion.span
                className={`font-serif font-bold text-primary-800 transition-all duration-700 ${currentStyles.fontSize} group-hover:text-primary-900`}
                style={{
                  fontFamily:
                    "'Cormorant Garamond', 'DM Serif Display', 'Playfair Display', serif",
                  letterSpacing: "-0.02em",
                }}
                animate={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -20 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                {brand.name}
              </motion.span>
            </motion.div>

            {/* Desktop Navigation Menu */}
            <div className="hidden lg:flex items-center justify-center space-x-1">
              {menuItems.map((item, index) => {
                if (item.type === "dropdown") {
                  return (
                    <div
                      key={item.id}
                      className="relative group"
                      onMouseEnter={() => setOpenDropdown(item.id)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <motion.button
                        className={`${navTextLinkBase} ${navTextLinkUnderline} flex items-center ${currentStyles.menuFontSize}`}
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
                          transition={{
                            duration: 0.3,
                            ease: [0.25, 0.46, 0.45, 0.94],
                          }}
                        >
                          <ChevronDown className="h-4 w-4 ml-1" />
                        </motion.div>
                      </motion.button>
                      <AnimatePresence>
                        {openDropdown === item.id && (
                          <motion.div
                            className="absolute top-full left-0 mt-3 w-64 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/40 overflow-hidden z-50"
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 15, scale: 0.95 }}
                            transition={{
                              duration: 0.3,
                              ease: [0.25, 0.46, 0.45, 0.94],
                            }}
                          >
                            {item.subItems?.map((subItem, subIndex) => (
                              <motion.div
                                key={subItem.id}
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                  delay: subIndex * 0.05,
                                  duration: 0.3,
                                }}
                              >
                                <Link
                                  to={subItem.path}
                                  className="block px-6 py-4 text-sm text-gray-700 hover:text-primary-700 transition-all duration-200 border-b border-gray-100/50 last:border-b-0 bg-transparent rounded-none"
                                  style={{
                                    fontFamily: "'Cormorant Garamond', serif",
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
                    className={`${navTextLinkBase} ${navTextLinkUnderline} ${currentStyles.menuFontSize}`}
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
                  >
                    <span>{item.label}</span>
                  </motion.button>
                );
              })}

              {/* CTA Button */}
              <motion.button
                onClick={handleCTAClick}
                className={`bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 ml-8 font-semibold ${currentStyles.buttonPadding} ${currentStyles.menuFontSize} hover:from-primary-700 hover:to-primary-800 backdrop-blur-sm`}
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                  boxShadow: "0 8px 25px -8px rgba(0, 123, 186, 0.4)",
                }}
                whileHover={{
                  scale: animations.hoverScale,
                  y: -1,
                  boxShadow: "0 12px 35px -8px rgba(0, 123, 186, 0.5)",
                }}
                whileTap={{ scale: 0.96 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: 0.8,
                  duration: 0.6,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span>{cta.text}</span>
                <ChevronRight className="h-4 w-4" />
              </motion.button>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-3 relative z-50 rounded-2xl hover:bg-primary-50/50 transition-colors duration-200 mobile-menu-container backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <X className={`h-6 w-6 text-primary-700`} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{
                      duration: 0.3,
                      ease: [0.25, 0.46, 0.45, 0.94],
                    }}
                  >
                    <Menu className={`h-6 w-6 text-primary-700`} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 lg:hidden mobile-menu-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed top-24 left-4 right-4 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl z-40 lg:hidden overflow-hidden mobile-menu-container border border-white/40"
            variants={mobileMenuVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <div className="px-6 py-6 space-y-2 max-h-[70vh] overflow-y-auto">
              {menuItems.map((item, index) => {
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
                          className="block w-full px-6 py-2 text-gray-700 hover:text-primary-700 transition-all duration-200 text-left bg-transparent rounded-none font-medium"
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
                    className="block w-full px-4 py-2 text-gray-700 hover:text-primary-700 transition-all duration-200 bg-transparent rounded-none font-medium text-left"
                    style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontWeight: 500,
                    }}
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

              {/* CTA remains styled */}
              <motion.button
                onClick={handleCTAClick}
                className="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-4 rounded-2xl font-semibold text-center hover:from-primary-700 hover:to-primary-800 transition-all duration-300 shadow-lg"
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 600,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.4,
                  duration: 0.4,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
                whileHover={{
                  y: -2,
                  boxShadow: `0 12px 28px -8px rgba(0, 123, 186, 0.4)`,
                }}
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
