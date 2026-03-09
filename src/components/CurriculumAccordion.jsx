import { useState } from "react";

export default function CurriculumAccordion({ curriculum }) {
    const [openIndex, setOpenIndex] = useState(0);

    return (
        <div className="space-y-3">
            {curriculum.map((module, index) => (
                <div
                    key={index}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                        ? "border-white/20 bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] shadow-xl"
                        : "border-white/10 bg-[#1c1c1e]/20 backdrop-blur-[40px] saturate-[180%] hover:bg-[#1c1c1e]/40 hover:border-white/20"
                        }`}
                >
                    {/* Header */}
                    <button
                        onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                        className="w-full flex items-center justify-between p-5 text-left group"
                    >
                        <div className="flex items-center gap-4">
                            <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 ${openIndex === index
                                    ? "bg-white text-black shadow-sm"
                                    : "bg-white/5 border border-white/10 text-white/50 group-hover:bg-white/10"
                                    }`}
                            >
                                {index + 1}
                            </div>
                            <span
                                className={`font-semibold tracking-wide transition-colors duration-300 ${openIndex === index ? "text-white" : "text-white/70"
                                    }`}
                            >
                                {module.module}
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-white/40 text-sm hidden sm:inline">
                                {module.lessons.length} lessons
                            </span>
                            <div
                                className={`w-6 h-6 rounded-full border flex items-center justify-center transition-all duration-300 ${openIndex === index
                                    ? "border-white/20 bg-white/10 rotate-180"
                                    : "border-white/10 bg-transparent group-hover:border-white/20"
                                    }`}
                            >
                                <svg
                                    className={`w-3 h-3 transition-colors duration-300 ${openIndex === index ? "text-white" : "text-white/40 group-hover:text-white/70"
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </button>

                    {/* Content */}
                    <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? "max-h-96" : "max-h-0"
                            }`}
                    >
                        <div className="pb-5 px-5 ml-12 space-y-2">
                            {module.lessons.map((lesson, lIdx) => (
                                <div
                                    key={lIdx}
                                    className="flex items-center gap-3 py-2 px-3 rounded-xl hover:bg-white/5 transition-colors duration-200 group/lesson cursor-pointer"
                                >
                                    <div className="w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover/lesson:border-white/30 group-hover/lesson:bg-white/10 transition-all duration-200">
                                        <svg
                                            className="w-3 h-3 text-white/40 group-hover/lesson:text-white transition-colors duration-200"
                                            fill="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                    <span className="text-white/50 text-sm font-medium tracking-wide group-hover/lesson:text-white/90 transition-colors duration-200">
                                        {lesson}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
