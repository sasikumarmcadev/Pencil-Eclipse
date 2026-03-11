import { useState } from "react";
import { Link } from "react-router-dom";
import HeroCarousel from "../components/HeroCarousel";
import CourseCard from "../components/CourseCard";
import GalleryGrid from "../components/GalleryGrid";
import { courses, galleryImages } from "../data/courses";

function SectionHeader({ badge, title, highlight, subtitle }) {
    return (
        <div className="text-center mb-12">
            {badge && (
                <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold mb-5 tracking-widest uppercase shadow-sm">
                    {badge}
                </span>
            )}
            <h2 className="font-cormorant text-5xl sm:text-6xl font-semibold text-white mb-4 leading-[1.1]">
                {title}{" "}
                {highlight && <span className="text-white/60 italic">{highlight}</span>}
            </h2>
            {subtitle && (
                <p className="text-white/50 text-base max-w-2xl mx-auto leading-relaxed font-light">{subtitle}</p>
            )}
        </div>
    );
}

function StatCard({ value, label }) {
    return (
        <div className="text-center">
            <div className="text-4xl sm:text-5xl font-bold text-white mb-2 tracking-tight">
                {value}
            </div>
            <div className="text-white/50 text-sm font-medium tracking-wide">{label}</div>
        </div>
    );
}

