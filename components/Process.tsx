import { Search, ClipboardCheck, Target, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnosis",
    description:
      "We identify the root cause of your issue through thorough assessment and expert evaluation.",
    icon: Search,
  },
  {
    number: "02",
    title: "Treatment",
    description:
      "A personalized treatment plan designed specifically for your needs and recovery goals.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Performance",
    description:
      "We help you reach your goals, whether that&apos;s returning to sport, work, or daily activities.",
    icon: Target,
  },
  {
    number: "04",
    title: "Prevention",
    description:
      "Long-term strategies to prevent future injuries and maintain your health and mobility.",
    icon: Shield,
  },
];

export default function Process() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-700 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal text-white mb-3 sm:mb-4 px-4">
            Your path to better health
          </h2>
          <p className="text-body sm:text-lg text-gray-200 max-w-3xl mx-auto px-4 font-normal">
            Our multidisciplinary approach ensures comprehensive care. We treat everyone with the same level of expertise and attention, helping you achieve your health goals.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const colorVariations = [
              { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", border: "border-blue-200" },
              { bg: "bg-green-50", icon: "bg-green-100 text-green-600", border: "border-green-200" },
              { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", border: "border-purple-200" },
              { bg: "bg-pink-50", icon: "bg-pink-100 text-pink-600", border: "border-pink-200" },
            ];
            const colors = colorVariations[index % colorVariations.length];
            
            return (
              <div
                key={index}
                className={`${colors.bg} rounded-xl p-6 border-2 ${colors.border} hover:shadow-xl transition-all duration-300`}
              >
                <div className="mb-4">
                  <div className={`w-14 h-14 ${colors.icon} rounded-lg flex items-center justify-center mb-4`}>
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="text-h4 font-normal text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-body text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
