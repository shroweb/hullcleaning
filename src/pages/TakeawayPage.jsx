import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, UtensilsCrossed, ShieldCheck, Clock } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";

const features = [
  "Kitchen deep clean throughout",
  "Fryers, grills, and ovens degreased",
  "Extraction canopy and filters cleaned",
  "Prep areas and surfaces sanitised",
  "Floors, walls, and tiles scrubbed",
  "Front-of-house and seating areas",
];

export default function TakeawayPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Takeaway and Restaurant Cleaning Hull"
        description="Specialist takeaway and restaurant cleaning in Hull. Kitchen deep cleans, fryers, extraction, and front-of-house — available early mornings and late nights."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-label font-bold tracking-widest uppercase text-xs">Food Business Cleaning</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Takeaway and Restaurant <br />
            <span className="text-brand-primary">Cleaning in Hull</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Deep cleaning for food businesses across Hull — kitchens, fryers, extraction, and customer areas cleaned to a high standard around your opening times.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/takeaway.jpg" alt="Takeaway and restaurant cleaning Hull" className="w-full h-auto" />
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-accent rounded-full -z-10 blur-2xl" />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Cleaned Around Your Hours</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Takeaway and restaurant kitchens need more than a general wipe-down. We handle the heavy-duty grease, built-up carbon, and hard-to-reach areas that are difficult to keep on top of during service — and we schedule visits for early mornings or late nights to avoid disrupting your trade.
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
                <Button size="lg">Get a Quote</Button>
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
              <UtensilsCrossed size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Kitchen Deep Clean</h3>
            <p className="text-gray-600 leading-relaxed">Fryers, ovens, grills, surfaces, and floors cleaned thoroughly — the kind of reset that is hard to achieve during normal trading.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Hygiene Standards</h3>
            <p className="text-gray-600 leading-relaxed">Helps you maintain a clean and compliant kitchen environment, supporting your hygiene rating and food safety commitments.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Out-of-Hours Visits</h3>
            <p className="text-gray-600 leading-relaxed">Early mornings and late nights available so cleaning never gets in the way of service or your regular customers.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
