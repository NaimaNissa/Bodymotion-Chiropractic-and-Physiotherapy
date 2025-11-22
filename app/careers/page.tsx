import Link from "next/link";
import { ArrowLeft, Briefcase, MapPin, Clock } from "lucide-react";

const jobOpenings = [
  {
    title: "Senior Chiropractor",
    location: "Central London",
    type: "Full-time",
    department: "Clinical",
  },
  {
    title: "Physiotherapist",
    location: "West London",
    type: "Full-time",
    department: "Clinical",
  },
  {
    title: "Receptionist",
    location: "Multiple Locations",
    type: "Part-time",
    department: "Administration",
  },
  {
    title: "Sports Medicine Specialist",
    location: "Central London",
    type: "Full-time",
    department: "Clinical",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-8"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Careers at Bodymotion
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join our team of world-class specialists and help us provide elite
            care for everybody
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Why Work With Us</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Professional Development
              </h3>
              <p className="text-gray-700">
                Continuous learning opportunities and support for professional
                growth.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Competitive Benefits
              </h3>
              <p className="text-gray-700">
                Comprehensive benefits package including health insurance and
                pension.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Collaborative Environment
              </h3>
              <p className="text-gray-700">
                Work alongside experienced professionals in a supportive team
                setting.
              </p>
            </div>
            <div className="bg-primary-50 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Impact Lives
              </h3>
              <p className="text-gray-700">
                Make a real difference in patients&apos; lives every day.
              </p>
            </div>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Current Openings
          </h2>
          <div className="space-y-4">
            {jobOpenings.map((job, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-2">
                        <MapPin size={16} />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock size={16} />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Briefcase size={16} />
                        <span>{job.department}</span>
                      </div>
                    </div>
                  </div>
                  <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition font-medium">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary-50 rounded-xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Don&apos;t see a role that fits?
          </h3>
          <p className="text-gray-700 mb-6">
            We&apos;re always looking for talented individuals. Send us your CV
            and we&apos;ll keep you in mind for future opportunities.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </div>
  );
}

