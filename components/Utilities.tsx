import { IconType } from "react-icons";

export default function Utilities({
  Icon,
  label,
}: {
  Icon: IconType;
  label: string;
}) {
  return (
    <button className="rounded-full max-w-max py-2 px-4 text-sm text-gray-900 flex items-center hover:cursor-pointer hover:scale-105 hover:bg-gray-100 transition-all duration-200 border border-gray-200 shadow-sm">
      <Icon className="mr-2" size={16} />
      {label}
    </button>
  );
}
