import React from "react";
import { motion } from "framer-motion";
import { 
  Target, 
  Users, 
  Clock, 
  ShieldCheck, 
  ArrowRight,
  CheckCircle2,
  Zap,
  TrendingUp
} from "lucide-react";

const About = () => {
  // Animation Variants for reusability
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white text-slate-900 font-sans overflow-x-hidden selection:bg-purple-100 selection:text-purple-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-32 pb-24 px-6 lg:px-12 border-b border-gray-100 overflow-hidden">
        {/* Background decorative blob */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px] -z-10 translate-x-1/3 -translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 text-white text-xs font-bold uppercase tracking-widest mb-8">
                <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse"></span>
                Who We Are
             </motion.div>
             
             <motion.h1 variants={fadeUp} className="text-5xl lg:text-7xl font-serif font-bold text-slate-900 mb-8 leading-[1.1]">
               Brands That <br />
               <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-indigo-600">
                 Truly Connect.
               </span>
             </motion.h1>
             
             <motion.p variants={fadeUp} className="text-xl text-slate-600 font-light leading-relaxed mb-10 max-w-lg">
               We cut through the digital noise. By connecting brands with <span className="font-semibold text-slate-900">100,000+ active students</span>, we deliver engagement that actually counts.
             </motion.p>
             
             <motion.div variants={fadeUp} className="flex items-center gap-10">
                <div className="flex flex-col">
                   <span className="text-4xl font-serif font-bold text-slate-900">100k+</span>
                   <span className="text-sm text-slate-500 uppercase tracking-wide mt-1">Active Students</span>
                </div>
                <div className="w-px h-12 bg-slate-200"></div>
                <div className="flex flex-col">
                   <span className="text-4xl font-serif font-bold text-slate-900">Zero</span>
                   <span className="text-sm text-slate-500 uppercase tracking-wide mt-1">Fake Views</span>
                </div>
             </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             {/* Abstract Graphic Representation */}
             <div className="relative aspect-square md:aspect-[4/3] bg-slate-950 rounded-[2.5rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 to-purple-900 opacity-90"></div>
                {/* Floating UI Elements for 'Tech' feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
                   <div className="w-64 h-64 border border-purple-500/30 rounded-full flex items-center justify-center animate-[spin_10s_linear_infinite]">
                      <div className="w-48 h-48 border border-purple-400/50 rounded-full"></div>
                   </div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                   <Target className="w-16 h-16 text-purple-400 mb-4" />
                   <h3 className="text-2xl font-bold text-white">Precision Targeting</h3>
                   <p className="text-purple-200 mt-2">Reaching the right audience, every time.</p>
                </div>
             </div>
             
             {/* Floating Badge */}
             <motion.div 
               whileHover={{ y: -5 }}
               className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-4 max-w-xs"
             >
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                   <TrendingUp size={24} />
                </div>
                <div>
                   <p className="font-bold text-slate-900 text-lg">350%</p>
                   <p className="text-sm text-slate-500">Avg. Engagement Rate</p>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- 2. THE COMPARISON SECTION --- */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="text-center max-w-2xl mx-auto mb-16"
           >
             <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6">The Digital Dilemma</h2>
             <p className="text-slate-600 text-lg">
               Traditional advertising is broken. We fixed it by focusing on human attention.
             </p>
           </motion.div>

           <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
             {/* The Old Way */}
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-white p-10 rounded-3xl border border-slate-200 opacity-70 hover:opacity-100 transition-all duration-300"
             >
                <div className="flex items-center gap-3 mb-8">
                   <div className="p-3 bg-red-100 rounded-xl text-red-500">
                     <Zap size={24} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">The Old Way</h3>
                </div>
                <ul className="space-y-6">
                   {["Skipped Ads & Banners", "Fake Bot Traffic", "Wasted Budget"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-slate-500">
                        <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-sm font-bold">✕</span>
                        <span className="text-lg">{item}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>

             {/* The Future Believe Way */}
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-slate-900 p-10 rounded-3xl shadow-2xl relative overflow-hidden text-white"
             >
                {/* Purple Glow Effect */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 blur-[80px] opacity-30 rounded-full pointer-events-none"></div>

                <div className="absolute top-0 right-0 bg-purple-600 text-white text-xs font-bold px-6 py-2 rounded-bl-2xl">
                   RECOMMENDED
                </div>
                <div className="flex items-center gap-3 mb-8 relative z-10">
                   <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
                     <ShieldCheck size={24} />
                   </div>
                   <h3 className="text-2xl font-bold">Future Believe</h3>
                </div>
                <ul className="space-y-6 relative z-10">
                   {["Unskippable Content", "Real Human Verified", "Pay for Value"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-purple-50">
                        <span className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold">✓</span>
                        <span className="text-lg font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>
           </div>
        </div>
      </section>

      {/* --- 3. BLACK & PURPLE BANNER (ENGAGEMENT) --- */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
         {/* Background Patterns */}
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
         
         <div className="max-w-4xl mx-auto text-center relative z-10">
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-bold mb-8"
             >
                <Clock size={16} />
                The 30-Second Promise
             </motion.div>
             
             <motion.h2 
               initial={{ scale: 0.9, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="text-4xl md:text-7xl font-serif font-bold mb-8 leading-tight"
             >
                If they don't watch,<br />
                <span className="text-purple-500">you don't pay.</span>
             </motion.h2>
             
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto mb-16 leading-relaxed"
             >
                We redefined engagement. A "view" on our platform means a real person watched at least 30 seconds of your video. No skips. No bots.
             </motion.p>

             {/* Animated Progress Visual */}
             <div className="max-w-xl mx-auto">
               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">
                  <span>Start</span>
                  <span className="text-purple-400">Guaranteed View</span>
               </div>
               <div className="w-full bg-slate-800 rounded-full h-3 overflow-hidden shadow-inner">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className="h-full bg-gradient-to-r from-purple-700 to-purple-500"
                  ></motion.div>
               </div>
             </div>
         </div>
      </section>

      {/* --- 4. FEATURES GRID --- */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4">Precision Targeting</h2>
                    <p className="text-slate-500 max-w-md">
                       We ensure your message reaches the right students based on real data points.
                    </p>
                </div>
                <button className="text-purple-600 font-bold flex items-center gap-2 hover:gap-4 transition-all">
                    See our network <ArrowRight size={20} />
                </button>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6"
            >
                {[
                    { title: "Age Group", icon: Users },
                    { title: "Education", icon: Target },
                    { title: "Geo-Location", icon: ArrowRight },
                    { title: "Interests", icon: CheckCircle2 },
                ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeUp}
                      whileHover={{ y: -5 }}
                      className="bg-gray-50 hover:bg-white p-8 rounded-2xl border border-transparent hover:border-purple-100 hover:shadow-xl transition-all duration-300 group cursor-default"
                    >
                        <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <item.icon className="w-6 h-6 text-slate-400 group-hover:text-purple-600 transition-colors" />
                        </div>
                        <h4 className="font-bold text-lg text-slate-900">{item.title}</h4>
                        <div className="w-8 h-1 bg-slate-200 group-hover:bg-purple-500 mt-4 rounded-full transition-colors" />
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- 5. CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-purple-50 border-t border-purple-100">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
            <h2 className="text-4xl font-serif font-bold text-slate-900 mb-6">Ready to be seen?</h2>
            <p className="text-slate-600 mb-10 text-lg">
                Join the platform where every view counts and every message matters.
            </p>
            <button className="bg-slate-900 text-white cursor-pointer px-10 py-4 rounded-lg font-bold hover:bg-purple-600 transition-colors duration-300 shadow-xl shadow-purple-900/10 hover:shadow-purple-600/30">
                Start Your Campaign
            </button>
        </motion.div>
      </section>

    </div>
  );
};

export default About;