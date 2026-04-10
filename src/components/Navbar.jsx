import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  Building2,
  Megaphone,
  Store,
  ArrowUpRight,
} from "lucide-react";

const Navbar = ({ setIsAuthModalOpen }) => {
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showRoleSelection, setShowRoleSelection] = useState(false);

  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(isHomePage ? window.scrollY > 40 : true);
    };
    handleScroll();
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
        className={`fixed z-[60] top-0 left-0 w-full transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${
          scrolled || toggle
            ? "py-3 bg-[#612c7d] backdrop-blur-2xl border-b border-white/5 shadow-2xl"
            : "py-6 bg-transparent"
        }`}
      >
        <div className="max-w-screen-2xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <Link to="/" className="flex items-center group">
            <img
              className="h-12 md:h-16 object-contain transition-transform duration-500 group-hover:scale-105 transform-gpu"
              src="/LOGO.png"
              alt="Logo"
            />
          </Link>

          <div className="hidden md:flex items-center gap-8 lg:gap-12">
            <div className="hidden lg:flex items-center gap-10">
              {navbarData.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  className="relative text-[14px] font-medium tracking-[0.18em] text-white/90 transition-all duration-300 hover:text-white group"
                >
                  {link.title}
                  <span className="absolute -bottom-1.5 left-0 w-0 h-[1.5px] bg-purple-400 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:w-full" />
                </Link>
              ))}
            </div>

            <button
              onClick={() => setShowRoleSelection(true)}
              className="relative overflow-hidden flex items-center cursor-pointer gap-2 px-5 py-3 rounded-xl
             text-[14px] font-black tracking-widest transition-all duration-500 
              shadow-xl group  bg-white  hover:border-purple-500/50"
            >
              <div className="absolute inset-0 z-0 transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0  mix-blend-multiply z-0 transition-colors" />

              <span className="relative z-10 font-medium text-black transition-colors duration-300">
                Login
              </span>
              <ArrowUpRight
                size={18}
                className="relative z-10 text-gray/80 group-hover:text-gray group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300"
              />
            </button>
          </div>

          <button
            onClick={() => setToggle(!toggle)}
            className="md:hidden p-2 text-white bg-white/10 rounded-xl backdrop-blur-md transition-colors hover:bg-white/20"
          >
            {toggle ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* --- MOBILE MENU --- */}
      {toggle && (
        <div className="fixed top-[72px] left-0 w-full bg-[#612c7d] backdrop-blur-2xl border-b border-white/5 z-[55] md:hidden shadow-2xl animate-in slide-in-from-top-4 fade-in duration-300">
          <div className="flex flex-col px-6 py-8 space-y-6">
            {navbarData.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setToggle(false)}
                className="text-white/90 text-lg font-bold tracking-wider border-b border-white/10 pb-4 hover:text-white hover:pl-2 transition-all duration-300 flex justify-between items-center group"
              >
                {link.title}
                <ChevronRight
                  size={18}
                  className="opacity-0 group-hover:opacity-100 transition-opacity text-purple-300"
                />
              </Link>
            ))}

            <button
              onClick={() => {
                setToggle(false);
                setShowRoleSelection(true);
              }}
              className="mt-6 flex items-center justify-center gap-2 bg-white text-purple-950 font-black tracking-widest uppercase py-4 rounded-full shadow-xl hover:bg-purple-50 transition-colors"
            >
              <span>Login</span>
              <ArrowUpRight size={18} className="opacity-70" />
            </button>
          </div>
        </div>
      )}

      {/* --- CORPORATE ROLE SELECTION MODAL --- */}
      {showRoleSelection && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 animate-in fade-in duration-300">
          <div
            className="absolute inset-0 bg-purple-950/60 backdrop-blur-md"
            onClick={() => setShowRoleSelection(false)}
          />

          <div className="relative bg-white w-full max-w-4xl rounded-[2.5rem] shadow-[0_32px_64px_-12px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col md:flex-row min-h-[500px]">
            <div className="md:w-2/5 bg-purple-900 p-12 text-white flex flex-col justify-between relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute -top-20 -left-20 w-64 h-64 bg-white blur-[100px] rounded-full" />
              </div>

              <div className="relative z-10">
                <img
                  src="/LOGO.png"
                  alt="Logo"
                  className="h-10 brightness-0 invert mb-12"
                />
                <h2 className="text-4xl font-serif italic mb-4 leading-tight">
                  Secure <br />
                  Access Portal
                </h2>
                <p className="text-purple-100/60 text-sm font-medium leading-relaxed">
                  Please choose your specific department dashboard to proceed.
                </p>
              </div>

              <div className="relative z-10 text-[10px] tracking-widest uppercase text-white/40">
                Precision & Future Believe © 2026
              </div>
            </div>

            <div className="md:w-3/5 p-8 md:p-16 bg-white flex flex-col justify-center">
              <button
                onClick={() => setShowRoleSelection(false)}
                className="absolute cursor-pointer top-8 right-8 text-slate-400 hover:text-purple-900 transition-colors"
              >
                <X size={24} />
              </button>

              <div className="space-y-4">
                <button
                  onClick={() => handleRoleChoice("dealer")}
                  className="w-full group flex items-center cursor-pointer justify-between p-6 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:bg-white hover:border-purple-200 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-purple-900 group-hover:text-white transition-all duration-500">
                      <Building2 size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-slate-900">
                        Dealer Portal
                      </h3>
                      <p className="text-xs text-slate-500">
                        Inventory & Client Management
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-purple-900 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => handleRoleChoice("advertiser")}
                  className="w-full group flex items-center cursor-pointer justify-between p-6 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:bg-white hover:border-blue-200 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                      <Megaphone size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-slate-900">
                        Advertiser Hub
                      </h3>
                      <p className="text-xs text-slate-500">
                        Campaigns & Analytics
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </button>

                <button
                  onClick={() => handleRoleChoice("seller")}
                  className="w-full group flex items-center cursor-pointer justify-between p-6 rounded-2xl border-2 border-slate-50 bg-slate-50 hover:bg-white hover:border-emerald-200 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-300"
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                      <Store size={24} />
                    </div>
                    <div className="text-left">
                      <h3 className="text-lg font-bold text-slate-900">
                        Seller Hub
                      </h3>
                      <p className="text-xs text-slate-500">
                        Storefront & Orders
                      </p>
                    </div>
                  </div>
                  <ChevronRight className="text-slate-300 group-hover:text-emerald-600 group-hover:translate-x-1 transition-all" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;