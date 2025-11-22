import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronRight } from "lucide-react";
import { Line } from "./line";

export interface Experience {
  id: string;
  company: string;
  role: string;
  details: string;
  startDate: string;
  endDate: string;
  level: "company" | "position" | "detail";
  replies: Experience[];
}

interface ExperienceThreadProps {
  experience: Experience;
  depth?: number;
  isLast?: boolean;
}

const containerVariants = {
  open: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.04,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.04,
      staggerDirection: -1,
    },
  },
};

const childVariants = {
  open: { opacity: 1, y: 0, transition: { duration: 0.18 } },
  closed: { opacity: 0, y: -6, transition: { duration: 0.18 } },
};

export function ExperienceThread({
  experience,
  depth = 0,
  isLast,
}: ExperienceThreadProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const hasReplies = experience.replies.length > 0;

  const getLevelLabel = () => {
    switch (experience.level) {
      case "company":
        return "Company";
      case "position":
        return "Position";
      case "detail":
        return "Details";
      default:
        return "";
    }
  };

  return (
    <motion.div className="relative">
      <div
        className="flex rounded-lg bg-background"
        style={{ marginLeft: depth > 0 ? "4px" : "0" }}
      >
        <div className="flex flex-col items-center gap-1 pt-1 relative">
          {hasReplies && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-background rounded transition-colors z-40"
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}

          {hasReplies && isExpanded && (
            <motion.div
              layout={false}
              className="absolute left-0 top-8 w-[1px] border border-dashed z-10 h-[77%] !transition-none !duration-0"
              style={{ marginLeft: "8px" }}
            />
          )}

          {depth > 0 && (
            <motion.div
              layout={false}
              className="absolute left-0 top-0 -translate-x-[27px] z-30 w-full !transition-none !duration-0"
              style={{ marginLeft: "8px" }}
            >
              <Line />
            </motion.div>
          )}
        </div>

        <div className="flex-1 min-w-0 relative">
          {isLast && (
            <motion.div
              layout={false}
              className={`absolute left-0 top-0 w-[4px] bg-background -translate-x-[28px] z-20 !transition-none !duration-0 ${
                isExpanded ? "h-full" : "h-6"
              }`}
              style={{ marginLeft: "8px" }}
            />
          )}

          {isLast && depth === 1 && (
            <motion.div
              layout={false}
              className="absolute left-0 top-0 w-[4px] bg-background -translate-x-[53px] z-20 h-full !transition-none !duration-0"
              style={{ marginLeft: "8px" }}
            />
          )}

          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-semibold px-2 py-1 bg-background rounded text-muted-foreground">
              {getLevelLabel()}
              {isLast && <div>last one</div>}
            </span>
          </div>

          <h3 className="text-lg font-bold text-foreground mb-1">
            {experience.role}
          </h3>

          <p className="text-sm text-muted-foreground mb-2">
            {experience.company}
          </p>

          <p className="text-sm text-muted-foreground mb-3">
            {experience.startDate} — {experience.endDate}
          </p>

          <p className="text-foreground leading-relaxed text-pretty mb-4">
            {experience.details}
          </p>

          <AnimatePresence initial={false}>
            {isExpanded && hasReplies && (
              <motion.div
                key="children"
                layout
                variants={containerVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="mt-4 space-y-4"
              >
                {experience.replies.map((reply, i) => {
                  const last = i === experience.replies.length - 1;
                  return (
                    <motion.div key={reply.id} variants={childVariants}>
                      <ExperienceThread
                        experience={reply}
                        depth={depth + 1}
                        isLast={last}
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </motion.div>
  );
}

{
  /* 

  //there are three section

//company 
active indicator 
company logo,name,start end year,no of positions

  
  //position
  active indicator
  role , start and end year


//details
responsibilities and details of role
tech stack
  
  */
}