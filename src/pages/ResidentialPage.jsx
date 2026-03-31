import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Home, SprayCan, Sparkles } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";

const features = [
  "One-off cleaning visits",
  "Regular weekly or fortnightly cleans",
  "Kitchen and bathroom refreshes",
  "Dusting, vacuuming, and mopping",
  "End of tenancy support",
  "Organisation help when needed",
];

export default function ResidentialPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Domestic Cleaning"
        description="Domestic cleaning in Hull and nearby villages, including one-off cleans, regular visits, and end of tenancy support."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Home Cleaning</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Domestic Cleaning <br />
            <span className="text-brand-primary">That Fits Around Home Life</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            We help with one-off and regular domestic cleaning across Hull and nearby areas, giving homes a reliable reset without the stress.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/residential.png" alt="Residential cleaning" className="w-full h-auto" />
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-accent rounded-full -z-10 blur-2xl" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Our Residential Package</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether you need a helping hand every week, a one-off refresh before guests arrive, or an end of tenancy clean, we tailor the visit to your home and priorities.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map(f => (
                <li key={f} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={24} className="text-green-500 shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex gap-4">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg">Get a Free Estimate</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card>
            <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-xl flex items-center justify-center mb-6">
              <Home size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Regular Cleaning</h3>
            <p className="text-gray-600 leading-relaxed">Weekly, fortnightly, or scheduled visits to help keep your home manageable and fresh.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Sparkles size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">One-Off Clean</h3>
            <p className="text-gray-600 leading-relaxed">Ideal when your home needs a proper reset before an event, after a busy period, or between tenants.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <SprayCan size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">End of Tenancy</h3>
            <p className="text-gray-600 leading-relaxed">A detailed clean for rented properties to help leave everything fresh, tidy, and ready for handover.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
