import React from 'react';
import { motion } from 'framer-motion';
import { Shield, FileText, AlertCircle, Clock, Mail, Phone } from 'lucide-react';

const Terms: React.FC = () => {
  const sections = [
    {
      id: 'acceptance',
      title: 'Acceptance of Terms',
      content: `By accessing and using the Al Nabi Hospital website (alnabihospital.com), you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`
    },
    {
      id: 'use-license',
      title: 'Use License',
      content: `Permission is granted to temporarily download one copy of the materials on Al Nabi Hospital's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
      
      • Modify or copy the materials
      • Use the materials for any commercial purpose or for any public display (commercial or non-commercial)
      • Attempt to decompile or reverse engineer any software contained on the website
      • Remove any copyright or other proprietary notations from the materials
      
      This license shall automatically terminate if you violate any of these restrictions and may be terminated by Al Nabi Hospital at any time. Upon terminating your viewing of these materials or upon the termination of this license, you must destroy any downloaded materials in your possession whether in electronic or printed format.`
    },
    {
      id: 'disclaimer',
      title: 'Disclaimer',
      content: `The materials on Al Nabi Hospital's website are provided on an 'as is' basis. Al Nabi Hospital makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
      
      Further, Al Nabi Hospital does not warrant or make any representations concerning the accuracy, likely results, or reliability of the use of the materials on its website or otherwise relating to such materials or on any sites linked to this site.`
    },
    {
      id: 'limitations',
      title: 'Limitations',
      content: `In no event shall Al Nabi Hospital or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Al Nabi Hospital's website, even if Al Nabi Hospital or an authorized representative has been notified orally or in writing of the possibility of such damage. Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for consequential or incidental damages, these limitations may not apply to you.`
    },
    {
      id: 'accuracy',
      title: 'Accuracy of Materials',
      content: `The materials appearing on Al Nabi Hospital's website could include technical, typographical, or photographic errors. Al Nabi Hospital does not warrant that any of the materials on its website are accurate, complete, or current. Al Nabi Hospital may make changes to the materials contained on its website at any time without notice. However, Al Nabi Hospital does not make any commitment to update the materials.`
    },
    {
      id: 'links',
      title: 'Links',
      content: `Al Nabi Hospital has not reviewed all of the sites linked to our website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Al Nabi Hospital of the site. Use of any such linked website is at the user's own risk.`
    },
    {
      id: 'modifications',
      title: 'Modifications',
      content: `Al Nabi Hospital may revise these terms of service for its website at any time without notice. By using this website, you are agreeing to be bound by the then current version of these terms of service.`
    },
    {
      id: 'governing-law',
      title: 'Governing Law',
      content: `These terms and conditions are governed by and construed in accordance with the laws of India and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.`
    },
    {
      id: 'medical-disclaimer',
      title: 'Medical Information Disclaimer',
      content: `The information provided on this website is for general informational purposes only and is not intended as medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition. Never disregard professional medical advice or delay in seeking it because of something you have read on this website.
      
      In case of a medical emergency, call your doctor or emergency services immediately. Al Nabi Hospital does not recommend or endorse any specific tests, physicians, products, procedures, opinions, or other information that may be mentioned on this website.`
    },
    {
      id: 'privacy',
      title: 'Privacy Policy',
      content: `Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the website, to understand our practices regarding the collection and use of your personal information.`
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-16 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <FileText className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Please read these terms and conditions carefully before using our website and services.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Table of Contents */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 md:p-8"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Shield className="h-6 w-6 text-primary-500 mr-2" />
              Table of Contents
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/60 transition-colors duration-200 group"
                >
                  <span className="w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-sm font-semibold group-hover:bg-primary-200 transition-colors">
                    {index + 1}
                  </span>
                  <span className="text-gray-700 group-hover:text-primary-600 transition-colors">
                    {section.title}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-lg flex items-center justify-center text-sm font-bold mr-3">
                    {index + 1}
                  </span>
                  {section.title}
                </h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-amber-400"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertCircle className="h-8 w-8 text-amber-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700 mb-4">
                  These terms and conditions are subject to change without notice. We recommend reviewing 
                  this page periodically to stay informed of any updates. Your continued use of our website 
                  constitutes acceptance of any changes to these terms.
                </p>
                <p className="text-gray-700">
                  If you have any questions about these Terms & Conditions, please contact us using the 
                  information provided below.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl font-bold mb-6">Questions About Our Terms?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our legal team is available to help clarify any questions you may have about these terms and conditions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">legal@alnabihospital.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">+91 4 123 4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Terms;