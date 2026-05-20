import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button } from "./ui";

const formEndpoint = "https://api.web3forms.com/submit";
const accessKey = "cdccd11d-d7bd-49c4-a85c-1a3d51fe9b70";

const contactDetails = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us live",
    note: "Fastest for quotes and quick questions",
    href: "https://w.app/inoutcleaning",
    external: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "hull.cleaning@outlook.com",
    note: "Good for sending photos or details",
    href: "mailto:hull.cleaning@outlook.com",
  },
  {
    icon: MapPin,
    label: "Based in",
    value: "Swanland, East Yorkshire",
    note: "Covering Hull and surrounding villages",
  },
  {
    icon: Clock3,
    label: "Hours",
    value: "Mon–Sat, 8am–6pm",
    note: "Weekend availability by request",
  },
];

export default function Contact() {
  const successUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/thanks`
      : "/thanks";

  return (
    <section id="contact">
      <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="border-b border-gray-100 bg-[#f8f9fa] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12"
          >
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              Tell us what you need
            </h2>
            <p className="mt-4 leading-relaxed text-gray-500">
              Send over the property type, your area, and whether it's a one-off or regular job. WhatsApp is fastest for a quick reply.
            </p>

            <ul className="mt-8 space-y-5">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm ring-1 ring-gray-200">
                      <Icon size={16} className="text-brand-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        {item.label}
                      </div>
                      <div className="mt-0.5 font-semibold text-gray-900">
                        {item.value}
                      </div>
                      <div className="mt-0.5 text-sm text-gray-500">{item.note}</div>
                    </div>
                  </div>
                );

                if (item.href) {
                  return (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="block transition-opacity hover:opacity-75"
                      >
                        {inner}
                      </a>
                    </li>
                  );
                }
                return <li key={item.label}>{inner}</li>;
              })}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.07 }}
            viewport={{ once: true }}
            className="p-8 sm:p-10 lg:p-12"
          >
            <form className="space-y-5" action={formEndpoint} method="POST">
              <input type="hidden" name="access_key" value={accessKey} />
              <input type="hidden" name="subject" value="Cleaning enquiry from hullcleaning.co.uk" />
              <input type="hidden" name="from_name" value="In & Out Cleaning Website" />
              <input type="hidden" name="redirect" value={successUrl} />
              <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label htmlFor="contact-first-name" className="text-sm font-bold text-gray-700">First name</label>
                  <input id="contact-first-name" name="First Name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Alex" required />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="contact-last-name" className="text-sm font-bold text-gray-700">Last name</label>
                  <input id="contact-last-name" name="Last Name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Taylor" required />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-sm font-bold text-gray-700">Email</label>
                <input id="contact-email" name="email" type="email" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="alex@example.com" required />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-phone" className="text-sm font-bold text-gray-700">Phone <span className="font-normal text-gray-400">(optional)</span></label>
                <input id="contact-phone" name="Phone Number" type="tel" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="07..." />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-service" className="text-sm font-bold text-gray-700">Type of clean</label>
                <select id="contact-service" name="Service Required" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary">
                  <option>Domestic Cleaning</option>
                  <option>Commercial Offices</option>
                  <option>End of Tenancy</option>
                  <option>Takeaway Cleaning</option>
                  <option>Garden Tidy Up</option>
                  <option>Organisation Help</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-sm font-bold text-gray-700">Message</label>
                <textarea id="contact-message" name="message" rows={4} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Property type, area, one-off or regular..." required />
              </div>

              <Button size="lg" className="w-full">
                Send message
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
