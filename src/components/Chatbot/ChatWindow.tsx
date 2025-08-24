import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Star, MessageCircle, AlertCircle } from 'lucide-react';
import { useBookingStore } from '../../store/bookingStore';
import { sendWhatsAppAppointment, sendEmailAppointment, validateAppointmentData } from '../../utils/whatsappService';
import './ChatbotResponsive.css';

interface Message {
  id: string
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

const ChatWindow: React.FC<ChatWindowProps> = ({ isOpen, onClose }) => {
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
    'General Medicine', 'Anaesthesia', 'General Surgery', 'Pediatrics', 
    'Neurology', 'Psychiatry', 'Orthopedics', 'Cardiology', 'Ophthalmology',
    'Emergency Medicine', 'Obstetrics & Gynecology', 'Dermatology', 'ENT',
    'Urology', 'Radiology', 'Pathology', 'Physiotherapy'
  ];

  const doctors = {
    'General Medicine': [
      'Dr. Bilal Abdullah, MD General Medicine',
      'Dr. Osama Awati, MBBS'
    ],
    'Anaesthesia': [
      'Dr. Asma Jahagirdar, DA',
      'Dr. Tahir, DA',
      'Dr. Meenal Aggarwal, MD Anaesthesia'
    ],
    'General Surgery': [
      'Dr. Nishikant Gujar, MS General Surgery',
      'Dr. Jilani Awati, MS General Surgery and Laparoscopic Surgeon'
    ],
    'Pediatrics': [
      'Dr. Surendra Aggarwal, MCh Pediatric Surgeon',
      'Dr. Rizwan, MD Pediatrics'
    ],
    'Neurology': [
      'Dr. Yitendra Nayak, MCh Neurosurgery'
    ],
    'Psychiatry': [
      'Dr. Soumya, MD Psychiatrist'
    ],
    'Orthopedics': [
      'Dr. Ravindra Kulkarni, MS Ortho and Spine Surgeon'
    ],
    'Cardiology': [
      'Dr. Ahmed Hassan, Interventional Cardiologist',
      'Dr. Sarah Al-Rashid, Cardiac Surgeon'
    ],
    'Ophthalmology': [
      'Dr. Fatima Omar, Ophthalmologist',
      'Dr. Ahmad Khalil, Retinal Specialist'
    ],
    'Emergency Medicine': [
      'Dr. Khalid Salem, Emergency Physician',
      'Dr. Aisha Noor, Trauma Specialist'
    ],
    'Obstetrics & Gynecology': [
      'Dr. Layla Hassan, Obstetrician',
      'Dr. Noor Ibrahim, Gynecologist'
    ],
    'Dermatology': [
      'Dr. Sarah Ahmed, Dermatologist',
      'Dr. Mohamed El-Sayed, Dermatologist'
    ],
    'ENT': [
      'Dr. Omar Abdallah, ENT Specialist',
      'Dr. Fatima Al-Zahra, ENT Surgeon'
    ],
    'Urology': [
      'Dr. Hassan Mahmoud, Urologist',
      'Dr. Youssef Ali, Urological Surgeon'
    ],
    'Radiology': [
      'Dr. Khalid Salem, Radiologist',
      'Dr. Aisha Noor, Interventional Radiologist'
    ],
    'Pathology': [
      'Dr. Mohamed Ali, Pathologist',
      'Dr. Fatima Omar, Clinical Pathologist'
    ],
    'Physiotherapy': [
      'Dr. John Smith, Physiotherapist',
      'Dr. Maria Garcia, Rehabilitation Specialist'
    ]
  };

