import React from 'react';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { Users, Award, Activity, Heart } from 'lucide-react';

const Stats = React.memo(() => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = useMemo(() => [
    {
      icon: Users,
      number: 20000,
      suffix: '+',
      label: 'Patients Treated',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      number: 15,
      suffix: '+',
      label: 'Years of Experience',
      color: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Heart,
      number: 120,
      suffix: '+',
      label: 'Doctors Onboard',
      color: 'from-rose-500 to-pink-500'
    },
    {
      icon: Activity,
      number: 10000,
      suffix: '+',
      label: 'Surgeries Performed',
      color: 'from-violet-500 to-purple-500'
    }
  ], []);

  return (
    <section className="py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-serif" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}>
            Our commitment to excellence is reflected in the numbers that matter most
          </p>
        </motion.div>

        {/* Responsive Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">
                {/* Enhanced Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10 will-change-auto`}></div>
                
                {/* Enhanced Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-4 sm:p-6 lg:p-8 transition-all duration-300 ease-out transform-gpu will-change-transform hover:bg-white/15 hover:scale-105 hover:shadow-2xl">
                  {/* Icon with Gradient Background */}
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transition-transform duration-300 ease-out transform-gpu will-change-transform group-hover:rotate-6`}>
                    <stat.icon className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 text-white" />
                  </div>
                  
                  {/* Animated Counter - Responsive Text Sizes */}
                  <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 font-serif" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                    {inView && (
                      <CountUp
                        end={stat.number}
                        duration={2.5}
                        delay={index * 0.2}
                        separator=","
                      />
                    )}
                    <span className="text-blue-200">{stat.suffix}</span>
                  </div>
                  
                  {/* Label - Responsive Text Sizes */}
                  <p className="text-blue-100 font-medium text-sm sm:text-base lg:text-lg font-serif" style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 500 }}>
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional responsive spacing for mobile */}
        <div className="mt-8 sm:mt-12 lg:mt-16 text-center">
          <motion.p 
            className="text-blue-200 text-sm sm:text-base font-serif"
            style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400 }}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Excellence in healthcare, measured by trust and results
          </motion.p>
        </div>
      </div>
    </section>
  );
});

export default Stats;