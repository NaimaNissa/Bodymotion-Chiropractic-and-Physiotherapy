"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { HelpCircle, ChevronLeft, ChevronRight } from "lucide-react";

// Insurance provider logos - styled with different designs
const insuranceProviders = [
  {
    name: "BUPA",
    logo: (
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 border-3 border-white rounded-lg flex items-center justify-center">
          <div className="w-8 h-8 bg-white rounded-sm"></div>
        </div>
        <span className="text-2xl sm:text-3xl font-bold text-white tracking-tight">BUPA</span>
      </div>
    ),
  },
  {
    name: "AXA Health",
    logo: (
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
            <span className="text-primary-800 font-extrabold text-lg">AXA</span>
          </div>
        </div>
        <span className="text-xl sm:text-2xl font-light text-white">Health</span>
      </div>
    ),
  },
  {
    name: "Vitality",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-3 h-8 bg-white rounded-full"></div>
        <span className="text-2xl sm:text-3xl font-semibold text-white uppercase tracking-wide">
          Vitality
        </span>
      </div>
    ),
  },
  {
    name: "WPA",
    logo: (
      <div className="flex flex-col items-center">
        <div className="w-16 h-1 bg-white mb-2"></div>
        <span className="text-3xl sm:text-4xl font-black text-white tracking-widest">WPA</span>
        <div className="w-16 h-1 bg-white mt-2"></div>
      </div>
    ),
  },
  {
    name: "Aviva",
    logo: (
      <div className="flex items-center gap-3">
        <div className="flex flex-col gap-1">
          <div className="w-6 h-1 bg-white"></div>
          <div className="w-4 h-1 bg-white"></div>
          <div className="w-6 h-1 bg-white"></div>
        </div>
        <span className="text-2xl sm:text-3xl font-medium text-white">Aviva</span>
      </div>
    ),
  },
  {
    name: "Healix",
    logo: (
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 border-2 border-white rotate-45 flex items-center justify-center">
          <span className="text-white font-bold text-sm -rotate-45">H</span>
        </div>
        <span className="text-2xl sm:text-3xl font-semibold text-white">Healix</span>
      </div>
    ),
  },
  {
    name: "Health Partners",
    logo: (
      <div className="flex items-center gap-3">
        <div className="grid grid-cols-2 gap-1">
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-4 h-4 bg-white rounded-sm"></div>
          <div className="w-4 h-4 bg-white rounded-sm"></div>
        </div>
        <div className="flex flex-col">
          <span className="text-lg sm:text-xl font-bold text-white">Health</span>
          <span className="text-lg sm:text-xl font-bold text-white">Partners</span>
        </div>
      </div>
    ),
  },
  {
    name: "United Healthcare",
    logo: (
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="w-10 h-10 border-2 border-white flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white"></div>
          </div>
        </div>
        <div className="flex flex-col">
          <span className="text-base sm:text-lg font-semibold text-white leading-tight">United</span>
          <span className="text-base sm:text-lg font-semibold text-white leading-tight">Healthcare</span>
        </div>
      </div>
    ),
  },
];

const faqs = [
  {
    question: "How do I book an appointment using my private medical insurance?",
    answer:
      "You can book online, over the phone, via email or by using our live chat option in the bottom right corner of our website.",
  },
  {
    question: "What information do I need to provide?",
    answer:
      "When booking an appointment, all you need to provide us with is the name of your insurer, your membership details, the authorisation code and how many appointments your insurer has agreed to cover.",
  },
  {
    question: "Will you invoice directly to my insurer?",
    answer:
      "Yes, we can invoice directly to your insurer as long as they are an insurer that we work with directly. We currently directly invoice Bupa, AXA PPP, Vitality, WPA, Aviva and Healix but please let us know if you are covered by another insurer as we may still work with them.",
  },
  {
    question: "Which services are covered?",
    answer:
      "Chiropractic Care, Physiotherapy, Sports Medicine, Pain Management, Postural Correction, and Rehabilitation are covered by private medical insurance. However, some wellness services may not be covered. It's always best to confirm with your insurer before booking an appointment.",
  },
];

export default function Insurance() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate slideshow
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % Math.ceil(insuranceProviders.length / 3));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(insuranceProviders.length / 3)) % Math.ceil(insuranceProviders.length / 3));
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(insuranceProviders.length / 3));
  };

  // Group providers into slides of 3
  const slides: typeof insuranceProviders[] = [];
  for (let i = 0; i < insuranceProviders.length; i += 3) {
    slides.push(insuranceProviders.slice(i, i + 3));
  }

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-primary-800 to-primary-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-h2 sm:text-[36px] md:text-[40px] lg:text-[44px] font-normal text-white mb-3 sm:mb-4 px-4">
            Your health cover
          </h2>
          <p className="text-body sm:text-lg text-gray-200 max-w-3xl mx-auto px-4 font-normal">
            We accept all major insurance providers. See our FAQs for booking information.
          </p>
        </div>

        {/* Insurance Logos Slideshow */}
        <div className="mb-12 sm:mb-16 relative">
          <div 
            className="bg-primary-800 rounded-xl p-8 sm:p-12 md:p-16 overflow-hidden relative"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* Slides Container */}
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {slides.map((slide, slideIndex) => (
                <div
                  key={slideIndex}
                  className="min-w-full flex-shrink-0"
                >
                  <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16 lg:gap-20">
                    {slide.map((provider, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity"
                      >
                        {provider.logo}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            {slides.length > 1 && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10"
                  aria-label="Previous slide"
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-all z-10"
                  aria-label="Next slide"
                >
                  <ChevronRight size={24} />
                </button>

                {/* Slide Indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`h-2 rounded-full transition-all ${
                        index === currentSlide
                          ? "w-8 bg-white"
                          : "w-2 bg-white/50 hover:bg-white/75"
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* FAQs */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition cursor-pointer"
              >
                <summary className="font-semibold text-gray-900 flex items-center gap-2 list-none">
                  <HelpCircle size={20} className="text-primary-600" />
                  {faq.question}
                </summary>
                <p className="mt-4 text-gray-600 pl-7">{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="#"
              className="text-primary-600 hover:text-primary-700 font-semibold"
            >
              Read our FAQs →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

