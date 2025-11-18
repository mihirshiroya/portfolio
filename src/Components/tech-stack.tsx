import HoverRevealItem from "./reveal-item";
import { Github, Linkedin, Mail } from "lucide-react";
import { useState } from "react";

const iconMap: Record<string, React.ReactNode> = {
  Github: <Github className="size-5" />,
  Linkedin: <Linkedin className="size-5" />,
  Email: <Mail className="size-5" />,
};

interface TechStackProps {
  items: string[]; // only labels
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