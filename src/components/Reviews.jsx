import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { reviews } from "../data/reviews";
import { Card } from "./ui";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-slate-50 py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-6xl mx-auto">
          <div>
            <span className="text-brand-primary text-xs font-bold uppercase tracking-wider bg-slate-100 px-4 py-1.5 rounded-full">
              Customer Feedback
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
              Trusted by local residents
            </h2>
            <p className="mt-3 max-w-lg text-base text-slate-500">
              A few recent reviews from home and business owners across Hull and surrounding villages.
            </p>
          </div>
          <div>
            <Link
              to="/reviews/"
              className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-primary hover:text-brand-label transition-colors duration-200"
            >
              Read all reviews
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          {reviews.slice(0, 3).map((review, index) => {
            return (
              <motion.div
                key={`${review.name}-${review.location}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05, ease: "easeOut" }}
                viewport={{ once: true }}
                className="h-full"
              >
                <Card className="flex h-full flex-col border-slate-200 bg-white p-7 shadow-sm hover:border-slate-300 transition-all duration-300 relative">
                  <div className="flex-1 flex flex-col">
                    <div className="mb-4 flex gap-0.5">
                      {[...Array(review.stars)].map((_, i) => (
                        <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    <blockquote className="flex-1 text-sm leading-relaxed text-slate-600">
                      "{review.text}"
                    </blockquote>

                    {review.service && (
                      <span className="inline-block mt-4 text-[10px] font-bold uppercase tracking-wider text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md w-fit">
                        {review.service}
                      </span>
                    )}

                    <div className="mt-6 pt-5 border-t border-slate-100 flex items-center gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-700 font-bold text-xs border border-slate-200">
                        {review.name.charAt(0)}
                      </div>
                      <div>
                        <div className="font-bold text-brand-deep text-sm">{review.name}</div>
                        <div className="mt-0.5 text-xs font-semibold text-brand-primary">{review.location}</div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
