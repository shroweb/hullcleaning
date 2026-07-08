import { motion } from "framer-motion";
import { Shield, Sparkles, Home, CheckCircle2 } from "lucide-react";

const metrics = [
  { label: "Jobs Completed", value: "100+", icon: CheckCircle2 },
  { label: "DBS Checked Cleaners", value: "100% Vetted", icon: Shield },
  { label: "Independent Operation", value: "Family Run", icon: Sparkles },
  { label: "Serving Hull & Surrounds", value: "Swanland Base", icon: Home },
];

export default function Stats() {
  return (
    <section className="bg-slate-900 py-16 text-white border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div key={metric.label} className="flex items-start gap-4 p-4 border border-white/5 bg-white/[0.02] rounded-2xl">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-primary">
                  <Icon size={20} />
                </div>
                <div>
                  <div className="text-xl font-extrabold tracking-tight text-white">
                    {metric.value}
                  </div>
                  <div className="mt-1 text-xs font-bold uppercase tracking-wider text-slate-400">
                    {metric.label}
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
