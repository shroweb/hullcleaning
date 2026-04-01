import Seo from "../components/Seo";

export default function PrivacyPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <Seo
        title="Privacy Policy"
        description="Privacy policy for In & Out Cleaning, covering enquiries, emails, and WhatsApp contact."
      />
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Legal
          </span>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            This website collects only the information needed to respond to cleaning enquiries and provide quotes.
          </p>
        </div>

        <div className="space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">What we collect</h2>
            <p className="mt-3 leading-relaxed">
              If you contact us through the website, email, or WhatsApp, we may collect your name, email address, area, and any details you provide about the cleaning work you need.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">How we use it</h2>
            <p className="mt-3 leading-relaxed">
              We use enquiry details to reply to you, prepare quotes, arrange bookings, and discuss the services you have asked about.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Data sharing</h2>
            <p className="mt-3 leading-relaxed">
              We do not sell your information. We only share information where needed to operate the website, email, or messaging tools used to respond to you.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <p className="mt-3 leading-relaxed">
              If you have a privacy question, contact <a href="mailto:hull.cleaning@outlook.com" className="text-brand-primary">hull.cleaning@outlook.com</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
