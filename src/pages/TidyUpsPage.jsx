import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, Leaf, Scissors, PackageOpen } from "lucide-react";
import { Button, Card } from "../components/ui";
import Seo from "../components/Seo";

const features = [
  "Garden tidy ups and weeding",
  "Lawn edge tidying and clearing",
  "General indoor tidying and declutter",
  "Room reorganisation and reset",
  "Clearing and sorting after busy periods",
  "Light prep before guests or viewings",
];

export default function TidyUpsPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="Tidy Ups and Garden Help"
        description="Garden tidy ups, weeding, and organisation help across Hull and nearby villages. Practical support for homes and outdoor spaces."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-label font-bold tracking-widest uppercase text-xs">Garden and Home</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Tidy Ups and <br />
            <span className="text-brand-primary">Organisation Help in Hull</span>
          </h1>
          <p className="mt-6 text-xl text-gray-600">
            Practical support for homes and outdoor spaces across Hull and the surrounding area — from garden clear-ups to getting rooms back in order.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-24">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/tidy-ups.jpg" alt="Garden tidy up service Hull" className="w-full h-auto" />
            </div>
            <div className="absolute -top-10 -left-10 w-48 h-48 bg-brand-accent-green rounded-full -z-10 blur-2xl" />
          </div>

          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">When Things Get on Top of You</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Whether it is a garden that has got away from you, a spare room that needs sorting, or a house that needs a practical reset before viewings or guests — we can help with the hands-on work that is hard to find time for.
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
                <Button size="lg">Ask on WhatsApp</Button>
              </a>
              <Link to="/contact">
                <Button size="lg" variant="secondary">Get a Quote</Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Card>
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
              <Leaf size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Garden Tidy Ups</h3>
            <p className="text-gray-600 leading-relaxed">Weeding, clearing overgrown areas, and bringing outdoor spaces back to a manageable state — no large landscaping, just practical tidying.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-brand-accent text-brand-primary rounded-xl flex items-center justify-center mb-6">
              <Scissors size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Outdoor Clearing</h3>
            <p className="text-gray-600 leading-relaxed">Lawn edges, border tidying, and clearing up after seasonal growth so the outside of your home looks cared for again.</p>
          </Card>
          <Card>
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <PackageOpen size={24} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Indoor Organisation</h3>
            <p className="text-gray-600 leading-relaxed">Help sorting rooms, clearing clutter, and getting spaces back under control after busy periods or ahead of a move or viewing.</p>
          </Card>
        </div>
      </div>
    </div>
  );
}
