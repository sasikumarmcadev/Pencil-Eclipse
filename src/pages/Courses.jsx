import { useState } from "react";
import CourseCard from "../components/CourseCard";
import { courses } from "../data/courses";

const CATEGORIES = ["All", "Pencil Art", "Watercolor", "Digital Art", "Charcoal", "Decorative", "Oil Painting"];
const LEVELS = ["All Levels", "Beginner", "Intermediate", "Advanced"];

export default function Courses() {
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedLevel, setSelectedLevel] = useState("All Levels");
    const [searchQuery, setSearchQuery] = useState("");

    const filtered = courses.filter((c) => {
        const matchCategory = selectedCategory === "All" || c.category === selectedCategory;
        const matchLevel = selectedLevel === "All Levels" || c.level === selectedLevel;
        const matchSearch =
            c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.instructor.toLowerCase().includes(searchQuery.toLowerCase()) ||
            c.category.toLowerCase().includes(searchQuery.toLowerCase());
        return matchCategory && matchLevel && matchSearch;
    });

    return (
        <div className="min-h-screen bg-[#121212] pt-20">
            {/* Page Header */}
            <div className="relative py-12 sm:py-20 px-4 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="max-w-7xl mx-auto relative text-center">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                        All Courses
                    </span>
                    <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-semibold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight">
                        Explore Our <em className="text-white/60 not-italic italic">Art Courses</em>
                    </h1>
                    <p className="text-white/50 text-sm sm:text-base max-w-2xl mx-auto font-light leading-relaxed px-2">
                        Discover world-class art education taught by our master artist. Choose your path and start creating today.
                    </p>
                </div>
            </div>

            {/* Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
                <div className="bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 rounded-2xl p-5 sm:p-8 space-y-5 sm:space-y-6">
                    {/* Search */}
                    <div className="relative">
                        <svg
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                        <input
                            type="text"
                            placeholder="Search courses..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full bg-black/40 border border-white/10 rounded-2xl pl-11 pr-4 py-3.5 sm:py-4 text-white placeholder-white/40 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-colors text-sm font-medium tracking-wide shadow-inner"
                        />
                    </div>

                    {/* Category filters */}
                    <div className="relative -mx-1 sm:mx-0">
                        {/* Horizontal scroll fade indicators */}
                        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-transparent to-transparent pointer-events-none z-10 hidden sm:block" />

                        <div className="flex overflow-x-auto sm:flex-wrap gap-2 sm:gap-2.5 pb-3 sm:pb-0 no-scrollbar items-center">
                            {CATEGORIES.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setSelectedCategory(cat)}
                                    className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-[11px] sm:text-sm font-bold tracking-wide transition-all duration-200 whitespace-nowrap ${selectedCategory === cat
                                        ? "bg-white text-black shadow-sm scale-[1.02]"
                                        : "bg-white/5 border border-white/10 text-white/50 hover:border-white/30 hover:text-white hover:bg-white/10"
                                        }`}
                                >
                                    {cat}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Level filters */}
                    <div className="relative border-t border-white/5 sm:border-white/10 pt-5 mt-4 sm:mt-5 -mx-1 sm:mx-0">
                        <div className="flex overflow-x-auto sm:flex-wrap gap-2 sm:gap-2.5 pb-2 sm:pb-0 no-scrollbar items-center">
                            {LEVELS.map((level) => (
                                <button
                                    key={level}
                                    onClick={() => setSelectedLevel(level)}
                                    className={`px-4 py-1.5 sm:py-2 rounded-lg text-[10px] sm:text-sm font-medium tracking-wide transition-all duration-200 whitespace-nowrap ${selectedLevel === level
                                        ? "bg-white/20 border border-white/30 text-white"
                                        : "bg-transparent border border-white/5 text-white/40 hover:border-white/20 hover:text-white/80"
                                        }`}
                                >
                                    {level}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Results */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="flex items-center justify-between mb-6 sm:mb-8 pb-4 border-b border-white/10">
                    <p className="text-white/50 text-xs sm:text-sm font-medium">
                        Showing{" "}
                        <span className="text-white font-bold">{filtered.length}</span>{" "}
                        courses
                    </p>
                </div>

                {filtered.length === 0 ? (
                    <div className="text-center py-20 sm:py-24">
                        <div className="flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl sm:rounded-[1.5rem] bg-white/5 border border-white/10 mx-auto mb-6 shadow-inner">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><path d="M21 21l-4.35-4.35" /></svg>
                        </div>
                        <h3 className="text-white font-semibold text-lg sm:text-xl mb-2">No courses found</h3>
                        <p className="text-white/40 text-sm">Try adjusting your filters or search term.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filtered.map((course) => (
                            <CourseCard key={course.id} course={course} variant="featured" />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
