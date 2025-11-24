"use client";

import { useState, useEffect, useRef } from "react";
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
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('[data-index]');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-700 to-primary-800 animated-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in-on-scroll visible">
              <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal text-white mb-3 sm:mb-4 px-4 text-reveal">
                Our Services
              </h2>
              <p className="text-body sm:text-lg text-gray-200 max-w-3xl mx-auto mb-6 sm:mb-8 px-4 font-normal slide-up-fade stagger-1">
                Expert care for recovery, performance, and prevention
              </p>
          <Link
            href="/book"
            className="inline-block text-primary-600 hover:text-primary-700 font-semibold hover:scale-110 transition-transform magnetic-hover"
          >
            See all →
          </Link>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colorVariations = [
              { bg: "bg-blue-50", icon: "bg-blue-100 text-blue-600", border: "border-blue-200" },
              { bg: "bg-green-50", icon: "bg-green-100 text-green-600", border: "border-green-200" },
              { bg: "bg-purple-50", icon: "bg-purple-100 text-purple-600", border: "border-purple-200" },
              { bg: "bg-pink-50", icon: "bg-pink-100 text-pink-600", border: "border-pink-200" },
              { bg: "bg-yellow-50", icon: "bg-yellow-100 text-yellow-600", border: "border-yellow-200" },
              { bg: "bg-teal-50", icon: "bg-teal-100 text-teal-600", border: "border-teal-200" },
              { bg: "bg-orange-50", icon: "bg-orange-100 text-orange-600", border: "border-orange-200" },
              { bg: "bg-indigo-50", icon: "bg-indigo-100 text-indigo-600", border: "border-indigo-200" },
            ];
            const colors = colorVariations[index % colorVariations.length];

            const isVisible = visibleItems.has(index);
            return (
              <Link
                key={index}
                href="/book"
                data-index={index}
                className={`group ${colors.bg} border-2 ${colors.border} rounded-xl p-6 hover:shadow-xl transition-all duration-500 hover-lift scale-in-on-scroll relative overflow-hidden ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div
                  className={`w-12 h-12 ${colors.icon} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-float relative z-10`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-h4 font-normal text-gray-900 mb-2 group-hover:text-secondary-700 transition-colors relative z-10">
                  {service.name}
                </h3>
                <p className="text-gray-600 text-body text-sm relative z-10">{service.description}</p>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
}

