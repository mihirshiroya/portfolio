import React from "react";
import { DottedText } from "./Ui/dotted-text";
import { Progress } from "./progress-bar";

interface SkillCardProps {
  title: string;
  icon: React.ReactNode;
  color?: string;
  progress: number;
}

const Corner = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    className={`absolute size-18 stroke-secondary z-50 ${className}`}
  >
    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
  </svg>
);

export const SkillCard: React.FC<SkillCardProps> = ({
  title,
  icon,
  color = "#61dafb",
  progress,
}) => {
  const completedValue = (progress / 100) * 10;

  return (
    <div className="relative w-full md:w-[230px] h-40 bg-background border border-dashed border-ring/50 flex flex-col items-start justify-center gap-3 backdrop-blur-md px-4 overflow-hidden">
      <Corner className="left-0 bottom-0 -translate-x-[50%] translate-y-[50%]" />
      <Corner className="right-0 bottom-0 translate-x-[50%] translate-y-[50%]" />
      <Corner className="right-0 top-0 translate-x-[50%] -translate-y-[50%]" />
      <Corner className="left-0 top-0 -translate-x-[50%] -translate-y-[50%]" />

       <div className="text-5xl scale-150 absolute top-0 right-0 opacity-50" style={{ color }}>
          {icon}
        </div>
      {/* Icon + Title */}
      <div className="flex items-center justify-between w-full mb-3">
        <DottedText text={title} dotSize={1.5} dotGap={0.7} />
        {/* <div className="text-5xl" style={{ color }}>
          {icon}
        </div> */}
      </div>

      {/* Progress Bar */}
      <div className="h-2 mt-2 w-full">
        <Progress total={10} completed={completedValue} color={color} />
      </div>

      {/* Progress Text */}
      <div className="h-2 mt-2 w-full flex items-center justify-between mb-3">
        <DottedText text="PROGRESS" dotSize={1} dotGap={0.5} />
        <DottedText text={`${progress} %`} dotSize={1} dotGap={0.5} />
      </div>
    </div>
  );
};