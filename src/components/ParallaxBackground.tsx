import React, { useEffect, useState } from 'react';
import '../styles/background.css';

interface ParallaxBackgroundProps {
  children: React.ReactNode;
}

const ParallaxBackground: React.FC<ParallaxBackgroundProps> = ({ children }) => {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Handle mouse movement for parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10; // Adjust multiplier for effect intensity
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      
      setOffset({ x, y });
    };
    
    // Handle scroll for additional parallax effect
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollFactor = scrollY * 0.002; // Adjust for effect intensity
      
      // Update the background position based on scroll
      document.documentElement.style.setProperty('--scroll-y', `${scrollFactor}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  return (
    <div className="parallax-container min-h-screen">
      {/* Gradient background with parallax effect */}
      <div 
        className="parallax-layer elegant-gradient-bg" 
        style={{ 
          transform: `translate3d(${offset.x * 0.5}px, ${offset.y * 0.5}px, 0)`,
          backgroundSize: '200% 200%',
        }}
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