import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, KeyRound, ShieldCheck, Clock } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";

const features = [
  "Full property deep clean throughout",
  "Oven, hob, and extractor cleaning",
  "Fridge and white goods cleaned inside and out",
  "Bathrooms and toilets thoroughly sanitised",
  "Skirting boards, light switches, and doors wiped",
  "Windows cleaned on the inside",
];

export default function EndOfTenancyPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="End of Tenancy Cleaning Hull"
        description="End of tenancy cleaning in Hull for tenants and landlords. Thorough move-out cleans to meet check-out standards and protect your deposit."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-label font-bold tracking-widest uppercase text-xs">Move-Out Cleaning</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            End of Tenancy Cleaning <br />
            <span className="text-brand-primary">in Hull</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Thorough move-out cleans for tenants and landlords across Hull and the surrounding area — helping you meet check-out standards and protect deposits.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:flex lg:flex-row-reverse gap-20 items-center mb-24">
          <div className="lg:w-1/2 relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/end-of-tenancy.jpg" alt="End of tenancy cleaning Hull" className="w-full h-auto" />
            </div>
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-brand-accent rounded-full -z-10 blur-2xl" />
          </div>

          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Clean to Check-Out Standard</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              End of tenancy cleans cover every area letting agents inspect — from ovens and extractor fans to skirting boards and bathroom grout. We work through the property methodically so nothing is missed.
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
                <Button size="lg">Get a Free Quote</Button>
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
              <KeyRound size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Tenants</h3>
            <p className="text-gray-600 leading-relaxed">Leave the property in the condition required to protect your deposit, without spending your last days there scrubbing.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Landlords</h3>
            <p className="text-gray-600 leading-relaxed">Get the property cleaned between tenancies quickly and to a consistent standard, ready to re-let without delay.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Clock size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Short Notice</h3>
            <p className="text-gray-600 leading-relaxed">We understand move-out timelines can be tight. Contact us as early as possible and we will do our best to fit you in.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
