import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Star, MessageCircle } from "lucide-react";
import { Button } from "../components/ui";
import { reviews } from "../data/reviews";
import Seo from "../components/Seo";

export default function ReviewsPage() {
  return (
    <div className="bg-white">
      <Seo
        title="Reviews"
        description="Customer reviews for In & Out Cleaning across Swanland, Hull, and the surrounding villages."
      />

      <section className="bg-[#f8f9fa] pb-16 pt-28 sm:pt-32">
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-label shadow-sm ring-1 ring-gray-200">
              Reviews
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-[3.5rem]">
              What customers say
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
              Feedback from customers across Hull, Swanland, and the surrounding area.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-5 pb-24 pt-14 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {reviews.map((review) => (
            <div
              key={`${review.name}-${review.location}`}
              className="flex h-full flex-col rounded-[2rem] border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-5 flex gap-1">
                {[...Array(review.stars)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <blockquote className="flex-1 text-base leading-relaxed text-gray-700">
                "{review.text}"
              </blockquote>

              <div className="mt-8 flex items-end justify-between gap-4 border-t border-gray-100 pt-5">
                <div>
                  <div className="font-bold text-gray-900">{review.name}</div>
                  <div className="mt-0.5 text-sm text-brand-primary">{review.location}</div>
                </div>
                <div className="shrink-0 rounded-full border border-gray-200 px-3 py-1 text-xs font-medium text-gray-500">
                  {review.service}
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2rem] bg-gray-900 px-8 py-10 text-white lg:px-12 lg:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Get a price</h2>
              <p className="mt-3 max-w-xl text-gray-400">
                WhatsApp is fastest. Tell us the property size and what you need, and we'll come back to you with a price.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" variant="white" className="w-full gap-2 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white/10 shadow-none hover:bg-white/20 sm:w-auto">
                  Contact form
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
