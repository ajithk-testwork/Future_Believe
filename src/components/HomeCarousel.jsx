import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";

// --- IMPROVED TYPEWRITER COMPONENT ---
const TypewriterText = ({ text, isActive, delay = 0, speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timeoutRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const cleanup = () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };

    if (!isActive) {
      cleanup();
      setDisplayedText("");
      setIsTyping(false);
      return;
    }

    timeoutRef.current = setTimeout(() => {
      setIsTyping(true);
      let i = 0;
      
      intervalRef.current = setInterval(() => {
        setDisplayedText(text.slice(0, i + 1));
        i++;
        
        if (i >= text.length) {
          clearInterval(intervalRef.current);
          setIsTyping(false);
        }
      }, speed);
      
    }, delay);

    return cleanup;
  }, [text, isActive, delay, speed]);

  return (
    <span className="relative inline-block w-full">
      <span className="invisible select-none break-words">
        {text}
      </span>
      <span className="absolute top-0 left-0 w-full h-full text-left break-words">
        {displayedText}
        {isTyping && (
          <span className="inline-block w-[2px] h-[1em] bg-white/70 ml-1 animate-pulse align-middle rounded-sm" />
        )}
      </span>
    </span>
  );
};

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      id: 1,
      tag: "Global Reach",
      title: "Promote Your Videos",
      subtitle: "to Millions of Students",
      description: "Amplify your educational voice across a network of 10M+ active learners. Precision targeting meets massive scale for unprecedented growth.",
      btnText: "Launch Campaign",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=2071" 
    },
    {
      id: 2,
      tag: "Engagement Engine",
      title: "Boost Video Reach",
      subtitle: "Instantly & Effectively",
      description: "Our proprietary algorithm ensures your educational content lands directly in front of students who actively watch, engage, and subscribe.",
      btnText: "View Analytics",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=2070"
    },
    {
      id: 3,
      tag: "Believe & Grow",
      title: "Maximum Visibility",
      subtitle: "For High-Quality Content",
      description: "Elite tools designed for elite educators. Experience the absolute future of content distribution and audience retention.",
      btnText: "Join the Elite",
      img: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=2170"
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    
    const slideDuration = 10000;
    const intervalTime = 50;
    const increment = (intervalTime / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress >= 100) {
          setCurrentSlide((prev) => (prev + 1) % slides.length);
          return 0;
        }
        return oldProgress + increment;
      });
    }, intervalTime);

    setTimeout(() => setIsLoaded(true), 100);
    return () => clearInterval(timer);
  }, [currentSlide, slides.length, isPaused]);

  const handleNext = () => { 
    setProgress(0); 
    setCurrentSlide((prev) => (prev + 1) % slides.length); 
  };
  
  const handlePrev = () => { 
    setProgress(0); 
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length); 
  };

  return (
    <div 
      className="relative w-full h-screen bg-[#050505] overflow-hidden font-sans flex flex-col group"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      
      {/* Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <div
              className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[20000ms] ease-out ${
                index === currentSlide && isLoaded ? "scale-105" : "scale-100"
              }`}
              style={{ backgroundImage: `url(${slide.img})` }}
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="flex-grow flex flex-col justify-center z-20 container mx-auto px-6 md:px-16 lg:px-24 py-20 overflow-y-auto">
        <div className="max-w-4xl w-full">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`${isActive ? "block" : "hidden"} animate-in fade-in slide-in-from-left-8 duration-1000`}
              >
                {/* Tagline */}
                <div className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-gray-300 text-[10px] md:text-xs uppercase tracking-[0.15em] font-semibold mb-6 transition-all duration-1000 ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                  {slide.tag}
                </div>

                {/* Clean, Proportionate Title matching the image */}
                <h1 className="text-white mb-6 select-none w-full">
                  <span className={`block text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-1 md:mb-2 transition-all duration-1000 delay-200 ${
                    isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}>
                    {slide.title}
                  </span>
                  
                  {/* Clean, light subtitle */}
                  <span className="block text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 leading-snug tracking-normal">
                    <TypewriterText 
                      text={slide.subtitle} 
                      isActive={isActive} 
                      delay={400} 
                      speed={80} 
                    />
                  </span>
                </h1>

                {/* Description */}
                <div className="max-w-xl text-gray-400 text-sm md:text-base font-normal leading-relaxed mb-8 md:mb-10">
                  <TypewriterText 
                    text={slide.description} 
                    isActive={isActive} 
                    delay={1200}
                    speed={40} 
                  />
                </div>

                {/* Action Buttons */}
                <div className={`flex flex-wrap items-center gap-4 transition-all duration-1000 delay-[2000ms] ${
                  isActive ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <button className="cursor-pointer group px-7 py-3 md:px-8 md:py-3.5 bg-white text-black font-semibold rounded-full transition-all duration-300 hover:bg-purple-600 hover:text-white flex items-center gap-2 text-sm md:text-base">
                    {slide.btnText}
                    <ArrowRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                  </button>

                  <button className="cursor-pointer group flex items-center gap-2.5 px-6 py-3 md:px-7 md:py-3.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition-all duration-300 text-white">
                    <Play fill="currentColor" className="w-4 h-4 text-white group-hover:text-purple-400 transition-colors" />
                    <span className="text-sm md:text-base font-medium">Watch Demo</span>
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-10 right-6 md:right-16 z-30 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button 
          onClick={handlePrev}
          className="cursor-pointer p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-105"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button 
          onClick={handleNext}
          className="cursor-pointer p-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-105"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/5 z-30">
        <div 
          className="h-full bg-purple-500 transition-all duration-100 ease-linear shadow-[0_0_10px_rgba(168,85,247,0.5)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;