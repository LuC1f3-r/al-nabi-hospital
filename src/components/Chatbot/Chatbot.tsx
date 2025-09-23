import React, { useState, useEffect, useRef } from 'react';
import ChatbotIcon from './ChatbotIcon';
import ChatWindow from './ChatWindow';

// Enhanced chatbot with better error handling and responsiveness

const Chatbot: React.FC = () => {
  const heroObserverRef = useRef<IntersectionObserver | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const heroSection = document.getElementById('hero');
    if (!heroSection) return;

    heroObserverRef.current?.disconnect();

    heroObserverRef.current = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    heroObserverRef.current.observe(heroSection);

    return () => {
      heroObserverRef.current?.disconnect();
    };
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
