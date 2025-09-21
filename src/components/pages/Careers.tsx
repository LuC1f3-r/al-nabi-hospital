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
  Phone,
  X
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

const HR_WHATSAPP_NUMBER = '918884801005'; 

const Careers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedJobType, setSelectedJobType] = useState('All');

  // Modal and form state
  const [showModal, setShowModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState<JobOpening | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    experience: '',
    resumeUrl: '',
    coverLetter: ''
  });
  const [errors, setErrors] = useState<{[k:string]: string}>({});

  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Lab Technician',
      department: 'Laboratory',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '1-3 years',
      salary: '₹2,00,000 - ₹3,00,000',
      description: 'Perform laboratory tests and procedures to assist in the diagnosis and treatment of patients. Maintain lab equipment and ensure quality control.',
      requirements: [
        'Diploma or Bachelor\'s degree in Medical Laboratory Technology',
        'Experience in clinical laboratory preferred',
        'Attention to detail and accuracy',
        'Knowledge of laboratory safety protocols',
        'Basic computer skills'
      ],
      benefits: [
        'Health insurance',
        'Paid time off',
        'Training and development',
        'Supportive work environment',
        'Employee wellness programs'
      ],
      posted: '2 days ago'
    },
    {
      id: '2',
      title: 'OT Technician',
      department: 'Nursing',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '1-2 years',
      salary: '₹1,80,000 - ₹2,50,000',
      description: 'Assist in operating theatre procedures, prepare and maintain OT equipment, and support surgical teams for smooth operations.',
      requirements: [
        'Diploma in Operation Theatre Technology',
        'Experience in hospital OT preferred',
        'Knowledge of sterilization techniques',
        'Ability to work in a team',
        'Good communication skills'
      ],
      benefits: [
        'Health insurance',
        'On-the-job training',
        'Paid leave',
        'Employee assistance program',
        'Career growth opportunities'
      ],
      posted: '3 days ago'
    },
    {
      id: '3',
      title: 'Nurse',
      department: 'Nursing',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '0-5 years',
      salary: '₹1,50,000 - ₹3,00,000',
      description: 'Provide patient care, administer medications, and assist doctors in various departments. Ensure patient comfort and safety.',
      requirements: [
        'Diploma or Bachelor\'s degree in Nursing',
        'Valid nursing registration',
        'Compassionate and patient-focused',
        'Ability to work in shifts',
        'Good communication skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Paid leave',
        'Training and development',
        'Supportive team environment'
      ],
      posted: '1 day ago'
    },
    {
      id: '4',
      title: 'Brother',
      department: 'Nursing',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '0-3 years',
      salary: '₹1,50,000 - ₹2,50,000',
      description: 'Assist nurses and doctors in patient care, help with daily activities, and maintain hygiene and safety standards.',
      requirements: [
        'Relevant certification or experience',
        'Caring and responsible attitude',
        'Ability to work in a team',
        'Willingness to work flexible hours',
        'Basic patient care knowledge'
      ],
      benefits: [
        'Health insurance',
        'Paid time off',
        'Training provided',
        'Friendly work environment',
        'Employee support programs'
      ],
      posted: '4 days ago'
    },
    {
      id: '5',
      title: 'Medical Store Staff',
      department: 'Pharmacy',
      location: 'Bijapur, IN',
      type: 'Full-time',
      experience: '0-2 years',
      salary: '₹1,20,000 - ₹2,00,000',
      description: 'Manage medical store inventory, assist pharmacists, and provide medicines to patients as per prescriptions.',
      requirements: [
        '12th pass or relevant qualification',
        'Experience in medical store preferred',
        'Basic knowledge of medicines',
        'Good organizational skills',
        'Customer service skills'
      ],
      benefits: [
        'Health insurance',
        'Paid leave',
        'On-the-job training',
        'Supportive management',
        'Growth opportunities'
      ],
      posted: '5 days ago'
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

  function openApplyModal(job: JobOpening) {
    setSelectedJob(job);
    setShowModal(true);
    setForm({
      name: '',
      email: '',
      phone: '',
      experience: job.experience || '',
      resumeUrl: '',
      coverLetter: ''
    });
    setErrors({});
  }

  function closeModal() {
    setShowModal(false);
    setSelectedJob(null);
    setSubmitting(false);
    setErrors({});
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  }

  function validate() {
    const err: {[k:string]: string} = {};
    if (!form.name.trim()) err.name = 'Name is required';
    if (!form.phone.trim()) err.phone = 'Phone is required';
    // simple email check
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) err.email = 'Invalid email';
    return err;
  }

  async function submitToWhatsApp() {
    setErrors({});
    const val = validate();
    if (Object.keys(val).length > 0) {
      setErrors(val);
      return;
    }
    if (!selectedJob) return;

    setSubmitting(true);

    // Build plain message
    const messageLines = [
      `*New Job Application*`,
      ``,
      `*Job:* ${selectedJob.title} (ID: ${selectedJob.id})`,
      `*Department:* ${selectedJob.department}`,
      `*Location:* ${selectedJob.location}`,
      ``,
      `*Applicant Name:* ${form.name}`,
      `*Phone:* ${form.phone}`,
      form.email ? `*Email:* ${form.email}` : '',
      form.experience ? `*Experience:* ${form.experience}` : '',
      form.resumeUrl ? `*Resume:* ${form.resumeUrl}` : '',
      form.coverLetter ? `` : '',
      ...(form.coverLetter ? ['*Cover Letter:*', form.coverLetter] : []),
      ``,
      `-- Sent from Al Nabi Careers site`
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(messageLines);

    const number = HR_WHATSAPP_NUMBER.replace(/\D/g, '');
    const waUrl = `https://wa.me/${number}?text=${encoded}`;

    try {
      window.open(waUrl, '_blank');

      try {
        await navigator.clipboard.writeText(messageLines);
      } catch {

      }

      closeModal();
    } catch (err) {
      // fallback: copy message to clipboard and inform user
      try {
        await navigator.clipboard.writeText(messageLines);
        alert('Could not open WhatsApp automatically. The application text is copied to your clipboard — paste it into WhatsApp to send.');
      } catch {
        alert('Failed to open WhatsApp and copy the message. Please copy this message manually:\n\n' + messageLines);
      }
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="relative pt-40 py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA] overflow-hidden">
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#004F74] to-[#007BBA] rounded-2xl flex items-center justify-center mx-auto mb-4">
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
                        onClick={() => openApplyModal(job)}
                        className="w-full lg:w-auto bg-gradient-to-r from-[#156e97] to-[#007BBA] text-white px-8 py-3 rounded-xl font-semibold hover:from-[#004F74] hover:to-[#014060] transition-all duration-300 shadow-lg hover:shadow-xl"
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
                <div className="w-16 h-16 bg-gradient-to-br from-[#004F74] to-[#007BBA] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-xl">
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

      {/* APPLICATION FORM MODAL */}
      {showModal && selectedJob && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          <div className="absolute inset-0 bg-black/50" onClick={closeModal}></div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.18 }}
            className="relative z-10 max-w-2xl w-full bg-white rounded-2xl shadow-xl p-6 md:p-8"
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 rounded-full p-2 hover:bg-gray-100"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </button>

            <h3 className="text-2xl font-bold mb-2">Apply for: {selectedJob.title}</h3>
            <p className="text-sm text-gray-600 mb-6">{selectedJob.department} • {selectedJob.location}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="text-sm font-medium">Full name<span className="text-red-500">*</span></label>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  placeholder="Your full name"
                />
                {errors.name && <div className="text-xs text-red-500 mt-1">{errors.name}</div>}
              </div>

              <div>
                <label className="text-sm font-medium">Phone<span className="text-red-500">*</span></label>
                <input
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  placeholder="+91 98XXXXXXXX"
                />
                {errors.phone && <div className="text-xs text-red-500 mt-1">{errors.phone}</div>}
              </div>

              <div>
                <label className="text-sm font-medium">Email</label>
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  placeholder="you@example.com"
                />
                {errors.email && <div className="text-xs text-red-500 mt-1">{errors.email}</div>}
              </div>

              <div>
                <label className="text-sm font-medium">Experience</label>
                <input
                  name="experience"
                  value={form.experience}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  placeholder="Years / summary"
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Resume URL (or Google Drive / Dropbox link)</label>
                <input
                  name="resumeUrl"
                  value={form.resumeUrl}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2"
                  placeholder="https://..."
                />
              </div>

              <div className="md:col-span-2">
                <label className="text-sm font-medium">Cover letter / message</label>
                <textarea
                  name="coverLetter"
                  value={form.coverLetter}
                  onChange={handleChange}
                  className="mt-1 w-full border rounded-lg px-3 py-2 h-28"
                />
              </div>
            </div>

            <div className="mt-6 flex items-center justify-end space-x-3">
              <button onClick={closeModal} className="px-4 py-2 rounded-lg border">Cancel</button>
              <button
                onClick={submitToWhatsApp}
                disabled={submitting}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold disabled:opacity-60"
              >
                {submitting ? 'Sending...' : 'Send to WhatsApp'}
              </button>
            </div>

            <p className="text-xs text-gray-500 mt-3">
              Note: By clicking Send to WhatsApp the application text will open in WhatsApp Web / Mobile.
              Make sure the HR WhatsApp number is correctly configured in the code (see <code>HR_WHATSAPP_NUMBER</code>).
            </p>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Careers;
