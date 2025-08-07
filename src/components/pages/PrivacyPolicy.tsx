import React from 'react';

/**
 * Comprehensive Cookie Policy
 * GDPR compliant cookie information
 */
const CookiePolicy: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">What Are Cookies</h2>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide information to website owners.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">How We Use Cookies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Essential Cookies</h3>
                  <p>These cookies are necessary for the website to function properly:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Analytics Cookies</h3>
                  <p>These help us understand how visitors interact with our website:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Page views and traffic sources</li>
                    <li>User behavior patterns</li>
                    <li>Website performance metrics</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Functional Cookies</h3>
                  <p>These enhance your experience on our website:</p>
                  <ul className="list-disc list-inside mt-2 space-y-1">
                    <li>Language preferences</li>
                    <li>Accessibility settings</li>
                    <li>Form data retention</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Managing Cookies</h2>
              <p>You can control and manage cookies in several ways:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Browser settings to block or delete cookies</li>
                <li>Third-party tools for cookie management</li>
                <li>Opt-out links provided by analytics services</li>
              </ul>
              <p className="mt-4">
                Please note that disabling cookies may affect the functionality of our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Third-Party Cookies</h2>
              <p>We may use third-party services that place cookies on your device:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Google Analytics for website analytics</li>
                <li>Social media plugins</li>
                <li>Payment processing services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Updates to This Policy</h2>
              <p>
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new policy on this page with an updated revision date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">Contact Us</h2>
              <p>If you have questions about our use of cookies, please contact us:</p>
              <div className="mt-4 space-y-2">
                <p>Email: privacy@alnabiHospital.com</p>
                <p>Phone: +961 1 234 5678</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;