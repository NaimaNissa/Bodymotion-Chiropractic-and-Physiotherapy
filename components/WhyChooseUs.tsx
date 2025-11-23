import Image from "next/image";
import { Users, Award, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Our experienced specialists work together to create personalized treatment plans for you.",
  },
  {
    icon: Award,
    title: "Years of Experience",
    description:
      "Decades of combined experience in chiropractic care, physiotherapy, and sports medicine.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description:
      "Accepted by all major insurance providers with flexible self-pay options available.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal text-white mb-4 sm:mb-6">
              Expert care for everyone
            </h2>
            <p className="text-body sm:text-lg text-gray-200 mb-6 sm:mb-8 font-normal">
              At Bodymotion, we bring professional-grade chiropractic and physiotherapy care to help you move better, feel better, and live better.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl overflow-hidden flex items-center justify-center p-8">
              <div className="text-center">
                <Image
                  src="/logo.png"
                  alt="Bodymotion"
                  width={200}
                  height={200}
                  className="w-auto h-32 mx-auto mb-6"
                />
                <p className="text-primary-800 text-lg font-semibold">
                  Elite care for everybody
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colorVariations = [
              { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", border: "border-blue-200" },
              { bg: "bg-green-50", icon: "bg-green-100 text-green-600", border: "border-green-200" },
              { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", border: "border-purple-200" },
            ];
            const colors = colorVariations[index % colorVariations.length];
            
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon size={28} />
                </div>
                <h3 className="text-h4 font-normal text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-body">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
