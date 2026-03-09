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
            <div className="relative py-20 px-4 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="relative z-10">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>
                        Student Gallery
                    </span>
                    <h1 className="font-cormorant text-4xl sm:text-7xl lg:text-8xl font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                        Artworks That <em className="text-white/50 not-italic italic">Inspire</em>
                    </h1>
                    <p className="text-white/60 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
                        A showcase of incredible artworks created by our talented students.
                        Be inspired and join the community of creators.
                    </p>
                </div>
            </div>

            {/* Category Filters */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
                <div className="flex flex-wrap gap-2 justify-center">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setSelected(cat)}
                            className={`px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 ${selected === cat
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
                    <GalleryGrid images={filtered} />
                )}
            </div>
        </div>
    );
}
