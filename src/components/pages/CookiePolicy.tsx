import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Cookie, Settings, Shield, Eye, BarChart3, Target, Clock, Mail, Phone, ToggleLeft, ToggleRight } from 'lucide-react';

const CookiePolicy: React.FC = () => {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true, // Always enabled
    analytics: true,
    marketing: false,
    preferences: true
  });

  const handleToggle = (type: keyof typeof cookiePreferences) => {
    if (type === 'essential') return; // Essential cookies cannot be disabled
    
    setCookiePreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const cookieTypes = [
    {
      id: 'essential',
      title: 'Essential Cookies',
      icon: Shield,
      description: 'These cookies are necessary for the website to function properly. They enable basic functions like page navigation, access to secure areas, and form submissions.',
      examples: [
        'Session management cookies',
        'Authentication cookies',
        'Security cookies',
        'Load balancing cookies'
      ],
      canDisable: false,
      enabled: cookiePreferences.essential
    },
    {
      id: 'analytics',
      title: 'Analytics Cookies',
      icon: BarChart3,
      description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.',
      examples: [
        'Google Analytics cookies',
        'Page view tracking',
        'User behavior analysis',
        'Performance monitoring'
      ],
      canDisable: true,
      enabled: cookiePreferences.analytics
    },
    {
      id: 'marketing',
      title: 'Marketing Cookies',
      icon: Target,
      description: 'These cookies are used to deliver advertisements more relevant to you and your interests. They may also be used to limit the number of times you see an advertisement.',
      examples: [
        'Advertising network cookies',
        'Social media tracking',
        'Retargeting cookies',
        'Conversion tracking'
      ],
      canDisable: true,
      enabled: cookiePreferences.marketing
    },
    {
      id: 'preferences',
      title: 'Preference Cookies',
      icon: Settings,
      description: 'These cookies allow the website to remember choices you make and provide enhanced, more personal features.',
      examples: [
        'Language preferences',
        'Theme settings',
        'Form data retention',
        'User interface customization'
      ],
      canDisable: true,
      enabled: cookiePreferences.preferences
    }
  ];

  const sections = [
    {
      id: 'what-are-cookies',
      title: 'What Are Cookies?',
      content: `Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.

      Cookies contain information that is transferred to your computer's hard drive. They help us improve our website and deliver a better, more personalized service by enabling us to:
      
      • Estimate our audience size and usage patterns
      • Store information about your preferences
      • Speed up your searches
      • Recognize you when you return to our website`
    },
    {
      id: 'how-we-use-cookies',
      title: 'How We Use Cookies',
      content: `Al Nabi Hospital uses cookies for several purposes:

      Website Functionality:
      • Enabling essential website features
      • Remembering your login status
      • Maintaining your session during your visit
      • Ensuring website security

      User Experience:
      • Remembering your preferences and settings
      • Personalizing content and recommendations
      • Improving website navigation
      • Providing relevant information

      Analytics and Performance:
      • Understanding how visitors use our website
      • Identifying popular content and features
      • Monitoring website performance
      • Troubleshooting technical issues

      Communication:
      • Delivering relevant health information
      • Sending appointment reminders
      • Providing updates about our services`
    },
    {
      id: 'third-party-cookies',
      title: 'Third-Party Cookies',
      content: `Some cookies on our website are set by third-party services:

      Google Analytics:
      We use Google Analytics to analyze website traffic and user behavior. These cookies help us understand how visitors interact with our website and improve our services.

      Social Media:
      Our website may include social media features that set cookies to track your interactions with social content.

      Payment Processors:
      When you make payments through our website, payment processors may set cookies to ensure secure transactions.

      Appointment Scheduling:
      Our online appointment system may use cookies to remember your preferences and streamline the booking process.

      These third-party services have their own privacy policies and cookie practices, which we encourage you to review.`
    },
    {
      id: 'managing-cookies',
      title: 'Managing Your Cookie Preferences',
      content: `You have several options for managing cookies:

      Browser Settings:
      Most web browsers allow you to control cookies through their settings. You can:
      • Block all cookies
      • Block third-party cookies only
      • Delete existing cookies
      • Set preferences for specific websites

      Our Cookie Preference Center:
      Use the cookie preference settings on this page to control which types of cookies we use on our website.

      Opt-Out Tools:
      You can opt out of certain third-party cookies using industry opt-out tools:
      • Google Analytics Opt-out Browser Add-on
      • Network Advertising Initiative opt-out tool
      • Digital Advertising Alliance opt-out tool

      Please note that disabling certain cookies may affect the functionality of our website and your user experience.`
    },
    {
      id: 'cookie-retention',
      title: 'Cookie Retention and Deletion',
      content: `Different types of cookies are stored for different periods:

      Session Cookies:
      These are temporary cookies that are deleted when you close your browser. They are used for essential website functions during your visit.

      Persistent Cookies:
      These cookies remain on your device for a set period or until you delete them. They are used to remember your preferences and improve your experience on return visits.

      Retention Periods:
      • Essential cookies: Duration of your session
      • Analytics cookies: Up to 2 years
      • Marketing cookies: Up to 1 year
      • Preference cookies: Up to 1 year

      You can delete cookies at any time through your browser settings or by using our cookie preference center below.`
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
                <Cookie className="h-8 w-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Cookie Policy
            </h1>
            <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">
              Learn about how we use cookies to improve your experience on our website and how you can control them.
            </p>
            <div className="flex items-center justify-center space-x-2 text-blue-100">
              <Clock className="h-4 w-4" />
              <span className="text-sm">Last updated: January 2024</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Preference Center */}
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
              <Settings className="h-6 w-6 text-primary-500 mr-2" />
              Cookie Preference Center
            </h2>
            <p className="text-gray-600 mb-8">
              Manage your cookie preferences below. You can enable or disable different types of cookies based on your preferences.
            </p>
            
            <div className="space-y-6">
              {cookieTypes.map((type, index) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl p-6 border border-gray-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                          type.enabled ? 'bg-primary-100 text-primary-600' : 'bg-gray-100 text-gray-400'
                        }`}>
                          <type.icon className="h-5 w-5" />
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900">{type.title}</h3>
                      </div>
                      <p className="text-gray-600 mb-4">{type.description}</p>
                      <div>
                        <h4 className="text-sm font-medium text-gray-900 mb-2">Examples:</h4>
                        <ul className="text-sm text-gray-600 space-y-1">
                          {type.examples.map((example, idx) => (
                            <li key={idx} className="flex items-center space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                              <span>{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="ml-6">
                      <button
                        onClick={() => handleToggle(type.id as keyof typeof cookiePreferences)}
                        disabled={!type.canDisable}
                        className={`flex items-center space-x-2 ${
                          type.canDisable ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'
                        }`}
                      >
                        {type.enabled ? (
                          <ToggleRight className="h-8 w-8 text-primary-500" />
                        ) : (
                          <ToggleLeft className="h-8 w-8 text-gray-400" />
                        )}
                        <span className="text-sm font-medium text-gray-700">
                          {type.enabled ? 'Enabled' : 'Disabled'}
                        </span>
                      </button>
                      {!type.canDisable && (
                        <p className="text-xs text-gray-500 mt-1">Always required</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Save Preferences
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:bg-gray-300 transition-colors"
              >
                Accept All
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Cookie Policy Content */}
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

      {/* Browser Instructions */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
              <Eye className="h-6 w-6 text-amber-500 mr-2" />
              Browser-Specific Cookie Management
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Desktop Browsers</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Chrome:</strong> Settings → Privacy and security → Cookies</li>
                  <li><strong>Firefox:</strong> Options → Privacy & Security → Cookies</li>
                  <li><strong>Safari:</strong> Preferences → Privacy → Cookies</li>
                  <li><strong>Edge:</strong> Settings → Cookies and site permissions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Mobile Browsers</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li><strong>Chrome Mobile:</strong> Settings → Site settings → Cookies</li>
                  <li><strong>Safari Mobile:</strong> Settings → Safari → Block All Cookies</li>
                  <li><strong>Firefox Mobile:</strong> Settings → Data Management → Cookies</li>
                  <li><strong>Samsung Internet:</strong> Settings → Sites and downloads → Cookies</li>
                </ul>
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
            <h2 className="text-3xl font-bold mb-6">Questions About Cookies?</h2>
            <p className="text-xl text-blue-100 mb-8">
              If you have any questions about our use of cookies or this Cookie Policy, please don't hesitate to contact us.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">alnabihospital@gmail.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-200" />
                <span className="text-blue-100">+91 709 090 0086</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;