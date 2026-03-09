import { useState } from "react";

const FAQ_ITEMS = [
    {
        q: "How long do I have access to the courses?",
        a: "Once enrolled, you have lifetime access to all course content, including future updates.",
    },
    {
        q: "Do I get a certificate upon completion?",
        a: "Yes! Every course comes with a Pencil Eclipse Certificate of Completion that you can share on LinkedIn and your portfolio.",
    },
    {
        q: "Can I get a refund if I'm not satisfied?",
        a: "Absolutely. We offer a 30-day money-back guarantee, no questions asked.",
    },
    {
        q: "What materials do I need for the courses?",
        a: "Each course page lists the required materials. We recommend starting with affordable beginner sets and upgrading as you progress.",
    },
];

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });
    const [submitted, setSubmitted] = useState(false);
    const [faqOpen, setFaqOpen] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: "", email: "", subject: "", message: "" });
    };

    return (
        <div className="min-h-screen bg-[#121212] pt-20">
            {/* Header */}
            <div className="relative py-20 px-4 overflow-hidden text-center">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent" />
                <div className="relative z-10">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                        📬 Get in Touch
                    </span>
                    <h1 className="font-cormorant text-3xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.05] tracking-tight">
                        Contact <span className="text-white/50 italic font-medium">Us</span>
                    </h1>
                    <p className="text-white/60 text-lg max-w-xl mx-auto font-medium leading-relaxed">
                        Have questions? We'd love to hear from you. Send us a message and we'll
                        respond within 24 hours.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                    {/* Contact Info */}
                    <div className="space-y-6">
                        <h2 className="font-cormorant text-3xl font-bold text-white mb-6 tracking-tight">
                            Reach <span className="text-white/50 italic">Out</span>
                        </h2>

                        {[
                            {
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                ),
                                label: "Address",
                                value: "123 Art Studio Lane, Creative District, Mumbai 400001",
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                ),
                                label: "Email",
                                value: "hello@pencileclipse.com",
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                ),
                                label: "Phone",
                                value: "+91 98765 43210",
                            },
                            {
                                icon: (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ),
                                label: "Support Hours",
                                value: "Mon–Sat, 9AM – 6PM IST",
                            },
                        ].map((item) => (
                            <div
                                key={item.label}
                                className="flex items-start gap-4 p-6 rounded-2xl bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 hover:border-white/30 transition-all duration-300 shadow-xl group"
                            >
                                <div className="w-12 h-12 rounded-[1rem] bg-white/10 border border-white/20 flex items-center justify-center text-white shrink-0 group-hover:bg-white group-hover:text-black transition-colors duration-300">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-white/50 text-xs font-bold uppercase tracking-widest mb-1.5">{item.label}</div>
                                    <div className="text-white/90 text-sm font-medium leading-relaxed">{item.value}</div>
                                </div>
                            </div>
                        ))}

                        {/* FAQ */}
                        <div className="pt-8">
                            <h3 className="text-white font-bold text-xl mb-6 tracking-tight">Frequently Asked Questions</h3>
                            <div className="space-y-3">
                                {FAQ_ITEMS.map((item, i) => (
                                    <div
                                        key={i}
                                        className={`rounded-2xl border backdrop-blur-[40px] saturate-[180%] transition-all duration-300 overflow-hidden ${faqOpen === i ? "border-white/30 bg-[#1c1c1e]/60" : "border-white/10 bg-[#1c1c1e]/20"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                                            className="w-full text-left px-5 py-4 flex items-center justify-between gap-4"
                                        >
                                            <span className="text-white/90 text-sm font-semibold">{item.q}</span>
                                            <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center shrink-0">
                                                <svg
                                                    className={`w-3 h-3 text-white transition-transform duration-300 ${faqOpen === i ? "rotate-180" : ""}`}
                                                    fill="none"
                                                    stroke="currentColor"
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="2.5"
                                                >
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                                </svg>
                                            </div>
                                        </button>
                                        {faqOpen === i && (
                                            <div className="px-5 pb-5">
                                                <p className="text-white/60 text-sm font-medium leading-relaxed">{item.a}</p>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] border border-white/10 rounded-2xl p-8 sm:p-10 shadow-2xl">
                            <h2 className="font-cormorant text-3xl font-bold text-white mb-8 tracking-tight">
                                Send Us a <span className="text-white/50 italic">Message</span>
                            </h2>

                            {submitted && (
                                <div className="flex items-center gap-3 p-4 rounded-2xl bg-white/10 border border-white/20 mb-8 backdrop-blur-md">
                                    <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                                        <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                    </div>
                                    <span className="text-white font-medium text-sm">Message sent successfully! We'll get back to you soon.</span>
                                </div>
                            )}

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Your Name *</label>
                                        <input
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                            placeholder="Aryan Mehta"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all font-medium text-sm shadow-inner"
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Email Address *</label>
                                        <input
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                            placeholder="you@example.com"
                                            className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all font-medium text-sm shadow-inner"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Subject</label>
                                    <select
                                        value={formData.subject}
                                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white/80 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all font-medium text-sm shadow-inner appearance-none"
                                    >
                                        <option value="" className="bg-[#1c1c1e]">Select a subject</option>
                                        <option value="course" className="bg-[#1c1c1e]">Course Inquiry</option>
                                        <option value="payment" className="bg-[#1c1c1e]">Payment Issue</option>
                                        <option value="technical" className="bg-[#1c1c1e]">Technical Support</option>
                                        <option value="other" className="bg-[#1c1c1e]">Other</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-white/50 text-xs font-bold tracking-widest uppercase mb-2">Message *</label>
                                    <textarea
                                        required
                                        rows={6}
                                        value={formData.message}
                                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                        placeholder="Tell us how we can help you..."
                                        className="w-full bg-black/40 border border-white/10 rounded-2xl px-5 py-4 text-white placeholder-white/20 focus:outline-none focus:border-white/30 focus:bg-black/60 transition-all font-medium text-sm resize-none shadow-inner"
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="w-full py-5 rounded-2xl bg-white text-black font-bold tracking-wide shadow-[0_4px_15px_rgba(255,255,255,0.15)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.25)] hover:bg-gray-100 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 flex items-center justify-center gap-3"
                                >
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                                    </svg>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
