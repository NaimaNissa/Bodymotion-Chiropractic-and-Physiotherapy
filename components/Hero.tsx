"use client";

import { useState } from "react";
import { Stethoscope, MapPin, User, Plus, Calendar } from "lucide-react";

const services = [
  "Chiropractic Care",
  "Physiotherapy",
  "Sports Medicine",
  "Pain Management",
  "Postural Correction",
  "Rehabilitation",
];

const clinics = [
  "Central London",
  "West London",
  "North London",
  "South London",
];

const specialists = [
  "All Specialists",
  "Dr. Sarah Mitchell",
  "Dr. James Anderson",
  "Dr. Emily Chen",
  "Dr. Michael Brown",
];

export default function Hero() {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedClinic, setSelectedClinic] = useState<string | null>(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showClinicDropdown, setShowClinicDropdown] = useState(false);
  const [showSpecialistDropdown, setShowSpecialistDropdown] = useState(false);

  const handleBook = () => {
    const params = new URLSearchParams();
    if (selectedService) params.append("service", selectedService);
    if (selectedClinic) params.append("clinic", selectedClinic);
    if (selectedSpecialist) params.append("specialist", selectedSpecialist);
    
    window.open(
      `https://bodymotion.janeapp.co.uk/online-booking?${params.toString()}`,
      "_blank"
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#00578d' }}>
      {/* Background Video with Overlay */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            filter: 'blur(2px)',
            transform: 'scale(1.05)',
          }}
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700/85 via-primary-600/80 to-secondary-700/85 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Elite care{" "}
            <span className="text-secondary-300">for everybody</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
            You don&apos;t have to be an athlete to be treated like one.
          </p>
        </div>

        {/* Booking Bar */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2">
            {/* Select Service */}
            <div className="relative flex-1 w-full lg:w-auto">
              <button
                onClick={() => {
                  setShowServiceDropdown(!showServiceDropdown);
                  setShowClinicDropdown(false);
                  setShowSpecialistDropdown(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-gray-50 rounded-full transition"
              >
                <Stethoscope size={20} className="text-primary-600 flex-shrink-0" />
                <span className="flex-1 text-gray-700 font-medium">
                  {selectedService || "Select a Service"}
                </span>
              </button>
              {showServiceDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 max-h-64 overflow-y-auto">
                  {services.map((service) => (
                    <button
                      key={service}
                      onClick={() => {
                        setSelectedService(service);
                        setShowServiceDropdown(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-primary-50 transition text-gray-700 first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Plus size={24} className="text-gray-400 hidden lg:block flex-shrink-0" />

            {/* Select Clinic */}
            <div className="relative flex-1 w-full lg:w-auto">
              <button
                onClick={() => {
                  setShowClinicDropdown(!showClinicDropdown);
                  setShowServiceDropdown(false);
                  setShowSpecialistDropdown(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-gray-50 rounded-full transition"
              >
                <MapPin size={20} className="text-primary-600 flex-shrink-0" />
                <span className="flex-1 text-gray-700 font-medium">
                  {selectedClinic || "Select a Clinic"}
                </span>
              </button>
              {showClinicDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50">
                  {clinics.map((clinic) => (
                    <button
                      key={clinic}
                      onClick={() => {
                        setSelectedClinic(clinic);
                        setShowClinicDropdown(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-primary-50 transition text-gray-700 first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      {clinic}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <Plus size={24} className="text-gray-400 hidden lg:block flex-shrink-0" />

            {/* Select Specialist */}
            <div className="relative flex-1 w-full lg:w-auto">
              <button
                onClick={() => {
                  setShowSpecialistDropdown(!showSpecialistDropdown);
                  setShowServiceDropdown(false);
                  setShowClinicDropdown(false);
                }}
                className="w-full flex items-center gap-3 px-6 py-4 text-left hover:bg-gray-50 rounded-full transition"
              >
                <User size={20} className="text-primary-600 flex-shrink-0" />
                <span className="flex-1 text-gray-700 font-medium">
                  {selectedSpecialist || "Select a Specialist"}
                </span>
              </button>
              {showSpecialistDropdown && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl z-50 max-h-64 overflow-y-auto">
                  {specialists.map((specialist) => (
                    <button
                      key={specialist}
                      onClick={() => {
                        setSelectedSpecialist(specialist);
                        setShowSpecialistDropdown(false);
                      }}
                      className="w-full px-6 py-3 text-left hover:bg-primary-50 transition text-gray-700 first:rounded-t-2xl last:rounded-b-2xl"
                    >
                      {specialist}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Book Button */}
            <button
              onClick={handleBook}
              className="w-full lg:w-auto bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold transition flex items-center justify-center gap-2 shadow-lg flex-shrink-0"
            >
              <Calendar size={20} />
              Book
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showServiceDropdown || showClinicDropdown || showSpecialistDropdown) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setShowServiceDropdown(false);
            setShowClinicDropdown(false);
            setShowSpecialistDropdown(false);
          }}
        />
      )}
    </section>
  );
}
