import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { serviceAreas } from './src/data/serviceAreas.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = 'https://hullcleaning.co.uk';
const DIST_DIR = path.join(__dirname, 'dist');
const TEMPLATE_PATH = path.join(DIST_DIR, 'index.html');

if (!fs.existsSync(TEMPLATE_PATH)) {
  console.error('Error: dist/index.html not found. Run npm run build first!');
  process.exit(1);
}

// Read the compiled base template
const template = fs.readFileSync(TEMPLATE_PATH, 'utf8');

// Define static routes metadata and fallbacks
const staticRoutes = {
  '/about': {
    title: 'About | In & Out Cleaning',
    description: 'Learn about the Swanland-based team behind In & Out Cleaning and how we help homes and businesses across Hull and nearby villages.',
    content: `
      <h1>About In & Out Cleaning</h1>
      <p>In & Out Cleaning covers Hull, Swanland, and the surrounding villages. We focus on doing the job properly, being easy to deal with, and turning up when we say we will.</p>
      <p>We started In & Out Cleaning to give local homes and businesses a reliable option that didn't involve chasing up no-shows or getting someone different every visit. We keep things simple — you tell us what you need, we turn up and do it properly.</p>
      <p>Whether it's a one-off clean before you move out, a weekly visit to keep your home in order, or a deep clean of your takeaway kitchen, the approach is the same: arrive when agreed, work through it thoroughly, and leave it the way you'd want to find it.</p>
      <p>We cover Hull and a wide area around it — Swanland, Kirk Ella, Anlaby, Hessle, Cottingham, Beverley, and more.</p>
    `
  },
  '/services': {
    title: 'Cleaning Services | In & Out Cleaning',
    description: 'Domestic, commercial, takeaway, tenancy, garden tidy up, and organisation help in Hull and nearby villages.',
    content: `
      <h1>Cleaning Services in Hull and Nearby Areas</h1>
      <p>In & Out Cleaning provides reliable cleaning services for homes, rentals, offices, and food businesses across Hull and East Yorkshire. Explore our specialist services below:</p>
      <ul>
        <li><strong>Domestic Cleaning:</strong> Regular weekly or fortnightly home visits, and one-off deep cleans.</li>
        <li><strong>Commercial Cleaning:</strong> Office and business cleaning tailored to your working hours.</li>
        <li><strong>End of Tenancy Cleaning:</strong> Deep cleaning for tenants and landlords to ensure deposit returns.</li>
        <li><strong>Takeaway Cleaning:</strong> Heavy-duty deep cleans for takeaways and food businesses in Hull, including kitchens, extraction units, and fryers.</li>
        <li><strong>Airbnb Cleaning:</strong> Fast turnarounds, linen changes, and preparation between guest bookings.</li>
        <li><strong>Tidy Ups & Organisation:</strong> Garden weeding, decluttering, and sorting messy spaces.</li>
      </ul>
    `
  },
  '/domestic-cleaning-hull': {
    title: 'Domestic Cleaning | In & Out Cleaning',
    description: 'Domestic cleaning in Hull and nearby villages, including one-off cleans, regular visits, and end of tenancy support.',
    content: `
      <h1>Domestic Cleaning in Hull</h1>
      <p>We provide professional and reliable home cleaning visits across Hull, Swanland, and surrounding villages. Whether you need a regular weekly/fortnightly slot or a one-off deep clean, we can help.</p>
      <p>Our domestic cleaning is built around your home life, covering kitchens, bathrooms, dusting, vacuuming, and general upkeep. We bring all our own professional cleaning products and equipment.</p>
    `
  },
  '/commercial-cleaning-hull': {
    title: 'Commercial Cleaning | In & Out Cleaning',
    description: 'Commercial office cleaning and takeaway deep cleans across Hull and nearby villages.',
    content: `
      <h1>Commercial Cleaning in Hull</h1>
      <p>Professional commercial cleaning for offices, small business premises, and retail spaces in Hull and nearby villages. We work around your business hours to ensure minimal disruption to your team.</p>
      <p>From desk sanitisation and floor vacuuming to common area cleaning and kitchen upkeep, we keep your workspace clean and professional.</p>
    `
  },
  '/end-of-tenancy-cleaning-hull': {
    title: 'End of Tenancy Cleaning Hull | In & Out Cleaning',
    description: 'End of tenancy cleaning in Hull for tenants and landlords. Thorough move-out cleans to meet check-out standards and protect your deposit.',
    content: `
      <h1>End of Tenancy Cleaning in Hull</h1>
      <p>Move-out and tenancy handover deep cleans for tenants, landlords, and letting agents. We clean to the rigorous standards required by letting agents to help protect your deposit.</p>
      <p>Our end of tenancy service covers deep cleaning of all rooms, inside windows, cupboards, bathrooms, kitchens, ovens, and appliances.</p>
    `
  },
  '/takeaway-cleaning-hull': {
    title: 'Takeaway and Restaurant Cleaning Hull | In & Out Cleaning',
    description: 'Specialist takeaway and restaurant cleaning in Hull. Kitchen deep cleans, fryers, extraction, and front-of-house — available early mornings and late nights.',
    content: `
      <h1>Takeaway and Restaurant Deep Cleaning in Hull</h1>
      <p>Specialist deep cleaning services for takeaways, restaurants, and food premises in Hull. We carry out heavy-duty sanitation that day-to-day wipe-downs cannot cover.</p>
      <p>We clean commercial kitchens, extractors, canopies, fryers, ovens, grills, and front-of-house customer areas. Available overnight or early mornings to fit your business hours.</p>
    `
  },
  '/airbnb-cleaning-hull': {
    title: 'Airbnb and Holiday Let Cleaning Hull | In & Out Cleaning',
    description: 'Airbnb and holiday let cleaning in Hull and East Yorkshire. Fast turnaround cleans with linen change, restocking, and reliable cover between every booking.',
    content: `
      <h1>Airbnb and Holiday Let Cleaning in Hull</h1>
      <p>Fast turnaround cleaning and preparation for Airbnbs and holiday rentals in Hull and East Yorkshire. We make sure your property is immaculate and fully stocked for the next guest's arrival.</p>
      <p>Includes thorough cleaning of all rooms, changing bed linen, replenishing essentials, and reporting any guest damage.</p>
    `
  },
  '/tidy-ups-hull': {
    title: 'Tidy Ups and Garden Help | In & Out Cleaning',
    description: 'Garden tidy ups, weeding, and organisation help across Hull and nearby villages. Practical support for homes and outdoor spaces.',
    content: `
      <h1>Garden Tidy Ups and Organisation Help in Hull</h1>
      <p>Practical tidy-up services for houses, gardens, and messy rooms. We help with weeding, lawn mowing, garden clearance, decluttering, and custom organisation for cupboards, garages, or wardrobes.</p>
      <p>Perfect for properties that have built up over time and need a reliable reset to get back in order.</p>
    `
  },
  '/contact': {
    title: 'Contact | In & Out Cleaning',
    description: 'Contact In & Out Cleaning for quotes across Swanland, Hull, and nearby villages. Fast WhatsApp and email enquiries.',
    content: `
      <h1>Contact In & Out Cleaning</h1>
      <p>Get a cleaning quote for your home, office, or business. We are based in Swanland and cover Hull and nearby villages.</p>
      <p>The fastest way to reach us is on WhatsApp, or send us an email at hull.cleaning@outlook.com. Tell us what you need and we will get back to you with a price.</p>
    `
  },
  '/reviews': {
    title: 'Reviews | In & Out Cleaning',
    description: 'Customer reviews for In & Out Cleaning across Swanland, Hull, and the surrounding villages.',
    content: `
      <h1>Customer Reviews</h1>
      <p>See what our local customers say about In & Out Cleaning. We pride ourselves on reliability, thorough work, and clear communication.</p>
      <p>We have serviced over 50 properties across Hull, Swanland, Hessle, Kirk Ella, Anlaby, and Beverley, securing excellent feedback for both domestic and commercial cleaning.</p>
    `
  },
  '/privacy': {
    title: 'Privacy Policy | In & Out Cleaning',
    description: 'Privacy policy for In & Out Cleaning, covering enquiries, emails, and WhatsApp contact.',
    content: `
      <h1>Privacy Policy</h1>
      <p>Privacy policy for In & Out Cleaning. We value your privacy and only collect information necessary to respond to your enquiries, handle bookings, and provide cleaning services.</p>
      <p>We do not share your contact details or address with third parties. Any WhatsApp or email messages sent to us are kept secure.</p>
    `
  },
  '/terms': {
    title: 'Terms of Service | In & Out Cleaning',
    description: 'Read the terms for In & Out Cleaning enquiries, bookings, cancellations, property access and payments across Hull and nearby areas.',
    content: `
      <h1>Terms of Service</h1>
      <p>Terms of service for In & Out Cleaning enquiries and bookings. When you book a clean with us, you agree to our standard terms covering cancellations, payment, access to properties, and insurance details.</p>
      <p>Please contact us directly if you have any questions about booking policies.</p>
    `
  },
  '/thanks': {
    title: 'Thank You | In & Out Cleaning',
    description: 'Thank you for contacting In & Out Cleaning. We have received your enquiry and will reply shortly with cleaning availability and a quote.',
    content: `
      <h1>Thank You</h1>
      <p>Thank you for contacting In & Out Cleaning. We have received your enquiry and will get back to you shortly with a quote.</p>
    `
  }
};

