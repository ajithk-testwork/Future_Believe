import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  MoveRight,
  ChevronRight,
  Building2,
  Megaphone,
} from "lucide-react";

const Navbar = ({ setIsAuthModalOpen }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  // --- FIX: SCROLL TO TOP ON ROUTE CHANGE ---
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  // ------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      if (isHomePage) {
        setScrolled(window.scrollY > 20);
      } else {
        setScrolled(true); // always solid on other pages
      }
    };

    handleScroll(); // run once on route change
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage, location.pathname]); // Added location.pathname to ensure check runs on page switch

  const handleRoleChoice = (role) => {
    setShowRoleSelection(false);
    setIsAuthModalOpen({ isOpen: true, role: role });
  };

  const navbarData = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about" },
    { title: "Dealers", href: "/dealers" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 w-full transition-all duration-500 ease-in-out
        ${
          scrolled
            ? "bg-purple-900/90 backdrop-blur-md border-b border-white/10 py-4 shadow-lg"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className="h-12 object-contain transition-all duration-300"
              src="/LOGO.png"
              alt="Logo"
            />
          </Link>

          {/* --- DESKTOP NAV --- */}
          <div className="hidden lg:flex items-center gap-10">
            {navbarData.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="relative group text-[12px] font-bold uppercase tracking-widest text-white transition-colors duration-300 hover:text-purple-200"
              >
                {link.title}
                {/* Animated Underline */}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-purple-300 transition-all duration-300 ease-out group-hover:w-full" />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <img
              src="/PlayStore Png.png"
              alt="PlayStore"
              className="h-11.5 cursor-pointer hover:opacity-80 transition-opacity"
            />

            <button
              onClick={() => setShowRoleSelection(true)}
              className={`group flex items-center gap-2 cursor-pointer px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95
              ${
                scrolled
                  ? "border border-white/20 text-white hover:bg-white hover:text-purple-900"
                  : "bg-white text-slate-900 hover:bg-slate-100"
              }`}
            >
              <span>Log In</span>
              <MoveRight
                size={14}
                className="group-hover:translate-x-1 transition-transform"
              />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden p-2 text-white hover:bg-white/10 rounded-full transition-colors"
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- CLASSIC ROLE SELECTION MODAL --- */}
      {showRoleSelection && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity duration-500"
            onClick={() => setShowRoleSelection(false)}
          />

          {/* Main Modal Card */}
          <div className="relative bg-white w-full max-w-2xl rounded-2xl shadow-2xl animate-in fade-in zoom-in-95 duration-300 border border-slate-100 overflow-hidden">
            {/* Decorative Classic Header Line */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-purple-700 to-purple-900" />

            <button
              onClick={() => setShowRoleSelection(false)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-400 hover:bg-slate-50 hover:text-slate-800 transition-all duration-200"
            >
              <X size={20} />
            </button>

            <div className="p-10">
              <div className="text-center mb-10">
                <h2 className="text-3xl font-serif font-bold text-slate-900 tracking-tight">
                  Welcome Back
                </h2>
                <div className="h-1 w-16 bg-purple-200 mx-auto my-4 rounded-full" />
                <p className="text-slate-500 text-sm font-medium uppercase tracking-wider">
                  Select your portal
                </p>
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Dealer Card */}
                <button
                  onClick={() => handleRoleChoice("dealer")}
                  className="group relative flex flex-col cursor-pointer items-center text-center p-8 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-purple-300 hover:shadow-[0_8px_30px_rgb(124,58,237,0.15)] transition-all duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="w-20 h-20 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:border-purple-100">
                    <img
                      src="/dealers.png"
                      alt="Dealer"
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <Building2 className="w-10 h-10 text-purple-600 hidden" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-purple-700 transition-colors">
                    Dealer Portal
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed group-hover:text-slate-600">
                    Manage inventory & sales dashboard
                  </p>
                </button>

                {/* Advertiser Card */}
                <button
                  onClick={() => handleRoleChoice("advertiser")}
                  className="group cursor-pointer relative flex flex-col items-center text-center p-8 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white hover:border-blue-300 hover:shadow-[0_8px_30px_rgb(59,130,246,0.15)] transition-all duration-300 ease-out hover:-translate-y-1"
                >
                  <div className="w-20 h-20 bg-white rounded-full shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 group-hover:border-blue-100">
                    <img
                      src="/ads.png"
                      alt="Advertiser"
                      className="w-10 h-10 object-contain"
                      onError={(e) => {
                        e.target.style.display = "none";
                        e.target.nextSibling.style.display = "block";
                      }}
                    />
                    <Megaphone className="w-10 h-10 text-blue-600 hidden" />
                  </div>
                  <h3 className="font-serif font-bold text-xl text-slate-900 group-hover:text-blue-700 transition-colors">
                    Advertiser Hub
                  </h3>
                  <p className="text-sm text-slate-500 mt-2 leading-relaxed group-hover:text-slate-600">
                    Track campaigns & audience reach
                  </p>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* --- MATCHING MOBILE MENU (PURPLE THEME) --- */}
      <div
        className={`fixed inset-0 z-[55] bg-purple-900/95 backdrop-blur-xl transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] md:hidden
        ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Background decorative blob for mobile menu */}
        <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-purple-600/30 blur-3xl rounded-full pointer-events-none"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-64 h-64 bg-blue-600/30 blur-3xl rounded-full pointer-events-none"></div>

        <div className="relative flex flex-col h-full p-8 z-10">
          <div className="flex justify-between items-center mb-16">
            {/* Logo stays white on dark purple bg */}
            <img src="/LOGO.png" alt="Logo" className="h-10 object-contain" />

            <button
              onClick={() => setToggle(false)}
              className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors text-white"
            >
              <X size={24} />
            </button>
          </div>

          <div className="flex flex-col gap-8">
            {navbarData.map((link, i) => (
              <Link
                key={i}
                to={link.href}
                onClick={() => setToggle(false)}
                className="text-2xl font-serif font-bold tracking-tight text-white hover:text-purple-300 transition-colors flex items-center gap-4 group"
              >
                <span className="w-0 group-hover:w-4 h-[2px] bg-purple-400 transition-all duration-300"></span>
                {link.title}
              </Link>
            ))}
          </div>

          <div className="mt-auto space-y-6">
            <button
              onClick={() => {
                setShowRoleSelection(true);
                setToggle(false);
              }}
              className="w-full py-4 bg-white text-purple-900 rounded-full font-bold uppercase tracking-widest text-xs shadow-lg flex items-center justify-center gap-2 hover:bg-purple-50 active:scale-95 transition-all"
            >
              <span>Log In / Sign Up</span>
              <ChevronRight size={16} />
            </button>

            <p className="text-center text-white/40 text-xs uppercase tracking-widest">
              © 2026 Future Believe
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
