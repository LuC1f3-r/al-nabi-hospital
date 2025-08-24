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

const Footer = () => {
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
              Providing exceptional healthcare services with compassion,
              expertise, and state-of-the-art medical technology for over 15
              years.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-[#007BBA] rounded-full flex items-center justify-center hover:bg-white hover:text-[#007BBA] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  to="/doctors"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Our Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/testimonials"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Testimonials
                </Link>
              </li>
              <li>
                <Link
                  to="/careers"
                  className="text-blue-100 hover:text-white transition-colors"
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
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookie-policy"
                  className="text-blue-100 hover:text-white transition-colors"
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
                <div className="text-blue-100">
                  <p>Near Zanda Katta, Jamiya Masjid</p>
                  <p>Road, Vijayapura, KA, IN</p>
                  <p>586101</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-[#007BBA]" />
                <div className="text-blue-100">
                  <p>+91 70909 00087</p>
                  <p className="text-sm">Emergency: +91 70909 00087</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-500" />
                <div className="text-blue-100">
                  <p>alnabihospital@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-500/30 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-blue-100 text-sm">
              © 2025 Al Nabi Hospital. All rights reserved.
            </p>
            <p className="text-blue-100 text-sm flex items-center gap-1">
              <span className="font-semibold">Crafted and Managed by</span>{" "}
              <span className="font-notable text-white font-bold">
                <span className="text-red-500">K</span>ingpi
                <span className="text-blue-500">N</span>
              </span>
              <span className="font-amoresa text-primary-300 italic">
                Vision Forge
              </span>
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/terms"
                className="text-blue-100 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                to="/privacy-policy"
                className="text-blue-100 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/cookie-policy"
                className="text-blue-100 hover:text-white text-sm transition-colors"
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
