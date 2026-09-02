import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { serviceAreas } from "../data/serviceAreas";
import Seo from "../components/Seo";

export default function ContactPage() {
  return (
    <div className="bg-white">
      <Seo
        title="Contact Us | In & Out Cleaning Hull & East Yorkshire"
        description="Get in touch with In & Out Cleaning for free cleaning quotes across Hull, Swanland, and East Yorkshire. Instant WhatsApp and online enquiries."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Contact", path: "/contact/" },
        ]}
      />

      <section className="bg-[#f8f9fa] pb-16 pt-28 sm:pt-32 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-label shadow-sm ring-1 ring-gray-200">
              Contact
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-[3.5rem]">
              Get in touch
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
              WhatsApp is the fastest way to reach us. Or use the form below and we'll get back to you the same day.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="pt-14">
          <Contact />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] bg-gray-900 px-8 py-10 text-white lg:px-12 lg:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-md">
              <h2 className="text-xl font-bold">Where we cover</h2>
              <p className="mt-3 text-gray-400">
                Based in Swanland, we regularly work across Hull and the surrounding villages. Click any area for a local page.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}/`}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-gray-900"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
