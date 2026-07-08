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
        title="Domestic & Commercial Cleaning in Hull"
        description="Domestic and commercial cleaning in Hull, Swanland, and nearby villages. One-off cleans, regular visits, end of tenancy cleaning, takeaway deep cleans, and tidy-up help."
      />
      <Hero />
      <Services />
      <Stats />
      <Reviews />
      <ServiceAreas />
      <section className="bg-slate-50 py-20 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <Contact />
        </div>
      </section>
    </>
  );
}
