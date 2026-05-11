import { BedDouble, Star, RefreshCcw } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const features = [
  "Full clean between every guest stay",
  "Bed linen change and fresh towels",
  "Bathrooms and kitchens sanitised",
  "Guest supplies restocked if needed",
  "Same-day turnaround available",
  "Reliable cover across Hull and East Riding",
];

export default function AirbnbPage() {
  const areaLinks = serviceAreas
    .filter((area) => ["hull", "beverley", "cottingham", "north-ferriby", "swanland"].includes(area.slug))
    .map((area) => ({
      label: area.name,
      to: `/areas/${area.slug}`,
    }));

  const relatedServices = servicePages
    .filter((service) => service.slug !== "airbnb-cleaning-hull")
    .slice(0, 3)
    .map((service) => ({
      label: service.title,
      to: `/${service.slug}`,
      description: service.description,
    }));

  return (
    <>
      <Seo
        title="Airbnb and Holiday Let Cleaning Hull"
        description="Airbnb and holiday let cleaning in Hull and East Yorkshire. Fast turnaround cleans with linen change, restocking, and reliable cover between every booking."
      />
      <ServicePageLayout
        eyebrow="Short-Term Lets"
        title="Airbnb and holiday let"
        highlight="cleaning in Hull"
        description="Fast, reliable turnaround cleans for short-term lets and holiday properties across Hull and East Yorkshire, so every guest arrives to a fresh, welcoming space."
        image="/airbnb.jpg"
        imageAlt="Airbnb and holiday let cleaning Hull"
        introTitle="Reliable between every booking"
        introText="Short-term lets depend on consistent presentation. We handle the turnaround clean between guests, including bathroom and kitchen resets, linen changes, and restocking if needed, so the property feels guest-ready every time."
        features={features}
        reverse
        primaryCtaLabel="Chat on WhatsApp"
        secondaryCtaLabel="Get a Quote"
        localCoverageTitle="Airbnb and holiday-let cleaning across Hull and East Yorkshire"
        localCoverageText="We cover Hull and nearby East Yorkshire locations for Airbnb and holiday-let cleaning, including Swanland, Beverley, Cottingham, and surrounding areas."
        areaLinks={areaLinks}
        relatedServices={relatedServices}
        infoCards={[
          {
            icon: RefreshCcw,
            title: "Turnaround Cleans",
            text: "Full clean and reset between guest stays, timed around your check-out and check-in windows, including same-day turnarounds when needed.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: BedDouble,
            title: "Linen and Supplies",
            text: "Bed linen and towel changes included, plus restocking of essentials if you provide them, so there is less to manage remotely.",
            iconWrapClass: "bg-green-100",
            iconClass: "text-green-600",
          },
          {
            icon: Star,
            title: "Consistent Presentation",
            text: "Reliable cleaning helps protect your reviews and ratings because guests notice immediately when a property feels genuinely fresh and looked after.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
        ]}
      />
    </>
  );
}
