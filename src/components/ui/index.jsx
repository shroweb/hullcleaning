import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ className, variant = "primary", size = "md", ...props }) {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-brand-label shadow-lg shadow-brand-primary/10 hover:shadow-brand-primary/25 transition-all duration-300",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:border-brand-primary hover:text-brand-primary shadow-sm hover:shadow-md transition-all duration-300",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 transition-all duration-300",
    white: "bg-white text-brand-deep hover:bg-brand-accent border border-gray-100 shadow-md hover:shadow-lg transition-all duration-300",
  };

  const sizes = {
    sm: "px-5 py-2 text-sm font-medium",
    md: "px-6 py-3 text-base font-medium",
    lg: "px-8 py-4 text-base font-semibold",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02, y: -1 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 15 }}
      className={cn(
        "inline-flex items-center justify-center rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed select-none focus:outline-none focus:ring-2 focus:ring-brand-primary/50 focus:ring-offset-2",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  );
}

export function Card({ className, children, ...props }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={cn(
        "rounded-[2rem] border border-slate-100 bg-white p-8 shadow-sm hover:shadow-xl hover:border-brand-primary/10 transition-all duration-300 relative overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
    </motion.div>
  );
}
