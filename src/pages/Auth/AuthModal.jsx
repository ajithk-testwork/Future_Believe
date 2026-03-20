import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  X,
  Mail,
  Eye,
  EyeOff,
  ArrowRight,
  Users,
  ShieldCheck,
  Target,
  BarChart3,
  CheckCircle2,
  Phone,
  Calendar,
  Image as ImageIcon,
  CreditCard
} from "lucide-react";
import logo_img from "../../../public/LOGO.png";
import bg_img from "/auth.png";

const AuthModal = ({ isOpen, onClose, role }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (role === "advertiser" || role === "dealer") {
        setShowSuccess(true);

        setTimeout(() => {
          setShowSuccess(false);
          onClose();

          if (role === "dealer") {
            navigate("/dealer-dashboard");
          } else {
            navigate("/advertiser-dashboard");
          }
        }, 2000);
      } else {
        console.log("Login successful for role:", role);
      }
    } else {
      console.log("Registration submitted");
    }
  };

  if (!isOpen) return null;

  const primaryPurple = "bg-[#7c1dc1] hover:bg-[#6a18a5]";
  const focusRing = "focus:ring-purple-500/20 focus:border-[#7c1dc1]";
  // Compact input styling to save vertical space
  const inputStyle = `w-full px-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[13px] focus:ring-4 ${focusRing}`;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 font-sans">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-[950px] max-h-[95vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        
        {/* LEFT SIDE: Brand Impact Panel with Background Image */}
        <div className="hidden md:flex md:w-[45%] relative flex-col justify-between text-white p-8 overflow-hidden">
          {/* Background Image Layer */}
          <div 
            className="absolute inset-0 z-0"
            style={{ 
              backgroundImage: `url(${bg_img})`, 
              backgroundSize: 'cover', 
              backgroundPosition: 'center' 
            }}
          />
          {/* Purple Gradients & Overlays to ensure text pops */}
          <div className="absolute inset-0 bg-[#4c0d7a]/80 mix-blend-multiply z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#7c1dc1]/10 to-[#16052A]/95 z-0" />

          <div className="relative z-10 flex flex-col h-full justify-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-48 lg:w-60 h-auto rounded-lg flex items-center p-1">
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

            <p className="text-gray-300 text-[14px] lg:text-[15px] font-light leading-relaxed mb-10">
              Connect with our network of{" "}
              <span className="text-white font-bold">100,000+ Students</span>{" "}
              and get your brand seen.
            </p>

            {/* Value Props */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                <div className="p-2 rounded-xl border border-purple-400/30 bg-white/10 backdrop-blur-sm">
                  <Target size={16} className="text-purple-300" />
                </div>
                Target by Age, Gender & Location
              </div>
              <div className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                <div className="p-2 rounded-xl border border-purple-400/30 bg-white/10 backdrop-blur-sm">
                  <Users size={16} className="text-purple-300" />
                </div>
                Real Audience Engagement
              </div>
              <div className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                <div className="p-2 rounded-xl border border-purple-400/30 bg-white/10 backdrop-blur-sm">
                  <BarChart3 size={16} className="text-purple-300" />
                </div>
                Pay Only for 30s+ Views
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Form */}
        {/* Removed overflow-y-auto to force single page view, increased max-w for grid layout */}
        <div className="flex-1 bg-white p-6 sm:p-8 flex flex-col relative">
          
          {/* SUCCESS OVERLAY */}
          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                Login Successful!
              </h3>
              <p className="text-gray-500 text-sm animate-pulse">
                Redirecting you to dashboard...
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-black transition-colors z-40"
          >
            <X size={20} />
          </button>

          {/* Increased max-width to 460px to accommodate a clean two-column grid layout */}
          <div className="w-full max-w-[460px] mx-auto my-auto pt-2 sm:pt-0">
            <div className="mb-5">
              <h3 className="text-2xl font-bold text-black tracking-tight">
                {isLogin ? "Sign In" : "Get Started"}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {isLogin
                  ? "Access your dashboard."
                  : `Create your ${role || "dealer"} account.`}
              </p>
            </div>

            {/* Switcher */}
            <div className="flex p-1 mb-5 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-2 cursor-pointer text-[11px] font-bold rounded-md transition-all ${
                  isLogin ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                LOGIN
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-2 text-[11px] cursor-pointer font-bold rounded-md transition-all ${
                  !isLogin ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                REGISTER
              </button>
            </div>

            {/* Form with Reduced spacing (space-y-3 instead of space-y-4) */}
            <form className="space-y-3" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  {/* Row 1: Company Name (Full Width) */}
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className={inputStyle}
                    />
                  </div>
                  
                  {/* Row 2: Grid Layout for Phone & DOB */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Phone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={inputStyle}
                      />
                    </div>

                    <div className="relative">
                      <Calendar className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                      <input
                        type="date"
                        className={`${inputStyle} text-gray-500`}
                      />
                    </div>
                  </div>

                  {/* Row 3: Grid Layout for File Uploads */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5 ml-1 uppercase tracking-wider">Profile Image</label>
                      <div className="relative">
                        <ImageIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        <input
                          type="file"
                          accept="image/*"
                          className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[11px] text-gray-500 focus:ring-4 focus:ring-purple-500/20 focus:border-[#7c1dc1] file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-purple-50 file:text-[#7c1dc1] hover:file:bg-purple-100 file:cursor-pointer"
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5 ml-1 uppercase tracking-wider">ID Proof (Aadhaar)</label>
                      <div className="relative">
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          className="w-full pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[11px] text-gray-500 focus:ring-4 focus:ring-purple-500/20 focus:border-[#7c1dc1] file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-purple-50 file:text-[#7c1dc1] hover:file:bg-purple-100 file:cursor-pointer"
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Shared Email Field */}
              <div className="relative pt-1">
                <Mail
                  className="absolute right-4 top-[60%] -translate-y-1/2 text-gray-400"
                  size={16}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={inputStyle}
                />
              </div>

              {/* Shared Password Field */}
              <div className="space-y-1.5">
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Password"
                    className={inputStyle}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#7c1dc1] transition-colors cursor-pointer focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>

                {isLogin && (
                  <div className="flex justify-end pt-1">
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
                className={`w-full mt-2 ${primaryPurple} text-white cursor-pointer py-3.5 rounded-lg font-bold text-[12px] flex items-center justify-center gap-2 group transition-all active:scale-[0.98]`}
              >
                <span>{isLogin ? "ACCESS DASHBOARD" : "CREATE ACCOUNT"}</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-gray-100">
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