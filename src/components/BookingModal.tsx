import React, { useState, useEffect } from "react";
import { X, Calendar, User, MessageSquare, Building } from "lucide-react";
import { useBookingStore } from "../store/bookingStore";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface FormData {
  fullName: string;
  phone: string;
  email: string;
  department: string;
  doctor: string;
  selectedDate: Date;
  notes: string;
}

interface Department {
  id: string;
  name: string;
}

interface DoctorsByDepartment {
  [key: string]: string[];
}

const BookingModal: React.FC = () => {
  const { isModalOpen, setIsModalOpen, selectedDoctor } = useBookingStore();
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    phone: "",
    email: "",
    department: "",
    doctor: "",
    selectedDate: new Date(),
    notes: "",
  });

  const departments: Department[] = [
    { id: "general", name: "General Medicine" },
    { id: "anaesthesia", name: "Anaesthesia" },
    { id: "general_surgery", name: "General Surgery" },
    { id: "pediatrics", name: "Pediatrics" },
    { id: "neurology", name: "Neurology" },
    { id: "psychiatry", name: "Psychiatry" },
    { id: "orthopedics", name: "Orthopedics" },
  ];

  const doctorsByDepartment: DoctorsByDepartment = {
    general: [
      "Dr. Bilal Abdullah, MD General Medicine",
      "Dr. Osama Awati, MBBS",
    ],
    anaesthesia: [
      "Dr. Asma Jahagirdar, DA",
      "Dr. Tahir, DA",
      "Dr. Meenal Aggarwal, MD Anaesthesia",
    ],
    general_surgery: [
      "Dr. Nishikant Gujar, MS General Surgery",
      "Dr. Jilani Awati, MS General Surgery and Laparoscopic Surgeon",
    ],
    pediatrics: [
      "Dr. Surendra Aggarwal, MCh Pediatric Surgeon",
      "Dr. Rizwan, MD Pediatrics",
    ],
    neurology: ["Dr. Yitendra Nayak, MCh Neurosurgery"],
    psychiatry: ["Dr. Soumya, MD Psychiatrist"],
    orthopedics: ["Dr. Ravindra Kulkarni, MS Ortho and Spine Surgeon"],
  };

  // Fix body scroll when modal is open
  useEffect(() => {
    const originalOverflow = window.getComputedStyle(document.body).overflow;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isModalOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = "0px";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = "0px";
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (selectedDoctor) {
      setFormData((prev) => ({
        ...prev,
        department: selectedDoctor.department,
        doctor: selectedDoctor.name,
      }));
    }
  }, [selectedDoctor]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    // Construct the WhatsApp message string
    const message = `
New Appointment Booking:
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Department: ${formData.department}
Doctor: ${formData.doctor}
Date & Time: ${formData.selectedDate.toLocaleString()}
Notes: ${formData.notes || "N/A"}
    `;
    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number in international format without "+" or spaces
    const whatsappNumber = "919738878894";

    // WhatsApp URL to send the message
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Open WhatsApp chat in new tab
    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      department: "",
      doctor: "",
      selectedDate: new Date(),
      notes: "",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ): void => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "department" && { doctor: "" }), // Reset doctor when department changes
    }));
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>): void => {
    if (e.target === e.currentTarget) {
      setIsModalOpen(false);
    }
  };

  if (!isModalOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-start justify-center z-50 p-4 overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-3xl max-w-4xl w-full my-8 shadow-2xl">
        {/* Header */}
        <div className="bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white p-6 sm:p-8 rounded-t-3xl">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Calendar className="h-6 w-6 sm:h-8 sm:w-8" />
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                  Book Your Appointment
                </h2>
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
                <label className="block text-sm font-medium text-gray-700">
                  Full Name *
                </label>
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
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number *
                </label>
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
              <label className="block text-sm font-medium text-gray-700">
                Email Address *
              </label>
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
                <label className="block text-sm font-medium text-gray-700">
                  Department *
                </label>
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 text-base bg-white"
                >
                  <option value="">Choose Department</option>
                  {departments.map((dept: Department) => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Doctor *
                </label>
                <select
                  name="doctor"
                  value={formData.doctor}
                  onChange={handleChange}
                  required
                  disabled={!formData.department}
                  className="w-full px-4 py-3 sm:py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#007BBA] focus:border-transparent transition-all duration-300 disabled:bg-gray-100 text-base bg-white"
                >
                  <option value="">Select Doctor</option>
                  {formData.department &&
                    doctorsByDepartment[formData.department]?.map(
                      (doctor: string) => (
                        <option key={doctor} value={doctor}>
                          {doctor}
                        </option>
                      )
                    )}
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

            <div className="bg-gradient-to-br from-[#F6FAFD] to-[#E8F4F8] border-2 border-gray-200 rounded-xl p-4 sm:p-6">
              <div className="flex flex-col items-center space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Select Date and Time *
                </label>

                <div className="w-full max-w-md mx-auto">
                  <DatePicker
                    selected={formData.selectedDate}
                    onChange={(date: Date | null) =>
                      setFormData((prev) => ({
                        ...prev,
                        selectedDate: date || new Date(),
                      }))
                    }
                    showTimeSelect
                    timeIntervals={30}
                    timeCaption="Time"
                    dateFormat="MMMM d, yyyy h:mm aa"
                    minDate={new Date()}
                    filterTime={(time: Date) => {
                      const hours = time.getHours();
                      return hours >= 8 && hours <= 18; // 8 AM to 6 PM
                    }}
                    className="w-full text-center text-base sm:text-lg font-semibold text-[#004F74] bg-white border-2 border-[#007BBA]/20 rounded-lg py-3 px-4 hover:border-[#007BBA] focus:border-[#007BBA] focus:ring-2 focus:ring-[#007BBA]/20 transition-all duration-300"
                    wrapperClassName="w-full"
                    calendarClassName="responsive-calendar"
                    popperClassName="responsive-popper"
                    popperPlacement="bottom"
                    popperModifiers={[
                      {
                        name: "preventOverflow",
                        fn: ({ x, y, placement }) => {
                          return {
                            x,
                            y,
                            data: { placement },
                          };
                        },
                        options: {
                          rootBoundary: "viewport",
                          tether: false,
                          altAxis: true,
                        },
                      },
                    ]}
                  />
                </div>

                <div className="bg-white rounded-lg p-3 border border-[#007BBA]/20 w-full max-w-md mx-auto">
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Selected Appointment
                    </p>
                    <p className="text-lg font-semibold text-[#004F74] mt-1">
                      {formData.selectedDate.toLocaleDateString("en-US", {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p className="text-base text-[#007BBA] font-medium">
                      {formData.selectedDate.toLocaleTimeString("en-US", {
                        hour: "numeric",
                        minute: "2-digit",
                        hour12: true,
                      })}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 text-center space-y-2">
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span>Available Hours: 8:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <span>Emergency: 24/7</span>
                  </div>
                </div>
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
              <label className="block text-sm font-medium text-gray-700">
                Additional Notes (Optional)
              </label>
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
              className="w-full bg-gradient-to-r from-[#007BBA] to-[#004F74] text-white py-4 sm:py-5 rounded-xl font-semibold text-base sm:text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300 hover:from-[#0086CC] hover:to-[#005A85]"
            >
              Confirm Appointment
            </button>
          </div>
        </form>

        {/* Footer Note */}
        <div className="bg-[#F6FAFD] px-6 sm:px-8 py-4 sm:py-6 rounded-b-3xl border-t border-gray-100">
          <div className="text-center space-y-2">
            <p className="text-sm sm:text-base text-gray-600">
              📞 We will contact you within 24 hours to confirm your appointment
              details.
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
