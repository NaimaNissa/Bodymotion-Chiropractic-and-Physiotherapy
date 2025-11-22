import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  services: [
    "Chiropractic Care",
    "Physiotherapy",
    "Sports Medicine",
    "Pain Management",
    "Postural Correction",
    "Rehabilitation",
  ],
  company: ["About Us", "Our Team", "Locations", "Careers", "Contact Us"],
  resources: ["Blog", "Advice", "Patient Information", "FAQs", "Privacy Policy"],
};

const insuranceProviders = [
  "Bupa",
  "AXA Health",
  "Vitality",
  "WPA",
  "Aviva",
  "Healix",
  "Health Partners",
  "United Healthcare",
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Insurance Providers Bar */}
      <div className="bg-primary-800 py-4 sm:py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">
            {insuranceProviders.map((provider, index) => (
              <div
                key={index}
                className="text-white/80 font-semibold text-xs sm:text-sm hover:text-white transition"
              >
                {provider}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <Image
              src="/logo.png"
              alt="Bodymotion"
              width={150}
              height={40}
              className="h-10 w-auto mb-4 brightness-0 invert"
            />
            <p className="mb-4 text-gray-400 text-sm sm:text-base">
              Elite care for everybody. Expert chiropractic and physiotherapy
              services to help you live an active and healthy life.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gray-400">
                <Phone size={16} />
                <a href="tel:+442012345678" className="hover:text-white">
                  +44 20 1234 5678
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Mail size={16} />
                <a href="mailto:info@bodymotion.co.uk" className="hover:text-white">
                  info@bodymotion.co.uk
                </a>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={16} />
                <span>London, UK</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Popular Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.slice(0, 4).map((link, index) => (
                <li key={index}>
                  <Link href="/book" className="hover:text-white transition text-gray-400">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-white transition text-gray-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/team" className="hover:text-white transition text-gray-400">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/locations" className="hover:text-white transition text-gray-400">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition text-gray-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition text-gray-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="hover:text-white transition text-gray-400">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/advice" className="hover:text-white transition text-gray-400">
                  Advice
                </Link>
              </li>
              <li>
                <Link href="/patient-information" className="hover:text-white transition text-gray-400">
                  Patient Information
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="hover:text-white transition text-gray-400">
                  FAQs
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-white transition text-gray-400">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} Bodymotion Chiropractic and
              Physiotherapy. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white transition">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition">
                Cookie Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