  const services = {
    'General Medicine': [
      'Routine Health Checkups', 'Chronic Disease Management', 'Preventive Care',
      'Health Screenings', 'Vaccination Services', 'Minor Procedures',
      'Health Counseling', 'Referral Services'
    ],
    'Anaesthesia': [
      'General Anaesthesia', 'Regional Anaesthesia', 'Local Anaesthesia',
      'Pain Management', 'Critical Care Anaesthesia', 'Obstetric Anaesthesia',
      'Pediatric Anaesthesia', 'Cardiac Anaesthesia'
    ],
    'General Surgery': [
      'Appendectomy', 'Hernia Repair', 'Gallbladder Surgery', 'Thyroidectomy',
      'Laparoscopic Surgery', 'Robotic Surgery', 'Colorectal Surgery', 'Wound Care'
    ],
    'Pediatrics': [
      'Well-Child Checkups', 'Immunizations', 'Growth Monitoring',
      'Developmental Assessments', 'Pediatric Emergency Care', 'Newborn Care',
      'Adolescent Medicine', 'Pediatric Surgery'
    ],
    'Neurology': [
      'EEG (Electroencephalography)', 'EMG (Electromyography)', 'MRI Brain Imaging',
      'Stroke Treatment', 'Epilepsy Management', 'Movement Disorders',
      'Memory Disorders', 'Headache Treatment'
    ],
    'Psychiatry': [
      'Mental Health Assessment', 'Depression Treatment', 'Anxiety Disorders',
      'Bipolar Disorder', 'Schizophrenia', 'Addiction Treatment',
      'Child Psychiatry', 'Geriatric Psychiatry'
    ],
    'Orthopedics': [
      'Joint Replacement Surgery', 'Sports Medicine', 'Fracture Treatment',
      'Spine Surgery', 'Arthroscopic Surgery', 'Physical Therapy',
      'Pain Management', 'Orthopedic Trauma'
    ],
    'Cardiology': [
      'Cardiac Catheterization', 'Echocardiography', 'Stress Testing',
      'Holter Monitoring', 'Pacemaker Implantation', 'Cardiac Surgery',
      'Preventive Cardiology', 'Heart Failure Management'
    ],
    'Ophthalmology': [
      'Comprehensive Eye Exams', 'Cataract Surgery', 'Glaucoma Treatment',
      'Retinal Disorders', 'LASIK Surgery', 'Diabetic Eye Care',
      'Pediatric Ophthalmology', 'Emergency Eye Care'
    ],
    'Emergency Medicine': [
      'Trauma Care', 'Cardiac Emergencies', 'Stroke Management',
      'Critical Care', 'Pediatric Emergencies', 'Resuscitation Services',
      'Triage and Stabilization', 'Emergency Diagnostics'
    ],
    'Obstetrics & Gynecology': [
      'Prenatal Care', 'Labor and Delivery', 'Gynecological Surgery',
      'Fertility Treatments', 'Menopause Management', 'Pap Smears',
      'Mammography', 'High-Risk Pregnancy Care'
    ],
    'Dermatology': [
      'Skin Cancer Screening', 'Acne Treatment', 'Eczema Management',
      'Psoriasis Treatment', 'Cosmetic Dermatology', 'Surgical Dermatology',
      'Allergy Testing', 'Hair Loss Treatment'
    ],
    'ENT': [
      'Hearing Tests', 'Sinus Treatment', 'Tonsillectomy',
      'Voice Disorders', 'Balance Disorders', 'Sleep Apnea',
      'Head and Neck Surgery', 'Allergy Treatment'
    ],
    'Urology': [
      'Prostate Treatment', 'Kidney Stones', 'Bladder Disorders',
      'Male Infertility', 'Urinary Incontinence', 'Urological Cancer',
      'Minimally Invasive Surgery', 'Robotic Surgery'
    ],
    'Radiology': [
      'X-Ray Imaging', 'CT Scans', 'MRI Scans', 'Ultrasound',
      'Nuclear Medicine', 'Interventional Radiology', 'Mammography',
      'Bone Density Scans'
    ],
    'Pathology': [
      'Blood Tests', 'Tissue Analysis', 'Cancer Diagnosis',
      'Microbiology', 'Cytology', 'Molecular Pathology',
      'Forensic Pathology', 'Clinical Chemistry'
    ],
    'Physiotherapy': [
      'Physical Rehabilitation', 'Sports Injury Treatment', 'Post-Surgery Recovery',
      'Neurological Rehabilitation', 'Cardiac Rehabilitation', 'Pain Management',
      'Orthopedic Rehabilitation', 'Geriatric Physiotherapy'
    ]
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
    return /^[+]?[1-9][\d]{0,15}$/.test(phone.replace(/\s/g, ''));
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
          addMessage('🏥 *Al Nabi Hospital - Complete Services Directory:*\n\n🩺 **General Medicine** - Primary healthcare & preventive care\n💉 **Anaesthesia** - Pain management & surgical support\n🔪 **General Surgery** - Surgical procedures & laparoscopic surgery\n👶 **Pediatrics** - Child healthcare & development\n🧠 **Neurology** - Brain & nervous system disorders\n🧠 **Psychiatry** - Mental health & behavioral therapy\n🦴 **Orthopedics** - Bone, joint & spine care\n💓 **Cardiology** - Heart care & cardiovascular health\n👁️ **Ophthalmology** - Eye care & vision correction\n🚨 **Emergency Medicine** - 24/7 urgent care\n👩‍⚕️ **Obstetrics & Gynecology** - Women\'s health & maternity\n🩸 **Dermatology** - Skin, hair & nail conditions\n👂 **ENT** - Ear, nose & throat care\n🚹 **Urology** - Urinary system & male health\n📷 **Radiology** - Diagnostic imaging & scans\n🔬 **Pathology** - Laboratory testing & diagnosis\n💪 **Physiotherapy** - Rehabilitation & physical therapy\n\nWhich department would you like to know more about?', true, departments);
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
            const deptServices = services[option as keyof typeof services] || [];
            addMessage(`🏥 *${option} Department*\n\n*Available Doctors:*\n${deptDoctors.map(doctor => `• ${doctor}`).join('\n')}\n\n*Services Offered:*\n${deptServices.slice(0, 6).map(service => `• ${service}`).join('\n')}${deptServices.length > 6 ? '\n... and more' : ''}\n\nWould you like to book an appointment with our ${option} team?`, true, ['Book Appointment', 'More Information', 'Other Services']);
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
          {
            setAppointmentData(prev => ({ ...prev, department: value }));
            setAppointmentStep(5);
            const deptDoctors = doctors[value as keyof typeof doctors] || [];
            addMessage(`Excellent choice! Here are our available ${value} doctors:\n\n${deptDoctors.map(doctor => `• ${doctor}`).join('\n')}\n\nWhich doctor would you prefer? (Or type "any" for any available doctor)`, true, [...deptDoctors, 'Any Available Doctor']);
          }
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
    
    // Validate appointment data
    const validation = validateAppointmentData(finalData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    simulateTyping(() => {
      addMessage(`✅ *Appointment Confirmed!*\n\n👤 **Name:** ${finalData.name}\n📞 **Phone:** ${finalData.phone}\n📧 **Email:** ${finalData.email}\n🏥 **Department:** ${finalData.department}\n👨‍⚕️ **Doctor:** ${finalData.doctor || 'To be assigned'}\n📅 **Date:** ${finalData.date}\n⏰ **Time:** ${finalData.time}\n📝 **Notes:** ${finalData.notes || 'None'}\n\n📱 *WhatsApp confirmation sent!*\n📧 *Email confirmation sent!*\n\nYour appointment has been successfully booked! You'll receive a confirmation email shortly.\n\nIs there anything else I can help you with?`, true, ['Book Another Appointment', 'Our Services', 'Contact Information', 'Rate Experience'], 'confirmation');
      
      // Send WhatsApp message
      sendWhatsAppAppointment(finalData);
      
      // Send email confirmation
      sendEmailAppointment(finalData);
      
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
          addMessage('💰 *Pricing Information:*\n\nConsultation fees vary by department:\n• General Medicine: ₹500 - ₹800\n• Specialists: ₹800 - ₹1500\n• Emergency: ₹1000 - ₹2000\n• Surgery: ₹5000 - ₹50000 (depending on procedure)\n\n💳 *Payment Methods:*\n• Cash\n• Credit/Debit Cards\n• UPI\n• Insurance accepted\n• EMI options available\n\nFor exact pricing, please contact our billing department or book an appointment.', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('insurance') || lowerInput.includes('claim')) {
          addMessage('🏥 *Insurance Information:*\n\nWe accept most major insurance providers:\n• Government schemes (Ayushman Bharat, CGHS)\n• Private insurance (ICICI, HDFC, Bajaj, etc.)\n• Corporate insurance\n• TPA networks\n\n📋 *Required Documents:*\n• Insurance card\n• ID proof (Aadhar/PAN)\n• Referral letter (if required)\n• Pre-authorization (for planned procedures)\n\nFor specific insurance queries, please contact our billing department.', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('location') || lowerInput.includes('where') || lowerInput.includes('address')) {
          addMessage('📍 *Hospital Location:*\n\n🏥 **Al Nabi Hospital**\n123 Medical Center Drive\nBijapur, Karnataka, India\n\n🗺️ **How to reach us:**\n• By Road: 5 minutes from Bijapur Bus Stand\n• By Train: 10 minutes from Bijapur Railway Station\n• By Air: 45 minutes from Belgaum Airport\n\n🅿️ **Parking:** Free parking available\n♿ **Accessibility:** Wheelchair accessible\n\nNeed directions? I can help you with the route!', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('timing') || lowerInput.includes('hours') || lowerInput.includes('schedule')) {
          addMessage('⏰ *Hospital Timings:*\n\n🩺 **Outpatient Department:**\nMonday - Friday: 8:00 AM - 8:00 PM\nSaturday - Sunday: 9:00 AM - 6:00 PM\n\n🚨 **Emergency Services:**\n24/7 Available\n\n🏥 **Inpatient Services:**\n24/7 Available\n\n💊 **Pharmacy:**\nMonday - Sunday: 7:00 AM - 10:00 PM\n\n🔬 **Laboratory:**\nMonday - Sunday: 7:00 AM - 8:00 PM\n\n📞 **Appointment Booking:**\nAvailable 24/7 online', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('facility') || lowerInput.includes('equipment') || lowerInput.includes('technology')) {
          addMessage('🏥 *Hospital Facilities & Technology:*\n\n🔬 **Advanced Diagnostics:**\n• MRI, CT Scan, X-Ray\n• Ultrasound, ECG, EEG\n• Blood Bank & Laboratory\n• Pathology Services\n\n🏥 **Medical Equipment:**\n• Modern Operation Theaters\n• ICU & NICU\n• Ventilators & Monitors\n• Laparoscopic Equipment\n• Robotic Surgery Systems\n\n🏨 **Patient Facilities:**\n• Private & General Wards\n• AC Rooms Available\n• Cafeteria & Canteen\n• Prayer Room\n• Wi-Fi Access\n\nWould you like to know about specific facilities?', true, ['Book Appointment', 'Our Services']);
        } else if (lowerInput.includes('ambulance') || lowerInput.includes('emergency') || lowerInput.includes('urgent')) {
          addMessage('🚑 *Emergency & Ambulance Services:*\n\n📞 **Emergency Hotline:** +91 4 123 4568\n🚑 **Ambulance Service:** 24/7 Available\n\n⚡ **Response Time:**\n• City: 10-15 minutes\n• Nearby areas: 20-30 minutes\n\n🏥 **Emergency Department:**\n• Level I Trauma Center\n• Cardiac Emergency Unit\n• Pediatric Emergency\n• Stroke Unit\n\n💳 **Emergency Payment:**\n• Cash/Card accepted\n• Insurance processing\n• EMI options available\n\nFor immediate emergency, call the hotline directly!', true, ['Contact Information', 'Emergency Info']);
        } else if (lowerInput.includes('test') || lowerInput.includes('lab') || lowerInput.includes('diagnostic')) {
          addMessage('🔬 *Laboratory & Diagnostic Services:*\n\n🩸 **Blood Tests:**\n• Complete Blood Count (CBC)\n• Blood Sugar, Cholesterol\n• Liver & Kidney Function\n• Thyroid Tests\n• Cancer Markers\n\n📷 **Imaging Services:**\n• X-Ray (Digital)\n• Ultrasound\n• CT Scan\n• MRI\n• ECG, EEG, EMG\n\n🔍 **Specialized Tests:**\n• Cardiac Tests\n• Neurological Tests\n• Pregnancy Tests\n• Allergy Tests\n• Genetic Testing\n\n⏰ **Report Timing:**\n• Routine: 24-48 hours\n• Emergency: 2-4 hours\n• Specialized: 3-7 days\n\nBook your tests online or visit our lab!', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('surgery') || lowerInput.includes('operation') || lowerInput.includes('procedure')) {
          addMessage('🔪 *Surgical Services:*\n\n🏥 **Available Surgeries:**\n• General Surgery\n• Laparoscopic Surgery\n• Orthopedic Surgery\n• Cardiac Surgery\n• Neurosurgery\n• Pediatric Surgery\n• Gynecological Surgery\n• ENT Surgery\n\n⚡ **Special Features:**\n• Minimally Invasive Procedures\n• Robotic Surgery\n• Day Care Surgery\n• Advanced Anesthesia\n• Post-operative Care\n\n👨‍⚕️ **Surgical Team:**\n• Experienced Surgeons\n• Anesthesiologists\n• Surgical Nurses\n• Support Staff\n\n📋 **Pre-surgery Requirements:**\n• Medical Evaluation\n• Pre-operative Tests\n• Insurance Approval\n• Fasting Instructions\n\nWould you like to book a consultation with our surgeons?', true, ['Book Appointment', 'Our Services']);
        } else if (lowerInput.includes('covid') || lowerInput.includes('corona') || lowerInput.includes('vaccine')) {
          addMessage('🦠 *COVID-19 Services:*\n\n🔬 **Testing:**\n• RT-PCR Test\n• Rapid Antigen Test\n• Antibody Test\n\n💉 **Vaccination:**\n• COVID-19 Vaccines Available\n• Booster Doses\n• Vaccination Certificates\n\n🏥 **Treatment:**\n• COVID-19 Treatment\n• Post-COVID Care\n• Rehabilitation Services\n\n🛡️ **Safety Measures:**\n• Regular Sanitization\n• Social Distancing\n• Mask Mandatory\n• Temperature Screening\n\n📞 **COVID Helpline:** +91 4 123 4569\n\nStay safe and get vaccinated!', true, ['Book Appointment', 'Contact Information']);
        } else if (lowerInput.includes('cardiology') || lowerInput.includes('heart') || lowerInput.includes('cardiac')) {
          addMessage('💓 *Cardiology Department:*\n\n👨‍⚕️ **Our Cardiologists:**\n• Dr. Ahmed Hassan, Interventional Cardiologist\n• Dr. Sarah Al-Rashid, Cardiac Surgeon\n\n🔬 **Services:**\n• Cardiac Catheterization\n• Echocardiography\n• Stress Testing\n• Holter Monitoring\n• Pacemaker Implantation\n• Cardiac Surgery\n• Preventive Cardiology\n• Heart Failure Management\n\n⚡ **Emergency Cardiac Care:**\n• 24/7 Cardiac Emergency\n• Primary Angioplasty\n• Cardiac ICU\n\nWould you like to book an appointment with our cardiology team?', true, ['Book Appointment', 'Our Services']);
        } else if (lowerInput.includes('neurology') || lowerInput.includes('brain') || lowerInput.includes('nerve')) {
          addMessage('🧠 *Neurology Department:*\n\n👨‍⚕️ **Our Neurologists:**\n• Dr. Yitendra Nayak, MCh Neurosurgery\n\n🔬 **Services:**\n• EEG (Electroencephalography)\n• EMG (Electromyography)\n• MRI Brain Imaging\n• Stroke Treatment\n• Epilepsy Management\n• Movement Disorders\n• Memory Disorders\n• Headache Treatment\n\n⚡ **Emergency Neurology:**\n• Stroke Unit\n• 24/7 Neurological Emergency\n• Neurosurgical ICU\n\nWould you like to book an appointment with our neurology team?', true, ['Book Appointment', 'Our Services']);
        } else if (lowerInput.includes('pediatrics') || lowerInput.includes('child') || lowerInput.includes('baby')) {
          addMessage('👶 *Pediatrics Department:*\n\n👨‍⚕️ **Our Pediatricians:**\n• Dr. Surendra Aggarwal, MCh Pediatric Surgeon\n• Dr. Rizwan, MD Pediatrics\n\n🔬 **Services:**\n• Well-Child Checkups\n• Immunizations\n• Growth Monitoring\n• Developmental Assessments\n• Pediatric Emergency Care\n• Newborn Care\n• Adolescent Medicine\n• Pediatric Surgery\n\n🏥 **Child-Friendly Environment:**\n• Play Area\n• Child-Safe Equipment\n• Pediatric ICU\n• Neonatal Care\n\nWould you like to book an appointment for your child?', true, ['Book Appointment', 'Our Services']);
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
        className={`fixed ${isMobile ? 'inset-0' : 'bottom-6 right-6'} ${isMobile ? 'w-full h-full' : 'w-96 h-[600px]'} bg-white rounded-2xl shadow-2xl z-50 flex flex-col overflow-hidden border border-gray-200 chatbot-window chatbot-container`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-500 via-blue-600 to-purple-600 p-4 flex items-center justify-between text-white shadow-lg">
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
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50 chatbot-messages">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-[85%] p-3 rounded-2xl ${
                  message.isBot
                    ? 'bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800 shadow-sm'
                    : 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                } ${message.type === 'confirmation' ? 'border-2 border-green-200 bg-gradient-to-br from-green-50 to-green-100' : ''}`}
              >
                <p className="text-sm whitespace-pre-line leading-relaxed">{message.text}</p>
                
                {/* Options */}
                {message.options && (
                  <div className="mt-3 space-y-2">
                    {message.options.map((option, index) => (
                      <button
                        key={index}
                        onClick={() => handleOptionClick(option)}
                        className="block w-full text-left p-2 text-xs bg-gradient-to-r from-blue-50 to-purple-50 hover:from-blue-100 hover:to-purple-100 text-blue-700 rounded-lg transition-all duration-200 border border-blue-200 shadow-sm"
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
        <div className="p-4 bg-white border-t border-gray-200 chatbot-input">
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
              className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl hover:from-blue-600 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-md"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          
          {/* Quick Actions */}
          <div className="flex flex-wrap gap-2 mt-2 chatbot-quick-actions">
            <button
              onClick={() => handleOptionClick('Book Appointment')}
              className="text-xs px-3 py-1 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 rounded-full hover:from-blue-100 hover:to-purple-100 transition-all duration-200 border border-blue-200 shadow-sm"
            >
              📅 Book Appointment
            </button>
            <button
              onClick={() => handleOptionClick('Our Services')}
              className="text-xs px-3 py-1 bg-gradient-to-r from-green-50 to-emerald-50 text-green-600 rounded-full hover:from-green-100 hover:to-emerald-100 transition-all duration-200 border border-green-200 shadow-sm"
            >
              🏥 Services
            </button>
            <button
              onClick={() => setShowFeedback(true)}
              className="text-xs px-3 py-1 bg-gradient-to-r from-yellow-50 to-orange-50 text-yellow-600 rounded-full hover:from-yellow-100 hover:to-orange-100 transition-all duration-200 border border-yellow-200 shadow-sm"
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