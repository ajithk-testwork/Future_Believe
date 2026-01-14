import React, { useEffect, useRef } from "react";
import { 
  Target, 
  Users, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Zap
} from "lucide-react";

const About = () => {
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
      { threshold: 0.1 }
    );

    const elements = containerRef.current.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- 1. HERO: CLEAN & BOLD --- */}
      <section className="relative pt-32 pb-20 px-6 lg:px-12 border-b border-slate-100">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          <div className="reveal fade-in-up">
             <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-600 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse"></span>
                Who We Are
             </div>
             <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 mb-8 leading-[1.1]">
               Brands That <br />
               <span className="text-purple-600">Truly Connect.</span>
             </h1>
             <p className="text-xl text-slate-500 font-medium leading-relaxed mb-10 max-w-lg">
               We cut through the digital noise. By connecting brands with 100,000+ active students, we deliver engagement that actually counts.
             </p>
             
             <div className="flex flex-wrap gap-8 items-center">
                <div>
                   <h3 className="text-3xl font-bold text-slate-900">100k+</h3>
                   <p className="text-sm text-slate-500 font-medium">Active Students</p>
                </div>
                <div className="w-[1px] h-10 bg-slate-200"></div>
                <div>
                   <h3 className="text-3xl font-bold text-slate-900">Zero</h3>
                   <p className="text-sm text-slate-500 font-medium">Fake Views</p>
                </div>
             </div>
          </div>

          <div className="relative reveal fade-in-left delay-200">
             {/* Simple Abstract Image/Graphic */}
             <div className="relative aspect-[4/3] bg-slate-100 rounded-[2rem] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80" 
                  alt="Team" 
                  className="w-full h-full object-cover opacity-90"
                />
                {/* Clean Overlay Card */}
                <div className="absolute bottom-6 left-6 right-6 bg-white p-6 rounded-2xl shadow-xl flex items-center gap-4">
                   <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center text-purple-600">
                      <Target size={24} />
                   </div>
                   <div>
                      <p className="font-bold text-slate-900">Precision Targeting</p>
                      <p className="text-sm text-slate-500">Reaching the right audience.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>
      </section>

      {/* --- 2. THE PROBLEM (SIMPLE COMPARISON) --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
           <div className="text-center max-w-2xl mx-auto mb-16 reveal fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">The Digital Dilemma</h2>
              <p className="text-slate-500 text-lg">
                Traditional advertising is broken. We fixed it.
              </p>
           </div>

           <div className="grid md:grid-cols-2 gap-8">
              {/* Old Way */}
              <div className="reveal fade-in-up bg-white p-10 rounded-3xl shadow-sm border border-slate-100 opacity-80 hover:opacity-100 transition-opacity">
                 <div className="flex items-center gap-3 mb-6 text-red-500">
                    <Zap size={24} />
                    <h3 className="text-xl font-bold text-slate-900">The Old Way</h3>
                 </div>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-500">
                       <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs">✕</span>
                       Skipped Ads & Banners
                    </li>
                    <li className="flex items-center gap-3 text-slate-500">
                       <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs">✕</span>
                       Fake Bot Traffic
                    </li>
                    <li className="flex items-center gap-3 text-slate-500">
                       <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs">✕</span>
                       Wasted Budget
                    </li>
                 </ul>
              </div>

              {/* Future Believe Way */}
              <div className="reveal fade-in-up delay-100 bg-white p-10 rounded-3xl shadow-xl border-2 border-purple-100 relative overflow-hidden">
                 <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                    RECOMMENDED
                 </div>
                 <div className="flex items-center gap-3 mb-6 text-purple-600">
                    <ShieldCheck size={24} />
                    <h3 className="text-xl font-bold text-slate-900">Future Believe</h3>
                 </div>
                 <ul className="space-y-4">
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                       Unskippable Content
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                       Real Human Verified
                    </li>
                    <li className="flex items-center gap-3 text-slate-700 font-medium">
                       <span className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 text-xs">✓</span>
                       Pay for Value
                    </li>
                 </ul>
              </div>
           </div>
        </div>
      </section>

      {/* --- 3. HOW IT WORKS (CLEAN GRID) --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal fade-in-up">
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Precision Targeting</h2>
                    <p className="text-slate-500 max-w-md">
                        We ensure your message reaches the right students based on real data points.
                    </p>
                </div>
                <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    See our network <ArrowRight size={20} />
                </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                    { title: "Age", icon: Users },
                    { title: "Education", icon: Target },
                    { title: "Location", icon: ArrowRight }, // Placeholder icon
                    { title: "Interests", icon: CheckCircle2 },
                ].map((item, i) => (
                    <div key={i} className="reveal zoom-in delay-100 bg-slate-50 hover:bg-purple-50 p-8 rounded-2xl transition-colors group cursor-default">
                        <item.icon className="w-8 h-8 text-slate-400 group-hover:text-purple-600 mb-4 transition-colors" />
                        <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                        <div className="w-8 h-1 bg-slate-200 group-hover:bg-purple-200 mt-4 rounded-full transition-colors" />
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* --- 4. ENGAGEMENT GUARANTEE (MINIMALIST) --- */}
      <section className="py-24 px-6 bg-slate-900 text-white rounded-[2rem] mx-4 lg:mx-8 mb-8">
         <div className="max-w-4xl mx-auto text-center reveal fade-in-up">
             <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-8">
                <Clock size={16} />
                The 30-Second Promise
             </div>
             
             <h2 className="text-4xl md:text-6xl font-bold mb-8">
                If they don't watch,<br />
                <span className="text-purple-400">you don't pay.</span>
             </h2>
             
             <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
                We redefined engagement. A "view" on our platform means a real person watched at least 30 seconds of your video. No skips. No bots.
             </p>

             {/* Simple Visual Bar */}
             <div className="max-w-md mx-auto bg-white/10 rounded-full h-2 mb-4 overflow-hidden">
                <div className="h-full bg-purple-500 w-full animate-progress origin-left"></div>
             </div>
             <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 max-w-md mx-auto">
                <span>0s</span>
                <span className="text-white">30s Guaranteed</span>
             </div>
         </div>
      </section>

      {/* --- 5. SIMPLE CTA --- */}
      <section className="py-24 px-6 text-center bg-white">
        <div className="max-w-2xl mx-auto reveal fade-in-up">
            <h2 className="text-3xl font-bold mb-6">Ready to be seen?</h2>
            <p className="text-slate-500 mb-10 text-lg">
                Join the platform where every view counts and every message matters.
            </p>
            <button className="bg-slate-900 text-white cursor-pointer px-8 py-4 rounded-full font-bold hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-xl">
                Start Your Campaign
            </button>
        </div>
      </section>

      <style jsx>{`
        .reveal {
          opacity: 0;
          transition: all 0.8s ease-out;
        }
        .is-visible {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
        .fade-in-up { transform: translateY(20px); }
        .fade-in-left { transform: translateX(-20px); }
        .zoom-in { transform: scale(0.95); }
        .delay-100 { transition-delay: 0.1s; }
        .delay-200 { transition-delay: 0.2s; }
        
        @keyframes progress {
            0% { transform: scaleX(0); }
            100% { transform: scaleX(1); }
        }
        .animate-progress {
            animation: progress 3s ease-out infinite;
        }
      `}</style>
    </div>
  );
};

export default About;