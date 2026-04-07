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
  CreditCard,
  Store
} from "lucide-react";
import logo_img from "../../../public/LOGO.png"; // Adjust path if needed
import bg_img from "/auth.png"; // Adjust path if needed

const AuthModal = ({ isOpen, onClose, role }) => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // Dynamic content configuration based on role
  const roleContent = {
    advertiser: {
      loginTitle: "Welcome back, Advertiser.",
      registerTitle: "Start your global footprint.",
      description: "Connect with our network of",
      highlight: "100,000+ Students",
      subDescription: "and get your brand seen.",
      features: [
        { icon: Target, text: "Target by Age, Gender & Location" },
        { icon: Users, text: "Real Audience Engagement" },
        { icon: BarChart3, text: "Pay Only for 30s+ Views" }
      ]
    },
    dealer: {
      loginTitle: "Welcome back, Dealer.",
      registerTitle: "Monetize your screen space.",
      description: "Join our network of",
      highlight: "Premium Partners",
      subDescription: "and maximize your revenue.",
      features: [
        { icon: BarChart3, text: "Real-time Revenue Tracking" },
        { icon: Users, text: "Premium Brand Advertisements" },
        { icon: Target, text: "Automated Content Management" }
      ]
    },
    seller: {
      loginTitle: "Welcome back, Seller.",
      registerTitle: "Launch your digital storefront.",
      description: "Reach our growing network of",
      highlight: "Active Buyers",
      subDescription: "and boost your sales today.",
      features: [
        { icon: Store, text: "Custom Digital Storefront" },
        { icon: Users, text: "Direct Buyer Engagement" },
        { icon: BarChart3, text: "Sales & Inventory Analytics" }
      ]
    }
  };

  // Fallback to dealer if role is undefined
  const content = roleContent[role] || roleContent.dealer;

  // Dynamic Role Display
  const displayRole = role === "advertiser" ? "Advertiser" : role === "seller" ? "Seller" : "Dealer";

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLogin) {
      if (role === "advertiser" || role === "dealer" || role === "seller") {
        // 1. Show the animated success overlay
        setShowSuccess(true);

        // 2. Wait exactly 2 seconds (2000ms)
        setTimeout(() => {
          setShowSuccess(false);
          onClose(); // Close the modal

          // 3. Navigate to the correct dashboard path
          if (role === "dealer") {
            navigate("/dealer-dashboard");
          } else if (role === "seller") {
            navigate("/seller-dashboard"); // Redirects to Seller Dashboard
          } else {
            navigate("/advertiser-dashboard");
          }
        }, 2000);
      }
    } else {
      console.log("Registration submitted for:", role);
      // You can add registration routing/logic here later
    }
  };

  if (!isOpen) return null;

  // --- BRAND COLOR UPDATES ---
  const primaryBrand = "bg-[#612c7e] hover:bg-[#4a2160]";
  const focusRing = "focus:ring-[#612c7e]/20 focus:border-[#612c7e]";
  // Reduced vertical padding (py-2 instead of py-2.5) to help fit the register form without scrolling
  const inputStyle = `w-full px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[13px] focus:ring-4 ${focusRing}`;

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 sm:p-6 font-sans">
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity"
        onClick={onClose}
      />

      <div className="relative bg-white w-full max-w-[950px] max-h-[95vh] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden animate-in fade-in zoom-in-95 duration-300">

        {/* LEFT SIDE: Brand Impact Panel */}
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

          {/* Brand Color Gradients & Overlays */}
          <div className="absolute inset-0 bg-[#612c7e] mix-blend-multiply z-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#612c7e]/20 to-[#1a0c22]/95 z-0" />

          <div className="relative z-10 flex flex-col h-full justify-center">
            {/* Logo Section */}
            <div className="flex items-center gap-3 mb-10">
              <div className="w-48 lg:w-60 h-auto rounded-lg flex items-center p-1">
                <img
                  src={logo_img}
                  alt="Future Believe Logo"
                  className="w-full h-full object-contain cursor-pointer"
                />
              </div>
            </div>

            {/* DYNAMIC TITLE */}
            <h2 className="text-2xl lg:text-3xl font-bold leading-tight mb-4">
              {isLogin ? content.loginTitle : content.registerTitle}
            </h2>

            {/* DYNAMIC DESCRIPTION */}
            <p className="text-gray-300 text-[14px] lg:text-[15px] font-light leading-relaxed mb-10">
              {content.description}{" "}
              <span className="text-white font-bold">{content.highlight}</span>{" "}
              {content.subDescription}
            </p>

            {/* DYNAMIC VALUE PROPS */}
            <div className="space-y-4">
              {content.features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex items-center gap-4 text-[12px] lg:text-[13px] font-semibold">
                    <div className="p-2 rounded-xl border border-[#c7a6e0]/30 bg-white/10 backdrop-blur-sm">
                      <Icon size={16} className="text-[#c7a6e0]" />
                    </div>
                    {feature.text}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Auth Form (Added sleek custom scrollbar) */}
        <div className="flex-1 bg-white p-5 sm:p-8 flex flex-col relative overflow-y-auto [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-slate-200 [&::-webkit-scrollbar-thumb]:rounded-full">

          {/* SUCCESS OVERLAY (ANIMATED) */}
          {showSuccess && (
            <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center animate-in fade-in duration-300">
              <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mb-6 animate-bounce">
                <CheckCircle2 size={40} className="text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2 tracking-tight">
                Login Successful!
              </h3>
              <p className="text-gray-500 text-sm animate-pulse">
                Redirecting you to {displayRole.toLowerCase()} dashboard...
              </p>
            </div>
          )}

          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 sm:top-5 sm:right-5 text-gray-400 hover:text-black transition-colors z-40"
          >
            <X size={20} />
          </button>

          <div className="w-full max-w-[460px] mx-auto my-auto pt-2 sm:pt-0">
            <div className="mb-4">
              {/* DYNAMIC RIGHT-SIDE HEADER */}
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-[12px] font-bold tracking-wider bg-[#612c7e]/10 text-[#612c7e]">
                  {displayRole} Portal
                </span>
              </div>
              <h3 className="text-2xl font-bold text-black tracking-tight">
                {isLogin ? `Sign In` : `Get Started`}
              </h3>
              <p className="text-gray-500 text-sm mt-1">
                {isLogin
                  ? `Access your ${displayRole.toLowerCase()} dashboard.`
                  : `Create your ${displayRole.toLowerCase()} account.`}
              </p>
            </div>

            {/* Switcher */}
            <div className="flex p-1 mb-4 bg-gray-100 rounded-lg">
              <button
                type="button"
                onClick={() => setIsLogin(true)}
                className={`flex-1 py-1.5 cursor-pointer text-[12px] font-bold rounded-md transition-all ${isLogin ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                Login
              </button>
              <button
                type="button"
                onClick={() => setIsLogin(false)}
                className={`flex-1 py-1.5 text-[12px] cursor-pointer font-bold rounded-md transition-all ${!isLogin ? "bg-white text-black shadow-sm" : "text-gray-400 hover:text-gray-600"
                  }`}
              >
                Register
              </button>
            </div>

            {/* Form */}
            <form className="space-y-3" onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Company Name"
                      className={inputStyle}
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <Phone className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
                      <input
                        type="tel"
                        placeholder="Phone Number"
                        className={inputStyle}
                      />
                    </div>

                    <div className="relative">
                      <Calendar className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                      <input
                        type="date"
                        className={`${inputStyle} text-gray-500`}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div className="relative">
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5 ml-1 tracking-wider">Profile Image</label>
                      <div className="relative">
                        <ImageIcon className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        <input
                          type="file"
                          accept="image/*"
                          className={`w-full pl-3 pr-8 py-1.5 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[11px] text-gray-500 focus:ring-4 ${focusRing} file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-[#612c7e]/10 file:text-[#612c7e] hover:file:bg-[#612c7e]/20 file:cursor-pointer cursor-pointer`}
                        />
                      </div>
                    </div>

                    <div className="relative">
                      <label className="block text-[10px] font-semibold text-gray-500 mb-0.5 ml-1 tracking-wider">ID Proof (Aadhaar)</label>
                      <div className="relative">
                        <CreditCard className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={14} />
                        <input
                          type="file"
                          accept=".pdf,image/*"
                          className={`w-full pl-3 pr-8 py-1.5 bg-gray-50 border border-gray-200 rounded-lg outline-none transition-all text-[11px] text-gray-500 focus:ring-4 ${focusRing} file:mr-2 file:py-1 file:px-2.5 file:rounded-md file:border-0 file:text-[10px] file:font-semibold file:bg-[#612c7e]/10 file:text-[#612c7e] hover:file:bg-[#612c7e]/20 file:cursor-pointer cursor-pointer`}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}

              <div className="relative pt-1">
                <Mail
                  className="absolute right-4 top-[60%] -translate-y-1/2 text-gray-400"
                  size={14}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className={inputStyle}
                />
              </div>

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
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-[#612c7e] transition-colors cursor-pointer focus:outline-none"
                  >
                    {showPassword ? <EyeOff size={14} /> : <Eye size={14} />}
                  </button>
                </div>

                {isLogin && (
                  <div className="flex justify-end pt-1">
                    <button
                      type="button"
                      className="text-[11px] text-[#612c7e] hover:text-[#4a2160] font-semibold transition-colors cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className={`w-full mt-2 ${primaryBrand} text-white cursor-pointer py-2.5 rounded-lg font-bold text-[12px] flex items-center justify-center gap-2 group transition-all active:scale-[0.98]`}
              >
                <span>{isLogin ? "ACCESS DASHBOARD" : "CREATE ACCOUNT"}</span>
                <ArrowRight
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>
            </form>

            <div className="mt-4 pt-3 border-t border-gray-100">
              <div className="flex items-center justify-center gap-1.5 text-gray-400">
                <ShieldCheck size={14} className="text-[#612c7e]" />
                <span className="text-[10px] font-bold tracking-[0.15em] text-center">
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