export default function Home() {
    const [activeIndex, setActiveIndex] = useState(1);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const N = courses.length;

    const handlePrev = () => setActiveIndex((prev) => (prev - 1 + N) % N);
    const handleNext = () => setActiveIndex((prev) => (prev + 1) % N);

    const handleTouchStart = (e) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (!touchStart || !touchEnd) return;
        const distance = touchStart - touchEnd;
        if (distance > 50) handleNext(); // Swiped left
        if (distance < -50) handlePrev(); // Swiped right
        setTouchStart(0);
        setTouchEnd(0);
    };

    return (
        <div className="min-h-screen bg-[#121212]">
            {/* Hero Carousel */}
            <HeroCarousel />

            {/* Stats Bar */}
            <div className="bg-[#1c1c1e]/30 border-y border-white/5 py-10 backdrop-blur-[40px] saturate-[180%]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCard value="25k+" label="Happy Students" />
                        <StatCard value="50+" label="Expert Courses" />
                        <StatCard value="1" label="Master Artist" />
                        <StatCard value="4.9★" label="Average Rating" />
                    </div>
                </div>
            </div>

            <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <SectionHeader
                    badge={<span className="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" /></svg>What We Offer</span>}
                    title="World-Class"
                    highlight="Online Courses"
                    subtitle="Learn from our master artist across multiple disciplines. Every course is crafted to transform complete beginners into confident creators."
                />
                <div
                    className="relative w-full max-w-7xl mx-auto mb-20 h-[420px] sm:h-[480px] md:h-[520px] lg:h-[620px] flex items-center justify-center pt-8 sm:pt-12 overflow-hidden px-4"
                    style={{ perspective: "1200px" }}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                >
                    {courses.map((course, index) => {
                        let diff = index - activeIndex;
                        if (diff > Math.floor(N / 2)) diff -= N;
                        if (diff < -Math.ceil(N / 2) + 1) diff += N;

                        // Base 3D Math for Cover Flow
                        let transformStyle = {
                            transition: "all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1)",
                            transformStyle: "preserve-3d",
                        };

                        let transformClass = "absolute w-[75%] sm:w-[50%] md:w-[45%] lg:w-[35%] xl:w-[30%] ";

                        if (diff === 0) {
                            transformClass += " z-30 opacity-100 ";
                            transformStyle.transform = "translateZ(50px) rotateY(0deg)";
                        } else if (diff === -1) {
                            transformClass += " z-20 opacity-40 lg:opacity-30 cursor-pointer hover:opacity-100 -translate-x-[55%] sm:-translate-x-[60%] md:-translate-x-[65%] lg:-translate-x-[105%] xl:-translate-x-[115%] ";
                            transformStyle.transform = "translateZ(-120px) rotateY(20deg)";
                        } else if (diff === 1) {
                            transformClass += " z-20 opacity-40 lg:opacity-30 cursor-pointer hover:opacity-100 translate-x-[55%] sm:translate-x-[60%] md:translate-x-[65%] lg:translate-x-[105%] xl:translate-x-[115%] ";
                            transformStyle.transform = "translateZ(-120px) rotateY(-20deg)";
                        } else {
                            transformClass += " z-10 opacity-0 pointer-events-none ";
                            transformStyle.transform = `translateX(${diff < 0 ? '-100%' : '100%'}) translateZ(-300px) rotateY(${diff < 0 ? '45deg' : '-45deg'})`;
                        }

                        const handleClick = (e) => {
                            if (diff !== 0) {
                                e.preventDefault();
                                if (diff === -1) handlePrev();
                                if (diff === 1) handleNext();
                            }
                        };

                        return (
                            <div
                                key={course.id}
                                className={transformClass}
                                style={transformStyle}
                                onClick={handleClick}
                            >
                                <CourseCard course={course} variant="featured" hideMeta={true} />
                            </div>
                        );
                    })}
                </div>
                <div className="flex items-center justify-center gap-4 mt-6">
                    <button
                        onClick={handlePrev}
                        className="p-2.5 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:-translate-x-1 transition-all duration-300 backdrop-blur-md"
                        aria-label="Previous Course"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button
                        onClick={handleNext}
                        className="p-2.5 sm:p-4 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:translate-x-1 transition-all duration-300 backdrop-blur-md"
                        aria-label="Next Course"
                    >
                        <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </section>

            <section className="py-20 bg-[#121212]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        badge={<span className="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>Our Courses</span>}
                        title="Explore All"
                        highlight="Art Disciplines"
                        subtitle="From pencil to digital, watercolor to oil — find your perfect creative path."
                    />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {courses.map((course) => (
                            <CourseCard key={course.id} course={course} />
                        ))}
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                                <img
                                    src="https://picsum.photos/seed/homeabout/700/400"
                                    alt="About Pencil Eclipse"
                                    className="w-full h-96 object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/95 via-transparent to-transparent md:bg-gradient-to-r md:from-[#121212]/95 md:via-[#121212]/70 md:to-transparent" />
                            </div>
                            {/* Floating card */}
                            <div className="absolute -bottom-6 -right-6 bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/20 rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.5)] hidden sm:block">
                                <div className="text-white font-bold text-3xl tracking-tight mb-1">10+</div>
                                <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Years of Excellence</div>
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-sm font-medium mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>
                                About Us
                            </span>
                            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
                                Where <span className="text-white/60 font-bold">Art Meets</span>{" "}
                                Education
                            </h2>
                            <p className="text-white/60 text-lg leading-relaxed mb-6">
                                Pencil Eclipse was founded by a passionate artist
                                who believed that world-class art education should be accessible
                                to everyone. Our platform bridges the gap between raw talent and
                                professional mastery.
                            </p>
                            <p className="text-white/50 leading-relaxed mb-8">
                                With over 25,000 students across 40+ countries, we've built the
                                most comprehensive online art school in South Asia. Our
                                master artist is a working professional, not just a teacher —
                                he brings real-world experience to every lesson.
                            </p>
                            <div className="flex flex-wrap gap-4 mt-8">
                                <Link
                                    to="/about"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover:bg-gray-100 transition-all duration-300"
                                >
                                    Learn More
                                </Link>
                                <Link
                                    to="/courses"
                                    className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-bold tracking-wide hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                                >
                                    Start Learning
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-24 bg-[#121212]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionHeader
                        badge={<span className="inline-flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2" /><circle cx="8.5" cy="8.5" r="1.5" /><polyline points="21 15 16 10 5 21" /></svg>Student Gallery</span>}
                        title="Masterpieces by"
                        highlight="Our Students"
                        subtitle="Witness the incredible transformation. These artworks were created by students just like you."
                    />
                    <GalleryGrid images={galleryImages.slice(0, 6)} />
                    <div className="text-center mt-10">
                        <Link
                            to="/gallery"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold tracking-wide shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:-translate-y-0.5 hover:bg-gray-100 transition-all duration-300"
                        >
                            View Full Gallery
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </Link>
                    </div>
                </div>
            </section>

            {/* CTA Banner */}
            <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <div className="relative rounded-3xl overflow-hidden bg-[#1c1c1e] border border-white/5 p-8 sm:p-16 lg:p-24 text-center">
                        {/* Background Deco */}
                        <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/homecta/1200/800')] opacity-[0.03] bg-cover bg-center grayscale scale-110" />
                        <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />
                        <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/5 rounded-full blur-[80px] pointer-events-none" />

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/40 text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase mb-8 shadow-inner">
                                Your Creative Future
                            </span>
                            
                            <h2 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.1] tracking-tight">
                                Ready to Start Your <br />
                                <span className="text-white/50 italic font-medium">Artistic Journey?</span>
                            </h2>
                            
                            <p className="text-white/40 text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 font-light leading-relaxed max-w-2xl mx-auto px-4 sm:px-0">
                                Join <span className="text-white font-medium">25,000+ students</span> who have transformed their lives through the power of art. Your masterpiece is waiting.
                            </p>
                            
                            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                                <Link
                                    to="/courses"
                                    className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg tracking-wide hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300 group"
                                >
                                    Explore All Courses
                                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
