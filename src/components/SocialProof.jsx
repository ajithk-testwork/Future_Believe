import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Eye, Users, ArrowUpRight } from "lucide-react";

// --- FAKE BRAND LOGOS ---
const brands = [
  "TechFlow", "EduVibe", "BrandScale", "FutureGen", "NextLevel", "UrbanPulse", "SkyHigh", "GrowthX"
];

// --- CAMPAIGN DATA (Instead of Testimonials) ---
const campaigns = [
  {
    id: 1,
    brand: "UrbanPulse",
    title: "Summer Student Fest",
    category: "Event Promotion",
    stats: "120k+ Views",
    image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-600 to-blue-600"
  },
  {
    id: 2,
    brand: "TechFlow",
    title: "Gadget Review Blitz",
    category: "Product Launch",
    stats: "45% Engagement",
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=600&q=80",
    color: "from-blue-600 to-cyan-600"
  },
  {
    id: 3,
    brand: "EduVibe",
    title: "Scholarship Drive 2026",
    category: "Education",
    stats: "5k+ Signups",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
    color: "from-purple-500 to-pink-600"
  },
];

const SocialProof = () => {
  return (
    <div className="bg-white py-24 font-sans overflow-hidden">
      
      {/* --- 1. TRUSTED PARTNERS MARQUEE --- */}
      <div className="mb-32">
        <p className="text-center text-xs font-bold text-slate-400 uppercase tracking-[0.3em] mb-10">
          Powering Campaigns For
        </p>
        
        <div className="relative flex overflow-x-hidden group">
          {/* Gradient Masks */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10"></div>

          {/* Scrolling Track */}
          <div className="animate-marquee flex gap-16 items-center whitespace-nowrap px-8">
            {[...brands, ...brands, ...brands].map((brand, index) => (
              <span 
                key={index} 
                className="text-3xl md:text-5xl font-serif font-bold text-slate-200 hover:text-slate-900 transition-colors duration-500 cursor-default select-none"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* --- 2. CAMPAIGN SPOTLIGHT (Replaces Testimonials) --- */}
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Trending <span className="text-purple-600">Campaigns</span>
            </h2>
            <p className="text-slate-500 max-w-lg text-lg">
              Don't just take our word for it. See the results we are delivering for brands right now.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-slate-900 hover:text-purple-600 transition-colors">
            View Case Studies <ArrowUpRight size={18} />
          </button>
        </div>

        {/* Campaign Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {campaigns.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="group relative h-[450px] rounded-[2rem] overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <img 
                src={item.image} 
                alt={item.title} 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Live Badge */}
              <div className="absolute top-6 left-6 flex items-center gap-2 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
                </span>
                <span className="text-[10px] font-bold text-white uppercase tracking-wider">Live Now</span>
              </div>

              {/* Content Content */}
              <div className="absolute bottom-0 left-0 w-full p-8">
                {/* Brand Tag */}
                <div className={`inline-block px-3 py-1 rounded-lg bg-gradient-to-r ${item.color} text-white text-[10px] font-bold uppercase tracking-wider mb-3`}>
                  {item.brand}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-2 leading-tight group-hover:text-purple-200 transition-colors">
                  {item.title}
                </h3>
                
                <div className="w-12 h-1 bg-white/30 rounded-full mb-6 group-hover:w-full group-hover:bg-purple-500 transition-all duration-500"></div>

                {/* Stats Row */}
                <div className="flex items-center justify-between text-white/80">
                  <div className="flex items-center gap-2">
                    <TrendingUp size={18} className="text-green-400" />
                    <span className="text-sm font-bold text-white">{item.stats}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs uppercase tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-2 group-hover:translate-y-0">
                      View Report
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center group-hover:bg-purple-500 group-hover:text-white transition-colors">
                      <ArrowUpRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-12 text-center md:hidden">
           <button className="text-purple-600 font-bold uppercase tracking-widest text-sm border-b border-purple-200 pb-1">
             View All Campaigns
           </button>
        </div>

      </div>

      {/* --- CSS FOR MARQUEE --- */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default SocialProof;