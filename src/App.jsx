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

function App() {
  const location = useLocation();

  const [authData, setAuthData] = useState({
    isOpen: false,
    role: null,
  });

  const closeAuthModal = () => {
    setAuthData({ isOpen: false, role: null });
  };

 const hiddenRoutes = ["/advertiser-dashboard", "/dealer-dashboard"];

const hideLayout = hiddenRoutes.includes(location.pathname);

  return (
    <>
      {!hideLayout && <Navbar setIsAuthModalOpen={setAuthData} />}

      <AuthModal
        isOpen={authData.isOpen}
        role={authData.role}
        onClose={closeAuthModal}
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/dealers" element={<Dealers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/advertiser-dashboard" element={<AdvertiserDashboard />} />
        <Route path="/dealer-dashboard" element={<DealerDashboard />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/help" element={<HelpCenter />} />
      </Routes>

      {!hideLayout && <Footer />}
    </>
  );
}

export default App;