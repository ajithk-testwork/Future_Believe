import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Install lucide-react for cleaner icons

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      title: "Promote Your Videos",
      subtitle: "to Millions of Students",
      description: "Get More Views On Your Video. Sign up now and get your content seen by the right audience.",
      btnText: "Get Started"
    },
    {
      id: 2,
      title: "Boost Video Reach",
      subtitle: "Instantly & Effectively",
      description: "Join thousands of creators growing their audience with our targeted promotion tools.",
      btnText: "Learn More"
    },
    {
      id: 3,
      title: "Maximum Visibility",
      subtitle: "For Your High-Quality Content",
      description: "Reach the right audience at the right time. Scale your influence across our global network.",
      btnText: "Explore Now"
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    setTimeout(() => setIsLoaded(true), 100);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">


      {/* 1. Background Layer with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <div
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10000ms] ease-linear scale-110 ${
            isLoaded ? "scale-100" : "scale-125"
          }`}
          style={{ backgroundImage: `url('/bg_home.jpg')` }}
        />
        {/* Cinematic Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 z-10" />
      </div>

      {/* 2. Content Layer */}
      <div className="relative z-20 h-full container mx-auto px-6 md:px-12 flex items-center">
        <div className="max-w-4xl">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`transition-all duration-1000 absolute top-1/2 -translate-y-1/2 ${
                index === currentSlide
                  ? "opacity-100 translate-x-0 pointer-events-auto"
                  : "opacity-0 -translate-x-12 pointer-events-none"
              }`}
            >
              {/* Staggered Heading */}
              <div className="space-y-4">
                <h4 className={`text-purple-400 font-bold uppercase tracking-widest text-sm md:text-base transition-all duration-700 delay-300 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
                  High Impact content
                </h4>
                
                <h1 className="text-white">
                  <span className={`block text-4xl md:text-6xl lg:text-7xl font-black leading-tight transition-all duration-700 delay-500 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    {slide.title}
                  </span>
                  <span className={`block text-2xl md:text-4xl lg:text-5xl font-light text-gray-300 transition-all duration-700 delay-700 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                    {slide.subtitle}
                  </span>
                </h1>

                <p className={`max-w-xl text-gray-400 text-lg md:text-xl font-light leading-relaxed transition-all duration-700 delay-1000 ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  {slide.description}
                </p>

                {/* CTA Group */}
                <div className={`flex flex-wrap items-center gap-4 pt-6 transition-all duration-700 delay-[1200ms] ${index === currentSlide ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
                  <button className="px-8 cursor-pointer py-4 bg-white text-black font-bold rounded-full hover:bg-purple-600 hover:text-white transition-all duration-300 flex items-center gap-2 group">
                    {slide.btnText}
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="flex cursor-pointer items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 group">
                    <img src="/PlayStore Png.png" alt="PlayStore" className="w-6 h-6 object-contain" />
                    <div className="text-left leading-none">
                      <span className="text-[10px] uppercase block opacity-60">Get it on</span>
                      <span className="text-sm font-bold block">Google Play</span>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Navigation Controls */}
      
      {/* Arrow Controls */}
      <div className="absolute bottom-12 right-12 z-30 flex items-center gap-4">
         <button 
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="p-4 border cursor-pointer border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all"
         >
           <ChevronLeft size={24} />
         </button>
         <button 
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-4 cursor-pointer bg-purple-600 rounded-full text-white hover:bg-purple-500 transition-all shadow-lg shadow-purple-500/20"
         >
           <ChevronRight size={24} />
         </button>
      </div>

      {/* Progress Indicators (Left Side) */}
      <div className="absolute left-6 md:left-12 bottom-12 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className="group py-4 focus:outline-none"
          >
            <div
              className={`h-1 transition-all duration-500 rounded-full ${
                index === currentSlide
                  ? "w-12 bg-purple-500"
                  : "w-6 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// Simple Icon Fallbacks if Lucide isn't installed
const ArrowRight = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

export default HomeCarousel;