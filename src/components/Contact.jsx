import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button, Card } from "./ui";

const formEndpoint = "https://api.web3forms.com/submit";
const accessKey = "cdccd11d-d7bd-49c4-a85c-1a3d51fe9b70";

export default function Contact() {
  const successUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/thanks`
      : "/thanks";

  const contactMethods = [
    {
      title: "WhatsApp Live Chat",
      description: "Fastest way to get a quick estimate.",
      value: "Chat with us live",
      icon: MessageCircle,
      href: "https://w.app/inoutcleaning",
      external: true,
    },
    {
      title: "Email",
      description: "Ideal for quote details and photos.",
      value: "hull.cleaning@outlook.com",
      icon: Mail,
      href: "mailto:hull.cleaning@outlook.com",
    },
    {
      title: "Based In",
      description: "Covering Hull and surrounding villages.",
      value: "Swanland, East Yorkshire",
      icon: MapPin,
    },
    {
      title: "Hours",
      description: "Weekend availability by request.",
      value: "Mon-Sat: 8am-6pm",
      icon: Clock3,
    },
  ];

  return (
    <section id="contact" className="bg-white py-24">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-[2rem] border border-gray-200 bg-white shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative border-b border-gray-200 bg-[#f7fbff] p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-14"
            >
              <div className="inline-flex rounded-full border border-[#d7e7fb] bg-white px-4 py-2 text-brand-label text-xs font-bold uppercase tracking-[0.18em]">
                Get in touch
              </div>
              <h2 className="mb-5 mt-6 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
                Tell us what you need and we&apos;ll come back with a quote
              </h2>
              <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600">
                Send over the details of the job, your area, and whether it is a one-off visit or something regular. WhatsApp is best for quick replies, but you can also use the form below.
              </p>

              <div className="grid gap-4 sm:grid-cols-2">
                {contactMethods.map((method) => {
                  const Icon = method.icon;
                  const content = (
                    <div className="h-full rounded-[1.5rem] border border-gray-200 bg-white p-6 transition-colors duration-200 hover:border-brand-primary/30">
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-accent text-brand-primary">
                        <Icon size={24} />
                      </div>
                      <div className="text-sm font-bold uppercase tracking-[0.18em] text-gray-500">
                        {method.title}
                      </div>
                      <div className="mt-3 text-xl font-bold leading-tight text-gray-900 sm:text-2xl">
                        {method.value}
                      </div>
                      <div className="mt-3 text-sm leading-relaxed text-gray-600">
                        {method.description}
                      </div>
                    </div>
                  );

                  if (method.href) {
                    return (
                      <a
                        key={method.title}
                        href={method.href}
                        target={method.external ? "_blank" : undefined}
                        rel={method.external ? "noreferrer" : undefined}
                      >
                        {content}
                      </a>
                    );
                  }

                  return <div key={method.title}>{content}</div>;
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center bg-white p-8 sm:p-10 lg:p-14"
            >
              <Card className="w-full border-gray-200 bg-white p-8 shadow-none sm:p-10">
                <div className="mb-8">
                  <div className="text-brand-label text-sm font-bold uppercase tracking-[0.18em]">
                    Quick Enquiry
                  </div>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                    Tell us what you need
                  </h3>
                  <p className="mt-3 text-gray-600">
                    Include your area, property type, and whether the job is one-off or regular.
                  </p>
                </div>
                <form className="space-y-5" action={formEndpoint} method="POST">
                  <input type="hidden" name="access_key" value={accessKey} />
                  <input type="hidden" name="subject" value="Cleaning enquiry from hullcleaning.co.uk" />
                  <input type="hidden" name="from_name" value="In & Out Cleaning Website" />
                  <input type="hidden" name="redirect" value={successUrl} />
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

                  <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    <div className="space-y-2">
                      <label htmlFor="contact-first-name" className="text-sm font-bold text-gray-700">First Name</label>
                      <input id="contact-first-name" name="First Name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Alex" required />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="contact-last-name" className="text-sm font-bold text-gray-700">Last Name</label>
                      <input id="contact-last-name" name="Last Name" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Taylor" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-email" className="text-sm font-bold text-gray-700">Email Address</label>
                    <input id="contact-email" name="email" type="email" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="alex@example.com" required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-phone" className="text-sm font-bold text-gray-700">Phone Number</label>
                    <input id="contact-phone" name="Phone Number" type="tel" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="07..." />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-service" className="text-sm font-bold text-gray-700">Service Required</label>
                    <select id="contact-service" name="Service Required" className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary">
                      <option>Domestic Cleaning</option>
                      <option>Commercial Offices</option>
                      <option>End of Tenancy</option>
                      <option>Takeaway Cleaning</option>
                      <option>Garden Tidy Up</option>
                      <option>Organisation Help</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="contact-message" className="text-sm font-bold text-gray-700">Message</label>
                    <textarea id="contact-message" name="message" rows={5} className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-brand-primary" placeholder="Tell us what type of clean you need, your area, and whether it is a one-off or regular job..." required />
                  </div>

                  <Button size="lg" className="w-full">
                    Send Enquiry
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
