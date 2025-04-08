import Aside from "../components/Aside";
import PromptInput from "../components/PromptInput";
import { GoDatabase } from "react-icons/go";
import { SiGooglesheets } from "react-icons/si";
import Utilities from "../components/Utilities";

export default function Home() {
  const asideCollapsedWidth = "ml-16";
  const currentMargin = asideCollapsedWidth;

  return (
    <div className="flex">
      <Aside />
      <main
        className={`flex-1 min-h-screen flex flex-col items-center justify-center p-4 md:p-6 ${currentMargin} transition-all duration-300 ease-in-out`}
      >
        <div className="w-full max-w-xl text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">
            Ada yang bisa Bejo bantu?
          </h1>
          <PromptInput />
          <div className="mt-4 space-x-2 flex items-center justify-center">
            <Utilities Icon={GoDatabase} label="Connect to Database" />
            <Utilities Icon={SiGooglesheets} label="Connect to Spreadsheet" />
          </div>
        </div>
      </main>
      {/* End Main Content */}
    </div>
  );
}
