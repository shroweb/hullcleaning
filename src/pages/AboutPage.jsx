import { motion } from "framer-motion";
import { Sparkles, Shield, UserCheck, Clock } from "lucide-react";
import { Card } from "../components/ui";
import Seo from "../components/Seo";

const values = [
  {
    title: "Trustworthy Team",
    description: "Every member of In & Out Cleaning is fully vetted, insured, and background-checked for your peace of mind.",
    icon: Shield,
  },
  {
    title: "Local Expertise",
    description: "Based in Swanland, we understand the needs of local homes and businesses across Hull and the surrounding villages.",
    icon: UserCheck,
  },
  {
    title: "Reliability Guaranteed",
    description: "We show up on time, every time. Your schedule is our priority, and we never miss a clean.",
    icon: Clock,
  },
];

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <Seo
        title="About"
        description="Learn about the Swanland-based team behind In & Out Cleaning and how we help homes and businesses across Hull and nearby villages."
      />
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs">Our Story</span>
          <h1 className="mt-4 text-5xl font-extrabold text-gray-900 tracking-tight">
            Passionately Cleaning <br />
            <span className="text-brand-primary">Hull & East Yorkshire</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600">
            We built In & Out Cleaning around dependable local service, clear communication, and practical help for busy households and businesses across Hull and East Yorkshire.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-20">
          <div className="relative">
            <div className="rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img src="/hero.png" alt="Our team cleaning in Hull" className="w-full h-auto" />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-brand-accent rounded-full -z-10 blur-2xl" />
          </div>
          
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">What Drives Us</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe a clean, organised space makes day-to-day life easier. Whether it is your home, office, takeaway, rental property, or garden area, we approach each job with the same care and attention to detail.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From one-off domestic cleans to regular visits and end of tenancy jobs, we focus on being easy to deal with, reliable on the day, and thorough in the finish.
            </p>
            
            <div className="pt-6">
              <div className="flex items-center gap-4 text-brand-primary font-bold text-xl">
                <Sparkles className="w-8 h-8" />
                <span>Practical cleaning with a local touch.</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full text-center">
                <div className="w-16 h-16 bg-brand-accent text-brand-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
