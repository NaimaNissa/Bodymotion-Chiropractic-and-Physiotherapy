import { MapPin, Users, Award } from "lucide-react";

const stats = [
  {
    number: "9",
    label: "Prime Locations",
    icon: MapPin,
  },
  {
    number: "120+",
    label: "World-class Specialists",
    icon: Users,
  },
  {
    number: "20+",
    label: "Years of Experience",
    icon: Award,
  },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="text-center bg-white rounded-xl p-6 sm:p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <Icon size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-base sm:text-lg md:text-xl text-gray-700 font-medium">
                  {stat.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

