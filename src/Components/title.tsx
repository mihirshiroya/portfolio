import React from "react";

interface SectionProps {
    children: React.ReactNode;
    title:string
}

const Title: React.FC<SectionProps> = ({ children,title }) => {
    return (
        <div className="relative grid grid-cols-[auto_1px_minmax(0,theme(maxWidth.3xl))_1px_auto] grid-rows-[auto_0px_auto_0px_auto] bg-background">
            <div className="col-start-3 col-end-4 row-start-3 flex flex-col justify-center relative overflow-x-clip lg:overflow-x-visible">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute left-0 bottom-0 -translate-x-[48%] translate-y-[23.5px] z-50 size-12 stroke-ring"
                >
                    <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        strokeWidth="0.5"
                    />
                </svg>
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute right-0 bottom-0 translate-x-[48%] translate-y-[23.5px] z-50 size-12 stroke-ring"
                >
                    <line
                        x1="12"
                        y1="5"
                        x2="12"
                        y2="19"
                        strokeWidth="0.5"
                    />
                    <line
                        x1="5"
                        y1="12"
                        x2="19"
                        y2="12"
                        strokeWidth="0.5"
                    />
                </svg>
                <span className="flex items-center justify-start text-2xl md:text-3xl px-4 py-4 font-bold playfair">{title}</span>
            </div>

            <div
                className="relative -right-px col-start-2 row-span-full 
  border-x border-dashed border-x-[var(--color-ring)]"
            />

            <div
                className="relative -left-px col-start-4 row-span-full 
  border-x border-dashed border-x-[var(--color-ring)]"
            />

            {/* <div className="relative -bottom-px col-span-full col-start-1 row-start-2 h-px bg-[var(--color-primary)]" /> */}
            <div
                className="relative -top-px col-span-full col-start-1 row-start-4 h-px 
  border-t border-dashed border-t-[var(--color-ring)]"
            />

        </div>
    );
};

export default Title;
