import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-14 pt-20 sm:pb-18 sm:pt-28 lg:pt-32 lg:pb-24">
      <div className="absolute inset-x-0 top-0 h-[28rem] bg-gradient-to-b from-blue-50 via-green-50/70 to-white sm:h-[34rem]" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="grid items-center gap-8 lg:grid-cols-[1.02fr_0.98fr] lg:gap-14">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <motion.span
              variants={itemVariants}
              className="inline-flex max-w-full rounded-full bg-gradient-to-r from-brand-accent to-brand-accent-green px-4 py-2 text-[11px] font-semibold tracking-wide text-brand-primary shadow-sm shadow-blue-100 sm:text-sm"
            >
              Based in Swanland, covering Hull and nearby villages
            </motion.span>
            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-5 max-w-[10ch] text-[3rem] font-bold leading-[0.96] text-gray-900 sm:mt-8 sm:max-w-[12ch] sm:text-6xl lg:mx-0 lg:text-[5.5rem]"
            >
              Reliable Cleaning for{" "}
              <span className="text-brand-primary">Homes and Businesses</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-[22rem] text-base leading-relaxed text-gray-600 sm:mt-6 sm:max-w-xl sm:text-xl lg:mx-0 lg:max-w-2xl"
            >
              Domestic, commercial, tenancy, takeaway, and tidy-up cleaning from a Swanland-based team covering Hull and nearby villages.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-6 flex flex-wrap justify-center gap-2 sm:mt-8 sm:gap-3 lg:justify-start"
            >
              {["One-off and regular cleans", "Commercial offices", "End of tenancy"].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-2 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-100 sm:px-4 sm:text-sm"
                >
                  <CheckCircle2 size={14} className="text-brand-secondary sm:h-4 sm:w-4" />
                  {item}
                </div>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} className="mx-auto mt-7 flex w-full max-w-sm flex-col gap-3 sm:mt-10 lg:mx-0 lg:max-w-none lg:flex-row lg:flex-wrap lg:justify-start">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer" className="w-full lg:w-auto">
                <Button size="lg" className="w-full gap-2 shadow-xl shadow-brand-primary/20 lg:w-auto">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact" className="w-full lg:w-auto">
                <Button size="lg" className="w-full shadow-xl shadow-brand-primary/20 lg:w-auto">Book a Professional Clean</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-12 sm:gap-4 lg:justify-start"
            >
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-100 sm:px-4 sm:py-3 sm:text-sm">
                <span className="text-gray-900 font-bold">50+</span> happy customers
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-100 sm:px-4 sm:py-3 sm:text-sm">
                <MapPin size={14} className="text-brand-primary sm:h-4 sm:w-4" />
                Based in Swanland
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto mt-2 hidden w-full max-w-md lg:mt-0 lg:block lg:max-w-none"
          >
            <div className="absolute inset-4 -z-10 rounded-[2.75rem] bg-gradient-to-br from-brand-accent via-white to-brand-accent-green blur-2xl" />
            <div className="relative z-10 aspect-[5/5.9] overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-2xl shadow-blue-500/10 xl:aspect-[5/5.6]">
              <img 
                src="/hero.png" 
                alt="Professional cleaning in Hull" 
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-brand-secondary/10 via-brand-primary/5 to-transparent" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
