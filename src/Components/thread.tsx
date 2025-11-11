import { useState } from "react";
import { ChevronDown, ChevronRight, Divide, Plus } from "lucide-react";
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
  isLast?: Boolean;
}

export function ExperienceThread({
  experience,
  depth = 0,
  isLast,
}: ExperienceThreadProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  const hasReplies = experience.replies.length > 0;
  console.log("checking for the breakthough", experience.replies);
  const maxDepth = 2;

  const canAddItems = experience.level !== "detail";

  const getLevelStyles = () => {
    switch (experience.level) {
      case "company":
        return "bg-background";
      case "position":
        return "bg-background";
      case "detail":
        return "bg-background";
      default:
        return "";
    }
  };

  const getLevelLabel = () => {
    switch (experience.level) {
      case "company":
        return "Company";
      case "position":
        return "Position";
      case "detail":
        return "Achievement";
      default:
        return "";
    }
  };

  return (
    <div className="relative">
      <div
        className={`flex rounded-lg ${getLevelStyles()}`}
        style={{ marginLeft: depth > 0 ? "4px" : "0" }}
      >
        <div className="flex flex-col items-center gap-1 pt-1 relative">
          {hasReplies && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="p-1 hover:bg-background rounded transition-colors z-40"
              aria-label={isExpanded ? "Collapse" : "Expand"}
            >
              {isExpanded ? (
                <ChevronDown className="w-4 h-4" />
              ) : (
                <ChevronRight className="w-4 h-4" />
              )}
            </button>
          )}
          {hasReplies && isExpanded && (
            <div
              className={`absolute left-0 top-8 w-[2px] border border-dashed z-10 ${
                isExpanded ? "h-[90%]" : "h-6"
              } `}
              style={{ marginLeft: "8px" }}
            />
          )}

          {depth > 0 && (
            <div
              className={`absolute left-0 top-0 -translate-x-[27px] z-30 ${
                isExpanded ? "w-full" : "w-full"
              }`}
              style={{ marginLeft: "8px" }}
            >
              <Line />
            </div>
          )}
        </div>

        <div className="flex-1 min-w-0 relative">
          {isLast && (
            <div
              className={`absolute left-0 top-0 w-[4px] bg-background -translate-x-[28px] z-20 ${
                isExpanded ? "h-full" : "h-6"
              }`}
              style={{ marginLeft: "8px" }}
            />
          )}

          {isLast && depth === 1 && (
            <div
              className="absolute left-0 top-0 w-[4px] bg-background -translate-x-[53px] z-20 h-full"
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

          {isExpanded && hasReplies && (
            <div className="mt-4 space-y-4">
              {experience.replies.map((reply, index) => {
                const isLast = index === experience.replies.length - 1;
                console.log("getting values", reply.id, isLast, depth);
                return (
                  <ExperienceThread
                    key={reply.id}
                    experience={reply}
                    depth={depth + 1}
                    isLast={isLast}
                  />
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}