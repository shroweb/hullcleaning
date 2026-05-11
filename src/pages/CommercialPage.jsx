import { Building, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";

const features = [
  "Office and workstation cleaning",
  "Kitchen and staff area cleaning",
  "Washroom cleaning and restocking checks",
  "Takeaway deep cleans",
  "Regular business cleaning schedules",
  "Flexible visits around opening hours",
];

export default function CommercialPage() {
  return (
    <>
      <Seo
        title="Commercial Cleaning"
        description="Commercial office cleaning and takeaway deep cleans across Hull and nearby villages."
      />
      <ServicePageLayout
        eyebrow="Business Cleaning"
        title="Commercial cleaning"
        highlight="for offices and food premises"
        description="We provide dependable cleaning for offices, workplaces, and takeaways across Hull and the surrounding area, with visits arranged around your business."
        image="/commercial.png"
        imageAlt="Commercial cleaning"
        introTitle="Practical cleaning that works around your hours"
        introText="Every workplace runs differently, so we keep things straightforward. We can help with regular office cleaning, takeaway resets, and deeper cleans arranged around quieter periods to keep disruption low."
        features={features}
        reverse
        primaryCtaLabel="Request a Proposal"
        secondaryCtaLabel="Contact Us"
        infoCards={[
          {
            icon: ShieldCheck,
            title: "Dependable Local Service",
            text: "A practical, consistent cleaning service for businesses that want clear communication and reliable standards.",
            iconWrapClass: "bg-slate-100",
            iconClass: "text-slate-700",
          },
          {
            icon: Clock,
            title: "Flexible Hours",
            text: "Cleaning planned around your opening times so your staff and customers are not disrupted by the work.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: Building,
            title: "Suitable for Mixed Premises",
            text: "Ideal for offices, small commercial spaces, and food businesses that need either routine upkeep or a deeper reset.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
        ]}
      />
    </>
  );
}
