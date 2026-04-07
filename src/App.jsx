import { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import AuthModal from "./pages/Auth/AuthModal";
import Home from "./pages/Home";
import About from "./pages/About";
import Dealers from "./pages/Dealers";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import AdvertiserDashboard from "./pages/AdvertiserDashboard";
import DealerDashboard from "./pages/DealerDashboard";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfService from "./components/TermsOfService";
import HelpCenter from "./components/HelpCenter";
import ScrollToTop from "./components/ScrollToTop";
import SellerDashboard from "./pages/SellerDashboard";
import ScrollButtons from "./components/ScrollButtons";

function App() {
  const location = useLocation();

  const [authData, setAuthData] = useState({
    isOpen: false,
    role: null,
  });

  const closeAuthModal = () => {
    setAuthData({ isOpen: false, role: null });
  };

  // ✅ Routes where layout should be hidden
  const hiddenRoutes = [
    "/advertiser-dashboard",
    "/dealer-dashboard",
    "/seller-dashboard",
    "/terms",
    "/privacy",
  ];

  // ✅ Better matching (handles nested routes too)
  const hideLayout = hiddenRoutes.some((route) =>
    location.pathname.startsWith(route)
  );

  return (
    <>
      {/* ✅ Navbar */}
      {!hideLayout && <Navbar setIsAuthModalOpen={setAuthData} />}

      {/* ✅ Scroll Buttons (FIXED) */}
      {!hideLayout && <ScrollButtons />}

      {/* ✅ Auth Modal */}
      <AuthModal
        isOpen={authData.isOpen}
        role={authData.role}
        onClose={closeAuthModal}
      />

      {/* ✅ Scroll to top on route change */}
      <ScrollToTop />

      {/* ✅ Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertiser-dashboard" element={<AdvertiserDashboard />} />
        <Route path="/dealer-dashboard" element={<DealerDashboard />} />
        <Route path="/seller-dashboard" element={<SellerDashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>

      {/* ✅ Footer */}
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;