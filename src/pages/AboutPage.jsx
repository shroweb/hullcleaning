import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";
import InternalLinksSection from "../components/InternalLinksSection";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const facts = [
  {
    heading: "Fully insured",
    body: "We carry full public liability insurance, so you can book knowing there's proper cover in place if anything goes wrong.",
  },
  {
    heading: "Based five minutes from most of Hull",
    body: "We're in Swanland, which puts us within easy reach of Hull, Hessle, Anlaby, Kirk Ella, and the surrounding villages without long travel times.",
  },
  {
    heading: "One point of contact",
    body: "You'll deal with the same person from enquiry through to the clean itself — not a call centre or rotating staff.",
  },
  {
    heading: "Straightforward pricing",
    body: "We give you a clear price upfront based on the property and what you need. No hidden charges after the clean.",
  },
];

export default function AboutPage() {
  const serviceLinks = servicePages.slice(0, 4).map((service) => ({
    label: service.title,
    to: `/${service.slug}`,
    description: service.description,
  }));

  const areaLinks = serviceAreas.slice(0, 6).map((area) => ({
    label: area.name,
    to: `/areas/${area.slug}`,
  }));

  return (
    <div className="bg-white">
      <Seo
        title="About"
        description="Learn about the Swanland-based team behind In & Out Cleaning and how we help homes and businesses across Hull and nearby villages."
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
              About us
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-[3.5rem]">
              A local cleaning team{" "}
              <span className="text-brand-primary">based in Swanland</span>
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
              In &amp; Out Cleaning covers Hull, Swanland, and the surrounding villages. We focus on doing the job properly, being easy to deal with, and turning up when we say we will.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 pt-14">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="overflow-hidden rounded-[2rem] border border-gray-100 shadow-xl shadow-gray-200/60">
              <img
                src="/hero.png"
                alt="In and Out Cleaning — based in Swanland"
                className="aspect-[4/3] w-full object-cover"
                width="600"
                height="450"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900">
              What we do and how we work
            </h2>
            <p className="mt-5 leading-relaxed text-gray-500">
              We started In &amp; Out Cleaning to give local homes and businesses a reliable option that didn't involve chasing up no-shows or getting someone different every visit. We keep things simple — you tell us what you need, we turn up and do it properly.
            </p>
            <p className="mt-4 leading-relaxed text-gray-500">
              Whether it's a one-off clean before you move out, a weekly visit to keep your home in order, or a deep clean of your takeaway kitchen, the approach is the same: arrive when agreed, work through it thoroughly, and leave it the way you'd want to find it.
            </p>
            <p className="mt-4 leading-relaxed text-gray-500">
              We cover Hull and a wide area around it — Swanland, Kirk Ella, Anlaby, Hessle, Cottingham, Beverley, and more. Most bookings come via WhatsApp, which is also the fastest way to get a quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" className="w-full gap-2 sm:w-auto">
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

      </div>

      <section className="bg-slate-50 py-20 border-y border-slate-250">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              A few things worth knowing
            </h2>
            <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {facts.map((fact) => (
                <Card key={fact.heading} className="border-slate-200 p-6 shadow-sm bg-white">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-green-500" />
                    <div>
                      <h3 className="font-bold text-gray-900">{fact.heading}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-gray-500">{fact.body}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24 pt-20">

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 rounded-[2rem] bg-brand-deep px-8 py-10 text-white lg:px-12 lg:py-12 shadow-md"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Get a price</h2>
              <p className="mt-3 max-w-xl text-gray-400">
                WhatsApp is fastest. Tell us the property type and what you need, and we'll come back with a price.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" variant="white" className="w-full gap-2 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white/10 shadow-none hover:bg-white/20 sm:w-auto">
                  Contact form
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        <div className="mt-20 rounded-[2rem] bg-gray-50 px-8 py-10 sm:px-10 lg:px-12">
          <InternalLinksSection
            flush
            title="Cleaning services we offer"
            description="Detail on each type of cleaning we do — what's included and how to book."
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
