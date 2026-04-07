import React, { useState, useEffect } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Digital Creator",
    quote: "Future Believe transformed how I monetize. The revenue model is transparent and incredibly easy to scale.",
  },
  {
    name: "David Chen",
    role: "EdTech Founder",
    quote: "The security features are unmatched. Finally, a platform that takes IP seriously while delivering a great user experience.",
  },
  {
    name: "Elena Rodriguez",
    role: "Brand Ambassador",
    quote: "I started with zero experience. In 3 months, I've built a sustainable income stream. The tools are incredibly intuitive.",
  },
  {
    name: "Marcus Johnson",
    role: "Video Producer",
    quote: "It's like having a production house in your pocket. The tools are studio-quality and completely streamlined my workflow.",
  },
  {
    name: "Priya Patel",
    role: "Course Creator",
    quote: "Future Believe solved my scaling issues instantly. My reach has tripled without any extra administrative overhead.",
  },
  {
    name: "James Wilson",
    role: "Marketing Director",
    quote: "We switched our entire agency over. The growth metrics speak for themselves, and the client support is top-tier.",
  },
];

const CompactTestimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      handleNext();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, currentIndex]);

  const triggerAnimation = (callback) => {
    setIsAnimating(true);
    setTimeout(() => {
      callback();
      setIsAnimating(false);
    }, 300); // Quick fade duration
  };

  const handleNext = () => {
    if (isAnimating) return;
    triggerAnimation(() => {
      setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    });
  };

  const handlePrev = () => {
    if (isAnimating) return;
    triggerAnimation(() => {
      setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    });
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-16 md:py-20 bg-slate-50 font-sans">
      <div 
        className="max-w-4xl mx-auto px-6"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        
        {/* Compact Header */}
        <div className="text-center mb-10">
          <span className="text-[#612c7e] font-bold tracking-[0.15em] uppercase text-xs mb-2 block">
            Client Success
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Innovators
          </h2>
        </div>

        {/* The Text-Only Focus Card */}
        <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-12 relative overflow-hidden">
          
          {/* Subtle Watermark */}
          <Quote className="absolute top-8 left-1/2 -translate-x-1/2 w-32 h-32 text-[#612c7e] opacity-[0.03] pointer-events-none" />

          <div className={`relative z-10 transition-opacity duration-300 ease-in-out ${isAnimating ? "opacity-0" : "opacity-100"}`}>
            
            {/* Stars */}
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={18} className="fill-[#612c7e] text-[#612c7e]" />
              ))}
            </div>

            {/* Quote (Fixed minimum height prevents the card from jumping up and down) */}
            <div className="min-h-[120px] md:min-h-[100px] flex items-center justify-center">
              <p className="text-xl md:text-2xl text-slate-700 text-center font-medium leading-relaxed max-w-3xl mx-auto">
                "{current.quote}"
              </p>
            </div>

            {/* Author and Inline Controls */}
            <div className="flex items-center justify-between pt-8 mt-8 border-t border-slate-100 max-w-xl mx-auto">
              
              <button 
                onClick={handlePrev}
                className="p-3 text-slate-400 hover:text-[#612c7e] hover:bg-slate-50 rounded-full transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} />
              </button>

              <div className="text-center px-4">
                <h4 className="font-bold text-slate-900 text-lg">{current.name}</h4>
                <p className="text-[#612c7e] font-medium text-sm mt-1 uppercase tracking-wide">
                  {current.role}
                </p>
              </div>

              <button 
                onClick={handleNext}
                className="p-3 text-slate-400 hover:text-[#612c7e] hover:bg-slate-50 rounded-full transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} />
              </button>
              
            </div>
          </div>
        </div>

        {/* Minimalist Progress Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                if (!isAnimating && idx !== currentIndex) {
                  triggerAnimation(() => setCurrentIndex(idx));
                }
              }}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? "w-8 bg-[#612c7e]" 
                  : "w-2 bg-slate-300 hover:bg-[#612c7e]/50"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default CompactTestimonials;