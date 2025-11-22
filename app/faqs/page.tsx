import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import Insurance from "@/components/Insurance";

export default function FAQsPage() {
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
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about our services, appointments,
            and insurance coverage.
          </p>
        </div>

        <Insurance />

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            General Questions
          </h2>
          <div className="space-y-4">
            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition cursor-pointer">
              <summary className="font-semibold text-gray-900 flex items-center gap-2 list-none">
                <HelpCircle size={20} className="text-primary-600" />
                What should I expect during my first appointment?
              </summary>
              <p className="mt-4 text-gray-600 pl-7">
                Your first appointment will include a comprehensive assessment
                where we&apos;ll discuss your medical history, current symptoms,
                and goals. We&apos;ll perform a physical examination and create
                a personalized treatment plan tailored to your needs.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition cursor-pointer">
              <summary className="font-semibold text-gray-900 flex items-center gap-2 list-none">
                <HelpCircle size={20} className="text-primary-600" />
                How long does a typical treatment session last?
              </summary>
              <p className="mt-4 text-gray-600 pl-7">
                Initial consultations typically last 45-60 minutes, while
                follow-up appointments are usually 30-45 minutes. The exact
                duration depends on your treatment plan and specific needs.
              </p>
            </details>

            <details className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition cursor-pointer">
              <summary className="font-semibold text-gray-900 flex items-center gap-2 list-none">
                <HelpCircle size={20} className="text-primary-600" />
                Do I need a referral from my GP?
              </summary>
              <p className="mt-4 text-gray-600 pl-7">
                No, you don&apos;t need a referral to book an appointment with
                us. However, if you&apos;re using private medical insurance,
                some policies may require a GP referral. We recommend checking
                with your insurer.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}

