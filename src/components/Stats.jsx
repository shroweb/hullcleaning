import { motion } from "framer-motion";

const stats = [
  { label: "Properties cleaned", value: "50+" },
  { label: "Service areas", value: "9" },
  { label: "Types of cleaning", value: "6" },
  { label: "Based in", value: "Swanland" },
];

export default function Stats() {
  return (
    <section className="border-y border-gray-100 bg-gray-50 py-14">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-gray-200"
        >
          {stats.map((stat) => (
            <div key={stat.label} className="px-6 text-center">
              <div className="text-4xl font-black tracking-tight text-gray-900 lg:text-5xl">
                {stat.value}
              </div>
              <div className="mt-2 text-xs font-bold uppercase tracking-widest text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
