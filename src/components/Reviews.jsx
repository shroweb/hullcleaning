import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-gray-50 py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="text-brand-label text-xs font-bold uppercase tracking-[0.18em]">Reviews</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
            What customers say
          </h2>
          <p className="mt-3 max-w-lg text-lg text-gray-500">
            A few recent comments from customers across Hull and the surrounding area.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={`${review.name}-${review.location}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.07 }}
              viewport={{ once: true }}
              className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="flex-1 text-base leading-relaxed text-gray-700">
                "{review.text}"
              </blockquote>

              <div className="mt-8 border-t border-gray-100 pt-5">
                <div className="font-bold text-gray-900">{review.name}</div>
                <div className="mt-0.5 text-sm text-brand-primary">{review.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary hover:text-[#0d68d2]"
          >
            View all reviews
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>
    </section>
  );
}
