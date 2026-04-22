import React from 'react';
import { Target, Radio, Lock, BarChart3, Globe, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      id: '01',
      title: 'Launch Your Campaign',
      icon: Target,
      description: 'Sign up, upload your brand video, and select a promotion package tailored to your goals. Our platform prepares your content for high-performance distribution.',
    },
    {
      id: '02',
      title: 'Smart Distribution',
      icon: Radio,
      description: 'We push your video across the Future Believe network, reaching a highly active and targeted audience.',
      badges: ['Age', 'Gender', 'Location', 'Interests & keywords'],
      footer: 'Your brand reaches the people who matter most.',
    },
    {
      id: '03',
      title: 'Guaranteed Engagement',
      icon: Lock,
      description: 'Our platform is designed for complete viewer attention. Videos cannot be skipped, paused, or fast-forwarded—ensuring full exposure.',
      listItems: [
        'A real viewer watches at least 30 seconds',
        'Your content receives genuine engagement'
      ],
    },
    {
      id: '04',
      title: 'Real Results, Real-Time',
      icon: BarChart3,
      description: 'Track your campaign performance with live insights. Measure visibility, engagement, and audience response as your brand grows.',
    },
    {
      id: '05',
      title: 'Build Your Brand Presence',
      icon: Globe,
      description: 'Strengthen your brand identity and create a lasting digital footprint. With Future Believe, your content doesn’t just get views—it builds recognition and trust.',
    },
  ];  

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        ease: "easeOut" 
      } 
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
  };

  return (
    <section className="bg-gray-50 py-20 lg:py-28 font-sans text-gray-800 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-8">
        
        {/* Header Section */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 lg:mb-24 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={headerVariants}
        >
          {/* Ambient Background Glow - Updated with brand color */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-32 bg-[#612c7d]/10 blur-[80px] -z-10 rounded-full pointer-events-none"></div>

          {/* Kicker Badge - Updated with brand color */}
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 rounded-full bg-[#612c7d]/5 border border-[#612c7d]/10">
            <span className="text-sm font-bold tracking-[0.3em] text-[#612c7d]">
              HOW IT WORKS
            </span>
          </div>

          {/* Main Headline */}
          <h3 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 mb-6 tracking-tight leading-[1.15]">
            Break through the noise. <br className="hidden md:block" />
            Reach the{' '}
            <span className="text-[#612c7d]">
              right audience.
            </span>
          </h3>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-gray-500 leading-relaxed max-w-2xl mx-auto">
            In a world where thousands of brand videos are uploaded every minute, getting noticed is the real challenge.{' '}
            <span className="font-semibold text-gray-900">Future Believe</span>{' '}
            helps your brand create an impact.
          </p>
        </motion.div>

        {/* Steps Section */}
        <div className="relative">
          {/* Vertical Connecting Line - Updated with brand color */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="hidden md:block absolute left-8 top-8 bottom-8 w-0.5 bg-[#612c7d]/10"
          />

          <motion.div 
            className="space-y-12 md:space-y-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div 
                  key={step.id} 
                  variants={itemVariants}
                  className="relative flex flex-col md:flex-row gap-6 md:gap-10 items-start group"
                >
                  
                  {/* Icon & Step Number - Updated with brand color */}
                  <div className="flex-shrink-0 relative z-10 flex items-center md:flex-col gap-4 md:gap-2">
                    <div className="w-16 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-center text-[#612c7d] group-hover:bg-[#612c7d] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Icon size={28} strokeWidth={2} />
                    </div>
                    <span className="text-sm font-bold text-gray-400 md:w-full md:text-center">
                      STEP {step.id}
                    </span>
                  </div>

                  {/* Content Card - Updated with brand color hover */}
                  <div className="flex-1 bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#612c7d]/20 transition-all duration-300 transform group-hover:-translate-y-1">
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Step 2: Targeting Badges - Updated with brand color */}
                    {step.badges && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900 mb-3">Targeting options include:</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {step.badges.map((badge, i) => (
                            <span key={i} className="px-3 py-1 bg-[#612c7d]/5 text-[#612c7d] text-xs font-semibold rounded-full border border-[#612c7d]/10">
                              {badge}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm font-medium text-[#612c7d]">{step.footer}</p>
                      </div>
                    )}

                    {/* Step 3: List Items */}
                    {step.listItems && (
                      <div className="mt-5 bg-gray-50 rounded-xl p-5 border border-gray-100">
                        <p className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">
                          {step.listHeader}
                        </p>
                        <ul className="space-y-3">
                          {step.listItems.map((item, i) => (
                            <li key={i} className="flex items-start gap-3 text-gray-700">
                              <CheckCircle2 className="w-5 h-5 text-[#612c7d] flex-shrink-0 mt-0.5" />
                              <span className="text-sm md:text-base">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorks;