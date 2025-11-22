import Link from "next/link";
import { ArrowLeft, FileText } from "lucide-react";

export default function TermsPage() {
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
          <div className="w-16 h-16 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-gray-600">Last updated: March 2024</p>
        </div>

        <div className="prose prose-lg max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Acceptance of Terms
            </h2>
            <p className="text-gray-700">
              By accessing and using Bodymotion Chiropractic and Physiotherapy&apos;s
              services, you accept and agree to be bound by these Terms and
              Conditions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Services
            </h2>
            <p className="text-gray-700 mb-4">
              We provide chiropractic and physiotherapy services. All treatments
              are provided by qualified and registered practitioners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Appointments
            </h2>
            <p className="text-gray-700 mb-4">
              Appointments can be booked online, by phone, or in person. We
              require 24 hours&apos; notice for cancellations to avoid charges.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment</h2>
            <p className="text-gray-700">
              Payment is due at the time of service unless prior arrangements
              have been made. We accept cash, card, and most major insurance
              providers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Limitation of Liability
            </h2>
            <p className="text-gray-700">
              While we strive to provide the best possible care, we cannot
              guarantee specific outcomes. Our liability is limited to the cost
              of the treatment provided.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

