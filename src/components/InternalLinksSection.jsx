import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Card } from "./ui";

export default function InternalLinksSection({ title, description, items, variant = "services" }) {
  if (!items?.length) return null;

  return (
    <section className="mt-20">
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        viewport={{ once: true }}
        className="mb-8 max-w-3xl"
      >
        <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h2>
        {description ? (
          <p className="mt-3 leading-relaxed text-gray-500">{description}</p>
        ) : null}
      </motion.div>

      {variant === "areas" ? (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-wrap gap-2.5"
        >
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition-all duration-150 hover:border-brand-primary hover:bg-brand-accent hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 xl:grid-cols-3"
        >
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="group block h-full">
              <Card className="h-full border-gray-100 p-6 shadow-sm transition-all duration-200 group-hover:border-blue-100 group-hover:shadow-md">
                <h3 className="text-lg font-bold text-gray-900 transition-colors duration-150 group-hover:text-brand-primary">
                  {item.label}
                </h3>
                {item.description ? (
                  <p className="mt-2.5 line-clamp-3 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                ) : null}
                <div className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-brand-primary">
                  View page
                  <ArrowRight size={14} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </Card>
            </Link>
          ))}
        </motion.div>
      )}
    </section>
  );
}
