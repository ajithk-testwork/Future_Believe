import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, UserCircle, MoveRight } from "lucide-react";

const Navbar = ({ setIsAuthModalOpen }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleRoleChoice = (role) => {
  setShowRoleSelection(false);
  // This must match the object structure { isOpen, role }
  setIsAuthModalOpen({ isOpen: true, role: role }); 
};

  const navbarData = [
    { title: "Home", href: "/" },
    { title: "About us", href: "/about-us" },
    { title: "Dealers", href: "/dealers" },
    { title: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed z-50 top-0 left-0 w-full transition-all duration-500 px-6 md:px-12 lg:px-20 flex items-center
        ${scrolled 
          ? "h-20 bg-purple-800/95 backdrop-blur-xl border-b border-white/10 shadow-2xl" 
          : "h-24 bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img
              className={`transition-all duration-300 object-contain ${scrolled ? "h-10" : "h-14"}`}
              src="/LOGO.png"
              alt="Logo"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-2 bg-white/5 border border-white/10 p-1 rounded-full">
            {navbarData.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className="px-6 py-2 text-[11px] font-bold uppercase tracking-widest text-white hover:bg-white/10 rounded-full transition-all"
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-6">
            <button
              onClick={() => setShowRoleSelection(true)}
              className="group flex items-center gap-3 cursor-pointer px-6 py-3 border-2 text-white rounded-full font-bold text-xs tracking-widest transition-all hover:bg-purple-900 active:scale-95 shadow-lg shadow-purple-500/20"
            >
              <UserCircle size={18} />
              <span>LOG IN</span>
              <MoveRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <img src="/PlayStore Png.png" alt="PlayStore" className="h-12 cursor-pointer hover:scale-105 transition-transform" />
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setToggle(!toggle)} className="md:hidden text-white p-2">
            {toggle ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* --- IMPROVED ROLE SELECTION MODAL --- */}
   {showRoleSelection && (
  <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
    
    {/* Overlay */}
    <div
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      onClick={() => setShowRoleSelection(false)}
    />

    {/* Modal */}
    <div className="relative bg-white w-full max-w-2xl rounded-2xl p-8 md:p-12 shadow-2xl animate-in fade-in zoom-in duration-300">
      
      {/* Close */}
      <button
        onClick={() => setShowRoleSelection(false)}
        className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
      >
        <X size={24} />
      </button>

      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
          Welcome Back
        </h2>
        <p className="text-slate-500 mt-2 font-medium">
          Please choose your portal to continue
        </p>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Dealer */}
        <button
          onClick={() => handleRoleChoice("dealer")}
          className="group flex flex-col items-center p-10 rounded-2xl border border-slate-100 bg-slate-50/50
          hover:bg-white hover:border-slate-300 hover:shadow-2xl hover:shadow-black/10
          transition-all duration-300"
        >
          <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100
          group-hover:scale-105 group-hover:border-slate-200 transition-all">
            <img src="/dealers.png" alt="Dealers" className="w-16 h-16 object-contain" />
          </div>

          <span className="text-xl font-bold text-slate-900">
            Dealer Portal
          </span>
          <p className="text-slate-500 text-sm mt-3 text-center leading-relaxed font-medium">
            Manage your inventory, leads, and sales analytics.
          </p>
        </button>

        {/* Advertiser */}
        <button
          onClick={() => handleRoleChoice("advertiser")}
          className="group flex flex-col items-center p-10 rounded-2xl border border-slate-100 bg-slate-50/50
          hover:bg-white hover:border-slate-300 hover:shadow-2xl hover:shadow-black/10
          transition-all duration-300"
        >
          <div className="w-24 h-24 mb-6 flex items-center justify-center rounded-2xl bg-white shadow-sm border border-slate-100
          group-hover:scale-105 group-hover:border-slate-200 transition-all">
            <img src="/ads.png" alt="Advertiser" className="w-16 h-16 object-contain" />
          </div>

          <span className="text-xl font-bold text-slate-900">
            Advertiser Hub
          </span>
          <p className="text-slate-500 text-sm mt-3 text-center leading-relaxed font-medium">
            Run campaigns and track your advertisement reach.
          </p>
        </button>

      </div>
    </div>
  </div>
)}

      {/* --- CLEARER MOBILE MENU --- */}
      <div className={`fixed inset-0 z-[55] bg-purple-950 transition-all duration-500 ease-in-out md:hidden
        ${toggle ? "translate-x-0" : "translate-x-full"}`}>
        
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-50" />
        
        <div className="relative flex flex-col h-full items-center justify-between py-24 px-10">
            <div className="flex flex-col items-center gap-6 w-full">
                {navbarData.map((link, i) => (
                    <Link 
                      key={i} 
                      to={link.href} 
                      onClick={() => setToggle(false)} 
                      className="text-4xl font-black text-white hover:text-purple-400 transition-colors uppercase tracking-tighter"
                    >
                        {link.title}
                    </Link>
                ))}
            </div>

            <div className="w-full flex flex-col items-center gap-8">
                <button
                    onClick={() => { setShowRoleSelection(true); setToggle(false); }}
                    className="w-full py-5 bg-white text-purple-950 rounded-2xl font-black text-xl shadow-2xl active:scale-95 transition-transform uppercase"
                >
                    Log In Now
                </button>
                <div className="flex flex-col items-center gap-3">
                  <p className="text-white/40 text-[10px] uppercase tracking-widest font-bold">Available on</p>
                  <img src="/PlayStore Png.png" className="h-10" alt="PlayStore" />
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;