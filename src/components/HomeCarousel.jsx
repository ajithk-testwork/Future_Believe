import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight, ArrowRight, Play } from "lucide-react";
import image1 from "../../public/hero1.png";
import image2 from "../../public/hero2.png";
import image3 from "../../public/hero3.png";

const TypewriterText = ({ text, isActive, delay = 0, speed = 100, className = "" }) => {
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
    <span className="relative inline-block w-full text-center">
      {/* ADDED ${className} HERE so the placeholder is the correct height */}
      <span className={`invisible select-none break-words ${className}`}>
        {text}
      </span>
      <span className={`absolute top-0 left-0 w-full h-full text-center break-words ${className}`}>
        {displayedText}
        {isTyping && (
          <span className="inline-block w-[2px] h-[0.9em] bg-current ml-1 animate-pulse align-middle rounded-sm" />
        )}
      </span>
    </span>
  );
};
const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [progress, setProgress] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Global Reach",
      title: "Promote Your Videos",
      subtitle: "to Millions of Students",
      description:
        "Amplify your educational voice across a network of 10M+ active learners. Precision targeting meets massive scale for unprecedented growth.",
      btnText: "Launch Campaign",
      img: image1,
    },
    {
      id: 2,
      tag: "Engagement Engine",
      title: "Boost Video Reach",
      subtitle: "Instantly & Effectively",
      description:
        "Our proprietary algorithm ensures your educational content lands directly in front of students who actively watch, engage, and subscribe.",
      btnText: "View Analytics",
      img: image2,
    },
    {
      id: 3,
      tag: "Believe & Grow",
      title: "Maximum Visibility",
      subtitle: "For High-Quality Content",
      description:
        "Elite tools designed for elite educators. Experience the absolute future of content distribution and audience retention.",
      btnText: "Join the Elite",
      img: image3,
    },
  ];

  useEffect(() => {
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
  }, [currentSlide, slides.length]); // Removed isPaused dependency

  const handleNext = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setProgress(0);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    // Removed the onMouseEnter/onMouseLeave that was breaking the auto-slider
    <div className="relative w-full h-screen bg-black overflow-hidden font-sans group">
      
      {/* Background Images with Stronger Dark Overlay for Readability */}
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
            {/* Added a consistent dark overlay so text doesn't blend into busy backgrounds */}
            <div className="absolute inset-0 bg-black/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Centered Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center container mx-auto px-6 pt-16">
        <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
          {slides.map((slide, index) => {
            const isActive = index === currentSlide;

            return (
              <div
                key={slide.id}
                className={`w-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center ${
                  isActive ? "block pointer-events-auto" : "hidden pointer-events-none"
                }`}
              >
                {/* Glowing Pill Tag */}
                <div
                  className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold tracking-[0.2em] uppercase mb-5 transition-all duration-1000 transform ${
                    isActive ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-8"
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500 shadow-[0_0_8px_#a855f7] animate-pulse" />
                  {slide.tag}
                </div>

                {/* Main Titles */}
                <h1 className="w-full mb-4 flex flex-col items-center drop-shadow-lg">
                  <span
                    className={`block text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-2 transition-all duration-1000 delay-200 transform ${
                      isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                    }`}
                  >
                    {slide.title}
                  </span>
                  
                  {/* Fixed Subtitle Rendering */}
                  <span className="block w-full max-w-3xl">
                    <TypewriterText
                      text={slide.subtitle}
                      isActive={isActive}
                      delay={400}
                      speed={70}
                      className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-fuchsia-300 to-purple-400 font-semibold text-xl md:text-3xl lg:text-4xl"
                    />
                  </span>
                </h1>

                {/* Centered Description */}
                <div className="max-w-2xl text-gray-200 text-sm md:text-lg font-normal leading-relaxed mb-8 w-full text-center drop-shadow-md">
                  <TypewriterText
                    text={slide.description}
                    isActive={isActive}
                    delay={1000}
                    speed={30}
                  />
                </div>

                {/* Buttons Layout */}
                
              </div>
            );
          })}
        </div>
      </div>

      {/* Floating Controls (Bottom Right) */}
      <div className="absolute bottom-8 right-6 md:right-10 z-30 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="flex bg-black/60 backdrop-blur-xl border border-white/20 rounded-full p-1 shadow-2xl">
          <button
            onClick={handlePrev}
            className="cursor-pointer p-2 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <div className="w-[1px] h-6 bg-white/20 self-center mx-1" />
          
          <button
            onClick={handleNext}
            className="cursor-pointer p-2 rounded-full text-white/70 hover:text-white hover:bg-white/20 transition-all"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Slide Indicators (Bottom Left) */}
      <div className="absolute bottom-10 left-6 md:left-10 z-30 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setCurrentSlide(index);
              setProgress(0);
            }}
            className="group py-2 cursor-pointer"
          >
            <div
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentSlide
                  ? "w-8 bg-purple-500 shadow-[0_0_8px_#a855f7]"
                  : "w-3 bg-white/30 group-hover:bg-white/60"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Subtle Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 z-30">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-fuchsia-400 transition-all duration-100 ease-linear shadow-[0_-1px_8px_rgba(168,85,247,0.4)]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default HomeCarousel;