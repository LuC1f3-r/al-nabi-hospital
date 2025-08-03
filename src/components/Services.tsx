import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Brain, Baby, Eye, Bone, Activity, Stethoscope, Ambulance, Scissors, Droplet, Scan, Shield, User, Microscope, Syringe, Ear, LucideIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface Service {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

const Services: React.FC = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState<string | null>(null);
  const [showAll, setShowAll] = useState<boolean>(false);

  const services: Service[] = [
    {
      id: 'cardiology',
      icon: Heart,
      title: 'Cardiology',
      description: 'Advanced heart care with cutting-edge diagnostics and treatments.',
    },
    {
      id: 'neurology',
      icon: Brain,
      title: 'Neurology',
      description: 'Expert care for brain and nervous system disorders.',
    },
    {
      id: 'pediatrics',
      icon: Baby,
      title: 'Pediatrics',
      description: 'Specialized care for infants, children, and adolescents.',
    },
    {
      id: 'ophthalmology',
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Comprehensive eye care, including surgery and vision correction.',
    },
    {
      id: 'orthopedics',
      icon: Bone,
      title: 'Orthopedics',
      description: 'Advanced treatment for bone, joint, and muscle conditions.',
    },
    {
      id: 'general-medicine',
      icon: Stethoscope,
      title: 'General Medicine',
      description: 'Primary care for routine check-ups and chronic conditions.',
    },
    {
      id: 'emergency-medicine',
      icon: Ambulance,
      title: 'Emergency Medicine',
      description: '24/7 urgent care for life-threatening conditions.',
    },
    {
      id: 'general-surgery',
      icon: Scissors,
      title: 'General Surgery',
      description: 'Expert surgical care for a wide range of conditions.',
    },
    {
      id: 'obstetrics-gynecology',
      icon: Heart,
      title: 'Obstetrics & Gynecology',
      description: 'Comprehensive women’s health and maternity care.',
    },
    {
      id: 'ent',
      icon: Ear,
      title: 'ENT (Ear, Nose, Throat)',
      description: 'Specialized care for ear, nose, and throat disorders.',
    },
    {
      id: 'urology',
      icon: Droplet,
      title: 'Urology',
      description: 'Treatment for urinary tract and male reproductive health.',
    },
    {
      id: 'plastic-reconstructive-surgery',
      icon: Shield,
      title: 'Plastic & Reconstructive Surgery',
      description: 'Cosmetic and reconstructive procedures with precision.',
    },
    {
      id: 'dermatology',
      icon: User,
      title: 'Dermatology',
      description: 'Skin health solutions for medical and cosmetic needs.',
    },
    {
      id: 'psychiatry',
      icon: Brain,
      title: 'Psychiatry',
      description: 'Mental health care with compassionate, personalized treatment.',
    },
    {
      id: 'pulmonology',
      icon: Activity,
      title: 'Pulmonology',
      description: 'Care for respiratory conditions and lung health.',
    },
    {
      id: 'gastroenterology',
      icon: Droplet,
      title: 'Gastroenterology',
      description: 'Diagnosis and treatment of digestive system disorders.',
    },
    {
      id: 'nephrology',
      icon: Droplet,
      title: 'Nephrology',
      description: 'Kidney care, including dialysis and transplant support.',
    },
    {
      id: 'endocrinology',
      icon: Droplet,
      title: 'Endocrinology',
      description: 'Management of hormonal and metabolic disorders.',
    },
    {
      id: 'rheumatology',
      icon: Bone,
      title: 'Rheumatology',
      description: 'Treatment for arthritis and autoimmune diseases.',
    },
    {
      id: 'infectious-diseases',
      icon: Syringe,
      title: 'Infectious Diseases',
      description: 'Expert care for infections and preventive strategies.',
    },
    {
      id: 'anesthesiology-pain-management',
      icon: Droplet,
      title: 'Anesthesiology & Pain Management',
      description: 'Advanced pain relief and anesthesia services.',
    },
    {
      id: 'physiotherapy',
      icon: Activity,
      title: 'Physiotherapy',
      description: 'Rehabilitation and mobility enhancement therapies.',
    },
    {
      id: 'radiology-imaging',
      icon: Scan,
      title: 'Radiology & Imaging',
      description: 'State-of-the-art diagnostic imaging services.',
    },
    {
      id: 'pathology-laboratory',
      icon: Microscope,
      title: 'Pathology & Laboratory',
      description: 'Accurate diagnostics through advanced lab testing.',
    },
  ];

  const initialServices = services.slice(0, 6);
  const displayedServices = showAll ? services : initialServices;

  const handleLearnMore = (serviceId: string) => {
    if (!services.some(service => service.id === serviceId)) {
      console.error(`Invalid service ID: ${serviceId}`);
      return;
    }
    
    setIsNavigating(serviceId);
    
    try {
      // Navigate to the service detail page
      navigate(`/services/${serviceId}`, { 
        replace: false,
        state: { fromServices: true },
      });
      
      // Use a timeout to reset the navigating state
      const timer = setTimeout(() => {
        setIsNavigating(null);
      }, 500);
      
      return () => clearTimeout(timer);
    } catch (error) {
      console.error('Navigation error:', error);
      setIsNavigating(null);
    }
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-[#F6FAFD] to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#004F74] mb-4 tracking-tight">
            Our Medical Specializations
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover our wide range of medical services, delivered by expert specialists using state-of-the-art technology to ensure the highest quality care.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 group border border-gray-100"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ease-out">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-[#004F74] mb-3">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {service.description}
                </p>
                
                <button 
                  onClick={() => handleLearnMore(service.id)}
                  disabled={isNavigating === service.id}
                  aria-label={`Learn more about ${service.title}`}
                  className={`text-[#007BBA] font-medium hover:text-[#004F74] transition-colors duration-200 ease-out flex items-center space-x-2 group-hover:translate-x-2 transition-transform ${
                    isNavigating === service.id ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <span>{isNavigating === service.id ? 'Loading...' : 'Learn More'}</span>
                  <span className={`transition-transform duration-200 ${isNavigating === service.id ? 'animate-spin' : ''}`}>
                    {isNavigating === service.id ? '⟳' : '→'}
                  </span>
                </button>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {!showAll && (
          <div className="text-center mt-12">
            <motion.button
              onClick={() => setShowAll(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#007BBA] text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#004F74] transition-colors duration-300 shadow-md"
            >
              More Services
            </motion.button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Services;