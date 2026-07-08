import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle, Mail, HelpCircle, Building2, Home as HomeIcon, Route } from "lucide-react";
import { Button, Card } from "../components/ui";
import { getServiceAreaBySlug, serviceAreas } from "../data/serviceAreas";
import Seo from "../components/Seo";
import { servicePages } from "../data/servicePages";
import InternalLinksSection from "../components/InternalLinksSection";

const services = [
  "Domestic cleaning — one-off and regular visits",
  "Commercial office cleaning",
  "End of tenancy cleaning",
  "Takeaway deep cleans or regular cleaning",
  "Garden tidy ups and general tidying",
  "Home organisation help",
];

export default function AreaPage() {
  const { slug } = useParams();
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  const serviceLinks = servicePages.map((service) => ({
    label: service.title,
    to: `/${service.slug}`,
    description: `${service.description} We regularly provide this in ${area.name}.`,
  }));

  const nearbyLinks = serviceAreas
    .filter((serviceArea) => area.nearby?.includes(serviceArea.slug))
    .map((serviceArea) => ({
      label: serviceArea.name,
      to: `/areas/${serviceArea.slug}`,
    }));

  return (
    <div className="bg-white">
      <Seo
        title={`${area.name} Cleaning Services | Professional Cleaner`}
        description={`${area.intro} Domestic cleaning, commercial cleaning, end of tenancy cleans, takeaway cleaning, and tidy-up help in ${area.name}.`}
      />

      <section className="relative overflow-hidden bg-slate-50 pb-16 pt-28 sm:pt-32">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
              <MapPin size={13} className="text-brand-secondary" />
              Service Coverage Area
            </span>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-deep sm:text-5xl xl:text-[3.4rem]">
              Cleaning Services in <span className="text-brand-primary">{area.name}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-500">
              {area.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full gap-2.5 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get a Price
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 pt-14 lg:grid-cols-[1.35fr_0.9fr]">
          <div className="space-y-8">
            {/* Core Services Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-slate-200 p-8 shadow-sm sm:p-10">
                <h2 className="font-display text-2xl font-bold tracking-tight text-brand-deep">
                  What We Do in {area.name}
                </h2>
                <p className="mt-4 leading-relaxed text-slate-500">
                  In &amp; Out Cleaning is based in Swanland and regularly covers {area.name}. We work with homeowners, landlords, offices, and small businesses — if you're looking for domestic, commercial, or end of tenancy cleaning in {area.name}, we can usually help.
                </p>

                <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {services.map((service) => (
                    <li
                      key={service}
                      className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/35 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-colors duration-150"
                    >
                      <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-secondary" />
                      <span>{service}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            </motion.div>

            {/* Property & Local Insights Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              <Card className="border-slate-200 p-8 shadow-sm hover:border-slate-300">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 border border-slate-150">
                  <HomeIcon size={18} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-deep">Property & Housing Insights</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {area.propertyTypes}
                </p>
              </Card>

              <Card className="border-slate-200 p-8 shadow-sm hover:border-slate-300">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-slate-50 text-slate-700 border border-slate-150">
                  <Building2 size={18} />
                </div>
                <h3 className="font-display text-lg font-bold text-brand-deep">Local Service Focus</h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {area.localFocus}
                </p>
              </Card>
            </motion.div>

            {/* Local FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="border-slate-200 p-8 shadow-sm bg-slate-50/50">
                <div className="flex items-center gap-3">
                  <HelpCircle className="text-brand-primary" size={22} />
                  <h3 className="font-display text-lg font-bold text-brand-deep">{area.name} Cleaning FAQ</h3>
                </div>
                <div className="mt-4 border-t border-slate-200 pt-4">
                  <h4 className="font-bold text-slate-800 text-sm">Q: {area.faqQuestion}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">A: {area.faqAnswer}</p>
                </div>
              </Card>
            </motion.div>

            {area.highlights?.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <div className="rounded-[1.5rem] bg-slate-50 p-8 border border-slate-250">
                  <h3 className="font-display text-lg font-bold text-brand-deep">
                    Why People in {area.name} Choose Us
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {area.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-slate-600">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          {/* Right sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <Card className="border-slate-200 p-8 shadow-sm">
              <h2 className="font-display text-xl font-bold text-brand-deep">Get a Price</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-500">
                WhatsApp is the fastest way to reach us. Drop us the property type and what you need, and we'll get back to you with a price.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://w.app/inoutcleaning"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-opacity hover:opacity-90 shadow-sm"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:hull.cleaning@outlook.com"
                  className="flex items-center justify-center gap-3 rounded-2xl border border-slate-200 bg-white px-5 py-4 text-sm font-semibold text-slate-800 transition-colors hover:border-brand-primary hover:text-brand-primary shadow-sm hover:shadow"
                >
                  <Mail size={18} className="shrink-0" />
                  hull.cleaning@outlook.com
                </a>
              </div>
            </Card>

            {area.travelNote && (
              <Card className="border-slate-200 p-8 shadow-sm bg-slate-50/20">
                <h3 className="font-display text-base font-bold text-brand-deep flex items-center gap-2">
                  <Route className="text-brand-primary shrink-0" size={18} />
                  Local Dispatch &amp; Transit
                </h3>
                <p className="mt-3 text-xs leading-relaxed text-slate-500">
                  {area.travelNote}
                </p>
              </Card>
            )}

            <Card className="border-slate-200 bg-slate-50/35 p-8 shadow-sm">
              <h3 className="font-display text-base font-bold text-brand-deep">About Us</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Fully insured for your peace of mind",
                  "Based in Swanland — short drive to all service locations",
                  "Flexible slots to match your busy calendar",
                  "Over 50 properties cleaned across Hull and East Riding",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-slate-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-secondary" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-brand-deep px-8 py-10 text-white lg:px-12 lg:py-12 shadow-md"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">
                Need Reliable Cleaning in {area.name}?
              </h2>
              <p className="mt-3 max-w-xl text-slate-300 text-sm">
                We cover regular home cleaning, one-off resets, end of tenancy cleans, office cleaning, takeaway deep cleans, Airbnb turnarounds, garden tidy ups, and organisation help.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" variant="white" className="w-full gap-2 sm:w-auto">
                  <MessageCircle size={18} />
                  Message on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white/10 text-white border-transparent shadow-none hover:bg-white/20 sm:w-auto">
                  Contact Page
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2rem] bg-slate-50 px-8 py-10 sm:px-10 lg:px-12"
        >
          <InternalLinksSection
            flush
            title={`Services We Offer in ${area.name}`}
            description="Click through any service for more detail on what's included and how to book."
            items={serviceLinks}
          />
          {nearbyLinks.length > 0 && (
            <>
              <div className="my-10 border-t border-slate-200" />
              <InternalLinksSection
                flush
                title="Nearby Areas We Also Cover"
                description="We work across this part of East Yorkshire — if you're nearby, we most likely cover you too."
                items={nearbyLinks}
                variant="areas"
              />
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
}
