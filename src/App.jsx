import { useState } from "react";
import Navbar from "./components/Navbar";
import AuthModal from "./pages/Auth/AuthModal"; // Import the modal
import Home from "./pages/Home";
import About from "./pages/About";
import Dealers from "./pages/Dealers";
import Contact from "./pages/Contact";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  // 1. Create state to manage the Modal
  const [authData, setAuthData] = useState({
    isOpen: false,
    role: null,
  });

  // 2. Function to close the modal
  const closeAuthModal = () => {
    setAuthData({ isOpen: false, role: null });
  };

  return (
    <>
      <Navbar setIsAuthModalOpen={setAuthData} />
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
      </Routes>

      <Footer />
    </>
  );
}

export default App;
