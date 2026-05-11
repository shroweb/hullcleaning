import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, lazy, Suspense } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { motion, useScroll, useSpring } from "framer-motion";
import WhatsAppChatWidget from "./components/WhatsAppChatWidget";

const AboutPage = lazy(() => import("./pages/AboutPage"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const ResidentialPage = lazy(() => import("./pages/ResidentialPage"));
const CommercialPage = lazy(() => import("./pages/CommercialPage"));
const TidyUpsPage = lazy(() => import("./pages/TidyUpsPage"));
const EndOfTenancyPage = lazy(() => import("./pages/EndOfTenancyPage"));
const TakeawayPage = lazy(() => import("./pages/TakeawayPage"));
const AirbnbPage = lazy(() => import("./pages/AirbnbPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const AreaPage = lazy(() => import("./pages/AreaPage"));
const ReviewsPage = lazy(() => import("./pages/ReviewsPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const TermsPage = lazy(() => import("./pages/TermsPage"));
const ThanksPage = lazy(() => import("./pages/ThanksPage"));

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
          <Suspense fallback={null}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/domestic-cleaning-hull" element={<ResidentialPage />} />
              <Route path="/commercial-cleaning-hull" element={<CommercialPage />} />
              <Route path="/tidy-ups-hull" element={<TidyUpsPage />} />
              <Route path="/end-of-tenancy-cleaning-hull" element={<EndOfTenancyPage />} />
              <Route path="/takeaway-cleaning-hull" element={<TakeawayPage />} />
              <Route path="/airbnb-cleaning-hull" element={<AirbnbPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/reviews" element={<ReviewsPage />} />
              <Route path="/privacy" element={<PrivacyPage />} />
              <Route path="/terms" element={<TermsPage />} />
              <Route path="/thanks" element={<ThanksPage />} />
              <Route path="/areas/:slug" element={<AreaPage />} />
            </Routes>
          </Suspense>
        </main>

        <Footer />
        <WhatsAppChatWidget />
      </div>
    </BrowserRouter>
  );
}
