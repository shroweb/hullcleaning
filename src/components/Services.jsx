import { motion } from "framer-motion";
import { Home, Building, Leaf, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Card } from "./ui";

const services = [
  {
    title: "Domestic Cleaning",
    description: "Flexible one-off and regular home cleaning with careful attention to kitchens, bathrooms, dusting, floors, and general reset visits.",
    icon: Home,
    image: "/residential.png",
    perks: ["One-off cleans", "Regular weekly or fortnightly visits", "End of tenancy support"],
    link: "/services/residential",
  },
  {
    title: "Commercial and Takeaway Cleaning",
    description: "Practical cleaning for offices, workspaces, and food premises, including regular contracts and deeper reset cleans when needed.",
    icon: Building,
    image: "/commercial.png",
    perks: ["Commercial offices", "Takeaway deep cleans", "Regular business cleaning"],
    link: "/services/commercial",
  },
  {
    title: "Tidy Ups and Organisation Help",
    description: "Extra support for homes and outdoor spaces, including garden tidy ups, weeding, and help getting spaces back in order.",
    icon: Leaf,
    image: "/tidy-ups.jpg",
    perks: ["Garden tidy ups", "General tidying", "Organisation help"],
    link: "/services#tidy-ups",
  },
];

export default function Services() {
  return (
    <section id="services" className="overflow-hidden bg-gray-50/70 py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-20 animate-in fade-in slide-in-from-bottom duration-700">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Our Expertise</span>
          <h2 className="mt-4 text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Straightforward Cleaning Services <br />
            <span className="text-brand-primary">Built Around Real Local Needs</span>
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            Domestic, commercial, tenancy, takeaway, and tidy-up support across Hull and the surrounding area.
          </p>
        </div>

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
                <Card className="h-full flex flex-col overflow-hidden border border-white/70 bg-white/90 shadow-lg shadow-gray-200/60 transition-all duration-500 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <div className="mb-8 p-1 flex justify-center md:justify-start">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary transition-transform duration-500 group-hover:rotate-6">
                      <service.icon size={28} />
                    </div>
                  </div>

                  <div className="flex-1 text-center md:text-left">
                    <h3 className="mb-4 text-2xl font-bold text-gray-900">{service.title}</h3>
                    <p className="mb-8 min-h-[112px] leading-relaxed text-gray-600">
                      {service.description}
                    </p>
                    
                    <ul className="mb-8 space-y-4">
                      {service.perks.map(perk => (
                        <li key={perk} className="flex items-center justify-center gap-3 text-sm text-gray-700 font-medium md:justify-start">
                          <CheckCircle2 size={18} className="text-green-500 shrink-0" />
                          {perk}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {service.image ? (
                    <div className="relative mt-4 h-52 overflow-hidden rounded-3xl bg-gray-100">
                      <img 
                        src={service.image} 
                        alt={service.title} 
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/15 to-transparent" />
                    </div>
                  ) : null}
                  
                  <Link to={service.link} className="mt-6 inline-flex items-center justify-center text-sm font-bold text-brand-primary md:justify-start">
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
