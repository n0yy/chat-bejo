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
          className="w-full border border-gray-300 rounded-full py-3 pl-5 pr-12  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm text-base"
        />
        <button
          type="submit"
          className="absolute inset-y-0 right-0 flex items-center justify-center hover:cursor-pointer px-4 text-gray-500 hover:text-blue-600 focus:outline-none transition-all duration-100 hover:bg-blue-50 rounded-full"
          aria-label="Send question"
        >
          <IoMdSend size={24} />
        </button>
      </form>
    </div>
  );
}
