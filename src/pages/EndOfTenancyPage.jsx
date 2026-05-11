import { KeyRound, ShieldCheck, Clock } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";

const features = [
  "Full property deep clean throughout",
  "Oven, hob, and extractor cleaning",
  "Fridge and white goods cleaned inside and out",
  "Bathrooms and toilets thoroughly sanitised",
  "Skirting boards, light switches, and doors wiped",
  "Windows cleaned on the inside",
];

export default function EndOfTenancyPage() {
  return (
    <>
      <Seo
        title="End of Tenancy Cleaning Hull"
        description="End of tenancy cleaning in Hull for tenants and landlords. Thorough move-out cleans to meet check-out standards and protect your deposit."
      />
      <ServicePageLayout
        eyebrow="Move-Out Cleaning"
        title="End of tenancy cleaning"
        highlight="in Hull"
        description="Thorough move-out cleans for tenants and landlords across Hull and the surrounding area, helping you meet check-out standards and protect deposits."
        image="/end-of-tenancy.jpg"
        imageAlt="End of tenancy cleaning Hull"
        introTitle="Cleaned to the standard agents actually inspect"
        introText="End of tenancy cleans cover the places letting agents notice, from ovens and extractor fans to skirting boards and bathrooms. We work through the property properly so it feels ready for handover."
        features={features}
        reverse
        primaryCtaLabel="Get a Free Quote"
        secondaryCtaLabel="Contact Us"
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
