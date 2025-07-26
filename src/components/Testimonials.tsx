import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showForm, setShowForm] = useState(false);
  
  const testimonials = [
    {
      name: 'Sarah Ahmed',
      location: 'Bijapur, IN',
      condition: 'Cardiac Surgery',
      rating: 5,
      quote: 'The cardiac team at Al Nabi Hospital saved my life. Dr. Ahmed and his team were not only highly skilled but also incredibly compassionate throughout my entire treatment journey.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    },
    {
      name: 'Mohammed Hassan',
      location: 'Bijapur, IN',
      condition: 'Neurology Treatment',
      rating: 5,
      quote: 'Outstanding neurological care with cutting-edge technology. The doctors explained everything clearly and made me feel comfortable during a very difficult time.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    },
    {
      name: 'Fatima Ali',
      location: 'Bijapur, IN',
      condition: 'Pediatric Care',
      rating: 5,
      quote: 'The pediatric department is absolutely wonderful! My children actually look forward to their visits. The doctors and nurses make every child feel special and safe.',
      image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    },
    {
      name: 'Omar Malik',
      location: 'Bijapur, IN',
      condition: 'Emergency Care',
      rating: 5,
      quote: 'When my father had a heart attack at 2 AM, Al Nabi Hospital\'s emergency team was ready and waiting. Their quick response and professional care saved his life.',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=150',
      verified: true
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-[#F6FAFD] to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007BBA' fill-opacity='0.1'%3E%3Cpath d='M20 20c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10zm10 0c0-5.5-4.5-10-10-10s-10 4.5-10 10 4.5 10 10 10 10-4.5 10-10z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-[#004F74] mb-4">
            Real Stories from Real Patients
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of families trust Al Nabi Hospital with their most precious asset - their health.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-5xl mx-auto mb-12 relative">
          {/* Navigation Buttons - Next to the testimonial cards */}
          <motion.button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-16 bg-white shadow-xl rounded-full p-4 hover:bg-[#F6FAFD] transition-all duration-300 hover:scale-110 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="h-6 w-6 text-[#007BBA]" />
          </motion.button>
          
          <motion.button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-16 bg-white shadow-xl rounded-full p-4 hover:bg-[#F6FAFD] transition-all duration-300 hover:scale-110 z-10"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="h-6 w-6 text-[#007BBA]" />
          </motion.button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {/* Chat Bubble Style Card */}
              <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
                {/* Background Gradient */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#007BBA]/10 to-[#004F74]/10 rounded-full -translate-y-16 translate-x-16"></div>
                
                {/* Quote Icon */}
                <div className="absolute top-6 left-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-full flex items-center justify-center">
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 items-center pt-8">
                  {/* Testimonial Content */}
                  <div className="md:col-span-2 space-y-6">
                    <p className="text-xl text-gray-700 leading-relaxed font-medium italic">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    <div className="flex items-center space-x-4">
                      {renderStars(testimonials[currentIndex].rating)}
                      {testimonials[currentIndex].verified && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2 py-1 rounded-full">
                          Verified Patient
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-2">
                      <h4 className="font-bold text-[#004F74] text-xl">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-600 font-medium">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="text-[#007BBA] text-sm font-medium">
                        Treatment: {testimonials[currentIndex].condition}
                      </p>
                    </div>
                  </div>
                  
                  {/* Patient Image */}
                  <div className="text-center">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-32 h-32 rounded-full object-cover mx-auto border-4 border-[#007BBA]/20 shadow-lg"
                      />
                      <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Speech Bubble Tail */}
                <div className="absolute bottom-0 left-8 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white transform translate-y-full"></div>
              </div>
            </motion.div>
          </AnimatePresence>


          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#007BBA] scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>

        {/* Add Testimonial Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.button
            onClick={() => setShowForm(!showForm)}
            className="bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Share Your Experience
          </motion.button>
          
          <AnimatePresence>
            {showForm && (
              <motion.div 
                className="max-w-2xl mx-auto mt-8 bg-white rounded-3xl shadow-2xl p-8"
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
              <h3 className="text-xl font-semibold text-[#004F74] mb-6">Share Your Testimonial</h3>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent"
                  />
                  <input
                    type="text"
                    placeholder="Your City"
                    className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent"
                  />
                </div>
                <textarea
                  placeholder="Share your experience with us..."
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent"
                ></textarea>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white py-4 rounded-xl hover:shadow-lg transition-all duration-300 font-semibold"
                >
                  Submit Testimonial
                </button>
              </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;