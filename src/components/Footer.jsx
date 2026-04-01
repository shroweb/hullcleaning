import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { serviceAreas } from "../data/serviceAreas";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#081525] via-[#0b223d] to-[#103617] pt-20 pb-10 text-gray-300">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="space-y-6">
            <Link to="/" className="inline-flex group cursor-pointer text-white">
              <img
                src="/logo.png"
                alt="In & Out Cleaning"
                className="h-16 w-auto transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed">
              Local cleaning services based in Swanland, covering Hull and nearby villages for domestic, commercial, tenancy, takeaway, and tidy-up work.
            </p>
            <div className="flex gap-4">
              <a href="https://w.app/inoutcleaning" target="_blank" rel="noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="mailto:hull.cleaning@outlook.com" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-secondary hover:text-[#081525] transition-colors">
                <Mail size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-primary hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Services</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/services/residential" className="hover:text-brand-primary transition-colors">Domestic Cleaning</Link></li>
              <li><Link to="/services/commercial" className="hover:text-brand-primary transition-colors">Commercial Offices</Link></li>
              <li><Link to="/services/residential" className="hover:text-brand-primary transition-colors">End of Tenancy</Link></li>
              <li><Link to="/services/commercial" className="hover:text-brand-primary transition-colors">Takeaway Deep Cleans</Link></li>
              <li><Link to="/services#tidy-ups" className="hover:text-brand-primary transition-colors">Garden and Organisation Help</Link></li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Areas We Cover</h4>
            <ul className="space-y-4 text-sm">
              {serviceAreas.map((area) => (
                <li key={area.slug}>
                  <Link to={`/areas/${area.slug}`} className="hover:text-brand-primary transition-colors">
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg">Contact Info</h4>
            <ul className="space-y-4 text-sm">
              <li>Swanland, East Yorkshire</li>
              <li>WhatsApp live chat available</li>
              <li>hull.cleaning@outlook.com</li>
              <li className="pt-2 text-xs opacity-60">Mon - Fri: 8:00 AM - 6:00 PM</li>
              <li className="text-xs opacity-60">Sat - Sun: 9:00 AM - 4:00 PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <div>© 2026 In & Out Cleaning. All Rights Reserved.</div>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <Link to="/privacy" className="hover:text-brand-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-brand-primary transition-colors">Terms of Service</Link>
            <a
              href="https://shroweb.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand-primary transition-colors"
            >
              Developed by Shro Web
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
