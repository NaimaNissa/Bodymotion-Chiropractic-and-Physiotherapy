import Image from "next/image";
import { Users, Award, Shield } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Expert Team",
    description:
      "Work with a dedicated team of specialists, tailored to meet your specific needs and goals.",
  },
  {
    icon: Award,
    title: "Years of Experience",
    description:
      "We combine over 1,000 years of expert experience in musculoskeletal healthcare and elite sport.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description:
      "We are covered by all major insurers and also offer flexible self-pay options for added convenience.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
              Your body is your most important investment, and it deserves more
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8">
              Your body is your most important investment. Yet all too often it is not receiving the care it needs, and in most cases a lack of access is the root cause. Bodymotion is here to change that by providing the highest standards of medical care historically limited to professional athletes, so that more people can live an active and healthy life.
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
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                  <Icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
