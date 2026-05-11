import { Link } from "react-router-dom";
import { Card } from "./ui";

export default function InternalLinksSection({ title, description, items, variant = "services" }) {
  if (!items?.length) return null;

  return (
    <section className="mt-16">
      <div className="mb-8 max-w-3xl">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900">{title}</h2>
        {description ? <p className="mt-4 text-lg leading-relaxed text-gray-600">{description}</p> : null}
      </div>

      {variant === "areas" ? (
        <div className="flex flex-wrap gap-3">
          {items.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:border-brand-primary hover:text-brand-primary"
            >
              {item.label}
            </Link>
          ))}
        </div>
      ) : (
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item) => (
            <Link key={item.to} to={item.to} className="block h-full">
              <Card className="h-full border-gray-200 p-6 transition-shadow duration-200 hover:shadow-md">
                <h3 className="text-xl font-bold text-gray-900">{item.label}</h3>
                {item.description ? (
                  <p className="mt-3 leading-relaxed text-gray-600">{item.description}</p>
                ) : null}
                <div className="mt-5 text-sm font-bold text-brand-primary">View page</div>
              </Card>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
