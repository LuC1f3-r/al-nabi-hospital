import React from 'react';
import { Heart, Brain, Baby, Eye, Bone, Activity } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Heart,
      title: 'Cardiology',
      description: 'Comprehensive heart care with advanced cardiac procedures and preventive treatments.'
    },
    {
      icon: Brain,
      title: 'Neurology',
      description: 'Specialized care for neurological disorders with state-of-the-art diagnostic equipment.'
    },
    {
      icon: Baby,
      title: 'Pediatrics',
      description: 'Dedicated pediatric care for infants, children, and adolescents with specialized expertise.'
    },
    {
      icon: Eye,
      title: 'Ophthalmology',
      description: 'Complete eye care services including surgery, treatment, and preventive care.'
    },
    {
      icon: Bone,
      title: 'Orthopedics',
      description: 'Treatment of bone, joint, and muscle disorders with minimally invasive techniques.'
    },
    {
      icon: Activity,
      title: 'General Medicine',
      description: 'Primary healthcare services for routine check-ups and general medical conditions.'
    }
  ];

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
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="h-8 w-8 text-white" />
              </div>
              
              <h3 className="text-xl font-semibold text-[#004F74] mb-3">
                {service.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed mb-4">
                {service.description}
              </p>
              
              <button className="text-[#007BBA] font-medium hover:text-[#004F74] transition-colors flex items-center space-x-1 group-hover:translate-x-2 transition-transform duration-300">
                <span>Learn More</span>
                <span>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;