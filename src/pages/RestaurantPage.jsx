import { ChefHat, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const features = [
  "Front-of-house and dining area cleaning",
  "Kitchen deep clean and degreasing",
  "Bars, back-bar, and service areas",
  "Toilets and customer facilities",
  "Floors, walls, and skirting throughout",
  "Out-of-hours and overnight visits",
];

export default function RestaurantPage() {
  const areaLinks = serviceAreas
    .filter((area) => ["hull", "hessle", "cottingham", "beverley", "willerby"].includes(area.slug))
    .map((area) => ({
      label: area.name,
      to: `/areas/${area.slug}`,
    }));

  const relatedServices = servicePages
    .filter((service) => !["restaurant-cleaning-hull", "takeaway-cleaning-hull"].includes(service.slug))
    .slice(0, 3)
    .map((service) => ({
      label: service.title,
      to: `/${service.slug}`,
      description: service.description,
    }));

  return (
    <>
      <Seo
        title="Restaurant Cleaning Hull"
        description="Restaurant cleaning in Hull — dining areas, bars, kitchens, and front-of-house deep cleans arranged out of hours to keep your restaurant spotless."
      />
      <ServicePageLayout
        eyebrow="Restaurant Cleaning"
        title="Restaurant cleaning"
        highlight="in Hull"
        description="Deep cleaning for restaurants, cafes, and bars in Hull — from the dining room and bar to the kitchen, arranged around your opening hours."
        image="/takeaway.jpg"
        imageAlt="Restaurant cleaning Hull"
        introTitle="The deeper clean your restaurant needs between services"
        introText="Restaurants build up grease, grime, and high-traffic wear that daily wipe-downs can't fully cover. We handle the deeper cleaning work across kitchens, dining areas, bars, and customer facilities, scheduled for early mornings, late nights, or quieter days."
        features={features}
        reverse
        primaryCtaLabel="Get a Quote"
        secondaryCtaLabel="Contact Us"
        localCoverageTitle="Restaurant cleaning in Hull and nearby areas"
        localCoverageText="We clean restaurants, cafes, bars, and pubs across Hull, Hessle, Cottingham, Beverley, Willerby, and surrounding areas, at times that don't disrupt service."
        areaLinks={areaLinks}
        relatedServices={relatedServices}
        infoCards={[
          {
            icon: ChefHat,
            title: "Front-of-House & Dining Areas",
            text: "Tables, seating, floors, and customer areas cleaned thoroughly so your restaurant always presents at its best.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: ShieldCheck,
            title: "Hygiene & Food Safety",
            text: "Kitchen and food-prep areas cleaned to support your food hygiene standards and EHO expectations.",
            iconWrapClass: "bg-green-100",
            iconClass: "text-green-600",
          },
          {
            icon: Clock,
            title: "Out-of-Hours Service",
            text: "Early mornings, late nights, and off-peak days available so cleaning never interrupts a busy service.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
        ]}
      />
    </>
  );
}
