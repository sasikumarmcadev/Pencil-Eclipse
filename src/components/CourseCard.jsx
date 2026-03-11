import { Link } from "react-router-dom";

function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-3.5 h-3.5 ${star <= Math.floor(rating)
                        ? "text-white"
                        : star - 0.5 <= rating
                            ? "text-white/60"
                            : "text-white/20"
                        }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
}

export default function CourseCard({ course, variant = "default", hideMeta = false }) {
    const discount = Math.round(
        ((course.originalPrice - course.price) / course.originalPrice) * 100
    );

    if (variant === "featured") {
        return (
            <Link
                to={`/courses/${course.slug}`}
                className="group relative bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 flex flex-col hover:border-white/20"
            >
                {/* Image */}
                <div className="relative h-44 sm:h-52 lg:h-60 overflow-hidden">
                    <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent" />

                    {/* Level badge */}
                    <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 text-white shadow-lg text-[10px] font-bold tracking-widest uppercase">
                        {course.level}
                    </span>
                    {/* Discount badge */}
                    {discount > 0 && (
                        <span className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white text-black text-[10px] font-bold tracking-wider shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                            -{discount}%
                        </span>
                    )}
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6 lg:p-7 relative z-10 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 mb-2 sm:mb-3">
                        <span className="text-white/60 text-[10px] font-bold uppercase tracking-widest bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                            {course.category}
                        </span>
                    </div>
                    <h3 className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight mb-2 line-clamp-2">
                        {course.title}
                    </h3>
                    {/* Description */}
                    {!hideMeta && (
                        <p className="text-white/50 text-sm line-clamp-2 mb-5 leading-relaxed">
                            {course.description}
                        </p>
                    )}

                    {/* Instructor */}
                    {!hideMeta && (
                        <div className="flex items-center gap-3 mb-5">
                            <img
                                src={course.instructorAvatar}
                                alt={course.instructor}
                                className="w-8 h-8 rounded-full border border-white/10 ring-2 ring-transparent group-hover:ring-white/30 transition-all duration-300"
                            />
                            <span className="text-white/70 text-sm font-medium">{course.instructor}</span>
                        </div>
                    )}

                    <div className="mt-auto">
                        {/* Stats */}
                        {!hideMeta && (
                            <div className="flex items-center gap-3 mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5">
                                <div className="flex items-center gap-1.5">
                                    <StarRating rating={course.rating} />
                                    <span className="text-white font-bold text-sm ml-1">
                                        {course.rating}
                                    </span>
                                </div>
                                <div className="w-1 h-1 rounded-full bg-white/20"></div>
                                <span className="text-white/40 text-xs font-medium">
                                    {course.reviewCount.toLocaleString()} reviews
                                </span>
                            </div>
                        )}

                        {/* Price Only */}
                        <div className="flex items-center justify-between mt-auto">
                            <div className="flex flex-col">
                                <span className="text-white font-bold text-base sm:text-lg lg:text-xl tracking-tight mt-1">
                                    ₹{course.price.toLocaleString()}
                                </span>

                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        );
    }

    // Default compact card
    return (
        <Link
            to={`/courses/${course.slug}`}
            className="group relative bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 rounded-2xl overflow-hidden hover:border-white/20 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
        >

            {/* Image */}
            <div className="relative h-48 overflow-hidden">
                <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 will-change-transform"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c1c1e] via-transparent to-transparent" />
                <span className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/30 backdrop-blur-xl border border-white/10 text-white/90 text-[10px] uppercase font-bold tracking-widest">
                    {course.level}
                </span>
                {discount > 0 && (
                    <span className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-white text-black text-[10px] font-bold shadow-lg">
                        -{discount}%
                    </span>
                )}
            </div>

            <div className="p-5 relative z-10 flex flex-col flex-1">
                <h3 className="text-white font-bold text-base tracking-tight mb-2 line-clamp-2">
                    {course.title}
                </h3>
                <p className="text-white/50 text-sm line-clamp-2 mb-4 flex-1">
                    {course.description}
                </p>

                <div className="flex items-center gap-2.5 mb-5">
                    <img
                        src={course.instructorAvatar}
                        alt={course.instructor}
                        className="w-6 h-6 rounded-full border border-white/10"
                    />
                    <span className="text-white/60 text-xs font-medium">{course.instructor}</span>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10 mt-auto">
                    <div className="flex flex-col">
                        <div className="text-white font-bold text-base tracking-tight">
                            ₹{course.price.toLocaleString()}
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
}
