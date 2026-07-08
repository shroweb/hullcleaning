import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MapPin, MessageCircle, Star, ShieldCheck, CheckCircle } from "lucide-react";
import { Button } from "./ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { y: 15, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-50/60 pb-16 pt-28 sm:pt-32 sm:pb-20 xl:pt-36 xl:pb-28 border-b border-slate-200">

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid items-center gap-12 xl:grid-cols-[1fr_0.95fr] xl:gap-16">

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center xl:text-left"
          >
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary"
            >
              <MapPin size={13} className="text-brand-secondary" />
              Swanland, East Yorkshire
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-5 font-display text-[2.25rem] font-extrabold leading-[1.1] tracking-tight text-brand-deep sm:text-[3.25rem] xl:mx-0 xl:text-[3.6rem]"
            >
              Reliable cleaning for homes & businesses in Hull
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-500 sm:text-lg xl:mx-0"
            >
              Based locally in Swanland, In & Out Cleaning provides high-standard domestic, commercial, end of tenancy, and takeaway deep cleaning. We are an independent, fully insured local service you can count on.
            </motion.p>

            {/* Clean row of trust points (instead of floating template badges) */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center gap-6 xl:justify-start text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand-secondary" />
                <span>Fully DBS Checked & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle size={18} className="text-brand-secondary" />
                <span>Independent Local Team</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(i => (
                    <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span>5-Star Vetted Service</span>
              </div>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="mx-auto mt-8 flex max-w-xs flex-col gap-3 sm:max-w-sm sm:flex-row sm:justify-center xl:mx-0 xl:justify-start"
            >
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer" className="flex-1 sm:flex-none">
                <Button size="lg" className="w-full gap-2.5 sm:w-auto">
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

          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="relative mx-auto hidden w-full max-w-[480px] xl:block xl:max-w-none"
          >
            {/* Clean, static picture frame without template glow orbs or infinite floating loops */}
            <div className="relative aspect-[4/3.3] overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-2 shadow-lg shadow-brand-deep/5">
              <img
                src="/hero.png"
                alt="Professional cleaning service in Hull"
                className="h-full w-full object-cover rounded-[1.2rem]"
                fetchpriority="high"
                width="480"
                height="400"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
