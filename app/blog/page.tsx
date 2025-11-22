import Link from "next/link";
import { ArrowLeft, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    title: "Understanding Lower Back Pain: Causes and Solutions",
    excerpt:
      "Learn about the common causes of lower back pain and effective treatment options that can help you find relief.",
    author: "Dr. Sarah Mitchell",
    date: "March 15, 2024",
    category: "Pain Management",
  },
  {
    title: "Posture Correction: A Guide to Better Alignment",
    excerpt:
      "Discover how proper posture can prevent pain and improve your overall health and wellbeing.",
    author: "Dr. James Anderson",
    date: "March 10, 2024",
    category: "Postural Correction",
  },
  {
    title: "Sports Injury Prevention: Tips for Active Individuals",
    excerpt:
      "Essential strategies to prevent sports injuries and maintain peak performance throughout your training.",
    author: "Dr. Emily Chen",
    date: "March 5, 2024",
    category: "Sports Medicine",
  },
];

export default function BlogPage() {
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
            Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Expert insights, tips, and advice from our team of specialists
          </p>
        </div>

        <div className="space-y-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="border border-gray-200 rounded-xl p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full font-medium">
                  {post.category}
                </span>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{post.author}</span>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-3">
                {post.title}
              </h2>
              <p className="text-gray-700 mb-4">{post.excerpt}</p>
              <Link
                href="#"
                className="text-primary-600 hover:text-primary-700 font-semibold"
              >
                Read more →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

