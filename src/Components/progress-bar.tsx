import { cn } from "../lib/utils";

interface TaskProgressProps {
  total: number;
  completed: number;
  color?: string; 
}

export const Progress: React.FC<TaskProgressProps> = ({
  total,
  completed,
  color = "#00ffff40",
}) => {

  const borderColor =
    color.startsWith("#") && color.length === 7 ? `${color}40` : color;

  const fillColor = color;

  return (
    <div className="flex gap-1 w-full">
      {Array.from({ length: total }).map((_, idx) => {
        const isFull = idx + 1 <= Math.floor(completed);
        const isPartial =
          idx === Math.floor(completed) && completed % 1 !== 0;

        const fillPercentage = isPartial ? (completed % 1) * 100 : 0;

        return (
          <div
            key={idx}
            className={cn(
              "h-2 flex-1 relative skew-x-30 border"
            )}
            style={{
              borderColor: borderColor,
            }}
          >
            {isFull && (
              <div
                className="absolute inset-0 transition-all duration-300"
                style={{ backgroundColor: fillColor }}
              />
            )}

            {isPartial && (
              <div
                className="absolute inset-y-0 left-0 transition-all duration-300"
                style={{
                  width: `${fillPercentage}%`,
                  backgroundColor: fillColor,
                }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
