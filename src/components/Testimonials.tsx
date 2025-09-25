import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
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
        className={`h-5 w-5 ${i < rating ? 'text-amber-400 fill-current' : 'text-gray-200'}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23007BBA' fill-opacity='0.2'%3E%3Cpath d='M30 30c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5 6 13.5 13.5 13.5 13.5-6 13.5-13.5zm15 0c0-7.5-6-13.5-13.5-13.5s-13.5 6-13.5 13.5 6 13.5 13.5 13.5 13.5-6 13.5-13.5z'/%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
            Voices of Our Patients
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from those who have experienced exceptional care at Al Nabi Hospital.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white shadow-lg rounded-full p-3 bg-gray-50"
          >
            <ChevronLeft className="h-5 w-5 text-blue-600" />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white shadow-lg rounded-full p-3 bg-gray-50"
          >
            <ChevronRight className="h-5 w-5 text-blue-600" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative"
            >
              {/* Testimonial Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 relative border border-gray-100 hover:shadow-2xl transition-shadow duration-300">
                <div className="absolute top-4 left-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                    <Quote className="h-5 w-5 text-blue-600" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6 items-start pt-6">
                  {/* Testimonial Content */}
                  <div className="md:col-span-2 space-y-5">
                    <p className="text-lg text-gray-700 leading-relaxed font-medium">
                      "{testimonials[currentIndex].quote}"
                    </p>
                    
                    <div className="flex items-center space-x-3">
                      {renderStars(testimonials[currentIndex].rating)}
                      {testimonials[currentIndex].verified && (
                        <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded-full">
                          Verified Patient
                        </span>
                      )}
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </h4>
                      <p className="text-gray-500 text-sm">
                        {testimonials[currentIndex].location}
                      </p>
                      <p className="text-blue-600 text-sm font-medium">
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
                        className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover mx-auto border-2 border-blue-100 shadow-md"
                        loading="lazy"
                        decoding="async"
                        fetchPriority="low"
                      />
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-200 hover:bg-gray-300'
                }`}
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
