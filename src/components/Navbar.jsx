import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const links = [
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 mx-auto flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 max-w-7xl"
    >
      <div className="absolute inset-0 bg-white/60 backdrop-blur-xl border-b border-white/20 -z-10 shadow-sm" />
      
      <Link to="/" className="group cursor-pointer">
        <img
          src="/logo.png"
          alt="In & Out Cleaning"
          className="h-9 w-auto transition-transform duration-300 group-hover:scale-[1.02] sm:h-14"
        />
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        {links.map((link) => (
          <Link key={link.to} to={link.to} className="hover:text-brand-primary transition-colors">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <Link to="/contact">
          <Button size="sm" className="hidden sm:flex">Book Now</Button>
        </Link>
        <button
          type="button"
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm md:hidden"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {isOpen ? (
        <div className="absolute left-4 right-4 top-full mt-3 rounded-3xl border border-white/70 bg-white/95 p-4 shadow-2xl backdrop-blur md:hidden">
          <div className="flex flex-col gap-2 text-sm font-medium text-gray-700">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 transition-colors hover:bg-brand-accent hover:text-brand-primary"
              >
                {link.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setIsOpen(false)} className="pt-2">
              <Button size="md" className="w-full">Book Now</Button>
            </Link>
          </div>
        </div>
      ) : null}
    </motion.nav>
  );
}
