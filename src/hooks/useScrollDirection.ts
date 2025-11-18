import { useEffect, useState } from "react";

export function useScrollDirection(threshold = 5) {
  const [direction, setDirection] = useState<"up" | "down" | "none">("none");

  useEffect(() => {
    let lastY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const diff = currentY - lastY;

      // ignore tiny movements
      if (Math.abs(diff) < threshold) return;

      if (currentY > lastY) {
        setDirection("down");
      } else {
        setDirection("up");
      }

      lastY = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return direction;
}