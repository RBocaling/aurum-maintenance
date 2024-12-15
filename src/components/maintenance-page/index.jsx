import { FaRegStar } from "react-icons/fa"; // Import the desired icon
import { MaintenanceIllustration } from "./MaintenanceIllustrate";
import { MaintenanceTimer } from "./MaintenanceTimer";
import { ContactInfo } from "./ContactInfo";

function UnderMaitenance() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#332c0d] text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba')] bg-cover bg-center opacity-10" />

      <div className="relative container mx-auto px-4 py-16 flex flex-col items-center justify-center min-h-screen">
        <div className="text-center space-y-8 max-w-3xl mx-auto">
          <div className="inline-flex items-center px-4 py-2 rounded-full backdrop-blur-md bg-white/5 border border-white/10 mb-8">
            <FaRegStar className="w-4 h-4 mr-2 text-yellow-500" />{" "}
            {/* Replaced Sparkles with FaRegStar */}
            <span className="text-sm">Scheduled Maintenance</span>
          </div>

          <h1 className="text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-orange-300 via-golden to-yellow-500">
            We're Currently Upgrading
          </h1>

          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our team is performing scheduled maintenance to bring you an even
            better experience. We'll be back shortly with exciting improvements!
          </p>

          <MaintenanceIllustration />

          {/* <div className="mt-12">
            <h2 className="text-2xl font-semibold mb-6">
              Estimated Time Remaining
            </h2>
            <MaintenanceTimer className="justify-center" />
          </div> */}

          <ContactInfo />
        </div>
      </div>
    </div>
  );
}

export default UnderMaitenance;
