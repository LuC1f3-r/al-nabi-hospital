import React from 'react';

const jobOpenings = [
  {
    title: 'Registered Nurse (RN)',
    description: 'Provide and coordinate patient care, educate patients and the public about various health conditions.',
    qualifications: 'Associate or Bachelor\'s degree in nursing, and a state license.',
  },
  {
    title: 'Medical Technologist',
    description: 'Perform complex medical laboratory tests for diagnosis, treatment, and prevention of disease.',
    qualifications: 'Bachelor\'s degree in medical technology or a related science, and certification from a recognized professional association.',
  },
  {
    title: 'Physical Therapist',
    description: 'Help injured or ill people improve their movement and manage their pain.',
    qualifications: 'Doctor of Physical Therapy (DPT) degree, and a state license.',
  },
  {
    title: 'Radiologic Technologist',
    description: 'Perform diagnostic imaging examinations like X-rays, CT scans, and MRIs.',
    qualifications: 'Associate or Bachelor\'s degree in radiography, and certification from the American Registry of Radiologic Technologists (ARRT).',
  },
  {
    title: 'Medical Assistant',
    description: 'Perform administrative and clinical tasks to support the work of physicians and other health professionals.',
    qualifications: 'Postsecondary certificate or associate degree.',
  },
];

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-8">Careers at Al Nabi Hospital</h1>
      <p className="text-lg text-center text-gray-600 mb-12">
        Join our dedicated team and make a real difference in people's lives. We are always looking for passionate professionals to join our family.
      </p>
      <div className="space-y-8">
        {jobOpenings.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-primary-700 mb-2">{job.title}</h2>
            <p className="text-gray-600 mb-4">{job.description}</p>
            <h3 className="text-lg font-semibold text-primary-600 mb-2">Qualifications</h3>
            <p className="text-gray-600">{job.qualifications}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
