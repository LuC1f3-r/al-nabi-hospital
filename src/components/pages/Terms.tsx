import React from 'react';

/**
 * Comprehensive Terms and Conditions
 * Healthcare service focused terms
 */
const Terms: React.FC = () => {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="glass rounded-2xl p-8 lg:p-12">
          <h1 className="text-4xl font-bold text-white mb-8">Terms and Conditions</h1>
          <p className="text-white/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <div className="space-y-8 text-white/80">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using Al Nabi Hospital's services and website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Medical Services</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Patient Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide accurate and complete medical history</li>
                    <li>Follow prescribed treatment plans</li>
                    <li>Arrive on time for scheduled appointments</li>
                    <li>Notify us of any changes in your condition</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium text-white mb-2">Hospital Responsibilities</h3>
                  <ul className="list-disc list-inside space-y-1">
                    <li>Provide quality medical care</li>
                    <li>Maintain patient confidentiality</li>
                    <li>Ensure qualified medical staff</li>
                    <li>Maintain safe and clean facilities</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Appointment Policy</h2>
              <ul className="list-disc list-inside space-y-1">
                <li>Appointments must be scheduled in advance</li>
                <li>24-hour notice required for cancellations</li>
                <li>Late arrivals may result in rescheduling</li>
                <li>Emergency cases will be prioritized</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Payment and Insurance</h2>
              <p>Payment is due at the time of service unless other arrangements have been made. We accept:</p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Cash and credit cards</li>
                <li>Most major insurance plans</li>
                <li>Payment plans for qualifying patients</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                Al Nabi Hospital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Governing Law</h2>
              <p>
                These terms and conditions are governed by and construed in accordance with the laws of Lebanon, and you irrevocably submit to the exclusive jurisdiction of the courts in that state or location.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;