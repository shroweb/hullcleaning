import { motion } from "framer-motion";
import { MapPin, ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui";
import { serviceAreas } from "../data/serviceAreas";

export default function ServiceAreas() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">
            Service Areas
          </span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Cleaning Across Hull and the Surrounding Villages
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            We are based in Swanland and regularly cover homes and businesses across West Hull and East Yorkshire.
          </p>
        </div>

        <div className="rounded-[2rem] bg-gradient-to-br from-brand-accent to-white p-6 shadow-sm shadow-blue-100/40 lg:p-8">
          <div className="mb-8 flex flex-col items-center gap-6 text-center">
            <div className="flex flex-col items-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-primary shadow-sm">
                <Sparkles size={14} />
                Local Coverage
              </div>
              <p className="mt-4 max-w-3xl text-gray-600">
                Each area has its own local page so the service coverage feels clear, useful, and easy to browse.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area) => (
                <Link
                  key={`pill-${area.slug}`}
                  to={`/areas/${area.slug}`}
                  className="rounded-full border border-blue-100 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-primary hover:text-brand-primary"
                >
                  {area.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.06 }}
              viewport={{ once: true }}
            >
              <Link to={`/areas/${area.slug}`} className="block h-full group">
                <Card className="h-full border border-white/70 bg-white/90 shadow-md shadow-gray-200/60">
                  <div className="w-12 h-12 rounded-2xl bg-brand-accent text-brand-primary flex items-center justify-center mb-5">
                    <MapPin size={22} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{area.name}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">{area.intro}</p>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-brand-primary">
                    View local page
                    <ArrowRight size={16} />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
          </div>
        </div>
      </div>
    </section>
  );
}
