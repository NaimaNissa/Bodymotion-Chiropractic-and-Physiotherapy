import Link from "next/link";
import { ArrowLeft, MapPin, Clock, Accessibility } from "lucide-react";
import Locations from "@/components/Locations";

export default function LocationsPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Locations
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conveniently located clinics across London, offering both
            face-to-face and remote consultations.
          </p>
        </div>

        <Locations />

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Book an Appointment
          </Link>
        </div>
      </div>
    </div>
  );
}

