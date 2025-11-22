"use client";

import Link from "next/link";
import {
  Activity,
  Heart,
  Bone,
  Brain,
  Footprints,
  Stethoscope,
  Dumbbell,
  Sparkles,
} from "lucide-react";

const services = [
  {
    name: "Chiropractic Care",
    description: "Expert spinal adjustments and musculoskeletal treatment",
    icon: Bone,
    color: "primary",
  },
  {
    name: "Physiotherapy",
    description: "Rehabilitation and movement therapy for recovery",
    icon: Activity,
    color: "secondary",
  },
  {
    name: "Sports Medicine",
    description: "Specialized care for athletes and active individuals",
    icon: Dumbbell,
    color: "accent",
  },
  {
    name: "Pain Management",
    description: "Comprehensive pain relief and management strategies",
    icon: Heart,
    color: "primary",
  },
  {
    name: "Postural Correction",
    description: "Improve posture and prevent future injuries",
    icon: Brain,
    color: "secondary",
  },
  {
    name: "Rehabilitation",
    description: "Recovery programs tailored to your needs",
    icon: Footprints,
    color: "accent",
  },
  {
    name: "Wellness Consultations",
    description: "Holistic approach to your health and wellbeing",
    icon: Stethoscope,
    color: "primary",
  },
  {
    name: "Preventive Care",
    description: "Stay ahead of injuries with proactive treatment",
    icon: Sparkles,
    color: "secondary",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-4">
            Start your journey to optimal health
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
            Comprehensive services designed to help you recover, perform, and
            prevent injuries
          </p>
          <Link
            href="/book"
            className="inline-block text-primary-600 hover:text-primary-700 font-semibold"
          >
            See all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorClasses = {
              primary: "bg-primary-100 text-primary-600",
              secondary: "bg-secondary-100 text-secondary-600",
              accent: "bg-accent-100 text-accent-600",
            };

            return (
              <Link
                key={index}
                href="/book"
                className="group bg-white border-2 border-gray-100 rounded-xl p-6 hover:border-primary-300 hover:shadow-lg transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 ${colorClasses[service.color as keyof typeof colorClasses]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-600 transition">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

