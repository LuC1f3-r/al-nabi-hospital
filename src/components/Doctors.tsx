import { useState } from "react";
import { MapPin } from "lucide-react";

type DoctorCategory = "main" | "visiting" | "management";

const Doctors = () => {
  const [activeCategory, setActiveCategory] = useState<DoctorCategory>("main");
  const [visibleCount, setVisibleCount] = useState(4);

  const doctors: Record<DoctorCategory, {
    name: string;
    specialization: string;
    image: string;
    availability: string;
    department: string;
  }[]> = {
    main: [
      {
        name: "Dr. Jilani Awati",
        specialization: "MS General Surgery & Laparoscopic Surgeon",
        image:
          "https://images.pexels.com/photos/6749776/pexels-photo-6749776.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "surgery",
      },
      {
        name: "Dr. Osama Awati",
        specialization: "MBBS",
        image:
          "https://images.pexels.com/photos/6749761/pexels-photo-6749761.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "general",
      },
    ],
    visiting: [
      {
        name: "Dr. Bilal Abdullah",
        specialization: "MD General Medicine",
        image:
          "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "general-medicine",
      },
      {
        name: "Dr. Azmat",
        specialization: "Plastic Surgeon",
        image:
          "https://images.pexels.com/photos/6749768/pexels-photo-6749768.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "plastic-surgery",
      },
      {
        name: "Dr. Asma Jahagirdar",
        specialization: "DA Anaesthesia",
        image:
          "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "anaesthesia",
      },
      {
        name: "Dr. Tahir",
        specialization: "DA Anaesthesia",
        image:
          "https://images.pexels.com/photos/6749763/pexels-photo-6749763.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "anaesthesia",
      },
      {
        name: "Dr. Nishikant Gujar",
        specialization: "MS General Surgery",
        image:
          "https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "surgery",
      },
      {
        name: "Dr. Meenal Aggarwal",
        specialization: "MD Anaesthesia",
        image:
          "https://images.pexels.com/photos/5327656/pexels-photo-5327656.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "anaesthesia",
      },
      {
        name: "Dr. Swaleha",
        specialization: "MS Gynaecologist",
        image:
          "https://images.pexels.com/photos/6749762/pexels-photo-6749762.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "gynaecology",
      },
      {
        name: "Dr. Surendra Aggarwal",
        specialization: "MCh Pediatric Surgeon",
        image:
          "https://images.pexels.com/photos/6749765/pexels-photo-6749765.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "pediatrics",
      },
      {
        name: "Dr. Rizwan",
        specialization: "MD Pediatrics",
        image:
          "https://images.pexels.com/photos/6749764/pexels-photo-6749764.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "pediatrics",
      },
      {
        name: "Dr. Yitendra Nayak",
        specialization: "MCh Neurosurgery",
        image:
          "https://images.pexels.com/photos/6749766/pexels-photo-6749766.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "neurosurgery",
      },
      {
        name: "Dr. Soumya",
        specialization: "MD Psychiatrist",
        image:
          "https://images.pexels.com/photos/6749767/pexels-photo-6749767.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "psychiatry",
      },
      {
        name: "Dr. Ravindra Kulkarni",
        specialization: "MS Ortho & Spine Surgeon",
        image:
          "https://images.pexels.com/photos/6749768/pexels-photo-6749768.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Available",
        department: "orthopedics",
      },
    ],
    management: [
      {
        name: "Umarfarook Gundagi",
        specialization: "Manager",
        image:
          "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Office Hours",
        department: "management",
      },
      {
        name: "Abdul Razak Aliyabadi",
        specialization: "Administrator",
        image:
          "https://images.pexels.com/photos/3779705/pexels-photo-3779705.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Office Hours",
        department: "management",
      },
      {
        name: "Azlan Awati",
        specialization: "Administrator",
        image:
          "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=400",
        availability: "Office Hours",
        department: "management",
      },
    ],
  };

  const categories = [
    { id: "main", label: "Main Doctors" },
    { id: "visiting", label: "Visiting Doctors" },
    { id: "management", label: "Management" },
  ];

  const currentDoctors = doctors[activeCategory] || [];
  const visibleDoctors = currentDoctors.slice(0, visibleCount);

  const handleSeeMore = () => {
    setVisibleCount((prev) => prev + 3);
  };

  const changeCategory = (id: DoctorCategory) => {
    setActiveCategory(id);
    setVisibleCount(3);
  };

  return (
    <section id="doctors" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#004F74] mb-4">
            Our Medical Team
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our dedicated team of healthcare professionals committed to
            providing exceptional care.
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex justify-center mb-12">
          <div className="bg-[#F6FAFD] p-2 rounded-full">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => changeCategory(category.id as DoctorCategory)}
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
        <div className="flex flex-wrap justify-center gap-8">
          {visibleDoctors.map((doctor: any, index: number) => (
            <div
              key={index}
              className="w-72 bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
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
          ))}
        </div>

        {/* See More Button */}
        {visibleCount < currentDoctors.length && (
          <div className="flex justify-center mt-8">
            <button
              onClick={handleSeeMore}
              className="px-6 py-2 bg-[#007BBA] text-white rounded-full hover:bg-[#005f8c] transition-all duration-300"
            >
              See More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Doctors;
