import { useState } from "react"
import { ChevronDown, ChevronRight, Plus } from "lucide-react"

export interface Experience {
  id: string
  company: string
  role: string
  details: string
  startDate: string
  endDate: string
  level: "company" | "position" | "detail"
  replies: Experience[]
}

interface ExperienceThreadProps {
  experience: Experience
  depth?: number
  onAdd: (parentId: string, content: string) => void
}

export function ExperienceThread({ experience, depth = 0, onAdd }: ExperienceThreadProps) {
  const [isExpanded, setIsExpanded] = useState(true)

  const hasReplies = experience.replies.length > 0
  const maxDepth = 2

  const canAddItems = experience.level !== "detail"

  const getLevelStyles = () => {
    switch (experience.level) {
      case "company":
        return "bg-background"
      case "position":
        return "bg-background"
      case "detail":
        return "bg-background"
      default:
        return ""
    }
  }

  const getLevelLabel = () => {
    switch (experience.level) {
      case "company":
        return "Company"
      case "position":
        return "Position"
      case "detail":
        return "Achievement"
      default:
        return ""
    }
  }

  return (
    <div className={`flex gap-3 p-4 rounded-lg ${getLevelStyles()}`} style={{ marginLeft: depth > 0 ? "16px" : "0" }}>
      {/* Left sidebar with collapse */}
      <div className="flex flex-col items-center gap-1 pt-1">
        {hasReplies && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 hover:bg-background rounded transition-colors"
            aria-label={isExpanded ? "Collapse" : "Expand"}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
          </button>
        )}
      </div>

      {/* Main content */}
      <div className="flex-1 min-w-0">
        {/* Header with level badge */}
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs font-semibold px-2 py-1 bg-background rounded text-muted-foreground">
            {getLevelLabel()}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-1">{experience.role}</h3>
        <p className="text-sm text-muted-foreground mb-2">{experience.company}</p>

        {/* Dates */}
        <p className="text-sm text-muted-foreground mb-3">
          {experience.startDate} — {experience.endDate}
        </p>

        {/* Details/Description */}
        <p className="text-foreground leading-relaxed text-pretty mb-4">{experience.details}</p>

        {/* Add button */}
        {canAddItems && (
          <button
            onClick={() => onAdd(experience.id, "New entry")}
            className="text-muted-foreground hover:text-foreground"
          >
            <Plus className="w-4 h-4 mr-2" />
            {experience.level === "company" ? "Add Position" : "Add Detail"}
          </button>
        )}

        {/* Nested items */}
        {isExpanded && hasReplies && (
          <div className="mt-4 space-y-4">
            {experience.replies.map((reply) => (
              <ExperienceThread key={reply.id} experience={reply} depth={depth + 1} onAdd={onAdd} />
            ))}
          </div>
        )}

        {/* Collapse indicator */}
        {!isExpanded && hasReplies && (
          <div className="mt-3 text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors">
            ↳ {experience.replies.length} hidden {experience.level === "company" ? "position(s)" : "achievement(s)"}
          </div>
        )}
      </div>
    </div>
  )
}
