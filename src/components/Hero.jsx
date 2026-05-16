import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-24 sm:pt-28 sm:pb-20 xl:pt-32 xl:pb-24">
      {/* Background */}
      <div className="absolute inset-x-0 top-0 h-[32rem] bg-gradient-to-b from-blue-50 via-green-50/60 to-white" />

      <div className="container relative z-10 mx-auto px-5 sm:px-6">
        <div className="grid items-center gap-12 xl:grid-cols-[1fr_0.9fr] xl:gap-16">

          {/* ── Left column ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center xl:text-left"
          >
            {/* Eyebrow */}
            <motion.span
              variants={itemVariants}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold tracking-wide text-brand-primary shadow-sm ring-1 ring-blue-100 sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
              Based in Swanland · Covering Hull &amp; nearby villages
            </motion.span>

            {/* Heading */}
            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-5 text-[2.1rem] font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-[2.75rem] xl:mx-0 xl:text-[3.4rem]"
            >
              Reliable cleaning for{" "}
              <span className="text-brand-primary">Hull homes and businesses</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-gray-500 sm:text-lg xl:mx-0"
            >
              One-off cleans, regular home visits, office cleaning, tenancy work,
              takeaway deep cleans, and tidy-up support from a Swanland-based team
              covering Hull and nearby villages.
            </motion.p>

            {/* Pills */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center gap-2 xl:justify-start"
            >
              {["One-off and regular cleans", "Commercial offices", "End of tenancy"].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 sm:text-sm"
                >
                  <CheckCircle2 size={13} className="text-brand-secondary shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={itemVariants}
              className="mx-auto mt-8 flex max-w-xs flex-col gap-3 sm:max-w-sm sm:flex-row sm:justify-center xl:mx-0 xl:justify-start"
            >
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full gap-2 shadow-lg shadow-brand-primary/25 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact" className="flex-1 sm:flex-none">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  Book a Clean
                </Button>
              </Link>
            </motion.div>

            {/* Social proof */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-wrap items-center justify-center gap-3 xl:justify-start"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-100 sm:text-sm">
                <span className="font-bold text-gray-900">50+</span> happy customers
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-600 shadow-sm ring-1 ring-gray-100 sm:text-sm">
                <MapPin size={13} className="text-brand-primary shrink-0" />
                Based in Swanland
              </div>
            </motion.div>
          </motion.div>

          {/* ── Right column — image (hidden below xl) ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, x: 40 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.1 }}
            className="relative mx-auto hidden w-full max-w-[480px] xl:block xl:max-w-none"
          >
            {/* Glow blob */}
            <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-accent via-white to-brand-accent-green blur-2xl opacity-80" />

            {/* Image frame */}
            <div className="relative aspect-[4/3.6] overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-blue-500/10">
              <img
                src="/hero.png"
                alt="Professional cleaning in Hull"
                className="h-full w-full object-cover object-center"
                fetchpriority="high"
                width="480"
                height="432"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
            </div>

            {/* Floating badge — top left */}
            <div className="absolute -left-5 top-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-gray-100">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-green-50">
                <CheckCircle2 size={18} className="text-green-500" />
              </div>
              <div className="leading-tight">
                <div className="text-[11px] text-gray-400">Fully</div>
                <div className="text-sm font-bold text-gray-900">Insured</div>
              </div>
            </div>

            {/* Floating badge — bottom right */}
            <div className="absolute -bottom-4 -right-4 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-gray-100">
              <div className="flex items-center gap-1 mb-1">
                {[1,2,3,4,5].map(i => (
                  <svg key={i} className="h-3 w-3 fill-yellow-400 text-yellow-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <div className="text-sm font-bold text-gray-900">50+ customers</div>
              <div className="text-[11px] text-gray-400">across Hull &amp; East Riding</div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
