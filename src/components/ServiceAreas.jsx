import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui";
import { serviceAreas } from "../data/serviceAreas";

export default function ServiceAreas() {
  return (
    <section className="bg-white py-20 border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <span className="text-brand-primary text-xs font-bold uppercase tracking-wider bg-slate-100 px-4 py-1.5 rounded-full">
            Our Coverage
          </span>
          <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
            Serving Hull &amp; surrounding villages
          </h2>
          <p className="mt-4 text-base text-slate-500">
            Based in Swanland, we regularly clean homes and business premises across West Hull and East Yorkshire.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {serviceAreas.map((area, index) => (
            <motion.div
              key={area.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <Link to={`/areas/${area.slug}/`} className="group block h-full">
                <Card className="h-full border-slate-200 bg-white p-7 shadow-sm hover:border-slate-350 hover:shadow-md transition-all duration-300">
                  <h3 className="font-display text-lg font-bold text-brand-deep group-hover:text-brand-primary transition-colors duration-150">
                    {area.name}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-500">{area.intro}</p>
                  <div className="mt-5 pt-4 border-t border-slate-100 flex items-center gap-1 text-xs font-extrabold text-brand-primary">
                    Explore coverage details
                    <ArrowRight size={13} className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
