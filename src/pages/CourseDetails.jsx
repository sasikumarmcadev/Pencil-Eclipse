import { useParams, Link, Navigate } from "react-router-dom";
import { courses } from "../data/courses";
import CurriculumAccordion from "../components/CurriculumAccordion";
import ReviewCard from "../components/ReviewCard";

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-5 h-5 ${star <= Math.round(rating) ? "text-white" : "text-white/20"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function CourseDetails() {
    const { slug } = useParams();
    const course = courses.find((c) => c.slug === slug);

    if (!course) return <Navigate to="/courses" replace />;

    const discount = Math.round(
        ((course.originalPrice - course.price) / course.originalPrice) * 100
    );

    const totalLessons = course.curriculum.reduce(
        (acc, mod) => acc + mod.lessons.length,
        0
    );

    return (
        <div className="min-h-screen bg-[#121212] pt-20">
            {/* Breadcrumb */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center gap-2 text-sm text-white/40">
                    <Link to="/" className="hover:text-white transition-colors">Home</Link>
                    <span>/</span>
                    <Link to="/courses" className="hover:text-white transition-colors">Courses</Link>
                    <span>/</span>
                    <span className="text-white/80 font-medium">{course.title}</span>
                </div>
            </div>

            {/* Hero Banner */}
            <div className="relative h-72 sm:h-96 overflow-hidden">
                <img
                    src={course.banner}
                    alt={course.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#121212]/80 to-transparent" />
            </div>

            {/* Main content + sidebar */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 sm:-mt-16 md:-mt-24 relative pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Sidebar - Top on mobile, Right on lg */}
                    <div className="lg:col-span-1 lg:order-2">
                        <div className="sticky top-24">
                            <div className="bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 rounded-2xl overflow-hidden">
                                {/* Course thumbnail */}
                                <div className="relative h-56 overflow-hidden">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                        <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shadow-2xl cursor-pointer hover:scale-110 hover:bg-white/30 transition-all duration-300">
                                            <svg className="w-7 h-7 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <div className="p-7 text-center">
                                    {/* Price */}
                                    <div className="flex items-baseline justify-center gap-3 mb-2">
                                        <span className="text-4xl font-bold text-white tracking-tight">
                                            ₹{course.price.toLocaleString()}
                                        </span>

                                    </div>
                                    <div className="flex items-center justify-center gap-2 mb-7">
                                        <span className="px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-bold tracking-wider">
                                            {discount}% OFF
                                        </span>
                                        <span className="text-white/40 text-[10px] uppercase font-bold tracking-wider">Limited Offer!</span>
                                    </div>

                                    {/* Buy Button */}
                                    <button className="w-full py-4 rounded-2xl bg-white text-black font-bold text-base shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:bg-gray-100 hover:scale-[1.02] active:scale-100 transition-all duration-300 mb-3 tracking-wide">
                                        Buy Now — ₹{course.price.toLocaleString()}
                                    </button>
                                    <button className="w-full py-3.5 rounded-2xl border border-white/10 text-white/50 text-sm hover:border-white/40 hover:text-white hover:bg-white/5 transition-all duration-300 mb-6 font-bold tracking-wide">
                                        Try Free Demo
                                    </button>

                                    {/* Course info */}
                                    <div className="space-y-4 border-t border-white/10 pt-6 text-left">
                                        {[
                                            {
                                                icon: <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" /></svg>,
                                                label: "Duration", value: course.duration
                                            },
                                            {
                                                icon: <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7" /><rect x="1" y="5" width="15" height="14" rx="2" ry="2" /></svg>,
                                                label: "Lessons", value: `${totalLessons} lessons`
                                            },
                                            {
                                                icon: <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></svg>,
                                                label: "Level", value: course.level
                                            },
                                            {
                                                icon: <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
                                                label: "Instructor", value: course.instructor
                                            },
                                            {
                                                icon: <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" /></svg>,
                                                label: "Certificate", value: "Yes"
                                            },
                                            {
                                                icon: <svg className="w-4 h-4 text-white/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" /><path d="M8 12h8" /></svg>,
                                                label: "Access", value: "Lifetime"
                                            },
                                        ].map((item) => (
                                            <div key={item.label} className="flex items-center justify-between text-sm">
                                                <span className="text-white/50 flex items-center gap-3 font-medium">
                                                    {item.icon}
                                                    {item.label}
                                                </span>
                                                <span className="text-white w-1/2 text-right font-bold">{item.value}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Content - Bottom on mobile, Left on lg */}
                    <div className="lg:col-span-2 space-y-10 lg:order-1">
                        {/* Course Header */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/90 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                    {course.category}
                                </span>
                                <span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/60 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                                    {course.level}
                                </span>
                            </div>
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                                {course.title}
                            </h1>
                            <p className="text-white/60 text-lg leading-relaxed mb-5">
                                {course.longDescription}
                            </p>

                            {/* Meta */}
                            <div className="flex flex-wrap items-center gap-5 text-sm text-white/50">
                                <div className="flex items-center gap-2">
                                    <img
                                        src={course.instructorAvatar}
                                        alt={course.instructor}
                                        className="w-7 h-7 rounded-full bg-white/20"
                                    />
                                    <span className="font-medium text-white/70">{course.instructor}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                    <StarRating rating={course.rating} />
                                    <span className="text-white font-bold ml-1">{course.rating}</span>
                                    <span>({course.reviews.length} reviews)</span>
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    {course.students.toLocaleString()} students
                                </div>
                                <div className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    {course.duration}
                                </div>
                            </div>
                        </div>

                        {/* Intro Video */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-5 tracking-tight">
                                Course <span className="text-white/50 italic">Introduction</span>
                            </h2>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1c1c1e]/50 backdrop-blur-[40px] saturate-[180%] shadow-2xl">
                                <div className="w-full aspect-video">
                                    <iframe
                                        src={course.introVideo}
                                        title="Course Introduction"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>

                        {/* What You'll Learn */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                What You'll <span className="text-white/50 italic">Learn</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {course.whatYouLearn.map((item, i) => (
                                    <div
                                        key={i}
                                        className="flex items-start gap-4 p-5 rounded-2xl bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/5 hover:border-white/20 transition-all duration-300 shadow-xl"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-white/10 border border-white/20 flex items-center justify-center shrink-0 mt-0.5">
                                            <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-white/70 text-sm font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Curriculum */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-6 tracking-tight">
                                Course <span className="text-white/50 italic">Curriculum</span>
                            </h2>
                            <div className="flex items-center gap-6 mb-7 text-sm text-white/50 font-medium">
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {course.curriculum.length} modules
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                        <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    {totalLessons} lessons
                                </span>
                            </div>
                            <CurriculumAccordion curriculum={course.curriculum} />
                        </div>

                        {/* Demo Video */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-4 tracking-tight">
                                Free <span className="text-white/50 italic">Demo Class</span>
                            </h2>
                            <p className="text-white/60 text-sm mb-5 font-medium">
                                Get a taste of the course before you enroll. This demo class is completely free!
                            </p>
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#1c1c1e]/50 backdrop-blur-[40px] saturate-[180%] shadow-2xl">
                                <div className="w-full aspect-video">
                                    <iframe
                                        src={course.demoVideo}
                                        title="Demo Class"
                                        className="w-full h-full"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Reviews */}
                        <div>
                            <h2 className="text-2xl font-bold text-white mb-2 tracking-tight">
                                Student <span className="text-white/50 italic">Feedback</span>
                            </h2>
                            <div className="flex items-center gap-6 mb-10 pt-4">
                                <div className="text-center">
                                    <div className="text-6xl font-bold text-white tracking-tighter">{course.rating}</div>
                                    <div className="mt-1 mb-2">
                                        <StarRating rating={course.rating} />
                                    </div>
                                    <div className="text-white/40 text-xs font-bold uppercase tracking-widest">Course Rating</div>
                                </div>
                                <div className="flex-1 space-y-2">
                                    {[5, 4, 3, 2, 1].map((star) => (
                                        <div key={star} className="flex items-center gap-3">
                                            <span className="text-white/60 text-xs font-medium w-3">{star}</span>
                                            <svg className="w-3.5 h-3.5 text-white/50" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                            </svg>
                                            <div className="flex-1 h-2 rounded-full bg-white/10">
                                                <div
                                                    className="h-full rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.5)]"
                                                    style={{ width: star === 5 ? "80%" : star === 4 ? "15%" : "5%" }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {course.reviews.map((review) => (
                                    <ReviewCard key={review.id} review={review} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
