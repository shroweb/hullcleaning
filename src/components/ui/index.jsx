import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function Button({ className, variant = "primary", size = "md", ...props }) {
  const variants = {
    primary: "bg-brand-primary text-white hover:bg-[#0d68d2] shadow-sm transition-colors duration-200",
    secondary: "bg-white text-gray-900 border border-gray-200 hover:border-brand-primary hover:text-brand-primary transition-colors duration-200",
    ghost: "bg-transparent text-gray-600 hover:bg-gray-100 transition-all duration-300",
    white: "bg-white text-gray-900 hover:bg-gray-50 border border-gray-200 transition-colors duration-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-7 py-3.5 text-base font-semibold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed",
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
        "rounded-[2rem] border border-gray-200 bg-white p-8 shadow-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
