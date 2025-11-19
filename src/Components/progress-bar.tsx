import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";

interface TaskProgressProps {
  total: number;
  completed: number;
  color?: string;
  parentHoverKey?: number; // <-- added (card hover trigger)
}

interface SegmentProps {
  isFull: boolean;
  isPartial: boolean;
  fillPercentage: number;
  borderColor: string;
  fillColor: string;
  replayKey: number;
}

const Segment = React.memo(function Segment({
  isFull,
  isPartial,
  fillPercentage,
  borderColor,
  fillColor,
  replayKey,
}: SegmentProps) {
  const segmentStyle = useMemo(() => ({ borderColor }), [borderColor]);

  const targetWidth =
    isFull ? "100%" : isPartial ? `${fillPercentage}%` : "0%";

  return (
    <div
      className="h-2 flex-1 relative skew-x-30 border overflow-hidden"
      style={segmentStyle}
    >
      {(isFull || isPartial) && (
        <motion.div
          key={replayKey} // <-- forces animation to restart
          initial={{ width: 0 }}
          animate={{ width: targetWidth }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 origin-left"
          style={{ backgroundColor: fillColor }}
        />
      )}
    </div>
  );
});

export const Progress = React.memo(function Progress({
  total,
  completed,
  color = "#00ffff40",
  parentHoverKey = 0,
}: TaskProgressProps) {
  const [selfHoverReplay, setSelfHoverReplay] = useState(0);

  const replayKey = parentHoverKey + selfHoverReplay;

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
          replayKey={replayKey}
          isFull={isFull}
          isPartial={isPartial}
          fillPercentage={fillPercentage}
          borderColor={borderColor}
          fillColor={fillColor}
        />
      );
    });
  }, [total, completed, borderColor, fillColor, replayKey]);

  return (
    <div
      className="flex gap-1 w-full"
      onMouseEnter={() => setSelfHoverReplay((n) => n + 1)} // self hover replay
    >
      {segments}
    </div>
  );
});
