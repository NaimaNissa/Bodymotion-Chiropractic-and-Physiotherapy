"use client";

import { useState, useEffect, useRef } from "react";
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
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute('data-index');
            if (index !== null) {
              setVisibleItems((prev) => new Set([...prev, parseInt(index)]));
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            const isVisible = visibleItems.has(index);
            return (
              <div
                key={index}
                data-index={index}
                className={`relative ${stat.bgColor} rounded-xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-500 hover-lift scale-in-on-scroll ${isVisible ? 'visible' : ''}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Icon in top right corner */}
                <div className={`absolute top-4 right-4 ${stat.iconColor} hover-scale transition-transform animate-float`} style={{ animationDelay: `${index * 200}ms` }}>
                  <Icon size={28} className="sm:w-8 sm:h-8" />
                </div>
                
                {/* Number */}
                <div className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary-700 mb-3 animate-pulse-slow">
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

