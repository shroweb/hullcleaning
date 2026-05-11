import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
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
    <section className="relative overflow-hidden bg-[#f7fbff] pb-12 pt-14 sm:pb-18 sm:pt-24 lg:pb-22 lg:pt-28">
      <div className="absolute left-[-10rem] top-[-8rem] h-72 w-72 rounded-full bg-brand-accent blur-3xl" />
      <div className="absolute right-[-10rem] top-10 h-72 w-72 rounded-full bg-brand-accent-green/80 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        <div className="mx-auto max-w-[76rem]">
          <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.84fr)_minmax(36rem,1.16fr)] lg:gap-18 xl:grid-cols-[minmax(0,0.82fr)_minmax(39rem,1.18fr)]">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center lg:max-w-[31rem] lg:text-left"
          >
            <motion.h1
              variants={itemVariants}
              className="mx-auto mt-1 max-w-[11ch] text-[2.7rem] font-bold leading-[0.97] tracking-[-0.04em] text-gray-900 sm:mt-4 sm:max-w-[12ch] sm:text-[4.25rem] lg:mx-0 lg:max-w-none lg:text-[4.15rem] xl:text-[4.45rem]"
            >
              <span className="block lg:whitespace-nowrap">Reliable cleaning</span>
              <span className="block text-brand-primary lg:whitespace-nowrap">for Hull homes</span>
              <span className="block lg:whitespace-nowrap">and businesses</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-[23rem] text-base leading-relaxed text-gray-600 sm:max-w-xl sm:text-lg lg:mx-0 lg:max-w-[30rem]"
            >
              One-off cleans, regular home visits, office cleaning, tenancy work, takeaway deep cleans, and tidy-up support from a Swanland-based team covering Hull and nearby villages.
            </motion.p>
            <motion.div
              variants={itemVariants}
              className="mt-5 flex flex-wrap justify-center gap-2 sm:gap-3 lg:justify-start"
            >
              {["One-off and regular cleans", "Commercial offices", "End of tenancy"].map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-xs font-medium text-gray-700 sm:px-4 sm:text-sm"
                >
                  <CheckCircle2 size={14} className="text-brand-secondary sm:h-4 sm:w-4" />
                  {item}
                </div>
              ))}
            </motion.div>
            <motion.div variants={itemVariants} className="mx-auto mt-7 flex w-full max-w-sm flex-col gap-2.5 sm:mt-9 lg:mx-0 lg:max-w-none lg:flex-row lg:justify-start">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer" className="w-full lg:w-auto">
                <Button size="lg" className="w-full gap-2 lg:w-auto">
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact" className="w-full lg:w-auto">
                <Button variant="secondary" size="lg" className="w-full lg:w-auto">
                  Book a Clean
                </Button>
              </Link>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="hidden"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative mx-auto mt-2 hidden w-full lg:mt-0 lg:block"
          >
            <div className="absolute inset-8 -z-10 rounded-[2.75rem] bg-white/70 blur-2xl" />
            <div className="relative z-10 aspect-[1/1.18] overflow-hidden rounded-[2.75rem] border border-white/80 bg-white shadow-[0_32px_80px_rgba(15,23,42,0.14)] xl:aspect-[1/1.08]">
              <img
                src="/hero.png"
                alt="Professional cleaning in Hull"
                className="h-full w-full object-cover object-center"
                fetchpriority="high"
                width="620"
                height="680"
              />
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
