import React, { useState } from 'react';
import Button from '../ui/Button';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  salary?: string;
}

/**
 * Comprehensive Careers Section
 * Features realistic job listings with detailed information
 */
const Careers: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Registered Nurse - ICU',
      department: 'Critical Care',
      location: 'Beirut, Lebanon',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '$35,000 - $45,000',
      description: 'Join our dedicated ICU team providing critical care to patients in life-threatening conditions. Work with state-of-the-art equipment and collaborate with multidisciplinary teams.',
      requirements: [
        'Bachelor\'s degree in Nursing',
        'Valid nursing license in Lebanon',
        'ICU experience preferred',
        'BLS and ACLS certification',
        'Strong communication skills'
      ],
      benefits: [
        'Comprehensive health insurance',
        'Professional development opportunities',
        'Flexible scheduling',
        'Retirement savings plan'
      ]
    },
    {
      id: '2',
      title: 'Medical Laboratory Technician',
      department: 'Laboratory Services',
      location: 'Beirut, Lebanon',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '$28,000 - $35,000',
      description: 'Perform diagnostic tests, analyze samples, and ensure quality control in our modern laboratory facility. Work with cutting-edge technology and contribute to patient care.',
      requirements: [
        'Associate degree in Medical Laboratory Technology',
        'Laboratory certification',
        'Knowledge of laboratory equipment',
        'Attention to detail',
        'Computer proficiency'
      ],
      benefits: [
        'Health and dental insurance',
        'Paid time off',
        'Training and certification support',
        'Career advancement opportunities'
      ]
    },
    {
      id: '3',
      title: 'Emergency Medicine Physician',
      department: 'Emergency Department',
      location: 'Beirut, Lebanon',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80,000 - $120,000',
      description: 'Lead our emergency department team in providing immediate medical care to patients with acute illnesses and injuries. Make critical decisions in fast-paced environment.',
      requirements: [
        'MD degree with Emergency Medicine residency',
        'Board certification in Emergency Medicine',
        'Valid medical license in Lebanon',
        'ATLS and PALS certification',
        'Leadership experience preferred'
      ],
      benefits: [
        'Competitive salary and bonuses',
        'Comprehensive benefits package',
        'CME allowance',
        'Malpractice insurance',
        'Research opportunities'
      ]
    },
    {
      id: '4',
      title: 'Patient Care Coordinator',
      department: 'Patient Services',
      location: 'Beirut, Lebanon / Remote Hybrid',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '$25,000 - $32,000',
      description: 'Coordinate patient care activities, manage appointments, and ensure seamless communication between patients, families, and healthcare teams.',
      requirements: [
        'Bachelor\'s degree in Healthcare Administration or related field',
        'Healthcare experience preferred',
        'Excellent communication skills',
        'Proficiency in EMR systems',
        'Bilingual (Arabic/English) preferred'
      ],
      benefits: [
        'Flexible work arrangements',
        'Health insurance',
        'Professional development',
        'Paid holidays and vacation'
      ]
    },
    {
      id: '5',
      title: 'Pediatric Nurse Practitioner',
      department: 'Pediatrics',
      location: 'Beirut, Lebanon',
      type: 'Full-time',
      experience: '3-7 years',
      salary: '$55,000 - $70,000',
      description: 'Provide comprehensive healthcare to children from infancy through adolescence. Conduct examinations, diagnose conditions, and educate families on health and wellness.',
      requirements: [
        'Master\'s degree in Pediatric Nursing',
        'Pediatric Nurse Practitioner certification',
        'Valid nursing license',
        'Pediatric experience required',
        'Strong interpersonal skills'
      ],
      benefits: [
        'Competitive salary',
        'Comprehensive benefits',
        'Continuing education support',
        'Flexible scheduling options'
      ]
    },
    {
      id: '6',
      title: 'IT Systems Administrator',
      department: 'Information Technology',
      location: 'Beirut, Lebanon',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '$40,000 - $55,000',
      description: 'Maintain and optimize hospital IT infrastructure, ensure system security, and support electronic health record systems. Work with healthcare-specific technologies.',
      requirements: [
        'Bachelor\'s degree in IT or Computer Science',
        'Experience with healthcare IT systems',
        'Knowledge of HIPAA compliance',
        'Network administration skills',
        'Problem-solving abilities'
      ],
      benefits: [
        'Technology training opportunities',
        'Health insurance',
        'Retirement plan',
        'Professional certifications support'
      ]
    }
  ];

  const departments = [...new Set(jobs.map(job => job.department))];

  return (
    <section id="careers" className="py-20 px-4 min-h-screen">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Join Our Team
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Build a meaningful career at Al Nabi Hospital. We're committed to providing exceptional 
            patient care while fostering professional growth and development for our team members.
          </p>
        </div>

        {/* Department Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setSelectedJob(null)}
          >
            All Departments
          </Button>
          {departments.map(dept => (
            <Button 
              key={dept}
              variant="ghost" 
              size="sm"
            >
              {dept}
            </Button>
          ))}
        </div>

        {/* Job Listings */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {jobs.map((job) => (
            <div 
              key={job.id} 
              className="glass glass-hover rounded-2xl p-6 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                  <p className="text-blue-300 text-sm font-medium">{job.department}</p>
                </div>
                <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-xs font-medium">
                  {job.type}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <p className="text-white/70 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {job.location}
                </p>
                <p className="text-white/70 text-sm flex items-center">
                  <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
                  </svg>
                  {job.experience} experience
                </p>
                {job.salary && (
                  <p className="text-green-300 text-sm font-medium flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                    </svg>
                    {job.salary}
                  </p>
                )}
              </div>
              
              <p className="text-white/80 text-sm mb-4 line-clamp-3">{job.description}</p>
              
              <Button variant="primary" size="sm" className="w-full">
                View Details
              </Button>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="glass rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h3>
            <p className="text-white/80 mb-6">
              We're always looking for talented individuals to join our team. 
              Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <Button variant="secondary" size="lg">
              Submit General Application
            </Button>
          </div>
        </div>
      </div>

      {/* Job Detail Modal would go here */}
    </section>
  );
};

export default Careers;