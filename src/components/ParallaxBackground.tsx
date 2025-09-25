import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import type { MotionStyle } from 'framer-motion';
import '../styles/background.css';
import useIsMobile from '../hooks/useIsMobile';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const prefersReducedMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const enableParallax = !(prefersReducedMotion || isMobile);

  const layerStyle: MotionStyle = enableParallax
    ? { y }
    : { transform: 'translate3d(0,0,0)', animation: 'none' };

  return (
    <div className="parallax-container min-h-screen">
      {/* Gradient background with parallax effect */}
      <motion.div
        className="parallax-layer elegant-gradient-bg"
        style={layerStyle}
      />

      {/* Grain texture overlay */}
      {enableParallax && <div className="grain-overlay" />}

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;
