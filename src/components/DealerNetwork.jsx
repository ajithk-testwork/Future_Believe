import React from "react";
import { motion } from "framer-motion";
import { MapPin, ShieldCheck, Zap, ArrowRight } from "lucide-react";
// Make sure to adjust this import path to where you save the image
import networkImage from "../../public/dealer_network1.png"; 

const features = [
  {
    icon: MapPin,
    title: "Hyper-Local Support",
    description: "Dedicated dealers ensure hands-on assistance tailored to the unique needs of every specific district.",
  },
  {
    icon: Zap,
    title: "Operational Excellence",
    description: "A decentralized model that guarantees smooth operations, rapid problem resolution, and better community reach.",
  },
  {
    icon: ShieldCheck,
    title: "Scalable Infrastructure",
    description: "Designed to expand the platform's footprint effectively while maintaining strong, authentic local connections.",
  },
];

const DealerNetwork = () => {
  return (
    <section className="py-24 bg-gray-50/50 overflow-hidden font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-[#7c1dc1] font-bold tracking-wider uppercase text-xs mb-3 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-[#7c1dc1] rounded-full"></span>
                Strategic Expansion
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-[1.15] mb-6 tracking-tight">
                District-Wise Dealer <br className="hidden md:block" />
                Network Across India
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                Future Believe operates on a unique, hyper-local model. By assigning dedicated dealers to individual districts across the nation, we ensure smooth operations, unparalleled local support, and expansive reach.
              </p>
            </div>

            {/* Feature List */}
            <div className="space-y-4 pt-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 + 0.3 }}
                    className="flex gap-4 p-4 rounded-2xl hover:bg-white hover:shadow-lg transition-all border border-transparent hover:border-gray-100 group"
                  >
                    <div className="flex-shrink-0 mt-0.5">
                      <div className="w-12 h-12 bg-purple-100/50 group-hover:bg-[#612c7e] transition-colors rounded-xl flex items-center justify-center">
                        <Icon size={22} className="text-[#612c7e] group-hover:text-white transition-colors" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 mb-1">
                        {feature.title}
                      </h4>
                      <p className="text-gray-500 text-sm leading-relaxed pr-4">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="pt-6"
            >
              {/* <button className="bg-[#7c1dc1] hover:bg-[#6a18a5] text-white px-8 py-4 rounded-full font-bold text-sm flex items-center gap-2 group transition-all hover:shadow-xl hover:shadow-purple-500/30 active:scale-95">
                BECOME A DEALER TODAY
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button> */}
            </motion.div>
          </motion.div>

          {/* Right Side: Image (Uncropped) */}
          <motion.div 
            initial={{ opacity: 0, x: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative w-full max-w-xl mx-auto lg:max-w-none"
          >
            {/* Background Decorative Blob/Shadow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#7c1dc1]/20 to-pink-200/20 rounded-[2.5rem] transform rotate-3 scale-105 -z-10 transition-transform duration-700 hover:rotate-6" />
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100/50 bg-white">
              <img 
                src={networkImage} 
                alt="Future Believe Dealer Network Across India" 
                className="w-full h-auto object-contain block transform hover:scale-[1.02] transition-transform duration-700"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default DealerNetwork;