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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Trusted by Thousands
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Our commitment to excellence is reflected in the numbers that matter most
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
            >
              <div className="relative group">
                {/* Glassmorphism Card */}
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                  {/* Icon with Gradient Background */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300`}>
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  {/* Animated Counter */}
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">
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
                  
                  <p className="text-blue-100 font-medium text-lg">
                    {stat.label}
                  </p>
                </div>

                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} rounded-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10`}></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
});

export default Stats;