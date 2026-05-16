import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { Button, Card } from "./ui";
import InternalLinksSection from "./InternalLinksSection";

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
  localCoverageTitle,
  localCoverageText,
  areaLinks = [],
  relatedServices = [],
}) {
  return (
    <div className="bg-white">
      <section className="bg-[#f8f9fa] pb-16 pt-28 sm:pt-32">
        <div className="container mx-auto px-5 sm:px-6">
          <div className={`grid items-center gap-10 xl:gap-16 ${reverse ? "xl:grid-cols-[0.9fr_1fr]" : "xl:grid-cols-[1fr_0.9fr]"}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className={reverse ? "xl:order-2" : ""}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-label shadow-sm ring-1 ring-gray-200">
                <span className="h-1.5 w-1.5 rounded-full bg-brand-secondary" />
                {eyebrow}
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight text-gray-900 sm:text-5xl xl:text-[3.5rem]">
                {title}{" "}
                <span className="text-brand-primary">{highlight}</span>
              </h1>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-gray-500">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full gap-2 shadow-lg shadow-brand-primary/20 sm:w-auto">
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: reverse ? -24 : 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className={`relative mx-auto w-full max-w-[480px] xl:max-w-none ${reverse ? "xl:order-1" : ""}`}
            >
              <div className="overflow-hidden rounded-[2rem] border border-gray-200 shadow-xl shadow-gray-200/60">
                <img
                  src={image}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover object-center"
                  width="540"
                  height="405"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-5 pb-24 sm:px-6">
        <div className="grid items-start gap-10 pt-14 lg:gap-14 xl:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={reverse ? "xl:order-2" : ""}
          >
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              {introTitle}
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-gray-500">{introText}</p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50 px-4 py-3.5 text-sm font-medium text-gray-700"
                >
                  <CheckCircle2 size={17} className={`mt-0.5 shrink-0 ${checklistColorClass}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-gray-100 pt-6 text-sm text-gray-400">
              Fully insured · Based in Swanland · 50+ homes and businesses cleaned across Hull and East Riding
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            viewport={{ once: true }}
            className={`grid gap-5 ${reverse ? "xl:order-1" : ""}`}
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="border-gray-100 p-6 shadow-sm">
                  <div className="flex items-start gap-5">
                    <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${card.iconWrapClass}`}>
                      <Icon size={22} className={card.iconClass} />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-gray-900">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.text}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-gray-900 px-8 py-10 text-white lg:px-12 lg:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Get a price</h2>
              <p className="mt-3 max-w-xl text-gray-400">
                WhatsApp is fastest. Tell us the property size and what you need, and we'll come back to you with a price.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" variant="white" className="w-full gap-2 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white/10 shadow-none hover:bg-white/20 sm:w-auto">
                  Contact form
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {(areaLinks.length > 0 || relatedServices.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2rem] bg-gray-50 px-8 py-10 sm:px-10 lg:px-12"
          >
            {areaLinks.length > 0 && (
              <InternalLinksSection
                flush
                title={localCoverageTitle || `Areas we cover for ${title.toLowerCase()}`}
                description={localCoverageText}
                items={areaLinks}
                variant="areas"
              />
            )}
            {areaLinks.length > 0 && relatedServices.length > 0 && (
              <div className="my-10 border-t border-gray-200" />
            )}
            {relatedServices.length > 0 && (
              <InternalLinksSection
                flush
                title="Other services we offer"
                description="We often cover more than one type of cleaning for the same customer."
                items={relatedServices}
              />
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}
