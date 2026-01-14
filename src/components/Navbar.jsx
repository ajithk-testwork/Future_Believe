import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, MoveRight, ChevronRight } from "lucide-react";

const Navbar = ({ setIsAuthModalOpen }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  const location = useLocation();
const isHomePage = location.pathname === "/";


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
}, [isHomePage]);


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
            ? "bg-purple-800 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-20 flex justify-between items-center">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img
              className={`transition-all duration-300 object-contain ${scrolled ? "h-12" : "h-12"}`}
              src="/LOGO.png"
              alt="Logo"
            />
          </Link>

          {/* --- NEW DESKTOP NAV (Clean Underline Animation) --- */}
          <div className="hidden lg:flex items-center gap-10">
            {navbarData.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`relative group text-[12px] font-bold uppercase tracking-widest transition-colors duration-300
                  ${scrolled ? "text-white hover:text-white" : "text-white hover:text-white"}`}
              >
                {link.title}
                
                {/* The Animated Underline */}
                <span className={`absolute -bottom-1 left-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full
                  ${scrolled ? "bg-white" : "bg-white"}`} 
                />
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center gap-6">
            <img
              src="/PlayStore Png.png"
              alt="PlayStore"
              className="h-11 cursor-pointer hover:opacity-80 transition-opacity"
            />
            
            <button
              onClick={() => setShowRoleSelection(true)}
              className={`group flex items-center gap-2 cursor-pointer px-6 py-2.5 rounded-full font-bold text-[10px] tracking-widest uppercase transition-all duration-300 shadow-lg hover:shadow-xl active:scale-95
              ${scrolled 
                  ? "border-1 text-white hover:bg-purple-600" 
                  : "bg-white text-slate-900 hover:bg-slate-100"}`}
            >
              <span>Log In</span>
              <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setToggle(!toggle)}
            className={`md:hidden p-2 transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}
          >
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- REFINED ROLE SELECTION MODAL --- */}
      {showRoleSelection && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
            onClick={() => setShowRoleSelection(false)}
          />

          <div className="relative bg-white w-full max-w-lg rounded-3xl p-8 shadow-2xl animate-in fade-in zoom-in duration-300 border border-slate-100">
            <button
              onClick={() => setShowRoleSelection(false)}
              className="absolute top-6 right-6 p-2 bg-slate-50 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-900 transition-all"
            >
              <X size={20} />
            </button>

            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-slate-900">Welcome Back</h2>
              <p className="text-slate-500 text-sm mt-1">Select your portal to continue</p>
            </div>

            <div className="space-y-4">
              <button
                onClick={() => handleRoleChoice("dealer")}
                className="w-full flex items-center gap-6 p-4 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-purple-50/50 transition-all duration-300 group text-left"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img src="/dealers.png" alt="Dealer" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-slate-900">Dealer Portal</h3>
                    <p className="text-xs text-slate-500 mt-1">Manage inventory & sales</p>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-purple-500 transition-colors" />
              </button>

              <button
                onClick={() => handleRoleChoice("advertiser")}
                className="w-full flex items-center gap-6 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/50 transition-all duration-300 group text-left"
              >
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <img src="/ads.png" alt="Advertiser" className="w-10 h-10 object-contain" />
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-slate-900">Advertiser Hub</h3>
                    <p className="text-xs text-slate-500 mt-1">Track campaigns & reach</p>
                </div>
                <ChevronRight className="text-slate-300 group-hover:text-blue-500 transition-colors" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* --- CLEAN MOBILE MENU --- */}
      <div
        className={`fixed inset-0 z-[55] bg-white transition-transform duration-500 ease-[cubic-bezier(0.7,0,0.3,1)] md:hidden
        ${toggle ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="flex flex-col h-full p-8">
            <div className="flex justify-between items-center mb-12">
                <img src="/LOGO.png" alt="Logo" className="h-10 object-contain brightness-0" />
                <button onClick={() => setToggle(false)} className="p-2 bg-slate-100 rounded-full">
                    <X size={24} className="text-slate-900" />
                </button>
            </div>

            <div className="flex flex-col gap-6">
                {navbarData.map((link, i) => (
                <Link
                    key={i}
                    to={link.href}
                    onClick={() => setToggle(false)}
                    className="text-3xl font-bold text-slate-900 hover:text-purple-600 transition-colors"
                >
                    {link.title}
                </Link>
                ))}
            </div>

            <div className="mt-auto space-y-6">
                <button
                    onClick={() => { setShowRoleSelection(true); setToggle(false); }}
                    className="w-full py-4 bg-slate-900 text-white rounded-xl font-bold uppercase tracking-widest text-sm"
                >
                    Log In / Sign Up
                </button>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;