
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
import playstore from "/PlayStore Png.png";

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
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div className="overflow-hidden bg-gray-50 text-gray-800 font-sans">
      
      {/* --- HERO SECTION --- */}
      <section 
        className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 bg-cover bg-center"
       
      >
        <div className="absolute inset-0 bg-white/90"></div> {/* Overlay for readability */}
        
        <motion.div 
          className="relative max-w-7xl mx-auto px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <div className="flex-1 space-y-6">
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-semibold text-sm">
              <Sparkles className="w-4 h-4" />
              <span>Welcome to Future Believe</span>
            </motion.div>
            
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Creating Strong Brands for a Better World
            </motion.h1>
            
            <motion.p variants={fadeUp} className="text-lg text-gray-600 leading-relaxed">
              We've been creating strong brands for both socially and environmentally conscious companies, 
              creating a powerful and lasting footprint for our clients.
            </motion.p>

           
          </div>

          {/* Hero Image */}
          <motion.div variants={fadeUp} className="flex-1 w-full max-w-lg lg:max-w-none">
            <img 
              src={hero} 
              alt="Brand Marketing Dashboard" 
              className="w-full h-[450px] rounded-2xl shadow-2xl shadow-indigo-100/50 object-cover"
            />
          </motion.div>
        </motion.div>
      </section>

     
      {/* --- ENGAGEMENT / APP MECHANICS SECTION --- */}
      <section className="py-20 bg-gray-900 text-white overflow-hidden">
        <motion.div 
          className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-16"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp} className="flex-1 space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Unmatched Viewer Engagement
            </h2>
            <p className="text-gray-300 text-lg">
              We focus purely on engaging the viewers. Our app is intentionally designed so that viewers cannot skip, forward, or stop the video until completion.
            </p>
            
            <ul className="space-y-5">
              {[
                { icon: Play, text: "Non-skippable, uninterrupted video play" },
                { icon: Clock, text: "Minimum 30-second view guarantee" },
                { icon: CheckCircle2, text: "100% verified real human viewers" },
                { icon: Zap, text: "Most effective video branding solution available" }
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-gray-200">
                  <div className="bg-indigo-500/20 p-2 rounded-full text-indigo-400">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={fadeUp} className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-500 rounded-full blur-3xl opacity-20"></div>
              {/* Using the playstore image here as a prominent CTA for the app */}
              <div className="relative bg-gray-800 p-8 rounded-3xl border border-gray-700 shadow-2xl flex flex-col items-center text-center space-y-6">
                <h3 className="text-2xl font-bold">Reach our audience today</h3>
                <p className="text-gray-400 text-sm max-w-xs">Download Future Believe to see how our students engage with premium brand content.</p>
                <img src={playstore} alt="Get it on Google Play" className="h-16 w-auto cursor-pointer hover:scale-105 transition-transform" />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>

       {/* --- HOW IT WORKS / SOLUTION SECTION --- */}
      <section className="py-20 bg-white">
        <motion.div 
          className="max-w-7xl mx-auto px-6 lg:px-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={fadeUp} className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Stand Out From The Crowd</h2>
            <p className="text-gray-600">
              The digital space is crowded. Thousands of brand videos are uploaded every minute. 
              How do you get seen? We take your brand video and push it out through our powerful, exclusive network.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">1,00,000+ Students</h3>
              <p className="text-gray-600">
                Display your brand video directly to a massive, real audience of students right inside our app.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Precision Targeting</h3>
              <p className="text-gray-600">
                Filter and target your ideal audience by age, gender, location, and specific keywords.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-14 h-14 bg-green-100 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Guaranteed Views</h3>
              <p className="text-gray-600">
                You only pay when a real person watches a minimum of 30 seconds of your complete video.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </section>


      {/* --- VISION & MISSION SECTION --- */}
      <section 
        className="py-24 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${bg_img2})` }}
      >
        <div className="absolute inset-0 bg-indigo-900/90 mix-blend-multiply"></div>
        
        <motion.div 
          className="relative max-w-4xl mx-auto px-6 text-center text-white space-y-10"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUp}>
            <Rocket className="w-16 h-16 mx-auto mb-6 text-indigo-300" />
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Vision & Mission</h2>
            <p className="text-xl text-indigo-100 leading-relaxed font-light">
              We believe that everything is achievable with hard work, passion, and commitment. We enable students to achieve their ambition and enjoy the best in life. 
            </p>
          </motion.div>

          <motion.div variants={fadeUp} className="grid md:grid-cols-2 gap-6 pt-8 text-left">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <Trophy className="w-8 h-8 text-yellow-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">Our Dream</h4>
              <p className="text-indigo-100 text-sm leading-relaxed">
                To see everyone living a life filled with passion and happiness. The day when everyone will have uninterrupted access to their education.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <BookOpen className="w-8 h-8 text-green-400 mb-4" />
              <h4 className="text-xl font-bold mb-2">Our Priority</h4>
              <p className="text-indigo-100 text-sm leading-relaxed">
                Online resource provision is our top priority. We project ourselves to be the leading provider of online educational resources, solutions, and improvement ideas across the globe.
              </p>
            </div>
          </motion.div>
        </motion.div>

      </section>

    </div>
  );
};

export default About;