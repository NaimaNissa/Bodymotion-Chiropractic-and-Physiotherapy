import Link from "next/link";
import { ArrowLeft, User, Award, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Lead Chiropractor",
    specialty: "Spinal Adjustments & Postural Correction",
    experience: "15 years",
    image: "SM",
  },
  {
    name: "Dr. James Anderson",
    role: "Senior Physiotherapist",
    specialty: "Sports Rehabilitation & Injury Recovery",
    experience: "12 years",
    image: "JA",
  },
  {
    name: "Dr. Emily Chen",
    role: "Sports Medicine Specialist",
    specialty: "Athletic Performance & Injury Prevention",
    experience: "10 years",
    image: "EC",
  },
  {
    name: "Dr. Michael Brown",
    role: "Pain Management Consultant",
    specialty: "Chronic Pain & Musculoskeletal Disorders",
    experience: "18 years",
    image: "MB",
  },
];

export default function TeamPage() {
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

        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet our world-class specialists dedicated to helping you achieve
            optimal health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 bg-primary-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  {member.image}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-1">
                {member.name}
              </h3>
              <p className="text-primary-600 font-medium text-center mb-2">
                {member.role}
              </p>
              <p className="text-sm text-gray-600 text-center mb-3">
                {member.specialty}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Award size={16} />
                <span>{member.experience}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Want to join our team? Check out our careers page.
          </p>
          <Link
            href="/careers"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            View Careers
          </Link>
        </div>
      </div>
    </div>
  );
}

