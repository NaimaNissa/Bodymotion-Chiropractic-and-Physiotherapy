"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Stethoscope, User, Plus, Calendar } from "lucide-react";

const services = [
  "Chiropractic Care",
  "Physiotherapy",
  "Sports Medicine",
  "Pain Management",
  "Postural Correction",
  "Rehabilitation",
];

const specialists = [
  "All Specialists",
  "Lars Ipsen",
  "Ben Glenister",
  "Emma Daniells",
  "Jack Finney",
  "Emma Young-Smith",
  "Clare Ryan",
];

export default function Hero() {
  const router = useRouter();
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [selectedSpecialist, setSelectedSpecialist] = useState<string | null>(null);
  const [showServiceDropdown, setShowServiceDropdown] = useState(false);
  const [showSpecialistDropdown, setShowSpecialistDropdown] = useState(false);

  const handleBook = () => {
    // Navigate to booking page with selected options as URL parameters
    const params = new URLSearchParams();
    if (selectedService) params.append("service", selectedService);
    if (selectedSpecialist) params.append("specialist", selectedSpecialist);
    
    const queryString = params.toString();
    router.push(`/book${queryString ? `?${queryString}` : ""}`);
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ backgroundColor: '#003d7a' }}>
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
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-32">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-h1 sm:text-[56px] md:text-[64px] lg:text-[72px] xl:text-[80px] font-normal text-white mb-4 sm:mb-6 px-2 leading-tight">
            Elite care{" "}
            <span className="text-secondary-300 block sm:inline">for everybody</span>
          </h1>
          <p className="text-body sm:text-lg md:text-xl text-white/90 max-w-3xl mx-auto px-4 uppercase tracking-wide font-normal">
            You don&apos;t have to be an athlete to be treated like one.
          </p>
        </div>

        {/* Booking Bar */}
        <div className="max-w-5xl mx-auto px-2 sm:px-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-full p-2 sm:p-3 shadow-2xl flex flex-col lg:flex-row items-stretch lg:items-center gap-2 sm:gap-3 relative z-50">
            {/* Select Service */}
            <div className="relative flex-1 w-full lg:w-auto">
              <button
                onClick={() => {
                  setShowServiceDropdown(!showServiceDropdown);
                  setShowSpecialistDropdown(false);
                }}
                className="w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-gray-50 rounded-xl sm:rounded-full transition text-sm sm:text-base"
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

            <Plus size={20} className="text-gray-400 hidden lg:block flex-shrink-0" />

            {/* Select Specialist */}
            <div className="relative flex-1 w-full lg:w-auto">
              <button
                onClick={() => {
                  setShowSpecialistDropdown(!showSpecialistDropdown);
                  setShowServiceDropdown(false);
                }}
                className="w-full flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 sm:py-4 text-left hover:bg-gray-50 rounded-xl sm:rounded-full transition text-sm sm:text-base"
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
              onClick={(e) => {
                e.stopPropagation();
                handleBook();
              }}
              className="w-full lg:w-auto bg-primary-600 hover:bg-primary-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-full font-semibold transition flex items-center justify-center gap-2 shadow-lg flex-shrink-0 text-sm sm:text-base z-50 relative"
            >
              <Calendar size={20} />
              Book
            </button>
          </div>
        </div>
      </div>

      {/* Click outside to close dropdowns */}
      {(showServiceDropdown || showSpecialistDropdown) && (
        <div
          className="fixed inset-0 z-40"
          onClick={(e) => {
            // Don't close if clicking on the booking bar
            if ((e.target as HTMLElement).closest('.bg-white\\/95')) {
              return;
            }
            setShowServiceDropdown(false);
            setShowSpecialistDropdown(false);
          }}
        />
      )}
    </section>
  );
}
