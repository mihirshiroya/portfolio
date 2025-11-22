import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(0);
  const [glitch, setGlitch] = useState(false);

  const verticalLines = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 bottom-0 w-px bg-gray-300"
          style={{ left: `${i * 40}px` }}
        />
      )),
    []
  );

  const horizontalLines = useMemo(
    () =>
      Array.from({ length: 150 }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 right-0 h-px bg-gray-300"
          style={{ top: `${i * 40}px` }}
        />
      )),
    []
  );

  useEffect(() => {
    let value = 0;

    const interval = setInterval(() => {
      value += 1;
      setProgress(value);

      if (value === 100) clearInterval(interval);

      if (Math.random() > 0.85) {
        setGlitch(true);
        setTimeout(() => setGlitch(false), 80);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen bg-background overflow-hidden transform-gpu">
      <div className="absolute inset-0 opacity-30 -skew-x-12 -translate-x-32 pointer-events-none">
        {verticalLines}
      </div>

      <div className="absolute inset-0 opacity-30 scale-x-150 -skew-x-12 pointer-events-none">
        {horizontalLines}
      </div>

      <div className="relative flex items-center justify-center h-full">
        <div className="bg-background border-2 border-border rounded-lg shadow-lg flex flex-col items-center justify-center -skew-x-12 p-4 md:p-8 gap-6">

          <div className="w-full flex items-center justify-between text-white text-4xl font-semibold tracking-wide">
            <div className="flex items-center p-2">
              <span className="playfair text-primary">Loading</span>

              <motion.span
                animate={{ opacity: [0.2, 1, 0.2] }}
                transition={{ duration: 0.5, repeat: Infinity }}
              >
                ...
              </motion.span>
            </div>

            <div className="relative ml-2">
              <motion.span
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 1, repeat: Infinity }}
                className="text-primary"
              >
                {progress}%
              </motion.span>

              {glitch && (
                <>
                  <span className="absolute inset-0 text-red-500 translate-x-[2px] -translate-y-[1px] opacity-80">
                    {progress}%
                  </span>
                  <span className="absolute inset-0 text-blue-500 -translate-x-[2px] translate-y-[1px] opacity-80">
                    {progress}%
                  </span>
                </>
              )}
            </div>
          </div>

          {/* GRID ANIMATION */}
          <div className="flex flex-col items-center justify-center p-4">
            <div className="grid grid-cols-24 gap-x-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <Upper key={i} index={i} />
              ))}
            </div>

            <div className="grid grid-cols-24 gap-x-1">
              {Array.from({ length: 24 }).map((_, i) => (
                <Lower key={i} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


const getDelay = (index: number) => (index % 2 === 0 ? 0 : 0.5);

const Upper = ({ index }: { index: number }) => (
  <div className="relative h-3 w-2 border-x border-t border-border skew-x-[30deg] overflow-hidden">
    <motion.div
      initial={{ right: "100%", left: "0%" }}
      animate={{
        right: ["100%", "0%", "0%", "100%"],
        left: ["0%", "0%", "100%", "100%"],
      }}
      transition={{
        duration: 1,
        delay: getDelay(index),
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-y-0 bg-sky-500"
    />
  </div>
);

const Lower = ({ index }: { index: number }) => (
  <div className="relative h-3 w-2 border-x border-b border-border -skew-x-[30deg] overflow-hidden">
    <motion.div
      initial={{ right: "100%", left: "0%" }}
      animate={{
        right: ["100%", "0%", "0%", "100%"],
        left: ["0%", "0%", "100%", "100%"],
      }}
      transition={{
        duration: 1,
        delay: getDelay(index),
        repeat: Infinity,
        ease: "linear",
      }}
      className="absolute inset-y-0 bg-sky-500"
    />
  </div>
);
