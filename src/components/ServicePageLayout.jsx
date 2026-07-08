import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CheckCircle2, MessageCircle, MapPin, Sparkles } from "lucide-react";
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
      {/* Header section with clean, solid typography structure */}
      <section className="relative overflow-hidden bg-slate-50 pb-16 pt-28 sm:pt-32">
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <div className={`grid items-center gap-12 xl:gap-16 ${reverse ? "xl:grid-cols-[0.9fr_1fr]" : "xl:grid-cols-[1fr_0.9fr]"}`}>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={reverse ? "xl:order-2" : ""}
            >
              <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary">
                <Sparkles size={12} className="text-brand-secondary" />
                {eyebrow}
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-brand-deep sm:text-5xl xl:text-[3.4rem]">
                {title}{" "}
                <span className="text-brand-primary">{highlight}</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-500">
                {description}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                  <Button size="lg" className="w-full gap-2.5 sm:w-auto">
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
              initial={{ opacity: 0, scale: 0.98, x: reverse ? -20 : 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className={`relative mx-auto w-full max-w-[480px] xl:max-w-none ${reverse ? "xl:order-1" : ""}`}
            >
              <div className="overflow-hidden rounded-[1.5rem] border border-slate-100 bg-white p-2 shadow-md">
                <img
                  src={image}
                  alt={imageAlt}
                  className="aspect-[4/3] w-full object-cover object-center rounded-[1.2rem]"
                  width="540"
                  height="405"
                  loading="eager"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {/* Intro details with perks */}
        <div className="grid items-start gap-12 pt-14 lg:gap-16 xl:grid-cols-2">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={reverse ? "xl:order-2" : ""}
          >
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-brand-deep sm:text-3xl">
              {introTitle}
            </h2>
            <p className="mt-5 text-base leading-relaxed text-slate-500">{introText}</p>

            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/35 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition-all duration-200"
                >
                  <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${checklistColorClass}`} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <p className="mt-8 border-t border-slate-100 pt-6 text-xs text-slate-400 font-semibold flex items-center gap-1.5">
              <MapPin size={13} className="text-brand-primary" />
              Fully Insured · Based in Swanland · Over 50 properties cleaned across Hull and East Riding
            </p>
          </motion.div>

          {/* Cards side grid */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            viewport={{ once: true }}
            className={`grid gap-5 ${reverse ? "xl:order-1" : ""}`}
          >
            {infoCards.map((card) => {
              const Icon = card.icon;
              return (
                <Card key={card.title} className="border-slate-200 p-6 shadow-sm hover:border-slate-300 transition-all duration-300">
                  <div className="flex items-start gap-4.5">
                    <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${card.iconWrapClass} border border-slate-100`}>
                      <Icon size={20} className={card.iconClass} />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-brand-deep">{card.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{card.text}</p>
                    </div>
                  </div>
                </Card>
              );
            })}
          </motion.div>

        </div>

        {/* Pricing quote call to action */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[2rem] bg-brand-deep px-8 py-12 text-white lg:px-14 lg:py-14 shadow-lg"
        >
          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between relative z-10">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-3xl">Get a pricing quote</h2>
              <p className="mt-3 max-w-xl text-slate-300 text-sm sm:text-base leading-relaxed">
                WhatsApp is by far the fastest option. Tell us your property type and what you need, and we'll send back an immediate price.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer">
                <Button size="lg" variant="white" className="w-full gap-2 sm:w-auto">
                  <MessageCircle size={18} />
                  Chat on WhatsApp
                </Button>
              </a>
              <Link to="/contact">
                <Button size="lg" className="w-full bg-white/10 text-white border-transparent shadow-none hover:bg-white/20 sm:w-auto">
                  Contact Form
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Internal linkage structures */}
        {(areaLinks.length > 0 || relatedServices.length > 0) && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            viewport={{ once: true }}
            className="mt-20 rounded-[2rem] bg-slate-50 px-8 py-10 sm:px-10 lg:px-12"
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
              <div className="my-10 border-t border-slate-200" />
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
