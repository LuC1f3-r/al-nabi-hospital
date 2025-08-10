import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Clock, User, Phone, Mail, Star, MessageCircle } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
  isAppointmentForm?: boolean;
}

interface ChatWindowProps {
  isOpen: boolean;
  onClose: () => void;
}

interface AppointmentData {
  name: string;
  phone: string;
  email: string;
  department: string;
  date: string;
  time: string;
  notes: string;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to Al Nabi Hospital. I\'m here to help you with appointments, information about our services, or answer any questions you might have.',
      isBot: true,
      timestamp: new Date(),
      options: ['Book Appointment', 'Our Services', 'Contact Information', 'Emergency Info']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [appointmentData, setAppointmentData] = useState<AppointmentData>({
    name: '',
    phone: '',
    email: '',
    department: '',
    date: '',
    time: '',
    notes: ''
  });
  const [appointmentStep, setAppointmentStep] = useState(0);
  const [isBookingMode, setIsBookingMode] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const { setIsModalOpen } = useBookingStore();

  const departments = [
    'Cardiology', 'Neurology', 'Pediatrics', 'Ophthalmology', 
    'Orthopedics', 'General Medicine', 'Emergency Medicine'
  ];

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', 
    '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isBot: boolean = false, options?: string[], isAppointmentForm?: boolean) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options,
      isAppointmentForm
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const simulateTyping = (callback: () => void, delay: number = 1000) => {
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      callback();
    }, delay);
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, false);
    
    simulateTyping(() => {
      switch (option) {
        case 'Book Appointment':
          setIsBookingMode(true);
          setAppointmentStep(1);
          addMessage('Great! I\'ll help you book an appointment. Let\'s start with your full name.', true);
          break;
        case 'Our Services':
          addMessage('We offer comprehensive medical services including:\n\n🏥 Cardiology - Heart care specialists\n🧠 Neurology - Brain and nervous system\n👶 Pediatrics - Child healthcare\n👁️ Ophthalmology - Eye care\n🦴 Orthopedics - Bone and joint care\n🩺 General Medicine - Primary healthcare\n🚨 Emergency Medicine - 24/7 urgent care\n\nWould you like more information about any specific department?', true, departments);
          break;
        case 'Contact Information':
          addMessage('📍 **Al Nabi Hospital Contact Details:**\n\n📞 **Phone:** +91 4 123 4567\n🚨 **Emergency:** +91 4 123 4568\n📧 **Email:** info@alnabihospital.com\n📍 **Address:** 123 Medical Center Drive, Bijapur, IN\n\n⏰ **Hours:**\nMon-Fri: 8:00 AM - 8:00 PM\nSat-Sun: 9:00 AM - 6:00 PM\nEmergency: 24/7', true, ['Book Appointment', 'Our Services', 'Emergency Info']);
          break;
        case 'Emergency Info':
          addMessage('🚨 **Emergency Services - Available 24/7**\n\nFor immediate medical emergencies:\n📞 **Call:** +91 4 123 4568\n🏥 **Visit:** Emergency Department (Ground Floor)\n\n**When to visit Emergency:**\n• Chest pain or difficulty breathing\n• Severe injuries or trauma\n• High fever with severe symptoms\n• Loss of consciousness\n• Severe allergic reactions\n\nFor non-emergency appointments, I can help you book one now!', true, ['Book Appointment', 'Contact Information', 'Our Services']);
          break;
        default:
          if (departments.includes(option)) {
            addMessage(`Excellent choice! Our ${option} department offers world-class care with experienced specialists and modern equipment. Would you like to book an appointment with our ${option} team?`, true, ['Book Appointment', 'More Information', 'Other Services']);
          }
          break;
      }
    });
  };

  const handleAppointmentInput = (value: string) => {
    addMessage(value, false);
    
    simulateTyping(() => {
      switch (appointmentStep) {
        case 1: // Name
          setAppointmentData(prev => ({ ...prev, name: value }));
          setAppointmentStep(2);
          addMessage('Perfect! Now, please provide your phone number.', true);
          break;
        case 2: // Phone
          setAppointmentData(prev => ({ ...prev, phone: value }));
          setAppointmentStep(3);
          addMessage('Great! What\'s your email address?', true);
          break;
        case 3: // Email
          setAppointmentData(prev => ({ ...prev, email: value }));
          setAppointmentStep(4);
          addMessage('Which department would you like to visit?', true, departments);
          break;
        case 4: // Department
          setAppointmentData(prev => ({ ...prev, department: value }));
          setAppointmentStep(5);
          addMessage('When would you prefer your appointment? Please provide a date (e.g., 2024-02-15).', true);
          break;
        case 5: // Date
          setAppointmentData(prev => ({ ...prev, date: value }));
          setAppointmentStep(6);
          addMessage('What time works best for you?', true, timeSlots);
          break;
        case 6: // Time
          setAppointmentData(prev => ({ ...prev, time: value }));
          setAppointmentStep(7);
          addMessage('Any additional notes or specific concerns? (Optional - you can type "none" if no additional notes)', true);
          break;
        case 7: // Notes
          setAppointmentData(prev => ({ ...prev, notes: value }));
          confirmAppointment();
          break;
      }
    });
  };

  const confirmAppointment = () => {
    const finalData = { ...appointmentData };
    simulateTyping(() => {
      addMessage(`Perfect! Here's your appointment summary:\n\n👤 **Name:** ${finalData.name}\n📞 **Phone:** ${finalData.phone}\n📧 **Email:** ${finalData.email}\n🏥 **Department:** ${finalData.department}\n📅 **Date:** ${finalData.date}\n⏰ **Time:** ${finalData.time}\n📝 **Notes:** ${finalData.notes || 'None'}\n\n✅ Your appointment has been successfully booked! You'll receive a confirmation email shortly.\n\nIs there anything else I can help you with?`, true, ['Book Another Appointment', 'Our Services', 'Contact Information', 'Rate Experience']);
      setIsBookingMode(false);
      setAppointmentStep(0);
      setAppointmentData({
        name: '', phone: '', email: '', department: '', date: '', time: '', notes: ''
      });
    }, 1500);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    if (isBookingMode && appointmentStep > 0) {
      handleAppointmentInput(inputValue);
    } else {
      addMessage(inputValue, false);
      
      // Simple NLP-like responses
      simulateTyping(() => {
        const lowerInput = inputValue.toLowerCase();
        
        if (lowerInput.includes('appointment') || lowerInput.includes('book')) {
          handleOptionClick('Book Appointment');
        } else if (lowerInput.includes('service') || lowerInput.includes('department')) {
          handleOptionClick('Our Services');
        } else if (lowerInput.includes('contact') || lowerInput.includes('phone') || lowerInput.includes('address')) {
          handleOptionClick('Contact Information');
        } else if (lowerInput.includes('emergency') || lowerInput.includes('urgent')) {
          handleOptionClick('Emergency Info');
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
          addMessage('Hello! How can I assist you today?', true, ['Book Appointment', 'Our Services', 'Contact Information', 'Emergency Info']);
        } else if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
          addMessage('You\'re welcome! Is there anything else I can help you with?', true, ['Book Appointment', 'Our Services', 'Contact Information']);
        } else {
          addMessage('I understand you\'re looking for information. Here are some ways I can help you:', true, ['Book Appointment', 'Our Services', 'Contact Information', 'Emergency Info']);
        }
      });
    }
    
    setInputValue('');
  };

  const handleFeedback = (rating: number) => {
    setShowFeedback(false);
    addMessage(`Thank you for rating your experience ${rating}/5 stars! Your feedback helps us improve our service. 🙏`, true, ['Book Appointment', 'Our Services', 'Contact Information']);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, scale: 0.8, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.8, y: 100 }}
        transition={{ 
          type: 'spring',
          stiffness: 400,
          damping: 30
        }}
        className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200"
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-semibold">Al Nabi Assistant</h3>
              <p className="text-xs text-blue-100">Online • Ready to help</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[80%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'bg-primary-500 text-white'
                }`}
              >
                <p className="text-sm whitespace-pre-line">{message.text}</p>
                
                {/* Options */}
                {message.options && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="block w-full text-left p-2 text-xs bg-primary-50 hover:bg-primary-100 text-primary-700 rounded-lg transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-white p-3 rounded-2xl shadow-sm">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          {/* Feedback */}
          {showFeedback && (
            <div className="bg-white p-4 rounded-2xl shadow-sm">
              <p className="text-sm text-gray-800 mb-3">How was your experience?</p>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    onClick={() => handleFeedback(rating)}
                    className="p-1 hover:bg-yellow-100 rounded transition-colors"
                  >
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  </button>
                ))}
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Input */}
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="flex space-x-2">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isBookingMode && appointmentStep > 0
                  ? 'Type your response...'
                  : 'Type your message...'
              }
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="p-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex space-x-2 mt-2">
            <button
              onClick={() => handleOptionClick('Book Appointment')}
              className="text-xs px-3 py-1 bg-primary-50 text-primary-600 rounded-full hover:bg-primary-100 transition-colors"
            >
              📅 Book Appointment
            </button>
            <button
              onClick={() => setShowFeedback(true)}
              className="text-xs px-3 py-1 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors"
            >
              ⭐ Rate Experience
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatWindow;