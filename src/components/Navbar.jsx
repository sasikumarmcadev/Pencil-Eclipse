import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
    { to: "/", label: "Home" },
    { to: "/courses", label: "Courses" },
    { to: "/gallery", label: "Gallery" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => { setMenuOpen(false); }, [location]);

    // Close mobile menu when pressing Escape key
    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === 'Escape' && menuOpen) {
                setMenuOpen(false);
            }
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [menuOpen]);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [menuOpen]);

    return (
        <nav
            className="fixed top-0 left-0 right-0 z-50 flex flex-col items-center pointer-events-none"
            role="navigation"
            aria-label="Main navigation"
        >
            <div
                className={`pointer-events-auto transition-all duration-700 ease-in-out ${scrolled
                    ? "mt-4 max-w-7xl w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] rounded-full bg-[#1c1c1e]/60 backdrop-blur-[40px] saturate-[180%] shadow-[0_8px_32px_rgba(0,0,0,0.6)] border border-white/10 ring-1 ring-white/5"
                    : "mt-0 max-w-full w-full border-none rounded-none bg-gradient-to-b from-black/80 via-black/40 to-transparent shadow-none ring-0"
                    }`}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className="flex items-center justify-between h-16 md:h-20">

                        {/* Logo - improved accessibility */}
                        <Link
                            to="/"
                            className="flex items-center gap-3.5 group focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212] rounded-full"
                            aria-label="Pencil Eclipse - Go to homepage"
                        >
                            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.2)] group-hover:shadow-[0_0_25px_rgba(255,255,255,0.4)] group-hover:scale-105 border border-white/10 ring-2 ring-transparent group-hover:ring-white/30 transition-all duration-500">
                                <svg
                                    viewBox="0 0 24 24"
                                    className="w-5 h-5 text-white"
                                    fill="currentColor"
                                    aria-hidden="true"
                                >
                                    <path d="M20.71 4.04c.39-.39.39-1.04 0-1.43l-2.34-2.34c-.39-.39-1.04-.39-1.43 0l-3 3 3.77 3.77 3-3zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" />
                                </svg>
                            </div>
                            <span className="text-2xl font-black tracking-tight flex items-center gap-1.5">
                                <span className="text-white">Pencil</span>
                                <span className="text-white">Eclipse</span>
                            </span>
                        </Link>

                        {/* Desktop Nav */}
                        <div className="hidden md:flex items-center gap-1.5 bg-black/20 p-1.5 rounded-full border border-white/5">
                            {NAV_LINKS.map((link) => (
                                <NavLink
                                    key={link.to}
                                    to={link.to}
                                    end={link.to === "/"}
                                    className={({ isActive }) =>
                                        `relative px-5 py-2 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${isActive
                                            ? "text-black bg-white border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                            : "text-white/60 border-transparent hover:text-white hover:bg-white/5"
                                        }`
                                    }
                                >
                                    {link.label}
                                </NavLink>
                            ))}
                        </div>

                        <div className="hidden md:flex items-center">
                            <Link
                                to="/courses"
                                className="ml-4 px-7 py-2.5 rounded-full bg-white text-black text-sm font-bold tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:-translate-y-0.5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-300 relative overflow-hidden group/btn"
                                aria-label="Enroll Now - Get started with our courses"
                            >
                                <span className="relative z-10">Enroll Now</span>
                                <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                            </Link>
                        </div>

                        {/* Mobile toggle - improved accessibility */}
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="md:hidden p-2 rounded-full text-white/60 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-1 focus:ring-offset-[#121212] transition-all duration-300"
                            aria-label={menuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-menu"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu - improved accessibility */}
            <div
                id="mobile-menu"
                className={`pointer-events-auto w-full md:hidden transition-all duration-500 ease-in-out overflow-hidden flex justify-center ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                    }`}
                aria-hidden={!menuOpen}
            >
                <div className="bg-[#1c1c1e]/60 saturate-[180%] backdrop-blur-[40px] border-t border-b border-white/10 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl px-4 pb-6 pt-4 space-y-2 mt-2 mb-4 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.8)] ring-1 ring-white/5 relative overflow-hidden">
                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 blur-[50px] rounded-full pointer-events-none" />

                    {NAV_LINKS.map((link) => (
                        <NavLink
                            key={link.to}
                            to={link.to}
                            end={link.to === "/"}
                            className={({ isActive }) =>
                                `block px-5 py-3.5 rounded-2xl text-base font-bold tracking-wide transition-all duration-300 border focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212] ${isActive
                                    ? "text-black bg-white border-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
                                    : "text-white/60 border-transparent hover:text-white hover:bg-white/5"
                                }`
                            }
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </NavLink>
                    ))}
                    <Link
                        to="/courses"
                        className="block mt-4 px-5 py-3.5 rounded-2xl bg-white text-black text-base font-bold text-center tracking-wide shadow-[0_4px_20px_rgba(255,255,255,0.1)] hover:shadow-[0_4px_25px_rgba(255,255,255,0.2)] hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#121212] transition-all duration-300 relative overflow-hidden group/btn"
                        onClick={() => setMenuOpen(false)}
                        aria-label="Enroll Now - Get started with our courses"
                    >
                        <span className="relative z-10">Enroll Now</span>
                        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-[150%] group-hover/btn:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
                    </Link>
                </div>
            </div>
        </nav>
    );
}