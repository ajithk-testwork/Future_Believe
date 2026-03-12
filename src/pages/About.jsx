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
  TrendingUp,
  Play
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
    <div className="bg-[#fafafa] text-slate-900 font-sans overflow-x-hidden selection:bg-purple-200 selection:text-purple-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Advanced Background Gradients */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-indigo-100/40 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="z-10"
          >
             <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm text-slate-800 text-xs font-bold uppercase tracking-widest mb-6 cursor-default">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
                </span>
                Who We Are
             </motion.div>
             
             <motion.h1 variants={fadeUp} className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight">
                Brands That <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600">
                  Truly Connect.
                </span>
             </motion.h1>
             
             <motion.p variants={fadeUp} className="text-base lg:text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-lg">
                We cut through the digital noise. By connecting brands with <span className="font-semibold text-slate-900">100,000+ active students</span>, we deliver engagement that actually counts.
             </motion.p>
             
             <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-4 mb-10">
                <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-sm lg:text-base rounded-xl font-semibold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group">
                  Start Campaign 
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center gap-2 px-6 py-3 text-sm lg:text-base rounded-xl font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 cursor-pointer">
                  <Play className="w-4 h-4 text-purple-600 fill-purple-600" />
                  See How it Works
                </button>
             </motion.div>

             <motion.div variants={fadeUp} className="flex items-center gap-8 lg:gap-12">
                <div className="flex flex-col">
                   <span className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">100k+</span>
                   <span className="text-[10px] lg:text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">Active Students</span>
                </div>
                <div className="w-px h-10 bg-slate-200"></div>
                <div className="flex flex-col">
                   <span className="text-3xl lg:text-4xl font-serif font-bold text-slate-900">Zero</span>
                   <span className="text-[10px] lg:text-xs text-slate-500 uppercase tracking-widest mt-1 font-medium">Fake Views</span>
                </div>
             </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md lg:max-w-none"
          >
             {/* Premium Abstract Graphic */}
             <div className="relative aspect-square md:aspect-[4/3] bg-slate-950 rounded-[2rem] overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-indigo-900 opacity-90 transition-opacity duration-500 group-hover:opacity-100"></div>
                
                {/* Grid Pattern overlay */}
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>

                {/* Floating UI Elements for 'Tech' feel */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center pointer-events-none">
                   <div className="w-56 h-56 border border-purple-500/20 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite]">
                      <div className="w-40 h-40 border border-indigo-400/30 rounded-full border-dashed"></div>
                   </div>
                </div>
                
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6 z-10 cursor-pointer">
                   <div className="w-16 h-16 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                     <Target className="w-8 h-8 text-purple-400" />
                   </div>
                   <h3 className="text-xl font-bold text-white mb-2">Precision Targeting</h3>
                   <p className="text-slate-400 text-sm font-light">Reaching the exact right audience, <br/>every single time.</p>
                </div>
             </div>
             
             {/* Glassmorphism Floating Badge */}
             <motion.div 
               animate={{ y: [0, -10, 0] }}
               transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
               className="absolute -bottom-6 -left-6 lg:-left-8 bg-white/80 backdrop-blur-xl p-5 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] border border-white flex items-center gap-4 max-w-xs cursor-default"
             >
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-green-500/30">
                   <TrendingUp size={20} />
                </div>
                <div>
                   <p className="font-bold text-slate-900 text-xl">350%</p>
                   <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Avg. Engagement</p>
                </div>
             </motion.div>
          </motion.div>

        </div>
      </section>

      {/* --- 2. THE COMPARISON SECTION --- */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto">
           <motion.div 
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={fadeUp}
             className="text-center max-w-2xl mx-auto mb-16"
           >
             <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">The Digital Dilemma</h2>
             <p className="text-slate-500 text-base">
                Traditional advertising is broken. We fixed it by focusing on verifiable human attention.
             </p>
           </motion.div>

           <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 relative">
             
             {/* The Old Way */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6 }}
               className="bg-[#fafafa] p-8 lg:p-10 rounded-[1.5rem] border border-slate-200 transition-all duration-300 hover:shadow-xl hover:bg-white cursor-default"
             >
                <div className="flex items-center gap-4 mb-8">
                   <div className="w-12 h-12 bg-red-100/50 rounded-xl flex items-center justify-center text-red-500 border border-red-100">
                     <Zap size={20} />
                   </div>
                   <h3 className="text-2xl font-bold text-slate-900">The Old Way</h3>
                </div>
                <ul className="space-y-5">
                   {["Skipped Ads & Banners", "Fake Bot Traffic", "Wasted Marketing Budget"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-slate-600">
                        <span className="w-6 h-6 rounded-full bg-red-50 flex items-center justify-center text-red-500 text-xs font-bold border border-red-100">✕</span>
                        <span className="text-base font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>

             {/* The Future Believe Way */}
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 0.6, delay: 0.2 }}
               className="bg-slate-900 p-8 lg:p-10 rounded-[1.5rem] shadow-2xl relative overflow-hidden text-white cursor-default transform hover:-translate-y-1 transition-transform duration-500"
             >
                {/* Premium Glow Effect */}
                <div className="absolute -top-32 -right-32 w-80 h-80 bg-purple-600/30 blur-[100px] rounded-full pointer-events-none"></div>

                <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-[10px] font-bold px-4 py-1.5 rounded-bl-xl shadow-lg uppercase tracking-wider">
                   Recommended
                </div>
                <div className="flex items-center gap-4 mb-8 relative z-10">
                   <div className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-xl flex items-center justify-center text-purple-400 border border-white/10">
                     <ShieldCheck size={24} />
                   </div>
                   <h3 className="text-2xl font-bold">Future Believe</h3>
                </div>
                <ul className="space-y-5 relative z-10">
                   {["Unskippable Native Content", "100% Real Human Verified", "Pay Only for Real Value"].map((item, i) => (
                     <li key={i} className="flex items-center gap-4 text-purple-50">
                        <span className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-green-500 flex items-center justify-center text-white text-xs font-bold shadow-lg shadow-green-500/20">✓</span>
                        <span className="text-base font-medium">{item}</span>
                     </li>
                   ))}
                </ul>
             </motion.div>
           </div>
        </div>
      </section>

      {/* --- 3. BLACK & PURPLE BANNER (ENGAGEMENT) --- */}
      <section className="py-24 px-6 bg-slate-950 text-white relative overflow-hidden">
         {/* Noise/Texture Background */}
         <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
         
         <div className="max-w-3xl mx-auto text-center relative z-10">
             <motion.div 
               initial={{ y: 20, opacity: 0 }}
               whileInView={{ y: 0, opacity: 1 }}
               viewport={{ once: true }}
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-bold mb-6 backdrop-blur-sm cursor-pointer hover:bg-purple-500/20 transition-colors"
             >
                <Clock size={14} />
                The 30-Second Promise
             </motion.div>
             
             <motion.h2 
               initial={{ scale: 0.95, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               viewport={{ once: true }}
               className="text-3xl md:text-5xl font-serif font-bold mb-6 leading-tight tracking-tight"
             >
                If they don't watch,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  you don't pay.
                </span>
             </motion.h2>
             
             <motion.p 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ delay: 0.2 }}
               className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-12 leading-relaxed font-light"
             >
                We redefined engagement. A "view" on our platform means a real person actively watched at least <strong className="text-white font-semibold">30 seconds</strong> of your video. No skips. No bots.
             </motion.p>

             {/* Animated Progress Visual */}
             <div className="max-w-xl mx-auto bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-sm">
               <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">
                  <span>0:00</span>
                  <span className="text-purple-400 flex items-center gap-1.5">
                    <CheckCircle2 size={14} />
                    Guaranteed View (0:30)
                  </span>
               </div>
               <div className="w-full bg-slate-900 rounded-full h-3 overflow-hidden shadow-inner relative">
                  <motion.div 
                    initial={{ width: "0%" }}
                    whileInView={{ width: "100%" }}
                    transition={{ duration: 2.5, ease: "easeOut", delay: 0.5 }}
                    className="h-full bg-gradient-to-r from-purple-700 via-purple-500 to-indigo-400 relative"
                  >
                    {/* Glowing tip */}
                    <div className="absolute right-0 top-0 bottom-0 w-3 bg-white/50 blur-[3px]"></div>
                  </motion.div>
               </div>
             </div>
         </div>
      </section>

      {/* --- 4. FEATURES GRID --- */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                <div className="max-w-2xl">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">Data-Driven Targeting</h2>
                    <p className="text-slate-500 text-base leading-relaxed">
                       Stop guessing. We ensure your message reaches the exact student demographic you need based on verified, real-time data points.
                    </p>
                </div>
                <button className="text-purple-600 text-sm font-bold flex items-center gap-2 hover:gap-3 transition-all duration-300 cursor-pointer bg-purple-50 px-5 py-2.5 rounded-full hover:bg-purple-100">
                    Explore Network <ArrowRight size={16} />
                </button>
            </div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
                {[
                    { title: "Age Group", desc: "Filter by exact age brackets", icon: Users },
                    { title: "Education", desc: "Target specific degrees & colleges", icon: Target },
                    { title: "Geo-Location", desc: "Pinpoint down to the campus level", icon: ArrowRight },
                    { title: "Interests", desc: "Match with student hobbies", icon: CheckCircle2 },
                ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      variants={fadeUp}
                      className="bg-white p-6 rounded-[1.5rem] border border-slate-100 hover:border-purple-200 hover:shadow-[0_20px_40px_-15px_rgba(88,28,135,0.1)] transition-all duration-300 group cursor-pointer relative overflow-hidden"
                    >
                        {/* Hover Gradient Background */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <div className="relative z-10">
                          <div className="w-12 h-12 bg-slate-50 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-purple-50 transition-all duration-300">
                            <item.icon className="w-6 h-6 text-slate-600 group-hover:text-purple-600 transition-colors" />
                          </div>
                          <h4 className="font-bold text-lg text-slate-900 mb-2">{item.title}</h4>
                          <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                          <div className="w-6 h-1 bg-slate-200 group-hover:bg-purple-500 mt-5 rounded-full transition-all duration-300 group-hover:w-12" />
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
      </section>

      {/* --- 5. CTA SECTION --- */}
      <section className="py-24 px-6 text-center bg-slate-900 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-purple-900/40 to-transparent blur-[120px] pointer-events-none"></div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative z-10"
        >
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-5 tracking-tight">Ready to be seen?</h2>
            <p className="text-slate-300 mb-10 text-base md:text-lg font-light">
                Join the platform where every view is verified, and every advertising dollar actually drives impact.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white cursor-pointer px-8 py-3.5 rounded-xl font-bold text-sm lg:text-base hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-purple-900/50 hover:shadow-purple-600/40 hover:-translate-y-1">
                  Start Your Campaign
              </button>
              <button className="w-full sm:w-auto bg-white/10 text-white cursor-pointer px-8 py-3.5 rounded-xl font-bold text-sm lg:text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-md">
                  Contact Sales
              </button>
            </div>
        </motion.div>
      </section>

    </div>
  );
};

export default About;