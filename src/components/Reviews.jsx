import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden bg-gray-50/60 py-24">
      <div className="container mx-auto px-6">
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-brand-label text-xs font-bold uppercase tracking-[0.18em]">Reviews</span>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900">
            What local customers say about In &amp; Out Cleaning
          </h2>
          <p className="mt-5 text-lg text-gray-600">
            A few recent comments from customers across our local service area.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={`${review.name}-${review.location}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex h-full flex-col rounded-[2rem] border border-gray-200 bg-white p-8 text-left shadow-sm transition-shadow duration-300 hover:shadow-md"
            >
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary">
                <Quote size={22} />
              </div>

              <div className="mb-5 flex gap-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="mb-8 flex-1 text-lg leading-relaxed text-gray-700">
                "{review.text}"
              </blockquote>

              <div className="border-t border-gray-100 pt-5">
                <div className="mb-1 font-bold text-gray-900">{review.name}</div>
                <div className="text-sm font-medium text-brand-primary">{review.location}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/reviews"
            className="inline-flex items-center gap-2 rounded-full border border-brand-primary px-6 py-3 text-sm font-bold text-brand-primary transition-colors hover:bg-brand-accent"
          >
            View all reviews
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
