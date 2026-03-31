export const serviceAreas = [
  {
    slug: "hull",
    name: "Hull",
    intro:
      "Reliable domestic and commercial cleaning across Hull, with flexible one-off and regular visits tailored to your property.",
  },
  {
    slug: "swanland",
    name: "Swanland",
    intro:
      "Local cleaning support in Swanland from a team based nearby, offering regular home cleaning, end of tenancy cleans, and tidy ups.",
  },
  {
    slug: "kirk-ella",
    name: "Kirk Ella",
    intro:
      "Professional cleaning in Kirk Ella for busy households, landlords, offices, and properties that need a careful, dependable finish.",
  },
  {
    slug: "anlaby",
    name: "Anlaby",
    intro:
      "Trusted cleaning services in Anlaby for homes and businesses, from one-off deep cleans to ongoing regular support.",
  },
  {
    slug: "hessle",
    name: "Hessle",
    intro:
      "Practical, thorough cleaning in Hessle, including domestic cleaning, takeaway deep cleans, office cleans, and property refreshes.",
  },
  {
    slug: "cottingham",
    name: "Cottingham",
    intro:
      "Friendly local cleaning in Cottingham for homes, rentals, and workplaces that need consistent, high-standard cleaning.",
  },
  {
    slug: "willerby",
    name: "Willerby",
    intro:
      "Reliable cleaning services in Willerby for homes, rental properties, offices, and one-off jobs that need a tidy, professional finish.",
  },
  {
    slug: "north-ferriby",
    name: "North Ferriby",
    intro:
      "Dependable cleaning in North Ferriby for domestic visits, end of tenancy work, office cleaning, and practical ongoing support.",
  },
  {
    slug: "beverley",
    name: "Beverley",
    intro:
      "Flexible cleaning services in Beverley for homes, offices, and end of tenancy jobs, with clear communication and dependable visits.",
  },
];

export function getServiceAreaBySlug(slug) {
  return serviceAreas.find((area) => area.slug === slug);
}
