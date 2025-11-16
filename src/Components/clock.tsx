import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = hours * 30 + minutes * 0.5;

  return (
    <div className="flex items-center justify-center w-full h-full p-4">
      <div className="relative w-64 h-64 md:w-80 md:h-80 flex items-center justify-center bg-background">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-5 -translate-y-2.5 bg-primary origin-bottom"
            style={{ transform: `rotate(${i * 30}deg) translateY(-120px)` }}
          ></div>
        ))}

        <motion.div
          className="absolute w-1.5 h-20 bg-[linear-gradient(to_bottom,var(--primary)_50%,transparent_50%)] rounded"
          animate={{ rotate: hourDeg }}
          transition={{ type: "spring", stiffness: 50, damping: 20 }}
        />

        <motion.div
          className="absolute w-1 h-28 bg-[linear-gradient(to_bottom,var(--primary)_50%,transparent_50%)] rounded"
          animate={{ rotate: minuteDeg }}
          transition={{ type: "spring", stiffness: 60, damping: 20 }}
        />

        <motion.div
          className="absolute w-0.5 h-32 bg-[linear-gradient(to_bottom,red_50%,transparent_50%)] rounded"
          animate={{ rotate: secondDeg }}
          transition={{ type: "tween", ease: "linear", duration: 1 }}
        />

        <div className="absolute w-4 h-4 bg-primary rounded-full"></div>
      </div>
    </div>
  );
}