import React, { useState, useEffect } from "react";

const HomeCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      id: 1,
      title: "Promote Your Videos",
      subtitle: "to Millions of Students",
      description: "Get More Views On Your Video, Sign up now and Get Seen",
    },
    {
      id: 2,
      title: "Boost Your Video Reach",
      subtitle: "Instantly & Effectively",
      description: "Join thousands of creators growing their audience",
    },
    {
      id: 3,
      title: "Maximum Visibility",
      subtitle: "For Your Content",
      description: "Reach the right audience at the right time",
    },
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Background animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      const bgElements = document.querySelectorAll('.bg-animate');
      bgElements.forEach(el => {
        el.style.transform = `translate(${Math.random() * 20 - 10}px, ${Math.random() * 20 - 10}px)`;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full overflow-hidden h-screen">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900 via-black to-blue-900">
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        {/* Animated Circles */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mix-blend-screen opacity-[0.03] animate-pulse bg-animate"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-full mix-blend-screen opacity-[0.03] animate-pulse delay-1000 bg-animate"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-yellow-600 to-orange-600 rounded-full mix-blend-screen opacity-[0.02] animate-pulse delay-500 bg-animate"></div>
        
        {/* Corner Accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-purple-500 opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-blue-500 opacity-10"></div>
      </div>

      {/* Slides Container - Add pt-20 to account for navbar height */}
      <div className="relative z-10 h-full pt-20">
        <div className="relative w-full h-full overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
              
              {/* Center content properly - changed justify-center to items-center */}
              <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
                <div className="max-w-6xl mx-auto text-center w-full">
                  {/* Adjust text size for better centering */}
                  <div className="mb-6 md:mb-8 overflow-hidden">
                    <h1 className="text-white text-3xl md:text-5xl lg:text-6xl font-bold uppercase leading-[0.9] md:leading-[0.85] tracking-tight md:tracking-tighter">
                      <div className="overflow-hidden mb-1 md:mb-2">
                        <div className={`transition-all duration-1000 delay-200 ${
                          index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-purple-200 to-pink-200">
                            {slide.title}
                          </span>
                        </div>
                      </div>
                      <div className="overflow-hidden">
                        <div className={`transition-all duration-1000 delay-500 ${
                          index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                        }`}>
                          <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-200 via-purple-200 to-blue-200">
                            {slide.subtitle}
                          </span>
                        </div>
                      </div>
                    </h1>
                  </div>

                  <div className={`transition-all duration-1000 delay-800 ${
                    index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}>
                    <p className="text-gray-300 text-lg md:text-xl lg:text-2xl font-light tracking-wider mb-8 md:mb-12">
                      {slide.description}
                    </p>
                  </div>

                  {/* Google Play Button - Only show on first slide */}
                  {index === 0 && (
                    <div className={`transition-all duration-1000 delay-1100 ${
                      index === currentSlide ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                    }`}>
                      <div className="relative group inline-block">
                        {/* Glow Effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl blur-lg opacity-50 group-hover:opacity-80 transition duration-500"></div>
                        
                        <button className="relative px-8 md:px-10 py-3 md:py-4 bg-gradient-to-r from-purple-800 via-purple-900 to-blue-900 text-white font-bold rounded-xl hover:shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 hover:-translate-y-1 active:scale-95 flex items-center gap-3 md:gap-4">
                          <div className="flex flex-col items-start">
                            <span className="text-xs md:text-sm font-normal opacity-80 tracking-wider">GET IT ON</span>
                            <span className="text-xl md:text-2xl font-bold tracking-tight">Google Play</span>
                          </div>
                          <div className="w-6 h-6 md:w-8 md:h-8">
                            <svg viewBox="0 0 24 24" fill="white">
                              <path d="M3 20.5v-17c0-.58.34-1 .5-1h17c.16 0 .5.42.5 1v17c0 .58-.34 1-.5 1h-17c-.16 0-.5-.42-.5-1z"/>
                            </svg>
                          </div>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Dots Indicator - Adjust position */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide 
                  ? 'bg-white w-8' 
                  : 'bg-gray-400 hover:bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Floating Elements - Adjust positions to not interfere with content */}
      <div className="absolute top-32 left-10 w-2 h-2 bg-purple-400 rounded-full animate-float"></div>
      <div className="absolute bottom-48 right-10 w-3 h-3 bg-blue-400 rounded-full animate-float delay-1000"></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-float delay-500"></div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          33% { transform: translateY(-20px) translateX(10px); }
          66% { transform: translateY(10px) translateX(-10px); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default HomeCarousel;