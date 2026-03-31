import Seo from "../components/Seo";

export default function TermsPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <Seo
        title="Terms of Service"
        description="Terms of service for In & Out Cleaning enquiries and bookings."
      />
      <div className="container mx-auto max-w-4xl px-6">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Legal
          </span>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            These terms apply to enquiries, quotes, and cleaning services arranged through this website.
          </p>
        </div>

        <div className="space-y-10 text-gray-700">
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Quotes and bookings</h2>
            <p className="mt-3 leading-relaxed">
              Quotes are based on the information provided at the time of enquiry. Final pricing may change if the scope, property condition, or time required is different from the original description.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Access and safety</h2>
            <p className="mt-3 leading-relaxed">
              Customers must provide safe access to the property and make us aware of any important site conditions before the visit.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Cancellations</h2>
            <p className="mt-3 leading-relaxed">
              If you need to change or cancel a booking, please give as much notice as possible so the appointment can be rescheduled.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900">Contact</h2>
            <p className="mt-3 leading-relaxed">
              For booking questions, contact <a href="mailto:info@hullcleaning.co.uk" className="text-brand-primary">info@hullcleaning.co.uk</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
