// ChatbotIcon.tsx
import React from "react";
import { motion } from "framer-motion";
import ChatbotButton from "./ChatbotButton";

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
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 30,
        duration: 0.6,
      }}
      className="fixed bottom-6 right-6 z-50"
    >
      <ChatbotButton isOpen={isOpen} onClick={onClick} />
    </motion.div>
  );
};

export default ChatbotIcon;
