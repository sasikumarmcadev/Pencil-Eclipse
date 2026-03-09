import { BrowserRouter, Routes, Route, ScrollRestoration } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import ScrollToTopButton from "./components/ScrollToTopButton";

function ScrollToTop() {
  // This is handled via CSS scroll-behavior: smooth and window.scrollTo on route change
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/:slug" element={<CourseDetails />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            {/* Redirect unknown routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <ScrollToTopButton />
      </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return (
    <div className="min-h-screen bg-[#141414] flex items-center justify-center text-center px-4 pt-20">
      <div>
        <div className="font-playfair text-9xl font-bold text-white/20 mb-4">404</div>
        <h1 className="font-playfair text-4xl font-bold text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-white/50 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <a
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition-all duration-300 shadow-xl"
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
