import { useState } from "react";
import GalleryGrid from "../components/GalleryGrid";
import { galleryImages } from "../data/courses";

const CATEGORIES = ["All", "Pencil Art", "Watercolor", "Digital", "Charcoal", "Mandala", "Oil Painting", "Abstract"];

export default function Gallery() {
    const [selected, setSelected] = useState("All");

    const filtered =
        selected === "All"
            ? galleryImages
            : galleryImages.filter((img) => img.category === selected);

    return (
        <div className="min-h-screen bg-[#121212] pt-20">
            {/* Header */}
            <div className="relative py-12 sm:py-20 px-4 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="relative z-10 fade-in-up">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[9px] sm:text-[10px] font-bold tracking-widest uppercase mb-4 sm:mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3 s-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        Student Gallery
                    </span>
                    <h1 className="font-cormorant text-4xl sm:text-7xl lg:text-8xl font-semibold text-white mb-4 sm:mb-6 leading-[1.1] sm:leading-[1.05] tracking-tight">
                        Artworks That <em className="text-white/50 not-italic italic">Inspire</em>
                    </h1>
                    <p className="text-white/60 text-base sm:text-lg max-w-2xl mx-auto font-medium leading-relaxed px-2">
                        A showcase of incredible artworks created by our talented students.
                        Be inspired and join the community of creators.
                    </p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12 relative">
                {/* Horizontal scroll fade indicators */}
                <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#121212] to-transparent z-10 pointer-events-none md:hidden" />
                <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-[#121212] to-transparent z-10 pointer-events-none md:hidden" />
                
                <div className="flex overflow-x-auto sm:flex-wrap gap-2 sm:gap-2.5 pb-4 sm:pb-0 no-scrollbar justify-start sm:justify-center items-center -mx-4 px-4 sm:mx-0 sm:px-0">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`px-5 sm:px-6 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 whitespace-nowrap ${selected === cat
                                ? "bg-white text-black shadow-[0_4px_15px_rgba(255,255,255,0.2)]"
                                : "bg-white/5 border border-white/10 text-white/70 hover:border-white/30 hover:bg-white/10 hover:text-white"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </div>

            {/* Gallery */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                {filtered.length === 0 ? (
                    <div className="text-center py-24">
                        <div className="flex items-center justify-center w-20 h-20 rounded-[1.5rem] bg-white/5 border border-white/10 mb-6 mx-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white/30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        </div>
                        <p className="text-white/50 font-medium">No artworks in this category yet.</p>
                    </div>
                ) : (
                    <div className="fade-in-up" style={{ animationDelay: '200ms' }}>
                        <GalleryGrid images={filtered} />
                    </div>
                )}
            </div>
        </div>
    );
}
