export default function GalleryGrid({ images }) {
    return (
        <div className="columns-2 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img) => (
                <div
                    key={img.id}
                    className="group relative overflow-hidden rounded-2xl break-inside-avoid cursor-pointer border border-white/5 hover:border-white/20 shadow-lg hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.7)] transition-all duration-500"
                >
                    <img
                        src={img.src}
                        alt={img.title}
                        className="w-full object-cover group-hover:scale-105 transition-transform duration-1000 will-change-transform"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/90 via-[#121212]/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-10">
                        <span className="text-white text-[10px] font-bold uppercase tracking-widest mb-2 block bg-white/10 backdrop-blur-md w-fit px-2.5 py-1 rounded-full border border-white/10">
                            {img.category}
                        </span>
                        <h3 className="text-white font-bold text-lg mb-0.5 tracking-tight">{img.title}</h3>
                        <p className="text-white/60 text-sm font-medium">by {img.artist}</p>
                    </div>

                    {/* Corner accent */}
                    <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/40 border border-white/10 backdrop-blur-md flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                        <svg
                            className="w-4 h-4 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2.5}
                                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                            />
                        </svg>
                    </div>
                </div>
            ))}
        </div>
    );
}
