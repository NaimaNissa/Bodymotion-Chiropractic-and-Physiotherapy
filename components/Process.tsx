import { Search, ClipboardCheck, Target, Shield } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Diagnosis",
    description:
      "Speed and accuracy are key. Only with a correct diagnosis can you receive the care your body truly needs. We get to the heart of your issue at the very start with our experienced team of experts.",
    icon: Search,
  },
  {
    number: "02",
    title: "Treatment",
    description:
      "Tailored to you. With the right diagnosis in hand, our team of specialists collaborate on a personalised plan designed for pain relief, manage a pre-existing injury, or simply improve your overall lifestyle.",
    icon: ClipboardCheck,
  },
  {
    number: "03",
    title: "Performance",
    description:
      "Your personal best is our personal best. Performance may look different to everyone, but it all comes down to improving your ability. Drawing from our broad range of specialisms, we guide you from where you are today, to where you want to be tomorrow.",
    icon: Target,
  },
  {
    number: "04",
    title: "Prevention",
    description:
      "Lifestyle changes that last. Helping you take a proactive approach to your body is a key part of our mission. That&apos;s why we provide specific preventative care to ensure that you maintain optimal functionality, get ahead of future injuries, and continue to thrive.",
    icon: Shield,
  },
];

export default function Process() {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            When it comes to your health, it&apos;s all connected
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-3 sm:mb-4 px-4">
            We&apos;ve brought together a multidisciplinary team of clinicians to offer breadth and depth of expertise. We apply our experience of working with elite sports teams and individuals to everybody, because if there&apos;s one thing we stand by, it&apos;s that you don&apos;t have to be an athlete to be treated like one.
          </p>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto px-4">
            Whatever you are dealing with, it is not an isolated issue and, therefore, it should not be dealt with in isolation. This is why we look at the complete picture, starting with a correct diagnosis to lead us to the right treatment that your body needs. From here, we&apos;ll build your tailored team around you to get you back to your best, doing the things you love and performing optimally whilst helping you prevent a recurrence or any future issues.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">
                  <div className="w-14 h-14 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
