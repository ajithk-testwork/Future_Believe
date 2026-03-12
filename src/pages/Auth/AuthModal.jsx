import React, { useState } from "react";
import {
  X,
  Mail,
  Lock,
  PlayCircle,
  ArrowRight,
  Users,
  ShieldCheck,
  Target,
  BarChart3,
} from "lucide-react";
import logo_img from "../../../public/LOGO.png";

const AuthModal = ({ isOpen, onClose, role }) => {
  const [isLogin, setIsLogin] = useState(false);

  if (!isOpen) return null;

  const primaryPurple = "bg-[#7c1dc1] hover:bg-[#6a18a5]";
  const focusRing = "focus:ring-purple-500/20 focus:border-[#7c1dc1]";

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity"
        onClick={onClose}
      />

      {/* Modal Container - Responsive adjustments */}
      <div className="relative bg-white w-full max-w-[900px] max-h-[95vh] sm:max-h-[85vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* LEFT SIDE: Brand Impact Panel - Hidden on mobile, takes 45% on desktop */}
        <div className="hidden md:flex md:w-[45%] bg-purple-900 flex-col justify-between text-white p-8 overflow-y-auto">
          <div className="relative z-10 flex flex-col h-full justify-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-48 lg:w-60 h-auto rounded-lg flex items-center justify-center p-1">
                <img
                  src={logo_img}
                  alt="Future Believe Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
              {isLogin
                ? "Welcome back to the network."
                : "Start your global footprint."}
            </h2>

            <p className="text-gray-400 text-[14px] lg:text-[15px] font-light leading-relaxed mb-10">
              Connect with our network of{" "}
              <span className="text-white font-bold">100,000+ Students</span>{" "}
              and get your brand seen.
            </p>

            {/* Value Props */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                <div className="p-2 rounded-xl border border-purple-900/50 bg-[#16052A]/50">
                  <Target size={16} className="text-[#a855f7]" />
                </div>
                Target by Age, Gender & Location
              </div>
              <div className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                <div className="p-2 rounded-xl border border-purple-900/50 bg-[#16052A]/50">
                  <Users size={16} className="text-[#a855f7]" />
                </div>
                Real Audience Engagement
              </div>
              <div className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                <div className="p-2 rounded-xl border border-purple-900/50 bg-[#16052A]/50">
                  <BarChart3 size={16} className="text-[#a855f7]" />
                </div>
                Pay Only for 30s+ Views
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Form */}
        <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col relative overflow-y-auto">
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-black transition-colors"
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-[340px] mx-auto my-auto pt-6 sm:pt-4">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-black tracking-tight">
                {isLogin ? "Sign In" : "Get Started"}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {isLogin
                  ? "Access your dashboard."
                  : "Create your advertiser account."}
              </p>
            </div>

            {/* Switcher */}
            <div className="flex p-1 mb-6 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 cursor-pointer text-[11px] font-bold rounded-md transition-all ${isLogin ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
              >
                LOGIN
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-[11px] cursor-pointer font-bold rounded-md transition-all ${!isLogin ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"}`}
              >
                REGISTER
              </button>
            </div>

            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              {!isLogin && (
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Company Name"
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[13px] focus:ring-4 ${focusRing}`}
                  />
                </div>
              )}

              <div className="relative">
                <Mail
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[13px] focus:ring-4 ${focusRing}`}
                />
              </div>

              {/* Password Group with Forgot Password Link */}
              <div className="space-y-1.5">
                <div className="relative">
                  <Lock
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                    size={16}
                  />
                  <input
                    type="password"
                    placeholder="Password"
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[13px] focus:ring-4 ${focusRing}`}
                  />
                </div>

                {/* Conditionally render Forgot Password only on Login */}
                {isLogin && (
                  <div className="flex justify-end">
                    <button
                      type="button"
                      className="text-[11px] text-[#7c1dc1] hover:text-[#6a18a5] font-semibold transition-colors cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`w-full mt-4 ${primaryPurple} text-white cursor-pointer py-3.5 rounded-lg font-bold text-[12px] flex items-center justify-center gap-2 group transition-all active:scale-[0.98]`}
              >
                <span>{isLogin ? "ACCESS DASHBOARD" : "CREATE ACCOUNT"}</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <div className="mt-6 pt-5 border-t border-gray-100">
              <div className="flex items-center justify-center gap-1.5 text-gray-400">
                <ShieldCheck size={14} className="text-purple-500" />
                <span className="text-[9px] font-bold uppercase tracking-[0.15em] text-center">
                  Secure Verified Connection
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
