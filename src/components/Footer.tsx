import React from 'react';
import { Heart, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#004F74] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-white" />
              <span className="text-xl font-bold">Al Nabi Hospital</span>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Providing exceptional healthcare services with compassion, expertise, and state-of-the-art medical technology for over 15 years.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('about')} className="text-blue-100 hover:text-white transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('services')} className="text-blue-100 hover:text-white transition-colors">
                  Our Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('doctors')} className="text-blue-100 hover:text-white transition-colors">
                  Our Doctors
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('testimonials')} className="text-blue-100 hover:text-white transition-colors">
                  Testimonials
                </button>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Medical Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Cardiology
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Neurology
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Pediatrics
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Ophthalmology
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Orthopedics
                </a>
              </li>
              <li>
                <a href="#" className="text-blue-100 hover:text-white transition-colors">
                  Emergency Care
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#007BBA] mt-1" />
                <div className="text-blue-100">
                  <p>123 Medical Center Drive</p>
                  <p>Al Nabi Healthcare City, IN</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#007BBA]" />
                <div className="text-blue-100">
                  <p>+91 4 123 4567</p>
                  <p className="text-sm">Emergency: +91 4 123 4568</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#007BBA]" />
                <div className="text-blue-100">
                  <p>info@alnabihospital.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#007BBA]/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2024 Al Nabi Hospital. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-blue-100 hover:text-white text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;