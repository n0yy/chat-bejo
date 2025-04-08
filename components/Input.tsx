import { neumorphism } from "@/utils/styles";

export default function Input({
  placeholder,
  name,
  id,
  type,
  className,
}: {
  placeholder: string;
  name: string;
  id: string;
  type: string;
  className?: string;
}) {
  return (
    <input
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      className={`w-full py-3 px-4 text-gray-700 focus:outline-none ${neumorphism.input} ${className}`}
    />
  );
}
