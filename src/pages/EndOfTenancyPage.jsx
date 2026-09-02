import { KeyRound, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const features = [
  "Full property deep clean throughout",
  "Oven, hob, and extractor cleaning",
  "Fridge and white goods cleaned inside and out",
  "Bathrooms and toilets thoroughly sanitised",
  "Skirting boards, light switches, and doors wiped",
  "Windows cleaned on the inside",
];

export default function EndOfTenancyPage() {
  const areaLinks = serviceAreas.map((area) => ({
    label: area.name,
    to: `/areas/${area.slug}`,
  }));

  const relatedServices = servicePages
    .filter((service) => service.slug !== "end-of-tenancy-cleaning-hull")
    .slice(0, 3)
    .map((service) => ({
      label: service.title,
      to: `/${service.slug}`,
      description: service.description,
    }));

  return (
    <>
      <Seo
        title="End of Tenancy Cleaning Hull | Move Out Cleaners"
        description="Guaranteed end of tenancy cleaning in Hull for tenants, landlords, and agents. Full handover cleans including ovens, appliances, and check-out standards."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "End of Tenancy Cleaning", path: "/end-of-tenancy-cleaning-hull/" },
        ]}
      />
      <ServicePageLayout
        eyebrow="Move-Out Cleaning"
        title="End of tenancy cleaning"
        highlight="in Hull"
        description="Thorough move-out cleans for tenants and landlords across Hull and the surrounding area, helping you meet check-out standards and protect deposits."
        image="/end-of-tenancy.jpg"
        imageAlt="End of tenancy move out deep cleaning in Hull"
        introTitle="Cleaned to the standard agents actually inspect"
        introText="End of tenancy cleans cover the places letting agents notice, from ovens and extractor fans to skirting boards and bathrooms. We work through the property properly so it feels ready for handover."
        features={features}
        reverse
        primaryCtaLabel="Get a Free Quote"
        secondaryCtaLabel="Contact Us"
        localCoverageTitle="End of tenancy cleaning in Hull and nearby areas"
        localCoverageText="We cover move-out and handover cleans across Hull, Swanland, Kirk Ella, Willerby, Hessle, Cottingham, Beverley, and surrounding villages."
        areaLinks={areaLinks}
        relatedServices={relatedServices}
        infoCards={[
          {
            icon: KeyRound,
            title: "For Tenants",
            text: "Leave the property in a condition that helps protect your deposit without spending your final days scrubbing every room yourself.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: ShieldCheck,
            title: "For Landlords",
            text: "Get properties cleaned between tenancies quickly and to a consistent standard, ready to re-let without unnecessary delays.",
            iconWrapClass: "bg-green-100",
            iconClass: "text-green-600",
          },
          {
            icon: Clock,
            title: "Short-Notice Help",
            text: "Move-out dates can be tight. Contact us as early as you can and we will do our best to work around the timescale.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
        ]}
      />
    </>
  );
}
