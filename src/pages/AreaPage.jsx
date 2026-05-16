import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle, Mail } from "lucide-react";
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
        title={`${area.name} Cleaning Services`}
        description={`${area.intro} Domestic cleaning, commercial cleaning, end of tenancy cleans, takeaway cleaning, and tidy-up help in ${area.name}.`}
      />

      <section className="bg-[#f8f9fa] pb-16 pt-28 sm:pt-32">
        <div className="container mx-auto px-5 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-label shadow-sm ring-1 ring-gray-200">
              <MapPin size={13} className="text-brand-primary" />
              {area.name}
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-[3.5rem]">
              Cleaning in <span className="text-brand-primary">{area.name}</span>
            </h1>
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-500">
              {area.intro}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full gap-2 shadow-lg shadow-brand-primary/20 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                  Get a price
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-5 pb-24 sm:px-6">
        <div className="grid grid-cols-1 gap-8 pt-14 lg:grid-cols-[1.35fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="h-full border-gray-100 p-8 shadow-sm sm:p-10">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">
                What we do in {area.name}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-500">
                In &amp; Out Cleaning is based in Swanland and regularly covers {area.name}. We work with homeowners, landlords, offices, and small businesses — if you're looking for domestic, commercial, or end of tenancy cleaning in {area.name}, we can usually help.
              </p>

              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {services.map((service) => (
                  <li
                    key={service}
                    className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-700"
                  >
                    <CheckCircle2 size={17} className="mt-0.5 shrink-0 text-green-500" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              {area.highlights?.length > 0 && (
                <div className="mt-8 rounded-2xl bg-[#f0f6ff] p-6 ring-1 ring-blue-100">
                  <h3 className="text-base font-bold text-gray-900">
                    Why people in {area.name} book us
                  </h3>
                  <ul className="mt-4 space-y-3">
                    {area.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-3 text-sm text-gray-600">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-brand-primary" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            viewport={{ once: true }}
            className="flex flex-col gap-6"
          >
            <Card className="border-gray-100 p-8 shadow-sm">
              <h2 className="text-xl font-bold text-gray-900">Get a price</h2>
              <p className="mt-3 text-sm leading-relaxed text-gray-500">
                WhatsApp is the fastest way to reach us. Drop us the property type and what you need, and we'll get back to you with a price.
              </p>
              <div className="mt-6 flex flex-col gap-3">
                <a
                  href="https://w.app/inoutcleaning"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white transition-opacity hover:opacity-90"
                >
                  <MessageCircle size={20} />
                  Chat on WhatsApp
                </a>
                <a
                  href="mailto:hull.cleaning@outlook.com"
                  className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-white px-5 py-4 text-sm font-semibold text-gray-800 transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  <Mail size={18} className="shrink-0" />
                  hull.cleaning@outlook.com
                </a>
              </div>
            </Card>

            <Card className="border-gray-100 bg-gray-50/60 p-8 shadow-sm">
              <h3 className="text-base font-bold text-gray-900">About us</h3>
              <ul className="mt-4 space-y-3">
                {[
                  "Fully insured",
                  "Based in Swanland — short drive from most of Hull",
                  "Flexible with timing and schedules",
                  "Over 50 properties cleaned across Hull and East Riding",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-gray-600">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0 text-green-500" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-gray-900 px-8 py-10 text-white lg:px-12 lg:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Need cleaning in {area.name}?
              </h2>
              <p className="mt-3 max-w-xl text-gray-400">
                We cover regular home cleaning, one-off resets, end of tenancy cleans, office cleaning, takeaway deep cleans, Airbnb turnarounds, garden tidy ups, and organisation help.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" variant="white" className="w-full gap-2 sm:w-auto">
                  <MessageCircle size={18} />
                  Message on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white/10 shadow-none hover:bg-white/20 sm:w-auto">
                  Contact page
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2rem] bg-gray-50 px-8 py-10 sm:px-10 lg:px-12"
        >
          <InternalLinksSection
            flush
            title={`Services we offer in ${area.name}`}
            description="Click through any service for more detail on what's included and how to book."
            items={serviceLinks}
          />
          {nearbyLinks.length > 0 && (
            <>
              <div className="my-10 border-t border-gray-200" />
              <InternalLinksSection
                flush
                title="Nearby areas we also cover"
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
