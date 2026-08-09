import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Card } from "./ui";

export default function InternalLinksSection({ title, description, items, variant = "services", flush = false }) {
  if (!items?.length) return null;

  const canonicalPath = (to) => (to === "/" ? to : `${to.replace(/\/+$/, "")}/`);

  return (
    <div className={flush ? "" : "mt-12"}>
      <div className="mb-6 max-w-3xl">
        <h2 className="text-xl font-bold tracking-tight text-gray-900">{title}</h2>
        {description ? (
          <p className="mt-2 text-sm leading-relaxed text-gray-500">{description}</p>
        ) : null}
      </div>

      {variant === "areas" ? (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
          {items.map((item) => (
            <Link
              key={item.to}
              to={canonicalPath(item.to)}
              className="group flex items-center gap-2.5 rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              <MapPin size={13} className="shrink-0 text-gray-300 transition-colors group-hover:text-brand-primary" />
              {item.label}
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link key={item.to} to={canonicalPath(item.to)} className="group block h-full">
              <Card className="h-full border-gray-200 bg-white p-5 shadow-none transition-all duration-200 group-hover:border-blue-100 group-hover:shadow-sm">
                <h3 className="text-base font-bold text-gray-900 transition-colors duration-150 group-hover:text-brand-primary">
                  {item.label}
                </h3>
                {item.description ? (
                  <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-gray-500">
                    {item.description}
                  </p>
                ) : null}
                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-brand-primary">
                  View page
                  <ArrowRight size={12} className="transition-transform duration-150 group-hover:translate-x-0.5" />
                </div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