// Generate dynamic service area routes metadata dynamically
const areaRoutes = {};
for (const area of serviceAreas) {
  const route = `/areas/${area.slug}`;
  const highlightsHtml = area.highlights.map(h => `<li>${h}</li>`).join('\n        ');
  areaRoutes[route] = {
    title: `${area.name} Cleaning Services | In & Out Cleaning`,
    description: `Local domestic and commercial cleaning in ${area.name}, including regular visits, one-off deep cleans, tenancy cleans and practical tidy-up help.`,
    content: `
      <h1>Cleaning Services in ${area.name}</h1>
      <p>${area.intro}</p>
      <h2>What We Do in ${area.name}</h2>
      <ul>
        ${highlightsHtml}
      </ul>
      <p>${area.propertyTypes}</p>
      <p>${area.localFocus}</p>
      <h3>${area.name} Cleaning FAQ</h3>
      <p><strong>Q: ${area.faqQuestion}</strong></p>
      <p>A: ${area.faqAnswer}</p>
      <p>Based in Swanland, we cover ${area.name} with zero travel fees. Contact us for a cleaning quote.</p>
    `
  };
}

const routes = { ...staticRoutes, ...areaRoutes };

// Process main home page dist/index.html first
const homeRoute = {
  title: 'In & Out Cleaning | Domestic & Commercial Cleaning in Hull',
  description: 'Professional domestic and commercial cleaning in Hull and Swanland. Regular visits, one-off cleans, tenancy cleans, takeaway deep cleans and tidy-up help.',
  canonical: `${BASE_URL}/`
};

