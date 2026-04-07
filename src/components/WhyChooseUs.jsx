import React, { useEffect, useRef } from "react";
import { 
  MonitorPlay, 
  Trophy, 
  Sparkles, 
  Users, 
  ShieldCheck, 
  TrendingUp, 
  Zap,
  BarChart ,
  Rocket 
} from "lucide-react";
// Assuming paths remain the same
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
    <div ref={containerRef} className="relative bg-[#FAF9F6] text-slate-900 overflow-x-hidden font-sans">
      
      {/* Background Orbs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-200/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/30 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow pointer-events-none delay-1000" />

      {/* --- SECTION 2: WHY CHOOSE FUTURE BELIEVE (6 Topics) --- */}
      <section className="relative py-24 text-white rounded-t-[3rem] overflow-hidden mt-16 shadow-2xl">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background"
            className="w-full h-full object-cover scale-110 animate-slow-pan opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="reveal fade-in-up text-center mb-20">
            <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest text-purple-400 uppercase bg-purple-400/10 border border-purple-400/20 rounded-full">
              The Mission
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
              Why Choose Future Believe?
            </h2>
            <p className="text-slate-400 text-lg max-w-3xl mx-auto leading-relaxed">
              We bridge the gap between education and economic empowerment through a mobile-first philosophy built for the next generation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((item, idx) => (
              <div
                key={idx}
                className={`reveal fade-in-up ${item.delay} group relative bg-white/5 border border-white/10 p-8 rounded-3xl hover:bg-white hover:text-slate-900 transition-all duration-500`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-[#612c7e] group-hover:text-white transition-all duration-500 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed">
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
        .fade-in-left { transform: translateX(-40px); }
        .zoom-out { transform: scale(0.95); opacity: 0; }
        .is-visible { opacity: 1 !important; transform: translate(0, 0) scale(1) !important; }
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        .delay-300 { transition-delay: 0.3s; }
        .delay-400 { transition-delay: 0.4s; }
        .delay-500 { transition-delay: 0.5s; }
        .delay-700 { transition-delay: 0.7s; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-15px); } }
        .animate-float { animation: float 6s ease-in-out infinite; }
        @keyframes pan { 0% { object-position: center 0%; } 100% { object-position: center 100%; } }
        .animate-slow-pan { animation: pan 30s linear infinite alternate; }
      `}</style>
    </div>
  );
};

export default WhyChooseUs;