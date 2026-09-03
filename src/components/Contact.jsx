import { motion } from "framer-motion";
import { Clock3, Mail, MapPin, MessageCircle, Send } from "lucide-react";
import { Button } from "./ui";

const formEndpoint = "https://formsubmit.co/shro.callum@gmail.com";

const contactDetails = [
  {
    icon: MessageCircle,
    label: "WhatsApp Chat",
    value: "Chat with us live",
    note: "Fastest for quotes and quick questions",
    href: "https://w.app/inoutcleaning",
    external: true,
    colorClass: "text-brand-primary bg-slate-100",
  },
  {
    icon: Mail,
    label: "Email",
    value: "hull.cleaning@outlook.com",
    note: "Good for sending photos or details",
    href: "mailto:hull.cleaning@outlook.com",
    colorClass: "text-brand-primary bg-slate-100",
  },
  {
    icon: MapPin,
    label: "Based In",
    value: "Swanland, East Yorkshire",
    note: "Covering Hull and surrounding villages",
    colorClass: "text-brand-primary bg-slate-100",
  },
  {
    icon: Clock3,
    label: "Working Hours",
    value: "Mon–Sat, 8am–6pm",
    note: "Weekend availability by request",
    colorClass: "text-brand-primary bg-slate-100",
  },
];

export default function Contact() {
  const successUrl =
    typeof window !== "undefined"
      ? `${window.location.origin}/thanks`
      : "/thanks";

  return (
    <section id="contact" className="py-6">
      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm">
        <div className="grid lg:grid-cols-[0.95fr_1fr]">
          
          {/* Info Column */}
          <div className="border-b border-slate-100 bg-slate-50/50 p-8 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <span className="text-brand-primary text-xs font-bold uppercase tracking-wider bg-slate-100 px-3.5 py-1.5 rounded-full">
              Get in Touch
            </span>
            <h2 className="mt-6 font-display text-2xl font-extrabold tracking-tight text-brand-deep sm:text-3xl">
              Tell us what you need
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Send over the property type, your location, and whether it's a one-off or regular cleaning project. WhatsApp is the fastest way to get a quote.
            </p>

            <ul className="mt-8 space-y-6">
              {contactDetails.map((item) => {
                const Icon = item.icon;
                const inner = (
                  <div className="flex items-start gap-4 group">
                    <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.colorClass} border border-slate-200 transition-transform duration-200 group-hover:scale-102`}>
                      <Icon size={18} />
                    </div>
                    <div>
                      <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                        {item.label}
                      </div>
                      <div className="mt-0.5 font-bold text-brand-deep group-hover:text-brand-primary transition-colors duration-200">
                        {item.value}
                      </div>
                      <div className="mt-0.5 text-xs text-slate-500">{item.note}</div>
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
                        className="block transition-all hover:translate-x-0.5"
                      >
                        {inner}
                      </a>
                    </li>
                  );
                }
                return <li key={item.label}>{inner}</li>;
              })}
            </ul>
          </div>

          {/* Form Column */}
          <div className="p-8 sm:p-10 lg:p-12">
            <form className="space-y-5" action={formEndpoint} method="POST">
              <input type="hidden" name="_next" value={successUrl} />
              <input type="hidden" name="_subject" value="Cleaning enquiry from hullcleaning.co.uk" />
              <input type="hidden" name="_captcha" value="false" />

              <div className="space-y-1.5">
                <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wider text-slate-600">Name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  autoCapitalize="words"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-deep placeholder-slate-400 transition-all focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary shadow-sm"
                  placeholder="Alex Taylor"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wider text-slate-600">Email Address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-deep placeholder-slate-400 transition-all focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary shadow-sm"
                  placeholder="alex@example.com"
                  required
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-phone" className="text-xs font-bold uppercase tracking-wider text-slate-600">Phone <span className="font-normal text-slate-400">(optional)</span></label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-deep placeholder-slate-400 transition-all focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary shadow-sm"
                  placeholder="07123 456789"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-service" className="text-xs font-bold uppercase tracking-wider text-slate-600">Type of clean</label>
                <div className="relative">
                  <select
                    id="contact-service"
                    name="service"
                    className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-deep transition-all focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary shadow-sm"
                  >
                    <option>Domestic Cleaning</option>
                    <option>Commercial Offices</option>
                    <option>End of Tenancy</option>
                    <option>Takeaway Cleaning</option>
                    <option>Restaurant Cleaning</option>
                    <option>Garden Tidy Up</option>
                    <option>Organisation Help</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-slate-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wider text-slate-600">Message details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-brand-deep placeholder-slate-400 transition-all focus:border-brand-primary focus:outline-none focus:ring-1 focus:ring-brand-primary shadow-sm"
                  placeholder="Property size, area, regular or one-off clean..."
                  required
                />
              </div>

              <Button size="lg" type="submit" className="w-full gap-2 shadow-sm mt-2">
                <Send size={15} />
                Send Inquiry
              </Button>

              <div className="flex items-center justify-center gap-1.5 text-xs text-slate-500 pt-1">
                <span>🔒 Free no-obligation quote &bull; Reply within a few hours</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
