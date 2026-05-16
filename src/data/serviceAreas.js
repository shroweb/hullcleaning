export const serviceAreas = [
  {
    slug: "hull",
    name: "Hull",
    intro:
      "We cover Hull regularly — homes, rentals, offices, and takeaways. One-off or ongoing, just get in touch and we'll work something out.",
    highlights: [
      "Regular domestic cleaning for households across the city",
      "Commercial cleaning for offices and small workplaces in Hull",
      "End of tenancy and move-out cleans at short notice",
    ],
    nearby: ["swanland", "anlaby", "hessle", "cottingham"],
  },
  {
    slug: "swanland",
    name: "Swanland",
    intro:
      "We're based in Swanland, so local bookings are easy for us. Regular home cleaning, one-off visits, or end of tenancy — we do all of it.",
    highlights: [
      "A genuinely local team — no long drives, no extra charges",
      "Regular house cleaning and one-off resets",
      "Tidy ups, decluttering, and property refreshes",
    ],
    nearby: ["kirk-ella", "north-ferriby", "willerby", "hull"],
  },
  {
    slug: "kirk-ella",
    name: "Kirk Ella",
    intro:
      "We clean homes and offices in Kirk Ella regularly. Whether it's a weekly visit or an end of tenancy deep clean, we'll sort it.",
    highlights: [
      "Domestic cleaning for family homes in Kirk Ella",
      "End of tenancy and landlord-ready cleans",
      "Office and workplace cleaning close by",
    ],
    nearby: ["swanland", "willerby", "anlaby", "hull"],
  },
  {
    slug: "anlaby",
    name: "Anlaby",
    intro:
      "From one-off cleans to regular visits, we cover Anlaby for homes and businesses. Easy to book, reliable to use.",
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
      "We cover Hessle for domestic cleaning, takeaway deep cleans, office work, and general tidy-ups. Get in touch and we'll take it from there.",
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
      "We do regular cleaning for homes and businesses in Cottingham, as well as move-out cleans for landlords and tenants.",
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
      "We cover Willerby for home cleaning, rental turnarounds, office cleans, and one-off jobs. Reliable, local, no fuss.",
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
      "We work in North Ferriby for domestic visits, end of tenancy cleans, and office cleaning. Short drive from our base in Swanland.",
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
      "We cover Beverley for homes, offices, end of tenancy cleans, and holiday lets. Clear pricing, no hidden costs, easy to book.",
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
