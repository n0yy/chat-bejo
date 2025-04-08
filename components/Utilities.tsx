import { IconType } from "react-icons";

export default function Utilities({
  Icon,
  label,
}: {
  Icon: IconType;
  label: string;
}) {
  return (
    <button className=" rounded-full max-w-max py-1 px-3 text-xs text-blue-800 flex items-center hover:cursor-pointer hover:scale-105 hover:bg-blue-50 transition-all duration-100">
      <Icon className="mr-1" size={14} />
      {label}
    </button>
  );
}
