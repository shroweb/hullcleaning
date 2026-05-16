import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
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
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white pb-0 pt-28 sm:pt-32">
        <div className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-blue-50/80 to-transparent" />

        <div className="container relative z-10 mx-auto px-5 sm:px-6">
          <div className={`grid items-center gap-10 xl:gap-16 ${reverse ? "xl:grid-cols-[0.9fr_1fr]" : "xl:grid-cols-[1fr_0.9fr]"}`}>
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className={reverse ? "xl:order-2" : ""}
            >
              <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-label shadow-sm ring-1 ring-blue-100">
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

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, x: reverse ? -30 : 30 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              className={`relative mx-auto w-full max-w-[480px] xl:max-w-none ${reverse ? "xl:order-1" : ""}`}
            >
              <div className="absolute inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-brand-accent via-white to-brand-accent-green blur-2xl opacity-70" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/60 shadow-2xl shadow-blue-500/10">
                <img
                  src={image}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover object-center"
                  width="540"
                  height="405"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="relative mt-16 h-12 overflow-hidden">
          <svg
            className="absolute bottom-0 w-full text-white"
            viewBox="0 0 1440 48"
            preserveAspectRatio="none"
            fill="currentColor"
          >
            <path d="M0,48 L0,20 Q360,0 720,20 Q1080,40 1440,16 L1440,48 Z" />
          </svg>
        </div>
      </section>

      {/* ── Body ── */}
      <div className="container mx-auto px-5 pb-24 sm:px-6">
        {/* Intro + features / info cards */}
        <div className={`grid items-start gap-10 lg:gap-14 xl:grid-cols-2 mt-2`}>
          {/* Left: intro text + feature checklist */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
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
                  className="flex items-start gap-3 rounded-2xl border border-gray-100 bg-gray-50/70 px-4 py-3.5 text-sm font-medium text-gray-700"
                >
                  <CheckCircle2 size={17} className={`mt-0.5 shrink-0 ${checklistColorClass}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            {/* Trust bar */}
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-gray-100 pt-6">
              <div className="text-sm font-medium text-gray-500">
                <span className="font-bold text-gray-900">Fully insured</span>
              </div>
              <div className="text-sm font-medium text-gray-500">
                <span className="font-bold text-gray-900">Based in Swanland</span>
              </div>
              <div className="text-sm font-medium text-gray-500">
                <span className="font-bold text-gray-900">50+ happy customers</span>
              </div>
            </div>
          </motion.div>

          {/* Right: info cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            viewport={{ once: true }}
            className={`grid gap-5 ${reverse ? "xl:order-1" : ""}`}
          >
            {infoCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  viewport={{ once: true }}
                >
                  <Card className="border-gray-100 p-6 shadow-sm transition-shadow duration-200 hover:shadow-md">
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
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* ── CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand-primary to-brand-secondary px-8 py-10 text-white lg:px-12 lg:py-12"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Ready to book?</h2>
              <p className="mt-3 max-w-xl text-blue-100">
                Message us on WhatsApp for the fastest reply, or use our contact form and we'll get back to you the same day.
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

        {/* ── Area links ── */}
        <InternalLinksSection
          title={localCoverageTitle || `Areas we cover for ${title.toLowerCase()}`}
          description={
            localCoverageText ||
            `We cover Hull, Swanland, and nearby villages for ${title.toLowerCase()}, with local pages for each area so you can quickly see where we work.`
          }
          items={areaLinks}
          variant="areas"
        />

        {/* ── Related services ── */}
        <InternalLinksSection
          title="Related cleaning services"
          description="Customers often book more than one type of cleaning support. These pages make it easy to compare the other services we offer nearby."
          items={relatedServices}
        />
      </div>
    </div>
  );
}
