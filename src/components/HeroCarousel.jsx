import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const SLIDES = [
    {
        id: 1,
        image: "https://picsum.photos/seed/slide1/1400/800",
        title: "Master Hyper",
        titleHighlight: "Realistic Art",
        subtitle: "Learn to create stunning pencil drawings that look like photographs — from beginner to professional.",
        cta: "Explore Now",
        ctaLink: "/courses/hyper-realism",
    },
    {
        id: 2,
        image: "https://picsum.photos/seed/slide2/1400/800",
        title: "Watercolor",
        titleHighlight: "Landscape Mastery",
        subtitle: "Paint breathtaking scenes with watercolor. Learn wet-on-wet, glazing, and atmospheric perspective.",
        cta: "Start Painting",
        ctaLink: "/courses/watercolor-landscapes",
    },
    {
        id: 3,
        image: "https://picsum.photos/seed/slide3/1400/800",
        title: "Digital Art",
        titleHighlight: "From Scratch",
        subtitle: "Begin your digital art journey with Procreate. Create stunning illustrations and characters.",
        cta: "Get Started",
        ctaLink: "/courses/digital-illustration",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const goTo = useCallback(
        (idx) => {
            if (isTransitioning) return;
            setIsTransitioning(true);
            setTimeout(() => {
                setCurrent(idx);
                setIsTransitioning(false);
            }, 300);
        },
        [isTransitioning]
    );

    const next = useCallback(() => {
        goTo((current + 1) % SLIDES.length);
    }, [current, goTo]);

    const prev = useCallback(() => {
        goTo((current - 1 + SLIDES.length) % SLIDES.length);
    }, [current, goTo]);

    useEffect(() => {
        const timer = setInterval(next, 5000);
        return () => clearInterval(timer);
    }, [next]);

    const slide = SLIDES[current];

    return (
        <div className="relative w-full h-screen min-h-[600px] md:min-h-[700px] overflow-hidden">
            {/* Background images */}
            {SLIDES.map((s, i) => (
                <div
                    key={s.id}
                    className={`absolute inset-0 transition-opacity duration-1000 ${i === current ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover object-center"
                    />
                    {/* Gradient overlay - Very subtle on mobile since the frosted card handles contrast */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-transparent to-transparent md:bg-gradient-to-r md:from-[#121212]/95 md:via-[#121212]/70 md:to-transparent" />
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 h-full flex flex-col justify-end md:justify-center pb-20 md:pb-0">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div
                        className={`max-w-2xl transition-all duration-700 w-full flex flex-col items-center md:items-start text-center md:text-left ${isTransitioning
                            ? "opacity-0 translate-y-8 md:translate-y-12"
                            : "opacity-100 translate-y-0"
                            }`}
                    >



                        {/* Title */}
                        <h1 className="font-cormorant font-bold text-white leading-[1.1] mb-4 md:mb-6 text-4xl sm:text-5xl md:text-6xl lg:text-[5rem] xl:text-[5.5rem] tracking-tight drop-shadow-2xl">
                            {slide.title}{" "}
                            <em className="text-white/60 not-italic italic">{slide.titleHighlight}</em>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-white/70 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-10 max-w-xl font-medium drop-shadow-lg">
                            {slide.subtitle}
                        </p>

                        {/* CTAs */}
                        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 w-full sm:w-auto mt-6 md:mt-0">
                            <Link
                                to={slide.ctaLink}
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-white text-black font-bold text-xs sm:text-sm md:text-base tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.2)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.4)] hover:bg-gray-100 hover:-translate-y-0.5 transition-all duration-300 w-full sm:w-auto"
                            >
                                {slide.cta}
                                <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                </svg>
                            </Link>
                            <Link
                                to="/courses"
                                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 md:px-8 md:py-4 rounded-full bg-black/20 md:bg-white/5 border border-white/20 text-white font-bold text-sm md:text-base tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full sm:w-auto"
                            >
                                View All Courses
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Navigation arrows (Hidden on mobile) */}
            <button
                onClick={prev}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hidden md:flex items-center justify-center text-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button
                onClick={next}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hidden md:flex items-center justify-center text-white hover:text-black hover:bg-white hover:scale-110 transition-all duration-300 shadow-[0_4px_15px_rgba(0,0,0,0.2)]"
            >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2.5 px-4 py-2.5 rounded-full bg-[#121212]/60 backdrop-blur-md border border-white/10 shadow-lg">
                {SLIDES.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        className={`transition-all duration-500 rounded-full ${i === current
                            ? "w-7 h-1.5 bg-white"
                            : "w-1.5 h-1.5 bg-white/40 hover:bg-white/70"
                            }`}
                    />
                ))}
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 right-8 z-20 hidden sm:flex flex-col items-center gap-2">
                <span className="text-white/60 text-xs font-bold uppercase tracking-widest rotate-90 origin-center">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent" />
            </div>
        </div>
    );
}
