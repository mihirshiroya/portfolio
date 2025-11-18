import { motion } from "framer-motion";
import React from "react";

interface HoverRevealItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onActivate?: () => void;
}

const HoverRevealItem: React.FC<HoverRevealItemProps> = ({
  icon,
  label,
  active,
  onActivate,
}) => {
  return (
    <div className="z-0 hover:z-10">
      <motion.div
        className="flex items-center bg-background text-primary rounded-full px-3 py-2 cursor-pointer border border-dashed border-slate-600 select-none"
        initial="initial"
        animate={active ? "active" : "initial"}
        whileHover="hover"
        onClick={onActivate}
        variants={{
          initial: { width: "fit-content" },
          hover: { width: "fit-content" },
          active: { width: "fit-content" },
        }}
        transition={{ type: "spring", stiffness: 250, damping: 22 }}
      >
        <motion.div
          variants={{
            initial: { x: 0, rotate: 0 },
            hover: { x: -4, rotate: 360 },
            active: { x: -4, rotate: 0 },
          }}
          transition={{ duration: 0.4 }}
        >
          {icon}
        </motion.div>

        <motion.div
          className="overflow-hidden"
          variants={{
            initial: { width: 0, opacity: 0 },
            hover: { width: "auto", opacity: 1 },
            active: { width: "auto", opacity: 1 },
          }}
          transition={{ duration: 0.35 }}
        >
          <span className="ml-2 whitespace-nowrap">{label}</span>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default HoverRevealItem;
