"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

const testimonials = [
  {
    name: "Valerio",
    role: "Volleyball Player",
    content:
      "Wanting to avoid more time off court and surgery for a shoulder injury, Valerio employed the help of our multidisciplinary team. Although now finished with his rehab and back playing volleyball, he continues to prioritise strength and conditioning to avoid any future injuries.",
    story: "Valerio's Story",
  },
  {
    name: "Andrea",
    role: "Architect",
    content:
      "Desperate to avoid surgery for his back pain, Andrea employed the help of our multidisciplinary team, and after just a few, short months of hard work and dedication, surgery is no longer on the cards for Andrea!",
    story: "Andrea's Story",
  },
  {
    name: "Mauritzio",
    role: "Recovery Journey",
    content:
      "From his first appointment with a Consultant in Sport & Exercise Medicine, throughout his physiotherapy treatment, and then on to his Strength & Conditioning program, Mauritzio felt heavily involved in his treatment for a frozen shoulder following a road traffic accident.",
    story: "Mauritzio's Story",
  },
];

export default function Testimonials() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 px-4">
            Your personal best is our personal best
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gradient-to-br from-primary-100 to-primary-200 flex items-center justify-center">
                <div className="text-center p-6">
                  <div className="w-20 h-20 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 line-clamp-4">
                  {testimonial.content}
                </p>
                <Link
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-semibold flex items-center gap-2 group"
                >
                  {testimonial.story}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
