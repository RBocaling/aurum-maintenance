import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineMessage } from "react-icons/ai";
export function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-4 mt-8">
      <h3 className="text-xl font-semibold text-gray-200">Need assistance?</h3>
      <div className="flex gap-4">
        <button className="text-smoke py-3 px-8 rounded-lg flex items-center gap-4 backdrop-blur-md bg-white/5">
          <HiOutlineMail />
          Email Support
        </button>
        <button className="text-smoke py-3 px-8 rounded-lg flex items-center gap-4 backdrop-blur-md bg-white/5">
          <AiOutlineMessage />
          Live Chat
        </button>
      </div>
    </div>
  );
}
