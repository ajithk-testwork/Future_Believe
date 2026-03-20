import React from "react";
import { motion } from "framer-motion";
import { 
  UserPlus, 
  Activity, 
  PlayCircle, 
  Trophy, 
  TrendingUp,
  ArrowRight
} from "lucide-react";

// Assuming these are your imported images
import img1 from "../../public/step1.jpeg";
import img2 from "../../public/step2.jpeg";
import img3 from "../../public/step3.jpeg";
import img4 from "../../public/step4.jpeg";
import img5 from "../../public/step5.jpeg";

const steps = [
  {
    id: 1,
    title: "Create Your Profile",
    description:
      "Get started in just a few seconds by creating your personalized profile. Join a thriving ecosystem of over 100,000 ambitious students and unlock access to a powerful platform designed to accelerate your growth, learning, and earning potential. Set up your preferences to receive the most relevant opportunities tailored to your interests.",
    icon: UserPlus,
    image: img1,
    color: "text-blue-600",
    bg: "bg-blue-100/50",
    accent: "bg-blue-600",
    shadow: "shadow-blue-500/20"
  },
  {
    id: 2,
    title: "Daily Engagement",
    description:
      "Stay active and maximize your opportunities by logging in daily. Discover fresh campaigns, trending content, and interactive activities curated specifically for you. Our intelligent system ensures you always have access to the most relevant and engaging tasks, helping you stay consistent and ahead of the curve.",
    icon: Activity,
    image: img2,
    color: "text-purple-600",
    bg: "bg-purple-100/50",
    accent: "bg-purple-600",
    shadow: "shadow-purple-500/20"
  },
  {
    id: 3,
    title: "Watch, Learn & Act",
    description:
      "Dive into high-quality video content from top brands and educators. Watch engaging videos, complete simple yet meaningful actions, and gain valuable insights along the way. Every interaction is designed to enhance your knowledge while keeping the experience enjoyable, interactive, and rewarding.",
    icon: PlayCircle,
    image: img3,
    color: "text-pink-600",
    bg: "bg-pink-100/50",
    accent: "bg-pink-600",
    shadow: "shadow-pink-500/20"
  },
  {
    id: 4,
    title: "Earn Rewards",
    description:
      "Turn your time into tangible value. Earn points and rewards for every activity you complete, including watching videos, engaging with campaigns, and finishing tasks. Even a 30-second interaction contributes to your progress. The more you participate, the more you earn—making every moment on the platform worthwhile.",
    icon: Trophy,
    image: img4,
    color: "text-amber-600",
    bg: "bg-amber-100/50",
    accent: "bg-amber-600",
    shadow: "shadow-amber-500/20"
  },
  {
    id: 5,
    title: "Grow Consistently",
    description:
      "Track your progress, climb the leaderboard, and unlock exclusive perks as you stay consistent. Build your reputation within the community, gain recognition for your efforts, and access premium opportunities. Your journey on the platform is not just about earning—it's about continuous growth and long-term success.",
    icon: TrendingUp,
    image: img5,
    color: "text-green-600",
    bg: "bg-green-100/50",
    accent: "bg-green-600",
    shadow: "shadow-green-500/20"
  },
];

const HowItWorks = () => {
  return (
    <section className="relative py-24 bg-white overflow-hidden font-sans">
      {/* Soft Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
        <div className="absolute top-[5%] left-[5%] w-96 h-96 bg-purple-100/80 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[10%] right-[5%] w-96 h-96 bg-blue-100/80 rounded-full blur-[120px] opacity-60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-500 text-lg leading-relaxed"
          >
           At Future Believe App, we amplify your educational videos by showcasing them to a highly engaged community of knowledge aspirants. Our platform is designed to
            boost your visibility, expand your reach, and connect your content with students who truly value learning.
          </motion.p>
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Vertical Center Line (Desktop) - Changed to dashed for modern look */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] border-l-2 border-dashed border-gray-200 hidden md:block" />

          <div className="space-y-16 md:space-y-32">
            {steps.map((step, index) => {
              const Icon = step.icon;
              // true for index 1, 3 (Steps 2, 4). We use this to reverse the flex layout.
              const isReversed = index % 2 !== 0; 

              return (
                <div 
                  key={step.id} 
                  className={`relative flex flex-col md:flex-row items-center justify-between group ${
                    isReversed ? "md:flex-row-reverse" : ""
                  }`}
                >
                  
                  {/* Image Section - Adjusted sizes */}
                  <motion.div 
                    initial={{ opacity: 0, x: isReversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="w-full md:w-[45%] flex justify-center mb-8 md:mb-0"
                  >
                    {/* Added max-w-[340px] to decrease and standardize image sizes */}
                    <div className={`relative w-full max-w-[400px] rounded-3xl overflow-hidden shadow-2xl ${step.shadow} transition-transform duration-500 hover:-translate-y-2`}>
                      <img 
                        src={step.image} 
                        alt={step.title} 
                        className="w-100% h-auto object-cover transform hover:scale-105 transition-transform duration-700 bg-gray-50" 
                      />
                    </div>
                  </motion.div>

                  {/* Center Number Bubble */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center z-20 hidden md:flex">
                    <motion.div 
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                      className={`w-14 h-14 rounded-full border-[6px] border-white shadow-lg flex items-center justify-center text-white font-black text-xl ${step.accent} transition-transform group-hover:scale-110`}
                    >
                      {step.id}
                    </motion.div>
                  </div>

                  {/* Text/Content Section */}
                  <motion.div 
                    initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                    className={`w-full md:w-[45%] flex ${isReversed ? "md:justify-end" : "md:justify-start"}`}
                  >
                    <div className="relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 text-left w-full max-w-md">
                      <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 ${step.bg}`}>
                        <Icon size={28} className={step.color} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                      <p className="text-gray-500 leading-relaxed text-base md:text-lg">{step.description}</p>
                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>
        </div>

       
      </div>
    </section>
  );
};

export default HowItWorks;