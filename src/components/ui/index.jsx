import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ className, variant = "primary", size = "md", ...props }) {
  const variants = {
    primary: "bg-gradient-to-r from-brand-primary to-brand-secondary text-white hover:opacity-95 shadow-md transition-all duration-300",
    secondary: "bg-white text-brand-primary border border-brand-primary hover:bg-brand-accent transition-all duration-300",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 transition-all duration-300",
    white: "bg-white text-gray-900 hover:bg-gray-50 shadow-lg transition-all duration-300",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg font-semibold",
  };

  return (
    <button
      className={cn(
        "rounded-full inline-flex items-center justify-center cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
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
    <div
      className={cn(
        "bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
