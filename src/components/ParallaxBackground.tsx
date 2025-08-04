import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../styles/background.css';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <div className="parallax-container min-h-screen">
      {/* Gradient background with parallax effect */}
      <motion.div
        className="parallax-layer elegant-gradient-bg"
        style={{ y }}
      />

      {/* Grain texture overlay */}
      <div className="grain-overlay" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default ParallaxBackground;