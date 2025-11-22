import Link from "next/link";
import { ArrowLeft, Users, Award, Heart, Target } from "lucide-react";

export default function AboutPage() {
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

        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          About Us
        </h1>

        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-gray-600 mb-6">
            Bodymotion Chiropractic and Physiotherapy is dedicated to providing
            elite care for everybody. We believe you don&apos;t have to be an
            athlete to be treated like one.
          </p>

          <p className="text-gray-700 mb-6">
            Founded with a mission to make high-quality musculoskeletal care
            accessible to everyone, Bodymotion combines decades of expert
            experience in chiropractic and physiotherapy. Our multidisciplinary
            team works together to provide comprehensive, personalized treatment
            plans that address the root cause of your pain and help you achieve
            optimal health.
          </p>

          <p className="text-gray-700 mb-6">
            We understand that your body is your most important investment, and
            it deserves the highest standard of care. That&apos;s why we&apos;ve
            built a practice that treats every patient with the same level of
            expertise and attention that professional athletes receive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <div className="bg-primary-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
              <Users size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700">
              To provide accessible, expert-level chiropractic and physiotherapy
              care that helps everyone live an active and healthy life.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
              <Target size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Vision
            </h3>
            <p className="text-gray-700">
              To be the leading provider of musculoskeletal healthcare, making
              elite-level treatment accessible to all.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
              <Heart size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Values
            </h3>
            <p className="text-gray-700">
              Excellence, compassion, integrity, and a commitment to helping
              every patient achieve their personal best.
            </p>
          </div>

          <div className="bg-primary-50 rounded-xl p-6">
            <div className="w-12 h-12 bg-primary-600 text-white rounded-lg flex items-center justify-center mb-4">
              <Award size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Our Expertise
            </h3>
            <p className="text-gray-700">
              Over 20 years of combined experience in musculoskeletal healthcare,
              with a team of 120+ world-class specialists.
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/book"
            className="inline-block bg-primary-600 text-white px-8 py-3 rounded-lg hover:bg-primary-700 transition font-semibold"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}

