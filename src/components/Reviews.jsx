import { motion } from "framer-motion";
import { Star, Quote, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Testimonials</span>
          <h2 className="mt-4 text-4xl font-extrabold text-gray-900 tracking-tight">
            Hear From Our <span className="text-brand-primary">Happy Customers</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            A few recent comments from customers across our local service area.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.slice(0, 3).map((review, index) => (
            <motion.div
              key={`${review.name}-${review.location}`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-[2rem] p-8 relative flex flex-col items-center justify-center text-center shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-brand-primary text-white rounded-full flex items-center justify-center shadow-lg">
                <Quote size={24} />
              </div>
              
              <div className="flex gap-1 mb-6 mt-4">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="text-gray-700 italic text-lg leading-relaxed mb-8 flex-1">
                "{review.text}"
              </blockquote>

              <div className="text-gray-900 font-bold mb-1">{review.name}</div>
              <div className="text-brand-primary text-sm font-medium">{review.location}</div>
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
