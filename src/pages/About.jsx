import { Link } from "react-router-dom";

const TEAM = [
    {
        name: "Aryan Mehta",
        role: "Founder & Lead Artist",
        specialty: "Hyper Realism",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Aryan",
        students: 25000,
    },
];

const VALUES = [
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="6" /><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
            </svg>
        ),
        title: "Excellence First",
        desc: "Every course is crafted to the highest standards. We never compromise on quality.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
            </svg>
        ),
        title: "Accessible to All",
        desc: "Great art education shouldn't be gatekept. We make it affordable and available globally.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
            </svg>
        ),
        title: "Community Driven",
        desc: "Learning is better together. Our community of artists supports and inspires each other.",
    },
    {
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2a10 10 0 100 20A10 10 0 0012 2z" /><path d="M12 6v6l4 2" />
            </svg>
        ),
        title: "Real Artist Teaches",
        desc: "Our instructor is a working professional, not just a teacher. Real experience, real skills.",
    },
];

export default function About() {
    return (
        <div className="min-h-screen bg-[#121212] pt-20">
            {/* Hero */}
            <div className="relative py-24 px-4 overflow-hidden bg-gradient-to-b from-[#1c1c1e] to-[#121212]">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/abouthero/1400/800')] opacity-5 bg-cover bg-center grayscale" />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#121212]/80 to-[#121212]" />
                <div className="max-w-4xl mx-auto text-center relative">
                    <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase mb-6 shadow-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                        Our Story
                    </span>
                    <h1 className="font-cormorant text-4xl sm:text-6xl lg:text-7xl font-semibold text-white mb-6 leading-[1.05] tracking-tight">
                        We Believe <em className="text-white/60 not-italic italic">Everyone</em> is an
                        Artist
                    </h1>
                    <p className="text-white/60 text-lg leading-relaxed font-medium">
                        Pencil Eclipse was born from a simple belief — that the ability to
                        create beautiful art lives inside everyone. We just help you find
                        it, nurture it, and unleash it into the world.
                    </p>
                </div>
            </div>

            {/* Mission */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="relative">
                        <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                            <img
                                src="https://picsum.photos/seed/aboutmission/700/400"
                                alt="Our Mission"
                                className="w-full h-64 sm:h-80 md:h-[400px] object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#121212]/60 to-transparent" />
                        </div>
                        <div className="absolute -bottom-6 -right-6 bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/20 rounded-2xl p-6 shadow-[0_15px_30px_rgba(0,0,0,0.5)] hidden sm:block">
                            <div className="text-white font-bold text-3xl tracking-tight mb-1">2014</div>
                            <div className="text-white/60 text-xs font-bold uppercase tracking-widest">Founded in Mumbai</div>
                        </div>
                    </div>
                    <div>
                        <h2 className="font-playfair text-4xl font-bold text-white mb-5">
                            Our <span className="text-white/50">Mission</span>
                        </h2>
                        <p className="text-white/60 leading-relaxed mb-4">
                            Pencil Eclipse was founded in 2014 by Aryan Mehta, a hyper-realism
                            artist who trained in Mumbai and New York. Frustrated by the lack of
                            quality, affordable art education in India, he started recording
                            YouTube tutorials that quickly gained a massive following.
                        </p>
                        <p className="text-white/60 leading-relaxed mb-4">
                            Today, Pencil Eclipse has grown into a full-fledged online art
                            academy with over 25,000 students across 40 countries. We offer
                            courses in pencil art, watercolor, digital illustration, charcoal,
                            oil painting, and more.
                        </p>
                        <p className="text-white/60 leading-relaxed mb-6">
                            Our mission remains the same: make world-class art education
                            accessible to everyone who has the passion to create.
                        </p>
                        <div className="grid grid-cols-3 gap-4">
                            {[
                                { value: "25K+", label: "Students" },
                                { value: "40+", label: "Countries" },
                                { value: "50+", label: "Courses" },
                            ].map((stat) => (
                                <div
                                    key={stat.label}
                                    className="text-center p-5 rounded-2xl bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 shadow-xl"
                                >
                                    <div className="text-3xl font-bold text-white mb-1 tracking-tight">
                                        {stat.value}
                                    </div>
                                    <div className="text-white/50 text-xs font-bold tracking-widest uppercase">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Values */}
            <div className="py-20 bg-[#121212] border-y border-white/10">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="font-cormorant text-5xl sm:text-6xl font-semibold text-white mb-4 leading-[1.05] tracking-tight">
                            What We <em className="text-white/50 not-italic italic">Stand For</em>
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {VALUES.map((val) => (
                            <div
                                key={val.title}
                                className="group p-6 rounded-2xl bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl"
                            >
                                <div className="flex items-center justify-center w-14 h-14 rounded-[1.25rem] bg-white border border-white/20 text-black mb-5 shadow-sm">
                                    {val.icon}
                                </div>
                                <h3 className="text-white font-bold text-xl mb-3 tracking-wide">
                                    {val.title}
                                </h3>
                                <p className="text-white/60 text-sm leading-relaxed font-medium">{val.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Team */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="text-center mb-12">
                    <h2 className="font-playfair text-4xl font-bold text-white mb-4">
                        Meet Your <span className="text-white/50">Master Artist</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto font-medium">
                        Learn from a working professional with years of real-world artistic experience.
                    </p>
                </div>
                <div className="flex justify-center">
                    {TEAM.map((member) => (
                        <div
                            key={member.name}
                            className="group text-center p-8 rounded-2xl bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 hover:border-white/30 hover:shadow-2xl hover:shadow-black transition-all duration-400 hover:-translate-y-1"
                        >
                            <div className="relative inline-block mb-5">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-24 h-24 rounded-full bg-white/10 border-4 border-white/5 group-hover:border-white/20 transition-all object-cover"
                                />
                                <div className="absolute bottom-0 right-0 w-7 h-7 rounded-full bg-white flex items-center justify-center border-2 border-[#1c1c1e] shadow-sm">
                                    <svg className="w-3.5 h-3.5 text-black" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                </div>
                            </div>
                            <h3 className="text-white font-bold text-lg mb-1 tracking-tight">
                                {member.name}
                            </h3>
                            <p className="text-white/50 text-sm mb-3 font-medium">{member.role}</p>
                            <span className="text-[10px] px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 font-bold uppercase tracking-widest">
                                {member.specialty}
                            </span>
                            <p className="text-white/40 text-xs mt-4 font-semibold">
                                {member.students.toLocaleString()}+ students
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* CTA */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="relative rounded-2xl overflow-hidden bg-[#1c1c1e] border border-white/10 p-12 sm:p-16 text-center shadow-2xl shadow-black">
                    {/* Deco BG */}
                    <div className="absolute inset-0 bg-[url('https://picsum.photos/seed/aboutcta/1200/800')] opacity-5 bg-cover bg-center grayscale" />

                    <div className="relative z-10">
                        <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-white mb-6">
                            Ready to Join Our <span className="text-white/50">Family?</span>
                        </h2>
                        <p className="text-white/60 mb-10 text-lg font-medium">
                            Start your art journey today with world-class guidance from our master artist.
                        </p>
                        <Link
                            to="/courses"
                            className="inline-flex items-center justify-center gap-3 px-10 py-5 rounded-full bg-white text-black font-bold text-lg tracking-wide shadow-[0_10px_30px_rgba(255,255,255,0.2)] hover:shadow-[0_10px_40px_rgba(255,255,255,0.3)] hover:bg-gray-100 hover:-translate-y-1 transition-all duration-300"
                        >
                            Explore All Courses
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
