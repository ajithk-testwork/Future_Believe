import React, { useState } from "react";
import { X, Mail, Lock, User, ArrowRight, CheckCircle2 } from "lucide-react";

const AuthModal = ({ isOpen, onClose, role }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

  const isDealer = role === "dealer";
  const portalImage = isDealer ? "/dealers.png" : "/advertise.jpg";
  const portalName = isDealer ? "Dealer Portal" : "Advertiser Hub";
  const accentColor = "bg-purple-600";
  const textColor = "text-purple-600";

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm" 
        onClick={onClose} 
      />

      {/* Modal Container: Removed fixed height, added self-adjusting height */}
      <div className="relative bg-white w-full max-w-4xl rounded-[1.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
        
        {/* LEFT SIDE: Visual Brand Panel */}
        <div className={`hidden md:flex w-[45%] ${accentColor} p-10 flex-col justify-between text-white relative overflow-hidden`}>
          <div className="relative z-10">
            <img src="/LOGO.png" alt="Logo" className="h-7 mb-8 brightness-0 invert" />
            <h2 className="text-3xl font-black leading-tight mb-4 uppercase italic tracking-tighter">
              {isLogin ? "Welcome back to the portal" : "Join our professional network"}
            </h2>
            <p className="text-purple-100 text-sm font-medium opacity-80 leading-snug">
              Access premium tools designed for {isDealer ? "automotive dealers" : "brand advertisers"}.
            </p>
          </div>

          {/* Improved Watermark Placement */}
          <div className="absolute -right-10 -bottom-10 opacity-10 pointer-events-none">
             <img src={portalImage} alt="" className="w-64 h-64 object-contain rotate-12" />
          </div>

          <div className="relative z-10 space-y-2">
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <CheckCircle2 size={12} /> Premium Analytics
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest">
              <CheckCircle2 size={12} /> 24/7 Priority Support
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Form Panel - Adjusted padding and spacing */}
        <div className="flex-1 bg-white p-8 md:p-10 flex flex-col relative">
          <button 
            onClick={onClose} 
            className="absolute top-5 right-5 text-slate-400 hover:text-slate-600 transition-colors z-20"
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-sm mx-auto my-auto">
            {/* Form Header */}
            <div className="mb-6 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-1">
                  <img src={portalImage} className="h-5 w-5 object-contain" alt="" />
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] ${textColor}`}>
                      {portalName}
                  </span>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                  {isLogin ? "Sign In" : "Register"}
              </h3>
            </div>

            {/* Compact Tab Switcher */}
            <div className="flex gap-1 mb-6 bg-slate-100 p-1 rounded-xl">
              <button 
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all
                ${isLogin ? "bg-white text-purple-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                Login
              </button>
              <button 
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-[11px] font-bold uppercase tracking-wider rounded-lg transition-all
                ${!isLogin ? "bg-white text-purple-600 shadow-sm" : "text-slate-500 hover:text-slate-700"}`}
              >
                Sign Up
              </button>
            </div>

            {/* Form - Optimized Spacing */}
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                  <input 
                    type="text" 
                    placeholder="Business Name"
                    className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all text-sm"
                  />
                </div>
              )}

              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="email" 
                  placeholder="Work Email"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all text-sm"
                />
              </div>

              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
                <input 
                  type="password" 
                  placeholder="Password"
                  className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-lg focus:ring-2 focus:ring-purple-600/10 focus:border-purple-600 outline-none transition-all text-sm"
                />
              </div>

              {isLogin && (
                <button type="button" className={`text-[10px] font-bold ${textColor} hover:underline block ml-auto uppercase tracking-tighter`}>
                  Forgot Password?
                </button>
              )}

              <button className={`w-full ${accentColor} hover:opacity-90 text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 group transition-all shadow-md mt-4 active:scale-[0.98]`}>
                <span className="uppercase tracking-widest text-[10px]">{isLogin ? "Authorize Session" : "Create Account"}</span>
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <footer className="mt-8">
              <p className="text-slate-400 text-[8px] text-center leading-relaxed uppercase tracking-widest font-semibold opacity-60">
                Secure Encrypted Connection <br />
                © 2026 Your Brand Portals
              </p>
            </footer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;