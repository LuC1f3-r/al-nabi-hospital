import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Calendar, Clock, User, Phone, Mail, Star, MessageCircle, CheckCircle, AlertCircle } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
  options?: string[];
  isAppointmentForm?: boolean;
  type?: 'text' | 'appointment' | 'confirmation' | 'error';
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
  doctor?: string;
}

const ChatWindowEnhanced: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hello! 👋 Welcome to Al Nabi Hospital. I\'m here to help you with appointments, information about our services, or answer any questions you might have.',
      isBot: true,
      timestamp: new Date(),
      options: ['Book Appointment', 'Our Services', 'Contact Information', 'Emergency Info', 'Find Doctor']
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
  const [errors, setErrors] = useState<string[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { setIsModalOpen } = useBookingStore();

  const departments = [
    'Cardiology', 'Neurology', 'Pediatrics', 'Ophthalmology', 
    'Orthopedics', 'General Medicine', 'Emergency Medicine', 'Dermatology',
    'Gynecology', 'Urology', 'ENT', 'Psychiatry'
  ];

  const doctors = {
    'Cardiology': ['Dr. Ahmed Khan', 'Dr. Sarah Johnson', 'Dr. Michael Chen'],
    'Neurology': ['Dr. Emily Davis', 'Dr. Robert Wilson', 'Dr. Lisa Brown'],
    'Pediatrics': ['Dr. James Miller', 'Dr. Maria Garcia', 'Dr. David Lee'],
    'Ophthalmology': ['Dr. Anna White', 'Dr. Thomas Anderson', 'Dr. Jennifer Taylor'],
    'Orthopedics': ['Dr. Christopher Martinez', 'Dr. Amanda Rodriguez', 'Dr. Kevin Thompson'],
    'General Medicine': ['Dr. Rachel Green', 'Dr. Daniel Clark', 'Dr. Michelle Lewis'],
    'Emergency Medicine': ['Dr. Steven Hall', 'Dr. Nicole Young', 'Dr. Brian Allen'],
    'Dermatology': ['Dr. Jessica King', 'Dr. Matthew Wright', 'Dr. Ashley Scott'],
    'Gynecology': ['Dr. Samantha Baker', 'Dr. Joshua Nelson', 'Dr. Victoria Carter'],
    'Urology': ['Dr. Andrew Mitchell', 'Dr. Rebecca Perez', 'Dr. Gregory Roberts'],
    'ENT': ['Dr. Stephanie Turner', 'Dr. Patrick Phillips', 'Dr. Danielle Campbell'],
    'Psychiatry': ['Dr. Nathan Parker', 'Dr. Olivia Evans', 'Dr. Ryan Edwards']
  };

  const timeSlots = [
    '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
    '02:00 PM', '03:00 PM', '04:00 PM', '05:00 PM'
  ];

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addMessage = (text: string, isBot: boolean = false, options?: string[], type: 'text' | 'appointment' | 'confirmation' | 'error' = 'text') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      text,
      isBot,
      timestamp: new Date(),
      options,
      type
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

  // Validation functions
  const validateName = (name: string): boolean => {
    return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name);
  };

  const validatePhone = (phone: string): boolean => {
    return /^[\+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
  };

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validateDate = (date: string): boolean => {
    const selectedDate = new Date(date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return selectedDate >= today;
  };

  const sendWhatsAppMessage = (appointmentData: AppointmentData) => {
    const message = `🏥 *Al Nabi Hospital - Appointment Confirmation*

👤 *Patient Name:* ${appointmentData.name}
📞 *Phone:* ${appointmentData.phone}
📧 *Email:* ${appointmentData.email}
🏥 *Department:* ${appointmentData.department}
👨‍⚕️ *Doctor:* ${appointmentData.doctor || 'To be assigned'}
📅 *Date:* ${appointmentData.date}
⏰ *Time:* ${appointmentData.time}
📝 *Notes:* ${appointmentData.notes || 'None'}

✅ *Appointment Status:* Confirmed
📋 *Please bring:* ID proof, previous medical records (if any)

📍 *Location:* Al Nabi Hospital, 123 Medical Center Drive, Bijapur
📞 *Contact:* +91 4 123 4567

*Thank you for choosing Al Nabi Hospital!* 🏥`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappNumber = '+919876543210'; // Replace with actual hospital WhatsApp number
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  const handleOptionClick = (option: string) => {
    addMessage(option, false);
    
    simulateTyping(() => {
      switch (option) {
        case 'Book Appointment':
          setIsBookingMode(true);
          setAppointmentStep(1);
          setErrors([]);
          addMessage('Great! I\'ll help you book an appointment. Let\'s start with your full name.', true);
          break;
        case 'Our Services':
          addMessage('🏥 *Al Nabi Hospital Services:*\n\n💓 **Cardiology** - Heart care & cardiovascular health\n🧠 **Neurology** - Brain & nervous system disorders\n👶 **Pediatrics** - Child healthcare & development\n👁️ **Ophthalmology** - Eye care & vision correction\n🦴 **Orthopedics** - Bone, joint & muscle care\n🩺 **General Medicine** - Primary healthcare\n🚨 **Emergency Medicine** - 24/7 urgent care\n🩸 **Dermatology** - Skin & hair conditions\n👩‍⚕️ **Gynecology** - Women\'s health\n🚹 **Urology** - Urinary system care\n👂 **ENT** - Ear, nose & throat\n🧠 **Psychiatry** - Mental health support\n\nWhich department interests you?', true, departments);
          break;
        case 'Contact Information':
          addMessage('📍 *Al Nabi Hospital Contact Details:*\n\n📞 **Main Phone:** +91 4 123 4567\n🚨 **Emergency:** +91 4 123 4568\n📧 **Email:** info@alnabihospital.com\n📍 **Address:** 123 Medical Center Drive, Bijapur, Karnataka, India\n\n⏰ *Operating Hours:*\nMonday - Friday: 8:00 AM - 8:00 PM\nSaturday - Sunday: 9:00 AM - 6:00 PM\n🚨 Emergency Services: 24/7\n\n🅿️ **Parking:** Free parking available\n♿ **Accessibility:** Wheelchair accessible', true, ['Book Appointment', 'Our Services', 'Emergency Info', 'Find Doctor']);
          break;
        case 'Emergency Info':
          addMessage('🚨 *Emergency Services - Available 24/7*\n\n📞 **Emergency Hotline:** +91 4 123 4568\n🏥 **Emergency Department:** Ground Floor, Building A\n\n*When to visit Emergency:*\n• Chest pain or difficulty breathing\n• Severe injuries or trauma\n• High fever with severe symptoms\n• Loss of consciousness\n• Severe allergic reactions\n• Uncontrolled bleeding\n• Severe abdominal pain\n• Stroke symptoms (FAST)\n\n⚡ **Response Time:** Average 5-10 minutes\n🚑 **Ambulance Service:** Available\n\nFor non-emergency appointments, I can help you book one now!', true, ['Book Appointment', 'Contact Information', 'Our Services']);
          break;
        case 'Find Doctor':
          addMessage('👨‍⚕️ *Find a Doctor*\n\nPlease select a department to see available doctors:', true, departments);
          break;
        default:
          if (departments.includes(option)) {
            const deptDoctors = doctors[option as keyof typeof doctors] || [];
            addMessage(`🏥 *${option} Department*\n\n*Available Doctors:*\n${deptDoctors.map(doctor => `• ${doctor}`).join('\n')}\n\nWould you like to book an appointment with our ${option} team?`, true, ['Book Appointment', 'More Information', 'Other Services']);
          }
          break;
      }
    });
  };

  const handleAppointmentInput = (value: string) => {
    addMessage(value, false);
    setErrors([]);
    
    simulateTyping(() => {
      switch (appointmentStep) {
        case 1: // Name
          if (!validateName(value)) {
            setErrors(['Please enter a valid name (minimum 2 characters, letters only)']);
            return;
          }
          setAppointmentData(prev => ({ ...prev, name: value }));
          setAppointmentStep(2);
          addMessage('Perfect! Now, please provide your phone number (with country code if international).', true);
          break;
        case 2: // Phone
          if (!validatePhone(value)) {
            setErrors(['Please enter a valid phone number']);
            return;
          }
          setAppointmentData(prev => ({ ...prev, phone: value }));
          setAppointmentStep(3);
          addMessage('Great! What\'s your email address?', true);
          break;
        case 3: // Email
          if (!validateEmail(value)) {
            setErrors(['Please enter a valid email address']);
            return;
          }
          setAppointmentData(prev => ({ ...prev, email: value }));
          setAppointmentStep(4);
          addMessage('Which department would you like to visit?', true, departments);
          break;
        case 4: // Department
          setAppointmentData(prev => ({ ...prev, department: value }));
          setAppointmentStep(5);
          const deptDoctors = doctors[value as keyof typeof doctors] || [];
          addMessage(`Excellent choice! Here are our available ${value} doctors:\n\n${deptDoctors.map(doctor => `• ${doctor}`).join('\n')}\n\nWhich doctor would you prefer? (Or type "any" for any available doctor)`, true, [...deptDoctors, 'Any Available Doctor']);
          break;
        case 5: // Doctor
          setAppointmentData(prev => ({ ...prev, doctor: value }));
          setAppointmentStep(6);
          addMessage('When would you prefer your appointment? Please provide a date (YYYY-MM-DD format, e.g., 2024-02-15).', true);
          break;
        case 6: // Date
          if (!validateDate(value)) {
            setErrors(['Please select a future date']);
            return;
          }
          setAppointmentData(prev => ({ ...prev, date: value }));
          setAppointmentStep(7);
          addMessage('What time works best for you?', true, timeSlots);
          break;
        case 7: // Time
          setAppointmentData(prev => ({ ...prev, time: value }));
          setAppointmentStep(8);
          addMessage('Any additional notes or specific concerns? (Optional - you can type "none" if no additional notes)', true);
          break;
        case 8: // Notes
          setAppointmentData(prev => ({ ...prev, notes: value }));
          confirmAppointment();
          break;
      }
    });
  };

  const confirmAppointment = () => {
    const finalData = { ...appointmentData };
    simulateTyping(() => {
      addMessage(`✅ *Appointment Confirmed!*\n\n👤 **Name:** ${finalData.name}\n📞 **Phone:** ${finalData.phone}\n📧 **Email:** ${finalData.email}\n🏥 **Department:** ${finalData.department}\n👨‍⚕️ **Doctor:** ${finalData.doctor || 'To be assigned'}\n📅 **Date:** ${finalData.date}\n⏰ **Time:** ${finalData.time}\n📝 **Notes:** ${finalData.notes || 'None'}\n\n📱 *WhatsApp confirmation sent!*\n📧 *Email confirmation sent!*\n\nYour appointment has been successfully booked! You'll receive a confirmation email shortly.\n\nIs there anything else I can help you with?`, true, ['Book Another Appointment', 'Our Services', 'Contact Information', 'Rate Experience'], 'confirmation');
      
      // Send WhatsApp message
      sendWhatsAppMessage(finalData);
      
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
      
      // Enhanced NLP-like responses
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
        } else if (lowerInput.includes('doctor') || lowerInput.includes('physician')) {
          handleOptionClick('Find Doctor');
        } else if (lowerInput.includes('hello') || lowerInput.includes('hi') || lowerInput.includes('hey')) {
          addMessage('Hello! How can I assist you today?', true, ['Book Appointment', 'Our Services', 'Contact Information', 'Emergency Info']);
        } else if (lowerInput.includes('thank') || lowerInput.includes('thanks')) {
          addMessage('You\'re welcome! Is there anything else I can help you with?', true, ['Book Appointment', 'Our Services', 'Contact Information']);
        } else if (lowerInput.includes('price') || lowerInput.includes('cost') || lowerInput.includes('fee')) {
          addMessage('💰 *Pricing Information:*\n\nConsultation fees vary by department:\n• General Medicine: ₹500 - ₹800\n• Specialists: ₹800 - ₹1500\n• Emergency: ₹1000 - ₹2000\n\n💳 *Payment Methods:*\n• Cash\n• Credit/Debit Cards\n• UPI\n• Insurance accepted\n\nFor exact pricing, please contact our billing department or book an appointment.', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('insurance') || lowerInput.includes('claim')) {
          addMessage('🏥 *Insurance Information:*\n\nWe accept most major insurance providers:\n• Government schemes\n• Private insurance\n• Corporate insurance\n\n📋 *Required Documents:*\n• Insurance card\n• ID proof\n• Referral letter (if required)\n\nFor specific insurance queries, please contact our billing department.', true, ['Book Appointment', 'Contact Information']);
        } else {
          addMessage('I understand you\'re looking for information. Here are some ways I can help you:', true, ['Book Appointment', 'Our Services', 'Contact Information', 'Emergency Info']);
        }
      });
    }
    
    setInputValue('');
  };

  const handleFeedback = (rating: number) => {
    setShowFeedback(false);
    addMessage(`Thank you for rating your experience ${rating}/5 stars! ⭐ Your feedback helps us improve our service. 🙏`, true, ['Book Appointment', 'Our Services', 'Contact Information']);
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
        className={`fixed ${isMobile ? 'inset-0' : 'bottom-6 right-6'} ${isMobile ? 'w-full h-full' : 'w-96 h-[600px]'} bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-4 flex items-center justify-between text-white">
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
                className={`max-w-[85%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-white text-gray-800 shadow-sm'
                    : 'bg-blue-600 text-white'
                } ${message.type === 'confirmation' ? 'border-2 border-green-200 bg-green-50' : ''}`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                
                {/* Options */}
                {message.options && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="block w-full text-left p-2 text-xs bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-colors border border-blue-200"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
          
          {/* Error Messages */}
          {errors.length > 0 && (
            <div className="flex justify-start">
              <div className="bg-red-50 border border-red-200 p-3 rounded-2xl shadow-sm max-w-[85%]">
                <div className="flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-500" />
                  <p className="text-sm text-red-700">{errors[0]}</p>
                </div>
              </div>
            </div>
          )}
          
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
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-200">
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
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder={
                isBookingMode && appointmentStep > 0
                  ? 'Type your response...'
                  : 'Type your message...'
              }
              className="flex-1 p-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
            />
            <button
              onClick={handleSendMessage}
              disabled={!inputValue.trim()}
              className="p-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-2">
            <button
              onClick={() => handleOptionClick('Book Appointment')}
              className="text-xs px-3 py-1 bg-blue-50 text-blue-600 rounded-full hover:bg-blue-100 transition-colors border border-blue-200"
            >
              📅 Book Appointment
            </button>
            <button
              onClick={() => handleOptionClick('Our Services')}
              className="text-xs px-3 py-1 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors border border-green-200"
            >
              🏥 Services
            </button>
            <button
              onClick={() => setShowFeedback(true)}
              className="text-xs px-3 py-1 bg-yellow-50 text-yellow-600 rounded-full hover:bg-yellow-100 transition-colors border border-yellow-200"
            >
              ⭐ Rate Experience
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ChatWindowEnhanced;
