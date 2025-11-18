import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  animate,
} from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollDirection } from "../hooks/useScrollDirection";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const direction = useScrollDirection(); // throttled direction

  // motion value for opacity (super smooth + no re-render)
  const opacityMV = useMotionValue(1);

  // Animate opacity only when direction changes (not on every scroll)
  useEffect(() => {
    animate(opacityMV, direction === "down" ? 0.4 : 1, {
      duration: 0.25,
      ease: "easeOut",
    });
  }, [direction, opacityMV]);

  // Show/hide button normally (React state only triggered twice)
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          style={{ opacity: opacityMV }} // bind motion value here
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={22} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
