import { useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function GalleryGrid({ images }) {
    const [selectedImage, setSelectedImage] = useState(null);

    // Prevent body scroll when lightbox is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => { document.body.style.overflow = 'unset'; };
    }, [selectedImage]);

    return (
        <>
            <div className="columns-1 min-[400px]:columns-2 lg:columns-3 gap-4 sm:gap-6 space-y-4 sm:space-y-6 px-0">
                {images.map((img) => (
                    <div
                        key={img.id}
                        onClick={() => setSelectedImage(img)}
                        className="group relative overflow-hidden rounded-2xl sm:rounded-3xl break-inside-avoid cursor-pointer bg-white/[0.03] border border-white/10 hover:border-white/30 shadow-xl sm:shadow-2xl hover:shadow-black/50 transition-all duration-700 hover:-translate-y-1"
                    >
                        <img
                            src={img.src}
                            alt={img.title}
                            className="w-full h-auto block group-hover:scale-110 transition-transform duration-1000 ease-out will-change-transform"
                        />

                        {/* Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Content Layer */}
                        <div className="absolute inset-0 p-4 sm:p-8 flex flex-col justify-end opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0">
                            <h3 className="text-white font-bold text-base sm:text-2xl mb-1 tracking-tight md:group-hover:translate-x-1 transition-transform duration-500 delay-75">
                                {img.title}
                            </h3>
                        </div>

                        {/* Eye Icon - Visible on desktop hover and mobile always */}
                        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 flex items-center justify-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 rotate-12 group-hover:rotate-0 scale-90 group-hover:scale-100">
                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                        </div>
                    </div>
                ))}
            </div>

            {/* Lightbox Modal - Rendered via Portal to avoid stacking context issues */}
            {selectedImage && createPortal(
                <div 
                    className="fixed inset-0 z-[1000] flex items-center justify-center p-4 sm:p-6 md:p-10 pointer-events-auto"
                    onClick={() => setSelectedImage(null)}
                >
                    {/* Backdrop - Pure Fixed */}
                    <div className="absolute inset-0 bg-[#0a0a0a]/98 backdrop-blur-2xl" />
                    
                    {/* Close Button - Optimized for touch and click */}
                    <button 
                        className="absolute top-4 right-4 sm:top-8 sm:right-8 z-[1100] w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center hover:bg-white/20 hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl"
                        onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                        aria-label="Close Gallery Image"
                    >
                        <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>

                    {/* Image Hub - Perfectly centered & fits everything */}
                    <div 
                        className="relative z-[1050] w-full max-w-5xl h-full flex flex-col items-center justify-center pointer-events-none"
                    >
                        <div 
                            className="relative flex flex-col items-center justify-center w-full h-full p-2 pointer-events-none animate-in zoom-in-95 duration-500 ease-out"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img 
                                src={selectedImage.src} 
                                alt={selectedImage.title}
                                className="max-w-full max-h-[70vh] sm:max-h-[75vh] md:max-h-[80vh] w-auto h-auto rounded-xl sm:rounded-2xl shadow-[0_0_80px_rgba(0,0,0,0.8)] border border-white/10 object-contain pointer-events-auto"
                            />
                            
                            {/* Metadata - Compact and non-breaking */}
                            <div className="mt-5 sm:mt-8 text-center px-4 pointer-events-auto">
                                <h2 className="text-white text-xl sm:text-2xl md:text-3xl font-bold tracking-tight mb-1 sm:mb-2 line-clamp-1">
                                    {selectedImage.title}
                                </h2>
                                <div className="inline-flex items-center gap-2">
                                    <div className="w-4 h-px bg-white/30" />
                                    <p className="text-white/50 text-[10px] sm:text-xs font-black uppercase tracking-[0.2em]">
                                        {selectedImage.category}
                                    </p>
                                    <div className="w-4 h-px bg-white/30" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>,
                document.body
            )}
        </>
    );
}
