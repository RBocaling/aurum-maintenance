/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";

export function MaintenanceTimer({ className, estimatedTime }) {
  // Default estimated time: 2 hours from now if not provided
  estimatedTime = estimatedTime || new Date(Date.now() + 2 * 60 * 60 * 1000);

  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = estimatedTime?.getTime() - now;

      setTimeLeft({
        hours: Math.floor(
          (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [estimatedTime]);

  return (
    <div className={`flex gap-4 ${className || ""}`}>
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="text-center">
          <div className="backdrop-blur-md bg-white/10 rounded-lg p-4 min-w-[100px]">
            <span className="text-4xl font-bold">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-sm text-gray-400 mt-2 block capitalize">
            {key}
          </span>
        </div>
      ))}
    </div>
  );
}
