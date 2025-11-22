import Link from "next/link";
import { HelpCircle } from "lucide-react";

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
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Your health, covered
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We&apos;re covered by all major private medical insurers. Take a look at
            our FAQs to find all the help you need when it comes to making a
            claim.
          </p>
        </div>

        {/* Insurance Logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-16">
          {insuranceProviders.map((provider, index) => (
            <div
              key={index}
              className="px-6 py-3 bg-gray-100 rounded-lg text-gray-700 font-semibold hover:bg-primary-50 hover:text-primary-600 transition"
            >
              {provider}
            </div>
          ))}
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

