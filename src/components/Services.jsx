import { motion } from "framer-motion";
import { Home, Building, Leaf, KeyRound, UtensilsCrossed, ChefHat, BedDouble, CheckCircle2, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui";

const services = [
  {
    title: "Domestic Cleaning",
    description: "Flexible one-off and regular home cleaning with careful attention to kitchens, bathrooms, dusting, floors, and general reset visits.",
    icon: Home,
    image: "/residential.png",
    perks: ["One-off resets", "Regular weekly/fortnightly visits", "Detailed kitchen & bathroom cleans"],
    link: "/domestic-cleaning-hull/",
  },
  {
    title: "End of Tenancy Cleaning",
    description: "Thorough move-out cleans across Hull to help tenants and landlords meet check-out standards and get deposits back with confidence.",
    icon: KeyRound,
    image: "/end-of-tenancy.jpg",
    perks: ["Full deep cleans of all rooms", "Ovens & white goods scrubbed", "Short notice booking slots"],
    link: "/end-of-tenancy-cleaning-hull/",
  },
  {
    title: "Commercial Office Cleaning",
    description: "Dependable workplace cleaning for offices and business premises across Hull, arranged around your hours and staff schedule.",
    icon: Building,
    image: "/commercial.png",
    perks: ["Routine contract visits", "Workstations & common areas", "Quiet hours timing"],
    link: "/commercial-cleaning-hull/",
  },
  {
    title: "Takeaway Cleaning",
    description: "Deep cleaning for takeaways and fast-food kitchens in Hull, including fryers, extraction, and prep areas between services.",
    icon: UtensilsCrossed,
    image: "/takeaway.jpg",
    perks: ["Kitchen & ventilation cleans", "Fryers, grills & cookers", "Out of hours operations"],
    link: "/takeaway-cleaning-hull/",
  },
  {
    title: "Restaurant Cleaning",
    description: "Deep cleaning for restaurants, cafes, and bars in Hull — kitchens, dining areas, bars, and front-of-house, arranged out of hours.",
    icon: ChefHat,
    image: "/takeaway.jpg",
    perks: ["Dining & front-of-house areas", "Kitchens, bars & facilities", "Early morning / late night slots"],
    link: "/restaurant-cleaning-hull/",
  },
  {
    title: "Airbnb & Holiday Let Cleaning",
    description: "Fast turnaround cleans for short-term lets and holiday properties across Hull and the East Riding, ready for each new guest.",
    icon: BedDouble,
    image: "/airbnb.jpg",
    perks: ["Same-day transition times", "Linen replacement & restocking", "Key collection management"],
    link: "/airbnb-cleaning-hull/",
  },
  {
    title: "Tidy Ups & Organisation Help",
    description: "Practical support for homes and outdoor spaces, including garden tidy ups, weeding, and getting rooms back under control.",
    icon: Leaf,
    image: "/tidy-ups.jpg",
    perks: ["Garden weeding & path tidies", "Room sorting & decluttering", "General organization resets"],
    link: "/tidy-ups-hull/",
  },
];

export default function Services({ hideHeading = false }) {
  return (
    <section id="services" className="bg-white pb-28 pt-20">
      <div className="max-w-6xl mx-auto px-6">
        {!hideHeading && (
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-wider bg-slate-100 px-4 py-1.5 rounded-full">
              What We Offer
            </span>
            <h2 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-brand-deep sm:text-4xl">
              Professional cleaning tailored for homes & businesses
            </h2>
            <p className="mt-4 text-base text-slate-500 sm:text-lg">
              Independent domestic, commercial, tenancy, takeaway, and tidy-up support across Hull and surrounding villages.
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full group"
            >
              <Card className="flex h-full flex-col overflow-hidden border-slate-200 bg-white p-0 shadow-sm hover:shadow-md hover:border-slate-300 transition-all duration-300">
                {service.image && (
                  <div className="relative h-52 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                    <img
                      src={service.image}
                      alt={`${service.title} in Hull and East Yorkshire`}
                      width="400"
                      height="208"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.01]"
                      loading="lazy"
                    />
                  </div>
                )}

                <div className="flex flex-1 flex-col p-7">
                  {/* Clean Icon Container */}
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-slate-50 text-slate-700 shadow-sm border border-slate-100 group-hover:bg-brand-primary group-hover:text-white group-hover:border-brand-primary transition-all duration-300">
                    <service.icon size={22} />
                  </div>

                  <h3 className="mb-3 font-display text-lg font-bold text-brand-deep group-hover:text-brand-primary transition-colors duration-200">
                    {service.title}
                  </h3>
                  <p className="mb-5 leading-relaxed text-slate-500 text-sm">{service.description}</p>

                  <ul className="mb-6 space-y-2.5">
                    {service.perks.map((perk) => (
                      <li key={perk} className="flex items-center gap-2.5 text-sm font-semibold text-slate-700">
                        <CheckCircle2 size={15} className="shrink-0 text-brand-secondary" />
                        <span>{perk}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4 border-t border-slate-100">
                    <Link
                      to={`${service.link.replace(/\/+$/, "")}/`}
                      className="inline-flex items-center gap-1.5 text-sm font-extrabold text-brand-primary group-hover:text-brand-label transition-colors duration-200"
                    >
                      View details
                      <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-0.5" />
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
