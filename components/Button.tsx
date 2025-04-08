import { ReactNode } from "react";
import { neumorphism } from "@/utils/styles";

interface ButtonProps {
  children: ReactNode;
  type?: "button" | "submit" | "reset";
  className?: string;
  onClick?: () => void;
}

export default function Button({
  children,
  type = "button",
  className = "",
  onClick,
}: ButtonProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full py-3 px-4 text-gray-700 transition-all duration-200 ${neumorphism.button} ${className}`}
    >
      {children}
    </button>
  );
}
