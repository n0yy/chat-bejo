import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export default function Button({
  children,
  type = "button",
  className = "",
  onClick,
  variant = "primary",
}: ButtonProps) {
  const baseStyles =
    "w-full py-2.5 px-4 rounded-lg text-sm font-medium transition-all duration-200 flex items-center justify-center";
  const variants = {
    primary:
      "bg-gray-900 text-white hover:bg-gray-800 focus:ring-2 focus:ring-gray-200",
    secondary:
      "bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-2 focus:ring-gray-200",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
