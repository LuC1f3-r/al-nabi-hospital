import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Users, Award, CheckCircle, Phone, Mail, Heart, Brain, Baby, Eye, Bone, Activity, Stethoscope, Ambulance, Scissors, Droplet, Scan, Shield, User as UserIcon, Microscope, Syringe, Ear, LucideIcon } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';

interface Doctor {
  name: string;
  specialization: string;
  experience: string;
}

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  services: string[];
  doctors: Doctor[];
  features: Feature[];
  icon: LucideIcon;
}

const ServiceDetail: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const navigate = useNavigate();
  const { setIsModalOpen } = useBookingStore();

  // Scroll to top when component mounts or serviceId changes
  React.useEffect(() => {
    // Use a small timeout to ensure DOM is ready
    const timer = setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }, 100);
    
    return () => clearTimeout(timer);
  }, [serviceId]);

  // Handle back button navigation properly
  const handleBackClick = () => {
    // Navigate to home page
    navigate('/');
    
    // Use a timeout to ensure the page has loaded before scrolling to services section
    setTimeout(() => {
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      } else {
        // Fallback to scrolling to top if services section not found
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      }
    }, 300);
  };

  const serviceData: Record<string, Service> = {
    cardiology: {
      id: 'cardiology',
      title: 'Cardiology Department',
      subtitle: 'Comprehensive Heart Care',
      description: 'Our cardiology department provides world-class cardiac care with state-of-the-art technology and experienced cardiologists.',
      heroImage: 'https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Cardiac Catheterization',
        'Echocardiography',
        'Stress Testing',
        'Holter Monitoring',
        'Pacemaker Implantation',
        'Cardiac Surgery',
        'Preventive Cardiology',
        'Heart Failure Management',
      ],
      doctors: [
        { name: 'Dr. Ahmed Hassan', specialization: 'Interventional Cardiologist', experience: '15+ years' },
        { name: 'Dr. Sarah Al-Rashid', specialization: 'Cardiac Surgeon', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: '24/7 Emergency Care', description: 'Round-the-clock cardiac emergency services' },
        { icon: Award, title: 'Expert Team', description: 'Board-certified cardiologists and cardiac surgeons' },
        { icon: Users, title: 'Patient-Centered', description: 'Personalized treatment plans for each patient' },
      ],
      icon: Heart,
    },
    neurology: {
      id: 'neurology',
      title: 'Neurology Department',
      subtitle: 'Advanced Neurological Care',
      description: 'Our neurology department specializes in diagnosing and treating disorders of the nervous system with cutting-edge technology.',
      heroImage: 'https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'EEG (Electroencephalography)',
        'EMG (Electromyography)',
        'MRI Brain Imaging',
        'Stroke Treatment',
        'Epilepsy Management',
        'Movement Disorders',
        'Memory Disorders',
        'Headache Treatment',
      ],
      doctors: [
        { name: 'Dr. Sarah Ahmed', specialization: 'Neurologist', experience: '18+ years' },
        { name: 'Dr. Mohamed El-Sayed', specialization: 'Neurosurgeon', experience: '14+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Diagnostics', description: 'State-of-the-art neurological testing equipment' },
        { icon: Award, title: 'Specialized Care', description: 'Expert treatment for complex neurological conditions' },
        { icon: Users, title: 'Comprehensive Support', description: 'Multidisciplinary approach to patient care' },
      ],
      icon: Brain,
    },
    pediatrics: {
      id: 'pediatrics',
      title: 'Pediatrics Department',
      subtitle: 'Caring for Your Little Ones',
      description: 'Our pediatric department provides comprehensive healthcare for infants, children, and adolescents in a child-friendly environment.',
      heroImage: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Well-Child Checkups',
        'Immunizations',
        'Growth Monitoring',
        'Developmental Assessments',
        'Pediatric Emergency Care',
        'Newborn Care',
        'Adolescent Medicine',
        'Pediatric Surgery',
      ],
      doctors: [
        { name: 'Dr. Mohamed Ali', specialization: 'Pediatrician', experience: '16+ years' },
        { name: 'Dr. Fatima Al-Zahra', specialization: 'Pediatric Surgeon', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Child-Friendly Environment', description: 'Designed specifically for children\'s comfort' },
        { icon: Award, title: 'Pediatric Specialists', description: 'Doctors trained specifically in child healthcare' },
        { icon: Users, title: 'Family-Centered Care', description: 'Involving families in every step of treatment' },
      ],
      icon: Baby,
    },
    ophthalmology: {
      id: 'ophthalmology',
      title: 'Ophthalmology Department',
      subtitle: 'Complete Eye Care Services',
      description: 'Our ophthalmology department offers comprehensive eye care services from routine exams to complex surgical procedures.',
      heroImage: 'https://images.pexels.com/photos/5752242/pexels-photo-5752242.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Comprehensive Eye Exams',
        'Cataract Surgery',
        'Glaucoma Treatment',
        'Retinal Disorders',
        'LASIK Surgery',
        'Diabetic Eye Care',
        'Pediatric Ophthalmology',
        'Emergency Eye Care',
      ],
      doctors: [
        { name: 'Dr. Fatima Omar', specialization: 'Ophthalmologist', experience: '13+ years' },
        { name: 'Dr. Ahmad Khalil', specialization: 'Retinal Specialist', experience: '10+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Technology', description: 'Latest diagnostic and surgical equipment' },
        { icon: Award, title: 'Expert Surgeons', description: 'Experienced in complex eye surgeries' },
        { icon: Users, title: 'Comprehensive Care', description: 'From routine care to specialized treatments' },
      ],
      icon: Eye,
    },
    orthopedics: {
      id: 'orthopedics',
      title: 'Orthopedics Department',
      subtitle: 'Bone, Joint & Muscle Care',
      description: 'Our orthopedic department specializes in treating musculoskeletal conditions with both surgical and non-surgical approaches.',
      heroImage: 'https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Joint Replacement Surgery',
        'Sports Medicine',
        'Fracture Treatment',
        'Spine Surgery',
        'Arthroscopic Surgery',
        'Physical Therapy',
        'Pain Management',
        'Orthopedic Trauma',
      ],
      doctors: [
        { name: 'Dr. John Smith', specialization: 'Orthopedic Surgeon', experience: '17+ years' },
        { name: 'Dr. Omar Abdallah', specialization: 'Sports Medicine Specialist', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: 'Minimally Invasive', description: 'Advanced minimally invasive surgical techniques' },
        { icon: Award, title: 'Sports Medicine', description: 'Specialized care for athletes and active individuals' },
        { icon: Users, title: 'Rehabilitation', description: 'Comprehensive post-treatment rehabilitation' },
      ],
      icon: Bone,
    },
    'general-medicine': {
      id: 'general-medicine',
      title: 'General Medicine Department',
      subtitle: 'Primary Healthcare Services',
      description: 'Our general medicine department provides comprehensive primary healthcare services for patients of all ages.',
      heroImage: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Routine Health Checkups',
        'Chronic Disease Management',
        'Preventive Care',
        'Health Screenings',
        'Vaccination Services',
        'Minor Procedures',
        'Health Counseling',
        'Referral Services',
      ],
      doctors: [
        { name: 'Dr. Layla Hassan', specialization: 'Internal Medicine', experience: '14+ years' },
        { name: 'Dr. Youssef Ali', specialization: 'Family Medicine', experience: '16+ years' },
      ],
      features: [
        { icon: Clock, title: 'Comprehensive Care', description: 'Complete primary healthcare services' },
        { icon: Award, title: 'Preventive Focus', description: 'Emphasis on prevention and early detection' },
        { icon: Users, title: 'Personalized Treatment', description: 'Tailored care plans for each patient' },
      ],
      icon: Stethoscope,
    },
    'emergency-medicine': {
      id: 'emergency-medicine',
      title: 'Emergency Medicine Department',
      subtitle: 'Urgent Care Around the Clock',
      description: 'Our emergency medicine department provides 24/7 care for life-threatening conditions with rapid response and advanced technology.',
      heroImage: 'https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Trauma Care',
        'Cardiac Emergencies',
        'Stroke Management',
        'Critical Care',
        'Pediatric Emergencies',
        'Resuscitation Services',
        'Triage and Stabilization',
        'Emergency Diagnostics',
      ],
      doctors: [
        { name: 'Dr. Khalid Salem', specialization: 'Emergency Physician', experience: '15+ years' },
        { name: 'Dr. Aisha Noor', specialization: 'Trauma Specialist', experience: '10+ years' },
      ],
      features: [
        { icon: Clock, title: '24/7 Availability', description: 'Immediate care at any time of day' },
        { icon: Award, title: 'Level I Trauma Center', description: 'Equipped for the most critical cases' },
        { icon: Users, title: 'Rapid Response', description: 'Fast-track services for urgent care' },
      ],
      icon: Ambulance,
    },
    'general-surgery': {
      id: 'general-surgery',
      title: 'General Surgery Department',
      subtitle: 'Precision Surgical Care',
      description: 'Our general surgery department offers a wide range of surgical procedures with advanced minimally invasive techniques.',
      heroImage: 'https://images.pexels.com/photos/7659572/pexels-photo-7659572.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Appendectomy',
        'Hernia Repair',
        'Gallbladder Surgery',
        'Thyroidectomy',
        'Laparoscopic Surgery',
        'Robotic Surgery',
        'Colorectal Surgery',
        'Wound Care',
      ],
      doctors: [
        { name: 'Dr. Hassan Mahmoud', specialization: 'General Surgeon', experience: '18+ years' },
        { name: 'Dr. Noor Ibrahim', specialization: 'Laparoscopic Surgeon', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: 'Minimally Invasive', description: 'Advanced laparoscopic and robotic techniques' },
        { icon: Award, title: 'Expert Surgeons', description: 'Highly skilled in complex procedures' },
        { icon: Users, title: 'Comprehensive Care', description: 'Full preoperative and postoperative support' },
      ],
      icon: Scissors,
    },
    'obstetrics-gynecology': {
      id: 'obstetrics-gynecology',
      title: 'Obstetrics & Gynecology Department',
      subtitle: 'Women’s Health and Maternity Care',
      description: 'Our obstetrics and gynecology department provides comprehensive care for women at all stages of life.',
      heroImage: 'https://images.pexels.com/photos/4153807/pexels-photo-4153807.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Prenatal Care',
        'Labor and Delivery',
        'Gynecological Surgery',
        'Fertility Treatments',
        'Menopause Management',
        'Pap Smears',
        'Mammography',
        'High-Risk Pregnancy Care',
      ],
      doctors: [
        { name: 'Dr. Amal Saeed', specialization: 'Obstetrician-Gynecologist', experience: '16+ years' },
        { name: 'Dr. Zainab Malik', specialization: 'Maternal-Fetal Medicine', experience: '13+ years' },
      ],
      features: [
        { icon: Clock, title: 'Modern Birthing Suites', description: 'Comfortable and advanced delivery facilities' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in high-risk pregnancies' },
        { icon: Users, title: 'Holistic Support', description: 'Personalized care for women’s health' },
      ],
      icon: Heart,
    },
    ent: {
      id: 'ent',
      title: 'ENT Department',
      subtitle: 'Ear, Nose, and Throat Care',
      description: 'Our ENT department specializes in diagnosing and treating disorders of the ear, nose, throat, and head and neck.',
      heroImage: 'https://images.pexels.com/photos/7446996/pexels-photo-7446996.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Sinus Surgery',
        'Tonsillectomy',
        'Hearing Assessments',
        'Cochlear Implants',
        'Voice Therapy',
        'Head and Neck Surgery',
        'Allergy Testing',
        'Sleep Apnea Treatment',
      ],
      doctors: [
        { name: 'Dr. Sami Farooq', specialization: 'Otolaryngologist', experience: '14+ years' },
        { name: 'Dr. Laila Omar', specialization: 'Head and Neck Surgeon', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Diagnostics', description: 'Endoscopy and audiometry for precise evaluation' },
        { icon: Award, title: 'Specialized Expertise', description: 'Treatment for complex ENT conditions' },
        { icon: Users, title: 'Comprehensive Care', description: 'Support for pediatric and adult patients' },
      ],
      icon: Ear,
    },
    urology: {
      id: 'urology',
      title: 'Urology Department',
      subtitle: 'Urinary and Reproductive Health',
      description: 'Our urology department provides advanced care for urinary tract and male reproductive health issues.',
      heroImage: 'https://images.pexels.com/photos/5995342/pexels-photo-5995342.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Kidney Stone Treatment',
        'Prostate Surgery',
        'Bladder Cancer Care',
        'Urodynamic Testing',
        'Vasectomy',
        'Urinary Incontinence Treatment',
        'Robotic Surgery',
        'Erectile Dysfunction Therapy',
      ],
      doctors: [
        { name: 'Dr. Omar Khalid', specialization: 'Urologist', experience: '15+ years' },
        { name: 'Dr. Hiba Salem', specialization: 'Urologic Oncologist', experience: '10+ years' },
      ],
      features: [
        { icon: Clock, title: 'Minimally Invasive', description: 'Advanced robotic and laser procedures' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in urologic oncology' },
        { icon: Users, title: 'Patient Support', description: 'Comprehensive care for all urologic conditions' },
      ],
      icon: Droplet,
    },
    'plastic-reconstructive-surgery': {
      id: 'plastic-reconstructive-surgery',
      title: 'Plastic & Reconstructive Surgery Department',
      subtitle: 'Aesthetic and Restorative Care',
      description: 'Our plastic and reconstructive surgery department offers cosmetic and reconstructive procedures for optimal outcomes.',
      heroImage: 'https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Breast Reconstruction',
        'Scar Revision',
        'Facial Surgery',
        'Burn Repair',
        'Microsurgery',
        'Botox and Fillers',
        'Liposuction',
        'Cleft Lip and Palate Repair',
      ],
      doctors: [
        { name: 'Dr. Nadia Faris', specialization: 'Plastic Surgeon', experience: '13+ years' },
        { name: 'Dr. Ali Zaid', specialization: 'Reconstructive Surgeon', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Techniques', description: 'Microsurgery and tissue engineering' },
        { icon: Award, title: 'Expert Surgeons', description: 'Specialized in aesthetic and reconstructive care' },
        { icon: Users, title: 'Personalized Plans', description: 'Tailored procedures for patient goals' },
      ],
      icon: Shield,
    },
    dermatology: {
      id: 'dermatology',
      title: 'Dermatology Department',
      subtitle: 'Skin Health Solutions',
      description: 'Our dermatology department provides medical and cosmetic treatments for skin, hair, and nail conditions.',
      heroImage: 'https://images.pexels.com/photos/5938356/pexels-photo-5938356.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Skin Cancer Screening',
        'Acne Treatment',
        'Psoriasis Management',
        'Mohs Surgery',
        'Laser Therapy',
        'Chemical Peels',
        'Eczema Treatment',
        'Cosmetic Dermatology',
      ],
      doctors: [
        { name: 'Dr. Laila Hassan', specialization: 'Dermatologist', experience: '12+ years' },
        { name: 'Dr. Sami Yusuf', specialization: 'Cosmetic Dermatologist', experience: '10+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Treatments', description: 'Latest laser and surgical technologies' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in medical and cosmetic dermatology' },
        { icon: Users, title: 'Preventive Focus', description: 'Screenings for early detection of skin issues' },
      ],
      icon: UserIcon,
    },
    psychiatry: {
      id: 'psychiatry',
      title: 'Psychiatry Department',
      subtitle: 'Mental Health and Wellness',
      description: 'Our psychiatry department offers compassionate care for mental health conditions with personalized treatment plans.',
      heroImage: 'https://images.pexels.com/photos/4101143/pexels-photo-4101143.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Individual Therapy',
        'Group Therapy',
        'Medication Management',
        'Anxiety Treatment',
        'Depression Care',
        'Bipolar Disorder Management',
        'Inpatient Psychiatric Care',
        'Counseling Services',
      ],
      doctors: [
        { name: 'Dr. Aisha Malik', specialization: 'Psychiatrist', experience: '14+ years' },
        { name: 'Dr. Zaid Omar', specialization: 'Child Psychiatrist', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Holistic Care', description: 'Comprehensive mental health support' },
        { icon: Award, title: 'Expert Therapists', description: 'Specialized in diverse mental health conditions' },
        { icon: Users, title: 'Patient Support', description: 'Personalized therapy and counseling' },
      ],
      icon: Brain,
    },
    pulmonology: {
      id: 'pulmonology',
      title: 'Pulmonology Department',
      subtitle: 'Respiratory Health Care',
      description: 'Our pulmonology department specializes in diagnosing and treating respiratory conditions to improve breathing and quality of life.',
      heroImage: 'https://images.pexels.com/photos/3845881/pexels-photo-3845881.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Pulmonary Function Testing',
        'Bronchoscopy',
        'Asthma Management',
        'COPD Treatment',
        'Lung Cancer Care',
        'Oxygen Therapy',
        'Sleep Apnea Treatment',
        'Smoking Cessation Programs',
      ],
      doctors: [
        { name: 'Dr. Khaled Amin', specialization: 'Pulmonologist', experience: '16+ years' },
        { name: 'Dr. Noor Salem', specialization: 'Interventional Pulmonologist', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Diagnostics', description: 'State-of-the-art respiratory testing' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in complex lung conditions' },
        { icon: Users, title: 'Patient Support', description: 'Comprehensive respiratory care plans' },
      ],
      icon: Activity,
    },
    gastroenterology: {
      id: 'gastroenterology',
      title: 'Gastroenterology Department',
      subtitle: 'Digestive Health Solutions',
      description: 'Our gastroenterology department provides advanced care for digestive system disorders with cutting-edge diagnostics.',
      heroImage: 'https://images.pexels.com/photos/3825547/pexels-photo-3825547.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Colonoscopy',
        'Endoscopy',
        'Liver Disease Management',
        'IBD Treatment',
        'GERD Management',
        'Hepatitis Care',
        'Nutritional Counseling',
        'Pancreatic Disorders',
      ],
      doctors: [
        { name: 'Dr. Sami Zaid', specialization: 'Gastroenterologist', experience: '15+ years' },
        { name: 'Dr. Hiba Noor', specialization: 'Hepatologist', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Endoscopy', description: 'Precise diagnostic and treatment procedures' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in complex digestive disorders' },
        { icon: Users, title: 'Preventive Focus', description: 'Screenings for early detection and prevention' },
      ],
      icon: Droplet,
    },
    nephrology: {
      id: 'nephrology',
      title: 'Nephrology Department',
      subtitle: 'Kidney Health Care',
      description: 'Our nephrology department provides comprehensive care for kidney-related conditions, including dialysis and transplant support.',
      heroImage: 'https://images.pexels.com/photos/6129238/pexels-photo-6129238.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Hemodialysis',
        'Peritoneal Dialysis',
        'Kidney Transplant Evaluation',
        'Kidney Stone Treatment',
        'Hypertension Management',
        'Chronic Kidney Disease Care',
        'Glomerulonephritis Treatment',
        'Electrolyte Disorder Management',
      ],
      doctors: [
        { name: 'Dr. Omar Saeed', specialization: 'Nephrologist', experience: '17+ years' },
        { name: 'Dr. Fatima Ali', specialization: 'Transplant Nephrologist', experience: '13+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Dialysis', description: 'State-of-the-art dialysis facilities' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in kidney transplantation' },
        { icon: Users, title: 'Patient Support', description: 'Comprehensive kidney care plans' },
      ],
      icon: Droplet,
    },
    endocrinology: {
      id: 'endocrinology',
      title: 'Endocrinology Department',
      subtitle: 'Hormonal Health Solutions',
      description: 'Our endocrinology department manages hormonal and metabolic disorders with personalized treatment plans.',
      heroImage: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Diabetes Management',
        'Thyroid Disorder Treatment',
        'Hormone Testing',
        'Insulin Pump Therapy',
        'Adrenal Disorder Care',
        'Pituitary Disorder Management',
        'Metabolic Syndrome Treatment',
        'Osteoporosis Care',
      ],
      doctors: [
        { name: 'Dr. Zainab Omar', specialization: 'Endocrinologist', experience: '14+ years' },
        { name: 'Dr. Khaled Yusuf', specialization: 'Diabetologist', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Diagnostics', description: 'Precise hormone and metabolic testing' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in complex endocrine disorders' },
        { icon: Users, title: 'Personalized Plans', description: 'Tailored treatment for hormonal health' },
      ],
      icon: Droplet,
    },
    rheumatology: {
      id: 'rheumatology',
      title: 'Rheumatology Department',
      subtitle: 'Arthritis and Autoimmune Care',
      description: 'Our rheumatology department specializes in treating arthritis and autoimmune diseases with advanced therapies.',
      heroImage: 'https://images.pexels.com/photos/5327650/pexels-photo-5327650.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Rheumatoid Arthritis Treatment',
        'Lupus Management',
        'Joint Injections',
        'Biologic Therapies',
        'Gout Treatment',
        'Osteoarthritis Care',
        'Autoimmune Disease Management',
        'Physical Therapy',
      ],
      doctors: [
        { name: 'Dr. Aisha Saeed', specialization: 'Rheumatologist', experience: '15+ years' },
        { name: 'Dr. Sami Noor', specialization: 'Autoimmune Specialist', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Therapies', description: 'Biologic and targeted treatments' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in autoimmune diseases' },
        { icon: Users, title: 'Holistic Support', description: 'Comprehensive care for joint health' },
      ],
      icon: Bone,
    },
    'infectious-diseases': {
      id: 'infectious-diseases',
      title: 'Infectious Diseases Department',
      subtitle: 'Expert Infection Management',
      description: 'Our infectious diseases department provides advanced care for infections with a focus on prevention and treatment.',
      heroImage: 'https://images.pexels.com/photos/3902881/pexels-photo-3902881.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Antimicrobial Therapy',
        'Vaccination Programs',
        'HIV/AIDS Management',
        'Antibiotic-Resistant Infection Care',
        'Travel Medicine',
        'Infection Control',
        'Viral Hepatitis Treatment',
        'Fungal Infection Management',
      ],
      doctors: [
        { name: 'Dr. Omar Malik', specialization: 'Infectious Disease Specialist', experience: '16+ years' },
        { name: 'Dr. Hiba Zaid', specialization: 'HIV Specialist', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Diagnostics', description: 'Rapid pathogen identification' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in emerging infections' },
        { icon: Users, title: 'Preventive Focus', description: 'Vaccination and infection control programs' },
      ],
      icon: Syringe,
    },
    'anesthesiology-pain-management': {
      id: 'anesthesiology-pain-management',
      title: 'Anesthesiology & Pain Management Department',
      subtitle: 'Advanced Pain Relief and Anesthesia',
      description: 'Our anesthesiology and pain management department provides expert anesthesia services and chronic pain solutions.',
      heroImage: 'https://images.pexels.com/photos/3825487/pexels-photo-3825487.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'General Anesthesia',
        'Regional Anesthesia',
        'Nerve Blocks',
        'Spinal Cord Stimulation',
        'Chronic Pain Management',
        'Postoperative Pain Care',
        'Epidural Injections',
        'Anesthesia for Surgery',
      ],
      doctors: [
        { name: 'Dr. Khaled Omar', specialization: 'Anesthesiologist', experience: '15+ years' },
        { name: 'Dr. Noor Ali', specialization: 'Pain Management Specialist', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Techniques', description: 'Precision anesthesia and pain relief' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in chronic pain management' },
        { icon: Users, title: 'Patient Comfort', description: 'Personalized pain relief plans' },
      ],
      icon: Droplet,
    },
    physiotherapy: {
      id: 'physiotherapy',
      title: 'Physiotherapy Department',
      subtitle: 'Rehabilitation and Mobility',
      description: 'Our physiotherapy department offers personalized rehabilitation programs to restore mobility and strength.',
      heroImage: 'https://images.pexels.com/photos/4492067/pexels-photo-4492067.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Physical Therapy',
        'Sports Injury Rehabilitation',
        'Post-Surgical Recovery',
        'Hydrotherapy',
        'Manual Therapy',
        'Chronic Pain Management',
        'Mobility Training',
        'Posture Correction',
      ],
      doctors: [
        { name: 'Dr. Sami Faris', specialization: 'Physiotherapist', experience: '13+ years' },
        { name: 'Dr. Laila Zaid', specialization: 'Sports Physiotherapist', experience: '10+ years' },
      ],
      features: [
        { icon: Clock, title: 'Personalized Programs', description: 'Tailored rehabilitation plans' },
        { icon: Award, title: 'Specialized Care', description: 'Expertise in sports and post-surgical recovery' },
        { icon: Users, title: 'Holistic Support', description: 'Comprehensive care for mobility' },
      ],
      icon: Activity,
    },
    'radiology-imaging': {
      id: 'radiology-imaging',
      title: 'Radiology & Imaging Department',
      subtitle: 'Advanced Diagnostic Imaging',
      description: 'Our radiology and imaging department provides state-of-the-art diagnostic services for accurate medical evaluations.',
      heroImage: 'https://images.pexels.com/photos/4226219/pexels-photo-4226219.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'MRI Scanning',
        'CT Scanning',
        'Ultrasound',
        'Digital X-Rays',
        'Interventional Radiology',
        'Mammography',
        'Bone Density Scans',
        'Fluoroscopy',
      ],
      doctors: [
        { name: 'Dr. Omar Noor', specialization: 'Radiologist', experience: '16+ years' },
        { name: 'Dr. Hiba Salem', specialization: 'Interventional Radiologist', experience: '12+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Technology', description: 'High-resolution imaging equipment' },
        { icon: Award, title: 'Expert Radiologists', description: 'Specialized in diagnostic and interventional radiology' },
        { icon: Users, title: 'Rapid Reporting', description: 'Fast and accurate diagnostic results' },
      ],
      icon: Scan,
    },
    'pathology-laboratory': {
      id: 'pathology-laboratory',
      title: 'Pathology & Laboratory Department',
      subtitle: 'Precision Diagnostics',
      description: 'Our pathology and laboratory department delivers accurate diagnostic testing to support medical decision-making.',
      heroImage: 'https://images.pexels.com/photos/3825581/pexels-photo-3825581.jpeg?auto=compress&cs=tinysrgb&w=1200',
      services: [
        'Blood Testing',
        'Tissue Analysis',
        'Molecular Diagnostics',
        'Genetic Screening',
        'Microbiology Testing',
        'Hematology',
        'Immunohistochemistry',
        'Urinalysis',
      ],
      doctors: [
        { name: 'Dr. Zainab Yusuf', specialization: 'Pathologist', experience: '15+ years' },
        { name: 'Dr. Khaled Ali', specialization: 'Clinical Pathologist', experience: '11+ years' },
      ],
      features: [
        { icon: Clock, title: 'Advanced Testing', description: 'Cutting-edge laboratory equipment' },
        { icon: Award, title: 'Expert Pathologists', description: 'Specialized in precise diagnostics' },
        { icon: Users, title: 'Comprehensive Support', description: 'Accurate results for all specialties' },
      ],
      icon: Microscope,
    },
  };

  const serviceIcons: Record<string, LucideIcon> = {
    cardiology: Heart,
    neurology: Brain,
    pediatrics: Baby,
    ophthalmology: Eye,
    orthopedics: Bone,
    'general-medicine': Stethoscope,
    'emergency-medicine': Ambulance,
    'general-surgery': Scissors,
    'obstetrics-gynecology': Heart,
    ent: Ear,
    urology: Droplet,
    'plastic-reconstructive-surgery': Shield,
    dermatology: UserIcon,
    psychiatry: Brain,
    pulmonology: Activity,
    gastroenterology: Droplet,
    nephrology: Droplet,
    endocrinology: Droplet,
    rheumatology: Bone,
    'infectious-diseases': Syringe,
    'anesthesiology-pain-management': Droplet,
    physiotherapy: Activity,
    'radiology-imaging': Scan,
    'pathology-laboratory': Microscope,
  };

  const currentService = serviceId ? serviceData[serviceId as keyof typeof serviceData] : undefined;
  const ServiceIcon = serviceId ? serviceIcons[serviceId as keyof typeof serviceIcons] : undefined;

  if (!currentService || !ServiceIcon) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">Service Not Found</h1>
          <button
            onClick={handleBackClick}
            className="bg-[#007BBA] text-white px-6 py-3 rounded-full hover:bg-[#004F74] transition-colors"
          >
            Return to Services
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-br from-[#004F74] to-[#007BBA] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={currentService.heroImage}
            alt={currentService.title}
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#004F74]/80 to-[#007BBA]/80"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <button
              onClick={handleBackClick}
              type="button"
              className="flex items-center space-x-2 text-blue-200 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Services</span>
            </button>
            
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center">
                <ServiceIcon className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-2">{currentService.title}</h1>
                <p className="text-xl text-blue-100">{currentService.subtitle}</p>
              </div>
            </div>
            
            <p className="text-lg text-blue-100 max-w-2xl">{currentService.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Services & Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Services List */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#004F74] mb-8">Our Services</h2>
              <div className="grid gap-4">
                {currentService.services.map((service, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-center space-x-3 p-4 bg-[#F6FAFD] rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    <CheckCircle className="h-6 w-6 text-[#007BBA] flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{service}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#004F74] mb-8">Why Choose Us</h2>
              <div className="space-y-6">
                {currentService.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    className="flex items-start space-x-4 p-6 bg-white border border-gray-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-xl flex items-center justify-center flex-shrink-0">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#004F74] mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      {/* <section className="py-20 bg-[#F6FAFD]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-[#004F74] mb-4">Our Specialists</h2>
            <p className="text-lg text-gray-600">Meet our experienced medical professionals</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentService.doctors.map((doctor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#007BBA] to-[#004F74] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#004F74] mb-2">{doctor.name}</h3>
                  <p className="text-[#007BBA] font-medium mb-2">{doctor.specialization}</p>
                  <p className="text-gray-600">{doctor.experience}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#004F74] to-[#007BBA]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Book your appointment today and experience exceptional healthcare
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.button
                onClick={() => setIsModalOpen(true)}
                type="button"
                className="bg-white text-[#007BBA] px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Calendar className="h-5 w-5" />
                <span>Book Appointment</span>
              </motion.button>
              
              {/* <motion.a
                href="tel:+914123456789"
                className="bg-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/30 transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="h-5 w-5" />
                <span>Call Now</span>
              </motion.a> */}
            </div>
            
            <div className="mt-8 flex justify-center space-x-8 text-blue-100">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 709 090 0086</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>alnabihospital@gmail.com</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;