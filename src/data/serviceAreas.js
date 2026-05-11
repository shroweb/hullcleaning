export const serviceAreas = [
  {
    slug: "hull",
    name: "Hull",
    intro:
      "Reliable domestic and commercial cleaning across Hull, with flexible one-off and regular visits tailored to your property.",
    highlights: [
      "Regular domestic cleaning for busy households",
      "Commercial cleaning for offices and small workplaces",
      "End of tenancy and move-out support across Hull",
    ],
    nearby: ["swanland", "anlaby", "hessle", "cottingham"],
  },
  {
    slug: "swanland",
    name: "Swanland",
    intro:
      "Local cleaning support in Swanland from a team based nearby, offering regular home cleaning, end of tenancy cleans, and tidy ups.",
    highlights: [
      "A genuinely local service based in and around Swanland",
      "Regular house cleaning and one-off resets",
      "Tidy ups, decluttering, and property refreshes",
    ],
    nearby: ["kirk-ella", "north-ferriby", "willerby", "hull"],
  },
  {
    slug: "kirk-ella",
    name: "Kirk Ella",
    intro:
      "Professional cleaning in Kirk Ella for busy households, landlords, offices, and properties that need a careful, dependable finish.",
    highlights: [
      "Domestic cleaning for larger family homes",
      "End of tenancy and landlord-ready cleans",
      "Office and workplace cleaning nearby",
    ],
    nearby: ["swanland", "willerby", "anlaby", "hull"],
  },
  {
    slug: "anlaby",
    name: "Anlaby",
    intro:
      "Trusted cleaning services in Anlaby for homes and businesses, from one-off deep cleans to ongoing regular support.",
    highlights: [
      "Regular domestic cleaning visits in Anlaby",
      "One-off cleans and practical property resets",
      "Commercial and office cleaning support",
    ],
    nearby: ["willerby", "hessle", "kirk-ella", "hull"],
  },
  {
    slug: "hessle",
    name: "Hessle",
    intro:
      "Practical, thorough cleaning in Hessle, including domestic cleaning, takeaway deep cleans, office cleans, and property refreshes.",
    highlights: [
      "Domestic, commercial, and takeaway cleaning in Hessle",
      "End of tenancy cleaning for rented properties",
      "Garden tidy ups and organisation help",
    ],
    nearby: ["anlaby", "north-ferriby", "hull", "swanland"],
  },
  {
    slug: "cottingham",
    name: "Cottingham",
    intro:
      "Friendly local cleaning in Cottingham for homes, rentals, and workplaces that need consistent, high-standard cleaning.",
    highlights: [
      "Regular cleaning for homes and flats in Cottingham",
      "Move-out cleaning for rentals and landlords",
      "Cleaning support for offices and local businesses",
    ],
    nearby: ["hull", "beverley", "willerby", "kirk-ella"],
  },
  {
    slug: "willerby",
    name: "Willerby",
    intro:
      "Reliable cleaning services in Willerby for homes, rental properties, offices, and one-off jobs that need a tidy, professional finish.",
    highlights: [
      "One-off and regular domestic cleaning in Willerby",
      "Office cleaning and practical commercial support",
      "Tidy-up and organisation help for busy homes",
    ],
    nearby: ["anlaby", "kirk-ella", "cottingham", "hull"],
  },
  {
    slug: "north-ferriby",
    name: "North Ferriby",
    intro:
      "Dependable cleaning in North Ferriby for domestic visits, end of tenancy work, office cleaning, and practical ongoing support.",
    highlights: [
      "Reliable house cleaning in North Ferriby",
      "Move-out cleaning and refresh visits",
      "Local support for nearby offices and workplaces",
    ],
    nearby: ["swanland", "hessle", "hull", "beverley"],
  },
  {
    slug: "beverley",
    name: "Beverley",
    intro:
      "Flexible cleaning services in Beverley for homes, offices, and end of tenancy jobs, with clear communication and dependable visits.",
    highlights: [
      "Domestic cleaning for Beverley households",
      "End of tenancy and one-off deep cleaning",
      "Commercial and holiday-let cleaning support",
    ],
    nearby: ["cottingham", "north-ferriby", "hull", "willerby"],
  },
];

export function getServiceAreaBySlug(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}