let processedHomeHtml = template
  .replace(/<title>[\s\S]*?<\/title>/i, `<title>${homeRoute.title}</title>`)
  .replace(/<meta[^>]*?name="description"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta name="description" content="${homeRoute.description}" />`)
  .replace(/<meta[^>]*?property="og:title"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta property="og:title" content="${homeRoute.title}" />`)
  .replace(/<meta[^>]*?property="og:description"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta property="og:description" content="${homeRoute.description}" />`)
  .replace(/<meta[^>]*?property="og:url"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta property="og:url" content="${homeRoute.canonical}" />`);

// Inject/replace canonical
if (!processedHomeHtml.match(/<link[^>]*?rel="canonical"[^>]*?\/?>/i)) {
  processedHomeHtml = processedHomeHtml.replace('</head>', `  <link rel="canonical" href="${homeRoute.canonical}" />\n</head>`);
} else {
  processedHomeHtml = processedHomeHtml.replace(/<link[^>]*?rel="canonical"[^>]*?href="[^"]*"[^>]*?\/?>/is, `<link rel="canonical" href="${homeRoute.canonical}" />`);
}

fs.writeFileSync(TEMPLATE_PATH, processedHomeHtml);
console.log('Pre-rendered: / -> dist/index.html');

// Process all sub-routes
for (const [route, meta] of Object.entries(routes)) {
  const canonicalUrl = `${BASE_URL}${route}/`;
  
  // Start from processedHomeHtml to keep all clean tags intact and only swap route-specific ones
  let html = processedHomeHtml
    .replace(/<title>[\s\S]*?<\/title>/i, `<title>${meta.title}</title>`)
    .replace(/<meta[^>]*?name="description"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta name="description" content="${meta.description}" />`)
    .replace(/<meta[^>]*?property="og:title"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta property="og:title" content="${meta.title}" />`)
    .replace(/<meta[^>]*?property="og:description"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta property="og:description" content="${meta.description}" />`)
    .replace(/<meta[^>]*?property="og:url"[^>]*?content="[^"]*"[^>]*?\/?>/is, `<meta property="og:url" content="${canonicalUrl}" />`)
    .replace(/<link[^>]*?rel="canonical"[^>]*?href="[^"]*"[^>]*?\/?>/is, `<link rel="canonical" href="${canonicalUrl}" />`);

  // Inject page-specific fallback HTML inside the .seo-fallback div
  const seoFallbackPattern = /<div class="seo-fallback">([\s\S]*?)<\/div>/;
  const wrappedContent = `<div class="seo-fallback">${meta.content}</div>`;
  html = html.replace(seoFallbackPattern, wrappedContent);

  // Write to nested directory: dist/route/index.html
  const outputDir = path.join(DIST_DIR, route);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }
  const outputPath = path.join(outputDir, 'index.html');
  fs.writeFileSync(outputPath, html);
  console.log(`Pre-rendered: ${route} -> ${path.relative(DIST_DIR, outputPath)}`);
}

console.log('Pre-rendering successfully completed for all pages!');
