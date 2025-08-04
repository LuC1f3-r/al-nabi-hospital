import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Terms & Conditions</h1>
      <div className="space-y-6 text-gray-700">
        <p>
          Welcome to Al Nabi Hospital. These terms and conditions outline the rules and regulations for the use of Al Nabi Hospital's Website, located at alnabihospital.com.
        </p>
        <p>
          By accessing this website we assume you accept these terms and conditions. Do not continue to use Al Nabi Hospital if you do not agree to take all of the terms and conditions stated on this page.
        </p>
        <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Cookies</h2>
        <p>
          We employ the use of cookies. By accessing Al Nabi Hospital, you agreed to use cookies in agreement with the Al Nabi Hospital's Privacy Policy.
        </p>
        <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">License</h2>
        <p>
          Unless otherwise stated, Al Nabi Hospital and/or its licensors own the intellectual property rights for all material on Al Nabi Hospital. All intellectual property rights are reserved. You may access this from Al Nabi Hospital for your own personal use subjected to restrictions set in these terms and conditions.
        </p>
        <h2 className="text-2xl font-bold text-primary-700 mt-8 mb-4">Disclaimer</h2>
        <p>
          The information on this website is for general informational purposes only. Al Nabi Hospital makes no representation or warranty, express or implied. Your use of the site is solely at your own risk. This site may contain links to third party content, which we do not warrant, endorse, or assume liability for.
        </p>
      </div>
    </div>
  );
};

export default Terms;
