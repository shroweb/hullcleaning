import { Link } from "react-router-dom";
import { Button } from "../components/ui";
import Seo from "../components/Seo";

export default function ThanksPage() {
  return (
    <div className="bg-white pt-32 pb-24">
      <Seo
        title="Thank You"
        description="Thank you for contacting In & Out Cleaning."
      />
      <div className="container mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-[2.5rem] bg-gray-50 p-10 shadow-sm">
          <div className="text-xs font-bold uppercase tracking-[0.18em] text-brand-primary">
            Enquiry sent
          </div>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-gray-900">
            Thank you
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-gray-600">
            Your enquiry has been sent to In & Out Cleaning. We will be in touch as soon as possible.
          </p>
          <div className="mt-8 flex justify-center">
            <Link to="/">
              <Button size="lg">Back to homepage</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
