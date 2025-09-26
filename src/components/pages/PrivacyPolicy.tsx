import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle, Mail, Phone, Clock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  const sections = [
    {
      id: 'introduction',
      title: 'Introduction',
      icon: Shield,
      content: `At Al Nabi Hospital, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (alnabihospital.com) or use our services.

      We understand the importance of privacy in healthcare and are dedicated to maintaining the confidentiality of your personal and medical information in accordance with applicable laws and regulations.`
    },
    {
      id: 'information-collection',
      title: 'Information We Collect',
      icon: Database,
      content: `We may collect information about you in a variety of ways:

      Personal Information:
      • Name, address, phone number, and email address
      • Date of birth and gender
      • Emergency contact information
      • Insurance information and payment details

      Medical Information:
      • Medical history and current health conditions
      • Medications and allergies
      • Treatment records and test results
      • Appointment and consultation notes

      Technical Information:
      • IP address and browser type
      • Device information and operating system
      • Website usage data and cookies
      • Location data (with your consent)`
    },
    {
      id: 'information-use',
      title: 'How We Use Your Information',
      icon: UserCheck,
      content: `We use the information we collect for various purposes:

      Healthcare Services:
      • Providing medical care and treatment
      • Scheduling and managing appointments
      • Communicating about your health and treatment
      • Coordinating care with other healthcare providers

      Administrative Purposes:
      • Processing payments and insurance claims
      • Maintaining medical records
      • Complying with legal and regulatory requirements
      • Quality improvement and patient safety initiatives

      Communication:
      • Sending appointment reminders and health information
      • Providing updates about our services
      • Responding to your inquiries and requests`
    },
    {
      id: 'information-sharing',
      title: 'Information Sharing and Disclosure',
      icon: Eye,
      content: `We may share your information in the following circumstances:

      Healthcare Operations:
      • With healthcare providers involved in your care
      • With insurance companies for payment processing
      • With laboratories and diagnostic centers
      • With pharmacies for prescription fulfillment

      Legal Requirements:
      • When required by law or court order
      • To comply with regulatory requirements
      • For public health and safety purposes
      • In response to lawful requests by public authorities

      Business Operations:
      • With trusted service providers and business associates
      • During business transfers or mergers
      • With your explicit consent

      We do not sell, trade, or rent your personal information to third parties for marketing purposes.`
    },
    {
      id: 'data-security',
      title: 'Data Security',
      icon: Lock,
      content: `We implement comprehensive security measures to protect your information:

      Technical Safeguards:
      • Encryption of data in transit and at rest
      • Secure servers and firewalls
      • Regular security assessments and updates
      • Multi-factor authentication for staff access

      Physical Safeguards:
      • Restricted access to facilities and equipment
      • Secure storage of physical records
      • Proper disposal of confidential information
      • Video surveillance and access controls

      Administrative Safeguards:
      • Staff training on privacy and security
      • Regular policy reviews and updates
      • Incident response procedures
      • Business associate agreements

      Despite our efforts, no security system is impenetrable. We cannot guarantee the absolute security of your information.`
    },
    {
      id: 'your-rights',
      title: 'Your Privacy Rights',
      icon: UserCheck,
      content: `You have several rights regarding your personal information:

      Access Rights:
      • Request access to your personal information
      • Obtain copies of your medical records
      • Review how your information is used

      Correction Rights:
      • Request corrections to inaccurate information
      • Update your contact and insurance information
      • Amend your medical records when appropriate

      Restriction Rights:
      • Request restrictions on certain uses of your information
      • Opt out of marketing communications
      • Limit sharing for certain purposes

      Other Rights:
      • Request deletion of certain information
      • File complaints about privacy practices
      • Receive this notice in alternative formats

      To exercise these rights, please contact our Privacy Officer using the information provided below.`
    },
    {
      id: 'cookies-tracking',
      title: 'Cookies and Tracking Technologies',
      icon: Eye,
      content: `Our website uses cookies and similar technologies:

      Types of Cookies:
      • Essential cookies for website functionality
      • Analytics cookies to understand website usage
      • Preference cookies to remember your settings
      • Marketing cookies for relevant advertisements

      Third-Party Services:
      • Google Analytics for website analytics
      • Social media plugins and widgets
      • Payment processing services
      • Appointment scheduling systems

      Cookie Management:
      You can control cookies through your browser settings. However, disabling certain cookies may affect website functionality. Most browsers allow you to:
      • View and delete cookies
      • Block cookies from specific sites
      • Block third-party cookies
      • Clear all cookies when you close the browser`
    },
    {
      id: 'children-privacy',
      title: 'Children\'s Privacy',
      icon: Shield,
      content: `We are committed to protecting the privacy of children:

      Age Restrictions:
      • Our website is not intended for children under 13
      • We do not knowingly collect information from children under 13
      • Parental consent is required for minors' medical treatment

      Parental Rights:
      • Parents can access their child's medical information
      • Parents can request corrections to their child's records
      • Parents can restrict certain uses of their child's information

      If we become aware that we have collected information from a child under 13 without parental consent, we will take steps to remove that information from our systems.`
    },
    {
      id: 'international-transfers',
      title: 'International Data Transfers',
      icon: Database,
      content: `Your information may be transferred to and processed in countries other than your own:

      Transfer Safeguards:
      • We ensure adequate protection for transferred data
      • We use standard contractual clauses when required
      • We comply with applicable data protection laws
      • We limit transfers to necessary purposes only

      Third-Party Services:
      Some of our service providers may be located outside India. We ensure these providers maintain appropriate security measures and comply with applicable privacy laws.`
    },
    {
      id: 'policy-changes',
      title: 'Changes to This Policy',
      icon: AlertTriangle,
      content: `We may update this Privacy Policy from time to time:

      Notification Process:
      • We will post the updated policy on our website
      • We will notify you of significant changes
      • We will indicate the effective date of changes
      • Continued use constitutes acceptance of changes

      Review Recommendations:
      We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information. The most current version will always be available on our website.`
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
                <Shield className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Privacy Policy
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Your privacy is our priority. Learn how we collect, use, and protect your personal information.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Overview */}
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
              <Lock className="h-6 w-6 text-primary-500 mr-2" />
              Privacy at a Glance
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">We Protect</h3>
                <p className="text-sm text-gray-600">Your personal and medical information is secured with industry-standard encryption.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <UserCheck className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">You Control</h3>
                <p className="text-sm text-gray-600">You have rights to access, correct, and control how your information is used.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Eye className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">We're Transparent</h3>
                <p className="text-sm text-gray-600">We clearly explain how we collect, use, and share your information.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Policy Content */}
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
                  <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                    <section.icon className="h-5 w-5 text-white" />
                  </div>
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

      {/* HIPAA Compliance Notice */}
      <section className="py-12 bg-gradient-to-r from-green-50 to-emerald-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-l-4 border-green-400"
          >
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <Shield className="h-8 w-8 text-green-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Healthcare Privacy Compliance</h3>
                <p className="text-gray-700 mb-4">
                  Al Nabi Hospital is committed to complying with applicable healthcare privacy laws and regulations, 
                  including the protection of patient health information. We maintain strict policies and procedures 
                  to ensure the confidentiality, integrity, and availability of your medical information.
                </p>
                <p className="text-gray-700">
                  Our staff receives regular training on privacy practices, and we conduct periodic assessments 
                  to ensure ongoing compliance with healthcare privacy standards.
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
            <h2 className="text-3xl font-bold mb-6">Privacy Questions or Concerns?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our Privacy Officer is available to address any questions or concerns about your privacy rights and our practices.
            </p>
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Mail className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Email Us</h3>
                <p className="text-blue-100">alnabihospital@gmail.com</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                <Phone className="h-8 w-8 text-blue-200 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Call Us</h3>
                <p className="text-blue-100">+91 709 090 0086</p>
              </div>
            </div>
            <p className="text-sm text-blue-200">
              You may also submit privacy-related requests in writing to our Privacy Officer at the hospital address listed in our contact information.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;