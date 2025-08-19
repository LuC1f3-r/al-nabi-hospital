import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "917090900087";

    const message = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`
    );

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

    window.open(whatsappUrl, "_blank");

    // Optionally clear form and alert user
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004F74] mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need to reach us? We're here to help. Contact us
            through any of the following methods.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#004F74] mb-6">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-[#007BBA]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004F74] mb-1">
                      Address
                    </h4>
                    <p className="text-gray-600">
                      Near Zanda Katta, Jamiya Masjid Road,
                      <br />
                      Vijayapura, KA, India - 586101
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center">
                    <Phone className="h-6 w-6 text-[#007BBA]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004F74] mb-1">Phone</h4>
                    <p className="text-gray-600">
                      General: +91 70909 00087
                      <br />
                      Emergency: +91 70909 00087
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center">
                    <Mail className="h-6 w-6 text-[#007BBA]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004F74] mb-1">Email</h4>
                    <p className="text-gray-600">
                      alnabihospital@gmail.com
                      <br />
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#F6FAFD] rounded-xl flex items-center justify-center">
                    <Clock className="h-6 w-6 text-[#007BBA]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#004F74] mb-1">Hours</h4>
                    <p className="text-gray-600">
                      Mon - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Tue - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Wed - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Thur - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Fri - Fri: 8:00 AM - 8:00 PM
                      <br />
                      Sat - Sun: 9:00 AM - 6:00 PM
                      <br />
                      Sun - Fri: 8:00 AM - 8:00 PM
                      <br />
                      <span className="text-[#007BBA] font-medium">
                        Emergency: 24/7
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Map Embed */}
            <div className="bg-[#F6FAFD] rounded-2xl overflow-hidden h-64">
              <iframe
                title="Al Nabi Hospital Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d450.07030985858944!2d75.73039703711392!3d16.82271180678271!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc65571f0f051cb%3A0x274037d5d8953ade!2sAl%20Nabi%20Hospital!5e0!3m2!1sen!2sin!4v1755198084646!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#F6FAFD] rounded-3xl p-8">
            <div className="flex items-center space-x-3 mb-6">
              <MessageCircle className="h-6 w-6 text-[#007BBA]" />
              <h3 className="text-2xl font-semibold text-[#004F74]">
                Send us a Message
              </h3>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent"
                  />
                </div>
              </div>

              <div>
                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent"
                />
              </div>

              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-[#007BBA] text-white py-4 rounded-xl font-semibold hover:bg-[#004F74] transition-colors transform hover:scale-105 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
