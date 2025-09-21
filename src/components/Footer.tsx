import {
  Heart,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Link } from "react-router-dom";
import kingpin from "../assets/kingpin-logo.png";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#004F74] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Al Nabi Hospital Logo"
                className="h-10 sm:h-12 md:h-14 w-auto max-w-xs transition-transform duration-300 hover:scale-105 shadow-sm bg-white/80 p-1 rounded"
                aria-label="Al Nabi Hospital"
              />
            </div>
            <p className="text-blue-50 leading-relaxed text-sm">
              Providing exceptional healthcare services with compassion,
              expertise, and state-of-the-art medical technology for over 15
              years.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://facebook.com/alnabihospital"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://twitter.com/alnabihospital"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors duration-200"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com/alnabihospital"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com/company/alnabihospital"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors duration-200"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/terms"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-blue-50 hover:text-white transition-colors duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-[#007BBA] mt-1" />
                <div className="text-blue-50">
                  <p>Near Zanda Katta, Jamiya Masjid</p>
                  <p>Road, Vijayapura, KA, IN</p>
                  <p>586101</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#007BBA]" />
                <div className="text-blue-50">
                  <p>+91 70909 00087</p>
                  <p className="text-sm">Emergency: +91 70909 00087</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-[#007BBA]" />
                <div className="text-blue-50">
                  <p>alnabihospital@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-blue-300/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-blue-50 text-sm">
              © 2025 Al Nabi Hospital. All rights reserved.
            </p>
            <p className="text-blue-50 text-sm flex items-center gap-2">
              <span className="font-semibold">Crafted and Managed by</span>
              <img
                src={kingpin}
                alt="KingpiN Vision Forge Logo"
                className="h-8 sm:h-10 md:h-12 w-auto max-w-xs align-middle transition-transform duration-300 hover:scale-105 shadow-sm bg-white/80 p-1 rounded"
                aria-label="KingpiN Vision Forge"
              />
              <span className="font-bold text-lg tracking-tight">
                <span className="text-red-500">K</span>ingpi
                <span className="text-blue-300">N</span>
              </span>
              <span className="text-amber-400 italic font-serif text-base">
                Vision Forge
              </span>
            </p>
            <div className="flex flex-wrap justify-center gap-6 mt-4 md:mt-0">
              <Link
                to="/terms"
                className="text-blue-50 hover:text-amber-400 text-sm transition-colors duration-200"
                aria-label="Terms of Service"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="text-blue-50 hover:text-amber-400 text-sm transition-colors duration-200"
                aria-label="Privacy Policy"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-blue-50 hover:text-amber-400 text-sm transition-colors duration-200"
                aria-label="Cookie Policy"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
