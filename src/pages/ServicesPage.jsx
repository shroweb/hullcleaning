import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Services from "../components/Services";
import Stats from "../components/Stats";
import { Button } from "../components/ui";
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
        title="Cleaning Services in Hull | Domestic, Commercial & Tenancy"
        description="Full range of cleaning services across Hull and East Yorkshire: domestic cleaning, commercial offices, end of tenancy, takeaway deep cleans, and garden tidy-ups."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
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
              Services
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-[3.5rem]">
              Cleaning services across{" "}
              <span className="text-brand-primary">Hull and nearby villages</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
              Domestic, commercial, end of tenancy, takeaway, Airbnb, and tidy-up support. All bookable via WhatsApp.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full gap-2 shadow-lg shadow-brand-primary/20 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact/">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get a price
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Services hideHeading />

      <Stats />

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[2rem] bg-brand-deep px-8 py-10 text-white lg:px-12 lg:py-12 shadow-md"
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
              <Link to="/contact/">
                <Button size="lg" className="w-full bg-white/10 shadow-none hover:bg-white/20 sm:w-auto">
                  Contact form
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-12 rounded-[2rem] bg-gray-50 px-8 py-10 sm:px-10 lg:px-12">
          <InternalLinksSection
            flush
            title="Individual service pages"
            description="Each service has its own page with more detail on what's included and where we cover."
            items={serviceLinks}
          />
          <div className="my-10 border-t border-gray-200" />
          <InternalLinksSection
            flush
            title="Areas we cover"
            items={areaLinks}
            variant="areas"
          />
        </div>
      </div>
    </div>
  );
}
