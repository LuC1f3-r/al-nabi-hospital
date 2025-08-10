import React, { FC } from "react";
import { motion } from "framer-motion";
import { Calendar, Shield, Clock, Users } from "lucide-react";
import { useBookingStore } from "../store/bookingStore";
import DotGrid from "./DotGrid";

const Hero: FC = () => {
  const { setIsModalOpen } = useBookingStore();

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="pt-16 min-h-screen relative overflow-hidden"
      style={{
        background: `linear-gradient(
      to bottom right,
      hsla(0, 0%, 100%, 1) 0%,
      hsla(319, 100%, 92%, 1) 12%,
      hsla(319, 86%, 91%, 1) 30%,
      hsla(280, 100%, 89%, 1) 50%,
      hsla(216, 100%, 88%, 1) 100%
    )`,
      }}
    >
      {/* Animated DotGrid Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <DotGrid
          dotSize={2}
          gap={59}
          baseColor="#330066"
          activeColor="#FFFF00"
          proximity={90}
          shockRadius={190}
          shockStrength={13}
          resistance={1550}
          returnDuration={2.1}
        />

        {/* Other overlays/gradients if any */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#004F74]/60 via-[#007BBA]/50 to-[#004F74]/60 z-10"></div>
        {/* Background image or effects */}
        <div className="w-full h-full bg-cover bg-center bg-no-repeat"></div>
      </div>

      {/* Hero Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-center min-h-[80vh] relative z-20">
          <motion.div
            className="text-center space-y-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Trusted Healthcare,{" "}
                <span className="text-[#38bdf8]">Compassionate Care</span>
              </motion.h1>
              <motion.p
                className="text-xl text-blue-100 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Providing exceptional medical services with 24/7 emergency care,
                experienced doctors, and a family-centered approach to your
                health and wellness.
              </motion.p>
            </div>

            {/* Features */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 sm:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <div className="flex items-center space-x-2 text-blue-200">
                <Clock className="h-5 w-5" />
                <span className="text-sm font-medium">24/7 Emergency</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Shield className="h-5 w-5" />
                <span className="text-sm font-medium">Trusted Doctors</span>
              </div>
              <div className="flex items-center space-x-2 text-blue-200">
                <Users className="h-5 w-5" />
                <span className="text-sm font-medium">Family-Centered</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                onClick={() => setIsModalOpen(true)}
                className="glassmorphism-button text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 backdrop-blur-md bg-white/10 border border-white/30 hover:bg-white/20 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </motion.button>
              <motion.button
                onClick={scrollToServices}
                className="glassmorphism-button text-white px-8 py-4 rounded-3xl font-semibold transition-all duration-300 backdrop-blur-md bg-white/5 border border-white/30 hover:bg-white/15 hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
