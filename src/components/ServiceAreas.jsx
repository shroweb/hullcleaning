import { motion } from "framer-motion";
import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui";
import { serviceAreas } from "../data/serviceAreas";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="mb-12">
          <span className="text-brand-label text-xs font-bold uppercase tracking-[0.18em]">
            Service Areas
          </span>
          <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
            Cleaning across Hull and the surrounding villages
          </h2>
          <p className="mt-4 max-w-xl text-lg text-gray-500">
            Based in Swanland, we regularly cover homes and businesses across West Hull and East Yorkshire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Link to={`/areas/${area.slug}`} className="group block h-full">
                <Card className="h-full border-gray-100 shadow-sm transition-all duration-200 group-hover:border-blue-100 group-hover:shadow-md">
                  <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-accent text-brand-primary">
                    <MapPin size={18} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-primary transition-colors duration-150">
                    {area.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-500">{area.intro}</p>
                  <div className="mt-4 flex items-center gap-1 text-sm font-bold text-brand-primary">
                    View local page
                    <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
