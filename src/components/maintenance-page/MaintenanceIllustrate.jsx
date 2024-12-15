import { FaWrench } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";

export function MaintenanceIllustration() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -top-4 -left-4 animate-spin-slow">
        <IoSettingsOutline className="w-12 h-12 text-golden" />
      </div>
      <div className="absolute top-8 -right-4 animate-bounce">
        <FaWrench className="w-10 h-10 text-golden" />
      </div>
      <div className="backdrop-blur-xl bg-white/5 rounded-full p-16 border border-white/10">
        <img
          src="/aurun_favi.png"
          alt="Maintenance"
          className=" w-40 object-cover mx-auto "
        />
      </div>
    </div>
  );
}
