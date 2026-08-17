import { UtensilsCrossed, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const features = [
  "Kitchen deep clean throughout",
  "Fryers, grills, and ovens degreased",
  "Extraction canopy and filters cleaned",
  "Prep areas and surfaces sanitised",
  "Floors, walls, and tiles scrubbed",
  "Front-of-house and seating areas",
];

export default function TakeawayPage() {
  const areaLinks = serviceAreas
    .filter((area) => ["hull", "hessle", "anlaby", "cottingham", "beverley"].includes(area.slug))
    .map((area) => ({
      label: area.name,
      to: `/areas/${area.slug}`,
    }));

  const relatedServices = servicePages
    .filter((service) => !["takeaway-cleaning-hull", "commercial-cleaning-hull"].includes(service.slug))
    .slice(0, 3)
    .map((service) => ({
      label: service.title,
      to: `/${service.slug}`,
      description: service.description,
    }));

  return (
    <>
      <Seo
        title="Takeaway Cleaning Hull"
        description="Takeaway kitchen cleaning in Hull — fryers, ovens, extraction, and surfaces deep cleaned out of hours."
      />
      <ServicePageLayout
        eyebrow="Food Business Cleaning"
        title="Takeaway"
        highlight="cleaning in Hull"
        description="Deep cleaning for takeaways across Hull, from fryers and extraction systems to counters and prep areas, arranged around your opening times."
        image="/takeaway.jpg"
        imageAlt="Takeaway kitchen cleaning Hull"
        introTitle="Heavy-duty cleaning where day-to-day wipe-downs are not enough"
        introText="Takeaway kitchens build up grease, carbon, and hard-to-reach dirt fast. We deal with the deeper cleaning work that is difficult to keep on top of during service and schedule visits for early mornings or late nights."
        features={features}
        primaryCtaLabel="Get a Quote"
        secondaryCtaLabel="Contact Us"
        localCoverageTitle="Takeaway cleaning in Hull and nearby business areas"
        localCoverageText="We help food businesses across Hull and nearby areas with kitchen deep cleans, extraction cleaning support, and practical out-of-hours resets."
        areaLinks={areaLinks}
        relatedServices={relatedServices}
        infoCards={[
          {
            icon: UtensilsCrossed,
            title: "Kitchen Deep Cleans",
            text: "Fryers, ovens, grills, surfaces, and floors cleaned thoroughly for the kind of reset that is hard to achieve during normal trading.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: ShieldCheck,
            title: "Hygiene Standards",
            text: "Supports a cleaner, more compliant kitchen environment and helps you stay on top of hygiene expectations.",
            iconWrapClass: "bg-green-100",
            iconClass: "text-green-600",
          },
          {
            icon: Clock,
            title: "Out-of-Hours Visits",
            text: "Early mornings and late nights available so cleaning never gets in the way of service or regular customers.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
        ]}
      />
    </>
  );
}
