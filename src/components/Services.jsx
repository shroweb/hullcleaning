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
    <section id="services" className="overflow-hidden bg-white py-24">
      <div className="container mx-auto px-6">
        {!hideHeading && (
          <div className="mx-auto mb-16 max-w-2xl text-center">
            <span className="text-brand-label text-xs font-bold uppercase tracking-[0.18em]">Services</span>
            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
              Straightforward cleaning services for local homes and businesses
            </h2>
            <p className="mt-5 text-lg text-gray-600">
              Domestic, commercial, tenancy, takeaway, and tidy-up support across Hull and the surrounding area.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="h-full group"
            >
              <Card className="flex h-full flex-col overflow-hidden border-gray-200 bg-white transition-shadow duration-300 group-hover:shadow-lg">
                <div className="mb-8 flex justify-center p-1 md:justify-start">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary">
                    <service.icon size={28} />
                  </div>
                </div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="mb-8 min-h-[112px] leading-relaxed text-gray-600">
                    {service.description}
                  </p>

                  <ul className="mb-8 space-y-4">
                    {service.perks.map((perk) => (
                      <li key={perk} className="flex items-center justify-center gap-3 text-sm font-medium text-gray-700 md:justify-start">
                        <CheckCircle2 size={18} className="shrink-0 text-green-500" />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>

                {service.image ? (
                  <div className="relative mt-4 h-52 overflow-hidden rounded-[1.5rem] bg-gray-100">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                ) : null}

                <Link to={service.link} className="mt-6 inline-flex items-center justify-center text-sm font-bold text-brand-primary hover:text-[#0d68d2] md:justify-start">
                  View details
                </Link>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
