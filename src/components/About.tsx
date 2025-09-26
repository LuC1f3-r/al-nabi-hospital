import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Shield, Clock, Award, Heart } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const features = [
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock emergency care and support'
    },
    {
      icon: Award,
      title: 'Skilled Staff',
      description: 'Highly qualified and experienced medical professionals'
    },
    {
      icon: Shield,
      title: 'Modern Equipment',
      description: 'State-of-the-art medical technology and facilities'
    },
    {
      icon: Heart,
      title: 'Trustworthy Care',
      description: 'Compassionate and reliable healthcare services'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Left Image */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative overflow-hidden rounded-3xl">
              <img
                src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Medical Care"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#007BBA]/10 to-transparent"></div>
            </div>
            
            {/* Stats Card */}
            <motion.div 
              className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-lg p-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-[#007BBA]">25+</div>
                  <div className="text-sm text-gray-600">Years</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#007BBA]">15+</div>
                  <div className="text-sm text-gray-600">Doctors</div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-[#004F74]">
                Caring for You Like Family
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                At Al Nabi Hospital, we believe that exceptional healthcare goes beyond medical expertise. 
                We combine cutting-edge technology with compassionate care to ensure every patient receives 
                the personalized attention they deserve.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Our commitment to excellence has made us a trusted healthcare provider in the community, 
                serving families with dedication and integrity for over 15 years.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div 
              className="grid sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {features.map((feature, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-3"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center group-hover:bg-[#007BBA] transition-colors duration-300">
                      <feature.icon className="h-6 w-6 text-[#007BBA]" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-[#004F74] mb-1">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;