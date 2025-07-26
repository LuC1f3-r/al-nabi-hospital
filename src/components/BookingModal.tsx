import React, { useState, useEffect } from 'react';
import { X, Calendar, User, Phone, Mail, MessageSquare, Building } from 'lucide-react';
import { useBookingStore } from '../store/bookingStore';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const BookingModal = () => {
  const { isModalOpen, setIsModalOpen, selectedDoctor } = useBookingStore();
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    department: '',
    doctor: '',
    selectedDate: new Date(),
    notes: ''
  });

  const departments = [
    { id: 'cardiology', name: 'Cardiology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'ophthalmology', name: 'Ophthalmology' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'general', name: 'General Medicine' }
  ];

  const doctorsByDepartment = {
    cardiology: ['Dr. Ahmed Hassan', 'Dr. Sarah Al-Rashid'],
    neurology: ['Dr. Sarah Ahmed', 'Dr. Mohamed El-Sayed'],
    pediatrics: ['Dr. Mohamed Ali', 'Dr. Fatima Al-Zahra'],
    ophthalmology: ['Dr. Fatima Omar', 'Dr. Ahmad Khalil'],
    orthopedics: ['Dr. John Smith', 'Dr. Omar Abdallah'],
    general: ['Dr. Layla Hassan', 'Dr. Youssef Ali']
  };

  useEffect(() => {
    if (selectedDoctor) {
      setFormData(prev => ({
        ...prev,
        department: selectedDoctor.department,
        doctor: selectedDoctor.name
      }));
    }
  }, [selectedDoctor]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Appointment booked:', formData);
    alert('Appointment successfully booked! We will contact you shortly to confirm.');
    setIsModalOpen(false);
    setFormData({
      fullName: '',
      phone: '',
      email: '',
      department: '',
      doctor: '',
      selectedDate: new Date(),
      notes: ''
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      ...(name === 'department' && { doctor: '' }) // Reset doctor when department changes
    }));
  };

  if (!isModalOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white p-6 sm:p-8 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">Book Your Appointment</h2>
                <p className="text-sm sm:text-base text-blue-100 mt-1">
                  Schedule your visit with our expert medical professionals
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-white/20 rounded-full transition-colors flex-shrink-0"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-8">
          {/* Personal Information */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2">
              <User className="h-5 w-5" />
              <span>Personal Information</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base"
                />
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 XX XXX XXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Email Address *</label>
              <input
                type="email"
                name="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base"
              />
            </div>
          </div>

          {/* Medical Information */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Building className="h-5 w-5" />
              <span>Medical Information</span>
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Department *</label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base bg-white"
                >
                  <option value="">Choose Department</option>
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>{dept.name}</option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">Preferred Doctor *</label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  disabled={!formData.department}
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 disabled:bg-gray-100 text-base bg-white"
                >
                  <option value="">Select Doctor</option>
                  {formData.department && doctorsByDepartment[formData.department as keyof typeof doctorsByDepartment]?.map(doctor => (
                    <option key={doctor} value={doctor}>{doctor}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Date Selection */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2">
              <Calendar className="h-5 w-5" />
              <span>Preferred Date & Time</span>
            </h3>
            
            <div className="bg-[#F6FAFD] border-2 border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="text-center">
                <label className="block text-sm font-medium text-gray-700 mb-3">Select Date and Time *</label>
                <DatePicker
                  selected={formData.selectedDate}
                  onChange={(date) => setFormData(prev => ({ ...prev, selectedDate: date || new Date() }))}
                  showTimeSelect
                  timeIntervals={30}
                  timeCaption="Time"
                  dateFormat="MMMM d, yyyy h:mm aa"
                  minDate={new Date()}
                  filterTime={(time) => {
                    const hours = time.getHours();
                    return hours >= 8 && hours <= 18; // 8 AM to 6 PM
                  }}
                  className="w-full text-center text-base sm:text-lg font-medium text-[#004F74] bg-transparent border-none outline-none"
                />
              </div>
              <div className="mt-4 text-center text-sm text-gray-600">
                <p>Available Hours: 8:00 AM - 6:00 PM</p>
                <p>Emergency services available 24/7</p>
              </div>
            </div>
          </div>

          {/* Additional Notes */}
          <div className="space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-[#004F74] flex items-center space-x-2 border-b border-gray-200 pb-2">
              <MessageSquare className="h-5 w-5" />
              <span>Additional Information</span>
            </h3>
            
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Additional Notes (Optional)</label>
              <textarea
                name="notes"
                placeholder="Please describe any specific concerns, symptoms, or requirements..."
                value={formData.notes}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent resize-none transition-all duration-300 text-base"
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300"
            >
              Confirm Appointment
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="bg-[#F6FAFD] px-6 sm:px-8 py-4 sm:py-6 rounded-b-3xl border-t border-gray-100">
          <div className="text-center space-y-2">
            <p className="text-sm sm:text-base text-gray-600">
              📞 We will contact you within 24 hours to confirm your appointment details.
            </p>
            <p className="text-xs sm:text-sm text-gray-500">
              For urgent matters, please call our emergency line: +91 4 123 4568
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;