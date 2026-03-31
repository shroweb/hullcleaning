import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ResidentialPage from "./pages/ResidentialPage";
import CommercialPage from "./pages/CommercialPage";
import ContactPage from "./pages/ContactPage";
import AreaPage from "./pages/AreaPage";
import ReviewsPage from "./pages/ReviewsPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import { motion, useScroll, useSpring } from "framer-motion";
import WhatsAppChatWidget from "./components/WhatsAppChatWidget";

// Helper to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="relative font-sans text-gray-900 bg-white">
        {/* Scroll indicator */}
        <motion.div 
          className="fixed top-0 left-0 right-0 h-1 bg-brand-primary z-[60] origin-left" 
          style={{ scaleX }}
        />
        
        <Navbar />
        
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/residential" element={<ResidentialPage />} />
            <Route path="/services/commercial" element={<CommercialPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reviews" element={<ReviewsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/areas/:slug" element={<AreaPage />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppChatWidget />
      </div>
    </BrowserRouter>
  );
}
