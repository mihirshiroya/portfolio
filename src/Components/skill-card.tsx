import React from 'react'
import { DottedText } from './Ui/dotted-text'
import { Progress } from './progress-bar'
import { FaReact } from 'react-icons/fa'
const SkillCard = () => {
    return (
        <div className="flex items-center justify-center overflow-hidden py-4">
            <div
                className="relative w-60 h-40 bg-background border border-dashed border-ring/50 flex flex-col items-start justify-center gap-3 backdrop-blur-md px-4 overflow-hidden"
            >

                {/* Bottom Left */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-0 bottom-0 -translate-x-[50%] translate-y-[50%] z-50 size-18  stroke-primary/80"
                >
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
                </svg>

                {/* Bottom Right */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute right-0 bottom-0 translate-x-[50%] translate-y-[50%] z-50 size-18 stroke-primary/80"
                >
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
                </svg>

                {/* Top Right */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute right-0 top-0 translate-x-[50%] -translate-y-[50%] z-50 size-18 stroke-primary/80"
                >
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
                </svg>

                {/* Top Left */}
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="absolute left-0 top-0 -translate-x-[50%] -translate-y-[50%] z-50 size-18 stroke-primary/80"
                >
                    <line x1="12" y1="5" x2="12" y2="19" strokeWidth="1" />
                    <line x1="5" y1="12" x2="19" y2="12" strokeWidth="1" />
                </svg>

                <div className="flex items-center justify-start px-2 w-full">
                    <FaReact className="text-[#61dafb] text-5xl mr-4" />
                    <DottedText text="REACT JS" dotSize={2} dotGap={0.5} />
                </div>

                <div className="h-2 mt-2 w-full">
                    <Progress total={10} completed={7.7} />
                </div>

                <div className="h-2 mt-2 w-full flex items-center justify-between">
                    <DottedText text="PROGRESS" dotSize={1} dotGap={0.5} />
                    <DottedText text="80 %" dotSize={1} dotGap={0.5} />
                </div>
            </div>
        </div>

    )
}

export default SkillCard