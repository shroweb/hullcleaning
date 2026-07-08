import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/services", label: "Services" },
    { to: "/about", label: "About" },
    { to: "/reviews", label: "Reviews" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-md shadow-sm"
    >
      <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
        <Link to="/" className="group cursor-pointer flex items-center">
          <img
            src="/logo.png"
            alt="In & Out Cleaning"
            className="h-8 w-auto transition-transform duration-300 group-hover:scale-[1.01] sm:h-11"
          />
        </Link>

        {/* Desktop Links with sliding animated pill */}
        <div className="hidden md:flex items-center gap-1.5 rounded-full bg-slate-900/[0.03] p-1.5 text-sm font-medium text-slate-600">
          {links.map((link) => {
            const isActive = location.pathname === link.to;
            return (
              <Link
                key={link.to}
                to={link.to}
                className={`relative rounded-full px-4 py-2 transition-colors duration-300 ${
                  isActive ? "text-brand-primary" : "hover:text-slate-900"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    className="absolute inset-0 -z-10 rounded-full bg-white shadow-sm ring-1 ring-slate-100"
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <Link to="/contact" className="hidden sm:flex">
            <Button size="sm" className="shadow-md">Book Now</Button>
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white text-gray-700 shadow-sm md:hidden hover:bg-slate-50 transition-colors"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="absolute left-4 right-4 top-full mt-3 overflow-hidden rounded-2xl border border-slate-150 bg-white/98 p-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-1.5 text-sm font-medium text-slate-700">
              {links.map((link, idx) => {
                const isActive = location.pathname === link.to;
                return (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    key={link.to}
                  >
                    <Link
                      to={link.to}
                      onClick={() => setIsOpen(false)}
                      className={`block rounded-xl px-4 py-3 transition-colors ${
                        isActive
                          ? "bg-brand-accent text-brand-primary font-semibold"
                          : "hover:bg-slate-50 hover:text-slate-900"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: links.length * 0.05 }}
                className="pt-3 border-t border-slate-100 mt-1"
              >
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button size="md" className="w-full shadow-md">Book Now</Button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
