import React, { useEffect, useRef } from "react";
// Assumes standard public folder paths
import hero from "../../public/hero.jpg";
import hero2 from "../../public/hero2.jpg";
import student from "../../public/student.png";
import timer from "../../public/timer.png";
import money from "../../public/money.png";
import product from "../../public/product.png";
import heroBg from "../../public/hero-bg.jpg";

const HeroSection = () => {
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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" } // Trigger slightly before element hits bottom
    );

    const children = containerRef.current.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#FAF9F6] text-slate-900 overflow-x-hidden"
    >
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow pointer-events-none delay-1000" />

      {/* --- SECTION 1: THE MANIFESTO (HERO) --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            {/* Staggered Reveal Wrapper */}
            <div className="reveal fade-in-up delay-0">
              <div className="flex items-center gap-4 mb-8">
                <span className="h-[2px] w-12 bg-gradient-to-r from-purple-600 to-blue-600"></span>
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  The Future Believe Manifesto
                </span>
              </div>
            </div>

            <h1 className="text-6xl md:text-[7rem] font-bold tracking-tighter leading-[0.9] text-slate-950 mb-10 hover:cursor-pointer">
              <span className="block reveal fade-in-up delay-100">
                Architecting
              </span>
              <span className="block reveal fade-in-up delay-200 font-serif italic font-light text-slate-800">
                Digital Legacies.
              </span>
            </h1>

            <div className="reveal fade-in-up delay-300">
              <p className="max-w-xl text-slate-500 text-lg md:text-2xl font-light leading-relaxed mb-12 hover:cursor-pointer">
                We bridge the gap between{" "}
                <span className="text-slate-900 font-medium border-b border-purple-200">
                  ambition and reality
                </span>
                . Future Believe empowers the next generation of brands to lead
                with purpose and profit.
              </p>
            </div>

            <div className="reveal fade-in-up delay-400 flex flex-wrap items-center gap-8">
              <button className="group cursor-pointer relative px-10 py-5 bg-slate-950 text-white text-sm font-bold uppercase tracking-widest rounded-full overflow-hidden shadow-2xl shadow-purple-900/20 hover:shadow-purple-900/40 transition-all duration-500">
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Begin Your Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>

              <div className="group flex items-center gap-3 hover:cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-slate-950 scale-0 group-hover:scale-100 transition-transform duration-300 rounded-full origin-center" />
                  <svg
                    className="w-4 h-4 relative z-10"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                    />
                  </svg>
                </div>
                <span className="text-xs font-bold uppercase tracking-widest border-b border-transparent group-hover:border-slate-900 transition-all">
                  The Vision Film
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal zoom-out delay-200 hover:cursor-pointer group perspective-1000">
            {/* Main Image with slightly tilted hover effect */}
            <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] transition-transform duration-700 ease-out group-hover:rotate-y-2 group-hover:rotate-x-2">
              <img
                src={hero}
                alt="Future"
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
            </div>

            {/* Floating Card Overlay - Now Visible on Mobile */}
            <div className="absolute -bottom-10 -left-10 md:-left-10 bg-white p-6 md:p-8 rounded-3xl shadow-2xl max-w-[240px] md:max-w-[280px] border border-slate-50 animate-float z-20">
              <div className="text-3xl md:text-4xl font-serif italic text-purple-600 mb-2">
                100k+
              </div>
              <p className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">
                Believers Connected
              </p>
              <div className="flex -space-x-3 md:-space-x-4">
                {[
                  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=64&h=64",
                  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=64&h=64",
                ].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="User"
                    className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white object-cover transition-transform hover:scale-110 hover:z-10"
                  />
                ))}
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-500">
                  +2k
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE CORE VALUES (WHY US) --- */}
      <section className="relative py-32 text-white rounded-t-[4rem] overflow-hidden mt-24">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background Pattern"
            className="w-full h-full object-cover scale-105 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="reveal fade-in-up text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 hover:cursor-pointer">
              Why Future Believe?
            </h2>
            <p className="text-slate-400 text-lg md:text-xl font-light max-w-2xl mx-auto hover:cursor-pointer">
              We don't just provide tools; we provide a philosophy of growth
              built on three pillars: Security, Scale, and Social Impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Global Reach",
                icon: student,
                desc: "Connect with a thriving community of 100k+ students.",
                delay: "delay-100",
              },
              {
                title: "Rapid Scale",
                icon: timer,
                desc: "Engineered for short-term income and long-term equity.",
                delay: "delay-200",
              },
              {
                title: "Skill Equity",
                icon: money,
                desc: "Turn your innate talents into high-value digital currency.",
                delay: "delay-300",
              },
              {
                title: "Premium Suite",
                icon: product,
                desc: "Exclusive access to top-tier branding products.",
                delay: "delay-400",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`reveal fade-in-up ${item.delay} group bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white hover:text-slate-950 hover:cursor-pointer hover:-translate-y-2 transition-all duration-500 shadow-lg hover:shadow-2xl hover:shadow-white/20`}
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-purple-100 transition-colors duration-500">
                  <img
                    src={item.icon}
                    className="w-7 h-7 object-contain group-hover:scale-110 transition-transform duration-500"
                  />
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

      {/* --- SECTION 3: THE FUTURE IS MOBILE --- */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="reveal fade-in-left order-2 lg:order-1 hover:cursor-pointer">
            <h2 className="text-5xl font-bold tracking-tight mb-8">
              Learning Without <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Boundaries.
              </span>
            </h2>
            <div className="space-y-12">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-purple-50 group-hover:bg-purple-600 transition-colors duration-500 flex items-center justify-center text-purple-600 group-hover:text-white font-bold text-xl">
                  01
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">
                    Mobile First Ecosystem
                  </h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Join thousands of students who learn, brand, and earn
                    directly from their mobile devices with our secured app
                    interface.
                  </p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full bg-blue-50 group-hover:bg-blue-600 transition-colors duration-500 flex items-center justify-center text-blue-600 group-hover:text-white font-bold text-xl">
                  02
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2 text-slate-900">
                    Secure Video Branding
                  </h4>
                  <p className="text-slate-500 font-light leading-relaxed">
                    Protect your intellectual property with the most advanced
                    secured video solutions in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal zoom-out order-1 lg:order-2 hover:cursor-pointer">
            <div className="relative p-6 bg-white rounded-[3.5rem] shadow-2xl border border-slate-100 group">
              <div className="overflow-hidden rounded-[2.5rem] aspect-square relative">
                <img
                  src={hero2}
                  alt="Mobile App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                />
                {/* Gradient overlay for text readability if needed */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Floating Element Animated */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 bg-white px-8 py-5 rounded-2xl shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] border border-slate-50 hidden xl:flex items-center gap-4 animate-float delay-700">
                <div className="relative">
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-3 h-3 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    Status
                  </span>
                  <span className="text-sm font-bold text-slate-900">
                    System Secure
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CSS & ANIMATIONS --- */}
      <style jsx global>{`
        /* Core Reveal Animation Base */
        .reveal {
          opacity: 0;
          transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1); /* Custom smooth ease */
          will-change: transform, opacity;
        }

        /* Directional Variations */
        .fade-in-up {
          transform: translateY(40px);
        }
        .fade-in-left {
          transform: translateX(-40px);
        }

        /* New Zoom Out Effect for Images */
        .zoom-out {
          transform: scale(0.95);
          opacity: 0;
        }

        /* Active State */
        .is-visible {
          opacity: 1 !important;
          transform: translate(0, 0) scale(1) !important;
        }

        /* Stagger Delays */
        .delay-100 {
          transition-delay: 0.1s;
        }
        .delay-200 {
          transition-delay: 0.2s;
        }
        .delay-300 {
          transition-delay: 0.3s;
        }
        .delay-400 {
          transition-delay: 0.4s;
        }
        .delay-700 {
          transition-delay: 0.7s;
        }

        /* Custom Floating Animation */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-15px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1);
          }
        }
        .animate-pulse-slow {
          animation: pulseSlow 8s infinite;
        }

        @keyframes pan {
          0% {
            object-position: center bottom;
          }
          50% {
            object-position: center top;
          }
          100% {
            object-position: center bottom;
          }
        }
        .animate-slow-pan {
          animation: pan 20s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
