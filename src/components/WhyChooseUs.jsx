import React, { useEffect, useRef } from "react";
import { 
  MonitorPlay, 
  Trophy, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  BarChart,
  Rocket 
} from "lucide-react";
import heroBg from "../../public/hero-bg.jpg";

const WhyChooseUs = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const children = containerRef.current.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  const coreValues = [
    {
      title: "Smart Promotion",
      icon: <MonitorPlay className="w-6 h-6" />,
      desc: "Launch high-impact video campaigns with optimized distribution designed to maximize visibility and engagement across the Future Believe network."
    },
    {
      title: "Targeted Reach",
      icon: <Users className="w-6 h-6" />,
      desc: "Reach the right audience using advanced targeting based on demographics, location, and interests—ensuring your brand connects with the most relevant viewers."
    },
    {
      title: "Real Engagement",
      icon: <TrendingUp className="w-6 h-6" />,
      desc: "Eliminate wasted impressions. Your videos are delivered to real viewers with guaranteed engagement, ensuring every view adds value to your brand."
    },
    {
      title: "Performance Tracking",
      icon: <BarChart className="w-6 h-6" />,
      desc: "Access real-time analytics to monitor campaign performance, measure engagement, and optimize your strategy for better results."
    },
    {
      title: "Scalable Growth",
      icon: <Rocket className="w-6 h-6" />,
      desc: "Scale your campaigns effortlessly—from small promotions to large-scale brand awareness—based on your business goals."
    },
    {
      title: "Ecosystem Advantage",
      icon: <Sparkles className="w-6 h-6" />,
      desc: "Leverage a complete platform that connects promotion, audience engagement, and growth opportunities—creating a strong and lasting brand footprint."
    }
  ];

  return (
    <div ref={containerRef} className="relative bg-[#0a040d] text-slate-100 overflow-x-hidden font-sans">
      {/* 1. Comment moved inside the DIV to fix the syntax error */}
      {/* Updated outer background to a very deep, almost-black purple to match the theme */}
      
      {/* Background Orbs - Enhanced glow using brand color #612c7d */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#612c7d]/20 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-[#612c7d]/15 blur-[120px] rounded-full mix-blend-screen animate-pulse-slow pointer-events-none delay-1000" />

      {/* --- SECTION 2: WHY CHOOSE FUTURE BELIEVE --- */}
      <section className="relative py-24 text-white rounded-t-[3rem] overflow-hidden mt-16 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover scale-110 animate-slow-pan opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a040d] via-[#1e0d27]/95 to-[#0a040d]" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="reveal fade-in-up text-center mb-20">
            <span className="inline-block px-5 py-1.5 mb-4 text-xs font-bold tracking-widest text-[#e0c4f4] uppercase bg-[#612c7d]/30 border border-[#612c7d]/50 rounded-full shadow-[0_0_15px_rgba(97,44,125,0.2)]">
              The Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">
              Why Choose Future Believe?
            </h2>
            <p className="text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between education and economic empowerment through a mobile-first philosophy built for the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((item, idx) => (
              <div
                key={idx}
                className={`reveal fade-in-up group relative bg-white/[0.03] border border-[#612c7d]/20 backdrop-blur-md p-8 rounded-3xl transition-all duration-500 hover:bg-[#612c7d]/10 hover:border-[#612c7d]/60 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(97,44,125,0.5)]`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-6 text-slate-300 border border-white/5 group-hover:bg-[#612c7d] group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(97,44,125,0.6)] group-hover:border-transparent transition-all duration-500">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-200 text-sm leading-relaxed transition-colors duration-500">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx global>{`
        .reveal { opacity: 0; transition: all 1s cubic-bezier(0.16, 1, 0.3, 1); will-change: transform, opacity; }
        .fade-in-up { transform: translateY(40px); }
        .is-visible { opacity: 1 !important; transform: translate(0, 0) scale(1) !important; }
        @keyframes pan { 0% { object-position: center 0%; } 100% { object-position: center 100%; } }
        .animate-slow-pan { animation: pan 30s linear infinite alternate; }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;