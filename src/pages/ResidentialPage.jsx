import { Home, SprayCan, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";

const features = [
  "One-off cleaning visits",
  "Regular weekly or fortnightly cleans",
  "Kitchen and bathroom refreshes",
  "Dusting, vacuuming, and mopping",
  "End of tenancy support",
  "Organisation help when needed",
];

export default function ResidentialPage() {
  return (
    <>
      <Seo
        title="Domestic Cleaning"
        description="Domestic cleaning in Hull and nearby villages, including one-off cleans, regular visits, and end of tenancy support."
      />
      <ServicePageLayout
        eyebrow="Home Cleaning"
        title="Domestic cleaning"
        highlight="that fits around home life"
        description="We help with one-off and regular domestic cleaning across Hull and nearby areas, giving homes a reliable reset without the stress."
        image="/residential.png"
        imageAlt="Residential cleaning"
        introTitle="Built around the way your home actually runs"
        introText="Whether you need a helping hand every week, a one-off refresh before guests arrive, or an end of tenancy clean, each visit is shaped around your priorities rather than a rigid checklist."
        features={features}
        checklistColorClass="text-green-500"
        primaryCtaLabel="Get a Free Estimate"
        secondaryCtaLabel="Contact Us"
        infoCards={[
          {
            icon: Home,
            title: "Regular Cleaning",
            text: "Weekly, fortnightly, or scheduled visits to help keep your home manageable and fresh without it becoming another job on your list.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: Sparkles,
            title: "One-Off Resets",
            text: "Ideal when your home needs a proper reset before guests arrive, after a busy period, or simply when things have built up.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
          {
            icon: SprayCan,
            title: "Move-Out Support",
            text: "A more detailed clean for rented properties to help leave everything fresh, tidy, and ready for handover.",
            iconWrapClass: "bg-green-100",
            iconClass: "text-green-600",
          },
        ]}
      />
    </>
  );
}
