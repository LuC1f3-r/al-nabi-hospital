import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';

interface ChatbotIconProps {
  isOpen: boolean;
  onClick: () => void;
  isVisible: boolean;
}

const ChatbotIcon: React.FC<ChatbotIconProps> = ({ isOpen, onClick, isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0, y: 100 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        scale: isVisible ? 1 : 0,
        y: isVisible ? 0 : 100
      }}
      transition={{ 
        type: 'spring',
        stiffness: 400,
        damping: 30,
        duration: 0.6
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <motion.button
        onClick={onClick}
        className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full shadow-2xl flex items-center justify-center text-white hover:shadow-3xl transition-all duration-300"
        whileHover={{ 
          scale: 1.1,
          boxShadow: '0 20px 40px -8px rgba(0, 123, 186, 0.4)'
        }}
        whileTap={{ scale: 0.95 }}
        animate={{
          rotate: isOpen ? 180 : 0,
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {isOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <MessageCircle className="h-6 w-6" />
          )}
        </motion.div>
        
        {/* Pulse animation when closed */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full bg-primary-400"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.7, 0, 0.7],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
      </motion.button>
    </motion.div>
  );
};

export default ChatbotIcon;