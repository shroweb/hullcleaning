import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, BedDouble, Star, RefreshCcw } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";

const features = [
  "Full clean between every guest stay",
  "Bed linen change and fresh towels",
  "Bathrooms and kitchens sanitised",
  "Guest supplies restocked if needed",
  "Same-day turnaround available",
  "Reliable cover across Hull and East Riding",
];

export default function AirbnbPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Airbnb and Holiday Let Cleaning Hull"
        description="Airbnb and holiday let cleaning in Hull and East Yorkshire. Fast turnaround cleans with linen change, restocking, and reliable cover between every booking."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-label font-bold tracking-widest uppercase text-xs">Short-Term Lets</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Airbnb and Holiday Let <br />
            <span className="text-brand-primary">Cleaning in Hull</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Fast, reliable turnaround cleans for short-term lets and holiday properties across Hull and East Yorkshire — so every guest arrives to a fresh, welcoming space.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:flex lg:flex-row-reverse gap-20 items-center mb-24">
          <div className="lg:w-1/2 rounded-[2.5rem] bg-gradient-to-br from-brand-accent via-white to-brand-accent-green p-12 flex items-center justify-center">
            <div className="text-center space-y-6">
              <div className="w-20 h-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto">
                <BedDouble size={36} className="text-brand-primary" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Guest-Ready Every Time</h3>
              <p className="text-gray-600 max-w-xs mx-auto">We work around your booking calendar so your property is always clean, fresh, and ready before the next arrival.</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Reliable Between Every Booking</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Short-term lets depend on consistent presentation. We handle the turnaround clean between guests — linen changes, bathroom and kitchen resets, restocking supplies, and making sure the property is exactly as guests expect when they arrive.
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
                <Button size="lg">Chat on WhatsApp</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card>
            <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-xl flex items-center justify-center mb-6">
              <RefreshCcw size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Turnaround Cleans</h3>
            <p className="text-gray-600 leading-relaxed">Full clean and reset between guest stays, timed around your check-out and check-in windows — including same-day turnarounds.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <BedDouble size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Linen and Supplies</h3>
            <p className="text-gray-600 leading-relaxed">Bed linen and towel changes included, plus restocking of guest essentials if you provide them — leaving nothing for you to manage remotely.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Star size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">5-Star Presentation</h3>
            <p className="text-gray-600 leading-relaxed">Consistent cleaning helps protect your reviews and ratings — guests notice the difference a properly cleaned property makes.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
