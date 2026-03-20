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
  Play,
  BookOpen,
  Trophy,
  Sparkles,
  MapPin,
  Rocket,
} from "lucide-react";

import bg_img from "/about_bg.png";
import bg_img2 from "/about_bg2.png";
import hero from "/about_hero.png";

const About = () => {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="bg-[#fafafa] text-slate-900 font-sans overflow-x-hidden selection:bg-purple-200 selection:text-purple-900">
      
      {/* --- 1. HERO SECTION --- */}
      <section className="relative pt-24 pb-20 px-6 lg:px-12 overflow-hidden">
        {/* Ambient Background Glows */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-purple-200/40 to-indigo-100/40 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-100/40 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="z-10"
          >
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-purple-100 shadow-sm text-slate-800 text-xs font-bold uppercase tracking-widest mb-6 cursor-default"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-600"></span>
              </span>
              About Future Believe
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl lg:text-5xl xl:text-6xl font-serif font-bold text-slate-900 mb-5 leading-[1.1] tracking-tight"
            >
              Transforming Digital Time into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600">
                Meaningful Growth.
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-base lg:text-lg text-slate-600 font-light leading-relaxed mb-8 max-w-lg"
            >
              We are a student-focused digital platform built to turn everyday
              screen time into opportunities to learn, engage, compete, and earn
              real rewards.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4"
            >
              <button className="flex items-center gap-2 bg-slate-900 text-white px-6 py-3 text-sm lg:text-base rounded-xl font-semibold hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 cursor-pointer group">
                Join the Movement
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </motion.div>
          </motion.div>

          {/* Right: Actual Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-md lg:max-w-none"
          >
            <div className="relative aspect-square md:aspect-[4/3] rounded-[2rem] overflow-hidden shadow-2xl border border-white/20 group bg-slate-100">
              {/* Image Gradient Overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
              
              <img 
                src={hero} 
                alt="Future Believe Platform" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 2. MISSION & VISION --- */}
      <section className="py-20 px-6 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-purple-50/50 border border-purple-100/50 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
              <Target size={24} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600 leading-relaxed">
              To empower students across India by providing a platform that
              encourages consistent learning, active participation, and personal
              development through a reward-based system. We aim to make
              productivity engaging and accessible to every student, regardless
              of their background.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-blue-50/50 border border-blue-100/50 hover:shadow-lg transition-shadow duration-300"
          >
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
              <Users size={24} />
            </div>
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4">
              Our Vision
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We envision a future where every student uses technology not just
              for entertainment, but as a tool for growth, learning, and
              success. Future Believe strives to become a nationwide platform
              that connects students, encourages talent, and builds a culture of
              continuous improvement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- 3. WHAT WE DO (THE 4 PILLARS) --- */}
      <section className="py-24 px-6 bg-[#fafafa]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-slate-900 mb-4 tracking-tight">
              What We Do
            </h2>
            <p className="text-slate-500 text-base leading-relaxed">
              Future Believe offers four key engagement areas designed to build
              discipline, improve skills, and boost confidence through small
              daily actions.
            </p>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              {
                title: "View & Score",
                desc: "Watch curated content daily and earn rewards upon completion.",
                icon: Play,
                color: "text-blue-500",
                bg: "bg-blue-50",
              },
              {
                title: "Learn & Score",
                desc: "Educational videos designed to enhance your skills and knowledge.",
                icon: BookOpen,
                color: "text-emerald-500",
                bg: "bg-emerald-50",
              },
              {
                title: "Compete & Score",
                desc: "Participate in competitions and showcase your unique talent.",
                icon: Trophy,
                color: "text-amber-500",
                bg: "bg-amber-50",
              },
              {
                title: "Partake",
                desc: "A creative space to complete tasks and share your work through videos.",
                icon: Sparkles,
                color: "text-purple-500",
                bg: "bg-purple-50",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="bg-white p-8 rounded-[1.5rem] border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 group cursor-default relative overflow-hidden"
              >
                <div className="relative z-10">
                  <div
                    className={`w-14 h-14 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
                  >
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <h4 className="font-bold text-xl text-slate-900 mb-3">
                    {item.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* --- 4. OUR APPROACH & NETWORK (Background Image 1) --- */}
      <section
        className="py-20 px-6 text-white relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg_img})` }}
      >
        {/* Dark Overlay for Text Readability */}
        <div className="absolute inset-0 bg-slate-900/85 z-0"></div>
        
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] z-0 mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6 tracking-tight">
                Our Unique Approach
              </h2>
              <p className="text-slate-300 mb-8 leading-relaxed">
                We believe that small daily actions lead to big achievements.
                What makes Future Believe different is our structured daily
                engagement model combined with a real-world reward system.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Daily cycles to build consistency",
                  "Balanced mix of learning and entertainment",
                  "Real opportunities to compete and grow",
                  "Recognition for creativity and participation",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-slate-200"
                  >
                    <CheckCircle2 className="text-purple-400 w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-white/10 border border-white/20 p-8 rounded-[2rem] backdrop-blur-md shadow-2xl"
            >
              <div className="w-12 h-12 bg-indigo-500/30 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="text-indigo-300 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold mb-4">A Nationwide Network</h3>
              <p className="text-slate-200 leading-relaxed mb-6">
                Future Believe operates with a highly structured district-wise
                dealer network across India. This ensures strong local support,
                better grassroots reach, and efficient management.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- 5. THE BRAND VALUE (ENGAGEMENT PROMISE) --- */}
      <section className="py-24 px-6 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-100 bg-purple-50 text-purple-700 text-xs font-bold mb-6">
              <ShieldCheck size={14} />
              For Brands & Advertisers
            </div>

            <h2 className="text-3xl md:text-5xl font-serif font-bold text-slate-900 mb-6 tracking-tight">
              The 30-Second Promise
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed mb-12">
              The rewards we give to students are powered by brands who want{" "}
              <strong className="text-slate-900">
                verifiable human attention
              </strong>
              . On our platform, a "view" means a real student actively watched
              at least 30 seconds of your video. No skips. No fake bot traffic.
            </p>

            <div className="grid sm:grid-cols-3 gap-6 text-left">
              {[
                { title: "Unskippable Native Content", icon: Play },
                { title: "100% Real Human Verified", icon: Users },
                { title: "Pay Only for Real Value", icon: Zap },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-50 p-6 rounded-2xl border border-slate-100 hover:border-purple-200 hover:bg-white hover:shadow-lg transition-all duration-300"
                >
                  <item.icon className="w-6 h-6 text-purple-600 mb-4" />
                  <h4 className="font-bold text-slate-900 text-sm md:text-base">
                    {item.title}
                  </h4>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- 6. CTA SECTION (Background Image 2) --- */}
      <section 
        className="py-24 px-6 text-center relative overflow-hidden bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bg_img2})` }}
      >
        {/* Deep dark overlay to make text pop while letting the bg image show through slightly */}
        <div className="absolute inset-0 bg-slate-950/85 z-0"></div>
        
        {/* Glow Effect behind text */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-full bg-gradient-to-b from-purple-900/50 to-transparent blur-[120px] pointer-events-none z-0"></div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-5 tracking-tight">
            Ready to be part of the future?
          </h2>
          <p className="text-slate-300 mb-10 text-base md:text-lg font-light">
            Whether you are a student ready to learn and earn, or a brand
            looking for real engagement—Future Believe is where you belong.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="w-full sm:w-auto bg-gradient-to-r from-purple-600 to-indigo-600 text-white cursor-pointer px-8 py-3.5 rounded-xl font-bold text-sm lg:text-base hover:from-purple-500 hover:to-indigo-500 transition-all duration-300 shadow-xl shadow-purple-900/50 hover:shadow-purple-600/40 hover:-translate-y-1">
              Get Started Today
            </button>
            <button className="w-full sm:w-auto bg-white/10 text-white cursor-pointer px-8 py-3.5 rounded-xl font-bold text-sm lg:text-base hover:bg-white/20 transition-all duration-300 backdrop-blur-md border border-white/10 hover:border-white/30">
              Become a Dealer
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default About;