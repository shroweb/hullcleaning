import { motion } from "framer-motion";
import { Link, Navigate, useParams } from "react-router-dom";
import { CheckCircle2, MapPin, MessageCircle, Mail } from "lucide-react";
import { Button, Card } from "../components/ui";
import { getServiceAreaBySlug } from "../data/serviceAreas";
import Seo from "../components/Seo";

const services = [
  "Domestic cleaning for one-off and regular visits",
  "Commercial office cleaning",
  "End of tenancy cleaning",
  "Takeaway deep cleans or regular cleaning",
  "Garden tidy ups with weeding and general tidying",
  "Home organisation help",
];

export default function AreaPage() {
  const { slug } = useParams();
  const area = getServiceAreaBySlug(slug);

  if (!area) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title={`${area.name} Cleaning Services`}
        description={area.intro}
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
            {area.name} Cleaning Services
          </span>
          <h1 className="mt-4 text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-tight">
            Trusted Cleaning in <span className="text-brand-primary">{area.name}</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl">{area.intro}</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_0.9fr] gap-10 mt-16">
          <Card className="border-none shadow-xl shadow-gray-200/70">
            <h2 className="text-2xl font-bold text-gray-900">Services available in {area.name}</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              In & Out Cleaning is based in Swanland and covers {area.name} with practical, reliable support for homes, rentals, offices, and small businesses.
            </p>
            <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
              {services.map((service) => (
                <li key={service} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-green-500" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </Card>

          <Card className="border-none bg-gray-50">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-accent px-4 py-2 text-xs font-bold tracking-widest uppercase text-brand-primary">
              <MapPin size={14} />
              Based in Swanland
            </div>
            <h2 className="mt-6 text-2xl font-bold text-gray-900">Get a quick quote</h2>
            <p className="mt-4 text-gray-600 leading-relaxed">
              Message us on WhatsApp for the fastest response, or email us with the size of the property and the type of clean you need.
            </p>
            <div className="mt-8 space-y-4">
              <a
                href="https://w.app/inoutcleaning"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-2xl bg-[#25D366] px-5 py-4 font-semibold text-white"
              >
                <MessageCircle size={20} />
                Chat on WhatsApp
              </a>
              <a
                href="mailto:info@hullcleaning.co.uk"
                className="flex items-center gap-3 rounded-2xl border border-gray-200 px-5 py-4 font-semibold text-gray-900"
              >
                <Mail size={20} />
                info@hullcleaning.co.uk
              </a>
            </div>
          </Card>
        </div>

        <div className="mt-14 rounded-[2rem] bg-gradient-to-r from-brand-primary to-brand-secondary px-8 py-10 text-white lg:px-10">
          <h2 className="text-3xl font-bold">Need cleaning in {area.name}?</h2>
          <p className="mt-4 max-w-2xl text-blue-50">
            We handle regular home cleaning, one-off resets, end of tenancy cleans, office cleaning, takeaway deep cleans, garden tidy ups, and organisation help.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
              <Button size="lg" variant="white">Message on WhatsApp</Button>
            </a>
            <Link to="/contact">
              <Button size="lg" className="bg-white/10 hover:bg-white/20 shadow-none">Contact page</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
