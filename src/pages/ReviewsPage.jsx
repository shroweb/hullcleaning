import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, Quote, MessageCircle } from "lucide-react";
import { Button, Card } from "../components/ui";
import { reviews } from "../data/reviews";
import Seo from "../components/Seo";

export default function ReviewsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Reviews"
        description="Customer reviews for In & Out Cleaning across Swanland, Hull, and the surrounding villages."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
            Customer Reviews
          </span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Trusted by <span className="text-brand-primary">Local Customers</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Feedback from domestic and commercial clients across Swanland, Hull, and the surrounding villages.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={`${review.name}-${review.location}`}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
            >
              <Card className="h-full border-none bg-gray-50/80 shadow-lg shadow-gray-200/60">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary">
                    <Quote size={14} />
                    Review
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.stars)].map((_, i) => (
                      <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <blockquote className="mt-6 text-lg leading-relaxed text-gray-700">
                  "{review.text}"
                </blockquote>

                <div className="mt-8 flex items-center justify-between gap-4">
                  <div>
                    <div className="font-bold text-gray-900">{review.name}</div>
                    <div className="text-sm text-gray-500">{review.location}</div>
                  </div>
                  <div className="rounded-full bg-white px-3 py-2 text-xs font-semibold text-gray-600">
                    {review.service}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 rounded-[2rem] bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-10 text-white lg:px-10">
          <h2 className="text-3xl font-bold">Need a quote for your property?</h2>
          <p className="mt-4 max-w-2xl text-blue-50">
            We handle one-off cleans, regular home cleaning, office cleaning, tenancy work, takeaway deep cleans, and tidy-up support.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
              <Button size="lg" variant="white" className="gap-2">
                <MessageCircle size={18} />
                Chat on WhatsApp
              </Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-white/10 shadow-none hover:bg-white/20">
                Contact us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
