import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "Digital Creator",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150",
    quote: "Future Believe transformed how I monetize. The revenue model is transparent.",
  },
  {
    name: "David Chen",
    role: "EdTech Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150",
    quote: "The security features are unmatched. Finally, a platform that takes IP seriously.",
  },
  {
    name: "Elena Rodriguez",
    role: "Brand Ambassador",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150",
    quote: "I started with zero experience. In 3 months, I've built a sustainable income stream.",
  },
  {
    name: "Marcus Johnson",
    role: "Video Producer",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150",
    quote: "It's like having a production house in your pocket. The tools are studio-quality.",
  },
  {
    name: "Priya Patel",
    role: "Course Creator",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&w=150&h=150",
    quote: "Future Believe solved my scaling issues instantly. My reach has tripled.",
  },
  {
    name: "James Wilson",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&h=150",
    quote: "We switched our entire agency over. The growth metrics speak for themselves.",
  },
];

const ReviewCard = ({ data }) => (
  <div className="w-[300px] md:w-[350px] bg-white p-6 rounded-2xl border border-slate-100 shadow-sm mx-3 flex-shrink-0 hover:shadow-md transition-shadow duration-300">
    <div className="flex items-center gap-1 mb-4">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={14} className="fill-purple-500 text-purple-500" />
      ))}
    </div>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 font-medium">
      "{data.quote}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={data.image}
        alt={data.name}
        className="w-10 h-10 rounded-full object-cover border border-slate-100"
      />
      <div>
        <h4 className="text-slate-900 font-bold text-sm">{data.name}</h4>
        <p className="text-slate-400 text-xs font-medium">{data.role}</p>
      </div>
    </div>
  </div>
);

const AutoScrollTestimonials = () => {
  return (
    <section className="py-20 bg-[#FAF9F6] border-t border-slate-200 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
        <span className="text-purple-600 font-bold tracking-widest uppercase text-[10px] mb-3 block">
          Community Feedback
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          Trusted by <span className="text-purple-600">Innovators.</span>
        </h2>
      </div>

      {/* --- Marquee Container --- */}
      <div className="relative w-full">
        {/* Left Fade Gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10 pointer-events-none" />
        {/* Right Fade Gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FAF9F6] to-transparent z-10 pointer-events-none" />

        {/* Moving Row */}
        <div className="flex w-max animate-scroll hover:pause">
          {/* Render list twice to create seamless loop */}
          {[...testimonials, ...testimonials, ...testimonials].map((item, idx) => (
            <ReviewCard key={idx} data={item} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.33%); /* Move 1/3 because we tripled the list */
          }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .hover\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default AutoScrollTestimonials;