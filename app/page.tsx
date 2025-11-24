"use client";

import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Stats from "@/components/Stats";
import Locations from "@/components/Locations";
import Insurance from "@/components/Insurance";
import CTA from "@/components/CTA";

export default function Home() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (window.scrollY / windowHeight) * 100;
      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    
    // Simulate page load animation
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  return (
    <main className="min-h-screen relative">
      {/* Scroll Progress Indicator */}
      <div 
        className="scroll-progress" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-primary-900 z-[100] flex items-center justify-center animate-fade-in">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-rotate-360 mb-4"></div>
            <p className="text-white text-lg font-medium animate-pulse-slow">Loading...</p>
          </div>
        </div>
      )}
      
      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${Math.random() * 10 + 15}s`,
            }}
          />
        ))}
      </div>

      <div className={`relative z-10 transition-opacity duration-1000 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <Hero />
        <WhyChooseUs />
        <Process />
        <Services />
        <Testimonials />
        <Stats />
        <Locations />
        <Insurance />
        <CTA />
      </div>
    </main>
  );
}
