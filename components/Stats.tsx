import { MapPin, Users, Award } from "lucide-react";

const stats = [
  {
    number: "9",
    label: "Prime Locations",
    icon: MapPin,
    bgColor: "bg-white",
    iconColor: "text-primary-700",
  },
  {
    number: "120+",
    label: "World-class Specialists",
    icon: Users,
    bgColor: "bg-green-50",
    iconColor: "text-primary-700",
  },
  {
    number: "20+",
    label: "Years of Experience",
    icon: Award,
    bgColor: "bg-blue-50",
    iconColor: "text-primary-700",
  },
];

export default function Stats() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className={`relative ${stat.bgColor} rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                {/* Icon in top right corner */}
                <div className={`absolute top-4 right-4 ${stat.iconColor}`}>
                  <Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                
                {/* Number */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-700 mb-3">
                  {stat.number}
                </div>
                
                {/* Label */}
                <div className="text-base sm:text-lg md:text-xl text-gray-600 font-medium">
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

