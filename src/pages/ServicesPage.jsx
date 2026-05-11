import Services from "../components/Services";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import Seo from "../components/Seo";

export default function ServicesPage() {
  return (
    <div className="bg-white">
      <Seo
        title="Cleaning Services"
        description="Domestic, commercial, takeaway, tenancy, garden tidy up, and organisation help in Hull and nearby villages."
      />
      <div className="container mx-auto px-6 pt-32 pb-12 text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-label font-bold tracking-widest uppercase text-xs">Full Spectrum</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">Our Cleaning Services</h1>
          <p className="mt-6 text-xl text-gray-600">From domestic one-offs and regular visits to office cleans, tenancy work, takeaway cleaning, and tidy-up support.</p>
        </motion.div>
      </div>
      <Services hideHeading />
      <Stats />
    </div>
  );
}
