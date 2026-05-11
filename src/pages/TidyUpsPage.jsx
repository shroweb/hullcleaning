import { Leaf, Scissors, PackageOpen } from "lucide-react";
import Seo from "../components/Seo";
import ServicePageLayout from "../components/ServicePageLayout";

const features = [
  "Garden tidy ups and weeding",
  "Lawn edge tidying and clearing",
  "General indoor tidying and declutter",
  "Room reorganisation and reset",
  "Clearing and sorting after busy periods",
  "Light prep before guests or viewings",
];

export default function TidyUpsPage() {
  return (
    <>
      <Seo
        title="Tidy Ups and Garden Help"
        description="Garden tidy ups, weeding, and organisation help across Hull and nearby villages. Practical support for homes and outdoor spaces."
      />
      <ServicePageLayout
        eyebrow="Garden and Home"
        title="Tidy ups and"
        highlight="organisation help in Hull"
        description="Practical support for homes and outdoor spaces across Hull and the surrounding area, from garden clear-ups to getting rooms back in order."
        image="/tidy-ups.jpg"
        imageAlt="Garden tidy up service Hull"
        introTitle="Useful when things have simply built up"
        introText="Whether it is a garden that has got away from you, a spare room that needs sorting, or a home that needs a practical reset before viewings or guests, we can help with the hands-on work that is hard to find time for."
        features={features}
        checklistColorClass="text-green-500"
        primaryCtaLabel="Ask on WhatsApp"
        secondaryCtaLabel="Get a Quote"
        infoCards={[
          {
            icon: Leaf,
            title: "Garden Tidy Ups",
            text: "Weeding, clearing overgrown areas, and bringing outdoor spaces back to a manageable state without turning it into a landscaping job.",
            iconWrapClass: "bg-green-100",
            iconClass: "text-green-600",
          },
          {
            icon: Scissors,
            title: "Outdoor Clearing",
            text: "Lawn edges, border tidying, and seasonal clearing so the outside of your home feels looked after again.",
            iconWrapClass: "bg-brand-accent",
            iconClass: "text-brand-primary",
          },
          {
            icon: PackageOpen,
            title: "Indoor Organisation",
            text: "Help sorting rooms, clearing clutter, and getting spaces back under control after busy periods or ahead of a move or viewing.",
            iconWrapClass: "bg-blue-100",
            iconClass: "text-blue-600",
          },
        ]}
      />
    </>
  );
}
