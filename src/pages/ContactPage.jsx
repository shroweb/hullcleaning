import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Contact from "../components/Contact";
import { serviceAreas } from "../data/serviceAreas";
import Seo from "../components/Seo";

export default function ContactPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Contact"
        description="Contact In & Out Cleaning for quotes across Swanland, Hull, and nearby villages. Fast WhatsApp and email enquiries."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Reach Out</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Let's Get Your Space <br />
            <span className="text-brand-primary">Sparkling Clean</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Have a question or ready to book a clean? Message us on WhatsApp or email us for domestic, commercial, tenancy, takeaway, and tidy-up cleaning across Hull and the surrounding area.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-600">
            <div className="rounded-full bg-gray-50 px-4 py-2 ring-1 ring-gray-100">Usually replies within a few hours</div>
            <div className="rounded-full bg-gray-50 px-4 py-2 ring-1 ring-gray-100">Quotes for homes and businesses</div>
            <div className="rounded-full bg-gray-50 px-4 py-2 ring-1 ring-gray-100">Swanland-based local coverage</div>
          </div>
        </motion.div>

        <Contact />

        <div className="mt-20 overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-[#0b2241] via-brand-primary to-[#2f7d22] px-8 py-10 text-white lg:px-12 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div>
              <div className="text-sm font-bold uppercase tracking-[0.18em] text-blue-100">
                Coverage
              </div>
              <h2 className="mt-4 text-3xl font-bold tracking-tight lg:text-4xl">
                Serving Swanland, Hull, and the surrounding villages
              </h2>
              <p className="mt-4 max-w-2xl text-blue-50">
                We regularly cover Swanland, Hull, Kirk Ella, Anlaby, Hessle, Cottingham, Willerby, North Ferriby, and Beverley.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-brand-deep"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
