import { Link } from "react-router-dom";
import Services from "../components/Services";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import { Button } from "../components/ui";
import Seo from "../components/Seo";

export default function ServicesPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Cleaning Services"
        description="Domestic, commercial, takeaway, tenancy, garden tidy up, and organisation help in Hull and nearby villages."
      />
      <div className="container mx-auto px-6 text-center max-w-3xl mb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Full Spectrum</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">Our Cleaning Services</h1>
          <p className="mt-6 text-xl text-gray-600">From domestic one-offs and regular visits to office cleans, tenancy work, takeaway cleaning, and tidy-up support.</p>
        </motion.div>
      </div>
      <Services />
      <div id="tidy-ups" className="container mx-auto px-6 pt-8">
        <div className="rounded-[2rem] bg-gray-50 p-8 lg:p-10">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">Extra Support</span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">Tidy ups, garden help, and organisation support</h2>
            <p className="mt-4 text-lg leading-relaxed text-gray-600">
              We also help with practical reset jobs such as general tidying, light garden tidy ups with weeding, and getting rooms back into shape after busy periods.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg">Ask on WhatsApp</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">Get a quote</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
}
