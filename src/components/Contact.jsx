import { motion } from "framer-motion";
import { useState } from "react";
import { Clock3, Mail, MapPin, MessageCircle } from "lucide-react";
import { Button, Card } from "./ui";

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    service: "Domestic Cleaning",
    message: "",
  });

  const [status, setStatus] = useState("");

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
      value: "info@hullcleaning.co.uk",
      icon: Mail,
      href: "mailto:info@hullcleaning.co.uk",
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
    {
      title: "Response Time",
      description: "Best for quick quotes and availability.",
      value: "Usually within a few hours",
      icon: MessageCircle,
    },
  ];

  function handleChange(event) {
    const { name, value } = event.target;
    setFormState((current) => ({ ...current, [name]: value }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = `${formState.firstName} ${formState.lastName}`.trim();
    const subject = encodeURIComponent(`Cleaning enquiry: ${formState.service}`);
    const cc = encodeURIComponent("callum@shroweb.com");
    const body = encodeURIComponent(
      `Name: ${name || "Not provided"}\nEmail: ${formState.email || "Not provided"}\nService: ${formState.service}\n\nMessage:\n${formState.message || "No message provided"}`
    );

    window.location.href = `mailto:info@hullcleaning.co.uk?cc=${cc}&subject=${subject}&body=${body}`;
    setStatus("Your email app should open with your enquiry ready to send.");
  }

  return (
    <section id="contact" className="bg-gray-50/60 py-24">
      <div className="container mx-auto px-6">
        <div className="overflow-hidden rounded-[2.5rem] border border-white/70 bg-white shadow-2xl shadow-blue-500/10">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-white via-brand-accent to-brand-accent-green p-8 sm:p-10 lg:p-14"
          >
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-brand-primary shadow-sm">
              Get in touch
            </div>
            <h2 className="mb-6 mt-6 text-4xl font-extrabold tracking-tight text-gray-900 lg:text-5xl">
              Ready for a <span className="text-brand-primary">clean, tidy reset?</span>
            </h2>
            <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600 lg:text-xl">
              Tell us what you need and we will help with a one-off clean, regular visits, tenancy work, a takeaway deep clean, or general tidying support.
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {contactMethods.map((method) => {
                const Icon = method.icon;
                const content = (
                  <div className="group h-full rounded-[2rem] border border-gray-100 bg-white/90 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-accent to-brand-accent-green text-brand-primary shadow-sm">
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
            <Card className="w-full border border-gray-100 bg-white p-8 shadow-xl shadow-gray-200/70 sm:p-10">
              <div className="mb-8">
                <div className="text-sm font-bold uppercase tracking-[0.18em] text-brand-primary">
                  Quick Enquiry
                </div>
                <h3 className="mt-3 text-3xl font-bold tracking-tight text-gray-900">
                  Tell us what you need
                </h3>
                <p className="mt-3 text-gray-600">
                  Include your area, property type, and whether the job is one-off or regular.
                </p>
              </div>
              <form className="space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">First Name</label>
                  <input name="firstName" value={formState.firstName} onChange={handleChange} className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300" placeholder="Alex" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700">Last Name</label>
                  <input name="lastName" value={formState.lastName} onChange={handleChange} className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300" placeholder="Taylor" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Email Address</label>
                <input name="email" value={formState.email} onChange={handleChange} className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300" placeholder="alex@example.com" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Service Required</label>
                <select name="service" value={formState.service} onChange={handleChange} className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300">
                  <option>Domestic Cleaning</option>
                  <option>Commercial Offices</option>
                  <option>End of Tenancy</option>
                  <option>Takeaway Cleaning</option>
                  <option>Garden Tidy Up</option>
                  <option>Organisation Help</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700">Message</label>
                <textarea name="message" value={formState.message} onChange={handleChange} rows={5} className="w-full rounded-2xl border border-gray-100 bg-gray-50 px-5 py-4 focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all duration-300" placeholder="Tell us what type of clean you need, your area, and whether it is a one-off or regular job..." />
              </div>
                <Button size="lg" className="w-full text-lg shadow-xl shadow-brand-primary/20">Send Enquiry</Button>
                {status ? <p className="text-sm text-gray-600">{status}</p> : null}
              </form>
            </Card>
          </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
