import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Heart, Brain, Baby, Eye, Bone, Activity } from 'lucide-react';
import { motion } from 'framer-motion';

const Services = () => {
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState<string | null>(null);

  const services = [
    {
      id: 'cardiology',
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures and preventive treatments.'
    },
    {
      id: 'neurology',
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized care for neurological disorders with state-of-the-art diagnostic equipment.'
    },
    {
      id: 'pediatrics',
      icon: Baby,
      title: 'Pediatrics',
      description: 'Dedicated pediatric care for infants, children, and adolescents with specialized expertise.'
    },
    {
      id: 'ophthalmology',
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services including surgery, treatment, and preventive care.'
    },
    {
      id: 'orthopedics',
      icon: Bone,
      title: 'Orthopedics',
      description: 'Treatment of bone, joint, and muscle disorders with minimally invasive techniques.'
    },
    {
      id: 'general-medicine',
      icon: Activity,
      title: 'General Medicine',
      description: 'Primary healthcare services for routine check-ups and general medical conditions.'
    }
  ];

  const handleLearnMore = (serviceId: string) => {
    // Validate service ID
    if (!services.some(service => service.id === serviceId)) {
      console.error(`Invalid service ID: ${serviceId}`);
      return;
    }
    
    setIsNavigating(serviceId);
    
    // Use a more reliable navigation approach
    try {
      // Clear any existing hash/anchor from URL
      window.history.replaceState(null, '', window.location.pathname);
      
      // Navigate to the service page
      navigate(`/services/${serviceId}`, { 
        replace: false,
        state: { fromServices: true } // Optional: pass state for better UX
      });
      
      // Reset loading state after navigation
      setTimeout(() => {
        setIsNavigating(null);
      }, 500);
    } catch (error) {
      console.error('Navigation error:', error);
      setIsNavigating(null);
    }
  };

  return (
    <section id="services" className="py-20 bg-[#F6FAFD]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004F74] mb-4">
            Our Specializations
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive medical services across multiple specialties, 
            ensuring you receive expert care for all your health needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id} // Use service.id instead of index for better React keys
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 ease-out transform hover:-translate-y-1 group will-change-transform"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-200 ease-out will-change-transform">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#004F74] mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <button 
                onClick={() => handleLearnMore(service.id)}
                disabled={isNavigating === service.id}
                aria-label={`Learn more about ${service.title}`}
                className={`text-[#007BBA] font-medium hover:text-[#004F74] transition-colors duration-200 ease-out flex items-center space-x-1 group-hover:translate-x-1 transition-transform will-change-transform ${
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
        </div>
      </div>
    </section>
  );
};

export default Services;