import { Building, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const features = [
  "Office and workstation cleaning",
  "Kitchen and staff area cleaning",
  "Washroom cleaning and restocking checks",
  "Takeaway deep cleans",
  "Regular business cleaning schedules",
  "Flexible visits around opening hours",
];

export default function CommercialPage() {
  const areaLinks = serviceAreas.slice(0, 6).map((area) => ({
    label: area.name,
    to: `/areas/${area.slug}`,
  }));

  const relatedServices = servicePages
    .filter((service) => !["commercial-cleaning-hull", "takeaway-cleaning-hull"].includes(service.slug))
    .slice(0, 3)
    .map((service) => ({
      label: service.title,
      to: `/${service.slug}`,
      description: service.description,
    }));

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
        localCoverageTitle="Commercial cleaning across Hull and West Hull villages"
        localCoverageText="We cover offices, workplaces, and small commercial premises across Hull, Hessle, Anlaby, Willerby, Kirk Ella, Swanland, and nearby villages."
        areaLinks={areaLinks}
        relatedServices={relatedServices}
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
