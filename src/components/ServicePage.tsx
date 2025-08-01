import React, { useEffect } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, Award, CheckCircle, Phone, Mail } from 'lucide-react';
import { Heart, Brain, Baby, Eye, Bone, Activity } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';

const ServicePage = () => {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { setIsModalOpen } = useBookingStore();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [serviceId]);

  const serviceIcons = {
    cardiology: Heart,
    neurology: Brain,
    pediatrics: Baby,
    ophthalmology: Eye,
    orthopedics: Bone,
    'general-medicine': Activity
  };

  const serviceData = {
    cardiology: {
      title: 'Cardiology Department',
      subtitle: 'Comprehensive Heart Care',
      description: 'Our cardiology department provides world-class cardiac care with state-of-the-art technology and experienced cardiologists.',
      heroImage: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Cardiac Catheterization',
        'Echocardiography',
        'Stress Testing',
        'Holter Monitoring',
        'Pacemaker Implantation',
        'Cardiac Surgery',
        'Preventive Cardiology',
        'Heart Failure Management'
      ],
      doctors: [
        { name: 'Dr. Ahmed Hassan', specialization: 'Interventional Cardiologist', experience: '15+ years' },
        { name: 'Dr. Sarah Al-Rashid', specialization: 'Cardiac Surgeon', experience: '12+ years' }
      ],
      features: [
        { icon: Clock, title: '24/7 Emergency Care', description: 'Round-the-clock cardiac emergency services' },
        { icon: Award, title: 'Expert Team', description: 'Board-certified cardiologists and cardiac surgeons' },
        { icon: Users, title: 'Patient-Centered', description: 'Personalized treatment plans for each patient' }
      ]
    },
    neurology: {
      title: 'Neurology Department',
      subtitle: 'Advanced Neurological Care',
      description: 'Our neurology department specializes in diagnosing and treating disorders of the nervous system with cutting-edge technology.',
      heroImage: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'EEG (Electroencephalography)',
        'EMG (Electromyography)',
        'MRI Brain Imaging',
        'Stroke Treatment',
        'Epilepsy Management',
        'Movement Disorders',
        'Memory Disorders',
        'Headache Treatment'
      ],
      doctors: [
        { name: 'Dr. Sarah Ahmed', specialization: 'Neurologist', experience: '18+ years' },
        { name: 'Dr. Mohamed El-Sayed', specialization: 'Neurosurgeon', experience: '14+ years' }
      ],
      features: [
        { icon: Clock, title: 'Advanced Diagnostics', description: 'State-of-the-art neurological testing equipment' },
        { icon: Award, title: 'Specialized Care', description: 'Expert treatment for complex neurological conditions' },
        { icon: Users, title: 'Comprehensive Support', description: 'Multidisciplinary approach to patient care' }
      ]
    },
    pediatrics: {
      title: 'Pediatrics Department',
      subtitle: 'Caring for Your Little Ones',
      description: 'Our pediatric department provides comprehensive healthcare for infants, children, and adolescents in a child-friendly environment.',
      heroImage: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Well-Child Checkups',
        'Immunizations',
        'Growth Monitoring',
        'Developmental Assessments',
        'Pediatric Emergency Care',
        'Newborn Care',
        'Adolescent Medicine',
        'Pediatric Surgery'
      ],
      doctors: [
        { name: 'Dr. Mohamed Ali', specialization: 'Pediatrician', experience: '16+ years' },
        { name: 'Dr. Fatima Al-Zahra', specialization: 'Pediatric Surgeon', experience: '11+ years' }
      ],
      features: [
        { icon: Clock, title: 'Child-Friendly Environment', description: 'Designed specifically for children\'s comfort' },
        { icon: Award, title: 'Pediatric Specialists', description: 'Doctors trained specifically in child healthcare' },
        { icon: Users, title: 'Family-Centered Care', description: 'Involving families in every step of treatment' }
      ]
    },
    ophthalmology: {
      title: 'Ophthalmology Department',
      subtitle: 'Complete Eye Care Services',
      description: 'Our ophthalmology department offers comprehensive eye care services from routine exams to complex surgical procedures.',
      heroImage: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Comprehensive Eye Exams',
        'Cataract Surgery',
        'Glaucoma Treatment',
        'Retinal Disorders',
        'LASIK Surgery',
        'Diabetic Eye Care',
        'Pediatric Ophthalmology',
        'Emergency Eye Care'
      ],
      doctors: [
        { name: 'Dr. Fatima Omar', specialization: 'Ophthalmologist', experience: '13+ years' },
        { name: 'Dr. Ahmad Khalil', specialization: 'Retinal Specialist', experience: '10+ years' }
      ],
      features: [
        { icon: Clock, title: 'Advanced Technology', description: 'Latest diagnostic and surgical equipment' },
        { icon: Award, title: 'Expert Surgeons', description: 'Experienced in complex eye surgeries' },
        { icon: Users, title: 'Comprehensive Care', description: 'From routine care to specialized treatments' }
      ]
    },
    orthopedics: {
      title: 'Orthopedics Department',
      subtitle: 'Bone, Joint & Muscle Care',
      description: 'Our orthopedic department specializes in treating musculoskeletal conditions with both surgical and non-surgical approaches.',
      heroImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Joint Replacement Surgery',
        'Sports Medicine',
        'Fracture Treatment',
        'Spine Surgery',
        'Arthroscopic Surgery',
        'Physical Therapy',
        'Pain Management',
        'Orthopedic Trauma'
      ],
      doctors: [
        { name: 'Dr. John Smith', specialization: 'Orthopedic Surgeon', experience: '17+ years' },
        { name: 'Dr. Omar Abdallah', specialization: 'Sports Medicine Specialist', experience: '12+ years' }
      ],
      features: [
        { icon: Clock, title: 'Minimally Invasive', description: 'Advanced minimally invasive surgical techniques' },
        { icon: Award, title: 'Sports Medicine', description: 'Specialized care for athletes and active individuals' },
        { icon: Users, title: 'Rehabilitation', description: 'Comprehensive post-treatment rehabilitation' }
      ]
    },
    'general-medicine': {
      title: 'General Medicine Department',
      subtitle: 'Primary Healthcare Services',
      description: 'Our general medicine department provides comprehensive primary healthcare services for patients of all ages.',
      heroImage: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Routine Health Checkups',
        'Chronic Disease Management',
        'Preventive Care',
        'Health Screenings',
        'Vaccination Services',
        'Minor Procedures',
        'Health Counseling',
        'Referral Services'
      ],
      doctors: [
        { name: 'Dr. Layla Hassan', specialization: 'Internal Medicine', experience: '14+ years' },
        { name: 'Dr. Youssef Ali', specialization: 'Family Medicine', experience: '16+ years' }
      ],
      features: [
        { icon: Clock, title: 'Comprehensive Care', description: 'Complete primary healthcare services' },
        { icon: Award, title: 'Preventive Focus', description: 'Emphasis on prevention and early detection' },
        { icon: Users, title: 'Personalized Treatment', description: 'Tailored care plans for each patient' }
      ]
    }
  };

  const currentService = serviceId ? serviceData[serviceId as keyof typeof serviceData] : undefined;
  const ServiceIcon = serviceId ? serviceIcons[serviceId as keyof typeof serviceIcons] : undefined;

  // Enhanced back navigation
  const handleBackNavigation = () => {
    // Check if we came from the services section
    if (location.state?.fromServices) {
      navigate('/', { replace: true });
      // Optional: scroll to services section after navigation
      setTimeout(() => {
        const servicesSection = document.getElementById('services');
        if (servicesSection) {
          servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      navigate('/', { replace: true });
    }
  };

  if (!currentService) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-6">The requested service could not be found.</p>
          <button
            onClick={() => navigate('/')}
            className="bg-[#007BBA] text-white px-6 py-3 rounded-full hover:bg-[#004F74] transition-colors"
          >
            Return Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-[#004F74] to-[#007BBA] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentService.heroImage}
            alt={currentService.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#004F74]/80 to-[#007BBA]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <button
              onClick={handleBackNavigation}
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Home</span>
            </button>
            
            <div className="flex items-center space-x-4 mb-4">
              {ServiceIcon && (
                <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                  <ServiceIcon className="h-8 w-8 text-white" />
                </div>
              )}
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{currentService.title}</h1>
                <p className="text-xl text-blue-100">{currentService.subtitle}</p>
              </div>
            </div>
            
            <p className="text-lg text-blue-100 max-w-2xl">{currentService.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Rest of the component remains the same */}
      {/* Services & Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#004F74] mb-8">Our Services</h2>
              <div className="grid gap-4">
                {currentService.services.map((service, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-[#F6FAFD] rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-[#007BBA] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#004F74] mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {currentService.features.map((feature, index: number) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start space-x-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#004F74] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-20 bg-[#F6FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#004F74] mb-4">Our Specialists</h2>
            <p className="text-lg text-gray-600">Meet our experienced medical professionals</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentService.doctors.map((doctor: { name: string; specialization: string; experience: string }, index: number) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004F74] mb-2">{doctor.name}</h3>
                  <p className="text-[#007BBA] font-medium mb-2">{doctor.specialization}</p>
                  <p className="text-gray-600">{doctor.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your appointment today and experience exceptional healthcare
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="bg-white text-[#007BBA] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </motion.button>
              
              <motion.a
                href="tel:+914123456789"
                className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </motion.a>
            </div>
            
            <div className="mt-8 flex justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 4 123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@alnabihospital.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;