export const servicePages = [
  {
    slug: "domestic-cleaning-hull",
    title: "Domestic Cleaning",
    shortTitle: "Domestic cleaning",
    description: "One-off and regular domestic cleaning in Hull and nearby villages for busy households that want reliable help.",
  },
  {
    slug: "commercial-cleaning-hull",
    title: "Commercial Cleaning",
    shortTitle: "Commercial cleaning",
    description: "Office and workplace cleaning in Hull, with practical cleaning visits built around business hours.",
  },
  {
    slug: "end-of-tenancy-cleaning-hull",
    title: "End of Tenancy Cleaning",
    shortTitle: "End of tenancy",
    description: "Move-out cleaning in Hull for tenants, landlords, and letting agents who need a thorough handover clean.",
  },
  {
    slug: "takeaway-cleaning-hull",
    title: "Takeaway Cleaning",
    shortTitle: "Takeaway cleaning",
    description: "Deep cleaning for takeaways and fast-food kitchens in Hull, including fryers, extraction, and prep areas.",
  },
  {
    slug: "restaurant-cleaning-hull",
    title: "Restaurant Cleaning",
    shortTitle: "Restaurant cleaning",
    description: "Deep cleaning for restaurants, cafes, and bars in Hull — kitchens, dining areas, bars, and front-of-house, arranged out of hours.",
  },
  {
    slug: "airbnb-cleaning-hull",
    title: "Airbnb Cleaning",
    shortTitle: "Airbnb cleaning",
    description: "Turnaround cleaning for Airbnb and holiday lets in Hull and East Yorkshire, ready for every booking.",
  },
  {
    slug: "tidy-ups-hull",
    title: "Tidy Ups and Organisation Help",
    shortTitle: "Tidy ups",
    description: "Garden tidy ups, decluttering, and organisation help in Hull and nearby villages.",
  },
];

export function getServicePageBySlug(slug) {
  return servicePages.find((service) => service.slug === slug);
}
