import React from 'react';

/**
 * Comprehensive Privacy Policy
 * GDPR and healthcare compliance focused
 */
const PrivacyPolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Personal Information</h3>
                  <p>We collect information you provide directly to us, including:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Name, email address, phone number</li>
                    <li>Medical history and health information</li>
                    <li>Insurance information</li>
                    <li>Emergency contact details</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Automatically Collected Information</h3>
                  <p>When you visit our website, we automatically collect:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>IP address and device information</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website information</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
              <p>We use the information we collect to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Provide medical services and patient care</li>
                <li>Schedule appointments and send reminders</li>
                <li>Process insurance claims and billing</li>
                <li>Communicate about your healthcare</li>
                <li>Improve our services and website functionality</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Information Sharing</h2>
              <p>We may share your information with:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Healthcare providers involved in your care</li>
                <li>Insurance companies for claims processing</li>
                <li>Legal authorities when required by law</li>
                <li>Business associates who assist in our operations</li>
              </ul>
              <p className="mt-4">We never sell your personal information to third parties.</p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Security</h2>
              <p>We implement appropriate security measures to protect your information, including:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Encryption of sensitive data</li>
                <li>Secure server infrastructure</li>
                <li>Regular security audits</li>
                <li>Staff training on privacy practices</li>
                <li>Access controls and authentication</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Access your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your data</li>
                <li>Receive a copy of your data</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Contact Us</h2>
              <p>If you have questions about this Privacy Policy, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p>Email: privacy@alnabiHospital.com</p>
                <p>Phone: +961 1 234 5678</p>
                <p>Address: 123 Medical Center St, Beirut, Lebanon</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;