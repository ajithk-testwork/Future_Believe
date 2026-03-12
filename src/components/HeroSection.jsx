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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    const children = containerRef.current.querySelectorAll(".reveal");
    children.forEach((child) => observer.observe(child));

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative bg-[#FAF9F6] text-slate-900 overflow-x-hidden font-sans"
    >
      {/* --- AMBIENT BACKGROUND GLOW --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-purple-200/40 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow pointer-events-none" />
      <div className="absolute top-[10%] right-[-10%] w-[40%] h-[40%] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply animate-pulse-slow pointer-events-none delay-1000" />

      {/* --- SECTION 1: THE MANIFESTO (HERO) --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 lg:px-20 py-24 z-10">
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            {/* Staggered Reveal Wrapper */}
            <div className="reveal fade-in-up delay-0">
              <div className="flex items-center gap-4 mb-6">
                <span className="h-[2px] w-12 bg-gradient-to-r from-purple-600 to-blue-600"></span>
                <span className="text-xs font-bold uppercase tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                  The Future Believe Manifesto
                </span>
              </div>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight text-slate-950 mb-8">
              <span className="block reveal fade-in-up delay-100">
                Architecting
              </span>
              <span className="block reveal fade-in-up delay-200 text-slate-800">
                Digital Legacies.
              </span>
            </h1>

            <div className="reveal fade-in-up delay-300">
              <p className="max-w-xl text-slate-600 text-base md:text-lg font-normal leading-relaxed mb-10">
                We bridge the gap between{" "}
                <span className="text-slate-900 font-semibold border-b-2 border-purple-200">
                  ambition and reality
                </span>
                . Future Believe empowers the next generation of brands to lead
                with purpose and profit.
              </p>
            </div>

            <div className="reveal fade-in-up delay-400 flex flex-wrap items-center gap-6">
              <button className="group cursor-pointer relative px-8 py-4 bg-slate-950 text-white text-sm font-semibold uppercase tracking-wider rounded-lg overflow-hidden shadow-lg shadow-purple-900/10 hover:shadow-purple-900/30 transition-all duration-300">
                <span className="relative z-10 group-hover:text-white transition-colors">
                  Begin Your Journey
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="group flex items-center gap-3 cursor-pointer">
                <div className="w-10 h-10 rounded-full border-2 border-slate-200 flex items-center justify-center group-hover:bg-slate-950 group-hover:text-white group-hover:border-slate-950 transition-all duration-300 relative overflow-hidden">
                  <svg
                    className="w-4 h-4 relative z-10 ml-0.5"
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
                <span className="text-sm font-semibold uppercase tracking-wider text-slate-700 group-hover:text-slate-950 transition-colors">
                  The Vision Film
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 relative reveal zoom-out delay-200 group perspective-1000">
            {/* Main Image */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-700 ease-out group-hover:rotate-y-2 group-hover:rotate-x-2">
              <img
                src={hero}
                alt="Future"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
            </div>

            {/* Floating Card Overlay */}
            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-white p-6 rounded-xl shadow-xl max-w-[240px] md:max-w-[260px] border border-slate-100 animate-float z-20 cursor-pointer">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-1">
                100k+
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-4">
                Believers Connected
              </p>
              <div className="flex -space-x-3">
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
                    className="w-8 h-8 rounded-full border-2 border-white object-cover"
                  />
                ))}
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-[10px] font-bold text-slate-600">
                  +2k
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- SECTION 2: THE CORE VALUES (WHY US) --- */}
      <section className="relative py-24 text-white rounded-t-3xl overflow-hidden mt-16">
        <div className="absolute inset-0 z-0">
          <img
            src={heroBg}
            alt="Background Pattern"
            className="w-full h-full object-cover scale-105 animate-slow-pan"
          />
          <div className="absolute inset-0 bg-slate-950/95" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <div className="reveal fade-in-up text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Future Believe?
            </h2>
            <p className="text-slate-400 text-base md:text-lg font-normal max-w-2xl mx-auto">
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
                className={`reveal fade-in-up ${item.delay} cursor-pointer group bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white hover:text-slate-950 hover:-translate-y-1 transition-all duration-300 shadow-md hover:shadow-xl hover:shadow-white/10`}
              >
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 group-hover:bg-purple-100 transition-colors duration-300">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-6 h-6 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-slate-400 group-hover:text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION 3: THE FUTURE IS MOBILE --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="reveal fade-in-left order-2 lg:order-1">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              Learning Without <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
                Boundaries.
              </span>
            </h2>
            <div className="space-y-10 mt-8">
              <div className="flex gap-5 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-purple-50 group-hover:bg-purple-600 transition-colors duration-300 flex items-center justify-center text-purple-600 group-hover:text-white font-bold text-lg">
                  01
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900">
                    Mobile First Ecosystem
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Join thousands of students who learn, brand, and earn
                    directly from their mobile devices with our secured app
                    interface.
                  </p>
                </div>
              </div>
              <div className="flex gap-5 group cursor-pointer">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-blue-50 group-hover:bg-blue-600 transition-colors duration-300 flex items-center justify-center text-blue-600 group-hover:text-white font-bold text-lg">
                  02
                </div>
                <div>
                  <h4 className="text-lg font-bold mb-1 text-slate-900">
                    Secure Video Branding
                  </h4>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    Protect your intellectual property with the most advanced
                    secured video solutions in the market.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal zoom-out order-1 lg:order-2 cursor-pointer">
            <div className="relative p-4 bg-white rounded-3xl shadow-xl border border-slate-100 group">
              <div className="overflow-hidden rounded-2xl aspect-square relative">
                <img
                  src={hero2}
                  alt="Mobile App"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1s] ease-out"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500" />
              </div>

              {/* Floating Element Animated */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-white px-6 py-4 rounded-xl shadow-lg border border-slate-100 hidden xl:flex items-center gap-3 animate-float delay-700">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-green-500 animate-ping opacity-75" />
                </div>
                <div>
                  <span className="block text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                    Status
                  </span>
                  <span className="text-xs font-bold text-slate-900">
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
          transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
          will-change: transform, opacity;
        }

        /* Directional Variations */
        .fade-in-up {
          transform: translateY(30px);
        }
        .fade-in-left {
          transform: translateX(-30px);
        }

        /* New Zoom Out Effect for Images */
        .zoom-out {
          transform: scale(0.97);
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
            transform: translateY(-10px);
          }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes pulseSlow {
          0%,
          100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.05);
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