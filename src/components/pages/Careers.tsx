import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Award, 
  Heart, 
  Search,
  Filter,
  ChevronRight,
  Building,
  Calendar,
  Mail,
  Phone
} from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract';
  experience: string;
  salary: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
}

interface CompanyValue {
  icon: React.ElementType;
  title: string;
  description: string;
}

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJobType, setSelectedJobType] = useState('All');

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Registered Nurse (RN) - ICU',
      department: 'Nursing',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '2-5 years',
      salary: '₹4,00,000 - ₹6,00,000',
      description: 'Provide comprehensive nursing care to critically ill patients in our state-of-the-art ICU. Work alongside a multidisciplinary team to deliver exceptional patient outcomes.',
      requirements: [
        'Bachelor\'s degree in Nursing (BSN) preferred',
        'Valid RN license in India',
        'ICU experience preferred',
        'BLS and ACLS certification required',
        'Strong communication and critical thinking skills'
      ],
      benefits: [
        'Competitive salary with performance bonuses',
        'Comprehensive health insurance',
        'Professional development opportunities',
        'Flexible scheduling options',
        'Retirement savings plan'
      ],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'Medical Technologist - Laboratory',
      department: 'Laboratory',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹3,50,000 - ₹5,00,000',
      description: 'Perform complex medical laboratory tests for diagnosis, treatment, and prevention of disease. Operate sophisticated laboratory equipment and ensure quality control.',
      requirements: [
        'Bachelor\'s degree in Medical Technology or related science',
        'Certification from recognized professional association',
        'Knowledge of laboratory safety protocols',
        'Attention to detail and accuracy',
        'Computer proficiency'
      ],
      benefits: [
        'Health and dental insurance',
        'Continuing education support',
        'Career advancement opportunities',
        'Paid time off',
        'Employee wellness programs'
      ],
      posted: '1 week ago'
    },
    {
      id: '3',
      title: 'Physical Therapist',
      department: 'Rehabilitation',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '3-7 years',
      salary: '₹5,00,000 - ₹7,50,000',
      description: 'Help patients recover from injuries and improve their movement and manage pain. Develop personalized treatment plans and work with patients of all ages.',
      requirements: [
        'Master\'s or Doctoral degree in Physical Therapy',
        'Valid PT license in India',
        'Experience with diverse patient populations',
        'Strong interpersonal skills',
        'Knowledge of current PT techniques and equipment'
      ],
      benefits: [
        'Competitive compensation package',
        'Professional liability insurance',
        'Continuing education allowance',
        'Flexible work arrangements',
        'Health and wellness benefits'
      ],
      posted: '3 days ago'
    },
    {
      id: '4',
      title: 'Radiologic Technologist',
      department: 'Radiology',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '2-4 years',
      salary: '₹3,75,000 - ₹5,50,000',
      description: 'Perform diagnostic imaging examinations including X-rays, CT scans, and MRIs. Ensure patient safety and comfort while producing high-quality images.',
      requirements: [
        'Associate or Bachelor\'s degree in Radiography',
        'ARRT certification or equivalent',
        'Knowledge of radiation safety protocols',
        'Patient care experience',
        'Technical proficiency with imaging equipment'
      ],
      benefits: [
        'Comprehensive benefits package',
        'Shift differentials',
        'Professional development support',
        'Employee recognition programs',
        'Work-life balance initiatives'
      ],
      posted: '5 days ago'
    },
    {
      id: '5',
      title: 'Medical Assistant - Cardiology',
      department: 'Cardiology',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹2,50,000 - ₹3,50,000',
      description: 'Support cardiologists and healthcare team by performing administrative and clinical tasks. Assist with patient care and maintain medical records.',
      requirements: [
        'Medical Assistant certification or diploma',
        'Knowledge of cardiology procedures preferred',
        'Strong organizational skills',
        'Excellent communication abilities',
        'Computer literacy'
      ],
      benefits: [
        'Health insurance coverage',
        'Paid vacation and sick leave',
        'Training and certification support',
        'Employee assistance program',
        'Career growth opportunities'
      ],
      posted: '1 day ago'
    },
    {
      id: '6',
      title: 'Pharmacist - Clinical',
      department: 'Pharmacy',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '3-6 years',
      salary: '₹6,00,000 - ₹8,50,000',
      description: 'Provide clinical pharmacy services including medication therapy management, drug information, and patient counseling. Collaborate with healthcare teams.',
      requirements: [
        'Doctor of Pharmacy (PharmD) degree',
        'Valid pharmacy license in India',
        'Clinical pharmacy experience preferred',
        'Strong analytical and communication skills',
        'Knowledge of pharmacy informatics'
      ],
      benefits: [
        'Excellent compensation and benefits',
        'Professional development opportunities',
        'Research and publication support',
        'Flexible scheduling',
        'Comprehensive insurance coverage'
      ],
      posted: '4 days ago'
    }
  ];

  const companyValues: CompanyValue[] = [
    {
      icon: Heart,
      title: 'Compassionate Care',
      description: 'We put patients first and treat everyone with dignity, respect, and empathy.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest standards in everything we do, from patient care to professional development.'
    },
    {
      icon: Users,
      title: 'Teamwork',
      description: 'We believe in the power of collaboration and support each other to achieve common goals.'
    },
    {
      icon: Building,
      title: 'Innovation',
      description: 'We embrace new technologies and methods to improve patient outcomes and workplace efficiency.'
    }
  ];

  const departments = ['All', 'Nursing', 'Laboratory', 'Rehabilitation', 'Radiology', 'Cardiology', 'Pharmacy'];
  const jobTypes = ['All', 'Full-time', 'Part-time', 'Contract'];

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesJobType = selectedJobType === 'All' || job.type === selectedJobType;
    
    return matchesSearch && matchesDepartment && matchesJobType;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white pt-20">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary-600 to-primary-800 overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Healthcare Family
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Make a difference in people's lives while building a rewarding career at Al Nabi Hospital
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 text-blue-100">
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>500+ Team Members</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="h-5 w-5" />
                <span>Best Workplace Award 2024</span>
              </div>
              <div className="flex items-center space-x-2">
                <Heart className="h-5 w-5" />
                <span>Patient-Centered Care</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Company Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Values & Culture
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At Al Nabi Hospital, we foster an environment where every team member can thrive, 
              grow, and make a meaningful impact on patient care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-2xl bg-gradient-to-b from-gray-50 to-white border border-gray-100 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Search and Filters */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-6 md:p-8"
          >
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between space-y-4 lg:space-y-0 lg:space-x-6">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Filters */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <div className="relative">
                  <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept}</option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <select
                    value={selectedJobType}
                    onChange={(e) => setSelectedJobType(e.target.value)}
                    className="pl-10 pr-8 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all duration-200 bg-white"
                  >
                    {jobTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-4 text-sm text-gray-600">
              Showing {filteredJobs.length} of {jobOpenings.length} positions
            </div>
          </motion.div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
              >
                <div className="p-6 md:p-8">
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between">
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">{job.title}</h3>
                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center space-x-1">
                              <Building className="h-4 w-4" />
                              <span>{job.department}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-4 w-4" />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{job.type}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <DollarSign className="h-4 w-4" />
                              <span>{job.salary}</span>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 sm:mt-0">
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            <Calendar className="h-3 w-3 mr-1" />
                            {job.posted}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-700 mb-6 leading-relaxed">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.slice(0, 3).map((req, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <ChevronRight className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                <span>{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.slice(0, 3).map((benefit, idx) => (
                              <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                                <ChevronRight className="h-4 w-4 text-primary-500 mt-0.5 flex-shrink-0" />
                                <span>{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6 lg:mt-0 lg:ml-8 flex-shrink-0">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full lg:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 rounded-xl font-semibold hover:from-primary-600 hover:to-primary-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                      >
                        Apply Now
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No jobs found</h3>
              <p className="text-gray-600">Try adjusting your search criteria or check back later for new opportunities.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Application Process */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Ready to join our team? Follow these simple steps to start your journey with Al Nabi Hospital.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                step: '01',
                title: 'Find Your Role',
                description: 'Browse our current openings and find the position that matches your skills and interests.'
              },
              {
                step: '02',
                title: 'Submit Application',
                description: 'Complete our online application form with your resume and cover letter.'
              },
              {
                step: '03',
                title: 'Interview Process',
                description: 'Participate in our interview process and meet with our hiring team.'
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 text-center"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Questions About Careers?</h3>
            <p className="text-gray-600 mb-6">
              Our HR team is here to help you with any questions about career opportunities at Al Nabi Hospital.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2 text-gray-700">
                <Mail className="h-5 w-5 text-primary-500" />
                <span>careers@alnabihospital.com</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-700">
                <Phone className="h-5 w-5 text-primary-500" />
                <span>+91 4 123 4567</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Careers;