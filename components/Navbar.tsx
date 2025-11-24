"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, ChevronDown } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showAboutDropdown, setShowAboutDropdown] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always use white background with shadow for visibility
  const navBg = "bg-white shadow-md";

  const navText = "text-gray-700";

  return (
    <nav className={`${navBg} fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : 'shadow-md'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 sm:h-24 md:h-28">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 hover-scale transition-transform duration-300">
              <Image
                src="/logo.png"
                alt="Bodymotion"
                width={200}
                height={60}
                className="h-12 sm:h-14 md:h-16 w-auto"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 flex-1 justify-center">
            <Link
              href="/#services"
              className={`${navText} hover:text-primary-600 px-3 py-2 text-sm font-medium transition`}
            >
              Services
            </Link>
            <Link
              href="/#locations"
              className={`${navText} hover:text-primary-600 px-3 py-2 text-sm font-medium transition`}
            >
              Locations
            </Link>
            <Link
              href="/team"
              className={`${navText} hover:text-primary-600 px-3 py-2 text-sm font-medium transition`}
            >
              Team
            </Link>
            <Link
              href="/advice"
              className={`${navText} hover:text-primary-600 px-3 py-2 text-sm font-medium transition`}
            >
              Advice
            </Link>
            <div 
              className="relative"
              onMouseEnter={() => setShowAboutDropdown(true)}
              onMouseLeave={() => setShowAboutDropdown(false)}
            >
              <button
                className={`${navText} hover:text-primary-600 px-3 py-2 text-sm font-medium transition flex items-center gap-1`}
              >
                About
                <ChevronDown size={16} />
              </button>
              {showAboutDropdown && (
                <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-xl py-2 min-w-[200px] z-50 animate-fade-in scale-in-on-scroll visible">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 transition-all duration-200 hover:translate-x-2"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/careers"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 transition-all duration-200 hover:translate-x-2"
                  >
                    Careers
                  </Link>
                  <Link
                    href="/contact"
                    className="block px-4 py-2 text-gray-700 hover:bg-primary-50 transition-all duration-200 hover:translate-x-2"
                  >
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Right Side - Phone & Book Now */}
          <div className="hidden lg:flex items-center gap-6">
                <a
                  href="tel:+442073742272"
                  className={`${navText} flex items-center gap-2 hover:text-primary-600 transition`}
                >
                  <Phone size={18} />
                  <span className="font-medium">+44 20 7374 2272</span>
                </a>
            <Link
              href="/book"
              className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-all duration-300 font-medium hover-lift hover-glow animate-pulse-slow"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${navText} hover:text-primary-600 focus:outline-none`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              href="/#services"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/#locations"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Locations
            </Link>
            <Link
              href="/#team"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/#advice"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Advice
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link
              href="/team"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Team
            </Link>
            <Link
              href="/advice"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Advice
            </Link>
            <Link
              href="/careers"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Careers
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Link>
                <a
                  href="tel:+442073742272"
                  className="text-gray-700 hover:text-primary-600 block px-3 py-2 text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone size={18} className="inline mr-2" />
                  +44 20 7374 2272
                </a>
            <Link
              href="/book"
              className="bg-primary-600 text-white block px-3 py-2 rounded-lg hover:bg-primary-700 transition font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
