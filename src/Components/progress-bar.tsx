import React, { useMemo } from "react";
import { cn } from "../lib/utils";

interface TaskProgressProps {
  total: number;
  completed: number;
  color?: string;
}

interface SegmentProps {
  isFull: boolean;
  isPartial: boolean;
  fillPercentage: number;
  borderColor: string;
  fillColor: string;
}

const Segment = React.memo(function Segment({
  isFull,
  isPartial,
  fillPercentage,
  borderColor,
  fillColor,
}: SegmentProps) {
  const segmentStyle = useMemo(() => ({ borderColor }), [borderColor]);
  const p: string = fillPercentage + "%";
  return (
    <div
      className={cn("h-2 flex-1 relative skew-x-30 border overflow-hidden")}
      style={segmentStyle}
    >
      {(isFull || isPartial) && (
        <div
          className={cn(
            "absolute inset-y-0 left-0 transition-all duration-500 origin-left",
            "w-0",
            isFull && "group-hover:w-full",
            isPartial && `group-hover:w-[${p}]`
          )}
          style={{
            backgroundColor: fillColor,
            // width: isPartial ? `${fillPercentage}%` : undefined,
          }}
        />
      )}
    </div>
  );
});

export const Progress = React.memo(function Progress({
  total,
  completed,
  color = "#00ffff40",
}: TaskProgressProps) {
  const borderColor = useMemo(() => {
    return color.startsWith("#") && color.length === 7 ? `${color}40` : color;
  }, [color]);

  const fillColor = useMemo(() => color, [color]);

  const segments = useMemo(() => {
    const whole = Math.floor(completed);
    const decimal = completed % 1;

    return Array.from({ length: total }).map((_, idx) => {
      const isFull = idx + 1 <= whole;
      const isPartial = idx === whole && decimal !== 0;
      const fillPercentage = isPartial ? decimal * 100 : 0;
      return (
        <Segment
          key={idx}
          isFull={isFull}
          isPartial={isPartial}
          fillPercentage={fillPercentage}
          borderColor={borderColor}
          fillColor={fillColor}
        />
      );
    });
  }, [total, completed, borderColor, fillColor]);

  return <div className="flex gap-1 w-full group">{segments}</div>;
});