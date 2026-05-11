import { UtensilsCrossed, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";

const features = [
  "Kitchen deep clean throughout",
  "Fryers, grills, and ovens degreased",
  "Extraction canopy and filters cleaned",
  "Prep areas and surfaces sanitised",
  "Floors, walls, and tiles scrubbed",
  "Front-of-house and seating areas",
];

export default function TakeawayPage() {
  return (
    <>
      <Seo
        title="Takeaway and Restaurant Cleaning Hull"
        description="Specialist takeaway and restaurant cleaning in Hull. Kitchen deep cleans, fryers, extraction, and front-of-house — available early mornings and late nights."
      />
      <ServicePageLayout
        eyebrow="Food Business Cleaning"
        title="Takeaway and restaurant"
        highlight="cleaning in Hull"
        description="Deep cleaning for food businesses across Hull, from kitchens and fryers to extraction systems and customer areas, arranged around your opening times."
        image="/takeaway.jpg"
        imageAlt="Takeaway and restaurant cleaning Hull"
        introTitle="Heavy-duty cleaning where day-to-day wipe-downs are not enough"
        introText="Takeaway and restaurant kitchens build up grease, carbon, and hard-to-reach dirt fast. We deal with the deeper cleaning work that is difficult to keep on top of during service and schedule visits for early mornings or late nights."
        features={features}
        primaryCtaLabel="Get a Quote"
        secondaryCtaLabel="Contact Us"
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
