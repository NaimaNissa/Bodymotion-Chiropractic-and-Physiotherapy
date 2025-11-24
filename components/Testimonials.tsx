"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Marketing Director",
    location: "London",
    content:
      "I&apos;ve been dealing with chronic neck pain from long hours at my desk. The team at Bodymotion didn&apos;t just treat my symptoms—they helped me understand my posture and gave me practical exercises. Now I can work comfortably all day without that nagging discomfort.",
    story: "Read Sarah's Story",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "James Mitchell",
    role: "Personal Trainer",
    location: "London",
    content:
      "As a fitness professional, I need my body to perform at its best. When I injured my lower back during training, Bodymotion&apos;s approach was exactly what I needed. They combined chiropractic adjustments with targeted physiotherapy, and I was back to training clients within weeks.",
    story: "Read James's Story",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Emma Chen",
    role: "Yoga Instructor",
    location: "London",
    content:
      "I thought my hip pain was just part of getting older, but the team showed me it didn&apos;t have to be. Their holistic approach addressed the root cause, and now I can teach my classes without any limitations. The care I received was truly transformative.",
    story: "Read Emma's Story",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
  },
];

export default function Testimonials() {
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
      { threshold: 0.1 }
    );

    const elements = sectionRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-700 to-primary-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 fade-in-on-scroll visible">
              <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal text-white mb-4 px-4 text-reveal">
                Patient Success Stories
              </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => {
            const isVisible = visibleItems.has(index);
            return (
            <div
              key={index}
              data-index={index}
              className={`bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-xl transition-all duration-500 hover-lift scale-in-on-scroll ${isVisible ? 'visible' : ''}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Image Section */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 group">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={16}
                      className="fill-yellow-400 text-yellow-400 animate-pulse-slow"
                      style={{ animationDelay: `${i * 100}ms` }}
                    />
                  ))}
                </div>
                
                {/* Testimonial Text */}
                <p className="text-gray-700 mb-4 text-sm leading-relaxed line-clamp-4">
                  &quot;{testimonial.content}&quot;
                </p>
                
                {/* Author Info */}
                <div className="border-t border-gray-100 pt-4 mb-4">
                  <h3 className="text-h5 font-medium text-gray-900 mb-1">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {testimonial.role} • {testimonial.location}
                  </p>
                </div>
                
                {/* Read More Link */}
                <Link
                  href="#"
                  className="text-primary-600 hover:text-primary-700 font-medium text-sm flex items-center gap-2 group"
                >
                  {testimonial.story}
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-2 transition-transform duration-300"
                  />
                </Link>
              </div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
