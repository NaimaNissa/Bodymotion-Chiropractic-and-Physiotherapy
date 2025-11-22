import Link from "next/link";
import { ArrowLeft, FileText, Download } from "lucide-react";

const documents = [
  {
    title: "New Patient Information Form",
    description: "Complete this form before your first appointment",
    type: "PDF",
  },
  {
    title: "Consent for Treatment",
    description: "Treatment consent form and information",
    type: "PDF",
  },
  {
    title: "Insurance Claim Form",
    description: "Form for submitting insurance claims",
    type: "PDF",
  },
];

export default function PatientInformationPage() {
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
            Patient Information
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Important information and forms for our patients
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Before Your Appointment
          </h2>
          <div className="bg-primary-50 rounded-xl p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What to Bring
            </h3>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>Photo ID</li>
              <li>Insurance card (if applicable)</li>
              <li>List of current medications</li>
              <li>Previous medical records or imaging (if relevant)</li>
              <li>Completed new patient form</li>
            </ul>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What to Wear
            </h3>
            <p className="text-gray-700">
              Please wear comfortable, loose-fitting clothing that allows for
              movement. We may need to examine the affected area, so clothing
              that can be easily adjusted is recommended.
            </p>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Patient Forms
          </h2>
          <div className="space-y-4">
            {documents.map((doc, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <FileText size={24} />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {doc.title}
                      </h3>
                      <p className="text-gray-600 text-sm">{doc.description}</p>
                      <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                        {doc.type}
                      </span>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium">
                    <Download size={20} />
                    Download
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Help?
          </h2>
          <p className="text-gray-700 mb-6">
            If you have any questions about your appointment or need assistance
            with forms, please don&apos;t hesitate to contact us.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

