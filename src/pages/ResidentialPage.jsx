import { Home, SprayCan, Sparkles } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";
import { serviceAreas } from "../data/serviceAreas";
import { servicePages } from "../data/servicePages";

const features = [
  "One-off cleaning visits",
  "Regular weekly or fortnightly cleans",
  "Kitchen and bathroom refreshes",
  "Dusting, vacuuming, and mopping",
  "End of tenancy support",
  "Organisation help when needed",
];

export default function ResidentialPage() {
  const areaLinks = serviceAreas.slice(0, 6).map((area) => ({
    label: area.name,
    to: `/areas/${area.slug}`,
  }));

  const relatedServices = servicePages
    .filter((service) => service.slug !== "domestic-cleaning-hull")
    .slice(0, 3)
    .map((service) => ({
      label: service.title,
      to: `/${service.slug}`,
      description: service.description,
    }));

  const serviceSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Domestic Cleaning in Hull",
      "serviceType": "House Cleaning",
      "provider": { "@id": "https://hullcleaning.co.uk/#business" },
      "areaServed": { "@type": "City", "name": "Hull" },
      "description": "Professional domestic and regular house cleaning in Hull and surrounding East Yorkshire villages."
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Do you bring your own cleaning supplies and equipment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we bring all professional cleaning products, vacuums, and supplies. We can also use any preferred eco-friendly or specialist products you provide."
          }
        },
        {
          "@type": "Question",
          "name": "Can I book a regular weekly or fortnightly domestic cleaning slot?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, we offer reliable weekly and fortnightly recurring slots with the same cleaner so your home upkeep stays consistent."
          }
        }
      ]
    }
  ];

  return (
    <>
      <Seo
        title="Domestic Cleaning in Hull | Regular & Deep House Cleaners"
        description="Professional domestic and house cleaning in Hull, Swanland, and West Hull villages. Trusted weekly, fortnightly, and one-off deep cleans."
        breadcrumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: "Domestic Cleaning", path: "/domestic-cleaning-hull/" },
        ]}
        schema={serviceSchema}
      />
      <ServicePageLayout
        eyebrow="Home Cleaning"
        title="Domestic cleaning"
        highlight="that fits around home life"
        description="We help with one-off and regular domestic cleaning across Hull and nearby areas, giving homes a reliable reset without the stress."
        image="/residential.png"
        imageAlt="Domestic house cleaning in Hull and Swanland"
        introTitle="Built around the way your home actually runs"
        introText="Whether you need a helping hand every week, a one-off refresh before guests arrive, or an end of tenancy clean, each visit is shaped around your priorities rather than a rigid checklist."
        features={features}
        checklistColorClass="text-green-500"
        primaryCtaLabel="Get a Free Estimate"
        secondaryCtaLabel="Contact Us"
        localCoverageTitle="Domestic cleaning in Hull, Swanland, and nearby villages"
        localCoverageText="We carry out domestic cleaning in Hull and surrounding areas including Swanland, Kirk Ella, Willerby, Anlaby, Hessle, Cottingham, North Ferriby, and Beverley."
        areaLinks={areaLinks}
        relatedServices={relatedServices}
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
