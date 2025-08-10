import React, { useState, useEffect } from 'react';
import ChatbotIcon from './ChatbotIcon';
import ChatWindow from './ChatWindow';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
        const scrollPosition = window.scrollY + window.innerHeight;
        
        // Show chatbot when user scrolls past hero section
        setIsVisible(scrollPosition > heroBottom + 100);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <ChatbotIcon 
        isOpen={isOpen} 
        onClick={toggleChatbot} 
        isVisible={isVisible} 
      />
      <ChatWindow 
        isOpen={isOpen} 
        onClose={() => setIsOpen(false)} 
      />
    </>
  );
};

export default Chatbot;