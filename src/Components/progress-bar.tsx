import { cn } from "../lib/utils";

interface TaskProgressProps { total: number; completed: number; }

export const Progress: React.FC<TaskProgressProps> = ({ total, completed }) => {
  return (
    <div className="flex gap-1 w-full">
      {Array.from({ length: total }).map((_, idx) => {
        const isFull = idx + 1 <= Math.floor(completed);
        const isPartial =
          idx === Math.floor(completed) && completed % 1 !== 0;

        const fillPercentage = isPartial
          ? (completed % 1) * 100
          : 0;

        return (
          <div
            key={idx}
            className={cn(
              "h-2 flex-1 relative border border-[#00ffff40] skew-x-30"
            )}
          >
            {isFull && (
              <div className="absolute inset-0 bg-teal-500 transition-all duration-300" />
            )}

            {isPartial && (
              <div
                className="absolute inset-y-0 left-0 bg-teal-500 transition-all duration-300"
                style={{ width: `${fillPercentage}%` }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};
