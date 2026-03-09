function StarRating({ rating }) {
    return (
        <div className="flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    className={`w-4 h-4 ${star <= rating ? "text-red-600" : "text-white/20"
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

export default function ReviewCard({ review }) {
    return (
        <div className="group relative bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 rounded-2xl p-7 hover:border-white/20 hover:shadow-[0_15px_30px_-10px_rgba(0,0,0,0.6)] transition-all duration-500 overflow-hidden hover:-translate-y-1.5 flex flex-col h-full">

            {/* Header */}
            <div className="flex items-start justify-between mb-5 relative z-10">
                <div className="flex items-center gap-3.5">
                    <img
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full border border-white/10 bg-[#222] object-cover"
                    />
                    <div>
                        <h4 className="text-white font-bold text-[15px] tracking-tight">{review.name}</h4>
                        <p className="text-white/40 text-[11px] uppercase tracking-widest font-bold mt-0.5">{review.date}</p>
                    </div>
                </div>
                <div className="flex flex-col items-end gap-1.5 bg-black/20 border border-white/5 p-2 rounded-xl backdrop-blur-md">
                    <StarRating rating={review.rating} />
                    <span className="text-white/90 text-[10px] font-bold tracking-widest uppercase">{review.rating}.0 RATING</span>
                </div>
            </div>

            {/* Quote icon */}
            <svg
                className="w-8 h-8 text-white/20 mb-4 relative z-10"
                fill="currentColor"
                viewBox="0 0 24 24"
            >
                <path d="M14.017 21v-7.391c0-5.704 3.748-9.57 9-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.995zm-14.017 0v-7.391c0-5.704 3.748-9.571 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.999v10h-9.999z" />
            </svg>

            {/* Comment */}
            <p className="text-white/70 text-sm leading-relaxed relative z-10 flex-grow font-medium">"{review.comment}"</p>

            {/* Verified badge */}
            <div className="flex items-center gap-2 mt-5 pt-5 border-t border-white/10 relative z-10">
                <div className="bg-white/10 p-1.5 rounded-full text-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                </div>
                <span className="text-white/60 text-[10px] font-bold tracking-widest uppercase">Verified Student</span>
            </div>
        </div>
    );
}
