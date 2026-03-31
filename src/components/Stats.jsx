import { motion } from "framer-motion";

const stats = [
  { label: "Happy Customers", value: "50+" },
  { label: "Service Areas", value: "7" },
  { label: "Core Services", value: "6" },
  { label: "Based In", value: "Swanland" },
];

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#0b2241] via-brand-primary to-[#2f7d22] py-24 text-white">
      <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-white/10 -translate-y-1/2 translate-x-1/2 blur-3xl opacity-50" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-brand-secondary/20 translate-y-1/2 -translate-x-1/2 blur-3xl opacity-70" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="text-4xl lg:text-7xl font-black mb-4 group-hover:scale-110 transition-transform duration-500 tracking-tight break-words">
                {stat.value}
              </div>
              <div className="text-sm font-bold tracking-[0.2em] text-white/75 uppercase opacity-70">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
