"use client";

import { useState } from "react";
import { Search, Calendar, Clock, User, MapPin, Filter } from "lucide-react";
import Link from "next/link";

// Mock data for practitioners - in real app, this would come from Jane App API
const practitioners = [
  {
    id: 1,
    name: "Dr. Sarah Mitchell",
    specialty: "Chiropractic Care",
    image: "/api/placeholder/200/200",
    experience: "15 years",
    location: "Central London",
    availableSlots: ["Today 2:00 PM", "Tomorrow 10:00 AM", "Tomorrow 3:00 PM"],
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 2,
    name: "Dr. James Anderson",
    specialty: "Physiotherapy",
    image: "/api/placeholder/200/200",
    experience: "12 years",
    location: "Central London",
    availableSlots: ["Today 4:00 PM", "Tomorrow 11:00 AM"],
    rating: 4.8,
    reviews: 98,
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    specialty: "Sports Medicine",
    image: "/api/placeholder/200/200",
    experience: "10 years",
    location: "West London",
    availableSlots: ["Tomorrow 9:00 AM", "Tomorrow 2:00 PM"],
    rating: 5.0,
    reviews: 156,
  },
  {
    id: 4,
    name: "Dr. Michael Brown",
    specialty: "Pain Management",
    image: "/api/placeholder/200/200",
    experience: "18 years",
    location: "Central London",
    availableSlots: ["Today 3:00 PM", "Tomorrow 1:00 PM"],
    rating: 4.7,
    reviews: 203,
  },
];

const specialties = [
  "All Specialties",
  "Chiropractic Care",
  "Physiotherapy",
  "Sports Medicine",
  "Pain Management",
];

export default function BookingPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("All Specialties");
  const [selectedPractitioner, setSelectedPractitioner] = useState<number | null>(null);

  const filteredPractitioners = practitioners.filter((practitioner) => {
    const matchesSearch =
      practitioner.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      practitioner.specialty.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSpecialty =
      selectedSpecialty === "All Specialties" ||
      practitioner.specialty === selectedSpecialty;
    return matchesSearch && matchesSpecialty;
  });

  const handleBookAppointment = (practitionerId: number) => {
    // Open Jane App booking in new window/tab while maintaining current URL
    window.open(
      `https://bodymotion.janeapp.co.uk/online-booking?practitioner=${practitionerId}`,
      "_blank"
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <Link
            href="/"
            className="text-primary-600 hover:text-primary-700 mb-3 sm:mb-4 inline-block text-sm sm:text-base"
          >
            ← Back to Home
          </Link>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">
            Find Your Practitioner
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">
            Book an appointment with our expert team
          </p>
        </div>

        {/* Search and Filter */}
        <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 mb-6 sm:mb-8">
          <div className="grid sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search by name or specialty..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-sm sm:text-base"
              />
            </div>
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <select
                value={selectedSpecialty}
                onChange={(e) => setSelectedSpecialty(e.target.value)}
                className="w-full pl-10 pr-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent appearance-none bg-white text-sm sm:text-base"
              >
                {specialties.map((specialty) => (
                  <option key={specialty} value={specialty}>
                    {specialty}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="space-y-6">
          {filteredPractitioners.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <p className="text-gray-600 text-lg">
                No practitioners found matching your criteria.
              </p>
            </div>
          ) : (
            filteredPractitioners.map((practitioner) => (
              <div
                key={practitioner.id}
                className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Practitioner Image */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-32 bg-gradient-to-br from-primary-100 to-primary-200 rounded-lg flex items-center justify-center">
                      <User size={48} className="text-primary-600" />
                    </div>
                  </div>

                  {/* Practitioner Info */}
                  <div className="flex-grow">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                          {practitioner.name}
                        </h3>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-gray-600 mb-2 text-sm sm:text-base">
                          <span className="flex items-center gap-1">
                            <MapPin size={16} />
                            {practitioner.location}
                          </span>
                          <span>{practitioner.experience} experience</span>
                        </div>
                        <p className="text-primary-600 font-semibold mb-2">
                          {practitioner.specialty}
                        </p>
                        <div className="flex items-center gap-2">
                          <span className="text-yellow-500 font-semibold">
                            ★ {practitioner.rating}
                          </span>
                          <span className="text-gray-500">
                            ({practitioner.reviews} reviews)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Available Slots */}
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-gray-700 mb-2">
                        Available Appointments:
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {practitioner.availableSlots.map((slot, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-1 px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm"
                          >
                            <Clock size={14} />
                            {slot}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Book Button */}
                    <button
                      onClick={() => handleBookAppointment(practitioner.id)}
                      className="bg-primary-600 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-primary-700 transition font-semibold flex items-center justify-center gap-2 text-sm sm:text-base w-full sm:w-auto"
                    >
                      <Calendar size={18} className="sm:w-5 sm:h-5" />
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Alternative Booking Option */}
        <div className="mt-8 sm:mt-12 bg-primary-50 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Prefer to browse all available times?
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base px-4">
            Visit our full booking system to see all available appointments
          </p>
          <a
            href="https://bodymotion.janeapp.co.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-lg hover:bg-primary-700 transition font-semibold text-sm sm:text-base"
          >
            View Full Calendar
          </a>
        </div>
      </div>
    </div>
  );
}

