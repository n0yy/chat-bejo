import { IoMdSend } from "react-icons/io";

export default function PromptInput() {
  return (
    <div className="relative w-full">
      <form action="">
        <input
          type="text"
          name="prompt"
          id="prompt"
          placeholder="Tanya Bejo..."
          className="w-full border border-gray-300 rounded-full py-3 pl-5 pr-12 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 shadow-sm text-base text-gray-900 bg-white"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center hover:cursor-pointer px-4 text-gray-600 hover:text-gray-900 focus:outline-none transition-all duration-200 hover:bg-gray-100 rounded-full"
          aria-label="Send question"
        >
          <IoMdSend size={24} />
        </button>
      </form>
    </div>
  );
}
