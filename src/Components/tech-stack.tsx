import HoverRevealItem from "./reveal-item";
import iconMap from "./icon-map";
import { useState } from "react";


interface TechStackProps {
  items: string[];
}

export default function TechStack({ items }: TechStackProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div className="flex -space-x-4">
      {items.map((label, index) => {
        const Icon = iconMap[label];

        if (!Icon) {
          console.warn(`No icon found for label: ${label}`);
        }

        return (
          <HoverRevealItem
            key={index}
            icon={Icon}
            label={label}
            active={activeIndex === index}
            onActivate={() =>
              setActiveIndex(activeIndex === index ? null : index)
            }
          />
        );
      })}
    </div>
  );
}