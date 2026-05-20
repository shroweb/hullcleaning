import { motion } from "framer-motion";
import { Home, Building, Leaf, KeyRound, UtensilsCrossed, BedDouble, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui";

const services = [
  {
    title: "Domestic Cleaning",
    description: "Flexible one-off and regular home cleaning with careful attention to kitchens, bathrooms, dusting, floors, and general reset visits.",
    icon: Home,
    image: "/residential.png",
    perks: ["One-off cleans", "Regular weekly or fortnightly visits", "Deep cleans available"],
    link: "/domestic-cleaning-hull",
  },
  {
    title: "End of Tenancy Cleaning",
    description: "Thorough move-out cleans across Hull to help tenants and landlords meet check-out standards and get deposits back with confidence.",
    icon: KeyRound,
    image: "/end-of-tenancy.jpg",
    perks: ["Full property deep clean", "Ovens, fridges, and white goods", "Available on short notice"],
    link: "/end-of-tenancy-cleaning-hull",
  },
  {
    title: "Commercial Office Cleaning",
    description: "Dependable workplace cleaning for offices and business premises across Hull, arranged around your hours and staff schedule.",
    icon: Building,
    image: "/commercial.png",
    perks: ["Regular cleaning contracts", "Workstations and common areas", "Flexible around opening hours"],
    link: "/commercial-cleaning-hull",
  },
  {
    title: "Takeaway and Restaurant Cleaning",
    description: "Deep cleaning for food businesses in Hull, including kitchens, fryers, extraction, and front-of-house areas between services.",
    icon: UtensilsCrossed,
    image: "/takeaway.jpg",
    perks: ["Kitchen and extraction cleaning", "Fryers, ovens, and surfaces", "Early morning or late night slots"],
    link: "/takeaway-cleaning-hull",
  },
  {
    title: "Airbnb and Holiday Let Cleaning",
    description: "Fast turnaround cleans for short-term lets and holiday properties across Hull and the East Riding, ready for each new guest.",
    icon: BedDouble,
    image: "/airbnb.jpg",
    perks: ["Same-day turnaround available", "Linen change and restocking", "Reliable between bookings"],
    link: "/airbnb-cleaning-hull",
  },
  {
    title: "Tidy Ups and Organisation Help",
    description: "Practical support for homes and outdoor spaces, including garden tidy ups, weeding, and getting rooms back under control.",
    icon: Leaf,
    image: "/tidy-ups.jpg",
    perks: ["Garden tidy ups and weeding", "General tidying and declutter", "Organisation support"],
    link: "/tidy-ups-hull",
  },
];

export default function Services({ hideHeading = false }) {
  return (
    <section id="services" className="bg-white pb-24 pt-16">
      <div className="container mx-auto px-6">
        {!hideHeading && (
          <div className="mb-12">
            <span className="text-brand-label text-xs font-bold uppercase tracking-[0.18em]">Services</span>
            <h2 className="mt-4 max-w-2xl text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
              Straightforward cleaning for local homes and businesses
            </h2>
            <p className="mt-4 max-w-xl text-lg text-gray-500">
              Domestic, commercial, tenancy, takeaway, and tidy-up support across Hull and the surrounding area.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="h-full group"
            >
              <Card className="flex h-full flex-col overflow-hidden border-gray-200 bg-white p-0 transition-shadow duration-300 group-hover:shadow-lg">
                {service.image && (
                  <div className="h-48 w-full overflow-hidden rounded-t-[1.75rem] bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7">
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary">
                    <service.icon size={24} />
                  </div>

                  <h3 className="mb-3 text-xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-6 leading-relaxed text-gray-500 text-sm">{service.description}</p>

                  <ul className="mb-6 space-y-2.5">
                    {service.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-sm font-medium text-gray-700">
                        <CheckCircle2 size={16} className="shrink-0 text-green-500" />
                        {perk}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto">
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-sm font-bold text-brand-primary hover:text-[#0d68d2]"
                    >
                      View details →
                    </Link>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
