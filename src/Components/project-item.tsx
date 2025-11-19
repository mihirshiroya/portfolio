import { useState } from "react";
import {
  ChevronDown,
  TextAlignStart,
  Cpu,
  BadgeInfo,
  Link,
  Github,
} from "lucide-react";
import { AnimatePresence, easeOut, motion } from "framer-motion";
import TechStack from "./tech-stack";

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  details?: string[];
  link?: string;
  github: string;
}

export default function ProjectCard({
  image,
  title,
  shortDescription,
  fullDescription,
  technologies,
  details,
  link,
  github,
}: ProjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const parentVariants = {
    hidden: { opacity: 0, scaleY: 0.95 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05,
        duration: 0.3,
        ease: easeOut,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 4, filter: "blur(4px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.38, ease: easeOut },
    },
  };

  return (
    <div className="overflow-hidden rounded-lg bg-background shadow-md">
      <div className="flex flex-row gap-4 md:gap-6 p-4">
        <div className="relative overflow-hidden rounded-full bg-muted size-18 md:size-25">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover rounded-full"
          />
        </div>

        <div className="flex-1 my-auto space-y-1 md:space-y-2">
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground md:text-md">
            {shortDescription}
          </p>
        </div>

        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="ml-auto rounded-lg bg-primary/5 p-2 transition-colors hover:bg-primary/10 h-fit"
          aria-expanded={isExpanded}
          aria-label={`${isExpanded ? "Collapse" : "Expand"} ${title}`}
        >
          <ChevronDown
            size={24}
            className={`text-primary transition-transform duration-300 ${
              isExpanded ? "rotate-180" : ""
            }`}
          />
        </button>
      </div>

      <AnimatePresence mode="sync" initial={false}>
        {isExpanded && (
          <motion.div
            key="expand-content"
            variants={parentVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            style={{ overflow: "hidden", originY: 0 }}
            className="border-t border-border px-4 py-4 md:px-6 md:py-6"
          >
            <motion.div
              initial={{ height: 0 }}
              animate={{ height: "auto" }}
              exit={{ height: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
              className="space-y-4"
            >
              <motion.div variants={childVariants}>
                <h4 className="mb-2 text-sm md:text-lg font-semibold text-foreground flex items-center justify-between">
                  <div className="flex items-center">
                    <BadgeInfo className="mr-2 size-5 text-muted-foreground" />{" "}
                    Overview
                  </div>
                  <div className="flex gap-x-2">
                    {link && (
                      <IconLink
                        href={link}
                        icon={
                          <Link className="size-4 md:size-5 text-muted-foreground" />
                        }
                      />
                    )}
                    <IconLink
                      href={github}
                      icon={
                        <Github className="size-4 md:size-5 text-muted-foreground" />
                      }
                    />
                  </div>
                </h4>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {fullDescription}
                </p>
              </motion.div>

              {details && details.length > 0 && (
                <motion.div variants={childVariants}>
                  <h4 className="mb-2 text-sm md:text-lg font-semibold text-foreground flex items-center justify-start">
                    <TextAlignStart className="mr-2 size-5 text-muted-foreground" />{" "}
                    Key Features
                  </h4>
                  <ul className="space-y-2 list-disc list-inside">
                    {details.map((detail, index) => (
                      <motion.li
                        key={index}
                        variants={childVariants}
                        className="text-sm text-muted-foreground leading-relaxed"
                      >
                        {detail}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {technologies.length > 0 && (
                <motion.div variants={childVariants}>
                  <h4 className="mb-2 text-sm md:text-lg font-semibold text-foreground flex items-center justify-start">
                    <Cpu className="mr-2 size-5 text-muted-foreground" /> Tech
                    Stack
                  </h4>

                  <div className="flex flex-wrap -space-x-4">
                    <TechStack items={technologies} />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

const IconLink = ({ href, icon }: { href: string; icon: React.ReactNode }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 rounded-md hover:bg-accent transition-colors"
  >
    {icon}
  </a>
);