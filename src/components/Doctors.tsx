import React, { useState } from "react";
import { Calendar, MapPin } from "lucide-react";
import { useBookingStore } from "../store/bookingStore";

const Doctors = () => {
  const [activeCategory, setActiveCategory] = useState("main");
  const { setIsModalOpen, setSelectedDoctor } = useBookingStore();

  const doctors = {
    main: [
      {
        name: "Dr. Ahmed Hassan",
        specialization: "Cardiologist",
        image:
          "https://images.pexels.com/photos/6749764/pexels-photo-6749764.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "cardiology",
      },
      {
        name: "Dr. Sarah Ahmed",
        specialization: "Neurologist",
        image:
          "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "neurology",
      },
      {
        name: "Dr. Mohamed Ali",
        specialization: "Pediatrician",
        image:
          "https://images.pexels.com/photos/6749763/pexels-photo-6749763.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "pediatrics",
      },
      {
        name: "Dr. Fatima Omar",
        specialization: "Ophthalmologist",
        image:
          "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Busy",
        department: "ophthalmology",
      },
    ],
    visiting: [
      {
        name: "Dr. John Smith",
        specialization: "Orthopedic Surgeon",
        image:
          "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Weekends Only",
        department: "orthopedics",
      },
      {
        name: "Dr. Emily Brown",
        specialization: "Dermatologist",
        image:
          "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Tuesdays",
        department: "dermatology",
      },
    ],
  };

  const categories = [
    { id: "main", label: "Main Doctors" },
    { id: "visiting", label: "Visiting Doctors" },
  ];

  const handleBookAppointment = (doctor: any) => {
    setSelectedDoctor(doctor);
    setIsModalOpen(true);
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004F74] mb-4">
            Our Medical Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to
            providing exceptional care.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#F6FAFD] p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  activeCategory === category.id
                    ? "bg-[#007BBA] text-white"
                    : "text-gray-600 hover:text-[#007BBA]"
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Doctors Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors[activeCategory as keyof typeof doctors].map(
            (doctor, index) => (
              <div
                key={index}
                className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="relative">
                  <img
                    src={doctor.image}
                    alt={doctor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div
                    className={`absolute top-4 right-4 px-3 py-1 rounded-full text-sm font-medium ${
                      doctor.availability === "Available"
                        ? "bg-green-100 text-green-800"
                        : doctor.availability === "Busy"
                        ? "bg-red-100 text-red-800"
                        : "bg-yellow-100 text-yellow-800"
                    }`}
                  >
                    {doctor.availability}
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#004F74] mb-2">
                    {doctor.name}
                  </h3>
                  <p className="text-[#007BBA] mb-4">{doctor.specialization}</p>

                  <div className="flex items-center space-x-2 text-gray-600 mb-4">
                    <MapPin className="h-4 w-4" />
                    <span className="text-sm">Al Nabi Hospital</span>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
