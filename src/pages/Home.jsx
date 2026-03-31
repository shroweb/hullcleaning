import Hero from "../components/Hero";
import Services from "../components/Services";
import Stats from "../components/Stats";
import Reviews from "../components/Reviews";
import Contact from "../components/Contact";
import ServiceAreas from "../components/ServiceAreas";
import Seo from "../components/Seo";

export default function Home() {
  return (
    <>
      <Seo
        title="Home"
        description="Domestic and commercial cleaning in Swanland, Hull, and nearby villages. One-off cleans, regular visits, end of tenancy, takeaway cleans, and tidy-up help."
      />
      <Hero />
      <Services />
      <Stats />
      <Reviews />
      <ServiceAreas />
      <Contact />
    </>
  );
}
