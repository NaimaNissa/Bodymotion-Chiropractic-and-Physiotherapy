"use client";

import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-600 to-primary-800 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Start your journey to optimal health
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            Book a free 15-minute consultation. We&apos;ll help you understand what may
            be causing the pain and provide the guidance you need to get you back to your best.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book"
              className="bg-white text-primary-600 px-8 py-4 rounded-lg hover:bg-primary-50 transition font-semibold text-lg flex items-center gap-2"
            >
              Book Appointment
              <ArrowRight size={20} />
            </Link>
            <a
              href="tel:+442012345678"
              className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-primary-600 transition font-semibold text-lg flex items-center gap-2"
            >
              <Phone size={20} />
              Call Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
