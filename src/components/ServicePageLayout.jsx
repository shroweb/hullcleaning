import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button, Card } from "./ui";

export default function ServicePageLayout({
  eyebrow,
  title,
  highlight,
  description,
  image,
  imageAlt,
  introTitle,
  introText,
  features,
  infoCards,
  reverse = false,
  primaryCtaLabel = "Chat on WhatsApp",
  secondaryCtaLabel = "Get a Quote",
  checklistColorClass = "text-brand-primary",
}) {
  return (
    <div className="bg-white pb-24 pt-28 sm:pt-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto mb-14 max-w-5xl"
        >
          <div className="rounded-[2rem] border border-gray-200 bg-[#f7fbff] p-8 shadow-sm sm:p-10 lg:p-12">
            <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
              <div className={reverse ? "lg:order-2" : ""}>
                <span className="inline-flex rounded-full border border-[#d7e7fb] bg-white px-4 py-2 text-brand-label text-xs font-bold uppercase tracking-[0.18em]">
                  {eyebrow}
                </span>
                <h1 className="mt-5 max-w-[12ch] text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-[3.7rem]">
                  {title} <span className="text-brand-primary">{highlight}</span>
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
                  {description}
                </p>
                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                    <Button size="lg" className="w-full gap-2 sm:w-auto">
                      <MessageCircle size={18} />
                      {primaryCtaLabel}
                    </Button>
                  </a>
                  <Link to="/contact">
                    <Button variant="secondary" size="lg" className="w-full sm:w-auto">
                      {secondaryCtaLabel}
                    </Button>
                  </Link>
                </div>
              </div>

              <div className={reverse ? "lg:order-1" : ""}>
                <div className="overflow-hidden rounded-[1.75rem] border border-white bg-white shadow-lg shadow-gray-200/80">
                  <img src={image} alt={imageAlt} className="h-full w-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <div className={`grid items-start gap-12 lg:grid-cols-[${reverse ? "0.92fr_1.08fr" : "1.08fr_0.92fr"}]`}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={reverse ? "lg:order-2" : ""}
          >
            <div className="rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm sm:p-10">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900">{introTitle}</h2>
              <p className="mt-5 text-lg leading-relaxed text-gray-600">{introText}</p>

              <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-4 text-sm font-medium text-gray-700">
                    <CheckCircle2 size={18} className={`mt-0.5 shrink-0 ${checklistColorClass}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            viewport={{ once: true }}
            className={reverse ? "lg:order-1" : ""}
          >
            <div className="grid gap-6">
              {infoCards.map((card) => {
                const Icon = card.icon;

                return (
                  <Card key={card.title} className="border-gray-200 p-7 shadow-sm">
                    <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconWrapClass}`}>
                      <Icon size={22} className={card.iconClass} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
                    <p className="mt-3 leading-relaxed text-gray-600">{card.text}</p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
