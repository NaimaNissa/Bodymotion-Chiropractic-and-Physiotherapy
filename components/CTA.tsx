"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 px-4">
            Start your journey to optimal health
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
            Book a free 15-minute consultation. We&apos;ll help you understand what may
            be causing the pain and provide the guidance you need to get you back to your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <Link
              href="/book"
              className="bg-white text-primary-600 px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-primary-50 transition font-semibold text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              Book Appointment
              <ArrowRight size={18} className="sm:w-5 sm:h-5" />
            </Link>
            <a
              href="tel:+442012345678"
              className="border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg hover:bg-white hover:text-primary-600 transition font-semibold text-base sm:text-lg flex items-center justify-center gap-2 w-full sm:w-auto"
            >
              <Phone size={18} className="sm:w-5 sm:h-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
