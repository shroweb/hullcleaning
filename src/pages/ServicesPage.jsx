import Services from "../components/Services";
import Stats from "../components/Stats";
import { motion } from "framer-motion";
import Seo from "../components/Seo";
import InternalLinksSection from "../components/InternalLinksSection";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

export default function ServicesPage() {
  const areaLinks = serviceAreas.map((area) => ({
    label: area.name,
    to: `/areas/${area.slug}`,
  }));

  const serviceLinks = servicePages.map((service) => ({
    label: service.title,
    to: `/${service.slug}`,
    description: service.description,
  }));

  return (
    <div className="bg-white">
      <Seo
        title="Cleaning Services"
        description="Domestic, commercial, takeaway, tenancy, garden tidy up, and organisation help in Hull and nearby villages."
      />
      <div className="container mx-auto max-w-4xl px-6 pb-12 pt-32 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-brand-label font-bold tracking-widest uppercase text-xs">Full Spectrum</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">Our Cleaning Services</h1>
          <p className="mt-6 text-xl text-gray-600">
            Domestic cleaning, commercial office cleaning, end of tenancy cleans, takeaway cleaning, Airbnb changeovers, and tidy-up support across Hull and nearby villages.
          </p>
        </motion.div>
      </div>
      <Services hideHeading />
      <div className="container mx-auto px-6 pb-6">
        <InternalLinksSection
          title="Browse service pages"
          description="Each service has its own page with more detail on what is included, where we cover, and the type of jobs it suits best."
          items={serviceLinks}
        />
        <InternalLinksSection
          title="Areas we cover"
          description="If you are searching for cleaning in a specific place, these local pages make it easy to see whether we cover your area."
          items={areaLinks}
          variant="areas"
        />
      </div>
      <Stats />
    </div>
  );
}
