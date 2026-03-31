import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Building, ShieldCheck, Clock } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";

const features = [
  "Office and workstation cleaning",
  "Kitchen and staff area cleaning",
  "Washroom cleaning and restocking checks",
  "Takeaway deep cleans",
  "Regular business cleaning schedules",
  "Flexible visits around opening hours",
];

export default function CommercialPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Commercial Cleaning"
        description="Commercial office cleaning and takeaway deep cleans across Hull and nearby villages."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Business Cleaning</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Commercial Cleaning <br />
            <span className="text-brand-primary">for Offices and Food Premises</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            We provide dependable cleaning for offices, workplaces, and takeaways across Hull and the surrounding area, with visits arranged around your business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:flex lg:flex-row-reverse gap-20 items-center mb-24">
          <div className="lg:w-1/2 relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/commercial.png" alt="Commercial cleaning" className="w-full h-auto" />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-accent rounded-full -z-10 blur-2xl" />
          </div>
          
          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Tailored to Your Schedule</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every workplace runs differently, so we keep things practical. We can help with regular office cleaning, takeaway resets, and deeper cleans arranged around your quieter hours.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map(f => (
                <li key={f} className="flex items-start gap-3 text-gray-700 font-medium">
                  <CheckCircle2 size={24} className="text-brand-primary shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            <div className="pt-6 flex gap-4">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg">Request a Proposal</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">Contact Us</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card>
            <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Insured & Vetted</h3>
            <p className="text-gray-600 leading-relaxed">A dependable local service for businesses that want consistency, professionalism, and clear communication.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-xl flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Flexible Hours</h3>
            <p className="text-gray-600 leading-relaxed">Cleaning planned around your opening times to keep disruption to a minimum.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Building size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Scope</h3>
            <p className="text-gray-600 leading-relaxed">Suitable for offices, small commercial spaces, and takeaway environments that need regular upkeep or a deeper clean.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
