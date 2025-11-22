import Link from "next/link";
import { ArrowLeft, BookOpen, Heart, Dumbbell, Footprints } from "lucide-react";

const adviceHubs = [
  {
    title: "Running",
    description: "Tips for runners on injury prevention, training, and recovery",
    icon: Footprints,
    color: "primary",
  },
  {
    title: "Cycling",
    description: "Cycling-specific advice for performance and injury management",
    icon: Dumbbell,
    color: "secondary",
  },
  {
    title: "Women&apos;s Health",
    description: "Specialized care and advice for women&apos;s health concerns",
    icon: Heart,
    color: "accent",
  },
  {
    title: "Exercise is Medicine",
    description: "How physical activity can prevent and treat health conditions",
    icon: BookOpen,
    color: "primary",
  },
];

export default function AdvicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Advice & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert advice and insights to help you during the healing process,
            reduce pain, and lead a healthier life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {adviceHubs.map((hub, index) => {
            const Icon = hub.icon;
            const colorClasses = {
              primary: "bg-primary-100 text-primary-600",
              secondary: "bg-secondary-100 text-secondary-600",
              accent: "bg-accent-100 text-accent-600",
            };
            return (
              <div
                key={index}
                className="bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all"
              >
                <div
                  className={`w-12 h-12 ${colorClasses[hub.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {hub.title}
                </h3>
                <p className="text-gray-600 text-sm">{hub.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-primary-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Latest Articles
          </h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Understanding Lower Back Pain: Causes and Solutions
              </h3>
              <p className="text-gray-600 mb-3">
                Learn about the common causes of lower back pain and effective
                treatment options...
              </p>
              <Link
                href="#"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Read more →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Posture Correction: A Guide to Better Alignment
              </h3>
              <p className="text-gray-600 mb-3">
                Discover how proper posture can prevent pain and improve your
                overall health...
              </p>
              <Link
                href="#"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Read more →
              </Link>
            </div>
            <div className="bg-white rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Sports Injury Prevention: Tips for Active Individuals
              </h3>
              <p className="text-gray-600 mb-3">
                Essential strategies to prevent sports injuries and maintain peak
                performance...
              </p>
              <Link
                href="#"
                className="text-primary-600 hover:text-primary-700 font-medium"
              >
                Read more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

