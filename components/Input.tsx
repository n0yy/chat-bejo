import { ReactNode } from "react";

interface InputProps {
  placeholder: string;
  name: string;
  id: string;
  type: string;
  className?: string;
  icon?: ReactNode;
}

export default function Input({
  placeholder,
  name,
  id,
  type,
  className = "",
  icon,
}: InputProps) {
  return (
    <div className="relative">
      {icon && (
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
          {icon}
        </div>
      )}
      <input
        type={type}
        name={name}
        id={id}
        placeholder={placeholder}
        className={`w-full py-2.5 ${
          icon ? "pl-10" : "pl-4"
        } pr-4 text-gray-900 bg-white border border-gray-300 rounded-lg focus:border-gray-700 focus:ring-2 focus:ring-gray-200 transition-all duration-200 text-sm ${className}`}
      />
    </div>
  );
}
