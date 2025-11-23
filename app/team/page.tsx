import Link from "next/link";
import { ArrowLeft, User, Award, Mail } from "lucide-react";

const teamMembers = [
  {
    name: "Lars Ipsen",
    role: "Chiropractor",
    specialty: "Clinical Biomechanics",
    qualifications: "BSc & MSc (Clinical Biomechanics)",
    experience: "Qualified 2017",
    bio: "Lars qualified as a chiropractor in 2017 after completing his Master's degree in Clinical Biomechanics from the University of Southern Denmark. He has experience from private practice in both London and Denmark and is bilingual, speaking fluent English and Danish.",
    image: "LI",
  },
  {
    name: "Ben Glenister",
    role: "Chiropractor & Co-founder",
    specialty: "Postural Correction, Sports Injuries, Biomechanics",
    qualifications: "BSc(Hons) MSc PGdip (Biomechanics) DC FR",
    experience: "Co-founder since 2006",
    bio: "Ben co-founded Bodymotion in 2006. He has worked within the NHS as part of a specialist back pain unit and has a keen interest in postural correction, sports injuries, biomechanics, and rehabilitation.",
    image: "BG",
  },
  {
    name: "Emma Daniells",
    role: "Chiropractor & Co-founder",
    specialty: "Sports Chiropractic",
    qualifications: "BSc(Hons) MSc DC ICSSD",
    experience: "Co-founder since 2006",
    bio: "Emma co-founded Bodymotion in 2006. She completed the International Chiropractic Sports Science Diploma (ICSSD) and has worked with the Cambridge Harriers and international hockey players.",
    image: "ED",
  },
  {
    name: "Jack Finney",
    role: "Chiropractor",
    specialty: "Diversified Technique, Rehabilitation",
    qualifications: "DC MChiro",
    experience: "Experienced practitioner",
    bio: "Jack utilizes a hands-on diversified chiropractic technique combined with soft tissue work, dry needling, and taping to treat a wide range of conditions. He tailors personalized rehabilitation programs to help speed up recovery and prevent injuries from resurfacing.",
    image: "JF",
  },
  {
    name: "Emma Young-Smith",
    role: "Physiotherapist",
    specialty: "Musculoskeletal Physiotherapy",
    qualifications: "Bachelor of Physiotherapy (Honours)",
    experience: "Australian-trained",
    bio: "An Australian-trained physiotherapist with a Bachelor of Physiotherapy (Honours) from Monash University in Melbourne. She specializes in musculoskeletal physiotherapy, with a strong focus on individualized, patient-centered care.",
    image: "EY",
  },
  {
    name: "Clare Ryan",
    role: "Physiotherapist",
    specialty: "Musculoskeletal Physiotherapy, Clinical Pilates",
    qualifications: "BPhty MCSP",
    experience: "Australian-trained",
    bio: "Clare is an Australian-trained physiotherapist with a Bachelor of Physiotherapy from the Australian Catholic University in Brisbane. She specializes in musculoskeletal physiotherapy and has a particular passion for Clinical Pilates.",
    image: "CR",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-xs text-gray-500 text-center mb-2">
                {member.qualifications}
              </p>
              <p className="text-sm text-gray-600 text-center mb-3">
                {member.specialty}
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-3">
                <Award size={16} />
                <span>{member.experience}</span>
              </div>
              <p className="text-xs text-gray-600 text-center leading-relaxed">
                {member.bio}
              </p>
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

