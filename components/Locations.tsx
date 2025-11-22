import { MapPin, Clock, Accessibility } from "lucide-react";

const locations = [
  {
    name: "Central London",
    address: "123 Health Street, London WC1A 1AA",
    hours: {
      weekdays: "7am – 8pm",
      friday: "7am – 6pm",
      saturday: "Closed",
      sunday: "Closed",
    },
    accessibility: "Step free access, accessible toilet and changing facilities",
  },
  {
    name: "West London",
    address: "456 Wellness Road, London W1K 2AB",
    hours: {
      weekdays: "7:30am – 8pm",
      friday: "7:30am – 6pm",
      saturday: "8:30am – 3pm",
      sunday: "Closed",
    },
    accessibility: "Ramp access, accessible toilet, gym facilities",
  },
  {
    name: "North London",
    address: "789 Care Avenue, London N1 3CD",
    hours: {
      weekdays: "8am – 7pm",
      friday: "8am – 6pm",
      saturday: "9am – 2pm",
      sunday: "Closed",
    },
    accessibility: "Fully accessible with lift access",
  },
];

export default function Locations() {
  return (
    <section id="locations" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Our Locations
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Conveniently located clinics across London, offering both face-to-face
            and remote consultations.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {locations.map((location, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {location.name}
                  </h3>
                  <p className="text-gray-600 text-sm">{location.address}</p>
                </div>
              </div>

              <div className="mb-4">
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <Clock size={16} />
                  <span className="font-semibold">Opening Times</span>
                </div>
                <div className="text-sm text-gray-600 space-y-1 ml-6">
                  <p>Monday – Thursday: {location.hours.weekdays}</p>
                  <p>Friday: {location.hours.friday}</p>
                  <p>Saturday: {location.hours.saturday}</p>
                  <p>Sunday & Bank Holidays: {location.hours.sunday}</p>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 text-gray-700 mb-2">
                  <Accessibility size={16} />
                  <span className="font-semibold">Accessibility</span>
                </div>
                <p className="text-sm text-gray-600 ml-6">
                  {location.accessibility}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

