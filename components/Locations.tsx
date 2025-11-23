import { MapPin, Clock, Accessibility } from "lucide-react";

const location = {
  name: "Bodymotion",
  address: "118A London Wall, Moorgate, City of London EC2Y 5JA, United Kingdom",
  hours: {
    weekdays: "7am – 8pm",
    friday: "7am – 6pm",
    saturday: "Closed",
    sunday: "Closed",
  },
  accessibility: "Step free access, accessible toilet and changing facilities",
};

export default function Locations() {
  return (
    <section id="locations" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal text-white mb-3 sm:mb-4 px-4">
                Our Location
              </h2>
              <p className="text-body sm:text-lg text-gray-200 max-w-3xl mx-auto px-4 font-normal uppercase tracking-wide">
            Visit our conveniently located clinic in the City of London.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-xl p-6 sm:p-8 border border-primary-200 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-3 sm:gap-4 mb-6">
              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin size={24} className="sm:w-7 sm:h-7" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  {location.name}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base">{location.address}</p>
              </div>
            </div>

            <div className="mb-6">
              <div className="flex items-center gap-2 text-gray-700 mb-3">
                <Clock size={18} />
                <span className="font-semibold text-base sm:text-lg">Opening Times</span>
              </div>
              <div className="text-sm sm:text-base text-gray-600 space-y-1 ml-7">
                <p>Monday – Thursday: {location.hours.weekdays}</p>
                <p>Friday: {location.hours.friday}</p>
                <p>Saturday: {location.hours.saturday}</p>
                <p>Sunday & Bank Holidays: {location.hours.sunday}</p>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2 text-gray-700 mb-2">
                <Accessibility size={18} />
                <span className="font-semibold text-base sm:text-lg">Accessibility</span>
              </div>
              <p className="text-sm sm:text-base text-gray-600 ml-7">
                {location.accessibility}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

