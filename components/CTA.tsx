"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-700 to-primary-900 text-white relative overflow-hidden animated-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal mb-3 sm:mb-4 px-4 text-reveal">
            Start your journey to optimal health
          </h2>
          <p className="text-body sm:text-lg text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 uppercase tracking-wide font-normal slide-up-fade stagger-1">
            Book a free 15-minute consultation. We&apos;ll help you understand what may
            be causing the pain and provide the guidance you need to get you back to your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/book"
              className="bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-primary-50 transition-all duration-300 font-semibold text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto hover-lift hover-glow animate-pulse-slow"
            >
              Book Appointment
              <ArrowRight size={18} className="sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href="tel:+442073742272"
              className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-white hover:text-primary-600 transition-all duration-300 font-semibold text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto hover-lift"
            >
              <Phone size={18} className="sm:w-5 sm:h-5 animate-bounce-slow" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
